define('site/touch/App.vue', function(require, exports, module) {

  //
  //
  //
  //
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {};
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<router-view></router-view>\n"
  

});

define('node_modules/vue-router/dist/vue-router.min', function(require, exports, module) {

  /**
    * vue-router v2.7.0
    * (c) 2017 Evan You
    * @license MIT
    */
  !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){"use strict";function t(t,e){}function e(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function r(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function n(t,e,r){void 0===e&&(e={});var n,i=r||o;try{n=i(t||"")}catch(t){n={}}for(var a in e){var u=e[a];n[a]=Array.isArray(u)?u.slice():u}return n}function o(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=$t(r.shift()),o=r.length>0?$t(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function i(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Tt(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Tt(e)):n.push(Tt(e)+"="+Tt(t)))}),n.join("&")}return Tt(e)+"="+Tt(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function a(t,e,r,n){var o=n&&n.options.stringifyQuery,i={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:c(e,o),matched:t?u(t):[]};return r&&(i.redirectedFrom=c(r,o)),Object.freeze(i)}function u(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function c(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var a=e||i;return(r||"/")+a(n)+o}function s(t,e){return e===qt?t===e:!!e&&(t.path&&e.path?t.path.replace(St,"")===e.path.replace(St,"")&&t.hash===e.hash&&p(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&p(t.query,e.query)&&p(t.params,e.params)))}function p(t,e){void 0===t&&(t={}),void 0===e&&(e={});var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?p(n,o):String(n)===String(o)})}function f(t,e){return 0===t.path.replace(St,"/").indexOf(e.path.replace(St,"/"))&&(!e.hash||t.hash===e.hash)&&h(t.query,e.query)}function h(t,e){for(var r in e)if(!(r in t))return!1;return!0}function l(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function d(t){if(t)for(var e,r=0;r<t.length;r++){if("a"===(e=t[r]).tag)return e;if(e.children&&(e=d(e.children)))return e}}function y(t){if(!y.installed){y.installed=!0,Ot=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",Ct),t.component("router-link",Ut);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function v(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function m(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function g(t){return t.replace(/\/\//g,"/")}function b(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=Ft.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],y=r[5],v=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=r[2]||u,k=d||y;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?E(k):m?".*":"[^"+R(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function w(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function k(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?w:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(It(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?x(p):a(p),!e[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function E(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function O(t,e){return t.keys=e,t}function C(t){return t.sensitive?"":"i"}function A(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return O(t,e)}function j(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push($(t[o],e,r).source);return O(new RegExp("(?:"+n.join("|")+")",C(r)),e)}function _(t,e,r){return T(b(t,r),e,r)}function T(t,e,r){It(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=R(u);else{var c=R(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=R(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",O(new RegExp("^"+i,C(r)),e)}function $(t,e,r){return It(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?A(t,e):It(t)?j(t,e,r):_(t,e,r)}function S(t,e,r){try{return(Dt[t]||(Dt[t]=Mt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function q(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){L(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function L(t,e,r,n,o,i){var a=n.path,u=n.name,c=U(a,o),s=n.pathToRegexpOptions||{};"boolean"==typeof n.caseSensitive&&(s.sensitive=n.caseSensitive);var p={path:c,regex:P(c,s),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};n.children&&n.children.forEach(function(n){var o=i?g(i+"/"+n.path):void 0;L(t,e,r,n,p,o)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias:[n.alias]).forEach(function(i){var a={path:i,children:n.children};L(t,e,r,a,o,p.path||"/")}),e[p.path]||(t.push(p.path),e[p.path]=p),u&&(r[u]||(r[u]=p))}function P(t,e){return Mt(t,[],e)}function U(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:g(e.path+"/"+t)}function H(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){(i=I({},i))._normalized=!0;var a=I(I({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=S(u,a,"path "+e.path)}return i}var c=m(i.path||""),s=e&&e.path||"/",p=c.path?v(c.path,s,r||i.append):s,f=n(c.query,i.query,o&&o.options.parseQuery),h=i.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function I(t,e){for(var r in e)t[r]=e[r];return t}function M(t,e){function r(t,r,n){var o=H(t,r,!1,e),a=o.name;if(a){var u=p[a];if(!u)return i(null,o);var f=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in o.params)&&f.indexOf(h)>-1&&(o.params[h]=r.params[h]);if(u)return o.path=S(u.path,o.params,'named route "'+a+'"'),i(u,o,n)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],y=s[d];if(V(y.regex,o.path,o.params))return i(y,o,n)}}return i(null,o)}function n(t,n){var o=t.redirect,u="function"==typeof o?o(a(t,n,null,e)):o;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return i(null,n);var c=u,s=c.name,f=c.path,h=n.query,l=n.hash,d=n.params;if(h=c.hasOwnProperty("query")?c.query:h,l=c.hasOwnProperty("hash")?c.hash:l,d=c.hasOwnProperty("params")?c.params:d,s){p[s];return r({_normalized:!0,name:s,query:h,hash:l,params:d},void 0,n)}if(f){var y=z(f,t);return r({_normalized:!0,path:S(y,d,'redirect route with path "'+y+'"'),query:h,hash:l},void 0,n)}return i(null,n)}function o(t,e,n){var o=r({_normalized:!0,path:S(n,e.params,'aliased route with path "'+n+'"')});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,i(u,e)}return i(null,e)}function i(t,r,i){return t&&t.redirect?n(t,i||r):t&&t.matchAs?o(t,r,t.matchAs):a(t,r,i,e)}var u=q(t),c=u.pathList,s=u.pathMap,p=u.nameMap;return{match:r,addRoutes:function(t){q(t,c,s,p)}}}function V(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function z(t,e){return v(t,e.parent?e.parent.path:"/",!0)}function B(){window.addEventListener("popstate",function(t){D(),t.state&&t.state.key&&Z(t.state.key)})}function F(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=K(),i=o(e,r,n?t:null);if(i){var a="object"==typeof i;if(a&&"string"==typeof i.selector){var u=document.querySelector(i.selector);if(u){var c=i.offset&&"object"==typeof i.offset?i.offset:{};t=J(u,c=X(c))}else N(i)&&(t=Q(i))}else a&&N(i)&&(t=Q(i));t&&window.scrollTo(t.x,t.y)}})}}function D(){var t=G();t&&(Kt[t]={x:window.pageXOffset,y:window.pageYOffset})}function K(){var t=G();if(t)return Kt[t]}function J(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}function N(t){return Y(t.x)||Y(t.y)}function Q(t){return{x:Y(t.x)?t.x:window.pageXOffset,y:Y(t.y)?t.y:window.pageYOffset}}function X(t){return{x:Y(t.x)?t.x:0,y:Y(t.y)?t.y:0}}function Y(t){return"number"==typeof t}function W(){return Nt.now().toFixed(3)}function G(){return Qt}function Z(t){Qt=t}function tt(t,e){D();var r=window.history;try{e?r.replaceState({key:Qt},"",t):(Qt=W(),r.pushState({key:Qt},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function et(t){tt(t,!0)}function rt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function nt(t){return function(r,n,o){var i=!1,a=0,u=null;ot(t,function(t,r,n,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=at(function(e){e.__esModule&&e.default&&(e=e.default),t.resolved="function"==typeof e?e:Ot.extend(e),n.components[c]=e,--a<=0&&o()}),f=at(function(t){var r="Failed to resolve async component "+c+": "+t;u||(u=e(t)?t:new Error(r),o(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function ot(t,e){return it(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function it(t){return Array.prototype.concat.apply([],t)}function at(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function ut(t){if(!t)if(Ht){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ct(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function st(t,e,r,n){var o=ot(t,function(t,n,o,i){var a=pt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return it(n?o.reverse():o)}function pt(t,e){return"function"!=typeof t&&(t=Ot.extend(t)),t.options[e]}function ft(t){return st(t,"beforeRouteLeave",lt,!0)}function ht(t){return st(t,"beforeRouteUpdate",lt)}function lt(t,e){if(e)return function(){return t.apply(e,arguments)}}function dt(t,e,r){return st(t,"beforeRouteEnter",function(t,n,o,i){return yt(t,o,i,e,r)})}function yt(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){vt(t,e.instances,r,o)})})}}function vt(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){vt(t,e,r,n)},16)}function mt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function gt(t){var e=mt(t);if(!/^\/#/.test(e))return window.location.replace(g(t+"/#"+e)),!0}function bt(){var t=wt();return"/"===t.charAt(0)||(kt("/"+t),!1)}function wt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function xt(t){window.location.hash=t}function kt(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;window.location.replace(n+"#"+t)}function Rt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Et(t,e,r){var n="hash"===r?"#"+e:e;return t?g(t+"/"+n):n}var Ot,Ct={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=i.$createElement,c=n.name,s=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;)i.$vnode&&i.$vnode.data.routerView&&f++,i._inactive&&(h=!0),i=i.$parent;if(a.routerViewDepth=f,h)return u(p[c],a,o);var l=s.matched[f];if(!l)return p[c]=null,u();var d=p[c]=l.components[c];return a.registerRouteInstance=function(t,e){var r=l.instances[c];(e&&r!==t||!e&&r===t)&&(l.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[c]=e.componentInstance},a.props=r(s,l.props&&l.props[c]),u(d,a,o)}},At=/[!'()*]/g,jt=function(t){return"%"+t.charCodeAt(0).toString(16)},_t=/%2C/g,Tt=function(t){return encodeURIComponent(t).replace(At,jt).replace(_t,",")},$t=decodeURIComponent,St=/\/?$/,qt=a(null,{path:"/"}),Lt=[String,Object],Pt=[String,Array],Ut={name:"router-link",props:{to:{type:Lt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Pt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,u=o.route,c=o.href,p={},h=r.options.linkActiveClass,y=r.options.linkExactActiveClass,v=null==h?"router-link-active":h,m=null==y?"router-link-exact-active":y,g=null==this.activeClass?v:this.activeClass,b=null==this.exactActiveClass?m:this.exactActiveClass,w=i.path?a(null,i,null,r):u;p[b]=s(n,w),p[g]=this.exact?p[b]:f(n,w);var x=function(t){l(t)&&(e.replace?r.replace(i):r.push(i))},k={click:l};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var R={class:p};if("a"===this.tag)R.on=k,R.attrs={href:c};else{var E=d(this.$slots.default);if(E){E.isStatic=!1;var O=Ot.util.extend;(E.data=O({},E.data)).on=k,(E.data.attrs=O({},E.data.attrs)).href=c}else R.on=k}return t(this.tag,R,this.$slots.default)}},Ht="undefined"!=typeof window,It=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Mt=$,Vt=b,zt=k,Bt=T,Ft=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Mt.parse=Vt,Mt.compile=function(t,e){return k(b(t,e))},Mt.tokensToFunction=zt,Mt.tokensToRegExp=Bt;var Dt=Object.create(null),Kt=Object.create(null),Jt=Ht&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Nt=Ht&&window.performance&&window.performance.now?window.performance:Date,Qt=W(),Xt=function(t,e){this.router=t,this.base=ut(e),this.current=qt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};Xt.prototype.listen=function(t){this.cb=t},Xt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Xt.prototype.onError=function(t){this.errorCbs.push(t)},Xt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},Xt.prototype.confirmTransition=function(r,n,o){var i=this,a=this.current,u=function(r){e(r)&&(i.errorCbs.length?i.errorCbs.forEach(function(t){t(r)}):(t(!1,"uncaught error during route navigation:"),console.error(r))),o&&o(r)};if(s(r,a)&&r.matched.length===a.matched.length)return this.ensureURL(),u();var c=ct(this.current.matched,r.matched),p=c.updated,f=c.deactivated,h=c.activated,l=[].concat(ft(f),this.router.beforeHooks,ht(p),h.map(function(t){return t.beforeEnter}),nt(h));this.pending=r;var d=function(t,n){if(i.pending!==r)return u();try{t(r,a,function(t){!1===t||e(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){u(t)}};rt(l,d,function(){var t=[];rt(dt(h,t,function(){return i.current===r}).concat(i.router.resolveHooks),d,function(){if(i.pending!==r)return u();i.pending=null,n(r),i.router.app&&i.router.app.$nextTick(function(){t.forEach(function(t){t()})})})})},Xt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var Yt=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&B(),window.addEventListener("popstate",function(t){var r=n.current;n.transitionTo(mt(n.base),function(t){o&&F(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){tt(g(n.base+t.fullPath)),F(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){et(g(n.base+t.fullPath)),F(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(mt(this.base)!==this.current.fullPath){var e=g(this.base+this.current.fullPath);t?tt(e):et(e)}},e.prototype.getCurrentLocation=function(){return mt(this.base)},e}(Xt),Wt=function(t){function e(e,r,n){t.call(this,e,r),n&&gt(this.base)||bt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;window.addEventListener("hashchange",function(){bt()&&t.transitionTo(wt(),function(t){kt(t.fullPath)})})},e.prototype.push=function(t,e,r){this.transitionTo(t,function(t){xt(t.fullPath),e&&e(t)},r)},e.prototype.replace=function(t,e,r){this.transitionTo(t,function(t){kt(t.fullPath),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;wt()!==e&&(t?xt(e):kt(e))},e.prototype.getCurrentLocation=function(){return wt()},e}(Xt),Gt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Xt),Zt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=M(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Jt&&!1!==t.fallback,this.fallback&&(e="hash"),Ht||(e="abstract"),this.mode=e,e){case"history":this.history=new Yt(this,t.base);break;case"hash":this.history=new Wt(this,t.base,this.fallback);break;case"abstract":this.history=new Gt(this,t.base)}},te={currentRoute:{}};return Zt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},te.currentRoute.get=function(){return this.history&&this.history.current},Zt.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof Yt)r.transitionTo(r.getCurrentLocation());else if(r instanceof Wt){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Zt.prototype.beforeEach=function(t){return Rt(this.beforeHooks,t)},Zt.prototype.beforeResolve=function(t){return Rt(this.resolveHooks,t)},Zt.prototype.afterEach=function(t){return Rt(this.afterHooks,t)},Zt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Zt.prototype.onError=function(t){this.history.onError(t)},Zt.prototype.push=function(t,e,r){this.history.push(t,e,r)},Zt.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},Zt.prototype.go=function(t){this.history.go(t)},Zt.prototype.back=function(){this.go(-1)},Zt.prototype.forward=function(){this.go(1)},Zt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Zt.prototype.resolve=function(t,e,r){var n=H(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:Et(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Zt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==qt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Zt.prototype,te),Zt.install=y,Zt.version="2.7.0",Ht&&window.Vue&&window.Vue.use(Zt),Zt});

});

define('node_modules/process/browser', function(require, exports, module) {

  // shim for using process in browser
  var process = module.exports = {};
  
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) { return [] }
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };
  

});

