import{S as t,i as e,s,e as a,c as l,b as n,f as r,h as o,j as c,t as i,d,k as h,C as u,E as f,a as m,g as p,B as v,n as g,u as $,y,F as E,p as k,l as w,m as D,o as b,q as x,x as I,v as j,G as C,z as L}from"./client.e7ea6059.js";import{h as V,a as M}from"./hljsDefineSvelte.d7fa5feb.js";import{D as T,c as H,m as q}from"./cleanTitle.dcd2ad4d.js";const{document:S}=C;function P(t,e,s){const a=t.slice();return a[11]=e[s],a}function R(t,e,s){const a=t.slice();return a[11]=e[s],a}function z(t){let e,s=t[5](t[2].dek)+"";return{c(){e=a("div"),this.h()},l(t){e=l(t,"DIV",{class:!0}),n(e).forEach(r),this.h()},h(){o(e,"class","dek svelte-m4suor")},m(t,a){c(t,e,a),e.innerHTML=s},p(t,a){4&a&&s!==(s=t[5](t[2].dek)+"")&&(e.innerHTML=s)},d(t){t&&r(e)}}}function A(t){let e,s,m,p,v,g=t[11].title+"";function $(...e){return t[8](t[11],...e)}return{c(){e=a("li"),s=i(g),this.h()},l(t){e=l(t,"LI",{class:!0});var a=n(e);s=d(a,g),a.forEach(r),this.h()},h(){o(e,"class",m="tab "+(t[0]===H(t[11].title)?"active":"")+" svelte-m4suor")},m(t,a){c(t,e,a),h(e,s),p||(v=u(e,"click",$),p=!0)},p(a,l){t=a,8&l&&g!==(g=t[11].title+"")&&f(s,g),9&l&&m!==(m="tab "+(t[0]===H(t[11].title)?"active":"")+" svelte-m4suor")&&o(e,"class",m)},d(t){t&&r(e),p=!1,v()}}}function B(t){let e,s,i,d=t[6](t[11].contents,t[11].title)+"";return{c(){e=a("div"),s=a("pre"),i=m(),this.h()},l(t){e=l(t,"DIV",{class:!0,style:!0});var a=n(e);s=l(a,"PRE",{class:!0}),n(s).forEach(r),i=p(a),a.forEach(r),this.h()},h(){o(s,"class","svelte-m4suor"),o(e,"class","contents"),v(e,"display",t[0]===H(t[11].title)?"block":"none")},m(t,a){c(t,e,a),h(e,s),s.innerHTML=d,h(e,i)},p(t,a){8&a&&d!==(d=t[6](t[11].contents,t[11].title)+"")&&(s.innerHTML=d),9&a&&v(e,"display",t[0]===H(t[11].title)?"block":"none")},d(t){t&&r(e)}}}function F(t){let e,s,v,j,C,V,M,H,q,F,G,K,N,U,_,J,O,Q,W,X,Y,Z,tt,et,st,at,lt,nt=t[4].title+"";S.title=e=t[4].title;var rt=t[4].component;rt&&(K=new rt({})),_=new T({props:{data:t[2],slug:t[1]}});let ot=t[2].dek&&z(t),ct=t[3],it=[];for(let e=0;e<ct.length;e+=1)it[e]=A(R(t,ct,e));let dt=t[3],ht=[];for(let e=0;e<dt.length;e+=1)ht[e]=B(P(t,dt,e));return{c(){s=a("link"),v=m(),j=a("div"),C=a("h1"),V=i(nt),M=a("a"),H=i("Edit"),F=m(),G=a("div"),K&&g(K.$$.fragment),N=m(),U=a("div"),g(_.$$.fragment),J=m(),ot&&ot.c(),O=m(),Q=a("div"),W=a("ul");for(let t=0;t<it.length;t+=1)it[t].c();X=m(),Y=a("div"),Z=a("div"),tt=m();for(let t=0;t<ht.length;t+=1)ht[t].c();this.h()},l(t){const e=$('[data-svelte="svelte-dklk17"]',S.head);s=l(e,"LINK",{rel:!0,href:!0}),e.forEach(r),v=p(t),j=l(t,"DIV",{class:!0});var a=n(j);C=l(a,"H1",{});var o=n(C);V=d(o,nt),M=l(o,"A",{class:!0,href:!0,target:!0,rel:!0});var c=n(M);H=d(c,"Edit"),c.forEach(r),o.forEach(r),F=p(a),G=l(a,"DIV",{class:!0});var i=n(G);K&&y(K.$$.fragment,i),i.forEach(r),N=p(a),U=l(a,"DIV",{class:!0});var h=n(U);y(_.$$.fragment,h),h.forEach(r),J=p(a),ot&&ot.l(a),O=p(a),Q=l(a,"DIV",{id:!0,class:!0});var u=n(Q);W=l(u,"UL",{id:!0,class:!0});var f=n(W);for(let t=0;t<it.length;t+=1)it[t].l(f);f.forEach(r),X=p(u),Y=l(u,"DIV",{id:!0,class:!0});var m=n(Y);Z=l(m,"DIV",{class:!0}),n(Z).forEach(r),tt=p(m);for(let t=0;t<ht.length;t+=1)ht[t].l(m);m.forEach(r),u.forEach(r),a.forEach(r),this.h()},h(){o(s,"rel","stylesheet"),o(s,"href","hljs.css"),o(M,"class","edit-repl svelte-m4suor"),o(M,"href",q="https://svelte.dev/repl/"+t[4].replPath),o(M,"target","_blank"),o(M,"rel","nofollow"),o(G,"class","chart-hero svelte-m4suor"),o(U,"class","download svelte-m4suor"),o(W,"id","page-nav"),o(W,"class","svelte-m4suor"),o(Z,"class","copy svelte-m4suor"),o(Y,"id","contents-container"),o(Y,"class","svelte-m4suor"),o(Q,"id","pages"),o(Q,"class",et=E(t[2].dek?"has-dek":"")+" svelte-m4suor"),o(j,"class","main svelte-m4suor")},m(e,a){h(S.head,s),c(e,v,a),c(e,j,a),h(j,C),h(C,V),h(C,M),h(M,H),h(j,F),h(j,G),K&&k(K,G,null),h(j,N),h(j,U),k(_,U,null),h(j,J),ot&&ot.m(j,null),h(j,O),h(j,Q),h(Q,W);for(let t=0;t<it.length;t+=1)it[t].m(W,null);h(Q,X),h(Q,Y),h(Y,Z),h(Y,tt);for(let t=0;t<ht.length;t+=1)ht[t].m(Y,null);st=!0,at||(lt=u(Z,"click",t[7]),at=!0)},p(t,[s]){if((!st||16&s)&&e!==(e=t[4].title)&&(S.title=e),(!st||16&s)&&nt!==(nt=t[4].title+"")&&f(V,nt),(!st||16&s&&q!==(q="https://svelte.dev/repl/"+t[4].replPath))&&o(M,"href",q),rt!==(rt=t[4].component)){if(K){L();const t=K;w(t.$$.fragment,1,0,()=>{x(t,1)}),D()}rt?(K=new rt({}),g(K.$$.fragment),b(K.$$.fragment,1),k(K,G,null)):K=null}const a={};if(4&s&&(a.data=t[2]),2&s&&(a.slug=t[1]),_.$set(a),t[2].dek?ot?ot.p(t,s):(ot=z(t),ot.c(),ot.m(j,O)):ot&&(ot.d(1),ot=null),9&s){let e;for(ct=t[3],e=0;e<ct.length;e+=1){const a=R(t,ct,e);it[e]?it[e].p(a,s):(it[e]=A(a),it[e].c(),it[e].m(W,null))}for(;e<it.length;e+=1)it[e].d(1);it.length=ct.length}if(73&s){let e;for(dt=t[3],e=0;e<dt.length;e+=1){const a=P(t,dt,e);ht[e]?ht[e].p(a,s):(ht[e]=B(a),ht[e].c(),ht[e].m(Y,null))}for(;e<ht.length;e+=1)ht[e].d(1);ht.length=dt.length}(!st||4&s&&et!==(et=E(t[2].dek?"has-dek":"")+" svelte-m4suor"))&&o(Q,"class",et)},i(t){st||(K&&b(K.$$.fragment,t),b(_.$$.fragment,t),st=!0)},o(t){K&&w(K.$$.fragment,t),w(_.$$.fragment,t),st=!1},d(t){r(s),t&&r(v),t&&r(j),K&&x(K),x(_),ot&&ot.d(),I(it,t),I(ht,t),at=!1,lt()}}}async function G({params:t,query:e}){const s=await this.fetch(`example/${t.slug}.json`),a=await s.json();if(200===s.status)return{slug:t.slug,data:a,active:"index"};this.error(s.status,a.message)}function K(t,e,s){V.registerLanguage("svelte",M),M(V);let{slug:a}=e,{data:l}=e,{active:n="index"}=e;const r=new q.Renderer;const o=new Map;j.forEach(t=>{o.set(t.slug,t)});let c,i;return t.$set=t=>{"slug"in t&&s(1,a=t.slug),"data"in t&&s(2,l=t.data),"active"in t&&s(0,n=t.active)},t.$$.update=()=>{4&t.$$.dirty&&s(3,c=[l.main].concat(l.components).concat(l.componentModules).concat(l.modules).concat(l.componentComponents).concat(l.jsons).concat(l.csvs)),2&t.$$.dirty&&s(4,i=o.get(a))},[n,a,l,c,i,function(t){return q(t,{renderer:r})},function(t,e){const s=e.split(".");let a=s[s.length-1];return"csv"===a&&(a="diff"),V.highlight(a,t).value},function(){const t=c.filter(t=>H(t.title)===n)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}},t=>s(0,n=H(t.title))]}export default class extends t{constructor(t){super(),e(this,t,K,F,s,{slug:1,data:2,active:0})}}export{G as preload};