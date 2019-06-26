(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{520:function(t,e,o){"use strict";o.r(e);var n=o(361),r={name:"ForgotPassword",props:{title:{type:String,default:"Password Reset"}},data:function(){return{email:"",sent:!1}},computed:{forgotpassWait:function(){return this.$store.state.user.forgotpassWait},forgotpassError:function(){return this.$store.state.user.forgotpassError},emailValid:function(){return n.isEmail(this.email)},loginRoute:function(){return"/login"}},methods:{forgotpass:function(){var t=this,e={email:this.email};this.$store.dispatch("user/goForgotpass",e).then(function(){t.sent=!0})}}},l=o(17),c={name:"ForgotPasswordPage",middleware:"unauthenticated",components:{forgotPassword:Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{class:t.$app_config.headerHeroClasses||"hero is-primary"},[o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[t._v("\n          "+t._s(t.title)+"\n        ")])])])]),t._v(" "),o("section",{staticClass:"section"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.sent,expression:"!sent"}],staticClass:"container"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.forgotpass(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.forgotpassError,expression:"forgotpassError"}],staticClass:"notification is-danger"},[t._v("\n        "+t._s(t.forgotpassError)+"\n      ")]),t._v(" "),o("div",{staticClass:"field is-grouped"},[o("div",{staticClass:"control"},[o("button",{staticClass:"button is-primary",attrs:{disabled:!t.email||!t.emailValid},on:{click:t.forgotpass}},[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.forgotpassWait,expression:"!forgotpassWait"}],staticClass:"icon"},[o("i",{staticClass:"far fa-sign-in"})]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.forgotpassWait,expression:"forgotpassWait"}],staticClass:"icon"},[o("i",{staticClass:"fas fa-spinner-third fa-spin"})]),t._v(" "),o("span",[t._v("Send Reset Instructions")])])]),t._v(" "),o("div",{staticClass:"control"},[o("nuxt-link",{staticClass:"button is-text",attrs:{to:t.loginRoute}},[t._v("\n            Cancel\n          ")])],1)])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.sent,expression:"sent"}],staticClass:"container"},[o("div",{staticClass:"notification is-success"},[t._v("\n        An email with password reset instructions has been sent to "+t._s(t.email)+".  The message will be from 'Traildock'.  Please be sure to check your spam folder if it is not in your inbox.\n      ")])])])])},[],!1,null,"2209f1ae",null).exports}},d=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("forgot-password")],1)},[],!1,null,null,null);e.default=d.exports}}]);