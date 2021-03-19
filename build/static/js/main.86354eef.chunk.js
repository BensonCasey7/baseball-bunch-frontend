(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(16),r=a.n(n),b=(a(22),a(8)),j=a(2),l=a(7),i=a(0);var h=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(j.f)(),a=Object(c.useState)(e||""),s=Object(l.a)(a,2),n=s[0],r=s[1];return Object(i.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(n))},children:[Object(i.jsx)("input",{type:"text",value:n,className:"navbar__search-input",placeholder:"Enter a player",onChange:function(e){r(e.target.value)}}),Object(i.jsx)("input",{type:"submit",value:"Search"})]})};var d=function(){return Object(i.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(i.jsx)("div",{className:"page-wrapper__content",children:Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)(b.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(i.jsx)(h,{})]})})})};var o=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),b=r[0],j=r[1];return Object(c.useEffect)((function(){fetch("https://cs411baseball.web.illinois.edu/api/content").then((function(e){return e.json()})).then((function(e){return e.shift(),s(e),j(!0),e})).catch((function(e){return e}))}),[]),Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)("h2",{children:"Stage 3 Demo"}),b&&Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"table__row table__row--head",children:[Object(i.jsx)("th",{className:"table__data",children:"fracnhId"}),Object(i.jsx)("th",{className:"table__data",children:"franchName"}),Object(i.jsx)("th",{className:"table__data",children:"active"}),Object(i.jsx)("th",{className:"table__data",children:"NAassoc"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsxs)("tr",{className:"table__row",children:[Object(i.jsx)("td",{className:"table__data",children:e["COL 1"]}),Object(i.jsx)("td",{className:"table__data",children:e["COL 2"]}),Object(i.jsx)("td",{className:"table__data",children:e["COL 3"]}),Object(i.jsx)("td",{className:"table__data",children:e["COL 4"]})]},e["COL 1"])}))})]})]})};var O=function(){return Object(i.jsx)("div",{className:"page",children:Object(i.jsx)("h1",{children:"Home"})})};function u(){return{players:[{name:"Kris Bryant",id:"bryankr01"}]}}var p=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(c.useState)({}),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!1),h=Object(l.a)(r,2),d=h[0],o=h[1];return Object(c.useEffect)((function(){n(u),o(!0)}),[n]),Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)("h1",{children:"Search"}),Object(i.jsxs)("h3",{children:['Theoretical search results for "',Object(i.jsxs)("code",{children:[e,'"']})]}),d&&Object(i.jsx)("div",{children:s.players.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(b.b,{to:"/players/".concat(e.id),children:e.name})},e.id)}))})]})};function m(){return{playerID:"bryankr01",nameFirst:"Kris",nameLast:"Bryant",nameGiven:"Kris Bryant",weight:"230",height:"77",bats:"R",throws:"R",seasons:[{year:"2018",age:"26",team:"CHC",g:"102",pa:"457",ab:"389",r:"59",h:"106",d:"28",t:"3",hr:"13",rbi:"52",sb:"2",cs:"4",bb:"48",so:"107",ba:".272",obp:".374",slg:".460",ops:".834",fantasyPts:"250"},{year:"2019",age:"27",team:"CHC",g:"147",pa:"634",ab:"543",r:"108",h:"153",d:"35",t:"1",hr:"31",rbi:"77",sb:"4",cs:"0",bb:"74",so:"145",ba:".282",obp:".382",slg:".521",ops:".903",fantasyPts:"350"}]}}var x=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),b=r[0],h=r[1],d=Object(j.h)().id;return Object(c.useEffect)((function(){s(m),h(!0)}),[s]),Object(i.jsxs)("div",{className:"page",children:[Object(i.jsxs)("div",{children:["Theoretically would find player with ID: ",d]}),b&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:a.nameGiven}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{className:"table__row table__row--head",children:Object.values({year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}).map((function(e){return Object(i.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(i.jsx)("tbody",{children:a.seasons.map((function(e){return Object(i.jsx)("tr",{className:"table__row",children:Object.keys({year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}).map((function(t){return Object(i.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})]})]})};var f=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"404 Not Found"}),Object(i.jsx)(b.b,{to:"/",children:"Home"})]})};a(29);var _=function(){return Object(i.jsxs)(b.a,{children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{className:"page-wrapper",children:Object(i.jsxs)("div",{className:"page-wrapper__content",children:[Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",exact:!0,component:O}),Object(i.jsx)(j.a,{path:"/search",children:Object(i.jsx)(p,{})}),Object(i.jsx)(j.a,{path:"/players/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(j.a,{component:f})]}),Object(i.jsx)(o,{})]})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.86354eef.chunk.js.map