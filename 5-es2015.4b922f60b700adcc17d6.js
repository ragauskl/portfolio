(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{fLW6:function(t,e,n){!function(t){function e(t){function e(t,e,n){this.x=t,this.y=e,this.z=n}e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n},this.grad3=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}e.prototype.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=this.p,n=0;n<256;n++){var i,s=this.perm,o=this.gradP;s[n]=s[n+256]=i=1&n?e[n]^255&t:e[n]^t>>8&255,o[n]=o[n+256]=this.grad3[i%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6;function s(t){return t*t*t*(t*(6*t-15)+10)}function o(t,e,n){return(1-n)*t+n*e}e.prototype.simplex2=function(t,e){var s,o,l=(t+e)*n,a=Math.floor(t+l),h=Math.floor(e+l),r=(a+h)*i,c=t-a+r,d=e-h+r;c>d?(s=1,o=0):(s=0,o=1);var p=c-s+i,u=d-o+i,b=c-1+2*i,m=d-1+2*i,f=this.perm,g=this.gradP,v=g[(a&=255)+s+f[(h&=255)+o]],x=g[a+1+f[h+1]],w=.5-c*c-d*d,y=.5-p*p-u*u,k=.5-b*b-m*m;return 70*((w<0?0:(w*=w)*w*g[a+f[h]].dot2(c,d))+(y<0?0:(y*=y)*y*v.dot2(p,u))+(k<0?0:(k*=k)*k*x.dot2(b,m)))},e.prototype.simplex3=function(t,e,n){var i,s,o,l,a,h,r=(t+e+n)*(1/3),c=Math.floor(t+r),d=Math.floor(e+r),p=Math.floor(n+r),u=(c+d+p)*(1/6),b=t-c+u,m=e-d+u,f=n-p+u;b>=m?m>=f?(i=1,s=0,o=0,l=1,a=1,h=0):b>=f?(i=1,s=0,o=0,l=1,a=0,h=1):(i=0,s=0,o=1,l=1,a=0,h=1):m<f?(i=0,s=0,o=1,l=0,a=1,h=1):b<f?(i=0,s=1,o=0,l=0,a=1,h=1):(i=0,s=1,o=0,l=1,a=1,h=0);var g=b-i+1/6,v=m-s+1/6,x=f-o+1/6,w=b-l+1/6*2,y=m-a+1/6*2,k=f-h+1/6*2,M=b-1+.5,_=m-1+.5,C=f-1+.5,P=this.perm,S=this.gradP,O=S[(c&=255)+i+P[(d&=255)+s+P[(p&=255)+o]]],z=S[c+l+P[d+a+P[p+h]]],N=S[c+1+P[d+1+P[p+1]]],W=.5-b*b-m*m-f*f,j=.5-g*g-v*v-x*x,E=.5-w*w-y*y-k*k,G=.5-M*M-_*_-C*C;return 32*((W<0?0:(W*=W)*W*S[c+P[d+P[p]]].dot3(b,m,f))+(j<0?0:(j*=j)*j*O.dot3(g,v,x))+(E<0?0:(E*=E)*E*z.dot3(w,y,k))+(G<0?0:(G*=G)*G*N.dot3(M,_,C)))},e.prototype.perlin2=function(t,e){var n=Math.floor(t),i=Math.floor(e);t-=n,e-=i;var l=this.perm,a=this.gradP,h=a[(n&=255)+l[i&=255]].dot2(t,e),r=a[n+l[i+1]].dot2(t,e-1),c=a[n+1+l[i]].dot2(t-1,e),d=a[n+1+l[i+1]].dot2(t-1,e-1),p=s(t);return o(o(h,c,p),o(r,d,p),s(e))},e.prototype.perlin3=function(t,e,n){var i=Math.floor(t),l=Math.floor(e),a=Math.floor(n);t-=i,e-=l,n-=a;var h=this.perm,r=this.gradP,c=r[(i&=255)+h[(l&=255)+h[a&=255]]].dot3(t,e,n),d=r[i+h[l+h[a+1]]].dot3(t,e,n-1),p=r[i+h[l+1+h[a]]].dot3(t,e-1,n),u=r[i+h[l+1+h[a+1]]].dot3(t,e-1,n-1),b=r[i+1+h[l+h[a]]].dot3(t-1,e,n),m=r[i+1+h[l+h[a+1]]].dot3(t-1,e,n-1),f=r[i+1+h[l+1+h[a]]].dot3(t-1,e-1,n),g=r[i+1+h[l+1+h[a+1]]].dot3(t-1,e-1,n-1),v=s(t),x=s(e),w=s(n);return o(o(o(c,b,v),o(d,m,v),w),o(o(p,f,v),o(u,g,v),w),x)},t.Noise=e}(t.exports)},qNYQ:function(t,e,n){"use strict";n.r(e);var i=n("8Y7J");class s{}var o=n("pMnS"),l=n("fLW6"),a=n.n(l);const h=.005,r=5,c=.4,d=(t,e,n,i,s)=>(t-e)*(s-i)/(n-e)+i;function p(t){let e,n,i=t.length;for(;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}class u{constructor(t,e){this._http=t,this._el=e,this.devSkillGen=this.nextDevelopmentSkill(),this.opsSkillGen=this.nextDevopsSkill(),this.scaleGen=this.nextScale(),this.action={stop:!1}}onKeyUp(t){"Space"===t.code&&(this.action.stop=!0)}ngAfterViewInit(){this._http.get("assets/skills.json").subscribe(t=>{this.skills=t,this.loadBubbles()})}loadBubbles(){this.rectangleGen=this.nextRectangle(150,this._el.nativeElement.clientHeight/2,20,20);const t=[];for(t.push(this.rectangleGen.next().value);t[t.length-1].x<this._el.nativeElement.clientWidth;)t.push(this.rectangleGen.next(t[t.length-1]).value);const e=()=>{const n=.5*this._el.nativeElement.clientWidth;for(const e of t){e.noiseSeedX+=h,e.noiseSeedY+=h;const t=new a.a.Noise,i=t.simplex2(e.noiseSeedX,0),s=t.simplex2(e.noiseSeedY,0);e.x-=c,e.xWithNoise=e.x+i*r,e.yWithNoise=e.y+s*r,e.imageClipX=n-e.xWithNoise,e.transform()}const i=t[t.length-1];if(i.x+i.size/2+20<=this.bubbles.nativeElement.clientWidth+i.size){const e=this.rectangleGen.next(i).value;t.push(e),this.bubbles.nativeElement.appendChild(e.el)}const s=t[0];s.x<-s.size-20&&(t.splice(0,1),this.bubbles.nativeElement.removeChild(s.el)),this.action.stop||requestAnimationFrame(e)};for(const n of t)this.bubbles.nativeElement.appendChild(n.el);e()}*nextDevelopmentSkill(){let t=-1;for(;;)++t===this.skills.development.length&&(t=0),yield`assets/icons/skills/jpg/development/${this.skills.development[t].src}`}*nextDevopsSkill(){let t=-1;for(;;)++t===this.skills.devops.length&&(t=0),yield`assets/icons/skills/jpg/devops/${this.skills.devops[t].src}`}*nextScale(){const t=p([1,.9,.8,.7,.6,.5]),e=[];for(;;){const[n]=t.splice(0,1);e.push(n),t.length<=2&&t.push(...p(e.splice(0))),yield n}}*nextRectangle(t,e,n,i){let s=e+i;const o=()=>1===a||3===a?s>e?s:s-t:s>e?s-t:s;let l,a=1;for(let h=1;;h++){let r={x:void 0,y:void 0};r={x:(l?l.x+t/2:0)+n,y:o()};const c=new b(h,a,s>e?"p":"n",r.x,r.y,t,this.scaleGen.next().value,this.devSkillGen.next().value,this.opsSkillGen.next().value);l=yield c,++a>3&&(a=1,s=e+(s>e?-i:+i))}}}class b{constructor(t,e,n,i,s,o,l,a,h){this.i=t,this.step=e,this.offset=n,this.x=i,this.y=s,this.size=o,this.scale=l,this.imgLeft=a,this.imgRight=h,this.noiseSeedX=Math.floor(64e3*Math.random()),this.noiseSeedY=Math.floor(64e3*Math.random()),this.imageClipX=0,this.diameter=this.size*this.scale;const r=.05*this.size,c=.95*this.size-this.diameter,p=d(Math.random(),0,1,r,c);s+=d(Math.random(),0,1,r,c),this.xWithNoise=i+=p,this.yWithNoise=s,this.el=document.createElement("div"),this.el.className="bubble",this.el.style.width=this.el.style.height=`${this.diameter}px`;const u=document.createElement("img");u.src=a,u.className="back",this.backImage=u;const b=document.createElement("img");b.src=h,this.el.appendChild(b),this.el.appendChild(u),this.transform()}transform(){const t=100*Math.min(this.size,Math.max(0,this.imageClipX))/this.size;let e=t<40?0:t>60?180:d(t,40,60,0,540);this.el.style.transform=`translate(${this.xWithNoise}px, ${this.yWithNoise}px) rotateY(${e%=360}deg)`}}var m=n("IheW"),f=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{position:relative}.icon-panel[_ngcontent-%COMP%]{-webkit-filter:grayscale(1);filter:grayscale(1)}.icon-panel[_ngcontent-%COMP%], .text-panel[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%}.left-text[_ngcontent-%COMP%], .right-text[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:50%;font-size:50px;font-weight:700;color:#313238}.left-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .right-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:15%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;white-space:nowrap}.left-text[_ngcontent-%COMP%]{left:0;justify-content:flex-end}.right-text[_ngcontent-%COMP%]{left:50%;justify-content:flex-start}  .bubble{background:#fff;border-radius:50%;position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;box-shadow:0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.1)}@media screen and (max-width:calc(960px - 1px)){  .bubble{box-shadow:0 10px 27px rgba(0,0,0,.1),0 2px 8px rgba(0,0,0,.1)}}  .bubble img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;border-radius:50%}  .bubble img.back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}"]],data:{}});function g(t){return i.Bb(0,[i.yb(671088640,1,{bubbles:0}),(t()(),i.ob(1,0,[[1,0],["bubbles",1]],null,0,"div",[["class","icon-panel"]],null,null,null,null,null))],null,null)}const v=(()=>{class t{constructor(){this._theme="light",this._theme="dark"===localStorage.getItem("theme")?"dark":"light",this.updateTheme()}get isDark(){return"dark"===this._theme}switchTheme(){this._theme="light"===this._theme?"dark":"light",this.updateTheme()}updateTheme(){document.body.className="dark"===this._theme?"dark-theme":"",localStorage.setItem("theme",this._theme)}}return t.ngInjectableDef=i.Db({factory:function(){return new t},token:t,providedIn:"root"}),t})();class x{constructor(t){this.theme=t}}var w=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100vh;width:calc(100vw - 64px);overflow-y:auto}@media screen and (max-width:calc(960px - 1px)){[_nghost-%COMP%]{width:100vw;height:calc(100vh - 64px)}}.section[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;display:block;box-sizing:border-box}"]],data:{}});function y(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-intro",[["class","section"]],null,[["window","keyup"]],function(t,e,n){var s=!0;return"window:keyup"===e&&(s=!1!==i.xb(t,1).onKeyUp(n)&&s),s},g,f)),i.nb(1,4243456,null,0,u,[m.c,i.k],null,null)],null,null)}function k(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-home",[],null,null,null,y,w)),i.nb(1,49152,null,0,x,[v],null,null)],null,null)}var M=i.kb("app-home",x,k,{},{},[]),_=n("SVse"),C=n("POq0"),P=n("cUpR"),S=n("Xd0L"),O=n("iInd");class z{}var N=n("IP0z"),W=n("/HVE"),j=n("Fwaw"),E=n("pBi1"),G=n("Gi4r"),I=n("HkZ/"),Y=n("pKmL");n.d(e,"HomeModuleNgFactory",function(){return q});var q=i.lb(s,[],function(t){return i.ub([i.vb(512,i.j,i.Y,[[8,[o.a,M]],[3,i.j],i.v]),i.vb(4608,_.j,_.i,[i.s,[2,_.q]]),i.vb(4608,C.a,C.a,[]),i.vb(4608,P.e,S.a,[[2,S.c],[2,S.e]]),i.vb(1073742336,_.b,_.b,[]),i.vb(1073742336,O.l,O.l,[[2,O.q],[2,O.k]]),i.vb(1073742336,z,z,[]),i.vb(1073742336,N.a,N.a,[]),i.vb(1073742336,S.e,S.e,[[2,S.b],[2,P.f]]),i.vb(1073742336,W.b,W.b,[]),i.vb(1073742336,S.g,S.g,[]),i.vb(1073742336,j.c,j.c,[]),i.vb(1073742336,C.b,C.b,[]),i.vb(1073742336,E.a,E.a,[]),i.vb(1073742336,G.c,G.c,[]),i.vb(1073742336,I.a,I.a,[]),i.vb(1073742336,Y.a,Y.a,[]),i.vb(1073742336,s,s,[]),i.vb(1024,O.i,function(){return[[{path:"",component:x}]]},[])])})}}]);