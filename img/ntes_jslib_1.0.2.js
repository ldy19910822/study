(function(R,f){
	function L(_,B,$){
		var A=s.exec(_,B||c);
		if($!==f)if(A){
				var C=T.util.isArray(A);
				if(1===$&&C)return A[0];
				if(0===$&&!C)return[A];
		}else if(0===$)
			return[];
			return A
		}
		function M(A){
			if(A&&!A[_])if(A.nodeType){
				if("unknown"!=typeof A.getAttribute)
					for(var $ in T.element)
						f===A[$]&&(A[$]=T.element[$])
			}else A=T.util.extend(T.util.toArray(A),T.element);
						return A
		}
		function X(){
			if(!T.dom.isReady){
				try{
					c.documentElement.doScroll("left")
				}catch($){
						return setTimeout(X,1),void 0
				}
				j()
			}
		}
		function j(){
			if(!T.dom.isReady){
				if(!c.body)
					return setTimeout(j,13);
				if(T.dom.isReady=!0,V){
					for(var _=-1,$=V.length;$>++_;)
						V[_].call(c,T);
						V=null
				}
			}
		}
		function Q(){
			if(!C){
				if("complete"===c.readyState)
					return j();
				if(c.addEventListener)
					c.addEventListener("DOMContentLoaded",j,!1),R.addEventListener("load",j,!1);
				else if(c.attachEvent){
					c.attachEvent("onreadystatechange",j),R.attachEvent("onload",j);
					var _;
					try{
						_=null==R.frameElement
					}catch($){}
					c.documentElement.doScroll&&_&&X()
				}
				C=!0
			}
		}
		function u($,B,_){
			if(this.className){
				for(var A=" "+this.className+" ",C=-1;B>++C;)
					-1===A.indexOf(" "+$[C]+" ")&&(A+=$[C]+" ");
					this.className=A.trim()
			}else this.className=_
		}
		function h($,B,_){
			switch(this.className){
				case _:
					this.className="";
					break;
				case"":
					return;
				default:
					for(var A=" "+this.className+" ",C=-1;B>++C;)
					A=A.replace(" "+$[C]+" "," ");
					this.className=A.trim()
			}
		}function t(A,_){
			if(""===this.style.cssText&&"string"==typeof _)
				this.style.cssText=_;
			else 
				for(var $ in A)
					this.style[$]!==f&&(this.style[$]=A[$])
		}
		function m(_){
			for(var $ in _)
				this.style[$]!==f&&(this.style[$]="")
		}
		function n(A,B,_){
			var $=this;
			B=T.event.delegate($,A,B,_),
			$.attachEvent?$.attachEvent("on"+A,B):$.addEventListener&&$.addEventListener(A,B,!1)
		}
		function g(_,A){
			var $=this;
			A=T.event.getDelegate($,_,A),
			$.detachEvent?$.detachEvent("on"+_,A):$.removeEventListener&&$.removeEventListener(_,A,!1)
		}
		function B($){
			return 10>$?"0"+$:$
		}
		function l($){
			switch($){
				case"yyyy":
					return U;
				case"yy":
					return(""+U).slice(-2);
				case"MM":
					return B(F);
				case"M":
					return F;
				case"dd":
					return B(p);
				case"d":
					return p;
				case"HH":
					return B(P);
				case"H":
					return P;
				case"hh":
					return B(P>12?P-12:P);
				case"h":
					return P>12?P-12:P;
				case"mm":
					return B(Y);
				case"m":
					return Y;
				case"ss":
					return B(G);
				case"s":
					return G;
				default:
					return $
			}
		}
		var b="1.2.5 Build 201008041550",_="NTES";
		if(!(R[_]&&R[_].version>=b)){
			var A=R.$,c=R.document,
			T=R[_]=R.$=function($,_){
				return $?("string"==typeof $&&($=L($,_)),M($)):$
			};
			T.one=function($,_){
				return M(L($,_,1))
			},
			T.all=function($,_){
					return M(L($,_,0))
			},
			T.version=b,
			T.resume=function(){
				return A=R.$,R.$=R[_]=T,T},
								T.retire=function(){
								return R.$=A,A};
				var O=c.createElement("div");
				O.innerHTML="<p class='TEST'></p>";
				var s={
					SPACE:/\s*([\s>~+,])\s*/g,
					ISSIMPLE:/^#?[\w\u00c0-\uFFFF_-]+$/,
					IMPLIEDALL:/([>\s~\+,]|^)([#\.\[:])/g,
					ATTRVALUES:/=(["'])([^'"]*)\1]/g,
					ATTR:/\[\s*([\w\u00c0-\uFFFF_-]+)\s*(?:(\S?\=)\s*(.*?))?\s*\]/g,
					PSEUDOSEQ:/\(([^\(\)]*)\)$/g,
					BEGINIDAPART:/^(?:\*#([\w\u00c0-\uFFFF_-]+))/,
					STANDARD:/^[>\s~\+:]/,
					STREAM:/[#\.>\s\[\]:~\+]+|[^#\.>\s\[\]:~\+]+/g,
					ISINT:/^\d+$/,
					enableQuerySelector:O.querySelectorAll&&O.querySelectorAll(".TEST").length>0,
					tempAttrValues:[],
					tempAttrs:[],
					idName:_+"UniqueId",
					id:0,
					exec:function($,I){
						var _,G,E,C,B,J,K,F,H,L,D=this;
						if($=$.trim(),""!==$){
							if(D.ISSIMPLE.test($)){
								if(0===$.indexOf("#")&&I.getElementById!==void 0)
									return D.getElemById(I,$.substr(1));
								if(I.getElementsByTagName!==void 0)
									return T.util.toArray(I.getElementsByTagName($))
								}
								if(D.enableQuerySelector&&I.nodeType)
									try{
										return T.util.toArray(I.querySelectorAll($))
									}catch(A){}
									for(I=I.nodeType?[I]:
											T.util.toArray(I),G=$.replace(D.SPACE,"$1").replace(D.ATTRVALUES,D.analyzeAttrValues).replace(D.ATTR,D.analyzeAttrs).replace(D.IMPLIEDALL,"$1*$2").split(","),E=G.length,C=-1,_=[];E>++C;
											){
										if(J=I,$=G[C],D.BEGINIDAPART.test($))
											if(I[0].getElementById!==void 0){
												if(J=[D.getElemById(I[0],RegExp.$1)],!J[0])
													continue;
													$=RegExp.rightContext}
												else $=G[C];
												if(""!==$)
													for(D.STANDARD.test($)||($=" "+$),
															K=$.match(D.STREAM)||[],
															F=K.length,B=0;
															F>B&&(H=K[B++],L=K[B++],J=D.operators[H]?D.operators[H](J,L):
																	[],0!==J.length););
															T.util.merge(_,J)
												}
							return D.tempAttrValues.length=D.tempAttrs.length=0,_.length>1?D.unique(_):_
						}
					},
				analyzeAttrs:function(_,B,A,$){return"[]"+(s.tempAttrs.push([B,A,$])-1)},analyzeAttrValues:function($,A,_){return"="+(s.tempAttrValues.push(_)-1)+"]"},generateId:function(_){var $,B=this.idName;try{$=_[B]=_[B]||new Number(++this.id)}catch(A){$=_.getAttribute(B),$||($=new Number(++this.id),_.setAttribute(B,$))}return $.valueOf()},unique:function(C){for(var _,$,A=[],D=0,B={};_=C[D++];)1===_.nodeType&&($=this.generateId(_),B[$]||(B[$]=!0,A.push(_)));return A},attrMap:{"class":"className","for":"htmlFor"},getAttribute:function($,A){var _=this.attrMap[A]||A,B=$[_];return"string"!=typeof B&&($.getAttributeNode!==void 0?(B=$.getAttributeNode(A),B=f==B?B:B.value):$.attributes&&(B=$.attributes[A]+"")),null==B?"":B},getElemById:function(A,$){var _=A.getElementById($);if(!_||_.id===$||!A.all)return _;if(_=A.all[$]){_.nodeType&&(_=[_]);for(var B=0;_.length>B;B++)if(this.getAttribute(_[B],"id")===$)return _[B]}},getElemsByTagName:function(F,H,E,D,_){var $,C,B,A=[],I=-1,G=F.length;for("*"!==D&&(B=D.toUpperCase());G>++I;)for($=F[I][H],C=0;$&&(!_||_>C);)1===$.nodeType&&(($.nodeName.toUpperCase()===B||!B)&&A.push($),C++),$=$[E];return A},checkElemPosition:function(G,H,J,A){var $=[];if(!isNaN(H))for(var B,E,I,F,C=G.length,D=-1,_={};C>++D;){if(B=G[D].parentNode,E=this.generateId(B),f===_[E]){for(I=0,F=B[J];F&&(1===F.nodeType&&I++,H>I);)F=F[A];_[E]=F||0}else F=_[E];G[D]===F&&$.push(G[D])}return $},getElemsByPosition:function(A,C,_){for(var D=C,B=A.length,$=[];D>=0&&B>D;)$.push(A[D]),D+=_;return $},getElemsByAttribute:function(B,D){var $,_=[],E=0,A=this.attrOperators[D[1]||""],C="~="===D[1]?" "+D[2]+" ":D[2];if(A)for(;$=B[E++];)A(this.getAttribute($,D[0]),C)&&_.push($);return _},operators:{"#":function(_,$){return s.getElemsByAttribute(_,["id","=",$])}," ":function(A,_){var B=A.length;if(1===B)return A[0].getElementsByTagName(_);for(var $=[],C=-1;B>++C;)T.util.merge($,A[C].getElementsByTagName(_));return $},".":function($,_){return s.getElemsByAttribute($,["class","~=",_])},">":function(_,$){return s.getElemsByTagName(_,"firstChild","nextSibling",$)},"+":function(_,$){return s.getElemsByTagName(_,"nextSibling","nextSibling",$,1)},"~":function(_,$){return s.getElemsByTagName(_,"nextSibling","nextSibling",$)},"[]":function($,_){return _=s.tempAttrs[_],_?(s.ISINT.test(_[2])&&(_[2]=s.tempAttrValues[_[2]]),s.getElemsByAttribute($,_)):$},":":function(_,A){var $;return s.PSEUDOSEQ.test(A)&&($=parseInt(RegExp.$1),A=RegExp.leftContext),s.pseOperators[A]?s.pseOperators[A](_,$):[]}},attrOperators:{"":function($){return""!==$},"=":function(_,$){return $===_},"~=":function(_,$){return(" "+_+" ").indexOf($)>=0},"!=":function(_,$){return $!==_},"^=":function(_,$){return 0===_.indexOf($)},"$=":function(_,$){return _.substr(_.length-$.length)===$},"*=":function(_,$){return _.indexOf($)>=0}},pseOperators:{"first-child":function($){return s.checkElemPosition($,1,"firstChild","nextSibling")},"nth-child":function(_,$){return s.checkElemPosition(_,$,"firstChild","nextSibling")},"last-child":function($){return s.checkElemPosition($,1,"lastChild","previousSibling")},"nth-last-child":function(_,$){return s.checkElemPosition(_,$,"lastChild","previousSibling")},odd:function($){return s.getElemsByPosition($,0,2)},even:function($){return s.getElemsByPosition($,1,2)},lt:function(_,$){return s.getElemsByPosition(_,$-1,-1)},gt:function(_,$){return s.getElemsByPosition(_,$+1,1)}}};T.element={get:function($){return this.nodeType===f?this[$]:0==$?this:f},$:function($){return T("number"==typeof $?this.get($):$,this)},hasClass:function($){return T.style.hasClass(this,$)},addCss:function($){return T.style.addCss(this,$)},removeCss:function($){return T.style.removeCss(this,$)},addEvent:function(_,A,$){return T.event.addEvent(this,_,A,$)},removeEvent:function($,_){return T.event.removeEvent(this,$,_)},attr:function(A,B){var _=this;if(A=s.attrMap[A]||A,B!==f)return T.dom.eachNode(_,function($,_){this[$]=T.util.isFunction(_)?_.call(this):_},arguments);var $=this.get(0);return $?$[A]:f},each:function($){return T.dom.eachNode(this,$)}},T.element[_]=T.element.$,R.addEvent=c.addEvent=T.element.addEvent,R.removeEvent=c.removeEvent=T.element.removeEvent;var W={},r=Array.prototype.slice,S=Object.prototype.toString;T.util={isArray:function($){return"[object Array]"===S.call($)},isFunction:function($){return"[object Function]"===S.call($)},toArray:function($){if(T.util.isArray($))return $;var A;try{A=r.call($)}catch(_){A=[];for(var B=$.length;B;)A[--B]=$[B]}return A},merge:function(_,$){for(var B=$.length,A=_.length;--B>=0;)_[A+B]=$[B];return _},parseTpl:function(A,$,_){if(null!=A){if(null==$)return A;var B=W[A];return B||(B=Function("obj","var _=[];with(obj){_.push('"+A.replace(/[\r\t\n]/g," ").replace(/'(?=[^#]*#>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<#=(.+?)#>/g,"',$1,'").split("<#").join("');").split("#>").join("_.push('")+"');}return _.join('');"),_!==!1&&(W[A]=B)),B($)}},extend:function($,A){for(var _ in A)$[_]=A[_];return $},each:function(A,_,$){var D=-1,B=A.length,C=B===f||T.util.isFunction(A);if($)if(C){for(D in A)if(!1===_.apply(A[D],$))break}else for(;B>++D&&!1!==_.apply(A[D],$););else if(C){for(D in A)if(!1===_.call(A[D],D,A[D]))break}else for(;B>++D&&!1!==_.call(A[D],D,A[D]););return A}},T.parseTpl=T.util.parseTpl,T.each=T.util.each;var C,$,V=[];c.addEventListener?$=function(){c.removeEventListener("DOMContentLoaded",$,!1),j()}:c.attachEvent&&($=function(){"complete"===c.readyState&&(c.detachEvent("onreadystatechange",$),j())}),T.dom={wrapByArray:function($){if($){if($.nodeType!==f||$.setInterval)return[$];if($.length)return T.util.toArray($)}return[]},eachNode:function(_,A,$){return T.each(T.dom.wrapByArray(_),A,$),_},ready:function($){return Q(),T.dom.isReady?$.call(c,T):V.push($),this}},T.ready=T.dom.ready;var k=/\s*([:;])\s*/g,a=/[^:;]+?(?=:)/g,J=/[^:;]+/g,d=/[^\s]+/g,E=/-([a-z])/gi,Z=O.style.styleFloat!==f?"styleFloat":"cssFloat",o=/^float$/i;T.style={fixStyleName:function($){return o.test($)?Z:$.replace(E,function(_,$){return $.toUpperCase()})},hasClass:function(_,$){_=T.dom.wrapByArray(_);var A=_.length;if(A>0)for($=" "+$+" ";--A>=0;)if((" "+_[A].className+" ").indexOf($)>=0)return!0;return!1},parse:function(C){if("string"==typeof C){var $,B=C.indexOf(";")>=0,_=C.indexOf(":")>=0;if(B||_){$={},C=C.trim().replace(k,"$1").replace(_?a:J,T.style.fixStyleName).match(J);var A=C.length,D=0;if(_){if(0!==A%2)throw"invalid inline style";for(;A>D;)$[C[D++]]=C[D++]}else for(;A>D;)$[C[D++]]=""}else $=C.match(d)||[];return $}return C},addCss:function(_,A){var $=T.style.parse(A);return T.util.isArray($)?T.dom.eachNode(_,u,[$,$.length,A]):T.dom.eachNode(_,t,[$,A]),_},removeCss:function(_,A){var $=T.style.parse(A);return T.util.isArray($)?T.dom.eachNode(_,h,[$,$.length,A]):T.dom.eachNode(_,m,[$]),_},getCurrentStyle:function(A,_,$){if(!A)return f;if(!A.nodeType&&(A=A[0]),_=T.style.fixStyleName(_),A.style[_])return A.style[_];if(A.currentStyle)return A.currentStyle[_];try{return($||R).getComputedStyle(A,null)[_]}catch(e){return 0}}};var H=/\s*,\s*/,D=0;T.event={idName:_+"EventId",eventSpace:_+"Events",addEvent:function(_,A,C,$){A=A.split(H);for(var B=A.length;--B>=0;)T.dom.eachNode(_,n,[A[B],C,$]);return _},removeEvent:function($,_,B){_=_.split(H);for(var A=_.length;--A>=0;)T.dom.eachNode($,g,[_[A],B]);return $},delegate:function(_,E,G,C){var A=T.event,B=_[A.eventSpace]=_[A.eventSpace]||{},$=G[A.idName]=G[A.idName]||++D;B[E]=B[E]||{};var F=B[E][$];return F||(F=function($){$=A.fix($);var B=G.call(_,$,C);return!1===B&&$.preventDefault(),B},B[E][$]=F),F},getDelegate:function($,B,C){var A=T.event;try{return $[A.eventSpace][B][C[A.idName]]}catch(_){}return C},fix:function(_){if(!_.target&&(_.target=_.srcElement||c),3==_.target.nodeType&&(_.target=_.target.parentNode),null==_.timeStamp&&(_.timeStamp=Date.now()),_.preventDefault=_.preventDefault||function(){this.returnValue=!1},_.stopPropagation=_.stopPropagation||function(){this.cancelBubble=!0},f===_.pageX&&f!==_.clientX){var A=c.documentElement,$=c.body;_.pageX=_.clientX+(A.scrollLeft||$.scrollLeft||0)-(A.clientLeft||0),_.pageY=_.clientY+(A.scrollTop||$.scrollTop||0)-(A.clientTop||0)}return!_.which&&(_.charCode||0===_.charCode?_.charCode:_.keyCode)&&(_.which=_.charCode||_.keyCode),_.which||_.button===f||(_.which=1&_.button?1:2&_.button?3:4&_.button?2:0),_}};var q=R.navigator.userAgent.toLowerCase(),i=/(webkit)[ \/]([\w.]+)/.exec(q)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(q)||/(msie) ([\w.]+)/.exec(q)||!/compatible/.test(q)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(R.navigator.userAgent.toLowerCase());T.browser={},i&&(T.browser[i[1]||""]=!0,T.browser.version=i[2]||"0"),T.ajax={createXhr:function(){var _;try{_=R.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest}catch($){}if(!_)throw"failed to create XMLHttpRequest object";return _},send:function(G,C,B,H,A){A=A||T.ajax.createXhr();var E;"string"==typeof C&&(C=C.toUpperCase()),C="GET"!==C&&"POST"!==C?"GET":C,H=H||{},H.async="boolean"==typeof H.async?H.async:!0;var _;if(B){_=[];for(var $ in B)null!=B[$]&&_.push($+"="+encodeURIComponent(B[$]));_=_.join("&").replace(/%20/g,"+"),"GET"===C&&(G+="?"+_,_=f)}H.async&&!isNaN(H.timeout)&&H.timeout>0&&setTimeout(function(){E||(A.abort(),H.onTimeout&&H.onTimeout(A))},H.timeout),A.onreadystatechange=function(){if(4==A.readyState){E=!0;var $=200==A.status?"onSuccess":"onError";H[$]&&H[$](A)}},A.open(C,G,H.async,H.username,H.password);var D=[];if("POST"===C&&D.push("application/x-www-form-urlencoded"),A.setRequestHeader("X-Requested-With","XMLHttpRequest"),H.headers)for(var F in H.headers)"content-type"===F.toLowerCase()?D.push(H.headers[F]):A.setRequestHeader(F,H.headers[F]);return D.length&&A.setRequestHeader("Content-Type",D.join(";").replace(/;+/g,";").replace(/;$/,"")),A.send(_),A},importJs:function(C,$,A,_){_=_||c;var B=_.createElement("script");B.language="javascript",B.type="text/javascript",A&&(B.charset=A),B.onload=B.onreadystatechange=function(){B.readyState&&"loaded"!=B.readyState&&"complete"!=B.readyState||($&&$(),B.onload=B.onreadystatechange=null,B.parentNode.removeChild(B))},B.src=C,T.one("head",_).appendChild(B)}};var v=/[smhdMy]$/,K={s:1,m:60,h:3600,d:86400,M:2592e3,y:31536e3};T.cookie={encoder:R.encodeURIComponent,decoder:R.decodeURIComponent,get:function(B,D){var _=T.cookie;B=_.encoder(B)+"=";var C,$=c.cookie,A=$.indexOf(B);return-1===A?D?f:"":(A+=B.length,C=$.indexOf(";",A),-1===C&&(C=$.length),_.decoder($.substring(A,C)))},set:function(C,G,A,F,E,D){var _=T.cookie,B=[_.encoder(C)+"="+_.encoder(G)];if(A){var H,$;"[object Date]"===S.call(A)?H=A:("string"==typeof A&&v.test(A)&&(A=A.substring(0,A.length-1),$=RegExp.lastMatch),isNaN(A)||(H=new Date,H.setTime(H.getTime()+1e3*A*K[$||"m"]))),H&&B.push("expires="+H.toUTCString())}E&&B.push("path="+E),F&&B.push("domain="+F),D&&B.push("secure"),c.cookie=B.join(";")},del:function($,A,_){c.cookie=T.cookie.encoder($)+"="+(_?";path="+_:"")+(A?";domain="+A:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}};var N=/^\s+|\s+$/g;!String.prototype.trim&&(String.prototype.trim=function(){return this.replace(N,"")}),String.prototype.left=function($){return this.substr(0,$)},String.prototype.right=function($){return this.slice(-$)},String.format=function($){var _=arguments,A=RegExp("%([1-"+_.length+"])","g");return($+"").replace(A,function(A,$){return _[$]})},Function.prototype.bind=function(){if(!arguments.length)return this;var _=this,$=r.call(arguments),A=$.shift();return function(){return _.apply(A,$.concat(r.call(arguments)))}},!Array.prototype.indexOf&&(Array.prototype.indexOf=function(A,_){var $=this.length,_=Number(_)||0;for(_=0>_?Math.ceil(_):Math.floor(_),0>_&&(_+=$);$>_;_++)if(this[_]===A)return _;return-1}),Array.prototype.remove=function($){return $>=0&&this.splice($,1),this};var U,F,p,P,Y,G;Date.now=Date.now||function(){return+new Date},Date.prototype.format=function($){return U=this.getFullYear(),F=this.getMonth()+1,p=this.getDate(),P=this.getHours(),Y=this.getMinutes(),G=this.getSeconds(),$.replace(/y+|m+|d+|h+|s+|H+|M+/g,l)},O=null}})(window);