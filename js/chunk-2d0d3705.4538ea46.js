(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3705"],{"5d88":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column align-center pa-4"},[a("div",{staticStyle:{width:"100%"}},[a("h1",[e._v("This is a hero page")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.updateProfile.apply(null,arguments)}}},[e.getSetHeroName?a("div",{staticClass:"d-flex flex-column"},[a("label",{staticClass:"mb-2",attrs:{for:"name"}},[e._v("Name")]),a("v-text-field",{attrs:{autocomplete:"off",outlined:"",type:"text",id:"name",placeholder:"name surname"},model:{value:e.getSetHeroName,callback:function(t){e.getSetHeroName=t},expression:"getSetHeroName"}})],1):e._e(),a("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Save")])],1)])])},o=[],i=a("5530"),l=(a("b0c0"),a("2f62")),r=Object(l["a"])("profile"),c=r.mapState,s=r.mapMutations,u=r.mapActions,f={name:"HeroView",computed:Object(i["a"])(Object(i["a"])({},c(["profile"])),{},{getSetHeroName:{get:function(){return this.profile&&this.profile.hero.name},set:function(e){this.SET_HERO_NAME(e)}}}),methods:Object(i["a"])(Object(i["a"])({},s(["SET_HERO_NAME"])),u(["fetchProfile","updateProfile"])),created:function(){this.fetchProfile()}},m=f,p=a("2877"),d=a("6544"),h=a.n(d),b=a("8336"),v=a("8654"),S=Object(p["a"])(m,n,o,!1,null,null,null);t["default"]=S.exports;h()(S,{VBtn:b["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3705.4538ea46.js.map