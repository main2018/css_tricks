(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{224:function(t,e,a){var n=function(t){var e=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(t){return t instanceof i?new i(t.type,n.util.encode(t.content),t.alias):Array.isArray(t)?t.map(n.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++a}),t.__id},clone:function t(e,a){var i,s,o=n.util.type(e);switch(a=a||{},o){case"Object":if(s=n.util.objId(e),a[s])return a[s];for(var r in i={},a[s]=i,e)e.hasOwnProperty(r)&&(i[r]=t(e[r],a));return i;case"Array":return s=n.util.objId(e),a[s]?a[s]:(i=[],a[s]=i,e.forEach((function(e,n){i[n]=t(e,a)})),i);default:return e}}},languages:{extend:function(t,e){var a=n.util.clone(n.languages[t]);for(var i in e)a[i]=e[i];return a},insertBefore:function(t,e,a,i){var s=(i=i||n.languages)[t],o={};for(var r in s)if(s.hasOwnProperty(r)){if(r==e)for(var c in a)a.hasOwnProperty(c)&&(o[c]=a[c]);a.hasOwnProperty(r)||(o[r]=s[r])}var l=i[t];return i[t]=o,n.languages.DFS(n.languages,(function(e,a){a===l&&e!=t&&(this[e]=o)})),o},DFS:function t(e,a,i,s){s=s||{};var o=n.util.objId;for(var r in e)if(e.hasOwnProperty(r)){a.call(e,r,e[r],i||r);var c=e[r],l=n.util.type(c);"Object"!==l||s[o(c)]?"Array"!==l||s[o(c)]||(s[o(c)]=!0,t(c,a,r,s)):(s[o(c)]=!0,t(c,a,null,s))}}},plugins:{},highlightAll:function(t,e){n.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var i={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i);for(var s,o=t.querySelectorAll(i.selector),r=0;s=o[r++];)n.highlightElement(s,!0===e,i.callback)},highlightElement:function(a,i,s){for(var o,r="none",c=a;c&&!e.test(c.className);)c=c.parentNode;c&&(r=(c.className.match(e)||[,"none"])[1].toLowerCase(),o=n.languages[r]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,a.parentNode&&(c=a.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+r));var l={element:a,language:r,grammar:o,code:a.textContent},d=function(t){l.highlightedCode=t,n.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,n.hooks.run("after-highlight",l),n.hooks.run("complete",l),s&&s.call(l.element)};if(n.hooks.run("before-sanity-check",l),l.code)if(n.hooks.run("before-highlight",l),l.grammar)if(i&&t.Worker){var p=new Worker(n.filename);p.onmessage=function(t){d(t.data)},p.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(n.highlight(l.code,l.grammar,l.language));else d(n.util.encode(l.code));else n.hooks.run("complete",l)},highlight:function(t,e,a){var s={code:t,grammar:e,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),i.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(t,e,a,s,o,r,c){for(var l in a)if(a.hasOwnProperty(l)&&a[l]){if(l==c)return;var d=a[l];d="Array"===n.util.type(d)?d:[d];for(var p=0;p<d.length;++p){var h=d[p],u=h.inside,g=!!h.lookbehind,f=!!h.greedy,m=0,x=h.alias;if(f&&!h.pattern.global){var b=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+"g")}h=h.pattern||h;for(var v=s,y=o;v<e.length;y+=e[v].length,++v){var w=e[v];if(e.length>t.length)return;if(!(w instanceof i)){if(f&&v!=e.length-1){if(h.lastIndex=y,!(S=h.exec(t)))break;for(var k=S.index+(g?S[1].length:0),F=S.index+S[0].length,A=v,_=y,C=e.length;A<C&&(_<F||!e[A].type&&!e[A-1].greedy);++A)k>=(_+=e[A].length)&&(++v,y=_);if(e[v]instanceof i)continue;$=A-v,w=t.slice(y,_),S.index-=y}else{h.lastIndex=0;var S=h.exec(w),$=1}if(S){g&&(m=S[1]?S[1].length:0);F=(k=S.index+m)+(S=S[0].slice(m)).length;var P=w.slice(0,k),j=w.slice(F),z=[v,$];P&&(++v,y+=P.length,z.push(P));var E=new i(l,u?n.tokenize(S,u):S,x,S,f);if(z.push(E),j&&z.push(j),Array.prototype.splice.apply(e,z),1!=$&&n.matchGrammar(t,e,a,v,y,!0,l),r)break}else if(r)break}}}}},tokenize:function(t,e){var a=[t],i=e.rest;if(i){for(var s in i)e[s]=i[s];delete e.rest}return n.matchGrammar(t,a,e,0,0,!1),a},hooks:{all:{},add:function(t,e){var a=n.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=n.hooks.all[t];if(a&&a.length)for(var i,s=0;i=a[s++];)i(e)}},Token:i};function i(t,e,a,n,i){this.type=t,this.content=e,this.alias=a,this.length=0|(n||"").length,this.greedy=!!i}if(t.Prism=n,i.stringify=function(t,e){if("string"==typeof t)return t;if(Array.isArray(t))return t.map((function(t){return i.stringify(t,e)})).join("");var a={type:t.type,content:i.stringify(t.content,e),tag:"span",classes:["token",t.type],attributes:{},language:e};if(t.alias){var s=Array.isArray(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var o=Object.keys(a.attributes).map((function(t){return t+'="'+(a.attributes[t]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",(function(e){var a=JSON.parse(e.data),i=a.language,s=a.code,o=a.immediateClose;t.postMessage(n.highlight(s,n.languages[i],i)),o&&t.close()}),!1),n):n;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(n.filename=s.src,n.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(t,e){var a={};a["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[e]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+e]={pattern:/[\s\S]+/,inside:n.languages[e]};var s={};s[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,t),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",s)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(t){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+e.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var a=t.languages.markup;a&&(a.tag.addInlined("style","css"),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(t){t=t||document;var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(t.querySelectorAll("pre[data-src]")).forEach((function(t){if(!t.hasAttribute("data-src-loaded")){for(var a,i=t.getAttribute("data-src"),s=t,o=/\blang(?:uage)?-([\w-]+)\b/i;s&&!o.test(s.className);)s=s.parentNode;if(s&&(a=(t.className.match(o)||[,""])[1]),!a){var r=(i.match(/\.(\w+)$/)||[,""])[1];a=e[r]||r}var c=document.createElement("code");c.className="language-"+a,t.textContent="",c.textContent="Loading…",t.appendChild(c);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,n.highlightElement(c),t.setAttribute("data-src-loaded","")):l.status>=400?c.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:c.textContent="✖ Error: File does not exist or is empty")},l.send(null)}})),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",(function(t){var e=t.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var a=e.getAttribute("data-src"),n=document.createElement("a");return n.textContent=e.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))},306:function(t,e,a){},463:function(t,e,a){"use strict";var n=a(306);a.n(n).a},556:function(t,e,a){"use strict";a.r(e);var n=a(224),i=a.n(n),s={name:"hollow-compose-three-circles",data:function(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0,composePositionH:"right",composePositionV:"bottom",composePositionsHorizontal:["left","right"],composePositionsVertical:["top","bottom"]}},computed:{style:function(){var t="";switch(this.position){case"horizontal":switch(this.composePositionH){case"right":t="background: radial-gradient(circle at right top, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) top left / ").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) bottom left /").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.distance,"px 0/").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.distance,"px ").concat(this.height/2,"px /").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at ").concat(this.radio,"px ").concat(this.height/2,"px, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.width-this.radio,"px 0/").concat(this.radio,"px ").concat(this.height,"px no-repeat;");break;case"left":t="background: radial-gradient(circle at right top, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.radio,"px 0 / ").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at right bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.radio,"px ").concat(this.height/2,"px /").concat(this.distance,"px 51% no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) top right/").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right /").concat(this.width-this.distance-this.radio,"px 51% no-repeat,\n    radial-gradient(circle at 0 ").concat(this.height/2,"px, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left/").concat(this.radio,"px ").concat(this.height,"px no-repeat;")}return".hollow-compose-three-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  ").concat(t,"\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-compose-three-circles::after {\n  content: '';\n  height: ".concat(this.height-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: ").concat("left"===this.composePositionH?this.distance+this.radio:this.distance,"px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}"):"","\n");case"vertical":switch(this.composePositionV){case"top":t="background: radial-gradient(circle at right bottom, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.width/2,"px ").concat(this.radio,"px / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) 0 ").concat(this.radio,"px / 51% ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom right / 51% ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom left / 51% ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at ").concat(this.width/2,"px 0, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left/").concat(this.width,"px ").concat(this.radio,"px no-repeat;");break;case"bottom":t="background: radial-gradient(circle at right bottom, transparent ".concat(this.radio,"px, ").concat(this.color1," 0) ").concat(this.width/2-2,"px 0 / ").concat(this.width/2+2,"px ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at left bottom, transparent ").concat(this.radio,"px, ").concat(this.color1," 0) top left / ").concat(this.width/2,"px ").concat(this.distance,"px no-repeat,\n    radial-gradient(circle at right top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) ").concat(this.width/2-2,"px ").concat(this.distance,"px / ").concat(this.width/2+2,"px ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at left top, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) 0 ").concat(this.distance,"px / ").concat(this.width/2,"px ").concat(this.height-this.distance-this.radio,"px no-repeat,\n    radial-gradient(circle at ").concat(this.width/2,"px ").concat(this.radio,"px, transparent ").concat(this.radio,"px, ").concat(this.color2," 0) bottom left/").concat(this.width,"px ").concat(this.radio,"px no-repeat;")}return".hollow-compose-three-circles {\n  width: ".concat(this.width,"px;\n  height: ").concat(this.height,"px;\n  position: relative;\n  ").concat(t,"\n   ").concat(this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":"","\n}\n\n").concat(this.dashed?".hollow-compose-three-circles::after {\n  content: '';\n  width: ".concat(this.width-2*this.radio,"px;\n  border: 1px dashed #fff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: ").concat("top"===this.composePositionV?this.distance+this.radio:this.distance,"px;\n  margin: auto;\n}"):"","\n")}}},watch:{style:function(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle:function(){this.$refs.css.innerHTML=i.a.highlight(this.style,i.a.languages.css)},setStyleToBody:function(){document.querySelector("#hollow-compose1").innerHTML=this.style}},mounted:function(){var t=this,e=document.createElement("style");e.setAttribute("id","hollow-compose1"),document.head.appendChild(e),setTimeout((function(){t.setStyle(),t.setStyleToBody()}))}},o=(a(463),a(2)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("位置：")]),t._v(" "),t._l(t.positions,(function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})}))],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("组合位置：")]),t._v(" "),t._l(t.composePositionsHorizontal,(function(e,n){return"horizontal"===t.position?a("el-radio",{key:n,attrs:{label:e},model:{value:t.composePositionH,callback:function(e){t.composePositionH=e},expression:"composePositionH"}}):t._e()})),t._v(" "),t._l(t.composePositionsVertical,(function(e,n){return"vertical"===t.position?a("el-radio",{key:n,attrs:{label:e},model:{value:t.composePositionV,callback:function(e){t.composePositionV=e},expression:"composePositionV"}}):t._e()}))],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("宽度：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:100,max:500,label:"宽度"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("长度：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:50,max:500,label:"长度"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("距离：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:40,max:200,label:"距离"},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("半径：")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:1,max:20,label:"半径"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}})],1),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("虚线：")]),t._v(" "),a("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.dashed,callback:function(e){t.dashed=e},expression:"dashed"}}),t._v(" "),a("span",{staticStyle:{width:"100px"}}),t._v(" "),a("span",{staticClass:"key"},[t._v("阴影：")]),t._v(" "),a("el-switch",{attrs:{"active-color":"#00adb5"},model:{value:t.shadow,callback:function(e){t.shadow=e},expression:"shadow"}})],1),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"css"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warpper"},[e("div",{staticClass:"hollow-compose-three-circles"})])}],!1,null,"15baa41c",null);e.default=r.exports}}]);