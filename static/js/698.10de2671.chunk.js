"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{2793:function(e,r,s){s.d(r,{dm:function(){return t},gY:function(){return i},op:function(){return n}});var a=s(5282),i=(s(7427),a.object({name:a.string().required("Name is required"),email:a.string().required("Email is required").email("Please enter a valid email"),password:a.string().required("Password is required").min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol"),confirm:a.string().required("Password confirm is required").oneOf([a.ref("password"),null],'Must match "password" field value')})),n=a.object().shape({name:a.string().required().min(5).max(24).matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Please enter correct name"),number:a.string().phone("UA").required("A phone number is required")}),t=a.object({email:a.string().required("Email is required").email("Please enter a valid email"),password:a.string().required("Password is required").min(8,"Password must be 8 characters long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter").matches(/[^\w]/,"Password requires a symbol")})},698:function(e,r,s){s.r(r),s.d(r,{default:function(){return h}});var a,i=s(9434),n=s(5705),t=s(9273),u=s(2793),o=s(168),d=s(4934).Z.p(a||(a=(0,o.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),m=s(184),l={email:"",password:""},c=function(e){var r=e.name;return(0,m.jsx)(n.Bc,{name:r,render:function(e){return(0,m.jsx)(d,{children:e})}})},w=function(){var e=(0,i.I0)();return(0,m.jsx)(n.J9,{initialValues:l,validationSchema:u.dm,onSubmit:function(r){e((0,t.Ib)({email:r.email,password:r.password}))},children:(0,m.jsxs)(n.l0,{children:[(0,m.jsxs)("label",{children:["Email",(0,m.jsx)(n.gN,{type:"email",name:"email"}),(0,m.jsx)(c,{name:"email"})]}),(0,m.jsxs)("label",{children:["Password",(0,m.jsx)(n.gN,{type:"password",name:"password"}),(0,m.jsx)(c,{name:"password"})]}),(0,m.jsx)("button",{type:"submit",children:"submit"})]})})},h=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Login"}),(0,m.jsx)(w,{})]})}}}]);
//# sourceMappingURL=698.10de2671.chunk.js.map