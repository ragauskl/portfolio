(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{fLW6:function(t,e,n){!function(t){function e(t){function e(t,e,n){this.x=t,this.y=e,this.z=n}e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n},this.grad3=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}e.prototype.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=this.p,n=0;n<256;n++){var i,o=this.perm,s=this.gradP;o[n]=o[n+256]=i=1&n?e[n]^255&t:e[n]^t>>8&255,s[n]=s[n+256]=this.grad3[i%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6;function o(t){return t*t*t*(t*(6*t-15)+10)}function s(t,e,n){return(1-n)*t+n*e}e.prototype.simplex2=function(t,e){var o,s,l=(t+e)*n,h=Math.floor(t+l),r=Math.floor(e+l),a=(h+r)*i,c=t-h+a,d=e-r+a;c>d?(o=1,s=0):(o=0,s=1);var u=c-o+i,p=d-s+i,b=c-1+2*i,m=d-1+2*i,f=this.perm,v=this.gradP,g=v[(h&=255)+o+f[(r&=255)+s]],x=v[h+1+f[r+1]],w=.5-c*c-d*d,y=.5-u*u-p*p,M=.5-b*b-m*m;return 70*((w<0?0:(w*=w)*w*v[h+f[r]].dot2(c,d))+(y<0?0:(y*=y)*y*g.dot2(u,p))+(M<0?0:(M*=M)*M*x.dot2(b,m)))},e.prototype.simplex3=function(t,e,n){var i,o,s,l,h,r,a=(t+e+n)*(1/3),c=Math.floor(t+a),d=Math.floor(e+a),u=Math.floor(n+a),p=(c+d+u)*(1/6),b=t-c+p,m=e-d+p,f=n-u+p;b>=m?m>=f?(i=1,o=0,s=0,l=1,h=1,r=0):b>=f?(i=1,o=0,s=0,l=1,h=0,r=1):(i=0,o=0,s=1,l=1,h=0,r=1):m<f?(i=0,o=0,s=1,l=0,h=1,r=1):b<f?(i=0,o=1,s=0,l=0,h=1,r=1):(i=0,o=1,s=0,l=1,h=1,r=0);var v=b-i+1/6,g=m-o+1/6,x=f-s+1/6,w=b-l+1/6*2,y=m-h+1/6*2,M=f-r+1/6*2,k=b-1+.5,W=m-1+.5,_=f-1+.5,P=this.perm,N=this.gradP,E=N[(c&=255)+i+P[(d&=255)+o+P[(u&=255)+s]]],S=N[c+l+P[d+h+P[u+r]]],L=N[c+1+P[d+1+P[u+1]]],j=.5-b*b-m*m-f*f,z=.5-v*v-g*g-x*x,I=.5-w*w-y*y-M*M,q=.5-k*k-W*W-_*_;return 32*((j<0?0:(j*=j)*j*N[c+P[d+P[u]]].dot3(b,m,f))+(z<0?0:(z*=z)*z*E.dot3(v,g,x))+(I<0?0:(I*=I)*I*S.dot3(w,y,M))+(q<0?0:(q*=q)*q*L.dot3(k,W,_)))},e.prototype.perlin2=function(t,e){var n=Math.floor(t),i=Math.floor(e);t-=n,e-=i;var l=this.perm,h=this.gradP,r=h[(n&=255)+l[i&=255]].dot2(t,e),a=h[n+l[i+1]].dot2(t,e-1),c=h[n+1+l[i]].dot2(t-1,e),d=h[n+1+l[i+1]].dot2(t-1,e-1),u=o(t);return s(s(r,c,u),s(a,d,u),o(e))},e.prototype.perlin3=function(t,e,n){var i=Math.floor(t),l=Math.floor(e),h=Math.floor(n);t-=i,e-=l,n-=h;var r=this.perm,a=this.gradP,c=a[(i&=255)+r[(l&=255)+r[h&=255]]].dot3(t,e,n),d=a[i+r[l+r[h+1]]].dot3(t,e,n-1),u=a[i+r[l+1+r[h]]].dot3(t,e-1,n),p=a[i+r[l+1+r[h+1]]].dot3(t,e-1,n-1),b=a[i+1+r[l+r[h]]].dot3(t-1,e,n),m=a[i+1+r[l+r[h+1]]].dot3(t-1,e,n-1),f=a[i+1+r[l+1+r[h]]].dot3(t-1,e-1,n),v=a[i+1+r[l+1+r[h+1]]].dot3(t-1,e-1,n-1),g=o(t),x=o(e),w=o(n);return s(s(s(c,b,g),s(d,m,g),w),s(s(u,f,g),s(p,v,g),w),x)},t.Noise=e}(t.exports)},qNYQ:function(t,e,n){"use strict";n.r(e);var i=n("8Y7J");class o{}var s=n("pMnS"),l=n("fLW6"),h=n.n(l);class r{constructor(t){this._http=t,this.action={stop:!1}}onKeyUp(t){"Space"===t.code&&(this.action.stop=!0)}ngAfterViewInit(){this._http.get("assets/skills.json").subscribe(t=>{const e=Math.max(t.development.length,t.devops.length),n=this.createRectangles(150,0,this.bubblesLeft.nativeElement.clientHeight/2,20,20,e),i=()=>{n.forEach(t=>t.update()),this.action.stop||requestAnimationFrame(i)};let o=0;for(const s of n){const e=document.createElement("img");e.src=`assets/icons/skills/jpg/development/${t.development[o].src}`,s.el.appendChild(e),this.bubblesLeft.nativeElement.appendChild(s.el),++o===t.development.length&&(o=0)}i()})}createRectangles(t,e,n,i,o,s){const l=this.bubblesLeft.nativeElement.clientWidth;let h,r=n+o,c=e+t;const d=[],u=function(t){let e,n,i=t.length;for(;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}([1,.9,.8,.7,.6,.5]),p=[],m=()=>i*d.length,f=()=>{const[t]=u.splice(0,1);return p.push(t),f.length<=2&&u.push(...p.splice(0)),t};let v=1;for(let g=1;;g++){console.log("i:",g);let e={x:void 0,y:void 0};if(1===v?e={x:c-t+m(),y:r>n?r:r-t}:2===v?e={x:c-t/2+m(),y:r>n?r-t:r}:3===v&&(e={x:c+m(),y:r>n?r:r-t}),d.push(new b(d.length,e.x,e.y,t,f())),a=h=e.x+t,h>=l&&g>=s&&(r>n?2===v:3===v))break;++v>3&&(v=1,c+=1.5*t,r=n+(r>n?-o:+o))}return d}}let a=0;const c=.005,d=5,u=.4,p=(t,e,n,i,o)=>(t-e)*(o-i)/(n-e)+i;class b{constructor(t,e,n,i,o){this.i=t,this.x=e,this.y=n,this.size=i,this.scale=o,this.noiseSeedX=Math.floor(64e3*Math.random()),this.noiseSeedY=Math.floor(64e3*Math.random());const s=this.size*this.scale,l=.05*this.size,h=.95*this.size-s,r=p(Math.random(),0,1,l,h);n+=p(Math.random(),0,1,l,h),this.xWithNoise=e+=r,this.yWithNoise=n,this.el=document.createElement("div"),this.el.className="bubble",this.el.style.position="absolute",this.el.style.width=this.el.style.height=`${s}px`,this.Transform()}Transform(){this.el.style.transform=`translate(${this.xWithNoise}px, ${this.yWithNoise}px)`}update(){this.noiseSeedX+=c,this.noiseSeedY+=c;const t=new h.a.Noise,e=t.simplex2(this.noiseSeedX,0),n=t.simplex2(this.noiseSeedY,0);this.x-=u,this.xWithNoise=this.x+e*d,this.yWithNoise=this.y+n*d,console.log(":",a,this.el.parentElement.clientWidth,this.el.parentElement.clientWidth-a+65),this.x<this.el.parentElement.clientWidth-a+65&&(this.x=this.el.parentElement.clientWidth),this.Transform()}}var m=n("IheW"),f=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{padding:20px}.icon-panel[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}  .bubble{background:#fff;border-radius:50%;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.1)}@media screen and (max-width:calc(960px - 1px)){  .bubble{box-shadow:0 10px 27px rgba(0,0,0,.1),0 2px 8px rgba(0,0,0,.1)}}  .bubble img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}"]],data:{}});function v(t){return i.Bb(0,[i.yb(671088640,1,{bubblesLeft:0}),(t()(),i.ob(1,0,[[1,0],["bubblesLeft",1]],null,0,"div",[["class","icon-panel"]],null,null,null,null,null))],null,null)}const g=(()=>{class t{constructor(){this._theme="light",this._theme="dark"===localStorage.getItem("theme")?"dark":"light",this.updateTheme()}get isDark(){return"dark"===this._theme}switchTheme(){this._theme="light"===this._theme?"dark":"light",this.updateTheme()}updateTheme(){document.body.className="dark"===this._theme?"dark-theme":"",localStorage.setItem("theme",this._theme)}}return t.ngInjectableDef=i.Db({factory:function(){return new t},token:t,providedIn:"root"}),t})();class x{constructor(t){this.theme=t}}var w=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100vh;width:calc(100vw - 64px);overflow-y:auto}@media screen and (max-width:calc(960px - 1px)){[_nghost-%COMP%]{width:100vw;height:calc(100vh - 64px)}}.section[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;display:block;box-sizing:border-box}"]],data:{}});function y(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-intro",[["class","section"]],null,[["window","keyup"]],function(t,e,n){var o=!0;return"window:keyup"===e&&(o=!1!==i.xb(t,1).onKeyUp(n)&&o),o},v,f)),i.nb(1,4243456,null,0,r,[m.c],null,null)],null,null)}function M(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-home",[],null,null,null,y,w)),i.nb(1,49152,null,0,x,[g],null,null)],null,null)}var k=i.kb("app-home",x,M,{},{},[]),W=n("SVse"),_=n("POq0"),P=n("cUpR"),N=n("Xd0L"),E=n("iInd");class S{}var L=n("IP0z"),j=n("/HVE"),z=n("Fwaw"),I=n("pBi1"),q=n("Gi4r"),C=n("HkZ/"),T=n("pKmL");n.d(e,"HomeModuleNgFactory",function(){return O});var O=i.lb(o,[],function(t){return i.ub([i.vb(512,i.j,i.Y,[[8,[s.a,k]],[3,i.j],i.v]),i.vb(4608,W.j,W.i,[i.s,[2,W.q]]),i.vb(4608,_.a,_.a,[]),i.vb(4608,P.e,N.a,[[2,N.c],[2,N.e]]),i.vb(1073742336,W.b,W.b,[]),i.vb(1073742336,E.l,E.l,[[2,E.q],[2,E.k]]),i.vb(1073742336,S,S,[]),i.vb(1073742336,L.a,L.a,[]),i.vb(1073742336,N.e,N.e,[[2,N.b],[2,P.f]]),i.vb(1073742336,j.b,j.b,[]),i.vb(1073742336,N.g,N.g,[]),i.vb(1073742336,z.c,z.c,[]),i.vb(1073742336,_.b,_.b,[]),i.vb(1073742336,I.a,I.a,[]),i.vb(1073742336,q.c,q.c,[]),i.vb(1073742336,C.a,C.a,[]),i.vb(1073742336,T.a,T.a,[]),i.vb(1073742336,o,o,[]),i.vb(1024,E.i,function(){return[[{path:"",component:x}]]},[])])})}}]);