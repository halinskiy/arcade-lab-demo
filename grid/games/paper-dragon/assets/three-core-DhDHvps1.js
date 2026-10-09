import{$ as e,$t as t,A as n,At as r,B as i,Bt as a,C as o,Ct as s,D as c,Dt as l,E as u,Et as d,F as f,Ft as p,Gt as m,Ht as h,I as g,It as _,Jt as v,Kt as y,L as b,Lt as x,M as S,Mt as C,N as w,Nt as ee,Ot as T,P as E,Pt as te,Q as ne,Qt as re,R as D,Rt as ie,S as ae,St as oe,Tt as se,U as ce,Ut as le,Vt as ue,Wt as de,X as fe,Xt as pe,Yt as me,Zt as he,_ as O,_n as ge,an as _e,at as ve,b as ye,bt as be,ct as xe,dn as Se,en as Ce,et as we,fn as Te,ft as Ee,g as De,gn as Oe,h as ke,hn as Ae,ht as k,i as je,in as Me,j as Ne,jt as Pe,k as A,kt as Fe,lt as j,m as Ie,mn as Le,nn as Re,nt as ze,o as M,on as Be,q as Ve,qt as He,s as Ue,sn as We,st as Ge,tn as Ke,tt as qe,un as Je,vn as Ye,vt as Xe,wt as Ze,x as N,xt as Qe,y as $e,yt as et,zt as tt}from"./three-addons-BEhXuyHL.js";var nt=class extends ce{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:j,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new w(0,0,e,t),this.scissorTest=!1,this.viewport=new w(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},i=new E(r),a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:j,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new f(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},rt=class extends nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},it=class extends E{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=k,this.minFilter=k,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},at=class extends E{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=k,this.minFilter=k,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ot=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new c(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},st=class extends A{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ct=class extends O{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new c(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},P,F=new D,I=new D,L=new D,R=new i,z=new i,lt=new S,B=new D,V=new D,H=new D,ut=new i,dt=new i,ft=new i,pt=class extends A{constructor(e=new ct){if(super(),this.isSprite=!0,this.type=`Sprite`,P===void 0){P=new N;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new ye(e,5);P.setIndex([0,1,2,0,2,3]),P.setAttribute(`position`,new $e(t,3,0,!1)),P.setAttribute(`uv`,new $e(t,2,3,!1))}this.geometry=P,this.material=e,this.center=new i(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),I.setFromMatrixScale(this.matrixWorld),lt.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),L.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&I.multiplyScalar(-L.z);let n=this.material.rotation,r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));let o=this.center;U(B.set(-.5,-.5,0),L,o,I,r,a),U(V.set(.5,-.5,0),L,o,I,r,a),U(H.set(.5,.5,0),L,o,I,r,a),ut.set(0,0),dt.set(1,0),ft.set(1,1);let s=e.ray.intersectTriangle(B,V,H,!1,F);if(s===null&&(U(V.set(-.5,.5,0),L,o,I,r,a),dt.set(0,1),s=e.ray.intersectTriangle(B,H,V,!1,F),s===null))return;let c=e.ray.origin.distanceTo(F);c<e.near||c>e.far||t.push({distance:c,point:F.clone(),uv:u.getInterpolation(F,B,V,H,ut,dt,ft,new i),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function U(e,t,n,r,i,a){R.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?z.copy(R):(z.x=a*R.x-i*R.y,z.y=i*R.x+a*R.y),e.copy(t),e.x+=z.x,e.y+=z.y,e.applyMatrix4(lt)}var mt=class extends E{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ht=class extends E{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gt=class extends E{constructor(e,t,n=Ae,r,i,a,o=k,s=k,c,l=ze,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_t=class extends gt{constructor(e,t=Ae,n=301,r,i,a=k,o=k,s,c=ze){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vt=class extends E{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yt=class e extends N{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let s=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,p=0;m(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),m(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),m(`x`,`z`,`y`,1,1,e,n,t,r,a,2),m(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),m(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),m(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(c),this.setAttribute(`position`,new o(l,3)),this.setAttribute(`normal`,new o(u,3)),this.setAttribute(`uv`,new o(d,2));function m(e,t,n,r,i,a,o,m,h,g,_){let v=a/h,y=o/g,b=a/2,x=o/2,S=m/2,C=h+1,w=g+1,ee=0,T=0,E=new D;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)E[e]=(s*v-b)*r,E[t]=o*i,E[n]=S,l.push(E.x,E.y,E.z),E[e]=0,E[t]=0,E[n]=m>0?1:-1,u.push(E.x,E.y,E.z),d.push(s/h),d.push(1-a/g),ee+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=f+t+C*e,r=f+t+C*(e+1),i=f+(t+1)+C*(e+1),a=f+(t+1)+C*e;c.push(n,r,a),c.push(r,i,a),T+=6}s.addGroup(p,T,_),p+=T,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bt=class e extends N{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,c=0,l=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:c,thetaLength:l};let u=this;r=Math.floor(r),a=Math.floor(a);let d=[],f=[],p=[],m=[],h=0,g=[],_=n/2,v=0;y(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute(`position`,new o(f,3)),this.setAttribute(`normal`,new o(p,3)),this.setAttribute(`uv`,new o(m,2));function y(){let i=new D,o=new D,s=0,y=(t-e)/n;for(let s=0;s<=a;s++){let u=[],d=s/a,v=d*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,a=t*l+c,s=Math.sin(a),g=Math.cos(a);o.x=v*s,o.y=-d*n+_,o.z=v*g,f.push(o.x,o.y,o.z),i.set(s,y,g).normalize(),p.push(i.x,i.y,i.z),m.push(t,1-d),u.push(h++)}g.push(u)}for(let n=0;n<r;n++)for(let r=0;r<a;r++){let i=g[r][n],o=g[r+1][n],c=g[r+1][n+1],l=g[r][n+1];(e>0||r!==0)&&(d.push(i,o,l),s+=3),(t>0||r!==a-1)&&(d.push(o,c,l),s+=3)}u.addGroup(v,s,0),v+=s}function b(n){let a=h,o=new i,s=new D,g=0,y=n===!0?e:t,b=n===!0?1:-1;for(let e=1;e<=r;e++)f.push(0,_*b,0),p.push(0,b,0),m.push(.5,.5),h++;let x=h;for(let e=0;e<=r;e++){let t=e/r*l+c,n=Math.cos(t),i=Math.sin(t);s.x=y*i,s.y=_*b,s.z=y*n,f.push(s.x,s.y,s.z),p.push(0,b,0),o.x=n*.5+.5,o.y=i*.5*b+.5,m.push(o.x,o.y),h++}for(let e=0;e<r;e++){let t=a+e,r=x+e;n===!0?d.push(r,r+1,t):d.push(r+1,r,t),g+=3}u.addGroup(v,g,n===!0?1:2),v+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xt=class e extends bt{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},St=class e extends N{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let a=[],s=[];c(r),u(n),d(),this.setAttribute(`position`,new o(a,3)),this.setAttribute(`normal`,new o(a.slice(),3)),this.setAttribute(`uv`,new o(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(e){let n=new D,r=new D,i=new D;for(let a=0;a<t.length;a+=3)m(t[a+0],n),m(t[a+1],r),m(t[a+2],i),l(n,r,i,e)}function l(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(p(a[e][n+1]),p(a[e+1][n]),p(a[e][n])):(p(a[e][n+1]),p(a[e+1][n+1]),p(a[e+1][n]))}}function u(e){let t=new D;for(let n=0;n<a.length;n+=3)t.x=a[n+0],t.y=a[n+1],t.z=a[n+2],t.normalize().multiplyScalar(e),a[n+0]=t.x,a[n+1]=t.y,a[n+2]=t.z}function d(){let e=new D;for(let t=0;t<a.length;t+=3){e.x=a[t+0],e.y=a[t+1],e.z=a[t+2];let n=_(e)/2/Math.PI+.5,r=v(e)/Math.PI+.5;s.push(n,1-r)}h(),f()}function f(){for(let e=0;e<s.length;e+=6){let t=s[e+0],n=s[e+2],r=s[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(s[e+0]+=1),n<.2&&(s[e+2]+=1),r<.2&&(s[e+4]+=1))}}function p(e){a.push(e.x,e.y,e.z)}function m(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function h(){let e=new D,t=new D,n=new D,r=new D,o=new i,c=new i,l=new i;for(let i=0,u=0;i<a.length;i+=9,u+=6){e.set(a[i+0],a[i+1],a[i+2]),t.set(a[i+3],a[i+4],a[i+5]),n.set(a[i+6],a[i+7],a[i+8]),o.set(s[u+0],s[u+1]),c.set(s[u+2],s[u+3]),l.set(s[u+4],s[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=_(r);g(o,u+0,e,d),g(c,u+2,t,d),g(l,u+4,n,d)}}function g(e,t,n,r){r<0&&e.x===1&&(s[t]=e.x-1),n.x===0&&n.z===0&&(s[t]=r/2/Math.PI+.5)}function _(e){return Math.atan2(e.z,-e.x)}function v(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ct=class e extends St{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wt=class e extends N{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,u=c+1,d=e/s,f=t/c,p=[],m=[],h=[],g=[];for(let e=0;e<u;e++){let t=e*f-a;for(let n=0;n<l;n++){let r=n*d-i;m.push(r,-t,0),h.push(0,0,1),g.push(n/s),g.push(1-e/c)}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=t+l*e,r=t+l*(e+1),i=t+1+l*(e+1),a=t+1+l*e;p.push(n,r,a),p.push(r,i,a)}this.setIndex(p),this.setAttribute(`position`,new o(m,3)),this.setAttribute(`normal`,new o(h,3)),this.setAttribute(`uv`,new o(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Tt=class e extends N{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,s=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+s,Math.PI),l=0,u=[],d=new D,f=new D,p=[],m=[],h=[],g=[];for(let o=0;o<=n;o++){let p=[],_=o/n,v=a+_*s,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;o===0&&a===0?x=.5/t:o===n&&c===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;d.x=-b*Math.cos(a),d.y=y,d.z=b*Math.sin(a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),g.push(n+x,1-_),p.push(l++)}u.push(p)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=u[e][r+1],i=u[e][r],o=u[e+1][r],s=u[e+1][r+1];(e!==0||a>0)&&p.push(t,i,s),(e!==n-1||c<Math.PI)&&p.push(i,o,s)}this.setIndex(p),this.setAttribute(`position`,new o(m,3)),this.setAttribute(`normal`,new o(h,3)),this.setAttribute(`uv`,new o(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function W(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Dt(i))i.isRenderTargetTexture?(fe(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Dt(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Et(e){let t={};for(let n=0;n<e.length;n++){let r=W(e[n]);for(let e in r)t[e]=r[e]}return t}function Dt(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ot(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function kt(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:g.workingColorSpace}var At={clone:W,merge:Et},jt=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Mt=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`,G=class extends O{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jt,this.fragmentShader=Mt,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=W(e.uniforms),this.uniformsGroups=Ot(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new c().setHex(r.value);break;case`v2`:this.uniforms[n].value=new i().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new D().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new w().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new b().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new S().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nt=class extends G{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Pt=class extends O{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=e,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ft=class extends O{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},It=class extends Ue{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(A.DEFAULT_UP),this.updateMatrix(),this.groundColor=new c(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},K=-90,q=1,Lt=class extends A{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new M(K,q,e,t);r.layers=this.layers,this.add(r);let i=new M(K,q,e,t);i.layers=this.layers,this.add(i);let a=new M(K,q,e,t);a.layers=this.layers,this.add(a);let o=new M(K,q,e,t);o.layers=this.layers,this.add(o);let s=new M(K,q,e,t);s.layers=this.layers,this.add(s);let c=new M(K,q,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rt=class extends M{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zt=new S,Bt=class{constructor(e,t,r=0,i=1/0){this.ray=new De(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return zt.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zt),this}intersectObject(e,t=!0,n=[]){return Ht(e,this,n,t),n.sort(Vt),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ht(e[r],this,n,t);return n.sort(Vt),n}};function Vt(e,t){return e.distance-t.distance}function Ht(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ht(r[e],t,n,!0)}}function Ut(e,n,i,o){let c=Wt(o);switch(i){case ne:return e*n;case Ke:return e*n/c.components*c.byteLength;case Re:return e*n/c.components*c.byteLength;case t:return e*n*2/c.components*c.byteLength;case Ce:return e*n*2/c.components*c.byteLength;case m:return e*n*3/c.components*c.byteLength;case oe:return e*n*4/c.components*c.byteLength;case s:return e*n*4/c.components*c.byteLength;case re:case h:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*8;case le:case de:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case pe:case a:return Math.max(e,16)*Math.max(n,8)/4;case he:case ue:return Math.max(e,8)*Math.max(n,8)/2;case v:case me:case Xe:case Me:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*8;case tt:case Qe:case We:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case r:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case Pe:return Math.floor((e+4)/5)*Math.floor((n+3)/4)*16;case C:return Math.floor((e+4)/5)*Math.floor((n+4)/5)*16;case ee:return Math.floor((e+5)/6)*Math.floor((n+4)/5)*16;case te:return Math.floor((e+5)/6)*Math.floor((n+5)/6)*16;case p:return Math.floor((e+7)/8)*Math.floor((n+4)/5)*16;case _:return Math.floor((e+7)/8)*Math.floor((n+5)/6)*16;case x:return Math.floor((e+7)/8)*Math.floor((n+7)/8)*16;case se:return Math.floor((e+9)/10)*Math.floor((n+4)/5)*16;case d:return Math.floor((e+9)/10)*Math.floor((n+5)/6)*16;case l:return Math.floor((e+9)/10)*Math.floor((n+7)/8)*16;case Ze:return Math.floor((e+9)/10)*Math.floor((n+9)/10)*16;case T:return Math.floor((e+11)/12)*Math.floor((n+9)/10)*16;case Fe:return Math.floor((e+11)/12)*Math.floor((n+11)/12)*16;case ie:case y:case He:return Math.ceil(e/4)*Math.ceil(n/4)*16;case be:case Be:return Math.ceil(e/4)*Math.ceil(n/4)*8;case et:case _e:return Math.ceil(e/4)*Math.ceil(n/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Wt(e){switch(e){case Se:case we:return{byteLength:1,components:1};case Ye:case Je:case Ge:return{byteLength:2,components:1};case Oe:case ge:return{byteLength:2,components:4};case Ae:case xe:case ve:return{byteLength:4,components:1};case Le:case Te:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var J=4,Gt=6,Kt=20,qt=256,Y=new je,Jt=new c,Yt=null,Xt=0,X=0,Zt=!1,Qt=new D,Z=new D,$t=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qt}=i;Yt=this._renderer.getRenderTarget(),Xt=this._renderer.getActiveCubeFace(),X=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=on(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=an(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yt,Xt,X),this._renderer.xr.enabled=Zt,e.scissorTest=!1,Q(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yt=this._renderer.getRenderTarget(),Xt=this._renderer.getActiveCubeFace(),X=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:j,minFilter:j,generateMipmaps:!1,type:Ge,format:oe,colorSpace:Ee,depthBuffer:!1},r=tn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=en(r)),this._blurMaterial=rn(r,e,t),this._ggxMaterial=nn(r,e,t)}return r}_compileMaterial(e){let t=new Ie(new N,e);this._renderer.compile(t,Y)}_sceneToCubeUV(e,t,n,r,i){let a=new M(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Jt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new yt,new ke({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Jt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Q(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=on()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=an());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Q(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Y)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-J?n-d+J:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Q(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Y),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Q(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Y)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Q(t,3*l*(r>this._lodMax-J?r-this._lodMax+J:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Y)}};function en(e){let t=[],n=[],r=e,i=e-J+1+Gt;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Z.set(1,r,n):e===1?Z.set(-n,1,-r):e===2?Z.set(-n,r,1):e===3?Z.set(-1,r,-n):e===4?Z.set(-n,-1,r):Z.set(n,r,-1),Z.toArray(l,(e*6+t)*3)}}let u=new N;u.setAttribute(`position`,new ae(c,3)),u.setAttribute(`outputDirection`,new ae(l,3)),n.push(new Ie(u,null)),r>J&&r--}return{lodMeshes:n,sizeLods:t}}function tn(e,t,n){let r=new rt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Q(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function nn(e,t,n){return new G({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:qt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			 
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10;  
			}

			 
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			 
			 
			 
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				 
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				 
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				 
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				 
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N;  

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				 
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				 
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					 
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					 
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						 
						 
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						 
						 
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rn(e,t,n){return new G({name:`SphericalGaussianBlur`,defines:{SAMPLES:Kt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				 
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					 
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					 
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function an(){return new G({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function on(){return new G({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}export{it as A,ht as C,st as D,ct as E,ot as O,gt as S,pt as T,Ct as _,Lt as a,vt as b,Pt as c,At as d,W as f,wt as g,Tt as h,Rt as i,rt as j,at as k,Nt as l,Et as m,Ut as n,It as o,kt as p,Bt as r,Ft as s,$t as t,G as u,xt as v,mt as w,_t as x,yt as y};