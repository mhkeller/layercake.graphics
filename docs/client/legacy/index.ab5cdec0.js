import{T as t,_ as e,C as n,D as a,E as s,b as i,s as r,F as o,S as c,e as u,H as l,y as f,d as h,f as d,I as m,z as v,g as p,h as g,ae as w,k as E,x as y,J as k,M as G,aa as $,N as L,O as C,G as S,t as b,p as x,P as T,L as A,af as j,B as I,a7 as B,a9 as M}from"./index.a2184793.js";import{_ as D}from"./asyncToGenerator.5229e80b.js";import{G as N}from"./GuideContents.8a378d62.js";function R(t,e,n){var a=t.slice();return a[10]=e[n],a}function _(t){var e,n,a,s,i,r,o,c,G,$,L,C,S=t[10].metadata.title+"",b=t[10].html+"";return{c:function(){e=u("section"),n=u("h2"),a=l(S),s=f(),i=u("small"),r=u("a"),o=l("edit this section"),G=f(),L=f(),this.h()},l:function(t){e=h(t,"SECTION",{id:!0,class:!0});var c=d(e);n=h(c,"H2",{class:!0});var u=d(n);a=m(u,S),s=v(u),i=h(u,"SMALL",{class:!0});var l=d(i);r=h(l,"A",{href:!0,target:!0,rel:!0});var f=d(r);o=m(f,"edit this section"),f.forEach(p),l.forEach(p),u.forEach(p),G=v(c),L=v(c),c.forEach(p),this.h()},h:function(){g(r,"href",c="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file),g(r,"target","_blank"),g(r,"rel","nofollow"),g(i,"class","svelte-1097mf0"),g(n,"class","svelte-1097mf0"),$=new w(b,L),g(e,"id",C=t[10].slug),g(e,"class","svelte-1097mf0")},m:function(t,c){E(t,e,c),y(e,n),y(n,a),y(n,s),y(n,i),y(i,r),y(r,o),y(e,G),$.m(e),y(e,L)},p:function(t,n){1&n&&S!==(S=t[10].metadata.title+"")&&k(a,S),1&n&&c!==(c="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file)&&g(r,"href",c),1&n&&b!==(b=t[10].html+"")&&$.p(b),1&n&&C!==(C=t[10].slug)&&g(e,"id",C)},d:function(t){t&&p(e)}}}function q(t){var e,n,a,s,i,r,o,c,l;function m(e){t[8].call(null,e)}var w={sections:t[0]};void 0!==t[2]&&(w.activeGuideSection=t[2]);var k=new N({props:w});I.push((function(){return B(k,"activeGuideSection",m)}));for(var j=t[0],D=[],q=0;q<j.length;q+=1)D[q]=_(R(t,j,q));return{c:function(){e=u("meta"),n=u("meta"),a=u("link"),s=f(),i=u("sidebar"),G(k.$$.fragment),o=f(),c=u("div");for(var t=0;t<D.length;t+=1)D[t].c();this.h()},l:function(t){var r=$('[data-svelte="svelte-1u1w7sg"]',document.head);e=h(r,"META",{name:!0,content:!0}),n=h(r,"META",{name:!0,content:!0}),a=h(r,"LINK",{rel:!0,href:!0}),r.forEach(p),s=v(t),i=h(t,"SIDEBAR",{class:!0});var u=d(i);L(k.$$.fragment,u),u.forEach(p),o=v(t),c=h(t,"DIV",{id:!0,class:!0});for(var l=d(c),f=0;f<D.length;f+=1)D[f].l(l);l.forEach(p),this.h()},h:function(){document.title="LayerCake - Guide",g(e,"name","og:title"),g(e,"content","Layer Cake — Guide"),g(n,"name","twitter:title"),g(n,"content","Layer Cake — Guide"),g(a,"rel","stylesheet"),g(a,"href","hljs.css"),g(i,"class","svelte-1097mf0"),g(c,"id","container"),g(c,"class","content svelte-1097mf0")},m:function(r,u){y(document.head,e),y(document.head,n),y(document.head,a),E(r,s,u),E(r,i,u),C(k,i,null),E(r,o,u),E(r,c,u);for(var f=0;f<D.length;f+=1)D[f].m(c,null);t[9](c),l=!0},p:function(t,e){var n=S(e,1)[0],a={};if(1&n&&(a.sections=t[0]),!r&&4&n&&(r=!0,a.activeGuideSection=t[2],M((function(){return r=!1}))),k.$set(a),1&n){var s;for(j=t[0],s=0;s<j.length;s+=1){var i=R(t,j,s);D[s]?D[s].p(i,n):(D[s]=_(i),D[s].c(),D[s].m(c,null))}for(;s<D.length;s+=1)D[s].d(1);D.length=j.length}},i:function(t){l||(b(k.$$.fragment,t),l=!0)},o:function(t){x(k.$$.fragment,t),l=!1},d:function(r){p(e),p(n),p(a),r&&p(s),r&&p(i),T(k),r&&p(o),r&&p(c),A(D,r),t[9](null)}}}function z(t){return H.apply(this,arguments)}function H(){return(H=D(t.mark((function e(n){return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("api/guide").then((function(t){return t.json()})).then((function(t){return{sections:t}})));case 2:case"end":return t.stop()}}),e,this)})))).apply(this,arguments)}function O(t,e,n){var a,s,i=e.sections,r=[],o="introduction",c=[];function u(){if(a){var t=a.getBoundingClientRect().top;r=[].map.call(c,(function(e){return e.getBoundingClientRect().top-t}))}}function l(){for(var t=-window.scrollY,e=c.length;e--;)if(r[e]+t<100){var a=c[e].id;return void(a!==o&&(n(2,s=a),o=a))}}return j((function(){if("undefined"!=typeof window){c=a.querySelectorAll("[id]"),o=window.location.hash.slice(1),n(2,s=o),u(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",u,!0);setTimeout(u,1e3),setTimeout(u,5e3)}})),t.$set=function(t){"sections"in t&&n(0,i=t.sections)},[i,a,s,r,o,c,u,l,function(t){n(2,s=t)},function(t){I[t?"unshift":"push"]((function(){n(1,a=t)}))}]}var F=function(t){function u(t){var e;return n(this,u),e=a(this,s(u).call(this)),i(o(e),t,O,q,r,{sections:0}),e}return e(u,c),u}();export default F;export{z as preload};