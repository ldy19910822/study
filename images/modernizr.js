/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-teststyles-testprop-testallprops-prefixes-domprefixes
 */
window.Modernizr=(function(e,t,l){var f="2.8.3",g={},s=t.documentElement,D="modernizr",B=t.createElement(D),c=B.style,h,z={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",E=o.split(" "),b=o.toLowerCase().split(" "),k={},n={},u={},A=[],v=A.slice,q,w=function(P,Q,I,R){var J,O,L,M,H=t.createElement("div"),N=t.body,K=N||t.createElement("body");if(parseInt(I,10)){while(I--){L=t.createElement("div");L.id=R?R[I]:D+(I+1);H.appendChild(L)}}J=["&#173;",'<style id="s',D,'">',P,"</style>"].join("");H.id=D;(N?H:K).innerHTML+=J;K.appendChild(H);if(!N){K.style.background="";K.style.overflow="hidden";M=s.style.overflow;s.style.overflow="hidden";s.appendChild(K)}O=Q(H,P);if(!N){K.parentNode.removeChild(K);s.style.overflow=M}else{H.parentNode.removeChild(H)}return !!O},G=({}).hasOwnProperty,C;if(!m(G,"undefined")&&!m(G.call,"undefined")){C=function(I,H){return G.call(I,H)}}else{C=function(I,H){return((H in I)&&m(I.constructor.prototype[H],"undefined"))}}if(!Function.prototype.bind){Function.prototype.bind=function F(J){var K=this;if(typeof K!="function"){throw new TypeError()}var H=v.call(arguments,1),I=function(){if(this instanceof I){var M=function(){};M.prototype=K.prototype;var L=new M();var N=K.apply(L,H.concat(v.call(arguments)));if(Object(N)===N){return N}return L}else{return K.apply(J,H.concat(v.call(arguments)))}};return I}}function a(H){c.cssText=H}function j(I,H){return a(x.join(I+";")+(H||""))}function m(I,H){return typeof I===H}function d(I,H){return !!~(""+I).indexOf(H)}function r(I,J){for(var H in I){var K=I[H];if(!d(K,"-")&&c[K]!==l){return J=="pfx"?K:true}}return false}function y(I,L,K){for(var H in I){var J=L[I[H]];if(J!==l){if(K===false){return I[H]}if(m(J,"function")){return J.bind(K||L)}return J}}return false}function p(L,K,J){var I=L.charAt(0).toUpperCase()+L.slice(1),H=(L+" "+E.join(I+" ")+I).split(" ");if(m(K,"string")||m(K,"undefined")){return r(H,K)}else{H=(L+" "+(b).join(I+" ")+I).split(" ");return y(H,K,J)}}k.csstransforms=function(){return !!p("transform")};k.csstransforms3d=function(){var H=!!p("perspective");if(H&&"webkitPerspective" in s.style){w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(I,J){H=I.offsetLeft===9&&I.offsetHeight===3})}return H};k.csstransitions=function(){return p("transition")};for(var i in k){if(C(k,i)){q=i.toLowerCase();g[q]=k[i]();A.push((g[q]?"":"no-")+q)}}g.addTest=function(H,J){if(typeof H=="object"){for(var I in H){if(C(H,I)){g.addTest(I,H[I])}}}else{H=H.toLowerCase();if(g[H]!==l){return g}J=typeof J=="function"?J():J;if(typeof enableClasses!=="undefined"&&enableClasses){s.className+=" "+(J?"":"no-")+H}g[H]=J}return g};a("");B=h=null;g._version=f;g._prefixes=x;g._domPrefixes=b;g._cssomPrefixes=E;g.testProp=function(H){return r([H])};g.testAllProps=p;g.testStyles=w;return g})(this,this.document);