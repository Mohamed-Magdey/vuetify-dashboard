(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-87f7d094":"1eeb5277","chunk-637a29e2":"6b52613e","chunk-1ae01080":"2208ecc7","chunk-92e311da":"5ff0327e","chunk-19235404":"d77d32b2","chunk-4f71007b":"3c62bca1","chunk-5816ac3a":"83613586","chunk-e21d91fa":"96ebf247","chunk-0cef55f1":"207f3fbc","chunk-13d29751":"b84dbd9e","chunk-2d0ce757":"7d3efb55"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-87f7d094":1,"chunk-637a29e2":1,"chunk-1ae01080":1,"chunk-92e311da":1,"chunk-19235404":1,"chunk-4f71007b":1,"chunk-5816ac3a":1,"chunk-e21d91fa":1,"chunk-13d29751":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-87f7d094":"60a35537","chunk-637a29e2":"4093c261","chunk-1ae01080":"8ad0bb85","chunk-92e311da":"5e9fca03","chunk-19235404":"d547e53b","chunk-4f71007b":"de22a03d","chunk-5816ac3a":"5ae4aaae","chunk-e21d91fa":"9b7788dd","chunk-0cef55f1":"31d6cfe0","chunk-13d29751":"28ab60e0","chunk-2d0ce757":"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vuetify-dashboard/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"namespaced",(function(){return X})),n.d(r,"state",(function(){return Z})),n.d(r,"mutations",(function(){return ee})),n.d(r,"actions",(function(){return te}));var a={};n.r(a),n.d(a,"namespaced",(function(){return ue})),n.d(a,"state",(function(){return ce})),n.d(a,"mutations",(function(){return ie})),n.d(a,"actions",(function(){return se}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar",{attrs:{links:e.links}}),n("v-main",[n("router-view")],1),n("Footer",{attrs:{links:e.links}})],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-title",[e._v("Vuetify Dashboard")]),e.$store.state.user.user?[n("v-spacer"),n("h1",{staticClass:"headline"},[e._v("Welcome "+e._s(e.$store.state.user.user))])]:e._e(),n("v-spacer"),e._l(e.links,(function(t){return n("v-btn",{key:t+"-header-link",attrs:{text:"",rounded:"",to:{name:t}}},[e._v(" "+e._s(t)+" ")])})),n("v-btn",{attrs:{text:"",rounded:""},on:{click:e.toggleTheme}},[e._v("Toggle Theme")])],2)},s=[],l={props:{links:{type:Array,default:function(){return["home"]}}}},f=l,d={mixins:[f],methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},h=d,p=n("2877"),m=n("6544"),v=n.n(m),b=n("40dc"),k=n("bb78"),g=n("8336"),y=n("2fa4"),_=Object(p["a"])(h,i,s,!1,null,null,null),E=_.exports;v()(_,{VAppBar:b["a"],VAppBarTitle:k["a"],VBtn:g["a"],VSpacer:y["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[e._l(e.links,(function(t){return n("v-btn",{key:t+"-footer-link",staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:{name:t}}},[e._v(" "+e._s(t)+" ")])})),n("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[e._v(" "+e._s(e.footerDate)+" — "),n("strong",[e._v("Vuetify Dashboard")])])],2)],1)},S=[],O={mixins:[f],computed:{footerDate:function(){return(new Date).getFullYear()}}},T=O,j=n("62ad"),C=n("553a"),x=n("0fd9"),N=Object(p["a"])(T,w,S,!1,null,null,null),V=N.exports;v()(N,{VBtn:g["a"],VCol:j["a"],VFooter:C["a"],VRow:x["a"]});var P={components:{Navbar:E,Footer:V},data:function(){return{links:["home","mcq","login","signup","dashboard"]}}},R=P,A=(n("034f"),n("7496")),q=n("f6c4"),U=Object(p["a"])(R,u,c,!1,null,null,null),M=U.exports;v()(U,{VApp:A["a"],VMain:q["a"]});n("d3b7"),n("3ca3"),n("ddb0");var $=n("8c4f"),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[n("h1",[e._v("Welcome to the App!")])])],1)},D=[],L={},F=L,I=n("a523"),Q=Object(p["a"])(F,B,D,!1,null,null,null),W=Q.exports;v()(Q,{VContainer:I["a"],VRow:x["a"]});var J=n("323e"),H=n.n(J);o["a"].use($["a"]),H.a.configure({showSpinner:!1});var K=[{path:"/home",name:"home",component:W},{path:"/",redirect:{name:"home"}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-87f7d094"),n.e("chunk-637a29e2"),n.e("chunk-1ae01080")]).then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([n.e("chunk-87f7d094"),n.e("chunk-637a29e2"),n.e("chunk-92e311da"),n.e("chunk-19235404"),n.e("chunk-4f71007b")]).then(n.bind(null,"34c3"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-87f7d094"),n.e("chunk-637a29e2"),n.e("chunk-92e311da"),n.e("chunk-19235404"),n.e("chunk-5816ac3a")]).then(n.bind(null,"7277"))}},{path:"/mcq",name:"mcq",component:function(){return n.e("chunk-e21d91fa").then(n.bind(null,"1e19"))}}],Y=new $["a"]({mode:"history",routes:K});Y.beforeEach((function(e,t,n){H.a.start(),n()})),Y.afterEach((function(e,t){H.a.done()}));var z=Y,G=n("2f62"),X=!0,Z={user:"",score:0},ee={SET_NEW_USER:function(e,t){e.user=t},REMOVE_USER:function(e){e.user=""},INCREMENT_SCORE:function(e){e.score+=2}},te={setNewUser:function(e,t){var n=e.commit;n("SET_NEW_USER",t)},removeUser:function(e){var t=e.commit;t("REMOVE_USER")},incrementScore:function(e){var t=e.commit;t("INCREMENT_SCORE")}},ne=n("bc3a"),re=n.n(ne),ae=re.a.create({baseURL:"https://mcq-mern-app.herokuapp.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4});ae.interceptors.request.use((function(e){return H.a.start(),e})),ae.interceptors.response.use((function(e){return H.a.done(),e}));var oe={getQuestions:function(){return ae.get("/api")}},ue=!0,ce={questions:[]},ie={SET_QUESTIONS:function(e,t){e.questions=t}},se={fetchQuestions:function(e){var t=e.commit;return oe.getQuestions().then((function(e){t("SET_QUESTIONS",e.data)})).catch((function(e){return e.message}))}};o["a"].use(G["a"]);var le=new G["a"].Store({modules:{user:r,question:a}}),fe=n("f309");o["a"].use(fe["a"]);var de=new fe["a"]({}),he=(n("a5d8"),n("b079")),pe=n.n(he);n("4238");o["a"].config.productionTip=!1,o["a"].use(pe.a,{position:"top"}),new o["a"]({router:z,store:le,vuetify:de,render:function(e){return e(M)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.8e646494.js.map