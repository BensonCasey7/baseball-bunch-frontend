(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(16),s=c.n(r),j=(c(22),c(7)),i=c(10),b=c(2),h=c(1);var l=function(){var e=new URLSearchParams(Object(b.g)().search).get("name"),t=Object(b.f)(),c=Object(n.useState)(e),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(h.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(r))},children:[Object(h.jsx)("input",{type:"text",value:r,className:"navbar__search-input",placeholder:"Enter a player",onChange:function(e){s(e.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Search"})]})};var d=function(){return Object(h.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(h.jsx)("div",{className:"page-wrapper__content",children:Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)(j.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(h.jsx)(l,{})]})})})};var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),j=s[0],b=s[1];return Object(n.useEffect)((function(){fetch("https://cs411baseball.web.illinois.edu/api/content").then((function(e){return e.json()})).then((function(e){return e.shift(),a(e),b(!0),e})).catch((function(e){return e}))}),[]),Object(h.jsx)("div",{className:"page",children:j&&Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"fracnhId"}),Object(h.jsx)("th",{children:"franchName"}),Object(h.jsx)("th",{children:"active"}),Object(h.jsx)("th",{children:"NAassoc"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e["COL 1"]}),Object(h.jsx)("td",{children:e["COL 2"]}),Object(h.jsx)("td",{children:e["COL 3"]}),Object(h.jsx)("td",{children:e["COL 4"]})]},e["COL 1"])}))})]})})};var o=function(){var e=new URLSearchParams(Object(b.g)().search).get("name");return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsxs)("h3",{children:['Search results for "',Object(h.jsxs)("code",{children:[e,'"']})]}),Object(h.jsx)("h5",{children:"Not Yet Implemented"})]})};var u=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"404 Not Found"}),Object(h.jsx)(j.b,{to:"/",children:"Home"})]})};c(29);var x=function(){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(d,{}),Object(h.jsx)("div",{className:"page-wrapper",children:Object(h.jsx)("div",{className:"page-wrapper__content",children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,component:O}),Object(h.jsx)(b.a,{path:"/search",children:Object(h.jsx)(o,{})}),Object(h.jsx)(b.a,{component:u})]})})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.e1dc1bc0.chunk.js.map