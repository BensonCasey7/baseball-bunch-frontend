(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{26:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(20),r=a.n(c),i=(a(26),a(2)),o=a(4),j=a(5),b=a(0);var l=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(j.f)(),a=Object(n.useState)(e||""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(b.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(c))},children:[Object(b.jsx)("input",{type:"text",value:c,className:"navbar__search-input",placeholder:"Enter a player",onChange:function(e){r(e.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"Search",className:"button"})]})};var u=function(e){var t=Object(j.f)(),a="button button--midnight-blue ".concat(e.css);return Object(b.jsx)("div",{children:e.signedIn?Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.setSignedIn(!1),t.push("/")},className:a,children:"Sign Out"}):Object(b.jsx)(o.b,{to:"/signin",className:a,children:"Sign In"})})},d=a(13);var h=function(e){return Object(b.jsx)(b.Fragment,{children:e.signedIn?Object(b.jsxs)("div",{className:"navbar__user-actions",children:[Object(b.jsxs)("div",{className:"navbar__user",children:[localStorage.getItem("username"),Object(b.jsx)(d.a,{})]}),Object(b.jsxs)("div",{className:"navbar__dropdown",children:[Object(b.jsx)(o.b,{to:"/teams",children:"My Fantasy Teams"}),Object(b.jsx)(u,{signedIn:e.signedIn,setSignedIn:e.setSignedIn,css:"button--understated"})]})]}):Object(b.jsx)(u,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})};var O=function(e){return Object(b.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(b.jsxs)("div",{className:"page-wrapper__content",children:[Object(b.jsxs)("div",{className:"navbar navbar--mobile",children:[Object(b.jsx)("div",{className:"navbar__group",children:Object(b.jsx)(o.b,{to:"/",className:"navbar__title",children:"TBB"})}),Object(b.jsx)("div",{className:"navbar__group",children:Object(b.jsx)(l,{})}),Object(b.jsx)("div",{className:"navbar__group",children:Object(b.jsx)(u,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]}),Object(b.jsxs)("div",{className:"navbar navbar--desktop",children:[Object(b.jsxs)("div",{className:"navbar__group",children:[Object(b.jsx)(o.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(b.jsx)(l,{})]}),Object(b.jsx)("div",{className:"navbar__group",children:Object(b.jsx)(h,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]})]})})},p=function(){return Object(b.jsx)("div",{className:"page-wrapper page-wrapper--footer",children:Object(b.jsx)("div",{className:"footer",children:[{header:"Written By:",details:[{text:"Casey Benson"},{text:"Juan Brandao"},{text:"Nabeel Mamoon"},{text:"Sabarinath Suriyamurthy"}]},{header:"Developed For:",details:[{text:"University of Illinois Urbana-Champaign"},{text:"CS 411: Database Systems"},{text:"Professor Kevin Chen-Chuan Chang"},{text:"2021"}]},{header:"Stats Courtesy:",details:[{text:"Sean Lahman"},{text:"Lahman's Baseball Database",link:"http://www.seanlahman.com/baseball-archive/statistics/"}]}].map((function(e){return Object(b.jsxs)("div",{className:"footer__section",children:[Object(b.jsx)("div",{className:"footer__header",children:e.header}),e.details.map((function(e){return e.link?Object(b.jsx)("a",{href:e.link,className:"footer__detail footer__detail--link",children:e.text},e.text):Object(b.jsx)("div",{className:"footer__detail",children:e.text},e.text)}))]},e.header)}))})})};var m=function(){return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)(o.b,{to:"/teams",children:"My Fantasy teams"})]})};var x=function(){return Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsxs)("div",{className:"loading--ripple",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{className:"loading--ellipsis",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})]})};var v=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function f(){return{players:[{name:"Kris Bryant",id:"bryankr01"},{name:"Jacob deGrom",id:"degroja01"}]}}var g=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){v(1e3).then((function(){c(f),d(!0)}))}),[c]),Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Search"}),Object(b.jsxs)("h3",{children:['Theoretical search results for "',Object(b.jsxs)("code",{children:[e,'"']})]}),u?Object(b.jsx)("div",{children:s.players.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:"/players/".concat(e.id),children:e.name})},e.id)}))}):Object(b.jsx)(x,{})]})};var y=function(e){return"hitter"===e?{year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}:{year:"Year",age:"Age",team:"Team",w:"W",l:"L",era:"ERA",g:"G",gs:"GS",cg:"CG",sho:"SHO",sv:"SV",h:"H",r:"R",er:"ER",hr:"HR",bb:"BB",ibb:"IBB",so:"SO",hbp:"HBP",fantasyPts:"Fantasy Points"}};var S=function(e){var t=y(e.player.type);return Object(b.jsx)("div",{className:"table-container",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{className:"table__row table__row--head",children:Object.values(t).map((function(e){return Object(b.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(b.jsx)("tbody",{children:e.player.seasons.map((function(e){return Object(b.jsx)("tr",{className:"table__row",children:Object.keys(t).map((function(t){return Object(b.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})};var w=function(e){return"bryankr01"===e?{playerID:"bryankr01",nameFirst:"Kris",nameLast:"Bryant",nameGiven:"Kris Bryant",weight:"230",height:"77",bats:"R",throws:"R",type:"hitter",position:"3B",seasons:[{year:"2018",age:"26",team:"CHC",g:"102",pa:"457",ab:"389",r:"59",h:"106",d:"28",t:"3",hr:"13",rbi:"52",sb:"2",cs:"4",bb:"48",so:"107",ba:".272",obp:".374",slg:".460",ops:".834",fantasyPts:"250"},{year:"2019",age:"27",team:"CHC",g:"147",pa:"634",ab:"543",r:"108",h:"153",d:"35",t:"1",hr:"31",rbi:"77",sb:"4",cs:"0",bb:"74",so:"145",ba:".282",obp:".382",slg:".521",ops:".903",fantasyPts:"350"}]}:"degroja01"===e?{playerID:"degroja01",nameFirst:"Jacob",nameLast:"deGrom",nameGiven:"Jacob deGrom",weight:"180",height:"76",bats:"L",throws:"R",type:"pitcher",position:"P",seasons:[{year:"2018",age:"30",team:"NYM",w:"10",l:"9",era:"1.70",g:"32",gs:"32",cg:"1",sho:"0",sv:"0",h:"152",r:"48",er:"41",hr:"10",bb:"46",ibb:"3",so:"269",hbp:"5",fantasyPts:"450"},{year:"2019",age:"31",team:"NYM",w:"11",l:"8",era:"2.43",g:"32",gs:"32",cg:"0",sho:"0",sv:"0",h:"154",r:"59",er:"55",hr:"19",bb:"44",ibb:"1",so:"255",hbp:"7",fantasyPts:"400"}]}:null};var I=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1],u=Object(j.h)().id;return Object(n.useEffect)((function(){v(1e3).then((function(){var e=w(u);e&&(s(e),l(!0))}))}),[s,u]),Object(b.jsxs)("div",{className:"page",children:[Object(b.jsxs)("div",{children:["Theoretically would find player with ID: ",u]}),o?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:a.nameGiven}),Object(b.jsx)(S,{player:a})]}):Object(b.jsx)(x,{})]})},N=a(3),_=a.n(N),k=a(6);var C=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),u=l[0],d=l[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),p=O[0],m=O[1],v=Object(n.useState)(!!e.authError),f=Object(i.a)(v,2),g=f[0],y=f[1],S=Object(n.useState)(e.authError),w=Object(i.a)(S,2),I=w[0],N=w[1],C=Object(j.f)(),B=function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),m(!0),n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(u)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),C.push("/"),t.next=11;break;case 10:401===a.status?(y(!0),N("Wrong username or password"),m(!1)):(y(!0),N("Something went wrong. Try again later"),m(!1));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"page",children:Object(b.jsxs)("form",{onSubmit:B,children:[Object(b.jsx)("h1",{children:"Sign In"}),g?Object(b.jsx)("div",{className:"alert--error",children:I}):Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:"Username"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})}),Object(b.jsx)("div",{children:"Password"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:"*".repeat(u.length),placeholder:"Password",onChange:function(e){d(e.target.value)}})}),Object(b.jsxs)("div",{children:["Don't have an account? ",Object(b.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),p?Object(b.jsx)(x,{}):Object(b.jsx)("input",{type:"submit",value:"Sign In",className:"button"})]})})};var B=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),u=l[0],d=l[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),p=O[0],m=O[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),g=f[0],y=f[1],S=Object(n.useState)(!!e.authError),w=Object(i.a)(S,2),I=w[0],N=w[1],C=Object(n.useState)(e.authError),B=Object(i.a)(C,2),T=B[0],P=B[1],E=Object(j.f)(),A=function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),y(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emailAddress:u,username:s,password:p})},fetch("https://cs411baseball.web.illinois.edu/api/users",n).then(function(){var t=Object(k.a)(_.a.mark((function t(a){var n,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(p)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(k.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),E.push("/"),t.next=11;break;case 10:a.status,N(!0),y(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 5:return t.next=7,a.json();case 7:c=t.sent,N(!0),P(c.message),y(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Create an Account"}),I?Object(b.jsx)("div",{children:T}):Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:"Email"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:u,placeholder:"Email",onChange:function(e){d(e.target.value)}})}),Object(b.jsx)("div",{children:"Username"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})}),Object(b.jsx)("div",{children:"Password"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",value:"*".repeat(p.length),placeholder:"Password",onChange:function(e){m(e.target.value)}})}),Object(b.jsxs)("div",{children:["Already have an account? ",Object(b.jsx)(o.b,{to:"/signin",children:"Sign In"})]}),g?Object(b.jsx)(x,{}):Object(b.jsx)("button",{className:"button",onClick:A,children:"Create Account"})]})};var T=function(e){var t=Object(j.f)();return Object(n.useEffect)((function(){if(e.signedIn){var a={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/players/bryankr01",a).then(function(){var a=Object(k.a)(_.a.mark((function a(n){return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:401===n.status&&(e.setSignedIn(!1),t.push("/signin"));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}else t.push("/signin")}),[t,e]),Object(b.jsx)(b.Fragment,{})},P=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(n.useState)(!1),h=Object(i.a)(d,2),O=h[0],p=h[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),f=v[0],g=v[1],y=Object(j.f)(),S=function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(!0),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:s})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",a).then(function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(201!==t.status){e.next=4;break}y.push("/teams"),e.next=10;break;case 4:return e.next=6,t.json();case 6:a=e.sent,p(!0),g(a.message),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(T,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(b.jsx)("h1",{children:"New Team"}),O?Object(b.jsx)("div",{children:f}):Object(b.jsx)("div",{}),Object(b.jsxs)("form",{onSubmit:S,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Team Name"}),Object(b.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})]}),l?Object(b.jsx)(x,{}):Object(b.jsx)("input",{type:"submit",value:"Create Team",className:"button"})]})]})},E=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),l=j[0],u=j[1];return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",e).then(function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=8;break}return e.next=3,t.json();case 3:a=e.sent,c(a),u(!0),e.next=9;break;case 8:404===t.status&&(c([]),u(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(T,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(b.jsx)("h1",{children:"My Fantasy Teams"}),l?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"teams-list",children:s.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:"/teams/".concat(e.fantasyteamid),className:"teams-list__team",children:e.teamname})})}))}),Object(b.jsx)(o.b,{to:"/teams/new",className:"button",children:"Create New Team"})]}):Object(b.jsx)(x,{})]})},A=a(18),G=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),u=l[0],h=l[1],O=Object(n.useState)(""),p=Object(i.a)(O,2),m=p[0],v=p[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),y=g[0],S=g[1],I=Object(n.useState)(!1),N=Object(i.a)(I,2),C=N[0],B=N[1],T=Object(j.f)(),P=Object(j.h)().id;Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(P),e).then(function(){var e=Object(k.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=10;break}return e.next=3,t.json();case 3:a=e.sent,n=w("bryankr01"),r=w("degroja01"),h([n,r]),c(a),v(s.teamname),B(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,P,s.teamname]);var E=function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:m})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&c(Object(A.a)(Object(A.a)({},s),{},{teamname:m})),S(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(k.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:m})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&T.push("/teams"),S(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"page",children:C?Object(b.jsxs)("div",{children:[y?Object(b.jsxs)("form",{onSubmit:E,children:[Object(b.jsx)("input",{type:"text",value:m,placeholder:"Username",className:"team__title",onChange:function(e){v(e.target.value)}}),Object(b.jsx)("input",{type:"button",value:"Cancel",onClick:function(){S(!1)}}),Object(b.jsx)("input",{type:"submit",value:"Change Name"})]}):Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"team__title",children:[s.teamname,Object(b.jsx)(d.b,{onClick:function(){S(!0)},className:"team__action team__action--icon"}),Object(b.jsx)(d.c,{onClick:G,className:"team__action team__action--icon"})]})}),Object(b.jsxs)("div",{children:["Mocked Players:",u.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:"/players/".concat(e.playerID),children:e.nameGiven})},e.id)}))]})]}):Object(b.jsx)(x,{})})};var D=function(){return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"404 Not Found"}),Object(b.jsx)(o.b,{to:"/",children:"Home"})]})};a(34);var F=function(){var e=Object(n.useState)(!!localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(O,{signedIn:a,setSignedIn:s}),Object(b.jsx)("div",{className:"page-wrapper",children:Object(b.jsx)("div",{className:"page-wrapper__content",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(b.jsx)(j.a,{path:"/signin",exact:!0,children:Object(b.jsx)(C,{signedIn:a,setSignedIn:s})}),Object(b.jsx)(j.a,{path:"/signup",exact:!0,children:Object(b.jsx)(B,{signedIn:a,setSignedIn:s})}),Object(b.jsx)(j.a,{path:"/teams",exact:!0,children:Object(b.jsx)(E,{signedIn:a,setSignedIn:s})}),Object(b.jsx)(j.a,{path:"/teams/new",exact:!0,children:Object(b.jsx)(P,{signedIn:a,setSignedIn:s})}),Object(b.jsx)(j.a,{path:"/teams/:id",exact:!0,children:Object(b.jsx)(G,{signedIn:a,setSignedIn:s})}),Object(b.jsx)(j.a,{path:"/search",children:Object(b.jsx)(g,{})}),Object(b.jsx)(j.a,{path:"/players/:id",children:Object(b.jsx)(I,{})}),Object(b.jsx)(j.a,{component:D})]})})}),Object(b.jsx)(p,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),L()}},[[35,1,2]]]);
//# sourceMappingURL=main.e49abe42.chunk.js.map