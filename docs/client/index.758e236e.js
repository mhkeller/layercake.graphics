import{S as e,i as t,s as a,e as s,t as r,a as l,c as n,b as o,d as i,f as c,g as h,h as v,j as f,k as d,l as p,m,n as u,o as g,p as y,q as k,r as w,u as b,v as S,w as E,x,y as L,z as $}from"./client.65c1db2b.js";import{h as A,a as C}from"./hljsDefineSvelte.1daad94a.js";function H(e,t,a){const s=e.slice();return s[1]=t[a],s}function I(e,t,a){const s=e.slice();return s[1]=t[a],s}function V(e){let t,a,w,b,S,E,x,A,C,H,I,V,D,P=e[1].title+"";var T=e[1].component;return T&&(I=new T({})),{c(){t=s("div"),a=s("h4"),w=s("a"),b=r(P),E=l(),x=s("a"),A=r("Edit"),H=l(),I&&u(I.$$.fragment),V=l(),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=o(t);a=n(s,"H4",{class:!0});var r=o(a);w=n(r,"A",{rel:!0,href:!0,class:!0});var l=o(w);b=i(l,P),l.forEach(c),E=h(r),x=n(r,"A",{class:!0,href:!0,target:!0,rel:!0});var v=o(x);A=i(v,"Edit"),v.forEach(c),r.forEach(c),H=h(s),I&&L(I.$$.fragment,s),V=h(s),s.forEach(c),this.h()},h(){v(w,"rel","prefetch"),v(w,"href",S="example/"+e[1].slug),v(w,"class","svelte-1r0uiei"),v(x,"class","edit-repl svelte-1r0uiei"),v(x,"href",C="https://svelte.dev/repl/"+e[1].replPath),v(x,"target","_blank"),v(x,"rel","nofollow"),v(a,"class","title svelte-1r0uiei"),v(t,"class","gallery-item svelte-1r0uiei")},m(e,s){f(e,t,s),d(t,a),d(a,w),d(w,b),d(a,E),d(a,x),d(x,A),d(t,H),I&&y(I,t,null),d(t,V),D=!0},p(e,a){if(T!==(T=e[1].component)){if(I){$();const e=I;p(e.$$.fragment,1,0,()=>{k(e,1)}),m()}T?(I=new T({}),u(I.$$.fragment),g(I.$$.fragment,1),y(I,t,V)):I=null}},i(e){D||(I&&g(I.$$.fragment,e),D=!0)},o(e){I&&p(I.$$.fragment,e),D=!1},d(e){e&&c(t),I&&k(I)}}}function D(e){let t,a,b,S,E,x,A,C,H,I,V,D,P,T=e[1].title+"";var j=e[1].component;return j&&(V=new j({})),{c(){t=s("div"),a=s("h4"),b=s("a"),S=r(T),x=l(),A=s("a"),C=r("Edit"),I=l(),V&&u(V.$$.fragment),D=l(),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=o(t);a=n(s,"H4",{class:!0});var r=o(a);b=n(r,"A",{rel:!0,href:!0,class:!0});var l=o(b);S=i(l,T),l.forEach(c),x=h(r),A=n(r,"A",{class:!0,href:!0,target:!0,rel:!0});var v=o(A);C=i(v,"Edit"),v.forEach(c),r.forEach(c),I=h(s),V&&L(V.$$.fragment,s),D=h(s),s.forEach(c),this.h()},h(){v(b,"rel","prefetch"),v(b,"href",E="example-ssr/"+e[1].slug),v(b,"class","svelte-1r0uiei"),v(A,"class","edit-repl svelte-1r0uiei"),v(A,"href",H="https://svelte.dev/repl/"+e[1].replPath),v(A,"target","_blank"),v(A,"rel","nofollow"),v(a,"class","title svelte-1r0uiei"),v(t,"class","gallery-item svelte-1r0uiei"),w(t,"scaled",e[1].title.toLowerCase().includes("map"))},m(e,s){f(e,t,s),d(t,a),d(a,b),d(b,S),d(a,x),d(a,A),d(A,C),d(t,I),V&&y(V,t,null),d(t,D),P=!0},p(e,a){if(j!==(j=e[1].component)){if(V){$();const e=V;p(e.$$.fragment,1,0,()=>{k(e,1)}),m()}j?(V=new j({}),u(V.$$.fragment),g(V.$$.fragment,1),y(V,t,D)):V=null}0&a&&w(t,"scaled",e[1].title.toLowerCase().includes("map"))},i(e){P||(V&&g(V.$$.fragment,e),P=!0)},o(e){V&&p(V.$$.fragment,e),P=!1},d(e){e&&c(t),V&&k(V)}}}function P(e){let t,a,u,y,k,w,L,C,P,T,j,G,M,J,_,B,R,z,N,U,W,X,Y,q,F,K,O,Q,Z,ee,te,ae,se,re,le,ne,oe,ie,ce,he,ve,fe,de,pe,me,ue,ge,ye,ke,we,be,Se,Ee,xe,Le,$e,Ae,Ce,He,Ie,Ve,De,Pe,Te,je,Ge=A.highlight("svelte",e[0]).value+"",Me=S,Je=[];for(let t=0;t<Me.length;t+=1)Je[t]=V(I(e,Me,t));const _e=e=>p(Je[e],1,1,()=>{Je[e]=null});let Be=E,Re=[];for(let t=0;t<Be.length;t+=1)Re[t]=D(H(e,Be,t));const ze=e=>p(Re[e],1,1,()=>{Re[e]=null});return{c(){t=s("meta"),a=s("meta"),u=s("link"),y=l(),k=s("div"),w=s("div"),L=s("div"),C=l(),P=s("h1"),T=r("Layer Cake"),j=l(),G=s("div"),M=s("p"),J=r("Layer Cake is a graphics framework for "),_=s("a"),B=r("Svelte"),R=r(". It uses the measurements of your target div and your data extents to create scales that "),z=s("span"),N=r("stay synced"),U=r(" on layout changes. Use these scales to organize multiple, "),W=s("span"),X=r("mostly-reusable Svelte components"),Y=r(", whether they be SVG, HTML, Canvas or WebGL. Since they all share the same coordinate space, you can build your graphic one layer at a time. It can also be used to easily create "),q=s("span"),F=r("responsive graphics server-side"),K=r(" that "),O=s("a"),Q=r("work without JavaScript"),Z=r("."),ee=l(),te=s("p"),ae=r("Read the "),se=s("a"),re=r("guide"),le=r(" or try the "),ne=s("a"),oe=r("starter template"),ie=r(" that comes with "),ce=s("a"),he=r("example components"),ve=r(". See the examples below and even edit them live. Here's a sample of what the code looks like:"),fe=l(),de=s("div"),pe=s("pre"),me=l(),ue=s("div");for(let e=0;e<Je.length;e+=1)Je[e].c();ge=l(),ye=s("div"),ke=s("h2"),we=r("Server-side rendering"),be=l(),Se=s("p"),Ee=r("Svelte makes it easy to render your project server side and Layer Cake has built-in helpers to make it even easier for charts. All of these examples below (except for their canvas components) will load and be responsive without client-side JavaScript. The advantage is that you can see the chart as soon as the page loads, avoiding blank placeholder spaces. HTML charts use percentage-based scales and SVG charts take advanage of certain "),xe=s("a"),Le=r("viewBox"),$e=r(" and CSS settings that Rich Harris, Svelte's creator, outlined in "),Ae=s("a"),Ce=r("this blog post"),He=r("."),Ie=l(),Ve=s("p"),De=r("For shapes that are difficult to render using percentages, such as swoopy arrows, Layer Cake makes it easy to superimpose client-side components that will hydrate once JavaScript is available. See the annotated column example below."),Pe=l(),Te=s("div");for(let e=0;e<Re.length;e+=1)Re[e].c();this.h()},l(e){const s=b('[data-svelte="svelte-1ik47nv"]',document.head);t=n(s,"META",{name:!0,content:!0}),a=n(s,"META",{name:!0,content:!0}),u=n(s,"LINK",{rel:!0,href:!0}),s.forEach(c),y=h(e),k=n(e,"DIV",{class:!0});var r=o(k);w=n(r,"DIV",{class:!0});var l=o(w);L=n(l,"DIV",{id:!0,class:!0}),o(L).forEach(c),C=h(l),P=n(l,"H1",{class:!0});var v=o(P);T=i(v,"Layer Cake"),v.forEach(c),l.forEach(c),j=h(r),G=n(r,"DIV",{id:!0,class:!0});var f=o(G);M=n(f,"P",{class:!0});var d=o(M);J=i(d,"Layer Cake is a graphics framework for "),_=n(d,"A",{href:!0,target:!0,rel:!0,class:!0});var p=o(_);B=i(p,"Svelte"),p.forEach(c),R=i(d,". It uses the measurements of your target div and your data extents to create scales that "),z=n(d,"SPAN",{class:!0});var m=o(z);N=i(m,"stay synced"),m.forEach(c),U=i(d," on layout changes. Use these scales to organize multiple, "),W=n(d,"SPAN",{class:!0});var g=o(W);X=i(g,"mostly-reusable Svelte components"),g.forEach(c),Y=i(d,", whether they be SVG, HTML, Canvas or WebGL. Since they all share the same coordinate space, you can build your graphic one layer at a time. It can also be used to easily create "),q=n(d,"SPAN",{class:!0});var S=o(q);F=i(S,"responsive graphics server-side"),S.forEach(c),K=i(d," that "),O=n(d,"A",{href:!0,class:!0});var E=o(O);Q=i(E,"work without JavaScript"),E.forEach(c),Z=i(d,"."),d.forEach(c),ee=h(f),te=n(f,"P",{class:!0});var x=o(te);ae=i(x,"Read the "),se=n(x,"A",{href:!0,rel:!0,class:!0});var $=o(se);re=i($,"guide"),$.forEach(c),le=i(x," or try the "),ne=n(x,"A",{href:!0,target:!0,rel:!0,class:!0});var A=o(ne);oe=i(A,"starter template"),A.forEach(c),ie=i(x," that comes with "),ce=n(x,"A",{href:!0,rel:!0,class:!0});var H=o(ce);he=i(H,"example components"),H.forEach(c),ve=i(x,". See the examples below and even edit them live. Here's a sample of what the code looks like:"),x.forEach(c),f.forEach(c),fe=h(r),de=n(r,"DIV",{class:!0});var I=o(de);pe=n(I,"PRE",{class:!0}),o(pe).forEach(c),I.forEach(c),me=h(r),ue=n(r,"DIV",{id:!0});var V=o(ue);for(let e=0;e<Je.length;e+=1)Je[e].l(V);V.forEach(c),ge=h(r),ye=n(r,"DIV",{class:!0,id:!0});var D=o(ye);ke=n(D,"H2",{class:!0});var je=o(ke);we=i(je,"Server-side rendering"),je.forEach(c),be=h(D),Se=n(D,"P",{class:!0});var Ge=o(Se);Ee=i(Ge,"Svelte makes it easy to render your project server side and Layer Cake has built-in helpers to make it even easier for charts. All of these examples below (except for their canvas components) will load and be responsive without client-side JavaScript. The advantage is that you can see the chart as soon as the page loads, avoiding blank placeholder spaces. HTML charts use percentage-based scales and SVG charts take advanage of certain "),xe=n(Ge,"A",{href:!0,target:!0,rel:!0,class:!0});var Me=o(xe);Le=i(Me,"viewBox"),Me.forEach(c),$e=i(Ge," and CSS settings that Rich Harris, Svelte's creator, outlined in "),Ae=n(Ge,"A",{href:!0,target:!0,rel:!0,class:!0});var _e=o(Ae);Ce=i(_e,"this blog post"),_e.forEach(c),He=i(Ge,"."),Ge.forEach(c),Ie=h(D),Ve=n(D,"P",{});var Be=o(Ve);De=i(Be,"For shapes that are difficult to render using percentages, such as swoopy arrows, Layer Cake makes it easy to superimpose client-side components that will hydrate once JavaScript is available. See the annotated column example below."),Be.forEach(c),D.forEach(c),Pe=h(r),Te=n(r,"DIV",{id:!0});var ze=o(Te);for(let e=0;e<Re.length;e+=1)Re[e].l(ze);ze.forEach(c),r.forEach(c),this.h()},h(){document.title="Layer Cake",v(t,"name","og:title"),v(t,"content","Layer Cake"),v(a,"name","twitter:title"),v(a,"content","Layer Cake"),v(u,"rel","stylesheet"),v(u,"href","hljs.css"),v(L,"id","logo"),v(L,"class","svelte-1r0uiei"),v(P,"class","svelte-1r0uiei"),v(w,"class","logo-container svelte-1r0uiei"),v(_,"href","https://svelte.dev"),v(_,"target","_blank"),v(_,"rel","noopener"),v(_,"class","svelte-1r0uiei"),v(z,"class","strong svelte-1r0uiei"),v(W,"class","strong svelte-1r0uiei"),v(q,"class","strong svelte-1r0uiei"),v(O,"href","#server-side"),v(O,"class","svelte-1r0uiei"),v(M,"class","svelte-1r0uiei"),v(se,"href","guide"),v(se,"rel","prefetch"),v(se,"class","svelte-1r0uiei"),v(ne,"href","https://github.com/mhkeller/layercake-template"),v(ne,"target","_blank"),v(ne,"rel","nofollow"),v(ne,"class","svelte-1r0uiei"),v(ce,"href","components"),v(ce,"rel","prefetch"),v(ce,"class","svelte-1r0uiei"),v(te,"class","svelte-1r0uiei"),v(G,"id","dek"),v(G,"class","svelte-1r0uiei"),v(pe,"class","svelte-1r0uiei"),v(de,"class","code-example svelte-1r0uiei"),v(ue,"id","gallery"),v(ke,"class","svelte-1r0uiei"),v(xe,"href","https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox"),v(xe,"target","_blank"),v(xe,"rel","nofollow"),v(xe,"class","svelte-1r0uiei"),v(Ae,"href","https://dev.to/richharris/a-new-technique-for-making-responsive-javascript-free-charts-gmp"),v(Ae,"target","_blank"),v(Ae,"rel","nofollow"),v(Ae,"class","svelte-1r0uiei"),v(Se,"class","svelte-1r0uiei"),v(ye,"class","section-hed svelte-1r0uiei"),v(ye,"id","server-side"),v(Te,"id","ssr-gallery"),v(k,"class","main svelte-1r0uiei")},m(e,s){d(document.head,t),d(document.head,a),d(document.head,u),f(e,y,s),f(e,k,s),d(k,w),d(w,L),d(w,C),d(w,P),d(P,T),d(k,j),d(k,G),d(G,M),d(M,J),d(M,_),d(_,B),d(M,R),d(M,z),d(z,N),d(M,U),d(M,W),d(W,X),d(M,Y),d(M,q),d(q,F),d(M,K),d(M,O),d(O,Q),d(M,Z),d(G,ee),d(G,te),d(te,ae),d(te,se),d(se,re),d(te,le),d(te,ne),d(ne,oe),d(te,ie),d(te,ce),d(ce,he),d(te,ve),d(k,fe),d(k,de),d(de,pe),pe.innerHTML=Ge,d(k,me),d(k,ue);for(let e=0;e<Je.length;e+=1)Je[e].m(ue,null);d(k,ge),d(k,ye),d(ye,ke),d(ke,we),d(ye,be),d(ye,Se),d(Se,Ee),d(Se,xe),d(xe,Le),d(Se,$e),d(Se,Ae),d(Ae,Ce),d(Se,He),d(ye,Ie),d(ye,Ve),d(Ve,De),d(k,Pe),d(k,Te);for(let e=0;e<Re.length;e+=1)Re[e].m(Te,null);je=!0},p(e,[t]){if(0&t){let a;for(Me=S,a=0;a<Me.length;a+=1){const s=I(e,Me,a);Je[a]?(Je[a].p(s,t),g(Je[a],1)):(Je[a]=V(s),Je[a].c(),g(Je[a],1),Je[a].m(ue,null))}for($(),a=Me.length;a<Je.length;a+=1)_e(a);m()}if(0&t){let a;for(Be=E,a=0;a<Be.length;a+=1){const s=H(e,Be,a);Re[a]?(Re[a].p(s,t),g(Re[a],1)):(Re[a]=D(s),Re[a].c(),g(Re[a],1),Re[a].m(Te,null))}for($(),a=Be.length;a<Re.length;a+=1)ze(a);m()}},i(e){if(!je){for(let e=0;e<Me.length;e+=1)g(Je[e]);for(let e=0;e<Be.length;e+=1)g(Re[e]);je=!0}},o(e){Je=Je.filter(Boolean);for(let e=0;e<Je.length;e+=1)p(Je[e]);Re=Re.filter(Boolean);for(let e=0;e<Re.length;e+=1)p(Re[e]);je=!1},d(e){c(t),c(a),c(u),e&&c(y),e&&c(k),x(Je,e),x(Re,e)}}}function T(e){A.registerLanguage("svelte",C),C(A);return["<script>\n\timport { LayerCake, Svg, Html, Canvas } from 'layercake';\n\n\timport AxisX from './components/AxisX.svelte';\n\timport AxisY from './components/AxisY.svelte';\n\timport Line from './components/Line.svelte';\n\timport Scatter from './components/Scatter.svelte';\n\timport Labels from './components/Labels.svelte';\n\n\tconst data = [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }];\n<\/script>\n\n<style>\n\t.chart-container {\n\t\twidth: 100%;\n\t\theight: 500px;\n\t}\n</style>\n\n<div class=\"chart-container\">\n\t<LayerCake\n\t\tx='x'\n\t\ty='y'\n\t\t{data}\n\t>\n\t\t<Svg>\n\t\t\t<AxisX/>\n\t\t\t<AxisY/>\n\t\t\t<Line color='#f0c'/>\n\t\t</Svg>\n\n\t\t<Canvas>\n\t\t\t<Scatter color='#0fc'/>\n\t\t</Canvas>\n\n\t\t<Html>\n\t\t\t<Labels/>\n\t\t</Html>\n\t</LayerCake>\n</div>".trim().replace(/\t/g,"  ")]}export default class extends e{constructor(e){super(),t(this,e,T,P,a,{})}}
