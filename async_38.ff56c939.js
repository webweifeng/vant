(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{159:function(t,n,a){"use strict";var e=a(80);a.n(e).a},160:function(t,n,a){(t.exports=a(10)(!1)).push([t.i,"\n.demo-tab {\n  margin-bottom: 300px;\n}\n.demo-tab .van-tab .van-icon {\n    margin-right: 5px;\n    vertical-align: -2px;\n}\n.demo-tab .van-tab__pane {\n    background-color: #fff;\n    padding: 20px;\n}\n.demo-tab .van-tabs--card .van-tab__pane {\n    background-color: transparent;\n}\n.demo-tab .custom-tabwrap .van-tab-active {\n    color: #20a0ff;\n}\n.demo-tab .custom-tabwrap .van-tabs-nav-bar {\n    background: #20a0ff;\n}\n.demo-tab .custom-pane {\n    text-align: center;\n    height: 50px;\n    line-height: 50px;\n}\n.demo-tab .van-doc-demo-block:last-child .van-tab__pane {\n      padding: 50px 20px;\n}\n",""])},259:function(t,n,a){"use strict";a.r(n);var e={i18n:{"zh-CN":{tab:"标签 ",title2:"横向滚动",title3:"禁用标签",title4:"样式风格",title5:"点击事件",title6:"粘性布局",title7:"自定义标签",title8:"滑动切换",disabled:" 已被禁用"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Swipeable",disabled:" is disabled"}},data:function(){return{active:2,tabs:[1,2,3,4]}},methods:{onClickDisabled:function(t,n){this.$toast(n+this.$t("disabled"))},onClick:function(t,n){this.$toast(n)},onScroll:function(t){console.log(t)}}},i=(a(159),a(0)),o=Object(i.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("demo-section",[a("demo-block",{attrs:{title:t.$t("basicUsage")}},[a("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.tabs,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title2")}},[a("van-tabs",{on:{scroll:t.onScroll}},t._l(8,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title3")}},[a("van-tabs",{on:{disabled:t.onClickDisabled}},t._l(3,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n,disabled:2===n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title4")}},[a("van-tabs",{attrs:{type:"card"}},t._l(3,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title5")}},[a("van-tabs",{on:{click:t.onClick}},t._l(2,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title6")}},[a("van-tabs",{attrs:{active:t.active,sticky:""}},t._l(t.tabs,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title7")}},[a("van-tabs",{attrs:{active:t.active}},t._l(2,function(n){return a("van-tab",{key:n},[a("div",{attrs:{slot:"title"},slot:"title"},[a("van-icon",{attrs:{name:"more-o"}}),t._v(t._s(t.$t("tab"))+"\n        ")],1),t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1),a("demo-block",{attrs:{title:t.$t("title8")}},[a("van-tabs",{attrs:{active:t.active,swipeable:""}},t._l(t.tabs,function(n){return a("van-tab",{key:n,attrs:{title:t.$t("tab")+n}},[t._v("\n        "+t._s(t.$t("content"))+" "+t._s(n)+"\n      ")])}))],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";n.default=o.exports},80:function(t,n,a){var e=a(160);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(11)(e,i);e.locals&&(t.exports=e.locals)}}]);