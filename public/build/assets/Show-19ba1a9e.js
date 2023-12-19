import{r as t,j as e}from"./app-44938ad7.js";import{M as p}from"./Modal-2bcbb0cc.js";import{f as g,g as w}from"./index.esm-7e584474.js";import{G as y}from"./iconBase-09b3de97.js";import"./transition-38b1d576.js";function v(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z"}}]})(a)}function M({children:a,product:s,existingCartItems:h,setExistingCartItems:k,handleAddToCart:f}){var m,x;const[j,n]=t.useState(!1),[i,c]=t.useState([]),[r,b]=t.useState(s.selectedSize||""),[d,u]=t.useState(s.selectedColor||""),N=()=>{const l={id:s.id,name:s.name,price:s.selling_price-s.discount,selectedColor:d,selectedSize:r};c([...i,l]),localStorage.setItem("buyNowItems",JSON.stringify([...i,l])),console.log(i)};return t.useEffect(()=>{const l=JSON.parse(localStorage.getItem("buyNowItems"))||[];c(l)},[]),e.jsxs("div",{children:[e.jsx("button",{className:"",onClick:()=>n(!0),children:a}),e.jsx(p,{show:j,onClose:()=>n(!1),children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between p-3 border-b",children:[e.jsx("h3",{className:"font-bold text-lg",children:s.name}),e.jsx("button",{onClick:()=>n(!1),children:"X"})]}),e.jsxs("div",{className:"grid md:flex font-sans py-5 px-3",children:[e.jsx("div",{className:"flex p-4 space-x-4 w-full lg:w-48 bg-white overflow-x-auto scroll",children:s.image.map(l=>e.jsx("div",{className:"bg-white h-56 w-48 flex-none relative",children:e.jsx("img",{src:l.url,alt:s.name,className:"absolute inset-0 w-full h-full object-cover",loading:"lazy"})},l.id))}),e.jsxs("form",{className:"flex-auto p-6",children:[e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("h1",{className:"flex-auto text-lg font-semibold text-slate-900",children:s.name}),e.jsx("div",{className:"text-lg font-semibold text-slate-500",children:e.jsxs("p",{className:"",children:[e.jsxs("span",{className:"line-through",children:["₦",s.selling_price]}),e.jsxs("span",{className:"pl-3   ",children:["₦",s.selling_price-s.discount]})]})}),e.jsxs("div",{className:"w-full flex-none text-sm font-medium text-slate-700 mt-2",children:["In stock: ",s.quantity]})]}),e.jsxs("div",{className:"grid justify-end w-full gap-2 items-baseline mr-9 mb-6 border-slate-200",children:[e.jsx("div",{className:"space-x-2 flex justify-end text-sm",children:(m=s.size)==null?void 0:m.map((l,o)=>e.jsxs("label",{children:[e.jsx("input",{className:"sr-only peer",name:s.name+"size",type:"checkbox",value:l.size,checked:r===l.size,onChange:()=>b(l.size)}),e.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:l.size})]},o))}),e.jsx("div",{className:"space-x-2 flex justify-end text-sm",children:(x=s.color)==null?void 0:x.map((l,o)=>e.jsxs("label",{children:[e.jsx("input",{className:"sr-only peer",name:s.name+"color",type:"checkbox",value:l.color,checked:d===l.color,onChange:()=>u(l.color)}),e.jsx("div",{className:"h-9 w-9 rounded-full peer-checked:border-2 peer-checked:border-green-500",style:{backgroundColor:l.color}})]},o))})]}),e.jsxs("div",{className:"flex space-x-4 mb-6 text-sm font-medium",children:[e.jsxs("div",{className:"flex-auto flex space-x-4",children:[e.jsx("button",{className:"h-10 px-6 font-semibold rounded-md bg-black text-white",type:"button",onClick:N,children:"Buy now"}),e.jsx("button",{className:"h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900",type:"button",onClick:()=>f(s),children:h.some(l=>l.id===s.id)?e.jsx(g,{className:"h-6 w-6 text-red-700"}):e.jsx(w,{className:"h-6 w-6 text-blue-700"})})]}),e.jsx("button",{className:"flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200",type:"button","aria-label":"Like",children:e.jsx(v,{})})]}),e.jsx("p",{className:"text-sm text-slate-700",children:s.description.slice(0,25)})]})]})]})})]})}export{M as default};
