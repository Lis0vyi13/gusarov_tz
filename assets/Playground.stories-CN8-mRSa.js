import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{I as l}from"./InputGroup-DDRgYhgQ.js";import{S as a}from"./Search-e_gcBt7Z.js";import{H as c}from"./Help-CXhOjV-_.js";import{I as p}from"./Info-CDCCs6cu.js";import"./index-DJO9vBfz.js";import"./InputAnnotation-BhoMdcBA.js";import"./clsx-B-dksMZM.js";const n=e=>o.jsx("div",{...e,style:{display:"flex",justifyContent:"center",padding:"2rem 0"}}),d=e=>o.jsxs("div",{children:[o.jsx(n,{children:o.jsx(e,{})}),o.jsx(n,{className:"dark-mode",children:o.jsx(e,{})})]}),g={component:l,tags:["autodocs"],decorators:[d],argTypes:{label:{control:"text"},inputId:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorMessage:{control:"text"},iconBefore:{control:"boolean"},iconAfter:{control:"boolean"},optional:{control:"boolean"},infoIcon:{control:"boolean"},infoIconVisibility:{control:"radio",options:["always","hover"]},tooltipText:{control:"text"},position:{control:"radio",options:["top","side"]},fieldSize:{control:"radio",options:[24,32,36,40,44,48]},quiet:{control:"boolean"},variants:{control:"radio",options:["fill","outline"]},alignment:{control:"radio",options:["left","right"]},shortkey:{control:"boolean"},width:{control:"text"}}},t={args:{label:"Email",inputId:"Email",iconBefore:!0,iconAfter:!0,shortkey:!0,infoIcon:!0,helperText:"This is a hint text to help user.",tooltipText:"This is a hint text to help user.",required:!1,disabled:!1,fieldSize:36,position:"top"},render:e=>o.jsx(l,{...e,iconBefore:e.iconBefore?o.jsx(a,{}):void 0,iconAfter:e.iconAfter?o.jsx(c,{}):void 0,infoIcon:e.infoIcon?o.jsx(p,{}):void 0})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
  render: args => <InputGroup {...args} iconBefore={args.iconBefore ? <Search /> : undefined} iconAfter={args.iconAfter ? <Help /> : undefined} infoIcon={args.infoIcon ? <Info /> : undefined} />
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,g as default};
