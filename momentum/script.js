!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){t.exports=n(4)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},function(t,e,n){n(3),t.exports=n(5)},function(t,e,n){},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new w(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(L([])));y&&y!==e&&n.call(y,o)&&(d=y);var m=h.prototype=l.prototype=Object.create(d);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new g(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=document.querySelector(".main-block_location"),u=document.querySelector(".main-block_temperature"),s=document.querySelector(".secondary-block_wind"),l=document.querySelector(".secondary-block_humidity"),f=document.querySelector(".secondary-block_condition"),h=document.querySelector(".main-block_icon");function d(){var t=localStorage.getItem("main-block_location");null==t||""===t.toString().trim()?c.innerText="[Please enter your location]":c.innerText=localStorage.getItem("main-block_location")}function p(){return y.apply(this,arguments)}function y(){return(y=a()(o.a.mark((function t(){var e,n,r,i,a,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=c.innerText).includes("[Please enter your location]")){t.next=3;break}return t.abrupt("return");case 3:return n="https://api.weatherapi.com/v1/current.json?key=38bd7b2ba4ae4f0db3f203410202510&q=".concat(e),t.next=6,fetch(n);case 6:if(400!==(r=t.sent).status&&403!==r.status&&501!==r.status){t.next=15;break}return 400===r.status?alert("Invalid location"):alert("Bad connection with weather server. Error code: ".concat(r.status)),u.innerText="",s.innerText="",l.innerText="",f.innerText="",h.innerHTML="",t.abrupt("return");case 15:return t.next=17,r.json();case 17:i=t.sent,u.innerText="".concat(i.current.temp_c," °C"),a=i.current.condition.icon,h.innerHTML='<img src="https:'.concat(a,'" alt="weatherIconPath" width="50" height="50">'),d=+(i.current.gust_kph/3.6).toFixed(1),s.innerText="Wind: ".concat(d," m/s"),l.innerText="Humidity: ".concat(i.current.humidity,"%"),f.innerText=i.current.condition.text;case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=document.querySelector("#root"),v=document.querySelector(".date"),g=document.querySelector(".time"),b=document.querySelector(".greeting"),_=document.querySelector(".name"),x=document.querySelector(".focusEnter"),w=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],S=null,E=null;function T(){var t=new Date,e=t.getDay(),n=t.getMonth(),r=t.getDate();v.innerHTML="".concat(r," ").concat(w[n],", ").concat(L[e]),S=t.getHours(),E||(E=S);var o=t.getMinutes(),i=t.getSeconds();g.innerHTML="".concat(k(S),":").concat(k(o),":").concat(k(i)),0===o&&0===i&&(O(),p(),S%6==0&&N()),setTimeout(T,1e3)}function k(t){return t=t<10?"0"+t.toString():t.toString()}function q(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=[],r=1;r<=e;r++)n.push(r);for(var o=n.length-1;o>0;o--){var i=Math.floor(Math.random()*(o+1)),a=[n[i],n[o]];n[o]=a[0],n[i]=a[1]}return n=(n=n.slice(0,t)).map((function(t){return k(t)}))}var M=["night","morning","day","evening"],j={night:q(),morning:q(),day:q(),evening:q()};function O(t){null==t&&(E=S);var e=M[Math.floor(E%24/6)],n=E%6,r=document.createElement("img"),o="assets/images/".concat(e,"/").concat(j[e][n],".jpg");r.src=o,r.onload=function(){return m.style.backgroundImage="url(".concat(o,")")}}function N(){var t=M[Math.floor(S/6)%4];b.innerHTML="Good ".concat(t,", ")}function P(t){t.target.innerText=""}function I(t){var e=t.target;"keypress"===t.type?13!=t.which&&13!==t.keyCode||(""!=!e.innerText.toString().trim()||e.innerText.includes("[Enter ")||localStorage.setItem(e.className,e.innerText),e.blur()):"blur"===t.type&&(""==e.innerText.toString().trim()||e.innerText.includes("[Enter ")?"name"===e.className?G():"focusEnter"===e.className?F():"main-block_location"===e.className&&d():(localStorage.setItem(e.className,e.innerText),("main-block_location"===e.className||D.contains(e))&&p()))}function F(){var t=localStorage.getItem("focusEnter");null==t||""===t.toString().trim()?x.innerText="[Enter focus]":x.innerText=localStorage.getItem("focusEnter")}function G(){var t=localStorage.getItem("name");null==t||""===t.toString().trim()?_.innerText="[Enter name]":_.innerText=t}var H=document.querySelector(".icon__change_background"),A=document.querySelector(".icon__change_background_img");H.addEventListener("click",(function(t){if(t.target===H||H.contains(t.target)){if(A.classList.contains("icon__rotate-in-process"))return;O(++E),A.classList.add("icon__rotate-in-process"),setTimeout((function(){A.classList.remove("icon__rotate-in-process")}),800)}})),_.addEventListener("click",P),_.addEventListener("keypress",I),_.addEventListener("blur",I),x.addEventListener("click",P),x.addEventListener("keypress",I),x.addEventListener("blur",I);var D=document.querySelector(".main-block_location");function J(){var t=document.querySelector(".quote__content_name"),e=document.querySelector(".quote__content_author");fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en").then((function(t){if(403!==t.status&&501!==t.status)return t.json();alert("Bad connection with quotes server. Error code: ".concat(t.status))})).then((function(n){for(var r=Math.floor(Math.random()*(n.length+1));n[r].en.length>240;)r=Math.floor(Math.random()*(n.length+1));if(window.innerWidth<370)for(;n[r].en.length>180;)r=Math.floor(Math.random()*(n.length+1));t.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>&#8220;".concat(n[r].en,"&#8221;</i>"),e.innerHTML="<i>- ".concat(n[r].author,"</i>")}))}D.addEventListener("click",P),D.addEventListener("keypress",I),D.addEventListener("blur",I),window.onload=function(){var t,e;d(),p(),T(),O(),N(),G(),F(),t=document.querySelector(".icon__change_quote"),e=document.querySelector(".icon__change_quote_img"),t.addEventListener("click",(function(n){if(n.target===t||t.contains(n.target)){if(e.classList.contains("icon__rotate-in-process"))return;J(),e.classList.add("icon__rotate-in-process"),setTimeout((function(){e.classList.remove("icon__rotate-in-process")}),800)}})),J()}}]);