(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7168:function(e,t,a){Promise.resolve().then(a.bind(a,573))},573:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(7437),s=a(828),n=a(3646),l=a(687);let o={pictures:[],loading:!0},i=(0,n.UY)({pictures:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return"getPicturesDataSuccess"===t.type?{pictures:t.payload,loading:!1}:e}}),c=(0,n.jB)(i,{},(0,n.md)(l.I));var u=a(3103),d=a.n(u),g=a(2265),m=a(482),p=a.n(m),h=a(8078),b=a(703);let x=e=>{let{pictures:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"-m-1 flex flex-wrap md:-m-2",children:t.map((e,t)=>(0,r.jsx)("div",{className:"flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2",children:(0,r.jsx)(b.default,{className:"block mx-auto h-full object-cover object-center rounded-lg shadow-md",width:e.width,height:e.height,src:e.urls.regular,alt:e.alt_description})},t))})})};function f(){let[e,t]=(0,g.useState)("rgba(37, 99, 235, 1)"),[a,s]=(0,g.useState)(""),[n,l]=(0,g.useState)(1),[o]=(0,g.useState)(10),[i,c]=(0,g.useState)(!1),[u,m]=(0,g.useState)({total:0,total_pages:0,results:[]}),b=async()=>{let e=a||f();console.log("[Home] Word to search for: ".concat(e));let t=await fetch("https://api.unsplash.com/search/photos/?query=".concat(e,"&page=").concat(n,"&client_id=KYj4qqwnERHg-kkOos3OkcnX9Q_Mz6jBI6JQJuSTXL0"));m(await t.json()),c(!1)},f=()=>{var e=["Horse","Pig","Dog","Cat","Parrot","Iguana"];return e[Math.floor(Math.random()*e.length)]};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{className:"max-w-md mx-auto",onSubmit:e=>{c(!0),e.preventDefault(),b()},children:[(0,r.jsx)("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Search"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,r.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,r.jsx)("input",{type:"search",value:a,onChange:e=>s(e.target.value),id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search photos.."}),(0,r.jsx)("button",{type:"submit",className:"text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Search"})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(r.Fragment,{children:i?(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)(h.Z,{color:e,loading:i,"aria-label":"Loader","data-testid":"loader"})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{pictures:u.results}),(0,r.jsx)("br",{}),(0,r.jsx)(p(),{activeClassName:d().pageItemActive,breakClassName:"pageItem break-me",breakLabel:"...",containerClassName:d().pagination,disabledClassName:"disabled-page",marginPagesDisplayed:2,nextLabel:">",onPageChange:e=>{console.log("[Home] Selected page: ".concat(e.selected)),l(e.selected+1),u.results=[],m(u),b()},pageRangeDisplayed:o,pageCount:u.total_pages,previousLabel:"<",renderOnZeroPageCount:null})]})})]})}function j(){return(0,r.jsx)(s.zt,{store:c,children:(0,r.jsx)(f,{})})}},3103:function(e){e.exports={pagination:"paginator_pagination__rOIpZ",pageLink:"paginator_pageLink__Ouw6M",pageItem:"paginator_pageItem__BlPya",pageItemActive:"paginator_pageItemActive__PCD2H"}}},function(e){e.O(0,[648,971,69,744],function(){return e(e.s=7168)}),_N_E=e.O()}]);