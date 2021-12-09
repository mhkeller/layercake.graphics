import{I as e,g as t,f as n,_ as r,b as s}from"./client.bcd83b1f.js";var i=e((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),l=(i.defaults,i.getDefaults,i.changeDefaults,/[&<>"']/),a=/[&<>"']/g,o=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=function(e){return u[e]};var p=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function g(e){return e.replace(p,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var f=/(^|[^\[])\^/g;var d=/[^\w:]/g,k=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var m={},b=/^[^:]+:\/*[^/]*$/,x=/^([^:]+:)[\s\S]*$/,y=/^([^:]+:\/*[^/]*)[\s\S]*$/;function v(e,t){m[" "+e]||(b.test(e)?m[" "+e]=e+"/":m[" "+e]=_(e,"/",!0));var n=-1===(e=m[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(x,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(y,"$1")+t:e+t}function _(e,t,n){var r=e.length;if(0===r)return"";for(var s=0;s<r;){var i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var w=function(e,t){if(t){if(l.test(e))return e.replace(a,c)}else if(o.test(e))return e.replace(h,c);return e},$=g,S=function(e,t,n){if(e){var r;try{r=decodeURIComponent(g(n)).replace(d,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!k.test(n)&&(n=v(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},A=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},z=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},R=_,L=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,s=0;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&--r<0)return s;return-1},Z=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},q={exec:function(){}},C=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(f,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},O=A,j={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:q,table:q,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};j.def=C(j.def).replace("label",j._label).replace("title",j._title).getRegex(),j.bullet=/(?:[*+-]|\d{1,9}\.)/,j.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,j.item=C(j.item,"gm").replace(/bull/g,j.bullet).getRegex(),j.list=C(j.list).replace(/bull/g,j.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+j.def.source+")").getRegex(),j._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",j._comment=/<!--(?!-?>)[\s\S]*?-->/,j.html=C(j.html,"i").replace("comment",j._comment).replace("tag",j._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),j.paragraph=C(j._paragraph).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",j._tag).getRegex(),j.blockquote=C(j.blockquote).replace("paragraph",j.paragraph).getRegex(),j.normal=O({},j),j.gfm=O({},j.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),j.gfm.nptable=C(j.gfm.nptable).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",j._tag).getRegex(),j.gfm.table=C(j.gfm.table).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",j._tag).getRegex(),j.pedantic=O({},j.normal,{html:C("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",j._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:q,paragraph:C(j.normal._paragraph).replace("hr",j.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",j.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:q,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};I.em=C(I.em).replace(/punctuation/g,I._punctuation).getRegex(),I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,I.autolink=C(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex(),I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,I.tag=C(I.tag).replace("comment",j._comment).replace("attribute",I._attribute).getRegex(),I._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,I._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,I.link=C(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex(),I.reflink=C(I.reflink).replace("label",I._label).getRegex(),I.normal=O({},I),I.pedantic=O({},I.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:C(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:C(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()}),I.gfm=O({},I.normal,{escape:C(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),I.gfm.url=C(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex(),I.breaks=O({},I.gfm,{br:C(I.br).replace("{2,}","*").getRegex(),text:C(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var E={block:j,inline:I},U=i.defaults,D=E.block,P=R,T=z,B=w,F=function(){function e(t){n(this,e),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||U,this.rules=D.normal,this.options.pedantic?this.rules=D.pedantic:this.options.gfm&&(this.rules=D.gfm)}return t(e,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}},{key:"token",value:function(e,t){var n,r,s,i,l,a,o,h,u,c,p,g,f,d,k,m;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){var b=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),b&&"paragraph"===b.type?b.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:P(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(a={type:"table",header:T(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=T(a.cells[p],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),o={type:"list_start",ordered:d=(i=s[2]).length>1,start:d?+i:"",loose:!1},this.tokens.push(o),h=[],n=!1,f=(s=s[0].match(this.rules.item)).length,p=0;p<f;p++)c=(a=s[p]).length,~(a=a.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(c-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+c+"}","gm"),"")),p!==f-1&&(l=D.bullet.exec(s[p+1])[0],(i.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==i)&&(e=s.slice(p+1).join("\n")+e,p=f-1)),r=n||/\n\n(?!\s*$)/.test(a),p!==f-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),r&&(o.loose=!0),m=void 0,(k=/^\[[ xX]\] /.test(a))&&(m=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:k,checked:m,loose:r},h.push(u),this.tokens.push(u),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(o.loose)for(f=h.length,p=0;p<f;p++)h[p].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):B(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),g=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(a={type:"table",header:T(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=T(a.cells[p].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}],[{key:"lex",value:function(t,n){return new e(n).lex(t)}},{key:"rules",get:function(){return D}}]),e}(),M=i.defaults,N=S,X=w,G=function(){function e(t){n(this,e),this.options=t||M}return t(e,[{key:"code",value:function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+X(r,!0)+'">'+(n?e:X(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:X(e,!0))+"</code></pre>"}},{key:"blockquote",value:function(e){return"<blockquote>\n"+e+"</blockquote>\n"}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}},{key:"hr",value:function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}},{key:"list",value:function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}},{key:"listitem",value:function(e){return"<li>"+e+"</li>\n"}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+"</p>\n"}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}},{key:"tablerow",value:function(e){return"<tr>\n"+e+"</tr>\n"}},{key:"tablecell",value:function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,n){if(null===(e=N(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+X(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"}},{key:"image",value:function(e,t,n){if(null===(e=N(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),e}(),V=function(){function e(){n(this,e),this.seen={}}return t(e,[{key:"slug",value:function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}]),e}(),H=i.defaults,J=E.inline,K=L,Q=w,W=function(){function e(t,r){if(n(this,e),this.options=r||H,this.links=t,this.rules=J.normal,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=J.pedantic:this.options.gfm&&(this.options.breaks?this.rules=J.breaks:this.rules=J.gfm)}return t(e,[{key:"output",value:function(t){for(var n,r,s,i,l,a,o="";t;)if(l=this.rules.escape.exec(t))t=t.substring(l[0].length),o+=Q(l[1]);else if(l=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),t=t.substring(l[0].length),o+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):Q(l[0]):l[0]);else if(l=this.rules.link.exec(t)){var h=K(l[2],"()");if(h>-1){var u=(0===l[0].indexOf("!")?5:4)+l[1].length+h;l[2]=l[2].substring(0,h),l[0]=l[0].substring(0,u).trim(),l[3]=""}t=t.substring(l[0].length),this.inLink=!0,s=l[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s))?(s=n[1],i=n[3]):i="":i=l[3]?l[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(l,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((l=this.rules.reflink.exec(t))||(l=this.rules.nolink.exec(t))){if(t=t.substring(l[0].length),n=(l[2]||l[1]).replace(/\s+/g," "),!(n=this.links[n.toLowerCase()])||!n.href){o+=l[0].charAt(0),t=l[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(l,n),this.inLink=!1}else if(l=this.rules.strong.exec(t))t=t.substring(l[0].length),o+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(t))t=t.substring(l[0].length),o+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(t))t=t.substring(l[0].length),o+=this.renderer.codespan(Q(l[2].trim(),!0));else if(l=this.rules.br.exec(t))t=t.substring(l[0].length),o+=this.renderer.br();else if(l=this.rules.del.exec(t))t=t.substring(l[0].length),o+=this.renderer.del(this.output(l[1]));else if(l=this.rules.autolink.exec(t))t=t.substring(l[0].length),s="@"===l[2]?"mailto:"+(r=Q(this.mangle(l[1]))):r=Q(l[1]),o+=this.renderer.link(s,null,r);else if(this.inLink||!(l=this.rules.url.exec(t))){if(l=this.rules.text.exec(t))t=t.substring(l[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):Q(l[0]):l[0]):o+=this.renderer.text(Q(this.smartypants(l[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===l[2])s="mailto:"+(r=Q(l[0]));else{do{a=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(a!==l[0]);r=Q(l[0]),s="www."===l[1]?"http://"+r:r}t=t.substring(l[0].length),o+=this.renderer.link(s,null,r)}return o}},{key:"outputLink",value:function(e,t){var n=t.href,r=t.title?Q(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,Q(e[1]))}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}},{key:"mangle",value:function(e){if(!this.options.mangle)return e;for(var t,n=e.length,r="",s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r}}],[{key:"output",value:function(t,n,r){return new e(n,r).output(t)}},{key:"escapes",value:function(t){return t?t.replace(e.rules._escapes,"$1"):t}},{key:"rules",get:function(){return J}}]),e}(),Y=function(){function e(){n(this,e)}return t(e,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"html",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,n){return""+n}},{key:"image",value:function(e,t,n){return""+n}},{key:"br",value:function(){return""}}]),e}(),ee=i.defaults,te=A,ne=$,re=function(){function e(t){n(this,e),this.tokens=[],this.token=null,this.options=t||ee,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new V}return t(e,[{key:"parse",value:function(e){this.inline=new W(e.links,this.options),this.inlineText=new W(e.links,te({},this.options,{renderer:new Y})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t}},{key:"next",value:function(){return this.token=this.tokens.pop(),this.token}},{key:"peek",value:function(){return this.tokens[this.tokens.length-1]||0}},{key:"parseText",value:function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}},{key:"tok",value:function(){var e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,ne(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":e="";for(var l=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,l,a);case"list_item_start":e="";var o=this.token.loose,h=this.token.checked,u=this.token.task;if(this.token.task)if(o)if("text"===this.peek().type){var c=this.peek();c.text=this.renderer.checkbox(h)+" "+c.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(h)});else e+=this.renderer.checkbox(h);for(;"list_item_end"!==this.next().type;)e+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,u,h);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}}}],[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),e}(),se=A,ie=Z,le=w,ae=i.getDefaults,oe=i.changeDefaults,he=i.defaults;function ue(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){var s=function(){n||(n=t,t=null),t=se({},ue.defaults,t||{}),ie(t);var r,s,i=t.highlight,l=0;try{r=F.lex(e,t)}catch(e){return{v:n(e)}}s=r.length;var a=function(e){if(e)return t.highlight=i,n(e);var s;try{s=re.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return{v:a()};if(delete t.highlight,!s)return{v:a()};for(;l<r.length;l++)!function(e){"code"!==e.type?--s||a():i(e.text,e.lang,(function(t,n){return t?a(t):null==n||n===e.text?--s||a():(e.text=n,e.escaped=!0,void(--s||a()))}))}(r[l]);return{v:void 0}}();if("object"===r(s))return s.v}try{return t=se({},ue.defaults,t||{}),ie(t),re.parse(F.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||ue.defaults).silent)return"<p>An error occurred:</p><pre>"+le(e.message+"",!0)+"</pre>";throw e}}ue.options=ue.setOptions=function(e){return se(ue.defaults,e),oe(ue.defaults),ue},ue.getDefaults=ae,ue.defaults=he,ue.Parser=re,ue.parser=re.parse,ue.Renderer=G,ue.TextRenderer=Y,ue.Lexer=F,ue.lexer=F.lex,ue.InlineLexer=W,ue.inlineLexer=W.output,ue.Slugger=V,ue.parse=ue;var ce=ue;function pe(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var fe=[],de=0;de<256;de++){for(var ke=de,me=0;me<8;me++)ke=1&ke?3988292384^ke>>>1:ke>>>1;fe[de]=ke}var be=function(e){var t,n=-1,r=pe(e);try{for(r.s();!(t=r.n()).done;){var s=t.value;n=n>>>8^fe[255&(n^s)]}}catch(e){r.e(e)}finally{r.f()}return-1^n},xe=function(e,t){for(var n=[];t--;)n.push(255&e),e>>>=8;return n},ye=function(e){return"string"==typeof e?s(e).map((function(e){return e.charCodeAt(0)})):e},ve=function(e){var t,n=[],r=[],i=pe(e);try{for(i.s();!(t=i.n()).done;){var l=t.value,a=l.path,o=l.data,h=ye(o),u=ye(a),c=[10,0,0,0,0,0,0,0,0,0].concat(s(xe(be(h),4)),s(xe(h.length,4)),s(xe(h.length,4)),s(xe(u.length,2)),[0,0]);r.push.apply(r,[80,75,1,2,20,0].concat(s(c),[0,0,0,0,0,0,0,0,0,0],s(xe(n.length,4)),s(u))),n=[].concat(s(n),[80,75,3,4],s(c),s(u),s(h))}}catch(e){i.e(e)}finally{i.f()}return[].concat(s(n),r,[80,75,5,6,0,0,0,0],s(xe(e.length,2)),s(xe(e.length,2)),s(xe(r.length,4)),s(xe(n.length,4)),[0,0])},_e=function(e){return new Blob([Uint8Array.from(ve(e))],{type:"application/zip"})},we=function(e){return Buffer.from(ve(e))},$e=function(e){return("undefined"==typeof Blob?we:_e)(e)},Se=function(e,t){var n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),URL.revokeObjectURL(n),r.remove()};export{Se as d,ce as m,$e as t};
