import{S as s,i as t,s as a,e,t as n,c as o,b as c,d as i,f as p,h as l,B as r,j as d,k as h,C as u,D as m,E as f}from"./client.6d000977.js";import{d as g,t as w}from"./downloadBlob.c34729b5.js";function j(s){let t,a,f,g;return{c(){t=e("button"),a=n("Download      "),this.h()},l(s){t=o(s,"BUTTON",{disabled:!0,title:!0,class:!0,style:!0});var e=c(t);a=i(e,"Download      "),e.forEach(p),this.h()},h(){t.disabled=s[0],l(t,"title","download zip file"),l(t,"class","icon svelte-1gef78k"),r(t,"background-image","url(/icons/download.svg)")},m(e,n){d(e,t,n),h(t,a),f||(g=u(t,"click",s[1]),f=!0)},p(s,[a]){1&a&&(t.disabled=s[0])},i:m,o:m,d(s){s&&p(t),f=!1,g()}}}function b(s,t,a){let{data:e}=t,{slug:n}=t,{ssr:o=!1}=t,c=!1;const i=[e.main,...e.components,...e.componentComponents].reduce((s,t)=>s.concat(function(s=""){return(s.match(/from\s'(.+)'?/gm)||[]).map(s=>s.replace(/(from |'|"|;)/g,"")).filter(s=>!s.startsWith("."))}(t.contents)),[]).reduce((s,t)=>(s.includes(t)||s.push(t),s),[]);return s.$set=s=>{"data"in s&&a(2,e=s.data),"slug"in s&&a(3,n=s.slug),"ssr"in s&&a(4,o=s.ssr)},[c,async function(){a(0,c=!0);const s=(new Date).getTime(),t=await(await window.fetch("/svelte-app.json?"+s)).json(),p=await(await window.fetch("/deps.json?"+s)).json();if(i.length>0){const s=t.findIndex(({path:s})=>"package.json"===s),a=JSON.parse(t[s].data),e={},n={};i.forEach(s=>{if("layercake"===s)n[s]=p[s];else{if("svelte"===s)return;e[s]=p[s]}p[s]||window.alert(`Missing dependency, add "${s}" to layercake.graphic's package.json`)}),Object.assign(a.dependencies,e),Object.assign(a.devDependencies,n),t[s].data=JSON.stringify(a,null,"  ")}t.push(...e.components.map(s=>({path:"src/"+s.title.replace("./",""),data:s.contents}))),t.push(...e.modules.map(s=>({path:"src/"+s.title.replace("./",""),data:s.contents}))),t.push(...e.componentModules.map(s=>({path:"src/"+s.title.replace("../",""),data:s.contents}))),t.push(...e.componentComponents.map(s=>({path:"src/"+s.title,data:s.contents}))),t.push(...e.csvs.map(s=>({path:"src/"+s.title.replace("../",""),data:s.contents}))),t.push(...e.jsons.map(s=>({path:"src/"+s.title.replace("../",""),data:s.contents}))),t.push({path:"src/App.svelte",data:e.main.contents});const l=f(t.filter(Boolean),"path",!1);g(w(l),`layercake-${o?"ssr-":""}${n}.zip`),a(0,c=!1)},e,n,o]}class k extends s{constructor(s){super(),t(this,s,b,j,a,{data:2,slug:3,ssr:4})}}function v(s){const t=s.split("/"),a=t[t.length-1].split(".");a.pop();return a.join(".").toLowerCase()}export{k as D,v as c};
