(this["webpackJsonpprofile-picture-generator"]=this["webpackJsonpprofile-picture-generator"]||[]).push([[0],{38:function(e,t,n){},42:function(e,t,n){var a={"./barre-a-gauche.png":[50,5],"./cadre.png":[51,6],"./logo-bas-centre-fond-blanc.png":[52,7],"./logo-bas-gauche.png":[53,8],"./logo-centre-fond-blanc.png":[54,9],"./logo-centre.png":[55,10],"./rouge.png":[56,11]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=42,e.exports=c},43:function(e,t,n){var a={"./NouveauFrontPopulaire.png":[57,12],"./NouveauFrontPopulaire.small.png":[58,13]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=43,e.exports=c},48:function(e,t,n){var a={"./fr.ftl":[59,3]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=48,e.exports=c},49:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(2),r=n(1),o=n(0),s=n.n(o),u=n(25),i=n.n(u),O=n(13),h=n(6),l=n(32),d=(n(38),n(30)),j=n(27),b=n(4),f=n.n(b),p=n(9);var g=function(e){var t=e.onChange,a=Object(o.useState)([]),s=Object(c.a)(a,2),u=s[0],i=s[1],O=Object(o.useState)(null),h=Object(c.a)(O,2),l=h[0],d=h[1],j=l?l.src:null;Object(o.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(["logo-centre-fond-blanc","logo-bas-centre-fond-blanc","logo-bas-gauche","logo-centre","cadre","barre-a-gauche"].map(function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n(42)("./".concat(t,".png"));case 3:return e.t1=e.sent.default,e.abrupt("return",{name:e.t0,src:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){i(e),d(e[0])}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=Object(o.useCallback)((function(e){d(e)}),[d]);return Object(o.useEffect)((function(){t(l)}),[t,l]),Object(r.jsx)("div",{className:"FrameChooser",children:u.map((function(e){var t=e.src,n=j===t;return Object(r.jsx)("div",{"data-src":t,className:n?"frame choosen":"frame",onClick:function(){return b(e)},children:Object(r.jsx)("img",{alt:e.name,src:t})},t)}))})},w=n(17),m=n(10),A=function(e){return Object(r.jsx)(w.b,Object(h.a)(Object(h.a)({},e),{},{elems:Object(h.a)({br:Object(r.jsx)("br",{})},e.elems),children:Object(r.jsx)(s.a.Fragment,{children:e.children})}),e.id)};function v(e){return function(t){var n=s.a.useContext(m.a);return s.a.createElement(e,Object(h.a)({getString:function(e,t,a){return n.getString(e,t,a||" ")}},t))}}var x={};var C=v((function(e){var t=e.onChange,a=e.getString,s=Object(o.useState)([]),u=Object(c.a)(s,2),i=u[0],h=u[1],l=Object(o.useState)(null),d=Object(c.a)(l,2),j=d[0],b=d[1],g=j?j.src:null,w=a("hashtags");Object(o.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all([""].concat(Object(O.a)(w.split("\n").map((function(e){return e.trim()})).filter((function(e){return e.length>0})))).map(function(){var e=Object(p.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t,""===t){e.next=5;break}return e.next=4,n(43)("./".concat(t,".png"));case 4:a=e.sent.default;case 5:return c=x[t]||t,e.abrupt("return",{name:c,src:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){h(e),b(e[0])}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]);var m=Object(o.useCallback)((function(e){b(e)}),[b]);return Object(o.useEffect)((function(){t(j)}),[t,j]),Object(r.jsx)("div",{className:"HashtagChooser",children:i.map((function(e){var t=e.src,n=g===t;return Object(r.jsx)("button",{"data-src":t,className:n?"isInRow choosen":"isInRow",onClick:function(){return m(e)},children:""===e.name?a("button_no_hashtag"):e.name},e.name)}))})})),D=n(28),Q=n.n(D),H=n(29),T=n.n(H);function U(e,t,n){return Math.min(Math.max(t,e),n)}var N=function(e){var t=e.onChange,n=e.backgroundURL,a=e.backgroundRatio,s=e.frameURL,u=e.hashtagURL,i=Object(o.useRef)(null),O=Object(o.useRef)(null),h=Object(o.useState)(!1),l=Object(c.a)(h,2),d=l[0],j=l[1],b=Object(o.useState)(null),f=Object(c.a)(b,2),p=f[0],g=f[1],w=Object(o.useState)(null),m=Object(c.a)(w,2),A=m[0],v=m[1],x=Object(o.useState)(0),C=Object(c.a)(x,2),D=C[0],H=C[1],N=Object(o.useState)(0),k=Object(c.a)(N,2),F=k[0],K=k[1],E=Object(o.useState)(0),S=Object(c.a)(E,2),y=S[0],_=S[1],L=Object(o.useState)(0),B=Object(c.a)(L,2),R=B[0],M=B[1],I=Object(o.useState)(1),P=Object(c.a)(I,2),Y=P[0],V=P[1],X=Object(o.useState)(300),z=Object(c.a)(X,2),J=z[0],G=z[1],W=Object(o.useState)(300),q=Object(c.a)(W,2),Z=q[0],$=q[1],ee=Object(o.useState)(300),te=Object(c.a)(ee,2),ne=te[0],ae=te[1],ce=Object(o.useState)(300),re=Object(c.a)(ce,2),oe=re[0],se=re[1],ue=Object(o.useState)(0),ie=Object(c.a)(ue,2),Oe=ie[0],he=ie[1],le=Object(o.useState)(0),de=Object(c.a)(le,2),je=de[0],be=de[1],fe=Object(o.useState)(0),pe=Object(c.a)(fe,2),ge=pe[0],we=pe[1],me=Object(o.useState)(0),Ae=Object(c.a)(me,2),ve=Ae[0],xe=Ae[1];Object(o.useEffect)((function(){t&&t({x:D,y:F,scale:Y})}),[t,D,F,Y]),Object(o.useEffect)((function(){if(i&&i.current){var e=i.current.offsetWidth,t=i.current.offsetHeight;se(t),ae(e);var n=1,c=1;a<1?n=1/a:a>1&&(c=1*a),G(n),$(c)}}),[a]),Object(o.useEffect)((function(){var e=function(e,t,n,a,c){var r=Math.max(0,e*n-a)/2,o=Math.max(0,t*n-c)/2;return{rangeMaxX:r,rangeMinX:0-r,rangeMaxY:o,rangeMinY:0-o}}(J*ne,Z*oe,Y,ne,oe),t=e.rangeMinX,n=e.rangeMinY,a=e.rangeMaxX,c=e.rangeMaxY;he(t),be(n),we(a),xe(c)}),[J,Z,ne,oe,Y]),Object(o.useEffect)((function(){H(0),K(0),_(0),M(0),V(1)}),[n]);var Ce=Object(o.useCallback)((function(e){var t=1*e.target.dataset.x,n=1*e.target.dataset.y,a=U(t+e.deltaX,Oe,ge),c=U(n+e.deltaY,je,ve);e.isFinal?(H(a||0),K(c||0),_(0),M(0)):(_(a-t||0),M(c-n||0))}),[Oe,je,ge,ve]),De=Object(o.useCallback)((function(e,t,n,a){e.preventDefault();var c=U(1*e.target.dataset.scale+t/200,1,8);V(c||1);var r=1*e.target.dataset.x,o=1*e.target.dataset.y;H(U(r,Oe,ge)||0),K(U(o,je,ve)||0)}),[Oe,je,ge,ve]);return Object(o.useEffect)((function(){if(!d&&i&&i.current){var e=i.current;e.addEventListener("mousedown",(function(e){e.preventDefault()}),!1),e.addEventListener("touchstart",(function(e){e.preventDefault()}),!1),e.addEventListener("touchend",(function(e){e.preventDefault()}),!1),e.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),g(new Q.a(e,{direction:"DIRECTION_ALL"})),v(T()(e)),j(!0)}}),[i,d]),Object(o.useEffect)((function(){if(p&&A&&d&&i&&i.current)return p.on("pan",Ce),A.wheel(De),function(){p.off("pan",Ce),A.unwheel()}}),[i,Ce,De,d,p,A]),Object(r.jsxs)("div",{className:"Editor",ref:i,"data-x":D,"data-y":F,"data-scale":Y,children:[Object(r.jsx)("img",{src:n,ref:O,alt:"",className:"background",style:{width:100*J+"%",height:100*Z+"%",transform:"translate3d(calc(-50% + ".concat(D+y,"px), calc(-50% + ").concat(F+R,"px), 0)  scale(").concat(Y,",").concat(Y,")")}}),Object(r.jsx)("img",{src:s,alt:"",className:"foreground"}),Object(r.jsx)("img",{src:u,alt:"",className:"hashtag"})]})},k=n.p+"static/media/nouveauFrontPopulaire.d2dff154.png",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4AgMAAACRfoQcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURVAjeFAjeE8jd3Yl3xwAAAADdFJOU//+/Q3dsqEAAATsSURBVHgB7dAxAQAABAAwQtI/ipMCvi3CgiMV6NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQ4cOdOjQoUOHDh06dOjQoUOHDh06dOjQoQMdOnTo0KFDhw4dOnTo0KFDhw4dOnToQIcOHTp06NChQ4cOHTp06NChQ4cOHejQoUOHDh06dOjQoUOHDh06dOjQoUMHOnTo0KFDhw4dOnTo0KFDhw4dOnTo0IEOHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NChQIcOHTp06NChQ4cOHTp06NChQ4cOHejQoUOHDh06dOjQoUOHDh06dOjQoUMHOnTo0KFDhw4dOnTo0KFDhw4dOnTo0IEOHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06ECHDh06dOjQoUOHDh06dOjQoUOHDh060KFDhw4dOnTo0KFDhw4dOnTo0KFDhw506NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQ4cOBTp06NChQ4cOHTp06NChQ4cOHTp06ECHDh06dOjQoUOHDh06dOjQoUOHDh060KFDhw4dOnTo0KFDhw4dOnTo0KFDhw506NChQ4cOHTp06NChQ4cOHTp06NChAx06dOjQoUOHDh06dOjQoUOHDh06dOhAhw4dOnTo0KFDhw4dOnTo0KFDhw4dOtChQ4cOHTp06NChQ4cOHTp06NChQwc6dOjQoUOHDh06dOjQoUOHDh06dOjQgQ4dOnTo0KFDhw4dOnTo0KFDhw4dOnSgQ4cOHTp06NChQ4cOHTp06NChQ4cOHTx06NChQ4cOdOjQoUOHDh06dOjQoUOHDh06dOjQoQMdOnTo0KFDhw4dOnTo0KFDhw4dOnToQIcOHTp06NChQ4cOHTp06NChQ4cOHTrQoUOHDh06dOjQoUOHDh06dOjQoUOHDnTo0KFDhw4dOnTo0KFDhw4dOnTo0KEDHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NCBDh06dOjQoUOHDh06dOjQoUOHDh06dKBDhw4dOnTo0KFDhw4dOnTo0KFDhw4d6NChQ4cOHTp06NChQ4cOHTp06NChQ4cCHTp06NChQ4cOHTp06NChQ4cOHTp0oEOHDh06dOjQoUOHDh06dOjQoUOHDh3o0KFDhw4dOnTo0KFDhw4dOnTo0KFDBzp06NChQ4cOHTp06NChQ4cOHTp06NCBDh06dOjQoUOHDh06dOjQoUOHDh06dKBDhw4dOnTo0KFDhw4dOnTo0KFDhw4dxeoB30xd38yzCvgAAAAASUVORK5CYII=",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAALSURBVHgBY2BgAAAAAwABjPg5OgAAAABJRU5ErkJggg==",E=1080;function S(e){var t=e.href,n=e.name,a=e.target,c=e.children,s=Object(l.a)(e,["href","name","target","children"]),u=Object(o.useCallback)((function(e){return window.umami&&n&&window.umami.track("A: "+n),a?window.open(t,a):setTimeout((function(){window.location=t}),200),e.preventDefault(),!1}),[t,n,a]);return Object(r.jsx)("a",Object(h.a)(Object(h.a)({},s),{},{href:t,onClick:u,children:c}))}var y=v((function(e){var t=e.getString,n=(e.locales,e.currentLocale,e.onLanguageChange,Object(o.useState)(null)),a=Object(c.a)(n,2),s=a[0],u=a[1],i=Object(o.useState)(null),l=Object(c.a)(i,2),b=l[0],f=l[1],p=Object(o.useState)(null),w=Object(c.a)(p,2),m=w[0],v=w[1],x=Object(o.useState)(1),D=Object(c.a)(x,2),Q=D[0],H=D[1],T=Object(o.useState)(null),U=Object(c.a)(T,2),y=U[0],_=U[1],L=s?s.src:null,B=b?b.src:null,R=Object(o.useState)(0),M=Object(c.a)(R,2),I=M[0],P=M[1],Y=Object(o.useState)(0),V=Object(c.a)(Y,2),X=V[0],z=V[1],J=Object(o.useState)({x:0,y:0,scale:1}),G=Object(c.a)(J,2),W=G[0],q=G[1],Z=Object(o.useCallback)((function(e){u(e)}),[u]),$=Object(o.useCallback)((function(e){f(e)}),[f]),ee=Object(o.useCallback)((function(e){var t=e.x,n=e.y,a=e.scale;q({x:t,y:n,scale:a})}),[]),te=Object(o.useCallback)((function(e){if(e){var t=new FileReader;t.onload=function(t){var n=new Image;n.onload=function(){var a,c;n.width<n.height?(c=n.height/n.width*E,a=E):(c=E,a=n.width/n.height*E),function(e,t){var n=new FileReader;n.onload=function(e){var n=new DataView(e.target.result);if(65496!==n.getUint16(0,!1))return t(-2);for(var a=n.byteLength,c=2;c<a;){var r=n.getUint16(c,!1);if(c+=2,65505===r){if(1165519206!==n.getUint32(c+=2,!1))return t(-1);var o=18761===n.getUint16(c+=6,!1);c+=n.getUint32(c+4,o);var s=n.getUint16(c,o);c+=2;for(var u=0;u<s;u++)if(274===n.getUint16(c+12*u,o))return t(n.getUint16(c+12*u+8,o))}else{if(65280!==(65280&r))break;c+=n.getUint16(c,!1)}}return t(-1)},n.readAsArrayBuffer(e.slice(0,65536))}(e,(function(e){var n=1;switch(e){case 2:case 3:case 4:n=c/a;break;case 5:case 6:case 7:case 8:n=a/c;break;default:n=c/a}P(a),z(c),v(t.target.result),_(e),H(n)}))},n.src=t.target.result},t.readAsDataURL(e)}}),[]),ne=Object(o.useCallback)((function(e){te(e.target.files[0])}),[te]),ae=Object(o.useCallback)((function(e){te(e[0])}),[te]),ce=Object(o.useCallback)((function(){var e=new Image;e.onload=function(){var t=document.createElement("canvas");t.width=E,t.height=E;var n=t.getContext("2d",{alpha:!0});switch(y){case 2:n.translate(t.width,0),n.scale(-1,1);break;case 3:n.translate(t.width,t.height),n.rotate(Math.PI);break;case 4:n.translate(0,t.height),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-t.height);break;case 7:n.rotate(.5*Math.PI),n.translate(t.width,-t.height),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-t.width,0)}var a=I*W.scale,c=X*W.scale;n.drawImage(e,3.5*W.x+.5*(E-a),3.5*W.y+.5*(E-c),a,c);var r=t.toDataURL();Object(j.a)([F].concat(Object(O.a)(r?[r]:[]),Object(O.a)(L?[L]:[]),Object(O.a)(B?[B]:[]))).then((function(e){!function(e,t){var n=document.createElement("a");document.body.appendChild(n),n.download=e,n.href=t,n.click(),n.remove()}("image-de-profil-nouveau-front-populaire.png",e);var t=s.name||"No-Frame",n=b.name||"No-Hashtag";window.umami&&(window.umami.track("F: "+t),window.umami.track("H: "+n),window.umami.track("C: "+[t,n].join(" | ")))}))},e.src=m}),[m,W.x,W.y,W.scale,y,L,B,X,I,s,b]),re=Object(d.a)({onDrop:ae,accept:"image/*",maxFiles:1,noKeyboard:!0}),oe=re.isDragActive,se=re.getRootProps;return Object(r.jsxs)("div",Object(h.a)(Object(h.a)({className:"App"},se()),{},{children:[Object(r.jsx)("img",{src:k,className:"HeaderImage",alt:t("alt_nfp_logo")}),Object(r.jsx)("h1",{children:Object(r.jsx)(A,{id:"title_profile_generator"})}),Object(r.jsx)("div",{className:oe?"droparea active":"droparea",children:Object(r.jsx)(A,{id:"title_drop_photo_here"})}),Object(r.jsx)("h2",{children:Object(r.jsx)(A,{id:"title_choose_photo"})}),Object(r.jsx)("p",{children:Object(r.jsx)(A,{id:"text_choose_photo_info"})}),Object(r.jsxs)("label",{className:"labelButton",tabIndex:"0",style:{outline:"none"},children:[m?Object(r.jsx)("img",{src:m,alt:"Preview"}):null,Object(r.jsx)("span",{children:t(m?"button_change_photo":"button_load_photo")}),Object(r.jsx)("input",{onChange:ne,type:"file",accept:"image/*",style:{display:"none"}})]}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:Object(r.jsx)(A,{id:"title_choose_frame"})}),Object(r.jsx)(g,{onChange:Z}),(L||"").startsWith("/static/media/btw_")?null:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:Object(r.jsx)(A,{id:"title_choose_hashtag"})}),Object(r.jsx)(C,{onChange:$})]})]}),m&&L?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:Object(r.jsx)(A,{id:"title_reposition_photo"})}),Object(r.jsx)(N,{backgroundURL:m||K,backgroundRatio:Q,frameURL:L,hashtagURL:B||K,onChange:ee}),Object(r.jsx)("button",{onClick:ce,children:Object(r.jsx)(A,{id:"button_download"})})]}):null,Object(r.jsxs)("footer",{children:[Object(r.jsx)(S,{name:"source_code",href:"https://github.com/maxlath/profile-picture-generator",children:Object(r.jsx)(A,{id:"link_source_code"})}),"\xa0 \u2022 \xa0",Object(r.jsx)(S,{name:"contact",href:"mailto:k+generateur-image-frontpop@maxlath.eu",children:Object(r.jsx)(A,{id:"link_app_contact"})})]})]}))})),_=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},L=(n(44),n(21)),B=n(20),R=n(31),M={fr:"Fran\xe7ais"},I=Object.keys(M);function P(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(p.a)(f.a.mark((function e(t){var a,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(48)("./"+t+".ftl");case 2:return a=e.sent,e.next=5,fetch(a.default);case 5:return c=e.sent,e.next=8,c.text();case 8:return r=e.sent,e.abrupt("return",Object(L.a)({},t,new B.b(r)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return X.apply(this,arguments)}function X(){return(X=Object(p.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(P));case 2:return n=e.sent,c=n.reduce((function(e,t){return Object.assign(e,t)})),e.abrupt("return",f.a.mark((function e(){var n,r,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(a.a)(t),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=11;break}return o=r.value,(s=new B.a(o)).addResource(c[o]),e.next=9,s;case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){var t=e.userLocales,n=e.children,a=e.onLocaleChange,s=Object(o.useState)(function(){var e=new B.a("");return e.addResource(new B.b("")),new w.c([e])}()),u=Object(c.a)(s,2),i=u[0],O=u[1];return Object(o.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(R.a)(t,I,{defaultLocale:"fr"}),a&&a(n),e.next=4,V(n);case 4:c=e.sent,O(new w.c(c()));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a]),i?Object(r.jsx)(w.a,{l10n:i,children:n}):Object(r.jsx)("div",{children:"Loading texts\u2026"})}function J(){var e=Object(o.useState)(navigator.languages),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(o.useState)(null),i=Object(c.a)(u,2),O=i[0],h=i[1];Object(o.useEffect)((function(){var e=navigator.languages;if(window.umami&&(e||Array.isArray(e))){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var c=t.value;window.umami.track("L: "+c)}}catch(r){n.e(r)}finally{n.f()}}}),[]);var l=Object(o.useCallback)((function(e){s([e.target.dataset.locale])}),[s]),d=Object(o.useCallback)((function(e){h(e.length>0?e[0]:"")}),[h]);return Object(r.jsx)(z,{userLocales:n,onLocaleChange:d,children:Object(r.jsx)(y,{locales:M,currentLocale:O,onLanguageChange:l})},"AppLocalizationProvider")}i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),_()}},[[49,1,2]]]);
//# sourceMappingURL=main.219bb544.chunk.js.map