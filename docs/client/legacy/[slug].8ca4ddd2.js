import{c as n,d as t,e,f as a,i as r,s as c,h as s,S as o,j as i,t as l,l as u,m as f,n as h,o as d,q as p,J as v,r as g,u as m,K as y,a as $,L as j,M as E,N as I,O as x,k as D,W as w,p as R,P as b,F as S,x as k,C as L,G as V,Q as H,z as T,v as C,w as M,y as P,A as N,R as q,H as U}from"./client.22a7638a.js";import{h as z,a as B}from"./hljsDefineSvelte.b200fc38.js";import{d as O,t as A,m as K}from"./downloadBlob.ecdd77fc.js";import{c as F}from"./_components.ecc48c07.js";function G(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,c=t(n);if(a){var s=t(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return e(this,r)}}function J(n){var t,e,a,r;return{c:function(){t=i("button"),e=l("Download      "),this.h()},l:function(n){t=u(n,"BUTTON",{disabled:!0,title:!0,class:!0,style:!0});var a=f(t);e=h(a,"Download      "),a.forEach(d),this.h()},h:function(){t.disabled=n[0],p(t,"title","download zip file"),p(t,"class","icon svelte-1gef78k"),v(t,"background-image","url(/icons/download.svg)")},m:function(c,s){g(c,t,s),m(t,e),a||(r=y(t,"click",n[1]),a=!0)},p:function(n,e){1&$(e,1)[0]&&(t.disabled=n[0])},i:j,o:j,d:function(n){n&&d(t),a=!1,r()}}}function Q(n,t,e){var a=t.data,r=t.slug,c=!1;function s(){return(s=E(I.mark((function n(){var t,s;return I.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(0,c=!0),(t=[]).push({path:r,data:a.main.contents}),s=x(t.filter(Boolean),"path",!1),O(A(s),"layercake-".concat(r,".zip")),e(0,c=!1);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return n.$set=function(n){"data"in n&&e(2,a=n.data),"slug"in n&&e(3,r=n.slug)},[c,function(){return s.apply(this,arguments)},a,r]}var W=function(t){n(i,o);var e=G(i);function i(n){var t;return a(this,i),t=e.call(this),r(s(t),n,Q,J,c,{data:2,slug:3}),t}return i}();function _(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,c=t(n);if(a){var s=t(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return e(this,r)}}var X=q.document;function Y(n,t,e){var a=n.slice();return a[10]=t[e],a}function Z(n,t,e){var a=n.slice();return a[10]=t[e],a}function nn(n,t,e){var a=n.slice();return a[18]=t[e],a}function tn(n,t,e){var a=n.slice();return a[15]=t[e],a}function en(n){for(var t,e,a,r,c,s,o=0===n[1].usedIn[0].matches.length&&n[1].usedIn[1].matches.length>0?" SSR":"",v=n[1].usedIn,y=[],$=0;$<v.length;$+=1)y[$]=sn(tn(n,v,$));return{c:function(){t=i("h3"),e=l("Used in these"),a=l(o),r=l(" examples:"),c=D();for(var n=0;n<y.length;n+=1)y[n].c();s=w(),this.h()},l:function(n){t=u(n,"H3",{class:!0});var i=f(t);e=h(i,"Used in these"),a=h(i,o),r=h(i," examples:"),i.forEach(d),c=R(n);for(var l=0;l<y.length;l+=1)y[l].l(n);s=w(),this.h()},h:function(){p(t,"class","svelte-nfj8g2")},m:function(n,o){g(n,t,o),m(t,e),m(t,a),m(t,r),g(n,c,o);for(var i=0;i<y.length;i+=1)y[i].m(n,o);g(n,s,o)},p:function(n,t){if(2&t&&o!==(o=0===n[1].usedIn[0].matches.length&&n[1].usedIn[1].matches.length>0?" SSR":"")&&b(a,o),2&t){var e;for(v=n[1].usedIn,e=0;e<v.length;e+=1){var r=tn(n,v,e);y[e]?y[e].p(r,t):(y[e]=sn(r),y[e].c(),y[e].m(s.parentNode,s))}for(;e<y.length;e+=1)y[e].d(1);y.length=v.length}},d:function(n){n&&d(t),n&&d(c),S(y,n),n&&d(s)}}}function an(n){for(var t,e,a,r="SSR"===n[15].group&&n[1].usedIn[0].matches.length>0&&rn(),c=n[15].matches,s=[],o=0;o<c.length;o+=1)s[o]=cn(nn(n,c,o));return{c:function(){r&&r.c(),t=D(),e=i("ul");for(var n=0;n<s.length;n+=1)s[n].c();a=D()},l:function(n){r&&r.l(n),t=R(n),e=u(n,"UL",{});for(var c=f(e),o=0;o<s.length;o+=1)s[o].l(c);a=R(c),c.forEach(d)},m:function(n,c){r&&r.m(n,c),g(n,t,c),g(n,e,c);for(var o=0;o<s.length;o+=1)s[o].m(e,null);m(e,a)},p:function(n,o){if("SSR"===n[15].group&&n[1].usedIn[0].matches.length>0?r||((r=rn()).c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),2&o){var i;for(c=n[15].matches,i=0;i<c.length;i+=1){var l=nn(n,c,i);s[i]?s[i].p(l,o):(s[i]=cn(l),s[i].c(),s[i].m(e,a))}for(;i<s.length;i+=1)s[i].d(1);s.length=c.length}},d:function(n){r&&r.d(n),n&&d(t),n&&d(e),S(s,n)}}}function rn(n){var t,e;return{c:function(){t=i("h3"),e=l("SSR Examples:"),this.h()},l:function(n){t=u(n,"H3",{class:!0});var a=f(t);e=h(a,"SSR Examples:"),a.forEach(d),this.h()},h:function(){p(t,"class","svelte-nfj8g2")},m:function(n,a){g(n,t,a),m(t,e)},d:function(n){n&&d(t)}}}function cn(n){var t,e,a,r,c=n[18].split("/").pop()+"";return{c:function(){t=i("li"),e=i("a"),a=l(c),this.h()},l:function(n){t=u(n,"LI",{});var r=f(t);e=u(r,"A",{href:!0,rel:!0});var s=f(e);a=h(s,c),s.forEach(d),r.forEach(d),this.h()},h:function(){p(e,"href",r=n[18]),p(e,"rel","prefetch")},m:function(n,r){g(n,t,r),m(t,e),m(e,a)},p:function(n,t){2&t&&c!==(c=n[18].split("/").pop()+"")&&b(a,c),2&t&&r!==(r=n[18])&&p(e,"href",r)},d:function(n){n&&d(t)}}}function sn(n){var t,e=n[15].matches.length>0&&an(n);return{c:function(){e&&e.c(),t=w()},l:function(n){e&&e.l(n),t=w()},m:function(n,a){e&&e.m(n,a),g(n,t,a)},p:function(n,a){n[15].matches.length>0?e?e.p(n,a):((e=an(n)).c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d:function(n){e&&e.d(n),n&&d(t)}}}function on(n){var t,e,a=n[10].slug+"";return{c:function(){t=i("li"),e=l(a),this.h()},l:function(n){t=u(n,"LI",{class:!0});var r=f(t);e=h(r,a),r.forEach(d),this.h()},h:function(){p(t,"class","tab active svelte-nfj8g2")},m:function(n,a){g(n,t,a),m(t,e)},p:function(n,t){4&t&&a!==(a=n[10].slug+"")&&b(e,a)},d:function(n){n&&d(t)}}}function ln(n){var t,e,a,r=n[5](n[10].contents,n[10].slug)+"";return{c:function(){t=i("div"),e=i("pre"),a=D(),this.h()},l:function(n){t=u(n,"DIV",{class:!0,style:!0});var r=f(t);e=u(r,"PRE",{class:!0}),f(e).forEach(d),a=R(r),r.forEach(d),this.h()},h:function(){p(e,"class","svelte-nfj8g2"),p(t,"class","contents"),v(t,"display","block")},m:function(n,c){g(n,t,c),m(t,e),e.innerHTML=r,m(t,a)},p:function(n,t){4&t&&r!==(r=n[5](n[10].contents,n[10].slug)+"")&&(e.innerHTML=r)},d:function(n){n&&d(t)}}}function un(n){var t,e,a,r,c,s,o,v,j,E,I,x,w,q,z,B,O,A,K,F,G,J,Q,_,nn,tn,an,rn,cn,sn,un=n[3].slug+"",fn=n[4](n[1].jsdocParsed.description)+"",hn=n[4](n[6])+"";X.title=t=n[3].slug+" component";var dn=n[3].component;dn&&(E=new dn({})),w=new W({props:{data:n[1],slug:n[0]}});for(var pn=(n[1].usedIn[0].matches.length>0||n[1].usedIn[1].matches.length>0)&&en(n),vn=n[2],gn=[],mn=0;mn<vn.length;mn+=1)gn[mn]=on(Z(n,vn,mn));for(var yn=n[2],$n=[],jn=0;jn<yn.length;jn+=1)$n[jn]=ln(Y(n,yn,jn));return{c:function(){e=i("link"),a=D(),r=i("div"),c=i("h1"),s=l(un),o=l(" component"),v=D(),j=i("div"),E&&k(E.$$.fragment),I=D(),x=i("div"),k(w.$$.fragment),q=D(),z=i("div"),B=D(),O=i("div"),A=D(),K=i("div"),pn&&pn.c(),F=D(),G=i("div"),J=i("ul");for(var n=0;n<gn.length;n+=1)gn[n].c();Q=D(),_=i("div"),nn=i("div"),tn=D();for(var t=0;t<$n.length;t+=1)$n[t].c();this.h()},l:function(n){var t=L('[data-svelte="svelte-1uif0rq"]',X.head);e=u(t,"LINK",{rel:!0,href:!0}),t.forEach(d),a=R(n),r=u(n,"DIV",{class:!0});var i=f(r);c=u(i,"H1",{});var l=f(c);s=h(l,un),o=h(l," component"),l.forEach(d),v=R(i),j=u(i,"DIV",{class:!0});var p=f(j);E&&V(E.$$.fragment,p),p.forEach(d),I=R(i),x=u(i,"DIV",{class:!0});var g=f(x);V(w.$$.fragment,g),g.forEach(d),q=R(i),z=u(i,"DIV",{class:!0}),f(z).forEach(d),B=R(i),O=u(i,"DIV",{id:!0,class:!0}),f(O).forEach(d),A=R(i),K=u(i,"DIV",{id:!0,class:!0});var m=f(K);pn&&pn.l(m),m.forEach(d),F=R(i),G=u(i,"DIV",{id:!0,class:!0});var y=f(G);J=u(y,"UL",{id:!0,class:!0});for(var $=f(J),D=0;D<gn.length;D+=1)gn[D].l($);$.forEach(d),Q=R(y),_=u(y,"DIV",{id:!0,class:!0});var b=f(_);nn=u(b,"DIV",{class:!0}),f(nn).forEach(d),tn=R(b);for(var S=0;S<$n.length;S+=1)$n[S].l(b);b.forEach(d),y.forEach(d),i.forEach(d),this.h()},h:function(){p(e,"rel","stylesheet"),p(e,"href","hljs.css"),p(j,"class","chart-hero svelte-nfj8g2"),p(x,"class","download svelte-nfj8g2"),p(z,"class","dek svelte-nfj8g2"),p(O,"id","params-table"),p(O,"class","svelte-nfj8g2"),p(K,"id","used-in"),p(K,"class","svelte-nfj8g2"),p(J,"id","page-nav"),p(J,"class","svelte-nfj8g2"),p(nn,"class","copy svelte-nfj8g2"),p(_,"id","contents-container"),p(_,"class","svelte-nfj8g2"),p(G,"id","pages"),p(G,"class",an=H(n[1].dek?"has-dek":"")+" svelte-nfj8g2"),p(r,"class","main svelte-nfj8g2")},m:function(t,i){m(X.head,e),g(t,a,i),g(t,r,i),m(r,c),m(c,s),m(c,o),m(r,v),m(r,j),E&&T(E,j,null),m(r,I),m(r,x),T(w,x,null),m(r,q),m(r,z),z.innerHTML=fn,m(r,B),m(r,O),O.innerHTML=hn,m(r,A),m(r,K),pn&&pn.m(K,null),m(r,F),m(r,G),m(G,J);for(var l=0;l<gn.length;l+=1)gn[l].m(J,null);m(G,Q),m(G,_),m(_,nn),m(_,tn);for(var u=0;u<$n.length;u+=1)$n[u].m(_,null);rn=!0,cn||(sn=y(nn,"click",n[7]),cn=!0)},p:function(n,e){var a=$(e,1)[0];if((!rn||8&a)&&t!==(t=n[3].slug+" component")&&(X.title=t),(!rn||8&a)&&un!==(un=n[3].slug+"")&&b(s,un),dn!==(dn=n[3].component)){if(E){U();var r=E;C(r.$$.fragment,1,0,(function(){N(r,1)})),M()}dn?(E=new dn({}),k(E.$$.fragment),P(E.$$.fragment,1),T(E,j,null)):E=null}var c={};if(2&a&&(c.data=n[1]),1&a&&(c.slug=n[0]),w.$set(c),(!rn||2&a)&&fn!==(fn=n[4](n[1].jsdocParsed.description)+"")&&(z.innerHTML=fn),n[1].usedIn[0].matches.length>0||n[1].usedIn[1].matches.length>0?pn?pn.p(n,a):((pn=en(n)).c(),pn.m(K,null)):pn&&(pn.d(1),pn=null),4&a){var o;for(vn=n[2],o=0;o<vn.length;o+=1){var i=Z(n,vn,o);gn[o]?gn[o].p(i,a):(gn[o]=on(i),gn[o].c(),gn[o].m(J,null))}for(;o<gn.length;o+=1)gn[o].d(1);gn.length=vn.length}if(36&a){var l;for(yn=n[2],l=0;l<yn.length;l+=1){var u=Y(n,yn,l);$n[l]?$n[l].p(u,a):($n[l]=ln(u),$n[l].c(),$n[l].m(_,null))}for(;l<$n.length;l+=1)$n[l].d(1);$n.length=yn.length}(!rn||2&a&&an!==(an=H(n[1].dek?"has-dek":"")+" svelte-nfj8g2"))&&p(G,"class",an)},i:function(n){rn||(E&&P(E.$$.fragment,n),P(w.$$.fragment,n),rn=!0)},o:function(n){E&&C(E.$$.fragment,n),C(w.$$.fragment,n),rn=!1},d:function(n){d(e),n&&d(a),n&&d(r),E&&N(E),N(w),pn&&pn.d(),S(gn,n),S($n,n),cn=!1,sn()}}}function fn(n){return hn.apply(this,arguments)}function hn(){return(hn=E(I.mark((function n(t){var e,a,r,c;return I.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params,t.query,a=e.slug,n.next=4,this.fetch("components/".concat(a,".json"));case 4:return r=n.sent,n.next=7,r.json();case 7:if(c=n.sent,200!==r.status){n.next=12;break}return n.abrupt("return",{slug:a,data:c});case 12:this.error(r.status,c.message);case 13:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function dn(n,t,e){z.registerLanguage("svelte",B),B(z);var a=t.slug,r=t.data,c=new K.Renderer;var s=new Map;F.flatMap((function(n){return n.components})).forEach((function(n){s.set(n.slug,n)}));var o,i,l="|Param|Default|Required|Description|\n|-----|-------|--------|-----------|\n".concat(r.jsdocParsed.tags.map((function(n){return"**".concat(n.name,"** ").concat(function(n){var t=function(n){return n.map((function(n){return"`".concat(n.name,"`")})).join(" &vert; ")};if(n.name)return"`".concat(n.name,"`");if(n.type.elements)return"(".concat(t(n.type.elements),")");if(n.expression){if(n.expression.name)return"`".concat(n.expression.name,"`");if(n.expression.elements)return"(".concat(t(n.expression.elements),")")}}(n.type),"|").concat((a=n.default,a?"`".concat(a,"`"):"None"),"|").concat((t=n.type,e="OptionalType"!==t.type?"yes":"no","<center>".concat(e,"</center>")),"|").concat(n.description.replace(/^(-|–|—)/g,"").trim());var t,e,a})).join("\n"),"\n\t");return n.$set=function(n){"slug"in n&&e(0,a=n.slug),"data"in n&&e(1,r=n.data)},n.$$.update=function(){2&n.$$.dirty&&e(2,o=[r.main]),1&n.$$.dirty&&e(3,i=s.get(a))},[a,r,o,i,function(n){return K(n,{renderer:c})},function(n,t){var e=t.split("."),a=e[e.length-1];return"csv"===a&&(a="diff"),z.highlight(a,n).value},l,function(){var n=o[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",n);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=n,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(n){return console.warn("Copy to clipboard failed.",n),!1}finally{document.body.removeChild(t)}}}]}var pn=function(t){n(i,o);var e=_(i);function i(n){var t;return a(this,i),t=e.call(this),r(s(t),n,dn,un,c,{slug:0,data:1}),t}return i}();export default pn;export{fn as preload};