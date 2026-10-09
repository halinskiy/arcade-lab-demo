/*
 * ytgame-dev.js: development host mock of the YouTube Playables SDK.
 *
 * Injected by the demo build between the real SDK script tag and the game code.
 * It mirrors the public `ytgame` surface and, like the real SDK inside YouTube,
 * talks to the parent frame with postMessage. When opened without a parent the
 * mock keeps state in memory. This file never ships in dist/playables.
 *
 * It is a test host, not the platform: nothing here is cloud storage or certification.
 */
(function () {
  'use strict';
  if (window.ytgame && window.ytgame.IN_PLAYABLES_ENV === true && !window.ytgame.__devHost) {
    // Real platform present (should not happen in the demo build); leave it alone.
    return;
  }

  var CHANNEL = 'ytgame-dev';
  var hasParent = window.parent && window.parent !== window;
  var origin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '*';
  var nextId = 1;
  var pending = {};
  var listeners = { pause: [], resume: [], audio: [] };
  var state = { audioEnabled: true, language: 'en', save: '' };
  var startedAt = performance.now();

  var SdkErrorType = { UNKNOWN: 0, API_UNAVAILABLE: 1, INVALID_PARAMS: 2, SIZE_LIMIT_EXCEEDED: 3 };

  function SdkError(type, message) {
    var e = new Error(message || 'SdkError');
    e.name = 'SdkError';
    e.errorType = type;
    return e;
  }

  function send(msg) {
    if (!hasParent) return;
    msg.channel = CHANNEL;
    msg.t = Math.round(performance.now() - startedAt);
    try {
      window.parent.postMessage(msg, origin);
    } catch (err) {
      /* host unreachable */
    }
  }

  function call(name, args) {
    return new Promise(function (resolve, reject) {
      if (!hasParent) {
        resolve(localCall(name, args));
        return;
      }
      var id = nextId++;
      pending[id] = { resolve: resolve, reject: reject };
      send({ type: 'call', id: id, name: name, args: args || [] });
      setTimeout(function () {
        if (pending[id]) {
          delete pending[id];
          reject(SdkError(SdkErrorType.API_UNAVAILABLE, 'dev-host did not answer ' + name));
        }
      }, 5000);
    });
  }

  function localCall(name, args) {
    switch (name) {
      case 'loadData':
        return state.save;
      case 'saveData':
        state.save = args[0];
        return undefined;
      case 'getLanguage':
        return state.language;
      default:
        return undefined;
    }
  }

  function notify(name, args) {
    send({ type: 'notify', name: name, args: args || [] });
  }

  function fire(kind, value) {
    var list = listeners[kind].slice();
    for (var i = 0; i < list.length; i++) {
      try {
        list[i](value);
      } catch (err) {
        /* listener errors must not break the host */
      }
    }
  }

  function subscribe(kind, cb) {
    if (typeof cb !== 'function') return function () {};
    listeners[kind].push(cb);
    return function () {
      var idx = listeners[kind].indexOf(cb);
      if (idx >= 0) listeners[kind].splice(idx, 1);
    };
  }

  window.addEventListener('message', function (ev) {
    var msg = ev.data;
    if (!msg || msg.channel !== CHANNEL) return;
    if (origin !== '*' && ev.origin !== origin) return;
    if (msg.type === 'reply') {
      var p = pending[msg.id];
      if (!p) return;
      delete pending[msg.id];
      if (msg.ok) p.resolve(msg.value);
      else p.reject(SdkError(msg.errorType || SdkErrorType.UNKNOWN, msg.error || 'rejected by dev-host'));
      return;
    }
    if (msg.type === 'event') {
      if (msg.name === 'pause') fire('pause');
      else if (msg.name === 'resume') fire('resume');
      else if (msg.name === 'audio') {
        var en = !!msg.value;
        if (en !== state.audioEnabled) {
          state.audioEnabled = en;
          fire('audio', en);
        }
      } else if (msg.name === 'language') {
        state.language = String(msg.value || 'en');
      } else if (msg.name === 'init') {
        if (typeof msg.value.audioEnabled === 'boolean') state.audioEnabled = msg.value.audioEnabled;
        if (msg.value.language) state.language = String(msg.value.language);
      }
    }
  });

  window.ytgame = {
    IN_PLAYABLES_ENV: true,
    SDK_VERSION: 'dev-host-0.1.0',
    __devHost: true,
    SdkErrorType: SdkErrorType,
    SdkError: SdkError,
    ads: {
      requestInterstitialAd: function () {
        notify('requestInterstitialAd');
        return Promise.reject(SdkError(SdkErrorType.API_UNAVAILABLE, 'ads are not available in dev-host'));
      },
      requestRewardedAd: function (rewardId) {
        notify('requestRewardedAd', [rewardId]);
        return Promise.reject(SdkError(SdkErrorType.API_UNAVAILABLE, 'ads are not available in dev-host'));
      },
    },
    engagement: {
      ContentType: { PLAYABLE: 'PLAYABLE', VIDEO: 'VIDEO' },
      openYTContent: function () {
        notify('openYTContent');
        return Promise.reject(SdkError(SdkErrorType.API_UNAVAILABLE, 'not available in dev-host'));
      },
      sendScore: function (score) {
        if (!score || typeof score.value !== 'number' || !Number.isSafeInteger(score.value)) {
          return Promise.reject(SdkError(SdkErrorType.INVALID_PARAMS, 'score.value must be a safe integer'));
        }
        return call('sendScore', [score.value]);
      },
    },
    game: {
      firstFrameReady: function () {
        notify('firstFrameReady');
      },
      gameReady: function () {
        notify('gameReady');
      },
      loadData: function () {
        return call('loadData', []);
      },
      saveData: function (data) {
        if (typeof data !== 'string') {
          return Promise.reject(SdkError(SdkErrorType.INVALID_PARAMS, 'saveData expects a string'));
        }
        if (data.length * 2 > 3 * 1024 * 1024) {
          return Promise.reject(SdkError(SdkErrorType.SIZE_LIMIT_EXCEEDED, 'save exceeds 3 MiB'));
        }
        return call('saveData', [data]);
      },
    },
    health: {
      logError: function () {
        notify('logError');
      },
      logWarning: function () {
        notify('logWarning');
      },
    },
    system: {
      getLanguage: function () {
        return call('getLanguage', []);
      },
      isAudioEnabled: function () {
        return state.audioEnabled;
      },
      onAudioEnabledChange: function (cb) {
        return subscribe('audio', cb);
      },
      onPause: function (cb) {
        return subscribe('pause', cb);
      },
      onResume: function (cb) {
        return subscribe('resume', cb);
      },
    },
  };

  send({ type: 'hello', href: window.location.href });
})();
