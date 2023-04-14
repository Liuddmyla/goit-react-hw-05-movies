"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[306],{306:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var o=n(439),r=n(791);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n(433);function l(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var f=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],p=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},v=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},g=function(e){return v(e)||h(e)?e:null},y=function(e){return(0,r.isValidElement)(e)||v(e)||h(e)||m(e)};function b(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,u.Z)(n)))};(e=t.classList).add.apply(e,(0,u.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),r.createElement(r.Fragment,null,o)}}function E(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var T={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},_=function(e){var t=e.theme,n=e.type,o=c(e,d);return r.createElement("svg",s({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},O={info:function(e){return r.createElement(_,s({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(_,s({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(_,s({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(_,s({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),l=i[0],f=i[1],d=(0,r.useRef)(null),b=(0,r.useRef)(new Map).current,_=function(e){return-1!==l.indexOf(e)},C=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:_,getToast:function(e){return b.get(e)}}).current;function I(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function w(e){f((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=C.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function j(e,t){var a=t.delay,i=t.staleId,u=c(t,p);if(y(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||b.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,f=u.updateId,_=u.data,I=C.props,j=function(){return w(l)},N=null==f;N&&C.count++;var P,R,k=s(s(s({},I),{},{style:I.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:f,data:_,closeToast:j,isIn:!1,className:g(u.className||I.toastClassName),bodyClassName:g(u.bodyClassName||I.bodyClassName),progressClassName:g(u.progressClassName||I.progressClassName),autoClose:!u.isLoading&&(P=u.autoClose,R=I.autoClose,!1===P||m(P)&&P>0?P:R),deleteToast:function(){var e=E(b.get(l),"removed");b.delete(l),T.emit(4,e);var t=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var o=null==l?C.props.limit:1;if(1===t||1===o)C.displayedToast++,x();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)x()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(h(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):v(a)||m(a)?i=a:o?i=O.spinner():function(e){return e in O}(n)&&(i=O[n](s))),i}(k),h(u.onOpen)&&(k.onOpen=u.onOpen),h(u.onClose)&&(k.onClose=u.onClose),k.closeButton=I.closeButton,!1===u.closeButton||y(u.closeButton)?k.closeButton=u.closeButton:!0===u.closeButton&&(k.closeButton=!y(I.closeButton)||I.closeButton);var M=e;(0,r.isValidElement)(e)&&!v(e.type)?M=(0,r.cloneElement)(e,{closeToast:j,toastProps:k,data:_}):h(e)&&(M=e({closeToast:j,toastProps:k,data:_})),I.limit&&I.limit>0&&C.count>I.limit&&N?C.queue.push({toastContent:M,toastProps:k,staleId:i}):m(a)?setTimeout((function(){L(M,k,i)}),a):L(M,k,i)}}function L(e,t,n){var o=t.toastId;n&&b.delete(n);var r={content:e,props:t};b.set(o,r),f((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return C.containerId=e.containerId,T.cancelEmit(3).on(0,j).on(1,(function(e){return d.current&&w(e)})).on(5,I).emit(2,C),function(){b.clear(),T.emit(3,C)}}),[]),(0,r.useEffect)((function(){C.props=e,C.isToastActive=_,C.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:_}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function x(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],f=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,b=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=I(t.nativeEvent),d.y=w(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?O():_()}}function _(){i(!0)}function O(){i(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&O(),d.x=I(t),d.y=w(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),h(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var j={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(j.onMouseEnter=O,j.onMouseLeave=_),b&&(j.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:_,pauseToast:O,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:j}}function j(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,o=e.closeToast,i=e.type,c=void 0===i?"default":i,u=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,b=u||p&&0===m,E=s(s({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});p&&(E.transform="scaleX(".concat(m,")"));var T=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":v}),_=h(l)?l({rtl:v,type:c,defaultClassName:T}):f(T,l);return r.createElement("div",a({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:_,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&o()}))}var N=function(e){var t=x(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,E=e.style,T=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,N=e.progress,P=e.rtl,R=e.toastId,k=e.deleteToast,M=e.isIn,S=e.isLoading,D=e.iconOut,B=e.closeOnClick,A=e.theme,z=f("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":B}),H=h(b)?b({rtl:P,position:y,type:p,defaultClassName:z}):f(z,b),Z=!!N||!l,F={closeToast:v,type:p,theme:A},q=null;return!1===c||(q=h(c)?c(F):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,F):j(F)),r.createElement(g,{isIn:M,done:k,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",s(s({id:R,onClick:d,className:H},i),{},{style:E,ref:a}),r.createElement("div",s(s({},M&&{role:w}),{},{className:h(T)?T({type:p}):f("Toastify__toast-body",T),style:_}),null!=D&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},D),r.createElement("div",null,u)),q,r.createElement(L,s(s({},I&&!Z?{key:"pb-".concat(I)}:{}),{},{rtl:P,theme:A,delay:l,isRunning:n,isIn:M,closeToast:v,hide:m,type:p,style:C,className:O,controlledProgress:Z,progress:N||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},R=b(P("bounce",!0)),k=(b(P("slide",!0)),b(P("zoom")),b(P("flip")),(0,r.forwardRef)((function(e,t){var n=C(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,c=e.className,u=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(c)?c({position:e,rtl:l,defaultClassName:t}):f(t,g(c))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,t){var n=t.length?s({},u):s(s({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(N,s(s({},a),{},{isIn:i(a.toastId),style:s(s({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,S,D=new Map,B=[],A=1;function z(){return""+A++}function H(e){return e&&(v(e.toastId)||m(e.toastId))?e.toastId:z()}function Z(e,t){return D.size>0?T.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function F(e,t){return s(s({},t),{},{type:t&&t.type||e,toastId:H(t)})}function q(e){return function(t,n){return Z(t,F(e,n))}}function Q(e,t){return Z(e,F("default",t))}Q.loading=function(e,t){return Z(e,F("default",s({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=v(r)?Q.loading(r,n):Q.loading(r.render,s(s({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=s(s(s({type:e},c),n),{},{data:r}),i=v(t)?{render:t}:t;return o?Q.update(o,s(s({},a),i)):Q(i.render,s(s({},a),i)),r}Q.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=function(e,t){return Z(e,F("default",s({theme:"dark"},t)))},Q.dismiss=function(e){D.size>0?T.emit(1,e):B=B.filter((function(t){return null!=e&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},Q.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||M);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=s(s(s({delay:100},o),t),{},{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,Z(i,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return T.on(4,e),function(){T.off(4,e)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(e){M=e.containerId||e,D.set(M,e),B.forEach((function(e){T.emit(0,e.content,e.options)})),B=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&T.off(0).off(1).off(5)}));var V=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){var n=e.title,o=e.titleId,a=G(e,V);return r.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":o},a),void 0===n?r.createElement("title",{id:o},"search"):n?r.createElement("title",{id:o},n):null,S||(S=r.createElement("path",{d:"M31.715 28.953c0.381 0.381 0.381 0.999 0 1.381l-1.381 1.381c-0.382 0.381-1 0.381-1.381 0l-9.668-9.668c-0.105-0.105-0.175-0.229-0.222-0.361-1.983 1.449-4.418 2.314-7.063 2.314-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 2.645-0.865 5.080-2.314 7.063 0.132 0.047 0.256 0.116 0.361 0.222l9.668 9.668zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-4.418-3.582-8-8-8z"})))}var X=r.forwardRef(W),Y=(n.p,{form:"SearchBar_form__nOx4C",button:"SearchBar_button__k15I7",input:"SearchBar_input__MPxlH"}),K=n(184),J=function(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),i=a[0],s=a[1];return(0,K.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return Q.info("Enter a name for the film !",{autoClose:2e3});t(i.trim()),s("")},className:Y.form,children:[(0,K.jsx)("button",{type:"submit",className:Y.button,children:(0,K.jsx)("span",{className:Y.icon,children:(0,K.jsx)(X,{})})}),(0,K.jsx)("input",{className:Y.input,type:"text",placeholder:"Search films...",value:i,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})},$=n(614),ee=n(87),te=n(377),ne=function(e){return e.films.map((function(e){return(0,K.jsx)("li",{className:te.Z.item,children:(0,K.jsxs)(ee.rU,{to:"/movies/".concat(e.id),className:te.Z.card,children:[e.poster_path?(0,K.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:"poster"}):(0,K.jsx)("img",{src:"https://burst.shopifycdn.com/photos/a-movie-clapper-board-film-roll-and-sprocket-wheel.jpg?width=500&format=pjpg&exif=1&iptc=1",alt:"actor",width:"200",height:"300"}),(0,K.jsx)("p",{children:e.title})]})},e.id)}))},oe="pending",re="resolved",ae="rejected",ie=function(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(null),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,r.useState)(null),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=(0,r.useState)([]),v=(0,o.Z)(m,2),h=v[0],g=v[1];(0,r.useEffect)((function(){var e="https://api.themoviedb.org/3/search/movie?api_key=7e2a233d026ec02ed6e123027bfe9410&query=".concat(n,"&language=en-US&page=1&include_adult=false");n&&(u(oe),fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error!"))})).then((function(e){var t=e.results;0===t.length&&Q.error("Sorry, there are no films matching your search query. Please try again.",{autoClose:2e3}),g(t),u(re)})).catch((function(e){p(e),u(ae)})))}),[n]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(k,{}),(0,K.jsx)(J,{onSubmit:function(e){e&&a(e)}}),(0,K.jsxs)("div",{children:[c===oe&&(0,K.jsx)($.a,{}),c===ae&&(0,K.jsx)("div",{children:d.message}),c===re&&(0,K.jsx)("ul",{className:te.Z.list,children:(0,K.jsx)(ne,{films:h})})]})]})}},377:function(e,t){t.Z={list:"HomeMovies_list__FPH7G",box:"HomeMovies_box__VbjF7",title:"HomeMovies_title__PqV8H",item:"HomeMovies_item__5vQD2",card:"HomeMovies_card__yTJ0l"}}}]);
//# sourceMappingURL=306.0afeda35.chunk.js.map