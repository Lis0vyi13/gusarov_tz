import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as h}from"./InputGroup-DDRgYhgQ.js";import{H as m}from"./Help-CXhOjV-_.js";import{S as z}from"./Search-e_gcBt7Z.js";import{I as J}from"./Info-CDCCs6cu.js";import"./index-DJO9vBfz.js";import"./InputAnnotation-BhoMdcBA.js";import"./clsx-B-dksMZM.js";const ne={component:h,tags:["autodocs"],argTypes:{infoIcon:{control:"boolean"},iconBefore:{control:"boolean"},iconAfter:{control:"boolean"},width:{control:"text"}},render:r=>e.jsx(h,{...r,infoIcon:r.infoIcon?e.jsx(J,{}):void 0,iconBefore:r.iconBefore?e.jsx(z,{}):void 0,iconAfter:r.iconAfter?e.jsx(m,{}):void 0})},o={args:{label:"Username",inputId:"username",placeholder:"Enter your username"}},a={args:{label:"Email",inputId:"email",placeholder:"Enter your email",helperText:"We'll never share your email with anyone else."}},n={args:{label:"Password",inputId:"password",placeholder:"Enter your password",errorMessage:"Password must be at least 8 characters long."}},s={args:{label:"First Name",inputId:"firstName",placeholder:"Enter your first name",required:!0}},t={args:{label:"Middle Name",inputId:"middleName",placeholder:"Enter your middle name (optional)",optional:!0}},i={args:{label:"Search",inputId:"search",placeholder:"Search...",iconBefore:e.jsx(z,{}),iconAfter:e.jsx(m,{})}},l={args:{label:"Phone Number",inputId:"phone",placeholder:"Enter your phone number",infoIcon:e.jsx(m,{}),infoIconVisibility:"always",tooltipText:"Your phone number"}},c={args:{label:"Address",inputId:"address",placeholder:"Enter your address",infoIcon:e.jsx(m,{}),infoIconVisibility:"hover",tooltipText:"Your phone number."}},d={args:{label:"Country",inputId:"country",placeholder:"Enter your country",disabled:!0}},p={args:{label:"Quiet Mode",inputId:"quietMode",placeholder:"Enter your input",quiet:!0}},u={args:{label:"Number of tokens",inputId:"tokens",placeholder:"256",position:"side"}};var b,I,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Username",
    inputId: "username",
    placeholder: "Enter your username"
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var g,y,E;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Email",
    inputId: "email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else."
  }
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var x,S,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Password",
    inputId: "password",
    placeholder: "Enter your password",
    errorMessage: "Password must be at least 8 characters long."
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,W,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "First Name",
    inputId: "firstName",
    placeholder: "Enter your first name",
    required: true
  }
}`,...(j=(W=s.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var M,v,H;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Middle Name",
    inputId: "middleName",
    placeholder: "Enter your middle name (optional)",
    optional: true
  }
}`,...(H=(v=t.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var T,q,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Search",
    inputId: "search",
    placeholder: "Search...",
    iconBefore: <Search />,
    iconAfter: <Help />
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var P,A,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    inputId: "phone",
    placeholder: "Enter your phone number",
    infoIcon: <Help />,
    infoIconVisibility: "always",
    tooltipText: "Your phone number"
  }
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var B,O,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Address",
    inputId: "address",
    placeholder: "Enter your address",
    infoIcon: <Help />,
    infoIconVisibility: "hover",
    tooltipText: "Your phone number."
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var D,Q,Y;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Country",
    inputId: "country",
    placeholder: "Enter your country",
    disabled: true
  }
}`,...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var R,C,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Quiet Mode",
    inputId: "quietMode",
    placeholder: "Enter your input",
    quiet: true
  }
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var U,_,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Number of tokens",
    inputId: "tokens",
    placeholder: "256",
    position: "side"
  }
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const se=["Default","WithHelperText","WithErrorMessage","RequiredField","OptionalField","WithIcons","WithInfoIcon","WithInfoIconOnHover","DisabledField","QuietVariant","SideLabelPosition"];export{o as Default,d as DisabledField,t as OptionalField,p as QuietVariant,s as RequiredField,u as SideLabelPosition,n as WithErrorMessage,a as WithHelperText,i as WithIcons,l as WithInfoIcon,c as WithInfoIconOnHover,se as __namedExportsOrder,ne as default};
