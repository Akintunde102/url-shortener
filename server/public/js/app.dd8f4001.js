(function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1518:function(e,t,n){},"1e4d":function(e,t,n){},"29c9":function(e,t,n){"use strict";var r=n("65e5"),a=n.n(r);a.a},6108:function(e,t,n){"use strict";var r=n("b1a3"),a=n.n(r);a.a},"65e5":function(e,t,n){},"85ec":function(e,t,n){},"933f":function(e,t,n){"use strict";var r=n("1518"),a=n.n(r);a.a},b1a3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("4eb5"),o=n.n(a),s=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{logged:e.logged}}),!1===e.logged?n("Auth",{on:{changeLoggedStatus:function(t){return e.updateLoggedStatus(t)}}}):e._e()],1)},u=[],l=n("5530"),c=n("bc3a"),p=n.n(c),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.title))]),e.logged?n("h1",[n("button",{attrs:{type:"button"},on:{click:function(t){return e.changeLoggedStatus(!1)}}},[e._v("Log Out")])]):e._e()])},m=[],f=r["a"].extend({name:"App",props:["title","logged"],methods:Object(l["a"])({},Object(s["b"])(["changeLoggedStatus"]))}),g=f,v=(n("6108"),n("2877")),h=Object(v["a"])(g,d,m,!1,null,"fb929362",null),b=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Login"),n("Register")],1)},y=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-section"},[n("div",{staticClass:"centered"},[n("h2",[e._v("Login")]),n("form",{attrs:{autocomplete:"off"},on:{submit:e.login}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"url",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"pass"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{attrs:{type:"submit",name:"submit",value:"Login"}})]),n("h5",[e._v(e._s(e.error))])])])},_=[],O={show:function(e){return console.log(e)},stringify:function(e){return console.log(JSON.stringify(e))}},j=O,S=r["a"].extend({name:"Form",data:function(){return{error:"",username:"",password:""}},methods:Object(l["a"])(Object(l["a"])({},Object(s["b"])(["changeLoggedStatus"])),{},{login:function(e){var t=this;e.preventDefault(),j.stringify({username:this.username,password:this.password}),p.a.post("/api/user/login",{params:{username:this.username,password:this.password}}).then((function(e){var n=e.status;if(j.stringify({loginResponse:e}),200!==n)throw new Error("Something Went Wrong, Try Again");t.changeLoggedStatus(!0)})).catch((function(e){t.error="Something Unexpected Happened",j.stringify(e)}))}})}),N=S,L=(n("933f"),Object(v["a"])(N,x,_,!1,null,"38762fe3",null)),P=L.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-section"},[n("div",{staticClass:"centered"},[n("h2",[e._v("Register")]),n("form",{attrs:{autocomplete:"off"},on:{submit:e.register}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{autocomplete:"off",type:"text",name:"url",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"pass",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text",name:"fullName",placeholder:"Full Name",required:""},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"text",name:"role",placeholder:"Role",required:""},domProps:{value:e.role},on:{input:function(t){t.target.composing||(e.role=t.target.value)}}}),n("input",{attrs:{type:"submit",name:"submit",value:"Register",required:""}})]),n("h5",[e._v(e._s(e.error))])])])},C=[],E=r["a"].extend({name:"Form",data:function(){return{error:"",username:"",password:"",fullName:"",role:"",regMessage:""}},methods:{register:function(e){var t=this;e.preventDefault(),p.a.post("/api/user/register",{params:{username:this.username,password:this.password,fullName:this.fullName,role:this.role}}).then((function(e){var n=e.status;if(j.stringify({registerResponse:e}),200!==n)throw new Error("Something Went Wrong, Try Again");t.regMessage="User Created"})).catch((function(e){t.error="Something Unexpected Happened",j.stringify(e)}))}}}),A=E,U=(n("f5f6"),Object(v["a"])(A,T,C,!1,null,"04d5032e",null)),R=U.exports,$=r["a"].extend({name:"App",components:{Login:P,Register:R}}),M=$,W=(n("29c9"),Object(v["a"])(M,w,y,!1,null,null,null)),q=W.exports,H=r["a"].extend({name:"App",components:{Auth:q,Header:b},data:function(){return{urls:[],lastCreationTime:"",urlError:"",listLoading:!0}},computed:{logged:function(){return this.$store.state.logged}},methods:{getUrls:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p.a.get("/api/urls/",{params:Object(l["a"])(Object(l["a"])({limit:5},""!==this.lastCreationTime&&"latest"!==t?{lastCreationTime:this.lastCreationTime}:{}),""!==t&&"latest"!==t?{type:t}:{})}).then((function(t){var n=t.status,r=t.data;if(j.stringify({response:t}),200!==n)throw new Error("Something Went Wrong, Try Again");r.length&&(e.urls=r,e.lastCreationTime=r[r.length-1].creationTime),e.listLoading=!1})).catch((function(t){e.urlError="Something Unexpected Happened",j.stringify(t)}))}},created:function(){this.listLoading=!0,this.getUrls()}}),k=H,F=(n("034f"),Object(v["a"])(k,i,u,!1,null,null,null)),J=F.exports;r["a"].use(s["a"]);var D=new s["a"].Store({state:{logged:!1},mutations:{changeLoggedStatus:function(e,t){e.logged=t}}});r["a"].config.productionTip=!1,r["a"].use(o.a),new r["a"]({store:D,render:function(e){return e(J)}}).$mount("#app")},f5f6:function(e,t,n){"use strict";var r=n("1e4d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.dd8f4001.js.map