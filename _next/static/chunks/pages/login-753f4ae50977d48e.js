(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(933)}])},3067:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(5893);function a(e){let{children:t,isLoading:s=!1,props:a={},className:i="",flex:n=!0,full:o=!1,disabled:l=!1,onClick:d}=e;return(0,r.jsxs)("button",{onClick:d,className:"group relative justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 "+(i.includes("bg-")?"":"bg-indigo-600 ")+(o?"w-full ":"")+(n?"flex ":"")+i,disabled:s||l,...a,children:[(0,r.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3"+(s?"":" hidden"),viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25 fill-indigo-600",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t]})}},3425:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var r=s(5893),a=s(1664),i=s.n(a),n=s(1163),o=s(7294),l=s(1259),d=s(1481);function c(){let[e,t]=(0,o.useState)(!0);(0,o.useEffect)(()=>{let e=()=>{window.pageYOffset>100?t(!1):t(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let s=()=>{"scrollBehavior"in document.documentElement.style?document.documentElement.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0};return(0,r.jsx)("div",{id:"back-to-top",className:"".concat(e?"opacity-0 bottom-[-40px] pointer-events-none":"opacity-100 bottom-5"," bg-gray-300 rounded-full shadow-md text-red-600 cursor-pointer fixed right-5 transition-all duration-300 z-10"),onClick:s,children:(0,r.jsx)("svg",{viewBox:"0 0 24 24",className:"block h-6 m-3 fill-current",children:(0,r.jsx)("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})})})}var m=s(9008),u=s.n(m),h=s(4298),x=s.n(h);function g(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x(),{id:"tag-manager",src:"https://www.googletagmanager.com/gtag/js?id=G-VDMR617ED6",strategy:"afterInteractive"}),(0,r.jsx)(x(),{id:"run-tag-manager",strategy:"afterInteractive",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-VDMR617ED6');\n        "})]})}function p(e){let{pages:t=[],rightPages:s=[["About","/about"],["Settings","/settings"]],title:a}=e,m=(0,n.useRouter)(),[h,x]=(0,o.useState)(null);(0,o.useEffect)(()=>{(0,l.Aj)(d.I,e=>{x(e)})},[]);let[p,f]=(0,o.useState)(!1);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:a?a+" | MO Checklist":"MO Checklist"}),(0,r.jsx)(g,{})]}),(0,r.jsx)(c,{}),(0,r.jsxs)("nav",{className:"bg-gray-800",children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center md:hidden",children:(0,r.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:()=>f(!p),children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,r.jsx)("svg",{className:"h-6 w-6 "+(p?"hidden":"block"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,r.jsx)("svg",{className:"h-6 w-6 "+(p?"block":"hidden"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,r.jsxs)("div",{className:"flex flex-1 items-center justify-center md:items-stretch md:justify-start",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center text-white font-bold text-2xl",children:(0,r.jsx)(i(),{href:"/",children:"MO Checklist"})}),(0,r.jsx)("div",{className:"hidden md:ml-6 md:block w-full",children:(0,r.jsxs)("div",{className:"flex",children:[t.map((e,t)=>{let[s,a]=e;return(0,r.jsx)(i(),{href:a,className:(m.pathname==a?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":m.pathname==a?"page":void 0,children:s},t)}),(0,r.jsx)("div",{className:"flex-auto"}),s.map((e,t)=>{let[s,a]=e;return(0,r.jsx)(i(),{href:a,className:(m.pathname==a?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":m.pathname==a?"page":void 0,children:s},t)}),h?(0,r.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2",onClick:()=>{(0,l.w7)(d.I)},children:"Sign Out"}):(0,r.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2","aria-current":"/login"==m.pathname?"page":void 0,children:"Log In"})]})})]})]})}),(0,r.jsx)("div",{className:"md:hidden"+(p?"":" hidden"),id:"mobile-menu",children:(0,r.jsxs)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:[[...t,...s].map((e,t)=>{let[s,a]=e;return(0,r.jsx)(i(),{href:a,className:(m.pathname==a?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block rounded-md px-3 py-2 text-base font-medium","aria-current":m.pathname==a?"page":void 0,children:s},t)}),h?(0,r.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",onClick:()=>{(0,l.w7)(d.I)},children:"Sign Out"}):(0,r.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"/login"==m.pathname?"page":void 0,children:"Log In"})]})})]})]})}},1481:function(e,t,s){"use strict";s.d(t,{I:function(){return o},db:function(){return l}});var r=s(3977),a=s(1259),i=s(1019);let n=(0,r.ZF)({apiKey:"AIzaSyC8G0tLL7H6w9w3YqnjIGhbXAEMAiL9vNQ",authDomain:"mo-checklist-1af5a.firebaseapp.com",databaseURL:"https://mo-checklist-1af5a-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mo-checklist-1af5a",storageBucket:"mo-checklist-1af5a.appspot.com",messagingSenderId:"631371770726",appId:"1:631371770726:web:c4188102090cd82e3cf6a7",measurementId:"G-VDMR617ED6"}),o=(0,a.v0)(n),l=(0,i.N8)(n)},933:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var r=s(5893),a=s(3425),i=s(1163),n=s(7294),o=s(1259),l=s(1481),d=s(7536),c=s(1664),m=s.n(c),u=s(3067);function h(){var e,t;let s=(0,i.useRouter)();(0,n.useEffect)(()=>{(0,o.Aj)(l.I,e=>{e&&s.push("/")})},[s]);let[c,h]=(0,n.useState)(!1),[x,g]=(0,n.useState)(""),{register:p,formState:{errors:f},handleSubmit:v}=(0,d.cI)(),j=e=>{h(!0),(0,o.e5)(l.I,e.email,e.password).catch(e=>{h(!1);let t=e.code;switch(e.message,t){case"auth/user-not-found":g("User not found.");break;case"auth/wrong-password":g("Incorrect password.");break;case"auth/invalid-email":g("Invalid email address.");break;default:g("There was an error. Please try again in a few minutes. If the problem persists, please contact us. (Error code: "+t+")")}})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{title:"Login"}),(0,r.jsxs)("div",{className:"py-4 px-12",children:[(0,r.jsx)("h1",{className:"font-bold text-3xl text-center",children:"Log In"}),(0,r.jsx)("div",{className:"max-w-md mx-auto",children:(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:v(j),noValidate:!0,children:[(0,r.jsxs)("div",{className:"-space-y-px rounded-md shadow-sm",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email Address"}),(0,r.jsx)("input",{...p("email",{required:"Email address is required.",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format."}}),id:"email-address",type:"email",autoComplete:"email",className:"rounded-t-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Email Address"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,r.jsx)("input",{...p("password",{required:"Password is required."}),id:"password",type:"password",autoComplete:"password",className:"rounded-b-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Password"})]})]}),(0,r.jsxs)("div",{className:"text-red-500",children:[(0,r.jsx)("div",{children:null==f?void 0:null===(e=f.email)||void 0===e?void 0:e.message}),(0,r.jsx)("div",{children:null==f?void 0:null===(t=f.password)||void 0===t?void 0:t.message}),(0,r.jsx)("div",{children:x||""})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"text-sm",children:(0,r.jsx)(m(),{href:"./forgot-password",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Forgot your password?"})}),(0,r.jsx)("div",{className:"text-sm",children:(0,r.jsx)(m(),{href:"./register",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Register an account"})})]}),(0,r.jsx)(u.Z,{full:!0,props:{type:"submit"},isLoading:c,children:"Sign in"})]})})})]})]})}}},function(e){e.O(0,[627,70,462,536,774,888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);