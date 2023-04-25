"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{8965:function(e,t){function a(e,t,a){for(let n of e)if(n[t]===a)return n;return null}let n=function(){let e=[];return e.push({name:"International Mathematical Olympiad",shortname:"IMO",url:"http://www.imo-official.org/",years:Array.from({length:64},(e,t)=>{let a=2022-t;return{year:a,url:"https://www.imo-official.org/year_info.aspx?year=".concat(a),problems:[1,2,3,4,5,6].map(e=>({index:e,url:"https://artofproblemsolving.com/wiki/index.php/".concat(a,"_IMO_Problems/Problem_").concat(e)}))}})}),a(a(e,"shortname","IMO").years,"year",1980).problems=[],a(a(e,"shortname","IMO").years,"year",1980).url="https://artofproblemsolving.com/wiki/index.php/1980_IMO",!function(){let t=[{year:2021,link:"https://artofproblemsolving.com/community/c3080392_2021_isl",num:[8,8,8,8]},{year:2020,link:"https://artofproblemsolving.com/community/c2409205_2020_isl",num:[8,8,9,7]},{year:2019,link:"https://artofproblemsolving.com/community/c1308102_2019_isl",num:[7,9,8,8]}],a={name:"International Mathematical Olympiad Shortlist",shortname:"IMOSL",url:"https://artofproblemsolving.com/community/c3223",years:[]},n=["A","C","G","N"];for(let e in t){let r=t[e].year;for(let i=0;i<4;i++){let o={name:"IMOSL ".concat(r," (").concat(n[i],")"),year:r,links:{PDF:"https://www.imo-official.org/problems/IMO".concat(r,"SL.pdf")},url:t[e].link,problems:[]};for(let a=0;a<t[e].num[i];a++)o.problems.push({name:"".concat(n[i]).concat(a+1),index:a+1});a.years.push(o)}}e.push(a)}(),!function(){let t={name:"Asian Pacific Mathematical Olympiad",shortname:"APMO",url:"https://www.apmo-official.org/",years:[]};for(let e=2022;e>=1989;e--)t.years.push({year:e,url:"https://www.apmo-official.org/year_report/".concat(e),links:{PDF:"https://www.apmo-official.org/static/problems/apmo".concat(e,"_prb.pdf"),Sol:"https://www.apmo-official.org/static/solutions/apmo".concat(e,"_sol.pdf")},problems:[1,2,3,4,5].map(e=>({index:e}))});[2e3,1994,1993,1992,1991,1989].map(e=>{delete a(t.years,"year",e).links.Sol}),e.push(t)}(),e}();t.Z=n},3067:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(5893);function r(e){let{children:t,isLoading:a=!1,props:r={},className:i="",flex:o=!0,full:s=!1,disabled:l=!1,onClick:c}=e;return(0,n.jsxs)("button",{onClick:c,className:"group relative justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 "+(i.includes("bg-")?"":"bg-indigo-600 ")+(s?"w-full ":"")+(o?"flex ":"")+i,disabled:a||l,...r,children:[(0,n.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3"+(a?"":" hidden"),viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25 fill-indigo-600",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t]})}},3425:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(5893),r=a(1664),i=a.n(r),o=a(1163),s=a(7294),l=a(1259),c=a(1481);function m(){let[e,t]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=()=>{window.pageYOffset>100?t(!1):t(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let a=()=>{"scrollBehavior"in document.documentElement.style?document.documentElement.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0};return(0,n.jsx)("div",{id:"back-to-top",className:"".concat(e?"opacity-0 bottom-[-40px] pointer-events-none":"opacity-100 bottom-5"," bg-gray-300 rounded-full shadow-md text-red-600 cursor-pointer fixed right-5 transition-all duration-300 z-10"),onClick:a,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:"block h-6 m-3 fill-current",children:(0,n.jsx)("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})})})}var d=a(9008),h=a.n(d),u=a(4298),p=a.n(u);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p(),{id:"tag-manager",src:"https://www.googletagmanager.com/gtag/js?id=G-VDMR617ED6",strategy:"afterInteractive"}),(0,n.jsx)(p(),{id:"run-tag-manager",strategy:"afterInteractive",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-VDMR617ED6');\n        "})]})}function x(e){let{pages:t=[["Problems","/"]],rightPages:a=[["About","/about"],["Settings","/settings"]],title:r}=e,d=(0,o.useRouter)(),[u,p]=(0,s.useState)(null);function x(){(0,l.w7)(c.I).then(()=>{d.reload()})}(0,s.useEffect)(()=>{(0,l.Aj)(c.I,e=>{p(e)})},[]);let[g,y]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(h(),{children:[(0,n.jsx)("title",{children:r?r+" | MO Checklist":"MO Checklist"}),(0,n.jsx)(f,{})]}),(0,n.jsx)(m,{}),(0,n.jsxs)("nav",{className:"bg-gray-800",children:[(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,n.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center md:hidden",children:(0,n.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:()=>y(!g),children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,n.jsx)("svg",{className:"h-6 w-6 "+(g?"hidden":"block"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,n.jsx)("svg",{className:"h-6 w-6 "+(g?"block":"hidden"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,n.jsxs)("div",{className:"flex flex-1 items-center justify-center md:items-stretch md:justify-start",children:[(0,n.jsx)("div",{className:"flex flex-shrink-0 items-center text-white font-bold text-2xl",children:(0,n.jsx)(i(),{href:"/",children:"MO Checklist"})}),(0,n.jsx)("div",{className:"hidden md:ml-6 md:block w-full",children:(0,n.jsxs)("div",{className:"flex",children:[t.map((e,t)=>{let[a,r]=e;return(0,n.jsx)(i(),{href:r,className:(d.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":d.pathname==r?"page":void 0,children:a},t)}),(0,n.jsx)("div",{className:"flex-auto"}),a.map((e,t)=>{let[a,r]=e;return(0,n.jsx)(i(),{href:r,className:(d.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":d.pathname==r?"page":void 0,children:a},t)}),u?(0,n.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2",onClick:()=>{x()},children:"Sign Out"}):(0,n.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2","aria-current":"/login"==d.pathname?"page":void 0,children:"Log In"})]})})]})]})}),(0,n.jsx)("div",{className:"md:hidden"+(g?"":" hidden"),id:"mobile-menu",children:(0,n.jsxs)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:[[...t,...a].map((e,t)=>{let[a,r]=e;return(0,n.jsx)(i(),{href:r,className:(d.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block rounded-md px-3 py-2 text-base font-medium","aria-current":d.pathname==r?"page":void 0,children:a},t)}),u?(0,n.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",onClick:()=>{x()},children:"Sign Out"}):(0,n.jsx)(i(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"/login"==d.pathname?"page":void 0,children:"Log In"})]})})]})]})}},1481:function(e,t,a){a.d(t,{I:function(){return s},db:function(){return l}});var n=a(3977),r=a(1259),i=a(1019);let o=(0,n.ZF)({apiKey:"AIzaSyC8G0tLL7H6w9w3YqnjIGhbXAEMAiL9vNQ",authDomain:"mo-checklist-1af5a.firebaseapp.com",databaseURL:"https://mo-checklist-1af5a-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mo-checklist-1af5a",storageBucket:"mo-checklist-1af5a.appspot.com",messagingSenderId:"631371770726",appId:"1:631371770726:web:c4188102090cd82e3cf6a7",measurementId:"G-VDMR617ED6"}),s=(0,r.v0)(o),l=(0,i.N8)(o)}}]);