import{M as t,N as e,c as n,d as a,e as r,f as s,i as c,s as o,h as l,S as i,j as u,l as f,m as d,o as h,q as v,r as m,t as p,n as g,u as $,K as y,P as k,k as w,p as E,J as D,x,C as b,G as j,Q as I,z as C,a as L,v as R,w as V,y as M,A as H,F as T,D as P,R as S,H as q}from"./client.5fb73754.js";import{h as A,a as K}from"./hljsDefineSvelte.56ce9714.js";import{m as N}from"./downloadBlob.040cc1e3.js";import{D as z,c as B}from"./cleanTitle.21869af8.js";function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}var G=S.document;function J(t,e,n){var a=t.slice();return a[11]=e[n],a}function Q(t,e,n){var a=t.slice();return a[11]=e[n],a}function U(t){var e,n=t[5](t[2].dek)+"";return{c:function(){e=u("div"),this.h()},l:function(t){e=f(t,"DIV",{class:!0}),d(e).forEach(h),this.h()},h:function(){v(e,"class","dek svelte-m4suor")},m:function(t,a){m(t,e,a),e.innerHTML=n},p:function(t,a){4&a&&n!==(n=t[5](t[2].dek)+"")&&(e.innerHTML=n)},d:function(t){t&&h(e)}}}function _(t){var e,n,a,r,s,c=t[11].title+"";function o(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t)[8].apply(e,[t[11]].concat(a))}return{c:function(){e=u("li"),n=p(c),this.h()},l:function(t){e=f(t,"LI",{class:!0});var a=d(e);n=g(a,c),a.forEach(h),this.h()},h:function(){v(e,"class",a="tab "+(t[0]===B(t[11].title)?"active":"")+" svelte-m4suor")},m:function(t,a){m(t,e,a),$(e,n),r||(s=y(e,"click",o),r=!0)},p:function(r,s){t=r,8&s&&c!==(c=t[11].title+"")&&k(n,c),9&s&&a!==(a="tab "+(t[0]===B(t[11].title)?"active":"")+" svelte-m4suor")&&v(e,"class",a)},d:function(t){t&&h(e),r=!1,s()}}}function O(t){var e,n,a,r=t[6](t[11].contents,t[11].title)+"";return{c:function(){e=u("div"),n=u("pre"),a=w(),this.h()},l:function(t){e=f(t,"DIV",{class:!0,style:!0});var r=d(e);n=f(r,"PRE",{class:!0}),d(n).forEach(h),a=E(r),r.forEach(h),this.h()},h:function(){v(n,"class","svelte-m4suor"),v(e,"class","contents"),D(e,"display",t[0]===B(t[11].title)?"block":"none")},m:function(t,s){m(t,e,s),$(e,n),n.innerHTML=r,$(e,a)},p:function(t,a){8&a&&r!==(r=t[6](t[11].contents,t[11].title)+"")&&(n.innerHTML=r),9&a&&D(e,"display",t[0]===B(t[11].title)?"block":"none")},d:function(t){t&&h(e)}}}function W(t){var e,n,a,r,s,c,o,l,i,D,P,S,A,K,N,B,F,W,X,Y,Z,tt,et,nt,at,rt,st,ct=t[4].title+"";G.title=e=t[4].title;var ot=t[4].component;ot&&(S=new ot({})),N=new z({props:{data:t[2],slug:t[1]}});for(var lt=t[2].dek&&U(t),it=t[3],ut=[],ft=0;ft<it.length;ft+=1)ut[ft]=_(Q(t,it,ft));for(var dt=t[3],ht=[],vt=0;vt<dt.length;vt+=1)ht[vt]=O(J(t,dt,vt));return{c:function(){n=u("link"),a=w(),r=u("div"),s=u("h1"),c=p(ct),o=u("a"),l=p("Edit"),D=w(),P=u("div"),S&&x(S.$$.fragment),A=w(),K=u("div"),x(N.$$.fragment),B=w(),lt&&lt.c(),F=w(),W=u("div"),X=u("ul");for(var t=0;t<ut.length;t+=1)ut[t].c();Y=w(),Z=u("div"),tt=u("div"),et=w();for(var e=0;e<ht.length;e+=1)ht[e].c();this.h()},l:function(t){var e=b('[data-svelte="svelte-dklk17"]',G.head);n=f(e,"LINK",{rel:!0,href:!0}),e.forEach(h),a=E(t),r=f(t,"DIV",{class:!0});var i=d(r);s=f(i,"H1",{});var u=d(s);c=g(u,ct),o=f(u,"A",{class:!0,href:!0,target:!0,rel:!0});var v=d(o);l=g(v,"Edit"),v.forEach(h),u.forEach(h),D=E(i),P=f(i,"DIV",{class:!0});var m=d(P);S&&j(S.$$.fragment,m),m.forEach(h),A=E(i),K=f(i,"DIV",{class:!0});var p=d(K);j(N.$$.fragment,p),p.forEach(h),B=E(i),lt&&lt.l(i),F=E(i),W=f(i,"DIV",{id:!0,class:!0});var $=d(W);X=f($,"UL",{id:!0,class:!0});for(var y=d(X),k=0;k<ut.length;k+=1)ut[k].l(y);y.forEach(h),Y=E($),Z=f($,"DIV",{id:!0,class:!0});var w=d(Z);tt=f(w,"DIV",{class:!0}),d(tt).forEach(h),et=E(w);for(var x=0;x<ht.length;x+=1)ht[x].l(w);w.forEach(h),$.forEach(h),i.forEach(h),this.h()},h:function(){v(n,"rel","stylesheet"),v(n,"href","hljs.css"),v(o,"class","edit-repl svelte-m4suor"),v(o,"href",i="https://svelte.dev/repl/"+t[4].replPath),v(o,"target","_blank"),v(o,"rel","nofollow"),v(P,"class","chart-hero svelte-m4suor"),v(K,"class","download svelte-m4suor"),v(X,"id","page-nav"),v(X,"class","svelte-m4suor"),v(tt,"class","copy svelte-m4suor"),v(Z,"id","contents-container"),v(Z,"class","svelte-m4suor"),v(W,"id","pages"),v(W,"class",nt=I(t[2].dek?"has-dek":"")+" svelte-m4suor"),v(r,"class","main svelte-m4suor")},m:function(e,i){$(G.head,n),m(e,a,i),m(e,r,i),$(r,s),$(s,c),$(s,o),$(o,l),$(r,D),$(r,P),S&&C(S,P,null),$(r,A),$(r,K),C(N,K,null),$(r,B),lt&&lt.m(r,null),$(r,F),$(r,W),$(W,X);for(var u=0;u<ut.length;u+=1)ut[u].m(X,null);$(W,Y),$(W,Z),$(Z,tt),$(Z,et);for(var f=0;f<ht.length;f+=1)ht[f].m(Z,null);at=!0,rt||(st=y(tt,"click",t[7]),rt=!0)},p:function(t,n){var a=L(n,1)[0];if((!at||16&a)&&e!==(e=t[4].title)&&(G.title=e),(!at||16&a)&&ct!==(ct=t[4].title+"")&&k(c,ct),(!at||16&a&&i!==(i="https://svelte.dev/repl/"+t[4].replPath))&&v(o,"href",i),ot!==(ot=t[4].component)){if(S){q();var s=S;R(s.$$.fragment,1,0,(function(){H(s,1)})),V()}ot?(S=new ot({}),x(S.$$.fragment),M(S.$$.fragment,1),C(S,P,null)):S=null}var l={};if(4&a&&(l.data=t[2]),2&a&&(l.slug=t[1]),N.$set(l),t[2].dek?lt?lt.p(t,a):((lt=U(t)).c(),lt.m(r,F)):lt&&(lt.d(1),lt=null),9&a){var u;for(it=t[3],u=0;u<it.length;u+=1){var f=Q(t,it,u);ut[u]?ut[u].p(f,a):(ut[u]=_(f),ut[u].c(),ut[u].m(X,null))}for(;u<ut.length;u+=1)ut[u].d(1);ut.length=it.length}if(73&a){var d;for(dt=t[3],d=0;d<dt.length;d+=1){var h=J(t,dt,d);ht[d]?ht[d].p(h,a):(ht[d]=O(h),ht[d].c(),ht[d].m(Z,null))}for(;d<ht.length;d+=1)ht[d].d(1);ht.length=dt.length}(!at||4&a&&nt!==(nt=I(t[2].dek?"has-dek":"")+" svelte-m4suor"))&&v(W,"class",nt)},i:function(t){at||(S&&M(S.$$.fragment,t),M(N.$$.fragment,t),at=!0)},o:function(t){S&&R(S.$$.fragment,t),R(N.$$.fragment,t),at=!1},d:function(t){h(n),t&&h(a),t&&h(r),S&&H(S),H(N),lt&&lt.d(),T(ut,t),T(ht,t),rt=!1,st()}}}function X(t){return Y.apply(this,arguments)}function Y(){return(Y=t(e.mark((function t(n){var a,r,s;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,n.query,t.next=3,this.fetch("example/".concat(a.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(s=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{slug:a.slug,data:s,active:"index"});case 11:this.error(r.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Z(t,e,n){A.registerLanguage("svelte",K),K(A);var a=e.slug,r=e.data,s=e.active,c=void 0===s?"index":s,o=new N.Renderer;var l=new Map;P.forEach((function(t){l.set(t.slug,t)}));var i,u;return t.$set=function(t){"slug"in t&&n(1,a=t.slug),"data"in t&&n(2,r=t.data),"active"in t&&n(0,c=t.active)},t.$$.update=function(){4&t.$$.dirty&&n(3,i=[r.main].concat(r.components).concat(r.componentModules).concat(r.modules).concat(r.componentComponents).concat(r.jsons).concat(r.csvs)),2&t.$$.dirty&&n(4,u=l.get(a))},[c,a,r,i,u,function(t){return N(t,{renderer:o})},function(t,e){var n=e.split("."),a=n[n.length-1];return"csv"===a&&(a="diff"),A.highlight(a,t).value},function(){var t=i.filter((function(t){return B(t.title)===c}))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}},function(t){return n(0,c=B(t.title))}]}var tt=function(t){n(a,i);var e=F(a);function a(t){var n;return s(this,a),n=e.call(this),c(l(n),t,Z,W,o,{slug:1,data:2,active:0}),n}return a}();export default tt;export{X as preload};
