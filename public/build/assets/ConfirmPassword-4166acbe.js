import{W as d,r as p,j as s,a as l}from"./app-44938ad7.js";import{G as c}from"./GuestLayout-7e14f271.js";import{T as u,I as f}from"./TextInput-b4cf8005.js";import{I as x}from"./InputLabel-92f6a2b7.js";import{P as w}from"./PrimaryButton-03c7b28f.js";import"./ApplicationLogo-b7797631.js";import"./iconBase-09b3de97.js";function y(){const{data:a,setData:e,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{y as default};
