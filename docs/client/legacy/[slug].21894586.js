import{M as t,N as e,a as n,b as a,d as r,e as s,i as c,s as l,f as o,S as i,g as u,j as f,k as d,m as h,o as v,p as m,t as p,l as g,q as $,K as b,O as y,h as w,n as k,J as E,v as D,A as x,F as C,P as L,x as I,B as j,r as V,u as M,w as R,y as S,E as H,D as P,Q as T,G as q}from"./client.3a6119c7.js";import{h as A,a as B}from"./hljsDefineSvelte.5355d5c5.js";import{D as K,m as N}from"./DownloadBtn.a664c9e7.js";function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}var G=T.document;function J(t,e,n){var a=t.slice();return a[11]=e[n],a}function O(t,e,n){var a=t.slice();return a[11]=e[n],a}function Q(t){var e,n=t[5](t[2].dek)+"";return{c:function(){e=u("div"),this.h()},l:function(t){e=f(t,"DIV",{class:!0}),d(e).forEach(h),this.h()},h:function(){v(e,"class","dek svelte-1b77smd")},m:function(t,a){m(t,e,a),e.innerHTML=n},p:function(t,a){4&a&&n!==(n=t[5](t[2].dek)+"")&&(e.innerHTML=n)},d:function(t){t&&h(e)}}}function U(t){var e,n,a,r,s,c=t[11].title+"";function l(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t)[8].apply(e,[t[11]].concat(a))}return{c:function(){e=u("li"),n=p(c),this.h()},l:function(t){e=f(t,"LI",{class:!0});var a=d(e);n=g(a,c),a.forEach(h),this.h()},h:function(){v(e,"class",a="tab "+(t[0]===Y(t[11].title)?"active":"")+" svelte-1b77smd")},m:function(t,a){m(t,e,a),$(e,n),r||(s=b(e,"click",l),r=!0)},p:function(r,s){t=r,8&s&&c!==(c=t[11].title+"")&&y(n,c),9&s&&a!==(a="tab "+(t[0]===Y(t[11].title)?"active":"")+" svelte-1b77smd")&&v(e,"class",a)},d:function(t){t&&h(e),r=!1,s()}}}function _(t){var e,n,a,r=t[6](t[11].contents,t[11].title)+"";return{c:function(){e=u("div"),n=u("pre"),a=w(),this.h()},l:function(t){e=f(t,"DIV",{class:!0,style:!0});var r=d(e);n=f(r,"PRE",{class:!0}),d(n).forEach(h),a=k(r),r.forEach(h),this.h()},h:function(){v(n,"class","svelte-1b77smd"),v(e,"class","contents"),E(e,"display",t[0]===Y(t[11].title)?"block":"none")},m:function(t,s){m(t,e,s),$(e,n),n.innerHTML=r,$(e,a)},p:function(t,a){8&a&&r!==(r=t[6](t[11].contents,t[11].title)+"")&&(n.innerHTML=r),9&a&&E(e,"display",t[0]===Y(t[11].title)?"block":"none")},d:function(t){t&&h(e)}}}function z(t){var e,n,a,r,s,c,l,o,i,E,P,T,A,B,N,F,z,W,X,Y,Z,tt,et,nt,at,rt,st,ct,lt=t[4].title+"";G.title=e=t[4].title;var ot=t[4].component;ot&&(T=new ot({})),F=new K({props:{data:t[2],slug:t[1]}});for(var it=t[2].dek&&Q(t),ut=t[3],ft=[],dt=0;dt<ut.length;dt+=1)ft[dt]=U(O(t,ut,dt));for(var ht=t[3],vt=[],mt=0;mt<ht.length;mt+=1)vt[mt]=_(J(t,ht,mt));return{c:function(){n=u("link"),a=w(),r=u("div"),s=u("h1"),c=p(lt),l=u("a"),o=p("Edit"),E=w(),P=u("div"),T&&D(T.$$.fragment),B=w(),N=u("div"),D(F.$$.fragment),z=w(),it&&it.c(),W=w(),X=u("div"),Y=u("ul");for(var t=0;t<ft.length;t+=1)ft[t].c();Z=w(),tt=u("div"),et=u("div"),nt=w();for(var e=0;e<vt.length;e+=1)vt[e].c();this.h()},l:function(t){var e=x('[data-svelte="svelte-dklk17"]',G.head);n=f(e,"LINK",{rel:!0,href:!0}),e.forEach(h),a=k(t),r=f(t,"DIV",{class:!0,"data-label":!0});var i=d(r);s=f(i,"H1",{});var u=d(s);c=g(u,lt),l=f(u,"A",{class:!0,href:!0,target:!0,rel:!0});var v=d(l);o=g(v,"Edit"),v.forEach(h),u.forEach(h),E=k(i),P=f(i,"DIV",{class:!0,"data-slug":!0});var m=d(P);T&&C(T.$$.fragment,m),m.forEach(h),B=k(i),N=f(i,"DIV",{class:!0});var p=d(N);C(F.$$.fragment,p),p.forEach(h),z=k(i),it&&it.l(i),W=k(i),X=f(i,"DIV",{id:!0,class:!0});var $=d(X);Y=f($,"UL",{id:!0,class:!0});for(var b=d(Y),y=0;y<ft.length;y+=1)ft[y].l(b);b.forEach(h),Z=k($),tt=f($,"DIV",{id:!0,class:!0});var w=d(tt);et=f(w,"DIV",{class:!0}),d(et).forEach(h),nt=k(w);for(var D=0;D<vt.length;D+=1)vt[D].l(w);w.forEach(h),$.forEach(h),i.forEach(h),this.h()},h:function(){v(n,"rel","stylesheet"),v(n,"href","hljs.css"),v(l,"class","edit-repl svelte-1b77smd"),v(l,"href",i="https://svelte.dev/repl/"+t[4].replPath),v(l,"target","_blank"),v(l,"rel","nofollow"),v(P,"class","chart-hero svelte-1b77smd"),v(P,"data-slug",A=t[1].toLowerCase()),v(N,"class","download svelte-1b77smd"),v(Y,"id","page-nav"),v(Y,"class","svelte-1b77smd"),v(et,"class","copy svelte-1b77smd"),v(tt,"id","contents-container"),v(tt,"class","svelte-1b77smd"),v(X,"id","pages"),v(X,"class",at=L(t[2].dek?"has-dek":"")+" svelte-1b77smd"),v(r,"class","main svelte-1b77smd"),v(r,"data-label","Server-side")},m:function(e,i){$(G.head,n),m(e,a,i),m(e,r,i),$(r,s),$(s,c),$(s,l),$(l,o),$(r,E),$(r,P),T&&I(T,P,null),$(r,B),$(r,N),I(F,N,null),$(r,z),it&&it.m(r,null),$(r,W),$(r,X),$(X,Y);for(var u=0;u<ft.length;u+=1)ft[u].m(Y,null);$(X,Z),$(X,tt),$(tt,et),$(tt,nt);for(var f=0;f<vt.length;f+=1)vt[f].m(tt,null);rt=!0,st||(ct=b(et,"click",t[7]),st=!0)},p:function(t,n){var a=j(n,1)[0];if((!rt||16&a)&&e!==(e=t[4].title)&&(G.title=e),(!rt||16&a)&&lt!==(lt=t[4].title+"")&&y(c,lt),(!rt||16&a&&i!==(i="https://svelte.dev/repl/"+t[4].replPath))&&v(l,"href",i),ot!==(ot=t[4].component)){if(T){q();var s=T;V(s.$$.fragment,1,0,(function(){S(s,1)})),M()}ot?(T=new ot({}),D(T.$$.fragment),R(T.$$.fragment,1),I(T,P,null)):T=null}(!rt||2&a&&A!==(A=t[1].toLowerCase()))&&v(P,"data-slug",A);var o={};if(4&a&&(o.data=t[2]),2&a&&(o.slug=t[1]),F.$set(o),t[2].dek?it?it.p(t,a):((it=Q(t)).c(),it.m(r,W)):it&&(it.d(1),it=null),9&a){var u;for(ut=t[3],u=0;u<ut.length;u+=1){var f=O(t,ut,u);ft[u]?ft[u].p(f,a):(ft[u]=U(f),ft[u].c(),ft[u].m(Y,null))}for(;u<ft.length;u+=1)ft[u].d(1);ft.length=ut.length}if(73&a){var d;for(ht=t[3],d=0;d<ht.length;d+=1){var h=J(t,ht,d);vt[d]?vt[d].p(h,a):(vt[d]=_(h),vt[d].c(),vt[d].m(tt,null))}for(;d<vt.length;d+=1)vt[d].d(1);vt.length=ht.length}(!rt||4&a&&at!==(at=L(t[2].dek?"has-dek":"")+" svelte-1b77smd"))&&v(X,"class",at)},i:function(t){rt||(T&&R(T.$$.fragment,t),R(F.$$.fragment,t),rt=!0)},o:function(t){T&&V(T.$$.fragment,t),V(F.$$.fragment,t),rt=!1},d:function(t){h(n),t&&h(a),t&&h(r),T&&S(T),S(F),it&&it.d(),H(ft,t),H(vt,t),st=!1,ct()}}}function W(t){return X.apply(this,arguments)}function X(){return(X=t(e.mark((function t(n){var a,r,s;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,n.query,t.next=3,this.fetch("example-ssr/".concat(a.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(s=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{slug:a.slug,data:s,active:"index"});case 11:this.error(r.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Y(t){var e=t.split("/");return e[e.length-1].split(".")[0].toLowerCase()}function Z(t,e,n){A.registerLanguage("svelte",B),B(A);var a=e.slug,r=e.data,s=e.active,c=void 0===s?"index":s,l=new N.Renderer;var o=new Map;P.forEach((function(t){o.set(t.slug,t)}));var i,u;return t.$set=function(t){"slug"in t&&n(1,a=t.slug),"data"in t&&n(2,r=t.data),"active"in t&&n(0,c=t.active)},t.$$.update=function(){4&t.$$.dirty&&n(3,i=[r.main].concat(r.components).concat(r.modules).concat(r.componentModules).concat(r.componentComponents).concat(r.csvs)),2&t.$$.dirty&&n(4,u=o.get(a))},[c,a,r,i,u,function(t){return N(t,{renderer:l})},function(t,e){var n=e.split("."),a=n[n.length-1];return"csv"===a&&(a="diff"),A.highlight(a,t).value},function(){var t=i.filter((function(t){return Y(t.title)===c}))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}},function(t){return n(0,c=Y(t.title))}]}var tt=function(t){n(a,i);var e=F(a);function a(t){var n;return s(this,a),n=e.call(this),c(o(n),t,Z,z,l,{slug:1,data:2,active:0}),n}return a}();export default tt;export{W as preload};
