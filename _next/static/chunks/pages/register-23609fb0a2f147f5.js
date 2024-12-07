(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[787],{9702:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(3184)}])},361:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(4848);function r(e){let{children:s,isLoading:t=!1,props:r={},className:i="",flex:l=!0,full:n=!1,disabled:o=!1,onClick:d}=e;return(0,a.jsxs)("button",{onClick:d,className:"group relative justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 "+(i.includes("bg-")?"":"bg-indigo-600 ")+(n?"w-full ":"")+(l?"flex ":"")+i,disabled:t||o,...r,children:[(0,a.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3"+(t?"":" hidden"),viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25 fill-indigo-600",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s]})}},8358:(e,s,t)=>{"use strict";t.d(s,{A:()=>h});var a=t(4848),r=t(1106),i=t.n(r),l=t(6715),n=t(6540),o=t(9640),d=t(6271),c=t(3368),m=t.n(c);function h(e){let{pages:s=[["Problems","/"]],rightPages:t=[["About","/about"],["Settings","/settings"]],title:r,description:c,ogDescription:h}=e,x=(0,l.useRouter)(),[u,p]=(0,n.useState)(null);function g(){(0,o.CI)(d.j).then(()=>{x.reload()})}(0,n.useEffect)(()=>{(0,o.hg)(d.j,e=>{p(e)})},[]);let[f,v]=(0,n.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsxs)(m(),{children:[(0,a.jsx)("title",{children:r?r+" | MO Checklist":"MO Checklist"}),(0,a.jsx)("meta",{property:"og:title",content:r?r+" | MO Checklist":"MO Checklist"},"title"),(0,a.jsx)("meta",{name:"description",content:c||"MO Checklist (MOCk) is a tool for keeping track of your progress in solving Mathematical Olympiad problems. Save your progress, filter by contests, and share with others!"},"desc"),(0,a.jsx)("meta",{name:"og:description",content:h||"With MO Checklist (MOCk), you can keep track of your progress in solving Mathematical Olympiad problems. Our comprehensive checklist allows you to mark problems as solved, unsolved, or unattempted, filter by contests, and view the most recent problems only. Log in to save your progress and share with others using a unique link to your profile. Start your MO journey today with MOCk!"})]}),(0,a.jsxs)("nav",{className:"bg-gray-800",children:[(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center md:hidden",children:(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:()=>v(!f),children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"h-6 w-6 "+(f?"hidden":"block"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,a.jsx)("svg",{className:"h-6 w-6 "+(f?"block":"hidden"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,a.jsxs)("div",{className:"flex flex-1 items-center justify-center md:items-stretch md:justify-start",children:[(0,a.jsx)("div",{className:"flex flex-shrink-0 items-center text-white font-bold text-2xl",children:(0,a.jsx)(i(),{href:"/",children:"MO Checklist"})}),(0,a.jsx)("div",{className:"hidden md:ml-6 md:block w-full",children:(0,a.jsxs)("div",{className:"flex",children:[s.map((e,s)=>{let[t,r]=e;return(0,a.jsx)(i(),{href:r,className:(x.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==s?" ml-0":" ml-2"),"aria-current":x.pathname==r?"page":void 0,children:t},s)}),(0,a.jsx)("div",{className:"flex-auto"}),t.map((e,s)=>{let[t,r]=e;return(0,a.jsx)(i(),{href:r,className:(x.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==s?" ml-0":" ml-2"),"aria-current":x.pathname==r?"page":void 0,children:t},s)}),u?(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2",onClick:()=>{g()},children:"Sign Out"}):(0,a.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2","aria-current":"/login"==x.pathname?"page":void 0,children:"Log In"})]})})]})]})}),(0,a.jsx)("div",{className:"md:hidden"+(f?"":" hidden"),id:"mobile-menu",children:(0,a.jsxs)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:[[...s,...t].map((e,s)=>{let[t,r]=e;return(0,a.jsx)(i(),{href:r,className:(x.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block rounded-md px-3 py-2 text-base font-medium","aria-current":x.pathname==r?"page":void 0,children:t},s)}),u?(0,a.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",onClick:()=>{g()},children:"Sign Out"}):(0,a.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"/login"==x.pathname?"page":void 0,children:"Log In"})]})})]})]})}},6271:(e,s,t)=>{"use strict";t.d(s,{db:()=>o,j:()=>n});var a=t(223),r=t(9640),i=t(9141);let l=(0,a.Wp)({apiKey:"AIzaSyC8G0tLL7H6w9w3YqnjIGhbXAEMAiL9vNQ",authDomain:"mo-checklist-1af5a.firebaseapp.com",databaseURL:"https://mo-checklist-1af5a-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mo-checklist-1af5a",storageBucket:"mo-checklist-1af5a.appspot.com",messagingSenderId:"631371770726",appId:"1:631371770726:web:c4188102090cd82e3cf6a7",measurementId:"G-VDMR617ED6"}),n=(0,r.xI)(l),o=(0,i.C3)(l)},3184:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var a=t(4848),r=t(1106),i=t.n(r),l=t(6540),n=t(9785),o=t(6271),d=t(9640),c=t(6715),m=t(361),h=t(8358);function x(){var e,s,t;let r=(0,c.useRouter)();(0,l.useEffect)(()=>{(0,d.hg)(o.j,e=>{e&&r.push("/about")})},[r]);let[x,u]=(0,l.useState)(!1),[p,g]=(0,l.useState)(""),{register:f,formState:{errors:v},handleSubmit:y}=(0,n.mN)();return(0,a.jsxs)("div",{children:[(0,a.jsx)(h.A,{title:"Register"}),(0,a.jsxs)("div",{className:"py-4 px-12",children:[(0,a.jsx)("h1",{className:"font-bold text-3xl text-center",children:"Register"}),(0,a.jsx)("div",{className:"max-w-md mx-auto",children:(0,a.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:y(e=>{u(!0),(0,d.eJ)(o.j,e.email,e.password).catch(e=>{u(!1);let s=e.code;switch(e.message,s){case"auth/email-already-in-use":g("Email already in use.");break;case"auth/invalid-email":g("Invalid email address.");break;default:g("There was an error. Please try again in a few minutes. If the problem persists, please contact us. (Error code: "+s+")")}})}),noValidate:!0,children:[(0,a.jsxs)("div",{className:"-space-y-px rounded-md shadow-sm",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email Address"}),(0,a.jsx)("input",{...f("email",{required:"Email address is required.",pattern:{value:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,message:"Entered value does not match email format."}}),id:"email-address",type:"email",autoComplete:"email",required:!0,className:"rounded-t-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Email Address"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,a.jsx)("input",{...f("password",{minLength:{value:8,message:"Password must have at least 8 characters."},maxLength:{value:20,message:"Password must have less than 20 characters."},required:"Password is required."}),id:"password",type:"password",autoComplete:"password",required:!0,className:"relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Password"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"confirmPassword",className:"sr-only",children:"Confirm Password"}),(0,a.jsx)("input",{...f("confirmPassword",{validate:{validateSamePassword:(e,s)=>e===s.password||"Passwords do not match."}}),id:"confirmPassword",type:"password",autoComplete:"password",required:!0,className:"rounded-b-md relative block w-full border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Confirm Password"})]})]}),(0,a.jsxs)("div",{className:"text-red-500",children:[(0,a.jsx)("div",{children:null==v?void 0:null===(e=v.email)||void 0===e?void 0:e.message}),(0,a.jsx)("div",{children:(null==v?void 0:null===(s=v.password)||void 0===s?void 0:s.message)||(null==v?void 0:null===(t=v.confirmPassword)||void 0===t?void 0:t.message)}),(0,a.jsx)("div",{children:p||""})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsx)("div",{className:"text-sm",children:(0,a.jsx)(i(),{href:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Already have an account?"})})}),(0,a.jsx)("div",{children:(0,a.jsx)(m.A,{props:{type:"submit"},isLoading:x,full:!0,children:"Register"})})]})})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[505,490,564,785,636,593,792],()=>s(9702)),_N_E=e.O()}]);