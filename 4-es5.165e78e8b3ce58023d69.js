(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{fLW6:function(t,e,n){!function(t){function e(t){function e(t,e,n){this.x=t,this.y=e,this.z=n}e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n},this.grad3=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(t||0)}e.prototype.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=this.p,n=0;n<256;n++){var i,s=this.perm,l=this.gradP;s[n]=s[n+256]=i=1&n?e[n]^255&t:e[n]^t>>8&255,l[n]=l[n+256]=this.grad3[i%12]}};var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6;function s(t){return t*t*t*(t*(6*t-15)+10)}function l(t,e,n){return(1-n)*t+n*e}e.prototype.simplex2=function(t,e){var s,l,o=(t+e)*n,r=Math.floor(t+o),a=Math.floor(e+o),c=(r+a)*i,u=t-r+c,h=e-a+c;u>h?(s=1,l=0):(s=0,l=1);var d=u-s+i,p=h-l+i,b=u-1+2*i,g=h-1+2*i,f=this.perm,m=this.gradP,v=m[(r&=255)+s+f[(a&=255)+l]],x=m[r+1+f[a+1]],w=.5-u*u-h*h,C=.5-d*d-p*p,y=.5-b*b-g*g;return 70*((w<0?0:(w*=w)*w*m[r+f[a]].dot2(u,h))+(C<0?0:(C*=C)*C*v.dot2(d,p))+(y<0?0:(y*=y)*y*x.dot2(b,g)))},e.prototype.simplex3=function(t,e,n){var i,s,l,o,r,a,c=(t+e+n)*(1/3),u=Math.floor(t+c),h=Math.floor(e+c),d=Math.floor(n+c),p=(u+h+d)*(1/6),b=t-u+p,g=e-h+p,f=n-d+p;b>=g?g>=f?(i=1,s=0,l=0,o=1,r=1,a=0):b>=f?(i=1,s=0,l=0,o=1,r=0,a=1):(i=0,s=0,l=1,o=1,r=0,a=1):g<f?(i=0,s=0,l=1,o=0,r=1,a=1):b<f?(i=0,s=1,l=0,o=0,r=1,a=1):(i=0,s=1,l=0,o=1,r=1,a=0);var m=b-i+1/6,v=g-s+1/6,x=f-l+1/6,w=b-o+1/6*2,C=g-r+1/6*2,y=f-a+1/6*2,M=b-1+.5,P=g-1+.5,O=f-1+.5,_=this.perm,k=this.gradP,z=k[(u&=255)+i+_[(h&=255)+s+_[(d&=255)+l]]],S=k[u+o+_[h+r+_[d+a]]],A=k[u+1+_[h+1+_[d+1]]],N=.5-b*b-g*g-f*f,q=.5-m*m-v*v-x*x,E=.5-w*w-C*C-y*y,Y=.5-M*M-P*P-O*O;return 32*((N<0?0:(N*=N)*N*k[u+_[h+_[d]]].dot3(b,g,f))+(q<0?0:(q*=q)*q*z.dot3(m,v,x))+(E<0?0:(E*=E)*E*S.dot3(w,C,y))+(Y<0?0:(Y*=Y)*Y*A.dot3(M,P,O)))},e.prototype.perlin2=function(t,e){var n=Math.floor(t),i=Math.floor(e);t-=n,e-=i;var o=this.perm,r=this.gradP,a=r[(n&=255)+o[i&=255]].dot2(t,e),c=r[n+o[i+1]].dot2(t,e-1),u=r[n+1+o[i]].dot2(t-1,e),h=r[n+1+o[i+1]].dot2(t-1,e-1),d=s(t);return l(l(a,u,d),l(c,h,d),s(e))},e.prototype.perlin3=function(t,e,n){var i=Math.floor(t),o=Math.floor(e),r=Math.floor(n);t-=i,e-=o,n-=r;var a=this.perm,c=this.gradP,u=c[(i&=255)+a[(o&=255)+a[r&=255]]].dot3(t,e,n),h=c[i+a[o+a[r+1]]].dot3(t,e,n-1),d=c[i+a[o+1+a[r]]].dot3(t,e-1,n),p=c[i+a[o+1+a[r+1]]].dot3(t,e-1,n-1),b=c[i+1+a[o+a[r]]].dot3(t-1,e,n),g=c[i+1+a[o+a[r+1]]].dot3(t-1,e,n-1),f=c[i+1+a[o+1+a[r]]].dot3(t-1,e-1,n),m=c[i+1+a[o+1+a[r+1]]].dot3(t-1,e-1,n-1),v=s(t),x=s(e),w=s(n);return l(l(l(u,b,v),l(h,g,v),w),l(l(d,f,v),l(p,m,v),w),x)},t.Noise=e}(t.exports)},qNYQ:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),s=function(){return function(){}}(),l=n("pMnS"),o=n("L2Y4"),r=n("mrSG");function a(t,e,n,i){var s=(i-90)*Math.PI/180;return{x:t+n*Math.cos(s),y:e+n*Math.sin(s)}}function c(t,e,n,i,s,l){var o=a(t,e,n,s),r=a(t,e,n,i);return["M",o.x,o.y,"A",n,n,l,s-i<=180?"0":"1",l,r.x,r.y].join(" ")}function u(t,e,n){var i,s,l=e.x-t.x,o=e.y-t.y,r=n/(i=t,s=e,Math.sqrt(Math.pow(i.x-s.x,2)+Math.pow(i.y-s.y,2)));return{x:t.x+(l-l*r),y:t.y+(o-o*r)}}function h(t,e,n,i,s){return(t-e)*(s-i)/(n-e)+i}function d(t){for(var e,n,i=t.length;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}var p=function(){function t(t,e,n,i,s,l,o,r,a){this.i=t,this.step=e,this.offset=n,this.x=i,this.y=s,this.size=l,this.scale=o,this.itemLeft=r,this.itemRight=a,this.noiseSeedX=Math.floor(64e3*Math.random()),this.noiseSeedY=Math.floor(64e3*Math.random()),this.imageClipX=0,this.diameter=this.size*this.scale;var c=.1*this.size,u=.9*this.size-this.diameter,d=h(Math.random(),0,1,c,u),p=h(Math.random(),0,1,c,u);this.xWithNoise=i+d,this.yWithNoise=i+p,this.elContainer=document.createElement("div"),this.elContainer.className="bubble-container",this.elContainer.style.width=this.elContainer.style.height=this.diameter+"px",this.el=document.createElement("div"),this.el.className="bubble",this.el.style.width=this.el.style.height="100%",this.elContainer.appendChild(this.el);var b=document.createElement("img");b.src=r.src,b.className="back",this.backImage=b;var g=document.createElement("img");g.src=a.src,b.draggable=g.draggable=!1;var f=this.GenerateTitle(a.title),m=this.GenerateTitle(r.title);m.svgEl.classList.add("back"),this.el.appendChild(g),this.el.appendChild(f.svgEl),this.el.appendChild(b),this.el.appendChild(m.svgEl),setTimeout(function(){f.afterRenderCb(),m.afterRenderCb()},1),this.transform()}return t.prototype.redraw=function(t,e,n){this.size=n,this.diameter=this.size*this.scale;var i=.1*this.size,s=.9*this.size-this.diameter,l=h(Math.random(),0,1,i,s),o=h(Math.random(),0,1,i,s);this.x=t,this.y=e,this.xWithNoise=t+l,this.yWithNoise=e+o,this.elContainer.style.width=this.elContainer.style.height=this.diameter+"px",this.el.style.width=this.el.style.height="100%",this.transform()},t.prototype.GenerateTitle=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("version","1.1"),e.setAttribute("xlink","http://www.w3.org/1999/xlink"),e.setAttribute("viewBox","0 0 100 100");var n=document.createElementNS("http://www.w3.org/2000/svg","path");n.id="curve",n.setAttribute("d",c(50,50,59.2,0,180,1)+" "+c(50,50,59.2,180,0,1)),n.setAttribute("fill","none"),n.setAttribute("stroke","none"),e.appendChild(n);var i=document.createElementNS("http://www.w3.org/2000/svg","text"),s=document.createElementNS("http://www.w3.org/2000/svg","textPath");return s.setAttribute("startOffset","50%"),s.setAttribute("text-anchor","middle"),s.setAttribute("href","#curve"),s.textContent=t,i.appendChild(s),e.appendChild(i),{svgEl:e,afterRenderCb:function(){var n=s.getExtentOfChar(0),l=s.getExtentOfChar(t.length-1),o={x:l.x+l.width,y:l.y+l.height},r={x:50,y:50},a=u({x:n.x,y:n.y+n.height},r,50),h=u(o,r,50),d=Math.abs(function(t,e,n){t={x:t.x-r.x,y:t.y-r.y},e={x:e.x-r.x,y:e.y-r.y};var i=Math.atan2(t.y,t.x),s=Math.atan2(e.y,e.x),l=s-i,o=-(s>i?1:-1)*Math.PI*2;l=Math.abs(o+l)<Math.abs(l)?o+l:l;var a=Math.abs(Math.round(360*l/(2*Math.PI)));return a<0&&(a=360+a),a}(a,h))/2,p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",c(50,50,65.5,360-d,d,0)),p.setAttribute("fill","none"),p.setAttribute("stroke-linecap","round"),p.setAttribute("stroke-width","21px"),p.setAttribute("stroke","white"),e.insertBefore(p,i)}}},t.prototype.transform=function(){var t=100*Math.min(this.size,Math.max(0,this.imageClipX))/this.size,e=t<40?0:t>60?180:h(t,40,60,0,540);e%=360,this.elContainer.style.transform="translate("+this.xWithNoise+"px, "+this.yWithNoise+"px)",this.el.style.transform="rotateY("+e+"deg)"},t}(),b=n("fLW6"),g=n.n(b),f=function(){function t(t,e){this.el=t,this.skills=e,this.list=[],this.curr={step:0,y:void 0},this.scaleGen=this.nextScale(),this.devSkillGen=this.nextDevelopmentSkill(),this.opsSkillGen=this.nextDevopsSkill(),this.updateSize(),this.updatePadding(),this.init()}return Object.defineProperty(t.prototype,"scrollSpeed",{get:function(){return Math.max(Math.min(.002*this.size,.4),.05)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"noiseAmount",{get:function(){return.03*this.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"noiseSpeed",{get:function(){return this.noiseAmount/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"midY",{get:function(){return this.el.clientHeight/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return this.list[this.list.length-1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"midX",{get:function(){return.5*this.el.clientWidth},enumerable:!0,configurable:!0}),t.prototype.updateSize=function(){this.size=Math.round(.33*this.el.clientHeight)},t.prototype.updatePadding=function(){this.xPadding=Math.max(10,Math.round(.15*this.size)),this.yPadding=Math.max(10,Math.round(.17*this.size))},t.prototype.stateChanged=function(t){return r.b(this,void 0,void 0,function(){return r.e(this,function(e){switch(e.label){case 0:return this.state===t?[3,2]:[4,new Promise(function(t){return setTimeout(t,100)})];case 1:return e.sent(),[3,0];case 2:return[2]}})})},t.prototype.stopAnimation=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return"stopped"===this.state?[3,2]:(this.state="stop requested",[4,this.stateChanged("stopped")]);case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.startAnimation=function(){"running"!==this.state&&(this.state="running",this.nextFrame())},t.prototype.resize=function(){return r.b(this,void 0,void 0,function(){var t,e,n,i,s;return r.e(this,function(l){switch(l.label){case 0:return[4,this.stopAnimation()];case 1:for(l.sent(),this.curr.y=this.midY+(2===(e={x:(t=this.list[0]).x-.6*this.size,step:1!==t.step?t.step-1:3,offset:1!==t.step?t.offset:"p"===t.offset?"n":"p"}).step&&"p"===e.offset||[1,3].includes(e.step)&&"n"===e.offset?-this.yPadding:this.yPadding),this.curr.step=e.step,i=0,s=this.list;i<s.length;i++)n=this.nextBubble(n?n.x:e.x,s[i]);return this.startAnimation(),[2]}})})},t.prototype.init=function(){for(this.curr.y=this.midY+this.yPadding;!this.list.length||this.list[this.list.length-1].x<this.el.clientWidth;)this.list.push(this.nextBubble(this.last?this.last.x:void 0));for(var t=0,e=this.list;t<e.length;t++)this.el.firstChild.appendChild(e[t].elContainer);this.state="running",this.nextFrame()},t.prototype.nextFrame=function(){if("running"===this.state){for(var t=0,e=this.list;t<e.length;t++){var n=e[t];n.noiseSeedX+=this.noiseSpeed,n.noiseSeedY+=this.noiseSpeed;var i=new g.a.Noise,s=i.simplex2(n.noiseSeedX,0),l=i.simplex2(n.noiseSeedY,0);n.x-=this.scrollSpeed,n.xWithNoise=n.x+s*this.noiseAmount,n.yWithNoise=n.y+l*this.noiseAmount,n.imageClipX=this.midX-n.xWithNoise,n.transform()}this.checkIfNextRequired(),this.checkFirstOutOfBounds(),requestAnimationFrame(this.nextFrame.bind(this))}else this.state="stopped"},t.prototype.checkFirstOutOfBounds=function(){var t=this.list[0];t.x<-t.size-20&&(this.list.splice(0,1),this.el.firstChild.removeChild(t.elContainer))},t.prototype.checkIfNextRequired=function(){var t=this.last;if(t&&t.x+t.size/2+20<=this.el.clientWidth+t.size){var e=this.nextBubble(this.last.x);this.list.push(e),this.el.firstChild.appendChild(e.elContainer)}},t.prototype.updateAll=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return this.updateSize(),this.updatePadding(),[4,this.resize()];case 1:return t.sent(),[2]}})})},t.prototype.nextY=function(){return 1===this.curr.step||3===this.curr.step?this.curr.y>this.midY?this.curr.y:this.curr.y-this.size:this.curr.y>this.midY?this.curr.y-this.size:this.curr.y},t.prototype.nextBubble=function(t,e){var n;if(this.curr.step++,this.curr.step>3&&(this.curr.step=1,this.curr.y=this.midY+(this.curr.y>this.midY?-this.yPadding:+this.xPadding)),null!==e)return n={x:(t?t+this.size/2:0)+this.xPadding,y:this.nextY()},e?(e.redraw(n.x,n.y,this.size),e):new p(this.list.length,this.curr.step,this.curr.y>this.midY?"p":"n",n.x,n.y,this.size,this.scaleGen.next().value,this.devSkillGen.next().value,this.opsSkillGen.next().value)},t.prototype.nextScale=function(){var t,e,n;return r.e(this,function(i){switch(i.label){case 0:t=d([.95,.85,.75,.65,.55]),e=[],i.label=1;case 1:return n=t.splice(0,1)[0],e.push(n),t.length<=2&&t.push.apply(t,d(e.splice(0))),[4,n];case 2:return i.sent(),[3,1];case 3:return[2]}})},t.prototype.nextDevelopmentSkill=function(){var t;return r.e(this,function(e){switch(e.label){case 0:t=-1,e.label=1;case 1:return++t===this.skills.development.length&&(t=0),[4,{src:"assets/icons/skills/jpg/development/"+this.skills.development[t].src,title:this.skills.development[t].title}];case 2:return e.sent(),[3,1];case 3:return[2]}})},t.prototype.nextDevopsSkill=function(){var t;return r.e(this,function(e){switch(e.label){case 0:t=-1,e.label=1;case 1:return++t===this.skills.devops.length&&(t=0),[4,{src:"assets/icons/skills/jpg/devops/"+this.skills.devops[t].src,title:this.skills.devops[t].title}];case 2:return e.sent(),[3,1];case 3:return[2]}})},t}(),m=n("K9Ia"),v=n("Gi3i"),x=function(){function t(t,e){var n=this;this._http=t,this._el=e,this.resizeEvent=new m.a;var i=!1;this.resizeEvent.pipe(Object(v.a)(100)).subscribe(function(){return r.b(n,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return i?[2]:(i=!0,this.bubbles?[4,this.bubbles.updateAll()]:[3,2]);case 1:t.sent(),t.label=2;case 2:return i=!1,[2]}})})})}return t.prototype.onKeyUp=function(t){"Space"===t.code&&("running"===this.bubbles.state?this.bubbles.stopAnimation():"stopped"===this.bubbles.state&&this.bubbles.startAnimation())},t.prototype.ngAfterViewInit=function(){var t=this;this._http.get("assets/skills.json").subscribe(function(e){t.bubbles=new f(t._el.nativeElement,e)})},t.prototype.onResized=function(t){Math.abs(t.newHeight-t.oldHeight)>0&&this.bubbles&&this.resizeEvent.next()},t}(),w=n("t/Na"),C=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%;height:100%;min-height:100px;min-width:150px}[_nghost-%COMP%]   #resize-container[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function y(t){return i.Db(0,[(t()(),i.qb(0,0,null,null,1,"div",[["id","resize-container"]],null,[[null,"resized"]],function(t,e,n){var i=!0;return"resized"===e&&(i=!1!==t.component.onResized(n)&&i),i},null,null)),i.pb(1,212992,null,0,o.b,[i.k],null,{resized:"resized"})],function(t,e){t(e,1,0)},null)}var M="http://www.w3.org/2000/svg",P=function(){function t(){}return t.prototype.onResize=function(){this.GenerateWaves()},t.prototype.ngAfterViewInit=function(){this.GenerateWaves()},t.prototype.GenerateWaves=function(){var t=this.wavesContainer.nativeElement,e=t.getBoundingClientRect(),n=e.width,i=e.height;i+=.1*document.getElementById("bubbles-container").clientHeight;var s=document.createElementNS(M,"svg");s.setAttributeNS(null,"viewBox","0 0 "+n+" "+i),s.style.width=n+"px",s.style.height=i+"px";var l=n<299?10:n<499?20:n<599?30:n<959?40:50,o=.125*(n*=2),r=.375*n,a=.625*n,c=.875*n,u="M 0 0 C "+o+" 0 "+o+" "+l+" "+.25*n+" "+l+" C "+r+" "+l+" "+r+" 0 "+.5*n+" 0 C "+a+" 0 "+a+" "+l+" "+.75*n+" "+l+" C "+c+" "+l+" "+c+" 0 "+n+" 0 L "+n+" "+i+" L 0 "+i+" Z",h=document.createElementNS(M,"path");h.setAttributeNS(null,"d",u),h.setAttributeNS(null,"id","wave");var d=document.createElementNS(M,"defs");d.appendChild(h),s.appendChild(d);var p=document.createElementNS(M,"use");p.setAttributeNS(null,"id","wave1"),p.setAttributeNS(null,"class","wave"),p.setAttributeNS(null,"x","0"),p.setAttributeNS(null,"y","0"),p.setAttributeNS(null,"href","#wave");var b=p.cloneNode();b.setAttributeNS(null,"id","wave2"),b.setAttributeNS(null,"y","-2");var g=p.cloneNode();g.setAttributeNS(null,"id","wave3"),g.setAttributeNS(null,"y","-4"),s.appendChild(g),s.appendChild(b),s.appendChild(p),t.firstChild?t.replaceChild(s,t.firstChild):t.appendChild(s)},t}(),O=i.ob({encapsulation:0,styles:[["#waves-container{width:100%;height:100%;position:relative}  #waves-container svg{position:absolute;bottom:0;left:0;overflow:visible}  #waves-container svg .wave{-webkit-animation:3s linear infinite wave;animation:3s linear infinite wave;fill:#fff}  #waves-container svg #wave2{-webkit-animation-duration:5s;animation-duration:5s;animation-direction:reverse;opacity:.6}  #waves-container svg #wave3{-webkit-animation-duration:7s;animation-duration:7s;opacity:.3}@-webkit-keyframes wave{to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes wave{to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}"]],data:{}});function _(t){return i.Db(0,[i.Ab(671088640,1,{wavesContainer:0}),(t()(),i.qb(1,0,[[1,0],["wavesContainer",1]],null,0,"div",[["id","waves-container"]],null,null,null,null,null))],null,null)}var k=function(){return function(){}}(),z=i.ob({encapsulation:0,styles:[['[_nghost-%COMP%]{position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;width:100%;height:100%;background:#581879;color:#fff}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{overflow:hidden}#title-container[_ngcontent-%COMP%]{flex:0 10%;display:flex}#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{position:relative;margin:auto;text-transform:uppercase}#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]::after{content:" ";position:absolute;width:100%;height:.1em;top:53%;left:0;background:#581879}#description-container[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:stretch;flex-wrap:wrap}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex:0 50%}@media screen and (max-width:calc(600px - 1px)){#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:0 100%}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:auto;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:80%;display:flex;flex-direction:column;align-items:center;max-width:50vw}@media screen and (max-width:calc(600px - 1px)){#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:70vw}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child{margin-bottom:10px}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:.15em}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%]{width:80%;opacity:.8}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}@media screen and (max-width:599px){#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{font-size:27px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:14px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:19px}#bubbles-container[_ngcontent-%COMP%]{flex:0 30%}}@media screen and (min-width:600px) and (max-width:959px){#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{font-size:36px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:16px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:21.6px}}@media screen and (min-width:960px) and (max-width:1279px){#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{font-size:45px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}@media screen and (min-width:1280px) and (max-width:1919px){#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{font-size:54px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}@media screen and (min-width:1920px){#title-container[_ngcontent-%COMP%]   #im[_ngcontent-%COMP%]{font-size:63px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:20px}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:27px}}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{min-height:1px;height:.1em;width:0;opacity:.1;background:#fff;transition:width .5s ease-in-out,opacity .5s ease}#description-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:inherit;font-weight:lighter;color:rgba(255,255,255,.7);text-align:center}#bubbles-container[_ngcontent-%COMP%]{overflow:visible}@media screen and (min-width:600px) and (max-width:959px){#bubbles-container[_ngcontent-%COMP%]{flex:0 35%}}@media screen and (min-width:960px) and (max-width:1279px){#bubbles-container[_ngcontent-%COMP%]{flex:0 40%}}@media screen and (min-width:1280px) and (max-width:1919px){#bubbles-container[_ngcontent-%COMP%]{flex:0 50%}}@media screen and (min-width:1920px){#bubbles-container[_ngcontent-%COMP%]{flex:0 55%}}#wave-container[_ngcontent-%COMP%]{overflow:visible;position:relative;flex:0 10%}.icon-panel[_ngcontent-%COMP%]{top:15%}  .bubble-container{position:absolute;z-index:2;opacity:.9;transition:opacity .3s linear,-webkit-filter .3s linear;transition:opacity .3s linear,filter .3s linear;transition:opacity .3s linear,filter .3s linear,-webkit-filter .3s linear}  .bubble-container .bubble{background:#fff;border-radius:50%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;box-shadow:0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.1)}  .bubble-container .bubble svg{position:absolute;transition:opacity .3s ease-in-out,top .3s ease-in-out;opacity:0;top:20px;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:visible;-webkit-filter:drop-shadow(0 4px 12px rgba(0, 0, 0, .1));filter:drop-shadow(0 4px 12px rgba(0, 0, 0, .1));z-index:1}  .bubble-container .bubble svg.back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}  .bubble-container .bubble img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;border-radius:50%;z-index:3}  .bubble-container .bubble img.back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}  .bubble-container:hover{opacity:1}  .bubble-container:hover svg{opacity:1;top:0}']],data:{}});function S(t){return i.Db(0,[(t()(),i.qb(0,0,null,null,24,"div",[],null,null,null,null,null)),(t()(),i.qb(1,0,null,null,2,"div",[["id","title-container"]],null,null,null,null,null)),(t()(),i.qb(2,0,null,null,1,"span",[["id","im"]],null,null,null,null,null)),(t()(),i.Cb(-1,null,["Lina"])),(t()(),i.qb(4,0,null,null,14,"div",[["id","description-container"]],null,null,null,null,null)),(t()(),i.qb(5,0,null,null,6,"div",[],null,null,null,null,null)),(t()(),i.qb(6,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(t()(),i.qb(7,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(t()(),i.Cb(-1,null,["Full-Stack TypeScript Developer"])),(t()(),i.qb(9,0,null,null,0,"span",[["class","divider"]],null,null,null,null,null)),(t()(),i.qb(10,0,null,null,1,"span",[["class","description"]],null,null,null,null,null)),(t()(),i.Cb(-1,null,["Skilled in software systems design and engineering, including back-end Microservices, APIs and front-end applications for the Web, Mobile and Desktop."])),(t()(),i.qb(12,0,null,null,6,"div",[],null,null,null,null,null)),(t()(),i.qb(13,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(t()(),i.qb(14,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(t()(),i.Cb(-1,null,["DevOps Engineer"])),(t()(),i.qb(16,0,null,null,0,"span",[["class","divider"]],null,null,null,null,null)),(t()(),i.qb(17,0,null,null,1,"span",[["class","description"]],null,null,null,null,null)),(t()(),i.Cb(-1,null,["Experienced in continuous testing and deployment using latest CI/CD technologies. As well as hosting Databases, Apps and Servers on scalable Cloud services."])),(t()(),i.qb(19,0,null,null,2,"div",[["id","bubbles-container"]],null,null,null,null,null)),(t()(),i.qb(20,0,null,null,1,"app-img-bubbles",[],null,[["window","keyup"]],function(t,e,n){var s=!0;return"window:keyup"===e&&(s=!1!==i.zb(t,21).onKeyUp(n)&&s),s},y,C)),i.pb(21,4243456,null,0,x,[w.c,i.k],null,null),(t()(),i.qb(22,0,null,null,2,"div",[["id","wave-container"]],null,null,null,null,null)),(t()(),i.qb(23,0,null,null,1,"app-waves",[],null,[["window","resize"]],function(t,e,n){var s=!0;return"window:resize"===e&&(s=!1!==i.zb(t,24).onResize()&&s),s},_,O)),i.pb(24,4243456,null,0,P,[],null,null)],null,null)}var A=function(){function t(){this._theme="light",this._theme="dark"===localStorage.getItem("theme")?"dark":"light",this.updateTheme()}return Object.defineProperty(t.prototype,"isDark",{get:function(){return"dark"===this._theme},enumerable:!0,configurable:!0}),t.prototype.switchTheme=function(){this._theme="light"===this._theme?"dark":"light",this.updateTheme()},t.prototype.updateTheme=function(){document.body.className="dark"===this._theme?"dark-theme":"",localStorage.setItem("theme",this._theme)},t.ngInjectableDef=i.Fb({factory:function(){return new t},token:t,providedIn:"root"}),t}(),N=function(){return function(t){this.theme=t}}(),q=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100vh;width:calc(100vw - 64px);overflow-y:auto}@media screen and (max-width:calc(960px - 1px)){[_nghost-%COMP%]{width:100vw;height:calc(100vh - 64px)}}.section[_ngcontent-%COMP%]{width:100%;height:100%;min-height:500px;overflow:hidden;display:block;box-sizing:border-box}"]],data:{}});function E(t){return i.Db(0,[(t()(),i.qb(0,0,null,null,1,"app-intro",[["class","section"]],null,null,null,S,z)),i.pb(1,49152,null,0,k,[],null,null)],null,null)}function Y(t){return i.Db(0,[(t()(),i.qb(0,0,null,null,1,"app-home",[],null,null,null,E,q)),i.pb(1,49152,null,0,N,[A],null,null)],null,null)}var W=i.mb("app-home",N,Y,{},{},[]),j=n("Ip0R"),I=n("M2Lx"),D=n("ZYjt"),G=n("Wf4p"),R=n("ZYCi"),X=function(){return function(){}}(),B=n("Fzqc"),F=n("dWZg"),L=n("UodH"),T=n("kWGw"),H=n("SMsm"),Z=n("HkZ/"),K=n("pKmL");n.d(e,"HomeModuleNgFactory",function(){return U});var U=i.nb(s,[],function(t){return i.wb([i.xb(512,i.j,i.ab,[[8,[l.a,W]],[3,i.j],i.x]),i.xb(4608,j.j,j.i,[i.u,[2,j.q]]),i.xb(4608,I.a,I.a,[]),i.xb(4608,D.e,G.a,[[2,G.c],[2,G.e]]),i.xb(1073742336,j.b,j.b,[]),i.xb(1073742336,R.l,R.l,[[2,R.q],[2,R.k]]),i.xb(1073742336,X,X,[]),i.xb(1073742336,B.a,B.a,[]),i.xb(1073742336,G.e,G.e,[[2,G.b],[2,D.f]]),i.xb(1073742336,F.b,F.b,[]),i.xb(1073742336,G.g,G.g,[]),i.xb(1073742336,L.c,L.c,[]),i.xb(1073742336,T.b,T.b,[]),i.xb(1073742336,I.b,I.b,[]),i.xb(1073742336,T.a,T.a,[]),i.xb(1073742336,H.c,H.c,[]),i.xb(1073742336,Z.a,Z.a,[]),i.xb(1073742336,o.a,o.a,[]),i.xb(1073742336,K.a,K.a,[]),i.xb(1073742336,s,s,[]),i.xb(1024,R.i,function(){return[[{path:"",component:N}]]},[])])})}}]);