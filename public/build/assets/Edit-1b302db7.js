import{W as i,j as e,a as o}from"./app-44938ad7.js";import{A as x}from"./AuthenticatedLayout-b8de335f.js";import m from"./CreateOrderPickupPrice-a6d67d5a.js";import p from"./OrderPickupPrices-1a8f84e2.js";import"./index.esm-24afa5ec.js";import"./transition-38b1d576.js";import"./iconBase-09b3de97.js";import"./index.esm-4a62ceb0.js";function _({store:s,orderPickupPrices:n}){const{data:t,setData:r,errors:l,put:c}=i({username:s.username??"",email:s.email??"",tel:s.tel??"",country:s.country??"",state:s.state??"",zip_code:s.zip_code??"",store_address:s.store_address??"",store_name:s.store_name??"",store_type:s.store_type??"",store_description:s.store_description??""}),d=a=>{a.preventDefault(),c(route("myStore.update",s.username))};return e.jsxs(x,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"My stores"}),children:[e.jsx(o,{title:"Create store"}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-9 pt-9",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:"My Store's"})})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsxs("form",{onSubmit:d,className:"bg-white flex flex-col gap-5 w-full p-2 md:p-5 sm:rounded-lg",children:[e.jsxs("div",{className:"grid lg:grid-cols-3 gap-9",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.store_name&&e.jsx("p",{className:"text-red-500",children:l.username}),l.store_name&&e.jsx("p",{className:"text-red-500",children:l.store_name}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Store name?"})}),e.jsx("input",{value:t.store_name,onChange:a=>r("store_name",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"MimashSignature"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.email&&e.jsx("p",{className:"text-red-500",children:l.email}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Email address?"})}),e.jsx("input",{value:t.email,onChange:a=>r("email",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"hello@mimashsignature.com"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.tel&&e.jsx("p",{className:"text-red-500",children:l.tel}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Phone number?"})}),e.jsx("input",{value:t.tel,onChange:a=>r("tel",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"+2348067988642"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-9",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.country&&e.jsx("p",{className:"text-red-500",children:l.country}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Country?"})}),e.jsx("input",{value:t.country,onChange:a=>r("country",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Nigeria"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.state&&e.jsx("p",{className:"text-red-500",children:l.state}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"State?"})}),e.jsx("input",{value:t.state,onChange:a=>r("state",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Kaduna"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.zip_code&&e.jsx("p",{className:"text-red-500",children:l.zip_code}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"ZIP code?"})}),e.jsx("input",{value:t.zip_code,onChange:a=>r("zip_code",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"811104"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.store_address&&e.jsx("p",{className:"text-red-500",children:l.store_address}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Store address?"})}),e.jsx("input",{value:t.store_address,onChange:a=>r("store_address",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"No: 12 Kaduna Road"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.store_type&&e.jsx("p",{className:"text-red-500",children:l.store_type}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Category?"})}),e.jsx("input",{value:t.store_type,onChange:a=>r("store_type",a.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Category"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.store_description&&e.jsx("p",{className:"text-red-500",children:l.store_description}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Description?"})}),e.jsx("textarea",{value:t.store_description,onChange:a=>r("store_description",a.target.value),className:"input bg-slate-200 h-56 w-full text-slate-800 border-none outline-none placeholder:text-s4ate-300",placeholder:"General merchandise"})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{className:"btn bg-gold text-white",children:"submit"})})]})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsx(m,{storeData:s})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsx(p,{orderPickupPrices:n})})]})]})}export{_ as default};
