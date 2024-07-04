import{W as d,j as e,a as o}from"./app-993787b3.js";import{A as m}from"./AuthenticatedLayout-215d9213.js";import{I as p}from"./ImageUpload-ec3267c1.js";import u from"./Color-d04ca49c.js";import h from"./Size-f7a395f0.js";import g from"./Tag-3dbd0402.js";import j from"./Category-7e04d254.js";import"./index.esm-6309406b.js";import"./transition-339d2e4b.js";import"./iconBase-0d93af5b.js";import"./index.esm-3560b4e2.js";import"./Modal-52813257.js";import"./index.esm-adc28818.js";function T({store:c,thumbnails:i,categories:r}){const{data:a,setData:t,errors:l,post:n}=d({name:"",cost_price:"",selling_price:"",discount:"",quantity:"",color:"",size:"",image:"",category:"",tag:"",description:"",store_id:c.id}),x=s=>{s.preventDefault(),n(route("product.store",c.username))};return e.jsxs(m,{children:[e.jsx(o,{title:"Create product"}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-9 pt-9",children:e.jsxs("div",{className:"bg-white flex gap-2 p-6 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"text-gray-900",children:"Create product,"}),e.jsx("div",{className:"text-gray-900",children:c.name})]})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsxs("form",{onSubmit:x,className:"bg-white flex flex-col gap-5 w-full p-2 md:p-5 sm:rounded-lg",children:[e.jsxs("div",{className:"grid lg:grid-cols-2 gap-9",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.image&&e.jsx("p",{className:"text-red-500",children:l.image}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Image?"})}),e.jsx("div",{className:"bg-gray-300 h-96 w-full rounded-xl",children:a.image.length?e.jsx("img",{className:"h-full w-full rounded-xl object-cover",src:a.image[0].url,alt:a.image[0].url}):null}),e.jsx("div",{children:e.jsx(p,{thumbnails:i,store:c,image:a.image,setImage:t})})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.color&&e.jsx("p",{className:"text-red-500",children:l.color}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Color's?"})}),e.jsx(u,{color:a.color,setColor:t})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.size&&e.jsx("p",{className:"text-red-500",children:l.size}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Size's?"})}),e.jsx(h,{size:a.size,setSize:t})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.tag&&e.jsx("p",{className:"text-red-500",children:l.tag}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Tag's?"})}),e.jsx(g,{tag:a.tag,setTag:t})]}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Category?"})}),e.jsx(j,{store:c,categories:r,category:a.category,setCategory:t})]})]}),e.jsxs("div",{className:"grid gap-9",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.name&&e.jsx("p",{className:"text-red-500",children:l.name}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Product name?"})}),e.jsx("input",{value:a.name,onChange:s=>t("name",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Bag"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.cost_price&&e.jsx("p",{className:"text-red-500",children:l.cost_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Cost price?"})}),e.jsx("input",{value:a.cost_price,onChange:s=>t("cost_price",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"4000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.selling_price&&e.jsx("p",{className:"text-red-500",children:l.selling_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Selling price?"})}),e.jsx("input",{value:a.selling_price,onChange:s=>t("selling_price",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"5000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.discount&&e.jsx("p",{className:"text-red-500",children:l.discount}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Discount?"})}),e.jsx("input",{value:a.discount,onChange:s=>t("discount",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"100"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.quantity&&e.jsx("p",{className:"text-red-500",children:l.quantity}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Quantity on stock?"})}),e.jsx("input",{value:a.quantity,onChange:s=>t("quantity",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"20"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.description&&e.jsx("p",{className:"text-red-500",children:l.description}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Description?"})}),e.jsx("textarea",{value:a.description,onChange:s=>t("description",s.target.value),className:"input bg-slate-200 h-56 w-full text-slate-800 border-none outline-none placeholder:text-s4ate-300",placeholder:"General merchandise"})]})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"btn bg-gold text-white",children:"submit"})})]})})]})]})}export{T as default};