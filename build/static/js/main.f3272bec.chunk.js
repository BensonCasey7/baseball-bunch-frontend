(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{25:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(18),r=a.n(s),i=(a(25),a(2)),j=a(4),b=a(3),l=a(0);var o=function(){var e=new URLSearchParams(Object(b.g)().search).get("name"),t=Object(b.f)(),a=Object(n.useState)(e||""),c=Object(i.a)(a,2),s=c[0],r=c[1];return Object(l.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(s))},children:[Object(l.jsx)("input",{type:"text",value:s,className:"navbar__search-input",placeholder:"Enter a player",onChange:function(e){r(e.target.value)}}),Object(l.jsx)("input",{type:"submit",value:"Search",className:"button"})]})};var d=function(e){var t=Object(b.f)(),a="button button--midnight-blue ".concat(e.css);return Object(l.jsx)("div",{children:e.signedIn?Object(l.jsx)("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.setSignedIn(!1),t.push("/")},className:a,children:"Sign Out"}):Object(l.jsx)(j.b,{to:"/signin",className:a,children:"Sign In"})})},h=a(20);var u=function(e){return Object(l.jsx)(l.Fragment,{children:e.signedIn?Object(l.jsxs)("div",{className:"navbar__user-actions",children:[Object(l.jsxs)("div",{className:"navbar__user",children:[localStorage.getItem("username"),Object(l.jsx)(h.a,{})]}),Object(l.jsx)("div",{className:"navbar__dropdown",children:Object(l.jsx)(d,{signedIn:e.signedIn,setSignedIn:e.setSignedIn,css:"button--understated"})})]}):Object(l.jsx)(d,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})};var O=function(e){return Object(l.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(l.jsxs)("div",{className:"page-wrapper__content",children:[Object(l.jsxs)("div",{className:"navbar navbar--mobile",children:[Object(l.jsx)("div",{className:"navbar__group",children:Object(l.jsx)(j.b,{to:"/",className:"navbar__title",children:"TBB"})}),Object(l.jsx)("div",{className:"navbar__group",children:Object(l.jsx)(o,{})}),Object(l.jsx)("div",{className:"navbar__group",children:Object(l.jsx)(d,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]}),Object(l.jsxs)("div",{className:"navbar navbar--desktop",children:[Object(l.jsxs)("div",{className:"navbar__group",children:[Object(l.jsx)(j.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(l.jsx)(o,{})]}),Object(l.jsx)("div",{className:"navbar__group",children:Object(l.jsx)(u,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]})]})})};var x=function(){return Object(l.jsxs)("div",{className:"loading",children:[Object(l.jsxs)("div",{className:"loading--ripple",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]}),Object(l.jsxs)("div",{className:"loading--ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),j=r[0],b=r[1];return Object(n.useEffect)((function(){fetch("https://cs411baseball.web.illinois.edu/api/content").then((function(e){return e.json()})).then((function(e){return e.shift(),c(e),b(!0),e})).catch((function(e){return e}))}),[]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h2",{children:"Stage 3 Demo"}),j?Object(l.jsx)("div",{className:"table-container",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table__row table__row--head",children:[Object(l.jsx)("th",{className:"table__data",children:"fracnhId"}),Object(l.jsx)("th",{className:"table__data",children:"franchName"}),Object(l.jsx)("th",{className:"table__data",children:"active"}),Object(l.jsx)("th",{className:"table__data",children:"NAassoc"})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){return Object(l.jsxs)("tr",{className:"table__row",children:[Object(l.jsx)("td",{className:"table__data",children:e["COL 1"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 2"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 3"]}),Object(l.jsx)("td",{className:"table__data",children:e["COL 4"]})]},e["COL 1"])}))})]})}):Object(l.jsx)(x,{})]})};var v=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)(j.b,{to:"/restricted",children:"This page is behind a login wall"})]})};var g=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function m(){return{players:[{name:"Kris Bryant",id:"bryankr01"},{name:"Jacob deGrom",id:"degroja01"}]}}var f=function(){var e=new URLSearchParams(Object(b.g)().search).get("name"),t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),d=o[0],h=o[1];return Object(n.useEffect)((function(){g(1e3).then((function(){s(m),h(!0)}))}),[s]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Search"}),Object(l.jsxs)("h3",{children:['Theoretical search results for "',Object(l.jsxs)("code",{children:[e,'"']})]}),d?Object(l.jsx)("div",{children:c.players.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(j.b,{to:"/players/".concat(e.id),children:e.name})},e.id)}))}):Object(l.jsx)(x,{})]})};var S=function(e){return"hitter"===e?{year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}:{year:"Year",age:"Age",team:"Team",w:"W",l:"L",era:"ERA",g:"G",gs:"GS",cg:"CG",sho:"SHO",sv:"SV",h:"H",r:"R",er:"ER",hr:"HR",bb:"BB",ibb:"IBB",so:"SO",hbp:"HBP",fantasyPts:"Fantasy Points"}};var y=function(e){var t=S(e.player.type);return Object(l.jsx)("div",{className:"table-container",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{className:"table__row table__row--head",children:Object.values(t).map((function(e){return Object(l.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(l.jsx)("tbody",{children:e.player.seasons.map((function(e){return Object(l.jsx)("tr",{className:"table__row",children:Object.keys(t).map((function(t){return Object(l.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})};var N=function(e){return"bryankr01"===e?{playerID:"bryankr01",nameFirst:"Kris",nameLast:"Bryant",nameGiven:"Kris Bryant",weight:"230",height:"77",bats:"R",throws:"R",type:"hitter",seasons:[{year:"2018",age:"26",team:"CHC",g:"102",pa:"457",ab:"389",r:"59",h:"106",d:"28",t:"3",hr:"13",rbi:"52",sb:"2",cs:"4",bb:"48",so:"107",ba:".272",obp:".374",slg:".460",ops:".834",fantasyPts:"250"},{year:"2019",age:"27",team:"CHC",g:"147",pa:"634",ab:"543",r:"108",h:"153",d:"35",t:"1",hr:"31",rbi:"77",sb:"4",cs:"0",bb:"74",so:"145",ba:".282",obp:".382",slg:".521",ops:".903",fantasyPts:"350"}]}:"degroja01"===e?{playerID:"degroja01",nameFirst:"Jacob",nameLast:"deGrom",nameGiven:"Jacob deGrom",weight:"180",height:"76",bats:"L",throws:"R",type:"pitcher",seasons:[{year:"2018",age:"30",team:"NYM",w:"10",l:"9",era:"1.70",g:"32",gs:"32",cg:"1",sho:"0",sv:"0",h:"152",r:"48",er:"41",hr:"10",bb:"46",ibb:"3",so:"269",hbp:"5",fantasyPts:"450"},{year:"2019",age:"31",team:"NYM",w:"11",l:"8",era:"2.43",g:"32",gs:"32",cg:"0",sho:"0",sv:"0",h:"154",r:"59",er:"55",hr:"19",bb:"44",ibb:"1",so:"255",hbp:"7",fantasyPts:"400"}]}:null};var _=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),j=r[0],o=r[1],d=Object(b.h)().id;return Object(n.useEffect)((function(){g(1e3).then((function(){var e=N(d);e&&(c(e),o(!0))}))}),[c,d]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)("div",{children:["Theoretically would find player with ID: ",d]}),j?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:a.nameGiven}),Object(l.jsx)(y,{player:a})]}):Object(l.jsx)(x,{})]})},w=a(6),I=a.n(w),k=a(10);var B=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),d=o[0],h=o[1],u=Object(n.useState)(!1),O=Object(i.a)(u,2),p=O[0],v=O[1],g=Object(n.useState)(!!e.authError),m=Object(i.a)(g,2),f=m[0],S=m[1],y=Object(n.useState)(e.authError),N=Object(i.a)(y,2),_=N[0],w=N[1],B=Object(b.f)(),C=function(){var t=Object(k.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),v(!0),n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(c,":").concat(d)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(k.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",c),e.setSignedIn(!0),B.push("/"),t.next=11;break;case 10:401===a.status?(S(!0),w("Wrong username or password"),v(!1)):(S(!0),w("Something went wrong. Try again later"),v(!1));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("form",{onSubmit:C,children:[Object(l.jsx)("h1",{children:"Sign In"}),f?Object(l.jsx)("div",{className:"alert--error",children:_}):Object(l.jsx)("div",{}),Object(l.jsx)("div",{children:"Username"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:c,placeholder:"Username",onChange:function(e){s(e.target.value)}})}),Object(l.jsx)("div",{children:"Password"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:"*".repeat(d.length),placeholder:"Password",onChange:function(e){h(e.target.value)}})}),Object(l.jsxs)("div",{children:["Don't have an account? ",Object(l.jsx)(j.b,{to:"/signup",children:"Sign Up"})]}),Object(l.jsx)("div",{children:"Not yet functional."}),p?Object(l.jsx)(x,{}):Object(l.jsx)("input",{type:"submit",value:"Sign In",className:"button"})]})})};var C=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),d=o[0],h=o[1],u=Object(n.useState)(""),O=Object(i.a)(u,2),p=O[0],v=O[1],g=Object(n.useState)(!1),m=Object(i.a)(g,2),f=m[0],S=m[1],y=Object(n.useState)(!!e.authError),N=Object(i.a)(y,2),_=N[0],w=N[1],B=Object(n.useState)(e.authError),C=Object(i.a)(B,2),P=C[0],E=C[1],T=Object(b.f)(),A=function(){var t=Object(k.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),S(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emailAddress:d,username:c,password:p})},fetch("https://cs411baseball.web.illinois.edu/api/users",n).then(function(){var t=Object(k.a)(I.a.mark((function t(a){var n,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(c,":").concat(p)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(k.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",c),e.setSignedIn(!0),T.push("/"),t.next=11;break;case 10:a.status,w(!0),S(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 5:return t.next=7,a.json();case 7:s=t.sent,w(!0),E(s.message),S(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Create an Account"}),_?Object(l.jsx)("div",{children:P}):Object(l.jsx)("div",{}),Object(l.jsx)("div",{children:"Email"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:d,placeholder:"Email",onChange:function(e){h(e.target.value)}})}),Object(l.jsx)("div",{children:"Username"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:c,placeholder:"Username",onChange:function(e){s(e.target.value)}})}),Object(l.jsx)("div",{children:"Password"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:"*".repeat(p.length),placeholder:"Password",onChange:function(e){v(e.target.value)}})}),Object(l.jsxs)("div",{children:["Already have an account? ",Object(l.jsx)(j.b,{to:"/signin",children:"Sign In"})]}),Object(l.jsx)("div",{children:"Not yet functional."}),f?Object(l.jsx)(x,{}):Object(l.jsx)("button",{className:"button",onClick:A,children:"Create Account"})]})};var P=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),o=j[0],d=j[1],h=Object(b.f)();return Object(n.useEffect)((function(){if(e.signedIn){if(!o){var t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/players/bryankr01",t).then(function(){var e=Object(k.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,s(a),d(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}else h.push("/signin")})),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"Restricted Page"}),Object(l.jsx)("p",{children:"If you aren't logged in, you would have been redirected to the signin page."}),Object(l.jsx)("p",{children:Object(l.jsx)("code",{children:"Hitting https://cs411baseball.web.illinois.edu/api/players/bryankr01 with an authenticated token"})}),o?Object(l.jsx)("code",{children:JSON.stringify(c,null,2)}):Object(l.jsx)(x,{})]})};var E=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h1",{children:"404 Not Found"}),Object(l.jsx)(j.b,{to:"/",children:"Home"})]})};a(33);var T=function(){var e=Object(n.useState)(!!localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)(j.a,{children:[Object(l.jsx)(O,{signedIn:a,setSignedIn:c}),Object(l.jsx)("div",{className:"page-wrapper",children:Object(l.jsxs)("div",{className:"page-wrapper__content",children:[a?Object(l.jsx)("div",{className:"page",children:"Hello, ".concat(localStorage.getItem("username"))}):"",Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/",exact:!0,component:v}),Object(l.jsx)(b.a,{path:"/signin",exact:!0,children:Object(l.jsx)(B,{signedIn:a,setSignedIn:c})}),Object(l.jsx)(b.a,{path:"/signup",exact:!0,children:Object(l.jsx)(C,{signedIn:a,setSignedIn:c})}),Object(l.jsx)(b.a,{path:"/restricted",exact:!0,children:Object(l.jsx)(P,{signedIn:a})}),Object(l.jsx)(b.a,{path:"/search",children:Object(l.jsx)(f,{})}),Object(l.jsx)(b.a,{path:"/players/:id",children:Object(l.jsx)(_,{})}),Object(l.jsx)(b.a,{component:E})]}),Object(l.jsx)(p,{})]})})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),A()}},[[34,1,2]]]);
//# sourceMappingURL=main.f3272bec.chunk.js.map