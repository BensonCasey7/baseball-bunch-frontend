(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),i=(a(22),a(4)),b=a(7),j=a(2),l=a(0);var h=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(j.f)(),a=Object(c.useState)(e||""),n=Object(i.a)(a,2),s=n[0],r=n[1];return Object(l.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(s))},children:[Object(l.jsx)("input",{type:"text",value:s,className:"navbar__search-input",placeholder:"Enter a player",onChange:function(e){r(e.target.value)}}),Object(l.jsx)("input",{type:"submit",value:"Search"})]})};var d=function(e){var t=Object(j.f)();return Object(l.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(l.jsx)("div",{className:"page-wrapper__content",children:Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)("div",{className:"navbar__group",children:[Object(l.jsx)(b.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(l.jsx)(h,{})]}),Object(l.jsx)("div",{className:"navbar__group",children:e.signedIn?Object(l.jsx)("button",{onClick:function(){e.setSignedIn(!1),t.push("/")},children:"Sign Out"}):Object(l.jsx)(b.b,{to:"/signin",className:"navbar__signin",children:"Sign In"})})]})})})};var o=function(){return Object(l.jsxs)("div",{className:"loading",children:[Object(l.jsxs)("div",{className:"loading--ripple",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]}),Object(l.jsxs)("div",{className:"loading--ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})};var O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),b=r[0],j=r[1];return Object(c.useEffect)((function(){fetch("https://cs411baseball.web.illinois.edu/api/content").then((function(e){return e.json()})).then((function(e){return e.shift(),n(e),j(!0),e})).catch((function(e){return e}))}),[]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h2",{children:"Stage 3 Demo"}),b?Object(l.jsx)("div",{className:"table-container",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table__row table__row--head",children:[Object(l.jsx)("th",{className:"table__data",children:"fracnhId"}),Object(l.jsx)("th",{className:"table__data",children:"franchName"}),Object(l.jsx)("th",{className:"table__data",children:"active"}),Object(l.jsx)("th",{className:"table__data",children:"NAassoc"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){return Object(l.jsxs)("tr",{className:"table__row",children:[Object(l.jsx)("td",{className:"table__data",children:e["COL 1"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 2"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 3"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 4"]})]},e["COL 1"])}))})]})}):Object(l.jsx)(o,{})]})};var u=function(){return Object(l.jsx)("div",{className:"page",children:Object(l.jsx)("h1",{children:"Home"})})};var x=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function p(){return{players:[{name:"Kris Bryant",id:"bryankr01"},{name:"Jacob deGrom",id:"degroja01"}]}}var m=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(c.useState)({}),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),h=Object(i.a)(r,2),d=h[0],O=h[1];return Object(c.useEffect)((function(){x(1e3).then((function(){s(p),O(!0)}))}),[s]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Search"}),Object(l.jsxs)("h3",{children:['Theoretical search results for "',Object(l.jsxs)("code",{children:[e,'"']})]}),d?Object(l.jsx)("div",{children:n.players.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(b.b,{to:"/players/".concat(e.id),children:e.name})},e.id)}))}):Object(l.jsx)(o,{})]})};var v=function(e){return"hitter"===e?{year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}:{year:"Year",age:"Age",team:"Team",w:"W",l:"L",era:"ERA",g:"G",gs:"GS",cg:"CG",sho:"SHO",sv:"SV",h:"H",r:"R",er:"ER",hr:"HR",bb:"BB",ibb:"IBB",so:"SO",hbp:"HBP",fantasyPts:"Fantasy Points"}};var g=function(e){var t=v(e.player.type);return Object(l.jsx)("div",{className:"table-container",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{className:"table__row table__row--head",children:Object.values(t).map((function(e){return Object(l.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(l.jsx)("tbody",{children:e.player.seasons.map((function(e){return Object(l.jsx)("tr",{className:"table__row",children:Object.keys(t).map((function(t){return Object(l.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})};var f=function(e){return"bryankr01"===e?{playerID:"bryankr01",nameFirst:"Kris",nameLast:"Bryant",nameGiven:"Kris Bryant",weight:"230",height:"77",bats:"R",throws:"R",type:"hitter",seasons:[{year:"2018",age:"26",team:"CHC",g:"102",pa:"457",ab:"389",r:"59",h:"106",d:"28",t:"3",hr:"13",rbi:"52",sb:"2",cs:"4",bb:"48",so:"107",ba:".272",obp:".374",slg:".460",ops:".834",fantasyPts:"250"},{year:"2019",age:"27",team:"CHC",g:"147",pa:"634",ab:"543",r:"108",h:"153",d:"35",t:"1",hr:"31",rbi:"77",sb:"4",cs:"0",bb:"74",so:"145",ba:".282",obp:".382",slg:".521",ops:".903",fantasyPts:"350"}]}:"degroja01"===e?{playerID:"degroja01",nameFirst:"Jacob",nameLast:"deGrom",nameGiven:"Jacob deGrom",weight:"180",height:"76",bats:"L",throws:"R",type:"pitcher",seasons:[{year:"2018",age:"30",team:"NYM",w:"10",l:"9",era:"1.70",g:"32",gs:"32",cg:"1",sho:"0",sv:"0",h:"152",r:"48",er:"41",hr:"10",bb:"46",ibb:"3",so:"269",hbp:"5",fantasyPts:"450"},{year:"2019",age:"31",team:"NYM",w:"11",l:"8",era:"2.43",g:"32",gs:"32",cg:"0",sho:"0",sv:"0",h:"154",r:"59",er:"55",hr:"19",bb:"44",ibb:"1",so:"255",hbp:"7",fantasyPts:"400"}]}:null};var _=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),b=r[0],h=r[1],d=Object(j.h)().id;return Object(c.useEffect)((function(){x(1e3).then((function(){var e=f(d);e&&(n(e),h(!0))}))}),[n,d]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)("div",{children:["Theoretically would find player with ID: ",d]}),b?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:a.nameGiven}),Object(l.jsx)(g,{player:a})]}):Object(l.jsx)(o,{})]})};var y=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),b=Object(i.a)(r,2),h=b[0],d=b[1],O=Object(c.useState)(!1),u=Object(i.a)(O,2),p=u[0],m=u[1],v=Object(j.f)();return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:n,placeholder:"Username",onChange:function(e){s(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:"*".repeat(h.length),placeholder:"Password",onChange:function(e){d(e.target.value)}})}),"Not yet functional.",p?Object(l.jsx)(o,{}):Object(l.jsx)("button",{onClick:function(){m(!0),x(1e3).then((function(){e.setSignedIn(!0),v.push("/")}))},children:"Simulate Sign In"})]})};var N=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"404 Not Found"}),Object(l.jsx)(b.b,{to:"/",children:"Home"})]})};a(29);var S=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(b.a,{children:[Object(l.jsx)(d,{signedIn:a,setSignedIn:n}),Object(l.jsx)("div",{className:"page-wrapper",children:Object(l.jsxs)("div",{className:"page-wrapper__content",children:[Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(j.a,{path:"/signin",exact:!0,children:Object(l.jsx)(y,{signedIn:a,setSignedIn:n})}),Object(l.jsx)(j.a,{path:"/search",children:Object(l.jsx)(m,{})}),Object(l.jsx)(j.a,{path:"/players/:id",children:Object(l.jsx)(_,{})}),Object(l.jsx)(j.a,{component:N})]}),Object(l.jsx)(O,{})]})})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.d4f4dced.chunk.js.map