(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{59:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),i=r.n(o),s=(r(58),r(59),r(22)),c=r(7),l=r(105),u=r(34),d=r(2);function b(){var e=h();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsxs)("div",{className:e.container,children:[Object(d.jsx)("img",{src:"".concat("/fundoss-site","/logo192.png"),className:e.icon}),Object(d.jsx)(u.a,{variant:"h3",className:e.header,children:"FundOSS"})]}),Object(d.jsx)(u.a,{variant:"h5",className:e.subheader,children:"Promoting funding for Open Source Software - OSS"})]})}var h=Object(l.a)({root:{},header:{marginLeft:10,color:"#bbbbbb"},subheader:{marginLeft:10,color:"#7d7d7d"},team:{margin:10,color:"#7d7d7d",fontSize:16},container:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{height:40}}),p=r(8),j=r.n(p),f=r(15),v=r(40),m=r(106),x=r(107),g=r(108),O=r(109),y=r(111),w=r(110),k=r(33),S=r(48),L=r.n(S),N=r(49),C=r.n(N);function W(){return(W=Object(f.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,"get",e.next=4,G({method:"get",url:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,n=t.payload,"post",e.next=4,G({method:"post",url:r,payload:n});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(j.a.mark((function e(t){var r,n,a,o,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,n=t.method,a=t.payload,e.prev=1,o={method:n,headers:{Accept:"application/vnd.github.v3+json"}},a&&"post"===n&&(o.body=JSON.stringify(a)),e.next=6,window.fetch(r,o);case 6:if((i=e.sent).ok){e.next=10;break}return console.error("Unable to get data from server."),e.abrupt("return",null);case 10:return e.next=12,i.json();case 12:return s=e.sent,e.abrupt("return",s);case 16:return e.prev=16,e.t0=e.catch(1),console.error("Failed to get data. Reason:",e.t0),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}var I={Get:function(e){return W.apply(this,arguments)},Post:function(e){return F.apply(this,arguments)}};function P(){return(P=Object(f.a)(j.a.mark((function e(t){var r,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.org,n=t.repo,a="https://api.github.com/repos/".concat(r,"/").concat(n,"/contributors"),"localhost"===window.location.hostname&&(a="".concat("/fundoss-site","/test/contributors.json")),e.next=5,I.Get({url:a});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(f.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.login,n="https://api.github.com/users/".concat(r),"localhost"===window.location.hostname&&(n="".concat("/fundoss-site","/test/user.json")),e.next=5,I.Get({url:n});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={GetContributors:function(e){return P.apply(this,arguments)},GetUser:function(e){return B.apply(this,arguments)}},R=r(46),T=r.n(R),U=r(47),z=r.n(U);function J(e){var t=e.org,r=e.repo,a=Object(n.useState)(null),o=Object(v.a)(a,2),i=o[0],s=o[1];return t&&r?(Object(n.useEffect)(Object(f.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.GetContributors({org:t,repo:r});case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)}))),[]),i?Object(d.jsx)("div",{children:i.map((function(e,n){return Object(d.jsx)(A,{index:n,contributor:e,org:t,repo:r},null===e||void 0===e?void 0:e.id)}))}):null):null}function A(e){var t,r=e.contributor,a=(e.org,e.repo),o=e.index,i=H(),s=Object(n.useState)(null),c=Object(v.a)(s,2),l=c[0],b=c[1];Object(n.useEffect)(Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o<=2)){e.next=5;break}return e.next=3,E.GetUser({login:null===r||void 0===r?void 0:r.login});case 3:t=e.sent,b(t);case 5:case"end":return e.stop()}}),e)}))),[]);var h=z()(T()(null===l||void 0===l?void 0:l.name))||"";return Object(d.jsxs)(m.a,{className:i.root,children:[Object(d.jsx)(x.a,{avatar:(null===r||void 0===r?void 0:r.avatar_url)&&Object(d.jsx)(y.a,{"aria-label":null===r||void 0===r?void 0:r.id,className:i.avatar,src:null===r||void 0===r?void 0:r.avatar_url}),title:null!==(t=null===l||void 0===l?void 0:l.name)&&void 0!==t?t:null===r||void 0===r?void 0:r.login,subheader:(null===l||void 0===l?void 0:l.blog)&&Object(d.jsx)("a",{href:null===l||void 0===l?void 0:l.blog,children:null===l||void 0===l?void 0:l.blog})}),o<=2&&Object(d.jsxs)(g.a,{children:[Object(d.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:(null===l||void 0===l?void 0:l.location)&&h+" is from "+(null===l||void 0===l?void 0:l.location)}),Object(d.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:(null===r||void 0===r?void 0:r.contributions)&&(null===l||void 0===l?void 0:l.name)&&h+" has made "+(null===r||void 0===r?void 0:r.contributions)+" contributions to "+a})]}),Object(d.jsxs)(O.a,{disableSpacing:!0,children:[Object(d.jsx)(w.a,{"aria-label":"add to favorites",href:null===r||void 0===r?void 0:r.fundUrl,children:Object(d.jsx)(L.a,{})}),Object(d.jsx)(w.a,{"aria-label":"share",href:"https://github.com/".concat(null===r||void 0===r?void 0:r.id),children:Object(d.jsx)(C.a,{})})]})]})}var H=Object(l.a)((function(e){return{root:{marginBottom:10,display:"block",marginLeft:"auto",marginRight:"auto",textAlign:"left"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:k.a[500]}}}));function _(){var e=M();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsxs)(u.a,{variant:"body1",className:e.subheader,children:["FundOSS is OSS! Please check it out ",Object(d.jsx)("a",{href:"https://github.com/hutch120/fundoss-site",children:"HERE"})]})})}var M=Object(l.a)({root:{},header:{marginLeft:10,color:"#bbbbbb"},subheader:{marginLeft:10,color:"#7d7d7d"},team:{margin:10,color:"#7d7d7d",fontSize:16},container:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{height:40}});function q(){var e=K();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(u.a,{variant:"h6",className:e.team,children:"We would like to introduce you to a few of your OSS developer team. These are the developers who are down in the engine room making sure things keep running."}),Object(d.jsxs)(u.a,{variant:"h6",className:e.team,children:["While you are checking out your team, consider the impact these people have on your business.",Object(d.jsx)("br",{}),"What value do these individuals provide?",Object(d.jsx)("br",{}),"What percentage of your business software relies on the systems they maintain to operate effectively?",Object(d.jsx)("br",{}),"Do you think it would be worth supporting these developers to allow them time to maintaining this software?",Object(d.jsx)("br",{}),"What would happen if these developers were not maintaining the OSS products your business relies on?"]})]})}var K=Object(l.a)({root:{},header:{marginLeft:10,color:"#bbbbbb"},subheader:{marginLeft:10,color:"#7d7d7d"},team:{margin:10,color:"#7d7d7d",fontSize:16},container:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{height:40}}),Q=r(83);function V(){var e=X(),t=new URLSearchParams(Object(c.d)().search),r=t.get("org"),n=t.get("repo"),a=!(!r||!n);return Object(d.jsx)("div",{className:e.root,children:Object(d.jsxs)("div",{className:e.workspace,children:[Object(d.jsx)(b,{}),!a&&Object(d.jsxs)(Q.a,{className:e.exampleLinkWrapper,children:[Object(d.jsx)(u.a,{variant:"h6",className:e.exampleLink,children:"Checkout some of these OSS projects"}),Object(d.jsx)(u.a,{variant:"body1",className:e.exampleLink,children:Object(d.jsx)(s.b,{to:"?org=openlayers&repo=openlayers",children:"OpenLayers"})}),Object(d.jsx)(u.a,{variant:"body1",className:e.exampleLink,children:Object(d.jsx)(s.b,{to:"?org=feross&repo=buffer",children:"Buffer"})}),Object(d.jsx)(u.a,{variant:"body1",className:e.exampleLink,children:Object(d.jsx)(s.b,{to:"?org=standard&repo=standard",children:"Standard"})})]}),a&&Object(d.jsxs)("div",{children:[Object(d.jsx)(q,{}),Object(d.jsx)(J,{org:r,repo:n})]}),Object(d.jsx)(_,{})]})})}var X=Object(l.a)({root:{padding:20,minHeight:"calc(100vh - 40px)",backgroundColor:"#282c34",display:"flex",flexDirection:"column",alignItems:"center"},workspace:{maxWidth:800,marginLeft:"auto",marginRight:"auto"},exampleLinkWrapper:{marginTop:10,marginBottom:10,padding:10},exampleLink:{marginLeft:10}});function Y(){return Object(d.jsx)(s.a,{basename:"fundoss-site",children:Object(d.jsx)(V,{})})}var Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,113)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[81,1,2]]]);
//# sourceMappingURL=main.205f10a3.chunk.js.map