import{r as n,j as e,a as p,d as g}from"./app-44938ad7.js";import{P as f,G as j}from"./PageLayout-8d0cfcec.js";import{G as b}from"./iconBase-09b3de97.js";import{h as N}from"./index.esm-7e584474.js";import"./ApplicationLogo-b7797631.js";import"./index.esm-24afa5ec.js";import"./transition-38b1d576.js";function v(l){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(l)}function L({store:l}){const[c,i]=n.useState([]),[h,y]=n.useState(!1);n.useEffect(()=>{const a=(JSON.parse(localStorage.getItem("cart"))||[]).filter(r=>r.store_id===l.id);i(a)},[]),n.useEffect(()=>{const s=()=>{const a=JSON.parse(localStorage.getItem("cart"))||[];i(a)};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}},[h]);const u=s=>{const a=c.filter(r=>r.id!==s);i(a),localStorage.setItem("cart",JSON.stringify(a))},d=(s,a,r,t)=>{a=Math.max(1,a);const x=c.map(o=>o.id===s?{...o,quantity:a,selectedSize:r,selectedColor:t}:o);i(x),localStorage.setItem("cart",JSON.stringify(x))},m=()=>c.reduce((s,a)=>s+a.quantity*(a.selling_price-a.discount),0);return e.jsxs(f,{children:[e.jsx(p,{title:"Welcome"}),e.jsx("div",{className:"container mx-auto py-16 p-3 md:px-16 min-h-screen bg-dots-darker bg-center bg-gray-100 selection:bg-gold selection:text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto min-h-full bg-white p-6 lg:p-8 rounded-xl",children:[e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex justify-between items-center w-full p-3 border-b",children:[e.jsx("span",{className:"flex items-center",children:"Shopping Cart"}),e.jsx("button",{id:"my-drawer-4",children:e.jsx(j,{className:"flex items-center"})})]}),e.jsx("div",{className:"w-full",children:c.map(s=>{var a,r;return e.jsxs("div",{className:"flex gap-2 p-3 border-b relative",children:[e.jsx("button",{className:"absolute top-2 right-2 p-3",onClick:()=>u(s.id),children:e.jsx(v,{})}),e.jsx("div",{className:"bg-slate-200 h-16 w-16 rounded-md",children:e.jsx("img",{className:"h-full w-full object-cover rounded-md",src:s.image[0].url,alt:""})}),e.jsxs("div",{className:"grid md:flex justify-between w-full",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx("span",{children:s.name}),e.jsxs("div",{className:"flex border rounded-md w-24",children:[e.jsx("button",{className:"w-full border-r",onClick:()=>d(s.id,s.quantity-1),children:"-"}),e.jsx("span",{className:"w-full p-1 text-center outline-none border-none",children:s.quantity}),e.jsx("button",{className:"w-full border-l",onClick:()=>d(s.id,s.quantity+1),children:"+"})]}),e.jsxs("span",{children:[s.quantity," × ₦",s.selling_price-s.discount]})]}),e.jsxs("div",{className:"grid justify-end w-full gap-2 items-baseline mr-9 border-slate-200",children:[e.jsx("div",{className:"space-x-2 flex justify-end text-sm",children:(a=s.size)==null?void 0:a.map(t=>e.jsxs("label",{children:[e.jsx("input",{className:"sr-only peer",name:s.name+"size",type:"checkbox",value:t.size,checked:s.selectedSize===t.size,onChange:()=>d(s.id,s.quantity,t.size,s.selectedColor)}),e.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:t.size})]},Math.random(0,9999)))}),e.jsx("div",{className:"space-x-2 flex justify-end text-sm",children:(r=s.color)==null?void 0:r.map(t=>e.jsxs("label",{className:"h-9 w-9",children:[e.jsx("input",{className:"sr-only peer",name:s.name+"color",type:"checkbox",value:t.color,checked:s.selectedColor===t.color,onChange:()=>d(s.id,s.quantity,s.selectedSize,t.color)}),e.jsx("div",{className:"h-9 w-full rounded-full peer-checked:border-2 peer-checked:border-green-500",style:{backgroundColor:t.color}})]},Math.random(0,9999)))})]})]})]},s.id)})})]}),e.jsxs("div",{className:"grid gap-2 p-3 border-t",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("span",{children:["₦",m()]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("div",{children:e.jsx("a",{href:"",className:"btn bg-green-500 text-white",children:e.jsx(N,{className:"h-5 w-5"})})}),e.jsx(g,{href:route("cart.pay",l.username),className:"btn btn-primary bg-black hover:bg-gold",children:"checkout"})]})]})]})})]})}export{L as default};