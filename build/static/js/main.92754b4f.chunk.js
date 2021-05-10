(this["webpackJsonpbaseball-bunch-frontend"]=this["webpackJsonpbaseball-bunch-frontend"]||[]).push([[0],{187:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(69),r=a.n(c),i=(a(187),a(4)),o=a(16),l=a(22),u=a(5),j=a.n(u),b=a(12),d=a(2),h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"".concat(e.player.namefirst," ").concat(e.player.namelast," ")}),Object(d.jsx)("span",{children:"(".concat(new Date(e.player.debut).getFullYear(),"-").concat(function(){var t=new Date(e.player.final_game).getFullYear();return 2020===t?"":t}(),")")})]})},p=function(e,t){Object(n.useEffect)((function(){function a(a){a.key===e&&t()}return window.addEventListener("keyup",a),function(){return window.removeEventListener("keyup",a)}}),[t,e])},m=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1];Object(n.useEffect)((function(){var t=Object.entries({name:e.value,position:e.position}).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return!!n&&"".concat(a,"=").concat(n)})).filter((function(e){return!!e})).join("&"),a=setTimeout((function(){if(e.value.length<4)c([]);else{fetch("https://cs411baseball.web.illinois.edu/api/search?".concat(t),{method:"GET"}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),200);return function(){return clearTimeout(a)}}),[e.position,e.value]),p("Escape",(function(){c([])}));var r=function(t){t.preventDefault(),c([]),e.onSuggestionClick(t)};return Object(d.jsxs)("div",{className:"typeahead",children:[Object(d.jsx)("input",{type:"text",name:e.name,value:e.value,onChange:e.onChange,className:e.inputClassName}),0===s.length?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)("div",{className:"typeahead-results ".concat(e.suggestionsClassName),children:s.map((function(t){return Object(d.jsx)("div",{className:"typeahead-results__result",name:e.name,playerid:t.playerid,onClick:r,children:Object(d.jsx)(h,{player:t})},t.playerid)}))})]})};var O=function(){var e=new URLSearchParams(Object(l.g)().search).get("name"),t=Object(l.f)(),a=Object(n.useState)(e||""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(d.jsxs)("form",{className:"navbar__search-form",onSubmit:function(e){e.preventDefault(),t.push("/search?name=".concat(c))},children:[Object(d.jsx)(m,{value:c,onChange:function(e){r(e.target.value)},onSuggestionClick:function(e){r(""),t.push("/players/".concat(e.currentTarget.getAttribute("playerid")))},inputClassName:"navbar__search-input",suggestionsClassName:"navbar__search-suggestions"}),Object(d.jsx)("input",{type:"submit",value:"Search",className:"button"})]})};var f=function(e){var t=Object(l.f)(),a="button button--midnight-blue ".concat(e.css);return Object(d.jsx)("div",{children:e.signedIn?Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.setSignedIn(!1),t.push("/")},className:a,children:"Sign Out"}):Object(d.jsx)(o.b,{to:"/signin",className:a,children:"Sign In"})})},x=a(52);var g=function(e){return Object(d.jsx)(d.Fragment,{children:e.signedIn?Object(d.jsxs)("div",{className:"navbar__user-actions",children:[Object(d.jsxs)("div",{className:"navbar__user",children:[localStorage.getItem("username"),Object(d.jsx)(x.a,{})]}),Object(d.jsxs)("div",{className:"navbar__dropdown",children:[Object(d.jsx)(o.b,{to:"/teams",children:"My Teams"}),Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn,css:"button--understated"})]})]}):Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})};var v=function(e){return Object(d.jsx)("div",{className:"page-wrapper page-wrapper--navbar",children:Object(d.jsxs)("div",{className:"page-wrapper__content",children:[Object(d.jsxs)("div",{className:"navbar navbar--mobile",children:[Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(o.b,{to:"/",className:"navbar__title",children:"TBB"})}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(O,{})}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(f,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]}),Object(d.jsxs)("div",{className:"navbar navbar--desktop",children:[Object(d.jsxs)("div",{className:"navbar__group",children:[Object(d.jsx)(o.b,{to:"/",className:"navbar__title",children:"The Baseball Bunch"}),Object(d.jsx)(O,{})]}),Object(d.jsx)("div",{className:"navbar__group",children:Object(d.jsx)(g,{signedIn:e.signedIn,setSignedIn:e.setSignedIn})})]})]})})},y=function(){return Object(d.jsx)("div",{className:"page-wrapper page-wrapper--footer",children:Object(d.jsx)("div",{className:"footer",children:[{header:"Written By:",details:[{text:"Casey Benson"},{text:"Juan Brandao"},{text:"Nabeel Mamoon"},{text:"Sabarinath Suriyamurthy"}]},{header:"Developed For:",details:[{text:"University of Illinois Urbana-Champaign"},{text:"CS 411: Database Systems"},{text:"Professor Kevin Chen-Chuan Chang"},{text:"Spring 2021"}]},{header:"Stats Courtesy:",details:[{text:"Sean Lahman"},{text:"Lahman's Baseball Database",link:"http://www.seanlahman.com/baseball-archive/statistics/"}]}].map((function(e){return Object(d.jsxs)("div",{className:"footer__section",children:[Object(d.jsx)("div",{className:"footer__header",children:e.header}),e.details.map((function(e){return e.link?Object(d.jsx)("a",{href:e.link,className:"footer__detail footer__detail--link",children:e.text},e.text):Object(d.jsx)("div",{className:"footer__detail",children:e.text},e.text)}))]},e.header)}))})})};var _=function(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsxs)("div",{className:"loading--ripple",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]}),Object(d.jsxs)("div",{className:"loading--ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})};var S=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?"hitter"===e?{year:"Year",age:"Age",team:"Team",g:"G",pa:"PA",ab:"AB",r:"R",h:"H",d:"2B",t:"3B",hr:"HR",rbi:"RBI",sb:"SB",cs:"CS",bb:"BB",so:"SO",ba:"BA",obp:"OBP",slg:"SLG",ops:"OPS",fantasyPts:"Fantasy Points"}:{year:"Year",age:"Age",team:"Team",w:"W",l:"L",era:"ERA",g:"G",gs:"GS",cg:"CG",sho:"SHO",sv:"SV",h:"H",r:"R",er:"ER",hr:"HR",bb:"BB",ibb:"IBB",so:"SO",hbp:"HBP",fantasyPts:"Fantasy Points"}:"hitter"===e?{year:"Year",team:"Team",ab:"AB",g:"G",r:"R",h:"H",_2b:"2B",_3b:"3B",batting_hr:"HR",rbi:"RBI"}:{year:"Year",team:"Team",g:"G",w:"W",l:"L",era:"ERA",er:"ER",pitching_so:"K",pitching_bb:"BB",ibb:"IBB",sv:"SV"}};var I=function(e){var t=isNaN(parseInt(e.playerStats[0].pitching_so))||parseInt(e.playerStats[0].pitching_so)<2?"hitter":"pitcher",a=S(t);return Object(d.jsx)("div",{className:"table-container",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{className:"table__row table__row--head",children:Object.values(a).map((function(e){return Object(d.jsx)("th",{className:"table__data",children:e},e)}))})}),Object(d.jsx)("tbody",{children:e.playerStats.map((function(e){return Object(d.jsx)("tr",{className:"table__row",children:Object.keys(a).map((function(t){return Object(d.jsx)("td",{className:"table__data",children:e[t]},"".concat(e.year,"-").concat(t))}))},e.year)}))})]})})};var N=function(e){var t=Object(l.f)();return Object(n.useEffect)((function(){if(e.signedIn){var a={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/players/bryankr01",a).then(function(){var a=Object(b.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:401===n.status&&(e.setSignedIn(!1),t.push("/signin"));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}else t.push("/signin")}),[t,e]),Object(d.jsx)(d.Fragment,{})},w=a(330),k=a(331),B=a(335),C=a(172),T=a(173),A=a(79),E=a(76),F=a(177),D=function(e){return e.map((function(e){var t=function(t){return Math.round(parseInt(t)/parseInt(e.g)*100)/100};return{name:e.year,H:parseInt(e.h),HR:parseInt(e.batting_hr),RBI:parseInt(e.rbi),"H/G":t(parseInt(e.h)),"HR/G":t(parseInt(e.batting_hr)),"RBI/G":t(parseInt(e.rbi))}}))},L=function(e){var t=D(e.data);return Object(d.jsx)(w.a,{width:"100%",height:"100%",children:Object(d.jsxs)(k.a,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(B.a,{strokeDasharray:"3"}),Object(d.jsx)(C.a,{dataKey:"name"}),Object(d.jsx)(T.a,{yAxisId:"left"}),Object(d.jsx)(T.a,{yAxisId:"right",orientation:"right"}),Object(d.jsx)(A.a,{}),Object(d.jsx)(E.a,{}),Object(d.jsx)(F.a,{yAxisId:"left",type:"monotone",dataKey:"H",stroke:"#D91E36"}),Object(d.jsx)(F.a,{yAxisId:"left",type:"monotone",dataKey:"HR",stroke:"#DA344D"}),Object(d.jsx)(F.a,{yAxisId:"left",type:"monotone",dataKey:"RBI",stroke:"#EC5766"}),Object(d.jsx)(F.a,{yAxisId:"right",type:"monotone",dataKey:"H/G",stroke:"#27187E"}),Object(d.jsx)(F.a,{yAxisId:"right",type:"monotone",dataKey:"HR/G",stroke:"#6874E8"}),Object(d.jsx)(F.a,{yAxisId:"right",type:"monotone",dataKey:"RBI/G",stroke:"#5ADBFF"})]})})},P=function(e){return e.map((function(e){var t;return{name:e.year,K:parseInt(e.pitching_so),BB:parseInt(e.pitching_bb),ERA:parseFloat(e.era),"K/G":(t=parseInt(e.pitching_so),Math.round(parseInt(t)/parseInt(e.g)*100)/100)}}))},G=function(e){var t=P(e.data);return Object(d.jsx)(w.a,{width:"100%",height:"100%",children:Object(d.jsxs)(k.a,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(d.jsx)(B.a,{strokeDasharray:"3"}),Object(d.jsx)(C.a,{dataKey:"name"}),Object(d.jsx)(T.a,{yAxisId:"left"}),Object(d.jsx)(T.a,{yAxisId:"right",orientation:"right"}),Object(d.jsx)(A.a,{}),Object(d.jsx)(E.a,{}),Object(d.jsx)(F.a,{yAxisId:"left",type:"monotone",dataKey:"K",stroke:"#D91E36"}),Object(d.jsx)(F.a,{yAxisId:"left",type:"monotone",dataKey:"BB",stroke:"#DA344D"}),Object(d.jsx)(F.a,{yAxisId:"right",type:"monotone",dataKey:"ERA",stroke:"#27187E"}),Object(d.jsx)(F.a,{yAxisId:"right",type:"monotone",dataKey:"K/G",stroke:"#6874E8"})]})})},R=function(e){return"hitter"===(isNaN(parseInt(e.data[0].pitching_so))||parseInt(e.data[0].pitching_so)<2?"hitter":"pitcher")?Object(d.jsx)(L,{data:e.data}):Object(d.jsx)(G,{data:e.data})},H=function(e){var t=function(){return[{text:"Home",href:"/"}].concat(e.path)};return Object(d.jsxs)("div",{className:"breadcrumbs",children:[t().slice(0,t().length-1).map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.b,{to:e.href,className:"breadcrumbs__item",children:e.text}),Object(d.jsx)("span",{className:"breadcrumbs__delimiter",children:"/"})]})})),t()[t().length-1].text]})},K=function(e){return e.filter((function(e){return"2020"!==e.year})).sort((function(e,t){return e.year>t.year?1:t.year>e.year?-1:0}))},z=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({}),o=Object(i.a)(r,2),u=o[0],h=o[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),O=m[0],f=m[1],x=Object(l.h)().id;return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/player/".concat(x),e).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),fetch("https://cs411baseball.web.illinois.edu/api/player/".concat(x,"/stats"),e).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,h(K(a.seasons)),f(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[x,c,h]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(N,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),O?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(H,{path:[{text:"".concat(s.namefirst," ").concat(s.namelast)}]}),Object(d.jsxs)("div",{className:"player",children:[Object(d.jsx)("h1",{children:"".concat(s.namefirst," ").concat(s.namelast)}),Object(d.jsxs)("div",{className:"player__body",children:[Object(d.jsx)("div",{className:"player__table",children:Object(d.jsx)(I,{playerStats:u})}),Object(d.jsx)("div",{className:"player__chart",children:Object(d.jsx)(R,{data:u})})]})]})]}):Object(d.jsx)(_,{})]})},U=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/player/yelicch01/stats",e).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=5;break}return e.next=3,t.json();case 3:a=e.sent,c(K(a.seasons));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("h1",{className:"home__header",children:"Baseball is hard."}),Object(d.jsx)("h2",{className:"home__subheader",children:"Let The Baseball Bunch clear the way"}),Object(d.jsxs)("div",{className:"grid-x",children:[Object(d.jsx)("div",{className:"cell large-5",children:Object(d.jsxs)("div",{className:"home__blurb",children:[Object(d.jsxs)("p",{children:["Using a proprietary ",Object(d.jsx)("b",{children:"machine learning algorithm"})," and 150 years of baseball statistics, ",Object(d.jsx)("b",{children:"The Baseball Bunch"})," can help you find the essence of a winning team."]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Search"})," for the players that will make a difference and"," ",Object(d.jsx)("b",{children:"create a team"})," that you believe has what it takes."]}),Object(d.jsxs)("p",{children:["When you're ready, ",Object(d.jsx)("b",{children:"The Baseball Bunch"})," will tell you whether or not your team is ready to take home the title."]}),Object(d.jsx)("div",{className:"home__cta",children:e.signedIn?Object(d.jsx)(o.b,{to:"/teams",className:"button",children:"My Teams"}):Object(d.jsx)(o.b,{to:"/signin",className:"button",children:"Get Started"})})]})}),Object(d.jsx)("div",{className:"cell large-7",children:Object(d.jsx)("div",{className:"home__chart",children:Object(d.jsx)(L,{data:s})})})]})]})})};var M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),u=r[0],p=r[1],m=new URLSearchParams(Object(l.g)().search).get("name");return Object(n.useEffect)((function(){if(m.length<4)p(!0);else{p(!1);fetch("https://cs411baseball.web.illinois.edu/api/search?name=".concat(m),{method:"GET"}).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,s(a),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[m,s]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"Search"}),Object(d.jsxs)("h3",{children:['Search results for "',Object(d.jsxs)("code",{children:[m,'"']})]}),u?Object(d.jsx)("div",{children:a.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/players/".concat(e.playerid),children:Object(d.jsx)(h,{player:e})})},e.playerid)}))}):Object(d.jsx)(_,{})]})};var J=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),h=u[0],p=u[1],m=Object(n.useState)(!1),O=Object(i.a)(m,2),f=O[0],x=O[1],g=Object(n.useState)(!!e.authError),v=Object(i.a)(g,2),y=v[0],S=v[1],I=Object(n.useState)(e.authError),N=Object(i.a)(I,2),w=N[0],k=N[1],B=Object(l.f)(),C=function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),x(!0),n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(h)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),B.push("/"),t.next=11;break;case 10:401===a.status?(S(!0),k("Wrong username or password"),x(!1)):(S(!0),k("Something went wrong. Try again later"),x(!1));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"page",children:Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("form",{onSubmit:C,className:"auth__form",children:[Object(d.jsx)("h1",{children:"Sign In"}),y?Object(d.jsx)("div",{className:"alert--error",children:w}):Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)},className:"auth__input"}),Object(d.jsx)("input",{type:"text",value:"*".repeat(h.length),placeholder:"Password",onChange:function(e){p(e.target.value)},className:"auth__input"}),Object(d.jsxs)("div",{children:["Don't have an account? ",Object(d.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),f?Object(d.jsx)(_,{}):Object(d.jsx)("input",{type:"submit",value:"Sign In",className:"button"})]})})})};var Y=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),h=u[0],p=u[1],m=Object(n.useState)(""),O=Object(i.a)(m,2),f=O[0],x=O[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),y=v[0],S=v[1],I=Object(n.useState)(!!e.authError),N=Object(i.a)(I,2),w=N[0],k=N[1],B=Object(n.useState)(e.authError),C=Object(i.a)(B,2),T=C[0],A=C[1],E=Object(l.f)(),F=function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),S(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emailAddress:h,username:s,password:f})},fetch("https://cs411baseball.web.illinois.edu/api/users",n).then(function(){var t=Object(b.a)(j.a.mark((function t(a){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}n={method:"GET",headers:{Authorization:"Basic ".concat(window.btoa("".concat(s,":").concat(f)))}},fetch("https://cs411baseball.web.illinois.edu/api/token",n).then(function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,localStorage.setItem("token",n.token),localStorage.setItem("username",s),e.setSignedIn(!0),E.push("/"),t.next=11;break;case 10:a.status,k(!0),S(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 5:return t.next=7,a.json();case 7:c=t.sent,k(!0),A(c.message),S(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"page",children:Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("form",{onSubmit:F,className:"auth__form",children:[Object(d.jsx)("h1",{children:"Create an Account"}),w?Object(d.jsx)("div",{children:T}):Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"text",value:h,placeholder:"Email",onChange:function(e){p(e.target.value)},className:"auth__input"}),Object(d.jsx)("input",{type:"text",value:s,placeholder:"Username",onChange:function(e){c(e.target.value)},className:"auth__input"}),Object(d.jsx)("input",{type:"text",value:"*".repeat(f.length),placeholder:"Password",onChange:function(e){x(e.target.value)},className:"auth__input"}),Object(d.jsxs)("div",{children:["Already have an account? ",Object(d.jsx)(o.b,{to:"/signin",children:"Sign In"})]}),y?Object(d.jsx)(_,{}):Object(d.jsx)("input",{type:"submit",value:"Create Account",className:"button"})]})})})},W=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),u=o[0],h=o[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),O=m[0],f=m[1],x=Object(n.useState)(""),g=Object(i.a)(x,2),v=g[0],y=g[1],S=Object(l.f)(),I=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h(!0),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:s})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",a).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(201!==t.status){e.next=4;break}S.push("/teams"),e.next=10;break;case 4:return e.next=6,t.json();case 6:a=e.sent,f(!0),y(a.message),h(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(N,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)(H,{path:[{text:"My Teams",href:"/teams"},{text:"New Team"}]}),Object(d.jsxs)("div",{className:"new-team",children:[Object(d.jsx)("h1",{children:"Create a Team"}),Object(d.jsx)("h2",{children:"Every great team needs a great name."}),O?Object(d.jsx)("div",{children:v}):Object(d.jsx)("div",{}),Object(d.jsxs)("form",{onSubmit:I,className:"new-team__form",children:[Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)},className:"new-team__input"}),u?Object(d.jsx)(_,{}):Object(d.jsx)("input",{type:"submit",value:"Create Team",className:"button"})]})]})]})},V=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],h=l[1];return Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team",e).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=8;break}return e.next=3,t.json();case 3:a=e.sent,c(a),h(!0),e.next=9;break;case 8:404===t.status&&(c([]),h(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(N,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)(H,{path:[{text:"My Teams"}]}),Object(d.jsx)("h1",{children:"My Teams"}),u?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"teams-list",children:s.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(e.fantasyteamid),className:"teams-list__team",children:e.teamname})},e.fantasyteamid)}))}),Object(d.jsx)(o.b,{to:"/teams/new",className:"button",children:"Create New Team"})]}):Object(d.jsx)(_,{})]})},q=a(30),Q=a.p+"static/media/baseball-diamond.ca77460d.png",X=a(48),Z={pitcher:"P",catcher:"C",first_base:"1B",second_base:"2B",third_base:"3B",short_stop:"SS",left_fielder:"OF",center_fielder:"OF",right_fielder:"OF"},$=function(e){var t=Object(n.useState)({pitcher:"",catcher:"",first_base:"",second_base:"",third_base:"",short_stop:"",left_fielder:"",center_fielder:"",right_fielder:""}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),u=o[0],h=o[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],x=O[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),y=v[0],S=v[1],I=Object(l.f)(),N=function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),h(!0),n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(s)},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),n).then(function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(201!==a.status){t.next=5;break}I.push("/teams/".concat(e.teamId)),e.setNoLineup(!1),t.next=11;break;case 5:return t.next=7,a.json();case 7:n=t.sent,x(!0),S(n.message),h(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(e){c(Object(q.a)(Object(q.a)({},s),{},Object(X.a)({},e.target.name,e.target.value)))},k=function(e){c(Object(q.a)(Object(q.a)({},s),{},Object(X.a)({},e.currentTarget.getAttribute("name"),e.currentTarget.getAttribute("playerid"))))};return Object(d.jsxs)(d.Fragment,{children:[f?Object(d.jsx)("div",{className:"alert--error",children:y}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("form",{onSubmit:N,className:"team-field",style:{backgroundImage:"url(".concat(Q,")")},children:[Object.entries(s).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsx)("div",{className:"team-field__player team-field__player--".concat(a.replace("_","-")),children:Object(d.jsx)("label",{className:"lineup-player__form",children:Object(d.jsx)(m,{name:a,value:n,onChange:w,onSuggestionClick:k,position:Z[a]})})},a)})),u?Object(d.jsx)(_,{}):Object(d.jsxs)("div",{className:"team-field__form-actions",children:[Object(d.jsx)("button",{className:"button",onClick:function(e){e.preventDefault(),c({pitcher:"degroja01",catcher:"grandya01",first_base:"freemfr01",second_base:"altuvjo01",third_base:"arenano01",short_stop:"storytr01",left_fielder:"sotoju01",center_fielder:"troutmi01",right_fielder:"yelicch01"})},children:"Suggest Lineup"}),Object(d.jsx)("input",{type:"submit",value:"Save Lineup",className:"button"})]})]})]})},ee=a(175),te=a(174),ae=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({}),l=Object(i.a)(r,2),u=l[0],h=l[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),f=O[0],g=O[1];Object(n.useEffect)((function(){var t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/player/".concat(e.playerid),t).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,h(a),g(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e.playerid]);return Object(d.jsx)(d.Fragment,{children:s?Object(d.jsxs)("form",{onSubmit:e.putLineup,className:"lineup-player__form",children:[Object(d.jsx)(m,{name:e.position,value:e.playerid,onChange:function(t){e.setDirtyPlayers(Object(q.a)(Object(q.a)({},e.dirtyPlayers),{},Object(X.a)({},t.target.name,t.target.value)))},onSuggestionClick:function(t){e.setDirtyPlayers(Object(q.a)(Object(q.a)({},e.dirtyPlayers),{},Object(X.a)({},t.currentTarget.getAttribute("name"),t.currentTarget.getAttribute("playerid"))))},position:Z[e.position]}),Object(d.jsxs)("div",{className:"lineup-player__form-actions",children:[Object(d.jsx)(te.a,{onClick:function(){e.resetDirtyPlayers(),c(!1)},className:"lineup-player__action"}),Object(d.jsx)(ee.a,{onClick:e.putLineup,className:"lineup-player__action"})]})]}):Object(d.jsx)(d.Fragment,{children:f?Object(d.jsxs)("div",{className:"lineup-player",children:[Object(d.jsx)(o.b,{to:"/players/".concat(e.playerid),style:{whiteSpace:"nowrap"},children:"".concat(u.namefirst," ").concat(u.namelast)}),Object(d.jsx)(x.b,{onClick:function(){c(!0)},className:"lineup-player__action"})]},e.position):Object(d.jsx)(_,{className:"loading--tiny"})})})},ne=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({}),o=Object(i.a)(r,2),l=o[0],u=o[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),m=p[0],O=p[1];Object(n.useEffect)((function(){var t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};e.noLineup||fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),t).then(function(){var t=Object(b.a)(j.a.mark((function t(a){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==a.status){t.next=10;break}return t.next=3,a.json();case 3:n=t.sent,s={pitcher:n[0].playerid,catcher:n[1].playerid,first_base:n[2].playerid,second_base:n[3].playerid,third_base:n[4].playerid,short_stop:n[5].playerid,left_fielder:n[6].playerid,center_fielder:n[7].playerid,right_fielder:n[8].playerid},c(s),u(s),O(!0),t.next=11;break;case 10:409===a.status&&(e.setNoLineup(!0),O(!0));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,e.noLineup,e.teamId]);var f=function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),O(!1),n={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(l)},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/".concat(e.teamId),n).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&c(l),O(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){u(s)};return Object(d.jsx)(d.Fragment,{children:e.noLineup?Object(d.jsx)($,{teamId:e.teamId,setNoLineup:e.setNoLineup,putLineup:f}):Object(d.jsx)(d.Fragment,{children:m?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"team-field",style:{backgroundImage:"url(".concat(Q,")")},children:Object.keys(l).map((function(e){return Object(d.jsx)("div",{className:"team-field__player team-field__player--".concat(e.replace("_","-")),children:Object(d.jsx)(ae,{position:e,playerid:l[e],dirtyPlayers:l,setDirtyPlayers:u,resetDirtyPlayers:x,putLineup:f},e)})}))})}):Object(d.jsx)(_,{})})})},se=function(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),l=o[0],u=o[1],h=function(){var e={yes:[],no:[]};return s?(Object.entries(s).forEach((function(t){var a=Object(i.a)(t,2),n=a[0];a[1];"Yes"===s[n]["predicted to be champion?"]?e.yes=e.yes.concat(n):e.no=e.no.concat(n)})),e):e};return Object(d.jsx)(d.Fragment,{children:e.noLineup?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Is this a championship caliber team?"}),Object(d.jsx)("button",{onClick:function(){u(!1),c(void 0);var t={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/predict/".concat(e.teamId),t).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=6;break}return e.next=3,t.json();case 3:a=e.sent,c(a),u(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Test your team"}),s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:function(){if(!s)return"";switch(h().yes.length){case 0:return"This team could use some work";case 1:return"This team's got an outside shot";case 2:return"Looking good";default:return"That's a great team you've got there"}}()}),Object(d.jsx)("div",{children:function(){if(!s)return"";var e=h(),t=e.yes.slice(0,e.yes.length-1).join(", ")+" and "+e.yes.slice(-1),a=e.no.slice(0,e.no.length-1).join(", ")+" and "+e.no.slice(-1);switch(h().yes.length){case 0:return"".concat(a," all predict that this team is not up to the task.");case 1:return"".concat(a," predict that this team is not ready for a championship. However, according to ").concat(t,", this team has a shot.");case 2:return"".concat(t," predict that this is a championship level team. However, ").concat(a," does not.");default:return"".concat(t," all predict that this is a championship level team.")}}()})]}):Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(_,{})})})]})})},ce=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],h=o[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),O=m[0],f=m[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),y=v[0],S=v[1],I=Object(n.useState)(!1),w=Object(i.a)(I,2),k=w[0],B=w[1],C=Object(l.f)(),T=Object(l.h)().id;Object(n.useEffect)((function(){var e={method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(T),e).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=7;break}return e.next=3,t.json();case 3:a=e.sent,c(a),h(s.teamname),S(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,T,s.teamname]);var A=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:u})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&c(Object(q.a)(Object(q.a)({},s),{},{teamname:u})),f(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({teamname:u})},fetch("https://cs411baseball.web.illinois.edu/api/fantasy-team/".concat(s.teamname,"/name"),a).then(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status&&C.push("/teams"),f(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(N,{signedIn:e.signedIn,setSignedIn:e.setSignedIn}),Object(d.jsx)(H,{path:[{text:"My Teams",href:"/teams"},{text:s.teamname}]}),y?Object(d.jsx)("div",{children:O?Object(d.jsxs)("form",{onSubmit:A,children:[Object(d.jsx)("input",{type:"text",value:u,placeholder:"Username",className:"team__title",onChange:function(e){h(e.target.value)}}),Object(d.jsx)("input",{type:"button",value:"Cancel",onClick:function(){f(!1)}}),Object(d.jsx)("input",{type:"submit",value:"Change Name"})]}):Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"team__title",children:[s.teamname,Object(d.jsx)(x.b,{onClick:function(){f(!0)},className:"team__action team__action--icon"}),Object(d.jsx)(x.c,{onClick:E,className:"team__action team__action--icon"})]})})}):Object(d.jsx)(_,{}),Object(d.jsxs)("div",{className:"grid-x",children:[Object(d.jsx)("div",{className:"cell large-6 team__column",children:Object(d.jsx)(ne,{teamId:T,noLineup:k,setNoLineup:B})}),Object(d.jsx)("div",{className:"cell large-6 team__column",children:Object(d.jsx)(se,{teamId:T,noLineup:k})})]})]})};var re=function(){return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{children:"404 Not Found"}),Object(d.jsx)(o.b,{to:"/",children:"Home"})]})};a(328);var ie=function(){var e=Object(n.useState)(!!localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(v,{signedIn:a,setSignedIn:s}),Object(d.jsx)("div",{className:"page-wrapper",children:Object(d.jsx)("div",{className:"page-wrapper__content",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,children:Object(d.jsx)(U,{signedIn:a})}),Object(d.jsx)(l.a,{path:"/signin",exact:!0,children:Object(d.jsx)(J,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{path:"/signup",exact:!0,children:Object(d.jsx)(Y,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{path:"/teams",exact:!0,children:Object(d.jsx)(V,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{path:"/teams/new",exact:!0,children:Object(d.jsx)(W,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{path:"/teams/:id",exact:!0,children:Object(d.jsx)(ce,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{path:"/search",children:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/players/:id",children:Object(d.jsx)(z,{signedIn:a,setSignedIn:s})}),Object(d.jsx)(l.a,{component:re})]})})}),Object(d.jsx)(y,{})]})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,337)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[329,1,2]]]);
//# sourceMappingURL=main.92754b4f.chunk.js.map