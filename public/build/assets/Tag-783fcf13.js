import{r as i,j as e}from"./app-44938ad7.js";import{b as d}from"./index.esm-7e584474.js";import"./iconBase-09b3de97.js";function g({tag:r,setTag:l}){const[t,n]=i.useState(""),o=s=>{const a=r.filter((p,c)=>c!==s);l("tag",a)};return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2",children:[r.length>0&&e.jsx(e.Fragment,{children:r.map((s,a)=>e.jsx("div",{onClick:()=>o(a),className:"cursor-pointer border-2 p-2 rounded-xl",children:e.jsx("span",{className:"h-9 rounded-xl",children:s.tag})},a))}),e.jsxs("div",{className:"flex items-center gap-3 p-3",children:[e.jsx("input",{value:t,onChange:s=>n(s.target.value),className:"input bg-slate-200 text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"fashion"}),t&&e.jsx("span",{onClick:()=>l("tag",[...r,{tag:t}]),className:"bg-slate-200 h-full p-3 text-slate-800 cursor-pointer rounded-xl",children:e.jsx(d,{className:"h-6 w-6"})})]})]})}export{g as default};
