(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{fLW6:function(t,e,n){!function(t){function e(t){function e(t,e,n){this.x=t,this.y=e,this.z=n}e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n},this.grad3=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}e.prototype.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=this.p,n=0;n<256;n++){var i,s=this.perm,l=this.gradP;s[n]=s[n+256]=i=1&n?e[n]^255&t:e[n]^t>>8&255,l[n]=l[n+256]=this.grad3[i%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6;function s(t){return t*t*t*(t*(6*t-15)+10)}function l(t,e,n){return(1-n)*t+n*e}e.prototype.simplex2=function(t,e){var s,l,o=(t+e)*n,a=Math.floor(t+o),r=Math.floor(e+o),c=(a+r)*i,h=t-a+c,d=e-r+c;h>d?(s=1,l=0):(s=0,l=1);var u=h-s+i,p=d-l+i,b=h-1+2*i,g=d-1+2*i,f=this.perm,v=this.gradP,m=v[(a&=255)+s+f[(r&=255)+l]],x=v[a+1+f[r+1]],w=.5-h*h-d*d,C=.5-u*u-p*p,M=.5-b*b-g*g;return 70*((w<0?0:(w*=w)*w*v[a+f[r]].dot2(h,d))+(C<0?0:(C*=C)*C*m.dot2(u,p))+(M<0?0:(M*=M)*M*x.dot2(b,g)))},e.prototype.simplex3=function(t,e,n){var i,s,l,o,a,r,c=(t+e+n)*(1/3),h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),p=(h+d+u)*(1/6),b=t-h+p,g=e-d+p,f=n-u+p;b>=g?g>=f?(i=1,s=0,l=0,o=1,a=1,r=0):b>=f?(i=1,s=0,l=0,o=1,a=0,r=1):(i=0,s=0,l=1,o=1,a=0,r=1):g<f?(i=0,s=0,l=1,o=0,a=1,r=1):b<f?(i=0,s=1,l=0,o=0,a=1,r=1):(i=0,s=1,l=0,o=1,a=1,r=0);var v=b-i+1/6,m=g-s+1/6,x=f-l+1/6,w=b-o+1/6*2,C=g-a+1/6*2,M=f-r+1/6*2,y=b-1+.5,P=g-1+.5,O=f-1+.5,_=this.perm,k=this.gradP,z=k[(h&=255)+i+_[(d&=255)+s+_[(u&=255)+l]]],S=k[h+o+_[d+a+_[u+r]]],A=k[h+1+_[d+1+_[u+1]]],N=.5-b*b-g*g-f*f,$=.5-v*v-m*m-x*x,E=.5-w*w-C*C-M*M,Y=.5-y*y-P*P-O*O;return 32*((N<0?0:(N*=N)*N*k[h+_[d+_[u]]].dot3(b,g,f))+($<0?0:($*=$)*$*z.dot3(v,m,x))+(E<0?0:(E*=E)*E*S.dot3(w,C,M))+(Y<0?0:(Y*=Y)*Y*A.dot3(y,P,O)))},e.prototype.perlin2=function(t,e){var n=Math.floor(t),i=Math.floor(e);t-=n,e-=i;var o=this.perm,a=this.gradP,r=a[(n&=255)+o[i&=255]].dot2(t,e),c=a[n+o[i+1]].dot2(t,e-1),h=a[n+1+o[i]].dot2(t-1,e),d=a[n+1+o[i+1]].dot2(t-1,e-1),u=s(t);return l(l(r,h,u),l(c,d,u),s(e))},e.prototype.perlin3=function(t,e,n){var i=Math.floor(t),o=Math.floor(e),a=Math.floor(n);t-=i,e-=o,n-=a;var r=this.perm,c=this.gradP,h=c[(i&=255)+r[(o&=255)+r[a&=255]]].dot3(t,e,n),d=c[i+r[o+r[a+1]]].dot3(t,e,n-1),u=c[i+r[o+1+r[a]]].dot3(t,e-1,n),p=c[i+r[o+1+r[a+1]]].dot3(t,e-1,n-1),b=c[i+1+r[o+r[a]]].dot3(t-1,e,n),g=c[i+1+r[o+r[a+1]]].dot3(t-1,e,n-1),f=c[i+1+r[o+1+r[a]]].dot3(t-1,e-1,n),v=c[i+1+r[o+1+r[a+1]]].dot3(t-1,e-1,n-1),m=s(t),x=s(e),w=s(n);return l(l(l(h,b,m),l(d,g,m),w),l(l(u,f,m),l(p,v,m),w),x)},t.Noise=e}(t.exports)},qNYQ:function(t,e,n){"use strict";n.r(e);var i=n("8Y7J");class s{}var l=n("pMnS"),o=n("o+s5"),a=n("mrSG");function r(t,e,n,i){let s=(i-90)*Math.PI/180;return{x:t+n*Math.cos(s),y:e+n*Math.sin(s)}}function c(t,e,n,i,s,l){let o=r(t,e,n,s),a=r(t,e,n,i);return["M",o.x,o.y,"A",n,n,l,s-i<=180?"0":"1",l,a.x,a.y].join(" ")}function h(t,e,n){const i=e.x-t.x,s=e.y-t.y;var l,o;const a=n/(l=t,o=e,Math.sqrt(Math.pow(l.x-o.x,2)+Math.pow(l.y-o.y,2)));return{x:t.x+(i-i*a),y:t.y+(s-s*a)}}function d(t,e,n,i,s){return(t-e)*(s-i)/(n-e)+i}function u(t){let e,n,i=t.length;for(;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}class p{constructor(t,e,n,i,s,l,o,a,r){this.i=t,this.step=e,this.offset=n,this.x=i,this.y=s,this.size=l,this.scale=o,this.itemLeft=a,this.itemRight=r,this.noiseSeedX=Math.floor(64e3*Math.random()),this.noiseSeedY=Math.floor(64e3*Math.random()),this.imageClipX=0,this.diameter=this.size*this.scale;const c=.1*this.size,h=.9*this.size-this.diameter,u=d(Math.random(),0,1,c,h),p=d(Math.random(),0,1,c,h);this.xWithNoise=i+u,this.yWithNoise=i+p,this.elContainer=document.createElement("div"),this.elContainer.className="bubble-container",this.elContainer.style.width=this.elContainer.style.height=`${this.diameter}px`,this.el=document.createElement("div"),this.el.className="bubble",this.el.style.width=this.el.style.height="100%",this.elContainer.appendChild(this.el);const b=document.createElement("img");b.src=a.src,b.className="back",this.backImage=b;const g=document.createElement("img");g.src=r.src,b.draggable=g.draggable=!1;const f=this.GenerateTitle(r.title),v=this.GenerateTitle(a.title);v.svgEl.classList.add("back"),this.el.appendChild(g),this.el.appendChild(f.svgEl),this.el.appendChild(b),this.el.appendChild(v.svgEl),setTimeout(()=>{f.afterRenderCb(),v.afterRenderCb()},1),this.transform()}redraw(t,e,n){this.size=n,this.diameter=this.size*this.scale;const i=.1*this.size,s=.9*this.size-this.diameter,l=d(Math.random(),0,1,i,s),o=d(Math.random(),0,1,i,s);this.x=t,this.y=e,this.xWithNoise=t+l,this.yWithNoise=e+o,this.elContainer.style.width=this.elContainer.style.height=`${this.diameter}px`,this.el.style.width=this.el.style.height="100%",this.transform()}GenerateTitle(t){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("version","1.1"),e.setAttribute("xlink","http://www.w3.org/1999/xlink"),e.setAttribute("viewBox","0 0 100 100");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.id="curve",n.setAttribute("d",`${c(50,50,59.2,0,180,1)} ${c(50,50,59.2,180,0,1)}`),n.setAttribute("fill","none"),n.setAttribute("stroke","none"),e.appendChild(n);const i=document.createElementNS("http://www.w3.org/2000/svg","text"),s=document.createElementNS("http://www.w3.org/2000/svg","textPath");return s.setAttribute("startOffset","50%"),s.setAttribute("text-anchor","middle"),s.setAttribute("href","#curve"),s.textContent=t,i.appendChild(s),e.appendChild(i),{svgEl:e,afterRenderCb:()=>{const n=s.getExtentOfChar(0),l=s.getExtentOfChar(t.length-1),o={x:l.x+l.width,y:l.y+l.height},a={x:50,y:50},r=h({x:n.x,y:n.y+n.height},a,50),d=h(o,a,50),u=Math.abs(function(t,e,n){t={x:t.x-a.x,y:t.y-a.y},e={x:e.x-a.x,y:e.y-a.y};const i=Math.atan2(t.y,t.x),s=Math.atan2(e.y,e.x);let l=s-i;const o=-(s>i?1:-1)*Math.PI*2;l=Math.abs(o+l)<Math.abs(l)?o+l:l;let r=Math.abs(Math.round(360*l/(2*Math.PI)));return r<0&&(r=360+r),r}(r,d))/2,p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",c(50,50,65.5,360-u,u,0)),p.setAttribute("fill","none"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-width","21px"),p.setAttribute("stroke","white"),e.insertBefore(p,i)}}}transform(){const t=100*Math.min(this.size,Math.max(0,this.imageClipX))/this.size;let e=t<40?0:t>60?180:d(t,40,60,0,540);e%=360,this.elContainer.style.transform=`translate(${this.xWithNoise}px, ${this.yWithNoise}px)`,this.el.style.transform=`rotateY(${e}deg)`}}var b=n("fLW6"),g=n.n(b);class f{constructor(t,e){this.el=t,this.skills=e,this.list=[],this.curr={step:0,y:void 0},this.scaleGen=this.nextScale(),this.devSkillGen=this.nextDevelopmentSkill(),this.opsSkillGen=this.nextDevopsSkill(),this.updateSize(),this.updatePadding(),this.init()}get scrollSpeed(){return Math.max(Math.min(.002*this.size,.4),.05)}get noiseAmount(){return.03*this.size}get noiseSpeed(){return this.noiseAmount/1e3}get midY(){return this.el.clientHeight/2}get last(){return this.list[this.list.length-1]}get midX(){return.5*this.el.clientWidth}updateSize(){this.size=Math.round(.33*this.el.clientHeight)}updatePadding(){this.xPadding=Math.max(10,Math.round(.15*this.size)),this.yPadding=Math.max(10,Math.round(.17*this.size))}stateChanged(t){return a.a(this,void 0,void 0,function*(){for(;this.state!==t;)yield new Promise(t=>setTimeout(t,100))})}stopAnimation(){return a.a(this,void 0,void 0,function*(){"stopped"!==this.state&&(this.state="stop requested",yield this.stateChanged("stopped"))})}startAnimation(){"running"!==this.state&&(this.state="running",this.nextFrame())}resize(){return a.a(this,void 0,void 0,function*(){yield this.stopAnimation();const t=this.list[0],e={x:t.x-.6*this.size,step:1!==t.step?t.step-1:3,offset:1!==t.step?t.offset:"p"===t.offset?"n":"p"};let n;this.curr.y=this.midY+(2===e.step&&"p"===e.offset||[1,3].includes(e.step)&&"n"===e.offset?-this.yPadding:this.yPadding),this.curr.step=e.step;for(const i of this.list)n=this.nextBubble(n?n.x:e.x,i);this.startAnimation()})}init(){for(this.curr.y=this.midY+this.yPadding;!this.list.length||this.list[this.list.length-1].x<this.el.clientWidth;)this.list.push(this.nextBubble(this.last?this.last.x:void 0));for(const t of this.list)this.el.firstChild.appendChild(t.elContainer);this.state="running",this.nextFrame()}nextFrame(){if("running"===this.state){for(const t of this.list){t.noiseSeedX+=this.noiseSpeed,t.noiseSeedY+=this.noiseSpeed;const e=new g.a.Noise,n=e.simplex2(t.noiseSeedX,0),i=e.simplex2(t.noiseSeedY,0);t.x-=this.scrollSpeed,t.xWithNoise=t.x+n*this.noiseAmount,t.yWithNoise=t.y+i*this.noiseAmount,t.imageClipX=this.midX-t.xWithNoise,t.transform()}this.checkIfNextRequired(),this.checkFirstOutOfBounds(),requestAnimationFrame(this.nextFrame.bind(this))}else this.state="stopped"}checkFirstOutOfBounds(){const t=this.list[0];t.x<-t.size-20&&(this.list.splice(0,1),this.el.firstChild.removeChild(t.elContainer))}checkIfNextRequired(){const t=this.last;if(t&&t.x+t.size/2+20<=this.el.clientWidth+t.size){const t=this.nextBubble(this.last.x);this.list.push(t),this.el.firstChild.appendChild(t.elContainer)}}updateAll(){return a.a(this,void 0,void 0,function*(){this.updateSize(),this.updatePadding(),yield this.resize()})}nextY(){return 1===this.curr.step||3===this.curr.step?this.curr.y>this.midY?this.curr.y:this.curr.y-this.size:this.curr.y>this.midY?this.curr.y-this.size:this.curr.y}nextBubble(t,e){if(this.curr.step++,this.curr.step>3&&(this.curr.step=1,this.curr.y=this.midY+(this.curr.y>this.midY?-this.yPadding:+this.xPadding)),null===e)return;let n={x:void 0,y:void 0};return n={x:(t?t+this.size/2:0)+this.xPadding,y:this.nextY()},e?(e.redraw(n.x,n.y,this.size),e):new p(this.list.length,this.curr.step,this.curr.y>this.midY?"p":"n",n.x,n.y,this.size,this.scaleGen.next().value,this.devSkillGen.next().value,this.opsSkillGen.next().value)}*nextScale(){const t=u([.95,.85,.75,.65,.55]),e=[];for(;;){const[n]=t.splice(0,1);e.push(n),t.length<=2&&t.push(...u(e.splice(0))),yield n}}*nextDevelopmentSkill(){let t=-1;for(;;)++t===this.skills.development.length&&(t=0),yield{src:`assets/icons/skills/jpg/development/${this.skills.development[t].src}`,title:this.skills.development[t].title}}*nextDevopsSkill(){let t=-1;for(;;)++t===this.skills.devops.length&&(t=0),yield{src:`assets/icons/skills/jpg/devops/${this.skills.devops[t].src}`,title:this.skills.devops[t].title}}}var v=n("XNiG"),m=n("Kj3r");class x{constructor(t,e){this._http=t,this._el=e,this.resizeEvent=new v.a;let n=!1;this.resizeEvent.pipe(Object(m.a)(100)).subscribe(()=>a.a(this,void 0,void 0,function*(){n||(n=!0,this.bubbles&&(yield this.bubbles.updateAll()),n=!1)}))}onKeyUp(t){"Space"===t.code&&("running"===this.bubbles.state?this.bubbles.stopAnimation():"stopped"===this.bubbles.state&&this.bubbles.startAnimation())}ngAfterViewInit(){this._http.get("assets/skills.json").subscribe(t=>{this.bubbles=new f(this._el.nativeElement,t)})}onResized(t){Math.abs(t.newHeight-t.oldHeight)>0&&this.bubbles&&this.resizeEvent.next()}}var w=n("IheW"),C=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%;height:100%;min-height:100px;min-width:150px}[_nghost-%COMP%]   #resize-container[_ngcontent-%COMP%]{width:100%;height:100%}  .bubble-container{position:absolute;z-index:2;opacity:.9;transition:opacity .3s linear,-webkit-filter .3s linear;transition:opacity .3s linear,filter .3s linear;transition:opacity .3s linear,filter .3s linear,-webkit-filter .3s linear}  .bubble-container .bubble{background:#fff;border-radius:50%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;box-shadow:0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.1)}  .bubble-container .bubble svg{position:absolute;transition:opacity .3s ease-in-out,top .3s ease-in-out,-webkit-backface-visibility 0s;transition:opacity .3s ease-in-out,top .3s ease-in-out,backface-visibility 0s;transition:opacity .3s ease-in-out,top .3s ease-in-out,backface-visibility 0s,-webkit-backface-visibility 0s;opacity:0;top:20px;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:rotateX(0);transform:rotateX(0);overflow:visible;-webkit-filter:drop-shadow(0 4px 12px rgba(0, 0, 0, .1));filter:drop-shadow(0 4px 12px rgba(0, 0, 0, .1));z-index:1}  .bubble-container .bubble svg.back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}  .bubble-container .bubble img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;border-radius:50%;z-index:3}  .bubble-container .bubble img.back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}  .bubble-container:hover{opacity:1}  .bubble-container:hover svg{opacity:1;top:0}"]],data:{}});function M(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"div",[["id","resize-container"]],null,[[null,"resized"]],function(t,e,n){var i=!0;return"resized"===e&&(i=!1!==t.component.onResized(n)&&i),i},null,null)),i.nb(1,212992,null,0,o.b,[i.k],null,{resized:"resized"})],function(t,e){t(e,1,0)},null)}const y="http://www.w3.org/2000/svg";class P{onResize(){this.GenerateWaves()}ngAfterViewInit(){this.GenerateWaves()}GenerateWaves(){const t=this.wavesContainer.nativeElement;let{width:e,height:n}=t.getBoundingClientRect();n+=.1*document.getElementById("bubbles-container").clientHeight;const i=document.createElementNS(y,"svg");i.setAttributeNS(null,"viewBox",`0 0 ${e} ${n}`),i.style.width=`${e}px`,i.style.height=`${n}px`;const s=e<299?10:e<499?20:e<599?30:e<959?40:50,l=.125*(e*=2),o=.375*e,a=.625*e,r=.875*e,c="M 0 0 "+`C ${l} 0 ${l} ${s} ${.25*e} ${s} `+`C ${o} ${s} ${o} 0 ${.5*e} 0 `+`C ${a} 0 ${a} ${s} ${.75*e} ${s} `+`C ${r} ${s} ${r} 0 ${e} 0 `+`L ${e} ${n} `+`L 0 ${n} `+"Z",h=document.createElementNS(y,"path");h.setAttributeNS(null,"d",c),h.setAttributeNS(null,"id","wave");const d=document.createElementNS(y,"defs");d.appendChild(h),i.appendChild(d);const u=document.createElementNS(y,"use");u.setAttributeNS(null,"id","wave1"),u.setAttributeNS(null,"class","wave"),u.setAttributeNS(null,"x","0"),u.setAttributeNS(null,"y","0"),u.setAttributeNS(null,"href","#wave");const p=u.cloneNode();p.setAttributeNS(null,"id","wave2"),p.setAttributeNS(null,"y","-2");const b=u.cloneNode();b.setAttributeNS(null,"id","wave3"),b.setAttributeNS(null,"y","-4"),i.appendChild(b),i.appendChild(p),i.appendChild(u),t.firstChild?t.replaceChild(i,t.firstChild):t.appendChild(i)}}var O=i.mb({encapsulation:0,styles:[["#waves-container{width:100%;height:100%;position:relative}  #waves-container svg{position:absolute;bottom:0;left:0;overflow:visible}  #waves-container svg .wave{-webkit-animation:3s linear infinite wave;animation:3s linear infinite wave;fill:#fff}  #waves-container svg #wave2{-webkit-animation-duration:5s;animation-duration:5s;animation-direction:reverse;opacity:.6}  #waves-container svg #wave3{-webkit-animation-duration:7s;animation-duration:7s;opacity:.3}@-webkit-keyframes wave{to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes wave{to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}"]],data:{}});function _(t){return i.Bb(0,[i.yb(671088640,1,{wavesContainer:0}),(t()(),i.ob(1,0,[[1,0],["wavesContainer",1]],null,0,"div",[["id","waves-container"]],null,null,null,null,null))],null,null)}class k{}var z=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;align-items:stretch;width:100%;height:100%;background:var(--od-dark);color:var(--od-light)}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{overflow:hidden}#logo-container[_ngcontent-%COMP%]{flex:0 15%;display:flex;flex-direction:row;align-items:center;justify-content:center}#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;margin:auto;-o-object-fit:contain;object-fit:contain}#description-container[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:row;align-items:center;justify-content:center;align-items:stretch;flex-wrap:wrap}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;justify-content:center;flex:0 50%}@media screen and (max-width:calc(600px - 1px)){#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:0 100%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-bottom:10px}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:auto;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:80%;display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:50vw}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:.15em}@media screen and (max-width:calc(600px - 1px)){#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:70vw}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%]{width:80%;opacity:.8}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;color:#fff}@media screen and (max-width:599px){#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:27px;height:70%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:12px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16.2px}#bubbles-container[_ngcontent-%COMP%]{flex:0 30%}}@media screen and (min-width:600px) and (max-width:959px){#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:36px;height:80%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:16px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:21.6px}}@media screen and (min-width:960px) and (max-width:1279px){#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:45px;height:90%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}@media screen and (min-width:1280px) and (max-width:1919px){#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:54px;height:100%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}@media screen and (min-width:1920px){#logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:63px;height:100%}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{min-height:1px;height:.1em;width:0;opacity:.1;background:#fff;transition:width .5s ease-in-out,opacity .5s ease}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:inherit;font-weight:lighter;color:rgba(255,255,255,.7);text-align:center}#bubbles-container[_ngcontent-%COMP%]{overflow:visible}@media screen and (min-width:600px) and (max-width:959px){#bubbles-container[_ngcontent-%COMP%]{flex:0 35%}}@media screen and (min-width:960px) and (max-width:1279px){#bubbles-container[_ngcontent-%COMP%]{flex:0 40%}}@media screen and (min-width:1280px) and (max-width:1919px){#bubbles-container[_ngcontent-%COMP%]{flex:0 50%}}@media screen and (min-width:1920px){#bubbles-container[_ngcontent-%COMP%]{flex:0 55%}}#wave-container[_ngcontent-%COMP%]{overflow:visible;position:relative;flex:0 10%}.icon-panel[_ngcontent-%COMP%]{top:15%}"]],data:{}});function S(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,23,"div",[],null,null,null,null,null)),(t()(),i.ob(1,0,null,null,1,"div",[["id","logo-container"]],null,null,null,null,null)),(t()(),i.ob(2,0,null,null,0,"img",[["alt","Lina Ragauskaite"],["src","assets/logo/logo-dark.jpg"]],null,null,null,null,null)),(t()(),i.ob(3,0,null,null,14,"div",[["id","description-container"]],null,null,null,null,null)),(t()(),i.ob(4,0,null,null,6,"div",[],null,null,null,null,null)),(t()(),i.ob(5,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(t()(),i.ob(6,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(t()(),i.Ab(-1,null,["Full-Stack TypeScript Developer"])),(t()(),i.ob(8,0,null,null,0,"span",[["class","divider"]],null,null,null,null,null)),(t()(),i.ob(9,0,null,null,1,"span",[["class","description"]],null,null,null,null,null)),(t()(),i.Ab(-1,null,["Skilled in software systems design and engineering, including back-end Microservices, APIs and front-end applications for the Web, Mobile and Desktop."])),(t()(),i.ob(11,0,null,null,6,"div",[],null,null,null,null,null)),(t()(),i.ob(12,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(t()(),i.ob(13,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(t()(),i.Ab(-1,null,["DevOps Engineer"])),(t()(),i.ob(15,0,null,null,0,"span",[["class","divider"]],null,null,null,null,null)),(t()(),i.ob(16,0,null,null,1,"span",[["class","description"]],null,null,null,null,null)),(t()(),i.Ab(-1,null,["Experienced in continuous testing and deployment using latest CI/CD technologies. As well as hosting Databases, Apps and Servers on scalable Cloud services."])),(t()(),i.ob(18,0,null,null,2,"div",[["id","bubbles-container"]],null,null,null,null,null)),(t()(),i.ob(19,0,null,null,1,"app-img-bubbles",[],null,[["window","keyup"]],function(t,e,n){var s=!0;return"window:keyup"===e&&(s=!1!==i.xb(t,20).onKeyUp(n)&&s),s},M,C)),i.nb(20,4243456,null,0,x,[w.c,i.k],null,null),(t()(),i.ob(21,0,null,null,2,"div",[["id","wave-container"]],null,null,null,null,null)),(t()(),i.ob(22,0,null,null,1,"app-waves",[],null,[["window","resize"]],function(t,e,n){var s=!0;return"window:resize"===e&&(s=!1!==i.xb(t,23).onResize()&&s),s},_,O)),i.nb(23,4243456,null,0,P,[],null,null)],null,null)}var A=n("SvPF");class N{constructor(t){this.theme=t}}var $=i.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100vh;width:calc(100vw - 64px);overflow-y:auto}@media screen and (max-width:calc(960px - 1px)){[_nghost-%COMP%]{width:100vw;height:calc(100vh - 64px)}}.section[_ngcontent-%COMP%]{width:100%;height:100%;min-height:500px;overflow:hidden;display:block;box-sizing:border-box}"]],data:{}});function E(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-intro",[["class","section"]],null,null,null,S,z)),i.nb(1,49152,null,0,k,[],null,null)],null,null)}function Y(t){return i.Bb(0,[(t()(),i.ob(0,0,null,null,1,"app-home",[],null,null,null,E,$)),i.nb(1,49152,null,0,N,[A.a],null,null)],null,null)}var j=i.kb("app-home",N,Y,{},{},[]),W=n("SVse"),B=n("POq0"),X=n("cUpR"),G=n("Xd0L"),I=n("iInd");class R{}var F=n("IP0z"),q=n("/HVE"),D=n("Fwaw"),L=n("pBi1"),H=n("Gi4r"),T=n("HkZ/"),K=n("pKmL");n.d(e,"HomeModuleNgFactory",function(){return V});var V=i.lb(s,[],function(t){return i.ub([i.vb(512,i.j,i.Y,[[8,[l.a,j]],[3,i.j],i.v]),i.vb(4608,W.k,W.j,[i.s,[2,W.r]]),i.vb(4608,B.a,B.a,[]),i.vb(4608,X.e,G.a,[[2,G.c],[2,G.e]]),i.vb(1073742336,W.b,W.b,[]),i.vb(1073742336,I.l,I.l,[[2,I.q],[2,I.k]]),i.vb(1073742336,R,R,[]),i.vb(1073742336,F.a,F.a,[]),i.vb(1073742336,G.e,G.e,[[2,G.b],[2,X.f]]),i.vb(1073742336,q.b,q.b,[]),i.vb(1073742336,G.g,G.g,[]),i.vb(1073742336,D.c,D.c,[]),i.vb(1073742336,L.b,L.b,[]),i.vb(1073742336,B.b,B.b,[]),i.vb(1073742336,L.a,L.a,[]),i.vb(1073742336,H.c,H.c,[]),i.vb(1073742336,T.a,T.a,[]),i.vb(1073742336,o.a,o.a,[]),i.vb(1073742336,K.a,K.a,[]),i.vb(1073742336,s,s,[]),i.vb(1024,I.i,function(){return[[{path:"",component:N}]]},[])])})}}]);