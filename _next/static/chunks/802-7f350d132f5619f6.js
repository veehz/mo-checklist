"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{8965:function(e,t){function o(e,t,o){for(let n of e)if(n[t]===o)return n;return null}let n=function(){let e=[];return e.push({name:"International Mathematical Olympiad",shortname:"IMO",url:"http://www.imo-official.org/",years:Array.from({length:64},(e,t)=>{let o=2022-t;return{year:o,url:"https://www.imo-official.org/year_info.aspx?year=".concat(o),problems:[1,2,3,4,5,6].map(e=>({index:e,url:"https://artofproblemsolving.com/wiki/index.php/".concat(o,"_IMO_Problems/Problem_").concat(e)}))}})}),o(o(e,"shortname","IMO").years,"year",1980).problems=[],o(o(e,"shortname","IMO").years,"year",1980).url="https://artofproblemsolving.com/wiki/index.php/1980_IMO",!function(){let t=[{year:2021,link:"https://artofproblemsolving.com/community/c3080392_2021_isl",num:[8,8,8,8]},{year:2020,link:"https://artofproblemsolving.com/community/c2409205_2020_isl",num:[8,8,9,7]},{year:2019,link:"https://artofproblemsolving.com/community/c1308102_2019_isl",num:[7,9,8,8]},{year:2018,link:"https://artofproblemsolving.com/community/c915701_2018_imo_shortlist",num:[7,7,7,7]},{year:2017,link:"https://artofproblemsolving.com/community/c686986_2017_imo_shortiist",num:[8,8,8,8]},{year:2016,link:"https://artofproblemsolving.com/community/c482986_2016_imo_shortlist",num:[8,8,8,8]},{year:2015,link:"https://artofproblemsolving.com/community/c111148_2015_imo_shortlist",num:[6,7,8,8]},{year:2014,link:"https://artofproblemsolving.com/community/c107000_2014_imo_shortlist",num:[6,9,7,8]},{year:2013,link:"https://artofproblemsolving.com/community/c3964_2013_imo_shortlist",num:[6,8,6,7]},{year:2012,link:"https://artofproblemsolving.com/community/c3963_2012_imo_shortlist",num:[7,7,8,8]},{year:2011,link:"https://artofproblemsolving.com/community/c3962_2011_imo_shortlist",num:[7,7,8,8]},{year:2010,link:"https://artofproblemsolving.com/community/c3961_2010_imo_shortlist",num:[8,7,7,6]},{year:2009,link:"https://artofproblemsolving.com/community/c3960_2009_imo_shortlist",num:[7,8,8,7]}],o={name:"International Mathematical Olympiad Shortlist",shortname:"IMOSL",url:"https://artofproblemsolving.com/community/c3223",years:[]},n=["A","C","G","N"];for(let e in t){let r=t[e].year;for(let a=0;a<4;a++){let i={name:"IMOSL ".concat(r),description:"(".concat(n[a],")"),year:r,links:{PDF:"https://www.imo-official.org/problems/IMO".concat(r,"SL.pdf")},url:t[e].link,problems:[]};for(let o=0;o<t[e].num[a];o++)i.problems.push({name:"".concat(n[a]).concat(o+1),index:o+1});o.years.push(i)}}e.push(o)}(),!function(){let t={name:"Asian Pacific Mathematical Olympiad",shortname:"APMO",url:"https://www.apmo-official.org/",years:[]};for(let e=2022;e>=1989;e--)t.years.push({year:e,url:"https://www.apmo-official.org/year_report/".concat(e),links:{PDF:"https://www.apmo-official.org/static/problems/apmo".concat(e,"_prb.pdf"),Sol:"https://www.apmo-official.org/static/solutions/apmo".concat(e,"_sol.pdf")},problems:[1,2,3,4,5].map(e=>({index:e}))});[2e3,1994,1993,1992,1991,1989].map(e=>{delete o(t.years,"year",e).links.Sol}),e.push(t)}(),!function(){let t={name:"Tournament of Towns",shortname:"TOT",url:"https://www.turgor.ru/en",years:[]};for(let e=2023;e>=2016;e--)t.years.push({name:"TOT Spring ".concat(e),year:e,links:{"O-PDF":"https://www.turgor.ru/en/problems/".concat(e-1980+1,"/spring-").concat(e-1980+1,"-O-eng-auth.pdf"),"A-PDF":"https://www.turgor.ru/en/problems/".concat(e-1980+1,"/spring-").concat(e-1980+1,"-A-eng-auth.pdf")},problems:["O1","O2","O3","O4","O5","A1","A2","A3","A4","A5","A6","A7"].map(e=>({name:e}))}),t.years.push({name:"TOT Fall ".concat(e-1),year:e,links:{"O-PDF":"https://www.turgor.ru/en/problems/".concat(e-1980+1,"/fall-").concat(e-1980+1,"-O-eng-auth.pdf"),"A-PDF":"https://www.turgor.ru/en/problems/".concat(e-1980+1,"/fall-").concat(e-1980+1,"-A-eng-auth.pdf")},problems:["O1","O2","O3","O4","O5","A1","A2","A3","A4","A5","A6","A7"].map(e=>({name:e}))});e.push(t)}(),e}();t.Z=n},3067:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(5893);function r(e){let{children:t,isLoading:o=!1,props:r={},className:a="",flex:i=!0,full:s=!1,disabled:l=!1,onClick:c}=e;return(0,n.jsxs)("button",{onClick:c,className:"group relative justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 "+(a.includes("bg-")?"":"bg-indigo-600 ")+(s?"w-full ":"")+(i?"flex ":"")+a,disabled:o||l,...r,children:[(0,n.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3"+(o?"":" hidden"),viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25 fill-indigo-600",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t]})}},3425:function(e,t,o){o.d(t,{Z:function(){return g}});var n=o(5893),r=o(1664),a=o.n(r),i=o(1163),s=o(7294),l=o(1259),c=o(1481);function m(){let[e,t]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=()=>{window.pageYOffset>100?t(!1):t(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let o=()=>{"scrollBehavior"in document.documentElement.style?document.documentElement.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0};return(0,n.jsx)("div",{id:"back-to-top",className:"".concat(e?"opacity-0 bottom-[-40px] pointer-events-none":"opacity-100 bottom-5"," bg-gray-300 rounded-full shadow-md text-red-600 cursor-pointer fixed right-5 transition-all duration-300 z-10"),onClick:o,children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:"block h-6 m-3 fill-current",children:(0,n.jsx)("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})})})}var u=o(9008),d=o.n(u),h=o(4298),p=o.n(h);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p(),{id:"tag-manager",src:"https://www.googletagmanager.com/gtag/js?id=G-VDMR617ED6",strategy:"afterInteractive"}),(0,n.jsx)(p(),{id:"run-tag-manager",strategy:"afterInteractive",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-VDMR617ED6');\n        "})]})}function g(e){let{pages:t=[["Problems","/"]],rightPages:o=[["About","/about"],["Settings","/settings"]],title:r}=e,u=(0,i.useRouter)(),[h,p]=(0,s.useState)(null);function g(){(0,l.w7)(c.I).then(()=>{u.reload()})}(0,s.useEffect)(()=>{(0,l.Aj)(c.I,e=>{p(e)})},[]);let[x,y]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(d(),{children:[(0,n.jsx)("title",{children:r?r+" | MO Checklist":"MO Checklist"}),(0,n.jsx)(f,{})]}),(0,n.jsx)(m,{}),(0,n.jsxs)("nav",{className:"bg-gray-800",children:[(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,n.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center md:hidden",children:(0,n.jsxs)("button",{type:"button",className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:()=>y(!x),children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,n.jsx)("svg",{className:"h-6 w-6 "+(x?"hidden":"block"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,n.jsx)("svg",{className:"h-6 w-6 "+(x?"block":"hidden"),fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})}),(0,n.jsxs)("div",{className:"flex flex-1 items-center justify-center md:items-stretch md:justify-start",children:[(0,n.jsx)("div",{className:"flex flex-shrink-0 items-center text-white font-bold text-2xl",children:(0,n.jsx)(a(),{href:"/",children:"MO Checklist"})}),(0,n.jsx)("div",{className:"hidden md:ml-6 md:block w-full",children:(0,n.jsxs)("div",{className:"flex",children:[t.map((e,t)=>{let[o,r]=e;return(0,n.jsx)(a(),{href:r,className:(u.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":u.pathname==r?"page":void 0,children:o},t)}),(0,n.jsx)("div",{className:"flex-auto"}),o.map((e,t)=>{let[o,r]=e;return(0,n.jsx)(a(),{href:r,className:(u.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" rounded-md px-3 py-2 text-sm font-medium"+(0==t?" ml-0":" ml-2"),"aria-current":u.pathname==r?"page":void 0,children:o},t)}),h?(0,n.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2",onClick:()=>{g()},children:"Sign Out"}):(0,n.jsx)(a(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-2","aria-current":"/login"==u.pathname?"page":void 0,children:"Log In"})]})})]})]})}),(0,n.jsx)("div",{className:"md:hidden"+(x?"":" hidden"),id:"mobile-menu",children:(0,n.jsxs)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:[[...t,...o].map((e,t)=>{let[o,r]=e;return(0,n.jsx)(a(),{href:r,className:(u.pathname==r?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white")+" block rounded-md px-3 py-2 text-base font-medium","aria-current":u.pathname==r?"page":void 0,children:o},t)}),h?(0,n.jsx)("div",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",onClick:()=>{g()},children:"Sign Out"}):(0,n.jsx)(a(),{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"/login"==u.pathname?"page":void 0,children:"Log In"})]})})]})]})}},1481:function(e,t,o){o.d(t,{I:function(){return s},db:function(){return l}});var n=o(3977),r=o(1259),a=o(1019);let i=(0,n.ZF)({apiKey:"AIzaSyC8G0tLL7H6w9w3YqnjIGhbXAEMAiL9vNQ",authDomain:"mo-checklist-1af5a.firebaseapp.com",databaseURL:"https://mo-checklist-1af5a-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mo-checklist-1af5a",storageBucket:"mo-checklist-1af5a.appspot.com",messagingSenderId:"631371770726",appId:"1:631371770726:web:c4188102090cd82e3cf6a7",measurementId:"G-VDMR617ED6"}),s=(0,r.v0)(i),l=(0,a.N8)(i)}}]);