import{W as d,j as e,a as x}from"./app-bd2730a4.js";import{A as o}from"./AuthenticatedLayout-3668f849.js";import{I as m}from"./ImageUpload-2abc0020.js";import p from"./Color-9dd187b8.js";import u from"./Size-1668eef9.js";import h from"./Tag-5078463b.js";import"./index.esm-166d1484.js";import"./transition-677c2321.js";import"./iconBase-c5b08420.js";import"./index.esm-700f365f.js";import"./Modal-a9813fd6.js";import"./index.esm-8f650696.js";function D({store:c,thumbnails:i}){const{data:a,setData:t,errors:l,post:r}=d({name:"",cost_price:"",selling_price:"",discount:"",quantity:"",color:"",size:"",image:"",tag:"",description:"",store_id:c.id}),n=s=>{s.preventDefault(),r(route("product.store",c.username))};return e.jsxs(o,{children:[e.jsx(x,{title:"Create product"}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-9 pt-9",children:e.jsxs("div",{className:"bg-white flex gap-2 p-6 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"text-gray-900",children:"Create product,"}),e.jsx("div",{className:"text-gray-900",children:c.name})]})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsxs("form",{onSubmit:n,className:"bg-white flex flex-col gap-5 w-full p-2 md:p-5 sm:rounded-lg",children:[e.jsxs("div",{className:"grid lg:grid-cols-2 gap-9",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.image&&e.jsx("p",{className:"text-red-500",children:l.image}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Image?"})}),e.jsx("div",{className:"bg-gray-300 h-96 w-full rounded-xl",children:a.image.length?e.jsx("img",{className:"h-full w-full rounded-xl object-cover",src:a.image[0].url,alt:a.image[0].url}):null}),e.jsx("div",{children:e.jsx(m,{thumbnails:i,store:c,image:a.image,setImage:t})})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.color&&e.jsx("p",{className:"text-red-500",children:l.color}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Color's?"})}),e.jsx(p,{color:a.color,setColor:t})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.size&&e.jsx("p",{className:"text-red-500",children:l.size}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Size's?"})}),e.jsx(u,{size:a.size,setSize:t})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.tag&&e.jsx("p",{className:"text-red-500",children:l.tag}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Tag's?"})}),e.jsx(h,{tag:a.tag,setTag:t})]})]})]}),e.jsxs("div",{className:"grid gap-9",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.name&&e.jsx("p",{className:"text-red-500",children:l.name}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Product name?"})}),e.jsx("input",{value:a.name,onChange:s=>t("name",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Bag"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.cost_price&&e.jsx("p",{className:"text-red-500",children:l.cost_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Cost price?"})}),e.jsx("input",{value:a.cost_price,onChange:s=>t("cost_price",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"4000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.selling_price&&e.jsx("p",{className:"text-red-500",children:l.selling_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Selling price?"})}),e.jsx("input",{value:a.selling_price,onChange:s=>t("selling_price",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"5000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.discount&&e.jsx("p",{className:"text-red-500",children:l.discount}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Discount?"})}),e.jsx("input",{value:a.discount,onChange:s=>t("discount",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"100"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.quantity&&e.jsx("p",{className:"text-red-500",children:l.quantity}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Quantity on stock?"})}),e.jsx("input",{value:a.quantity,onChange:s=>t("quantity",s.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"20"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.description&&e.jsx("p",{className:"text-red-500",children:l.description}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Description?"})}),e.jsx("textarea",{value:a.description,onChange:s=>t("description",s.target.value),className:"input bg-slate-200 h-56 w-full text-slate-800 border-none outline-none placeholder:text-s4ate-300",placeholder:"General merchandise"})]})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"btn bg-gold text-white",children:"submit"})})]})})]})]})}export{D as default};