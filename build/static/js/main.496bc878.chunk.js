(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(21),r=a.n(c),i=(a(27),a(3)),o=a(5),j=a(6),l=a(2),u=a.n(l),b=a(4),d=a(0),h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"".concat(e.player.namefirst," ").concat(e.player.namelast," ")}),Object(d.jsx)("span",{children:"(".concat(new Date(e.player.debut).getFullYear(),"-").concat(function(){var t=new Date(e.player.final_game).getFullYear();return 2020===t?"":t}(),")")})]})},p=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1];Object(n.useEffect)((function(){var t=Object.entries({name:e.value,position:e.position}).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return!!n&&"".concat(a,"=").concat(n)})).filter((function(e){return!!e})).join("&"),a=setTimeout((function(){if(e.value.length<4)c([]);else{fetch("https://cs411baseball.web.illinois.edu/api/search?".concat(t),{method:"GET"}).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),200);return function(){return clearTimeout(a)}}),[e.value]);var r=function(t){t.preventDefault(),c([]),e.onSuggestionClick(t)};return Object(d.jsxs)("div",{className:"typeahead",children:[Object(d.jsx)("input",{type:"text",name:e.name,value:e.value,onChange:e.onChange,className:e.inputClassName}),0===s.length?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)("div",{className:"typeahead-results ".concat(e.suggestionsClassName),children:s.map((function(t){return Object(d.jsx)("div",{className:"typeahead-results__result",name:e.name,playerid:t.playerid,onClick:r,children:Object(d.jsx)(h,{player:t})},t.playerid)}))})]})};var O=function(){var e=new URLSearchParams(Object(j.g)().search).get("name"),t=Object(j.f)(),a=Object(n.useState)(e||""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(d.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(c))},children:[Object(d.jsx)(p,{value:c,onChange:function(e){r(e.target.value)},onSuggestionClick:function(e){r(""),t.push("/players/".concat(e.currentTarget.getAttribute("playerid")))},inputClassName:"navbar__search-input",suggestionsClassName:"navbar__search-suggestions"}),Object(d.jsx)("input",{type:"submit",value:"Search",className:"button"})]})};var f=function(e){var t=Object(j.f)(),a="button button--midnight-blue ".concat(e.css);return Object(d.jsx)("div",{children:e.signedIn?Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.setSignedIn(!1),t.push("/")},className:a,children:"Sign Out"}):Object(d.jsx)(o.b,{to:"/signin",className:a,children:"Sign In"})})},m=a(13);var x=function(e){return Object(d.jsx)(d.Fragment,{children:e.signedIn?Object(d.jsxs)("div",{className:"navbar__user-actions",children:[Object(d.jsxs)("div",{className:"navbar__user",children:[localStorage.getItem("username"),Object(d.jsx)(m.a,{})]}),Object(d.jsxs)("div",{className:"navbar__dropdown",children:[Object(d.jsx)(o.b,{to:"/teams",children:"My Fantasy Teams"}),Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn,css:"button--understated"})]})]}):Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})};var v=function(e){return Object(d.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(d.jsxs)("div",{className:"page-wrapper__content",children:[Object(d.jsxs)("div",{className:"navbar navbar--mobile",children:[Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(o.b,{to:"/",className:"navbar__title",children:"TBB"})}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(O,{})}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]}),Object(d.jsxs)("div",{className:"navbar navbar--desktop",children:[Object(d.jsxs)("div",{className:"navbar__group",children:[Object(d.jsx)(o.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(d.jsx)(O,{})]}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(x,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]})]})})},g=function(){return Object(d.jsx)("div",{className:"page-wrapper page-wrapper--footer",children:Object(d.jsx)("div",{className:"footer",children:[{header:"Written By:",details:[{text:"Casey Benson"},{text:"Juan Brandao"},{text:"Nabeel Mamoon"},{text:"Sabarinath Suriyamurthy"}]},{header:"Developed For:",details:[{text:"University of Illinois Urbana-Champaign"},{text:"CS 411: Database Systems"},{text:"Professor Kevin Chen-Chuan Chang"},{text:"Spring 2021"}]},{header:"Stats Courtesy:",details:[{text:"Sean Lahman"},{text:"Lahman's Baseball Database",link:"http://www.seanlahman.com/baseball-archive/statistics/"}]}].map((function(e){return Object(d.jsxs)("div",{className:"footer__section",children:[Object(d.jsx)("div",{className:"footer__header",children:e.header}),e.details.map((function(e){return e.link?Object(d.jsx)("a",{href:e.link,className:"footer__detail footer__detail--link",children:e.text},e.text):Object(d.jsx)("div",{className:"footer__detail",children:e.text},e.text)}))]},e.header)}))})})};var y=function(){return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"Home"}),Object(d.jsx)(o.b,{to:"/teams",children:"My Fantasy teams"})]})};var S=function(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsxs)("div",{className:"loading--ripple",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]}),Object(d.jsxs)("div",{className:"loading--ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})};var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),l=r[0],p=r[1],O=new URLSearchParams(Object(j.g)().search).get("name");return Object(n.useEffect)((function(){if(O.length<4)p(!0);else{p(!1);fetch("https://cs411baseball.web.illinois.edu/api/search?name=".concat(O),{method:"GET"}).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,s(a),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[O,s]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"Search"}),Object(d.jsxs)("h3",{children:['Theoretical search results for "',Object(d.jsxs)("code",{children:[O,'"']})]}),l?Object(d.jsx)("div",{children:a.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/players/".concat(e.playerid),children:Object(d.jsx)(h,{player:e})})},e.playerid)}))}):Object(d.jsx)(S,{})]})};var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?"hitter"===e?{year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}:{year:"Year",age:"Age",team:"Team",w:"W",l:"L",era:"ERA",g:"G",gs:"GS",cg:"CG",sho:"SHO",sv:"SV",h:"H",r:"R",er:"ER",hr:"HR",bb:"BB",ibb:"IBB",so:"SO",hbp:"HBP",fantasyPts:"Fantasy Points"}:{year:"Year",team:"Team",ab:"AB",g:"G",h:"H",r:"R"}};var N=function(e){return"hitter"},k=function(e){var t=_(N(e.playerStats));return Object(d.jsx)("div",{className:"table-container",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{className:"table__row table__row--head",children:Object.values(t).map((function(e){return Object(d.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(d.jsx)("tbody",{children:e.playerStats.map((function(e){return Object(d.jsx)("tr",{className:"table__row",children:Object.keys(t).map((function(t){return Object(d.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})};var I=function(e){return"bryankr01"===e?{playerID:"bryankr01",nameFirst:"Kris",nameLast:"Bryant",nameGiven:"Kris Bryant",weight:"230",height:"77",bats:"R",throws:"R",type:"hitter",position:"3B",seasons:[{year:"2018",age:"26",team:"CHC",g:"102",pa:"457",ab:"389",r:"59",h:"106",d:"28",t:"3",hr:"13",rbi:"52",sb:"2",cs:"4",bb:"48",so:"107",ba:".272",obp:".374",slg:".460",ops:".834",fantasyPts:"250"},{year:"2019",age:"27",team:"CHC",g:"147",pa:"634",ab:"543",r:"108",h:"153",d:"35",t:"1",hr:"31",rbi:"77",sb:"4",cs:"0",bb:"74",so:"145",ba:".282",obp:".382",slg:".521",ops:".903",fantasyPts:"350"}]}:"degroja01"===e?{playerID:"degroja01",nameFirst:"Jacob",nameLast:"deGrom",nameGiven:"Jacob deGrom",weight:"180",height:"76",bats:"L",throws:"R",type:"pitcher",position:"P",seasons:[{year:"2018",age:"30",team:"NYM",w:"10",l:"9",era:"1.70",g:"32",gs:"32",cg:"1",sho:"0",sv:"0",h:"152",r:"48",er:"41",hr:"10",bb:"46",ibb:"3",so:"269",hbp:"5",fantasyPts:"450"},{year:"2019",age:"31",team:"NYM",w:"11",l:"8",era:"2.43",g:"32",gs:"32",cg:"0",sho:"0",sv:"0",h:"154",r:"59",er:"55",hr:"19",bb:"44",ibb:"1",so:"255",hbp:"7",fantasyPts:"400"}]}:null};var C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},T=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1],u=Object(j.h)().id;Object(n.useEffect)((function(){C(500).then((function(){var e=I(u);e&&(s(e),l(!0))}))}),[s,u]);var b=_(a.type,!0);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Mocked"}),Object(d.jsxs)("div",{children:["Theoretically would find player with ID: ",u]}),o?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:a.nameGiven}),Object(d.jsx)("div",{className:"table-container",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{className:"table__row table__row--head",children:Object.values(b).map((function(e){return Object(d.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(d.jsx)("tbody",{children:a.seasons.map((function(e){return Object(d.jsx)("tr",{className:"table__row",children:Object.keys(b).map((function(t){return Object(d.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})]}):Object(d.jsx)(S,{})]})};var B=function(e){var t=Object(j.f)();return Object(n.useEffect)((function(){if(e.signedIn){var a={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/players/bryankr01",a).then(function(){var a=Object(b.a)(u.a.mark((function a(n){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:401===n.status&&(e.setSignedIn(!1),t.push("/signin"));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}else t.push("/signin")}),[t,e]),Object(d.jsx)(d.Fragment,{})},P=function(e){return e.filter((function(e){return"2020"!==e.year})).sort((function(e,t){return e.year>t.year?1:t.year>e.year?-1:0}))},A=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({}),o=Object(i.a)(r,2),l=o[0],h=o[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],m=O[1],x=Object(j.h)().id;return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/player/".concat(x),e).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),fetch("https://cs411baseball.web.illinois.edu/api/player/".concat(x,"/stats"),e).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,h(P(a.seasons)),m(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[x,c,h]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(B,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),f?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"".concat(s.namefirst," ").concat(s.namelast)}),Object(d.jsx)(k,{playerStats:l})]}):Object(d.jsx)(S,{}),Object(d.jsx)(T,{})]})};var E=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),h=l[0],p=l[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),m=f[0],x=f[1],v=Object(n.useState)(!!e.authError),g=Object(i.a)(v,2),y=g[0],w=g[1],_=Object(n.useState)(e.authError),N=Object(i.a)(_,2),k=N[0],I=N[1],C=Object(j.f)(),T=function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),x(!0),n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(h)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),C.push("/"),t.next=11;break;case 10:401===a.status?(w(!0),I("Wrong username or password"),x(!1)):(w(!0),I("Something went wrong. Try again later"),x(!1));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("form",{onSubmit:T,children:[Object(d.jsx)("h1",{children:"Sign In"}),y?Object(d.jsx)("div",{className:"alert--error",children:k}):Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:"Username"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})}),Object(d.jsx)("div",{children:"Password"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:"*".repeat(h.length),placeholder:"Password",onChange:function(e){p(e.target.value)}})}),Object(d.jsxs)("div",{children:["Don't have an account? ",Object(d.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),m?Object(d.jsx)(S,{}):Object(d.jsx)("input",{type:"submit",value:"Sign In",className:"button"})]})})};var D=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),h=l[0],p=l[1],O=Object(n.useState)(""),f=Object(i.a)(O,2),m=f[0],x=f[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),y=g[0],w=g[1],_=Object(n.useState)(!!e.authError),N=Object(i.a)(_,2),k=N[0],I=N[1],C=Object(n.useState)(e.authError),T=Object(i.a)(C,2),B=T[0],P=T[1],A=Object(j.f)(),E=function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),w(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emailAddress:h,username:s,password:m})},fetch("https://cs411baseball.web.illinois.edu/api/users",n).then(function(){var t=Object(b.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(m)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),A.push("/"),t.next=11;break;case 10:a.status,I(!0),w(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 5:return t.next=7,a.json();case 7:c=t.sent,I(!0),P(c.message),w(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"Create an Account"}),k?Object(d.jsx)("div",{children:B}):Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:"Email"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:h,placeholder:"Email",onChange:function(e){p(e.target.value)}})}),Object(d.jsx)("div",{children:"Username"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})}),Object(d.jsx)("div",{children:"Password"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:"*".repeat(m.length),placeholder:"Password",onChange:function(e){x(e.target.value)}})}),Object(d.jsxs)("div",{children:["Already have an account? ",Object(d.jsx)(o.b,{to:"/signin",children:"Sign In"})]}),y?Object(d.jsx)(S,{}):Object(d.jsx)("button",{className:"button",onClick:E,children:"Create Account"})]})},F=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],h=o[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],m=O[1],x=Object(n.useState)(""),v=Object(i.a)(x,2),g=v[0],y=v[1],w=Object(j.f)(),_=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h(!0),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:s})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",a).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(201!==t.status){e.next=4;break}w.push("/teams"),e.next=10;break;case 4:return e.next=6,t.json();case 6:a=e.sent,m(!0),y(a.message),h(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(B,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)("h1",{children:"New Team"}),f?Object(d.jsx)("div",{children:g}):Object(d.jsx)("div",{}),Object(d.jsxs)("form",{onSubmit:_,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Team Name"}),Object(d.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)}})]}),l?Object(d.jsx)(S,{}):Object(d.jsx)("input",{type:"submit",value:"Create Team",className:"button"})]})]})},G=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),j=Object(i.a)(r,2),l=j[0],h=j[1];return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",e).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=8;break}return e.next=3,t.json();case 3:a=e.sent,c(a),h(!0),e.next=9;break;case 8:404===t.status&&(c([]),h(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(B,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)("h1",{children:"My Fantasy Teams"}),l?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"teams-list",children:s.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(e.fantasyteamid),className:"teams-list__team",children:e.teamname})},e.fantasyteamid)}))}),Object(d.jsx)(o.b,{to:"/teams/new",className:"button",children:"Create New Team"})]}):Object(d.jsx)(S,{})]})},L=a(9),z=a(12),R={pitcher:"P",catcher:"C",first_base:"1B",second_base:"2B",third_base:"3B",short_stop:"SS",left_fielder:"OF",center_fielder:"OF",right_fielder:"OF"},U=function(e){var t=Object(n.useState)({pitcher:"",catcher:"",first_base:"",second_base:"",third_base:"",short_stop:"",left_fielder:"",center_fielder:"",right_fielder:""}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],h=o[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),m=f[0],x=f[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],w=g[1],_=Object(j.f)(),N=function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),h(!0),n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(s)},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),n).then(function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}_.push("/teams/".concat(e.teamId)),e.setNoLineup(!1),t.next=11;break;case 5:return t.next=7,a.json();case 7:n=t.sent,x(!0),w(n.message),h(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(e){c(Object(L.a)(Object(L.a)({},s),{},Object(z.a)({},e.target.name,e.target.value)))},I=function(e){c(Object(L.a)(Object(L.a)({},s),{},Object(z.a)({},e.currentTarget.getAttribute("name"),e.currentTarget.getAttribute("playerid"))))};return Object(d.jsxs)("div",{children:[m?Object(d.jsx)("div",{className:"alert--error",children:y}):Object(d.jsx)("div",{}),Object(d.jsxs)("form",{onSubmit:N,children:[Object.entries(s).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[a,Object(d.jsx)(p,{name:a,value:n,onChange:k,onSuggestionClick:I,position:R[a]})]})})]},a)})),l?Object(d.jsx)(S,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"button",onClick:function(e){e.preventDefault(),c({pitcher:"hendrky01",catcher:"contrwi01",first_base:"rizzoan01",second_base:"boteda01",third_base:"bryankr01",short_stop:"baezja01",left_fielder:"pederjo01",center_fielder:"happia01",right_fielder:"heywaja01"})},children:"Auto Fill Lineup"}),Object(d.jsx)("input",{type:"submit",value:"Save Lineup",className:"button"})]})]})]})},H=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1];return Object(d.jsx)("div",{children:s?Object(d.jsxs)("form",{onSubmit:e.putLineup,style:{display:"flex"},children:[Object(d.jsxs)("span",{children:[e.position," "]}),Object(d.jsx)(p,{name:e.position,value:e.playerid,onChange:function(t){e.setDirtyPlayers(Object(L.a)(Object(L.a)({},e.dirtyPlayers),{},Object(z.a)({},t.target.name,t.target.value)))},onSuggestionClick:function(t){e.setDirtyPlayers(Object(L.a)(Object(L.a)({},e.dirtyPlayers),{},Object(z.a)({},t.currentTarget.getAttribute("name"),t.currentTarget.getAttribute("playerid"))))},position:R[e.position]}),Object(d.jsx)("input",{type:"button",value:"Cancel",onClick:function(){e.resetDirtyPlayers(),c(!1)}}),Object(d.jsx)("input",{type:"submit",value:"Save Player"})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.position," "]}),Object(d.jsx)(o.b,{to:"/players/".concat(e.playerid),children:e.playerid}),Object(d.jsx)(m.b,{onClick:function(){c(!0)}})]},e.position)})},J=function(e){return Object(d.jsxs)("div",{className:"team-field",children:[Object(d.jsx)("b",{children:"Work in progress"}),Object.keys(e.players).map((function(t){return Object(d.jsx)("div",{className:"team-field__player team-field__player--".concat(t.replace("_","-")),children:e.players[t]})}))]})},M=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({}),o=Object(i.a)(r,2),j=o[0],l=o[1],h=Object(n.useState)({}),p=Object(i.a)(h,2),O=p[0],f=p[1],m=Object(n.useState)(!1),x=Object(i.a)(m,2),v=x[0],g=x[1];Object(n.useEffect)((function(){var t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};s||fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),t).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=10;break}return e.next=3,t.json();case 3:a=e.sent,n={pitcher:a[0].playerid,catcher:a[1].playerid,first_base:a[2].playerid,second_base:a[3].playerid,third_base:a[4].playerid,short_stop:a[5].playerid,left_fielder:a[6].playerid,center_fielder:a[7].playerid,right_fielder:a[8].playerid},l(n),f(n),g(!0),e.next=11;break;case 10:409===t.status&&(c(!0),g(!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s,e.teamId]);var y=function(){var t=Object(b.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),g(!1),n={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(O)},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),n).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&l(O),g(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){f(j)};return Object(d.jsxs)("div",{className:"grid-x",children:[Object(d.jsxs)("div",{className:"cell large-4",children:[Object(d.jsx)("h2",{children:"Lineup"}),v?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:["Player IDs",Object.keys(O).map((function(e){return Object(d.jsx)(H,{position:e,playerid:O[e],dirtyPlayers:O,setDirtyPlayers:f,resetDirtyPlayers:w,putLineup:y},e)}))]})}):Object(d.jsx)(S,{}),s?Object(d.jsx)(U,{teamId:e.teamId,setNoLineup:c,putLineup:y}):Object(d.jsx)(d.Fragment,{})]}),Object(d.jsx)("div",{className:"cell large-8",children:Object(d.jsx)(J,{players:j})})]})},Y=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),h=l[0],p=l[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),x=f[0],v=f[1],g=Object(n.useState)(!1),y=Object(i.a)(g,2),w=y[0],_=y[1],N=Object(j.f)(),k=Object(j.h)().id;Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(k),e).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=7;break}return e.next=3,t.json();case 3:a=e.sent,c(a),p(s.teamname),_(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,k,s.teamname]);var I=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:h})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&c(Object(L.a)(Object(L.a)({},s),{},{teamname:h})),v(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:h})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&N.push("/teams"),v(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(B,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)(o.b,{to:"/teams",children:"Back to Teams"}),w?Object(d.jsx)("div",{children:x?Object(d.jsxs)("form",{onSubmit:I,children:[Object(d.jsx)("input",{type:"text",value:h,placeholder:"Username",className:"team__title",onChange:function(e){p(e.target.value)}}),Object(d.jsx)("input",{type:"button",value:"Cancel",onClick:function(){v(!1)}}),Object(d.jsx)("input",{type:"submit",value:"Change Name"})]}):Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"team__title",children:[s.teamname,Object(d.jsx)(m.b,{onClick:function(){v(!0)},className:"team__action team__action--icon"}),Object(d.jsx)(m.c,{onClick:C,className:"team__action team__action--icon"})]})})}):Object(d.jsx)(S,{}),Object(d.jsx)(M,{teamId:k})]})};var W=function(){return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"404 Not Found"}),Object(d.jsx)(o.b,{to:"/",children:"Home"})]})};a(35);var K=function(){var e=Object(n.useState)(!!localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(v,{signedIn:a,setSignedIn:s}),Object(d.jsx)("div",{className:"page-wrapper",children:Object(d.jsx)("div",{className:"page-wrapper__content",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(d.jsx)(j.a,{path:"/signin",exact:!0,children:Object(d.jsx)(E,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{path:"/signup",exact:!0,children:Object(d.jsx)(D,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{path:"/teams",exact:!0,children:Object(d.jsx)(G,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{path:"/teams/new",exact:!0,children:Object(d.jsx)(F,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{path:"/teams/:id",exact:!0,children:Object(d.jsx)(Y,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{path:"/search",children:Object(d.jsx)(w,{})}),Object(d.jsx)(j.a,{path:"/players/:id",children:Object(d.jsx)(A,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(j.a,{component:W})]})})}),Object(d.jsx)(g,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),V()}},[[36,1,2]]]);
//# sourceMappingURL=main.496bc878.chunk.js.map