(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(5893),s=n(8469),l=n(8965),o=n(1664),r=n.n(o),c=n(1481),i=n(7294),d=n(1259),u=n(1019),m=n(2606),h=n(7106),x=n(4819),p=n(3067),y=n(1163);function f(e){let{href:t,children:n,target:s,onClick:l,className:o}=e;return t?(0,a.jsx)("a",{href:t,target:s,onClick:l,className:o,children:n}):(0,a.jsx)("span",{className:o,children:n})}let v={0:"bg-zinc-50",1:"bg-yellow-200",2:"bg-green-200"};function b(e,t,n){return"".concat(t.name||"".concat(e.shortname," ").concat(t.year)," ").concat(n.name||n.index)}function g(e,t){if("increment"==t.type){let n=Object.keys(v).length;return e[t.payload]||(e[t.payload]=0),{...e,[t.payload]:(e[t.payload]+1)%n}}return"update"==t.type?{...e,...t.payload}:t.payload}function j(){let e=(0,y.useRouter)(),[t,n]=(0,i.useReducer)(g,{}),[o,j]=(0,i.useState)(),[w,N]=(0,i.useState)([]),k=parseInt("15"),[C,S]=(0,i.useState)(k),[_,O]=(0,i.useState)(!1),[E,M]=(0,i.useState)("User"),[P,T]=(0,i.useState)(""),[Y,Z]=(0,i.useState)(""),[q,F]=(0,i.useState)({}),[H,L]=(0,i.useState)(!1);async function I(){let e={};for(let[n,a]of Object.entries(t))if(q[n]!=a){if(!q[n]&&0==a)continue;e[n]=a||null}try{await (0,u.Vx)((0,u.iH)(c.db,"solved/".concat(o.uid)),e),L(!1),Z("Saved!")}catch(e){Z("Error saving!")}}return(0,i.useEffect)(()=>{let t="You have unsaved changes. Are you sure you want to leave?",n=e=>((e||window.event).returnValue=t,t),a=n=>{if(e.pathname!==n&&!confirm(t))throw e.events.emit("routeChangeError"),'Route change to "'.concat(n,'" was aborted (this error can be safely ignored). See https://github.com/vercel/next.js/discussions/32231.')};H?(window.addEventListener("beforeunload",n),e.events.on("routeChangeStart",a)):(window.removeEventListener("beforeunload",n),e.events.off("routeChangeStart",a))},[H,e]),(0,i.useEffect)(()=>{(0,d.Aj)(c.I,t=>{console.log("run");let a=window.location.origin?window.location.origin:"";e.query.user?(O(!0),T("".concat(a).concat(e.basePath||"/","?user=").concat(e.query.user)),(0,u.jM)((0,u.iH)(c.db,"profile/".concat(e.query.user)),e=>{e.exists()&&(e.val().hiddenContests?N(Object.keys(e.val().hiddenContests)):N([]),e.val().displayName?M(e.val().displayName):M("User"),e.val().shownYears?S(e.val().shownYears):S(k))},{onlyOnce:!0}),(0,u.jM)((0,u.iH)(c.db,"solved/".concat(e.query.user)),e=>{e.exists()?n({type:"set",payload:e.val()}):n({type:"set",payload:{}})},{onlyOnce:!0})):t?(j(t),T("".concat(a).concat(e.basePath||"/","?user=").concat(t.uid)),(0,u.jM)((0,u.iH)(c.db,"profile/".concat(t.uid)),e=>{e.exists()&&(e.val().hiddenContests?N(Object.keys(e.val().hiddenContests)):N([]),e.val().shownYears?S(e.val().shownYears):S(k))},{onlyOnce:!0}),(0,u.jM)((0,u.iH)(c.db,"solved/".concat(t.uid)),e=>{e.exists()?(F(e.val()),n({type:"set",payload:e.val()})):(F({}),n({type:"set",payload:{}}))},{onlyOnce:!0})):(F({}),n({type:"set",payload:{}}),j(void 0),T(""),N([]),S(k))})},[e,k]),(0,a.jsxs)("main",{children:[(0,a.jsx)(s.Z,{}),(0,a.jsxs)("div",{className:"py-4 px-4 sm:px-10 md:px-20",children:[(0,a.jsx)("h1",{className:"font-bold text-3xl text-center",children:_?"Viewing ".concat(E,"'s Checklist"):(null==o?void 0:o.displayName)?"".concat(o.displayName,"'s Checklist"):"My Checklist"}),(0,a.jsxs)("div",{className:"text-center mt-2",children:[o?null:(0,a.jsxs)("div",{children:[(0,a.jsx)(r(),{href:"/login",className:"text-blue-500",children:"Sign in"})," to save your progress on each question!"]}),(0,a.jsx)("div",{children:Y})]}),(0,a.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row-reverse mt-4",children:[(0,a.jsxs)(m.v,{as:"div",className:"relative inline-block mx-2 my-1 sm:my-0",children:[(0,a.jsxs)(m.v.Button,{className:"inline-flex w-full justify-center rounded-md bg-black bg-opacity-30 px-4 py-2 text-sm font-bold text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:["Jump To",(0,a.jsx)(x,{className:"ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100","aria-hidden":"true"})]}),(0,a.jsx)(h.u,{as:i.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(m.v.Items,{className:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,a.jsx)("div",{className:"px-1 py-1",children:l.Z.filter(e=>!w.includes(e.shortname)).map(e=>(0,a.jsx)(m.v.Item,{children:(0,a.jsxs)(r(),{href:"#".concat(e.shortname.toLowerCase()),className:"text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm",children:[e.name," (",e.shortname,")"]})},e.shortname))})})})]}),o&&!_?(0,a.jsx)(p.Z,{onClick:()=>{I()},className:"bg-green-600 mx-2 my-1 sm:my-0",children:(0,a.jsx)("div",{className:"px-2 sm:px-8",children:"Save"})}):null,_?(0,a.jsx)(p.Z,{className:"bg-blue-600 mx-2 my-1 sm:my-0",onClick:()=>{e.push("/"),O(!1)},children:(0,a.jsx)("div",{className:"px-2 sm:px-8",children:"Go Back to My Checklist"})}):null,P?(0,a.jsx)(p.Z,{onClick:()=>{navigator.clipboard.writeText(P),Z("Copied to clipboard!")},className:"bg-blue-600 mx-2 my-1 sm:my-0",children:(0,a.jsx)("div",{className:"px-2 sm:px-8",children:"Copy Sharable Link"})}):null]}),l.Z.filter(e=>!w.includes(e.shortname)).map(e=>(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("h2",{className:"font-bold text-2xl"+(e.url?" text-blue-500":""),id:e.shortname.toLowerCase(),children:(0,a.jsx)(f,{href:e.url,target:"_blank",children:e.name})}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsx)("table",{className:"table-auto w-full",children:(0,a.jsx)("tbody",{children:e.years.filter(e=>!e.year||e.year>new Date().getFullYear()-C).map(s=>(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{className:"cell"+(!function(e,n){if(!n.problems.length)return!1;let a=!1;for(let s of n.problems)if(!t[b(e,n,s)]||2!=t[b(e,n,s)]){a=!0;break}return!a}(e,s)?" bg-zinc-100":" ".concat(v[2])),children:[(0,a.jsx)(f,{href:s.url,target:"_blank",className:s.url?"text-blue-500 font-bold":"font-bold",children:s.name?"".concat(s.name," ").concat(s.description||""):"".concat(e.shortname," ").concat(s.year," ").concat(s.description||"")})," ",s.links?(0,a.jsxs)(a.Fragment,{children:["(",Object.keys(s.links).map((e,t)=>(0,a.jsxs)("span",{children:[(0,a.jsx)(f,{href:s.links[e],target:"_blank",className:"text-blue-500",children:e}),t==Object.keys(s.links).length-1?"":", "]},e)),")"]}):null]}),s.problems.map(l=>(0,a.jsx)("td",{id:b(e,s,l),className:"cell cell-problem"+(l.url?" text-blue-500":"")+" "+v[t[b(e,s,l)]||0],onClick:()=>{!_&&o&&(L(!0),n({type:"increment",payload:b(e,s,l)}))},children:(0,a.jsx)(f,{href:l.url,target:"_blank",onClick:e=>{e.stopPropagation()},children:l.name?l.name:"P".concat(l.index)})},l.name||l.index))]},s.name?"".concat(s.name," ").concat(s.description||""):"".concat(e.shortname," ").concat(s.year," ").concat(s.description||"")))})})})]},e.name))]})]})}}},function(e){e.O(0,[627,70,387,164,504,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);