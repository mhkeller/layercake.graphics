import{M as t,N as e,c as n,d as a,e as r,f as s,i as c,s as i,h as o,S as u,bn as l,j as f,t as h,k as d,l as v,m,n as p,p as g,o as y,q as w,T as k,r as E,u as $,P as S,x as b,C as L,G as R,z as x,a as A,y as C,v as G,A as T,F as D,U as j,V as I,aD as M,aE as q}from"./client.bcd83b1f.js";function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}function N(t,e,n){var a=t.slice();return a[10]=e[n],a}function z(t){var e,n,a,r,s,c,i,o,u,l,b,L,R=t[10].metadata.title+"",x=t[10].html+"";return{c:function(){e=f("section"),n=f("h2"),a=h(R),r=d(),s=f("small"),c=f("a"),i=h("edit this section"),u=d(),b=d(),this.h()},l:function(t){e=v(t,"SECTION",{id:!0,class:!0});var o=m(e);n=v(o,"H2",{class:!0});var l=m(n);a=p(l,R),r=g(l),s=v(l,"SMALL",{class:!0});var f=m(s);c=v(f,"A",{href:!0,target:!0,rel:!0});var h=m(c);i=p(h,"edit this section"),h.forEach(y),f.forEach(y),l.forEach(y),u=g(o),b=g(o),o.forEach(y),this.h()},h:function(){w(c,"href",o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file),w(c,"target","_blank"),w(c,"rel","nofollow"),w(s,"class","svelte-1hckucs"),w(n,"class","svelte-1hckucs"),l=new k(b),w(e,"id",L=t[10].slug),w(e,"class","svelte-1hckucs")},m:function(t,o){E(t,e,o),$(e,n),$(n,a),$(n,r),$(n,s),$(s,c),$(c,i),$(e,u),l.m(x,e),$(e,b)},p:function(t,n){1&n&&R!==(R=t[10].metadata.title+"")&&S(a,R),1&n&&o!==(o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file)&&w(c,"href",o),1&n&&x!==(x=t[10].html+"")&&l.p(x),1&n&&L!==(L=t[10].slug)&&w(e,"id",L)},d:function(t){t&&y(e)}}}function P(t){var e,n,a,r,s,c,i,o,u,h;function p(e){t[3].call(null,e)}var k={sections:t[0]};void 0!==t[2]&&(k.activeGuideSection=t[2]),c=new l({props:k}),I.push((function(){return M(c,"activeGuideSection",p)}));for(var S=t[0],j=[],B=0;B<S.length;B+=1)j[B]=z(N(t,S,B));return{c:function(){e=f("meta"),n=f("meta"),a=f("link"),r=d(),s=f("sidebar"),b(c.$$.fragment),o=d(),u=f("div");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l:function(t){var i=L('[data-svelte="svelte-1u1w7sg"]',document.head);e=v(i,"META",{name:!0,content:!0}),n=v(i,"META",{name:!0,content:!0}),a=v(i,"LINK",{rel:!0,href:!0}),i.forEach(y),r=g(t),s=v(t,"SIDEBAR",{class:!0});var l=m(s);R(c.$$.fragment,l),l.forEach(y),o=g(t),u=v(t,"DIV",{id:!0,class:!0});for(var f=m(u),h=0;h<j.length;h+=1)j[h].l(f);f.forEach(y),this.h()},h:function(){document.title="LayerCake - Guide",w(e,"name","og:title"),w(e,"content","Layer Cake — Guide"),w(n,"name","twitter:title"),w(n,"content","Layer Cake — Guide"),w(a,"rel","stylesheet"),w(a,"href","hljs.css"),w(s,"class","svelte-1hckucs"),w(u,"id","container"),w(u,"class","content svelte-1hckucs")},m:function(i,l){$(document.head,e),$(document.head,n),$(document.head,a),E(i,r,l),E(i,s,l),x(c,s,null),E(i,o,l),E(i,u,l);for(var f=0;f<j.length;f+=1)j[f].m(u,null);t[4](u),h=!0},p:function(t,e){var n=A(e,1)[0],a={};if(1&n&&(a.sections=t[0]),!i&&4&n&&(i=!0,a.activeGuideSection=t[2],q((function(){return i=!1}))),c.$set(a),1&n){var r;for(S=t[0],r=0;r<S.length;r+=1){var s=N(t,S,r);j[r]?j[r].p(s,n):(j[r]=z(s),j[r].c(),j[r].m(u,null))}for(;r<j.length;r+=1)j[r].d(1);j.length=S.length}},i:function(t){h||(C(c.$$.fragment,t),h=!0)},o:function(t){G(c.$$.fragment,t),h=!1},d:function(i){y(e),y(n),y(a),i&&y(r),i&&y(s),T(c),i&&y(o),i&&y(u),D(j,i),t[4](null)}}}function V(t){return F.apply(this,arguments)}function F(){return(F=t(e.mark((function t(n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("api/guide").then((function(t){return t.json()})).then((function(t){return{sections:t}})));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function H(t,e,n){var a,r,s=e.sections,c=[],i="introduction",o=[];function u(){if(a){var t=a.getBoundingClientRect().top;c=[].map.call(o,(function(e){return e.getBoundingClientRect().top-t}))}}function l(){for(var t=-window.scrollY,e=o.length;e--;)if(c[e]+t<100){var a=o[e].id;return void(a!==i&&(n(2,r=a),i=a))}}return j((function(){if("undefined"!=typeof window){o=a.querySelectorAll("[id]"),i=window.location.hash.slice(1),n(2,r=i),u(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",u,!0);setTimeout(u,1e3),setTimeout(u,5e3)}})),t.$set=function(t){"sections"in t&&n(0,s=t.sections)},[s,a,r,function(t){n(2,r=t)},function(t){I[t?"unshift":"push"]((function(){n(1,a=t)}))}]}var K=function(t){n(a,u);var e=B(a);function a(t){var n;return s(this,a),n=e.call(this),c(o(n),t,H,P,i,{sections:0}),n}return a}();export default K;export{V as preload};
