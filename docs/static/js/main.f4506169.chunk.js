(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),o=(a(14),a(1)),l=a(8),u=function(e){var t=e.setCategory,a=e.category,c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],s=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>=4&&(t([u].concat(Object(l.a)(a))),s(""))}},r.a.createElement("input",{className:"input-category",type:"text",value:u,onChange:function(e){s(e.target.value)}}))},s=function(e){e.id;var t=e.title,a=e.url;return console.log("ITEMREP----"),r.a.createElement("div",{className:"grid-item animate__animated animate__fadeInDown"},r.a.createElement("p",null,t),r.a.createElement("img",{className:"gif-item",src:a,alt:t}))},m=a(4),d=a.n(m),f=a(7),g=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=u2RqAJR2PiSSbjQspxIjAtvycM36BIBW&q=".concat(encodeURI(t),"&limit=5"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(a(16),function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){g(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),2e3)}))}),[e]),r}(t),c=a.loading,i=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section-gif"},r.a.createElement("h2",{className:"animate__animated animate__fadeInDown"},t),r.a.createElement("hr",null),c&&r.a.createElement("p",null,"Loading")),r.a.createElement("div",{className:"grid-gif"},i.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e,{gogo:e.id}))}))))}),v=function(){var e=Object(n.useState)(["Anime"]),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},r.a.createElement("h2",null,"GIFT SEARCH APP"),r.a.createElement(u,{setCategory:c,category:a})),r.a.createElement("div",{className:"body-container"},r.a.createElement("ol",null,a.map((function(e,t){return r.a.createElement(p,{key:e,category:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4506169.chunk.js.map