import{B as t,C as s,D as n,E as a,a as e,s as r,F as i,S as o,x as c,e as u,I as f,y as h,b as l,d as p,J as m,f as d,g as v,j as x,w as j,G as b,K as g,n as y}from"./index.2107e488.js";import{_ as w}from"./index.153ad375.js";import{_ as E}from"./asyncToGenerator.5229e80b.js";function H(t){var s,n,a,e,r,i,o=t[0].title+"",w=t[0].html+"";return document.title=s=t[0].title,{c:function(){n=c(),a=u("h1"),e=f(o),r=c(),i=u("div"),this.h()},l:function(t){n=h(t),a=l(t,"H1",{});var s=p(a);e=m(s,o),s.forEach(d),r=h(t),i=l(t,"DIV",{class:!0}),p(i).forEach(d),this.h()},h:function(){v(i,"class","content svelte-gnxal1")},m:function(t,s){x(t,n,s),x(t,a,s),j(a,e),x(t,r,s),x(t,i,s),i.innerHTML=w},p:function(t,n){var a=b(n,1)[0];1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&o!==(o=t[0].title+"")&&g(e,o),1&a&&w!==(w=t[0].html+"")&&(i.innerHTML=w)},i:y,o:y,d:function(t){t&&d(n),t&&d(a),t&&d(r),t&&d(i)}}}function T(t){return k.apply(this,arguments)}function k(){return(k=E(w.mark((function t(s){var n,a,e;return w.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(e=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(a.status,e.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function D(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}var G=function(c){function u(t){var o;return s(this,u),o=n(this,a(u).call(this)),e(i(o),t,D,H,r,{post:0}),o}return t(u,o),u}();export default G;export{T as preload};