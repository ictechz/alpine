import{M as m,I as p,d as c,a9 as i,r as u,N as n,k as l}from"./entry.240b334d.js";import{u as d}from"./asyncData.ba8b5295.js";import f from"./Ellipsis.a3f62eec.js";import _ from"./ComponentPlaygroundData.2dd67085.js";import"./TabsHeader.ea83c7dd.js";import"./ComponentPlaygroundProps.be5b6ee2.js";import"./ProseH4.676e0f53.js";import"./ProseCodeInline.1be2c82b.js";import"./Badge.f75f57a5.js";import"./MDCSlot.821c1489.js";import"./slot.dbba7e43.js";import"./ProseP.24685b8b.js";import"./index.2fde81c9.js";import"./ComponentPlaygroundSlots.vue.79f02630.js";import"./ComponentPlaygroundTokens.vue.5019b178.js";async function y(o){const t=m(o);{const{data:e}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),e=u({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=l(g,[["__scopeId","data-v-c6ef11bc"]]);export{V as default};
