import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{I as l}from"./InputGroup-CN423Mso.js";import{S as c}from"./Search-B_QKcPue.js";import{H as d}from"./Help-CXhOjV-_.js";import{I as p}from"./Info-DU23la9k.js";import"./index-DJO9vBfz.js";import"./InputAnnotation-BuiScnO9.js";import"./clsx-B-dksMZM.js";const r=e=>o.jsx("div",{...e,style:{display:"flex",justifyContent:"center",padding:"2rem 0"}}),f=e=>o.jsxs("div",{children:[o.jsx(r,{children:o.jsx(e,{})}),o.jsx(r,{className:"bg-black",children:o.jsx(e,{darkMode:!0})})]}),T={component:l,tags:["autodocs"],decorators:[f],argTypes:{label:{control:"text"},inputId:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},iconBefore:{control:"boolean"},iconAfter:{control:"boolean"},optional:{control:"boolean"},infoIcon:{control:"boolean"},infoIconVisibility:{control:"radio",options:["always","hover"]},tooltipText:{control:"text"},position:{control:"radio",options:["top","side"]},fieldSize:{control:"radio",options:[24,32,36,40,44,48]},quiet:{control:"boolean"},variants:{control:"radio",options:["fill","outline"]},alignment:{control:"radio",options:["left","right"]},shortkey:{control:"boolean"},width:{control:"text"}}},t={args:{label:"Email",inputId:"Email",iconBefore:!0,iconAfter:!0,shortkey:!0,infoIcon:!0,helperText:"This is a hint text to help user.",tooltipText:"This is a hint text to help user.",required:!1,disabled:!1,fieldSize:36,position:"top"},render:(e,{darkMode:a})=>o.jsx(l,{...e,darkMode:a,iconBefore:e.iconBefore?o.jsx(c,{}):void 0,iconAfter:e.iconAfter?o.jsx(d,{}):void 0,infoIcon:e.infoIcon?o.jsx(p,{}):void 0})};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Email",
    inputId: "Email",
    iconBefore: true,
    iconAfter: true,
    shortkey: true,
    infoIcon: true,
    helperText: "This is a hint text to help user.",
    tooltipText: "This is a hint text to help user.",
    required: false,
    disabled: false,
    fieldSize: 36,
    position: "top"
  },
  render: (args, {
    darkMode
  }) => <InputGroup {...args} darkMode={darkMode} iconBefore={args.iconBefore ? <Search /> : undefined} iconAfter={args.iconAfter ? <Help /> : undefined} infoIcon={args.infoIcon ? <Info /> : undefined} />
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,T as default};
