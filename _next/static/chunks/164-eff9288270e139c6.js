(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{4819:function(e,t,n){let r=n(7294),i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))});e.exports=i},2606:function(e,t,n){"use strict";n.d(t,{v:function(){return ee}});var r,i,u,o,a,l,s,c,d,f,m,p=n(7294),v=n(2984),h=n(2351),g=n(8043),E=n(4192),b=n(6723),y=n(3784),w=n(2180),I=n(7896);let x=null!=(m=p.useId)?m:function(){let e=(0,w.H)(),[t,n]=p.useState(e?()=>I.O.nextId():null);return(0,b.e)(()=>{null===t&&n(I.O.nextId())},[t]),null!=t?""+t:void 0};var S=((r=S||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r),T=((i=T||{})[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i);function F(e){return I.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let R=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=((u=P||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),O=((a=O||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a);function M(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(R)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var C=((l=C||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function A(e,t=0){var n;return e!==(null==(n=F(e))?void 0:n.body)&&(0,v.E)(t,{0:()=>e.matches(R),1(){let t=e;for(;null!==t;){if(t.matches(R))return!0;t=t.parentElement}return!1}})}function k(e){let t=F(e);(0,g.k)().nextFrame(()=>{t&&!A(t.activeElement,0)&&(null==e||e.focus({preventScroll:!0}))})}var L=((s=L||{})[s.Keyboard=0]="Keyboard",s[s.Mouse=1]="Mouse",s);function D(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),i=t(n);if(null===r||null===i)return 0;let u=r.compareDocumentPosition(i);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var j=n(3855);function H(e,t,n){let r=(0,j.E)(t);(0,p.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var z=n(6567);function U(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var V=n(3781);function _(e){return[e.screenX,e.screenY]}var Z=((c=Z||{})[c.Open=0]="Open",c[c.Closed=1]="Closed",c),G=((d=G||{})[d.Pointer=0]="Pointer",d[d.Other=1]="Other",d),K=((f=K||{})[f.OpenMenu=0]="OpenMenu",f[f.CloseMenu=1]="CloseMenu",f[f.GoToItem=2]="GoToItem",f[f.Search=3]="Search",f[f.ClearSearch=4]="ClearSearch",f[f.RegisterItem=5]="RegisterItem",f[f.UnregisterItem=6]="UnregisterItem",f);function $(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=D(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return -1===i&&(i=null),{items:r,activeItemIndex:i}}let B={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=$(e),i=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=null!=r?r:-1,u=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===i||!(r.length-n-1>=i))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=i)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===u?r:u}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),u=i?e.items.indexOf(i):-1;return -1===u||u===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:u,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=$(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=$(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},q=(0,p.createContext)(null);function Q(e){let t=(0,p.useContext)(q);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return t}function Y(e,t){return(0,v.E)(t.type,B,e,t)}q.displayName="MenuContext";let W=p.Fragment,J=h.AN.RenderStrategy|h.AN.Static,X=p.Fragment,ee=Object.assign((0,h.yV)(function(e,t){let n=(0,p.useReducer)(Y,{menuState:1,buttonRef:(0,p.createRef)(),itemsRef:(0,p.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:u},o]=n,a=(0,y.T)(t);!function(e,t,n=!0){let r=(0,p.useRef)(!1);function i(n,i){if(!r.current||n.defaultPrevented)return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),o=i(n);if(null!==o&&o.getRootNode().contains(o)){for(let e of u){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(o)||n.composed&&n.composedPath().includes(t))return}return A(o,C.Loose)||-1===o.tabIndex||n.preventDefault(),t(n,o)}}(0,p.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let u=(0,p.useRef)(null);H("mousedown",e=>{var t,n;r.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),H("click",e=>{u.current&&(i(e,()=>u.current),u.current=null)},!0),H("blur",e=>i(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([u,i],(e,t)=>{var n;o({type:1}),A(t,C.Loose)||(e.preventDefault(),null==(n=u.current)||n.focus())},0===r);let l=(0,V.z)(()=>{o({type:1})}),s=(0,p.useMemo)(()=>({open:0===r,close:l}),[r,l]);return p.createElement(q.Provider,{value:n},p.createElement(z.up,{value:(0,v.E)(r,{0:z.ZM.Open,1:z.ZM.Closed})},(0,h.sY)({ourProps:{ref:a},theirProps:e,slot:s,defaultTag:W,name:"Menu"})))}),{Button:(0,h.yV)(function(e,t){var n;let r=x(),{id:i=`headlessui-menu-button-${r}`,...u}=e,[o,a]=Q("Menu.Button"),l=(0,y.T)(o.buttonRef,t),s=(0,E.G)(),c=(0,V.z)(e=>{switch(e.key){case S.Space:case S.Enter:case S.ArrowDown:e.preventDefault(),e.stopPropagation(),a({type:0}),s.nextFrame(()=>a({type:2,focus:T.First}));break;case S.ArrowUp:e.preventDefault(),e.stopPropagation(),a({type:0}),s.nextFrame(()=>a({type:2,focus:T.Last}))}}),d=(0,V.z)(e=>{e.key===S.Space&&e.preventDefault()}),f=(0,V.z)(t=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(a({type:1}),s.nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),a({type:0})))}),m=(0,p.useMemo)(()=>({open:0===o.menuState}),[o]),v={ref:l,id:i,type:function(e,t){let[n,r]=(0,p.useState)(()=>U(e));return(0,b.e)(()=>{r(U(e))},[e.type,e.as]),(0,b.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=o.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:c,onKeyUp:d,onClick:f};return(0,h.sY)({ourProps:v,theirProps:u,slot:m,defaultTag:"button",name:"Menu.Button"})}),Items:(0,h.yV)(function(e,t){var n,r;let i=x(),{id:u=`headlessui-menu-items-${i}`,...o}=e,[a,l]=Q("Menu.Items"),s=(0,y.T)(a.itemsRef,t),c=function(...e){return(0,p.useMemo)(()=>F(...e),[...e])}(a.itemsRef),d=(0,E.G)(),f=(0,z.oJ)(),m=null!==f?(f&z.ZM.Open)===z.ZM.Open:0===a.menuState;(0,p.useEffect)(()=>{let e=a.itemsRef.current;e&&0===a.menuState&&e!==(null==c?void 0:c.activeElement)&&e.focus({preventScroll:!0})},[a.menuState,a.itemsRef,c]),function({container:e,accept:t,walk:n,enabled:r=!0}){let i=(0,p.useRef)(t),u=(0,p.useRef)(n);(0,p.useEffect)(()=>{i.current=t,u.current=n},[t,n]),(0,b.e)(()=>{if(!e||!r)return;let t=F(e);if(!t)return;let n=i.current,o=u.current,a=Object.assign(e=>n(e),{acceptNode:n}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;l.nextNode();)o(l.currentNode)},[e,r,i,u])}({container:a.itemsRef.current,enabled:0===a.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=(0,V.z)(e=>{var t,n;switch(d.dispose(),e.key){case S.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),l({type:3,value:e.key});case S.Enter:if(e.preventDefault(),e.stopPropagation(),l({type:1}),null!==a.activeItemIndex){let{dataRef:e}=a.items[a.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}k(a.buttonRef.current);break;case S.ArrowDown:return e.preventDefault(),e.stopPropagation(),l({type:2,focus:T.Next});case S.ArrowUp:return e.preventDefault(),e.stopPropagation(),l({type:2,focus:T.Previous});case S.Home:case S.PageUp:return e.preventDefault(),e.stopPropagation(),l({type:2,focus:T.First});case S.End:case S.PageDown:return e.preventDefault(),e.stopPropagation(),l({type:2,focus:T.Last});case S.Escape:e.preventDefault(),e.stopPropagation(),l({type:1}),(0,g.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case S.Tab:e.preventDefault(),e.stopPropagation(),l({type:1}),(0,g.k)().nextFrame(()=>{var t,n;t=a.buttonRef.current,n=e.shiftKey?P.Previous:P.Next,function(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var u,o,a;let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?D(e):e:M(e);i.length>0&&s.length>1&&(s=s.filter(e=>!i.includes(e))),r=null!=r?r:l.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=s.length,v;do{if(m>=p||m+p<=0)return 0;let e=d+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(v=s[e])||v.focus(f),m+=c}while(v!==l.activeElement);6&t&&null!=(a=null==(o=null==(u=v)?void 0:u.matches)?void 0:o.call(u,"textarea,input"))&&a&&v.select()}(M(),n,{relativeTo:t})});break;default:1===e.key.length&&(l({type:3,value:e.key}),d.setTimeout(()=>l({type:4}),350))}}),w=(0,V.z)(e=>{e.key===S.Space&&e.preventDefault()}),I=(0,p.useMemo)(()=>({open:0===a.menuState}),[a]),R={"aria-activedescendant":null===a.activeItemIndex||null==(n=a.items[a.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=a.buttonRef.current)?void 0:r.id,id:u,onKeyDown:v,onKeyUp:w,role:"menu",tabIndex:0,ref:s};return(0,h.sY)({ourProps:R,theirProps:o,slot:I,defaultTag:"div",features:J,visible:m,name:"Menu.Items"})}),Item:(0,h.yV)(function(e,t){let n,r=x(),{id:i=`headlessui-menu-item-${r}`,disabled:u=!1,...o}=e,[a,l]=Q("Menu.Item"),s=null!==a.activeItemIndex&&a.items[a.activeItemIndex].id===i,c=(0,p.useRef)(null),d=(0,y.T)(t,c);(0,b.e)(()=>{if(0!==a.menuState||!s||0===a.activationTrigger)return;let e=(0,g.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=c.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[c,s,a.menuState,a.activationTrigger,a.activeItemIndex]);let f=(0,p.useRef)({disabled:u,domRef:c});(0,b.e)(()=>{f.current.disabled=u},[f,u]),(0,b.e)(()=>{var e,t;f.current.textValue=null==(t=null==(e=c.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[f,c]),(0,b.e)(()=>(l({type:5,id:i,dataRef:f}),()=>l({type:6,id:i})),[f,i]);let m=(0,V.z)(()=>{l({type:1})}),v=(0,V.z)(e=>{if(u)return e.preventDefault();l({type:1}),k(a.buttonRef.current)}),E=(0,V.z)(()=>{if(u)return l({type:2,focus:T.Nothing});l({type:2,focus:T.Specific,id:i})}),w=(n=(0,p.useRef)([-1,-1]),{wasMoved(e){let t=_(e);return(n.current[0]!==t[0]||n.current[1]!==t[1])&&(n.current=t,!0)},update(e){n.current=_(e)}}),I=(0,V.z)(e=>w.update(e)),S=(0,V.z)(e=>{w.wasMoved(e)&&(u||s||l({type:2,focus:T.Specific,id:i,trigger:0}))}),F=(0,V.z)(e=>{w.wasMoved(e)&&(u||s&&l({type:2,focus:T.Nothing}))}),R=(0,p.useMemo)(()=>({active:s,disabled:u,close:m}),[s,u,m]);return(0,h.sY)({ourProps:{id:i,ref:d,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:v,onFocus:E,onPointerEnter:I,onMouseEnter:I,onPointerMove:S,onMouseMove:S,onPointerLeave:F,onMouseLeave:F},theirProps:o,slot:R,defaultTag:X,name:"Menu.Item"})})})},7106:function(e,t,n){"use strict";n.d(t,{u:function(){return C}});var r,i=n(7294),u=n(2351),o=n(6567),a=n(2984),l=n(6723);function s(){let e=(0,i.useRef)(!1);return(0,l.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(3855),d=n(2180),f=n(3784),m=n(8043);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(4192),g=n(3781),E=n(4067);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,i.createContext)(null);y.displayName="TransitionContext";var w=((r=w||{}).Visible="visible",r.Hidden="hidden",r);let I=(0,i.createContext)(null);function x(e){return"children"in e?x(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function S(e,t){let n=(0,c.E)(e),r=(0,i.useRef)([]),o=s(),l=(0,h.G)(),d=(0,g.z)((e,t=u.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,a.E)(t,{[u.l4.Unmount](){r.current.splice(i,1)},[u.l4.Hidden](){r.current[i].state="hidden"}}),l.microTask(()=>{var e;!x(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,u.l4.Unmount)}),m=(0,i.useRef)([]),p=(0,i.useRef)(Promise.resolve()),v=(0,i.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:p,chains:v}),[f,d,r,E,b,v,p])}function T(){}I.displayName="NestingContext";let F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function R(e){var t;let n={};for(let r of F)n[r]=null!=(t=e[r])?t:T;return n}let P=u.AN.RenderStrategy,N=(0,u.yV)(function(e,t){let{show:n,appear:r=!1,unmount:a,...s}=e,c=(0,i.useRef)(null),m=(0,f.T)(c,t);(0,d.H)();let p=(0,o.oJ)();if(void 0===n&&null!==p&&(n=(p&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,i.useState)(n?"visible":"hidden"),g=S(()=>{h("hidden")}),[E,b]=(0,i.useState)(!0),w=(0,i.useRef)([n]);(0,l.e)(()=>{!1!==E&&w.current[w.current.length-1]!==n&&(w.current.push(n),b(!1))},[w,n]);let T=(0,i.useMemo)(()=>({show:n,appear:r,initial:E}),[n,r,E]);(0,i.useEffect)(()=>{if(n)h("visible");else if(x(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,g]);let F={unmount:a};return i.createElement(I.Provider,{value:g},i.createElement(y.Provider,{value:T},(0,u.sY)({ourProps:{...F,as:i.Fragment,children:i.createElement(O,{ref:m,...F,...s})},theirProps:{},defaultTag:i.Fragment,features:P,visible:"visible"===v,name:"Transition"})))}),O=(0,u.yV)(function(e,t){var n;let r,{beforeEnter:w,afterEnter:T,beforeLeave:F,afterLeave:N,enter:O,enterFrom:M,enterTo:C,entered:A,leave:k,leaveFrom:L,leaveTo:D,...j}=e,H=(0,i.useRef)(null),z=(0,f.T)(H,t),U=j.unmount?u.l4.Unmount:u.l4.Hidden,{show:V,appear:_,initial:Z}=function(){let e=(0,i.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[G,K]=(0,i.useState)(V?"visible":"hidden"),$=function(){let e=(0,i.useContext)(I);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:q}=$,Q=(0,i.useRef)(null);(0,i.useEffect)(()=>B(H),[B,H]),(0,i.useEffect)(()=>{if(U===u.l4.Hidden&&H.current){if(V&&"visible"!==G){K("visible");return}return(0,a.E)(G,{hidden:()=>q(H),visible:()=>B(H)})}},[G,H,B,q,V,U]);let Y=(0,c.E)({enter:b(O),enterFrom:b(M),enterTo:b(C),entered:b(A),leave:b(k),leaveFrom:b(L),leaveTo:b(D)}),W=(n={beforeEnter:w,afterEnter:T,beforeLeave:F,afterLeave:N},r=(0,i.useRef)(R(n)),(0,i.useEffect)(()=>{r.current=R(n)},[n]),r),J=(0,d.H)();(0,i.useEffect)(()=>{if(J&&"visible"===G&&null===H.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[H,G,J]);let X=Z&&!_,ee=!J||X||Q.current===V?"idle":V?"enter":"leave",et=function(e=0){let[t,n]=(0,i.useState)(e),r=s(),u=(0,i.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),o=(0,i.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:u,hasFlag:o,removeFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{et.addFlag(o.ZM.Opening),W.current.beforeEnter()},leave:()=>{et.addFlag(o.ZM.Closing),W.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,a.E)(e,{enter:()=>{et.removeFlag(o.ZM.Opening),W.current.afterEnter()},leave:()=>{et.removeFlag(o.ZM.Closing),W.current.afterLeave()},idle:()=>{}})),ei=S(()=>{K("hidden"),q(H)},$);(function({container:e,direction:t,classes:n,onStart:r,onStop:i}){let u=s(),o=(0,h.G)(),d=(0,c.E)(t);(0,l.e)(()=>{let t=(0,m.k)();o.add(t.dispose);let l=e.current;if(l&&"idle"!==d.current&&u.current){var s,c,f,h;let e,u,o,g,E,b,y;return t.dispose(),r.current(d.current),t.add((s=l,c=n.current,f="enter"===d.current,h=()=>{t.dispose(),i.current(d.current)},u=f?"enter":"leave",o=(0,m.k)(),g=void 0!==h?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,h(...t)}):()=>{},"enter"===u&&(s.removeAttribute("hidden"),s.style.display=""),E=(0,a.E)(u,{enter:()=>c.enter,leave:()=>c.leave}),b=(0,a.E)(u,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),y=(0,a.E)(u,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),v(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),p(s,...E,...y),o.nextFrame(()=>{v(s,...y),p(s,...b),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[u,o]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=u+o;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(s,()=>(v(s,...E),p(s,...c.entered),g()))}),o.dispose)),t.dispose}},[t])})({container:H,classes:Y,direction:ee,onStart:(0,c.E)(e=>{ei.onStart(H,e,en)}),onStop:(0,c.E)(e=>{ei.onStop(H,e,er),"leave"!==e||x(ei)||(K("hidden"),q(H))})}),(0,i.useEffect)(()=>{X&&(U===u.l4.Hidden?Q.current=null:Q.current=V)},[V,X,G]);let eu=j;return _&&V&&(eu={...eu,className:(0,E.A)(j.className,...Y.current.enter,...Y.current.enterFrom)}),i.createElement(I.Provider,{value:ei},i.createElement(o.up,{value:(0,a.E)(G,{visible:o.ZM.Open,hidden:o.ZM.Closed})|et.flags},(0,u.sY)({ourProps:{ref:z},theirProps:eu,defaultTag:"div",features:P,visible:"visible"===G,name:"Transition.Child"})))}),M=(0,u.yV)(function(e,t){let n=null!==(0,i.useContext)(y),r=null!==(0,o.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(N,{ref:t,...e}):i.createElement(O,{ref:t,...e}))}),C=Object.assign(N,{Child:M,Root:N})},4192:function(e,t,n){"use strict";n.d(t,{G:function(){return u}});var r=n(7294),i=n(8043);function u(){let[e]=(0,r.useState)(i.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(7294),i=n(3855);let u=function(e){let t=(0,i.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(7294),i=n(7896);let u=(e,t)=>{i.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(7294),i=n(6723);function u(e){let t=(0,r.useRef)(e);return(0,i.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(7294),i=n(7896);function u(){let[e,t]=(0,r.useState)(i.O.isHandoffComplete);return e&&!1===i.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>i.O.handoff(),[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(7294),i=n(3781);let u=Symbol();function o(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,i.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return o},oJ:function(){return a},up:function(){return l}});var r,i=n(7294);let u=(0,i.createContext)(null);u.displayName="OpenClosedContext";var o=((r=o||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function a(){return(0,i.useContext)(u)}function l({value:e,children:t}){return i.createElement(u.Provider,{value:e},t)}},4067:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},8043:function(e,t,n){"use strict";n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,i)=>(e.addEventListener(t,r,i),n.add(()=>e.removeEventListener(t,r,i))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}})},7896:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=Object.defineProperty,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);let o=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}n.d(t,{E:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return l},l4:function(){return s},sY:function(){return c},yV:function(){return m}});var r,i,u=n(7294),o=n(4067),a=n(2984),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((i=s||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:u=!0,name:o}){let l=f(t,e);if(u)return d(l,n,r,o);let s=null!=i?i:0;if(2&s){let{static:e=!1,...t}=l;if(e)return d(t,n,r,o)}if(1&s){let{unmount:e=!0,...t}=l;return(0,a.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return d(l,n,r,o)}function d(e,t={},n,r){let{as:i=n,children:a,refName:l="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(i===u.Fragment&&Object.keys(p(s)).length>0){if(!(0,u.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.A)(null==e?void 0:e.className(...t),s.className):(0,o.A)(null==e?void 0:e.className,s.className);return(0,u.cloneElement)(d,Object.assign({},f(d.props,p(v(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,u.createElement)(i,Object.assign({},v(s,["ref"]),i!==u.Fragment&&c,i!==u.Fragment&&m),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function m(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);