(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{246:function(s,a,n){"use strict";n.r(a);var l={created:function(){this.content=unescape("%3Ch2%3EQuickstart%3C/h2%3E%0A%3Ch3%3EStarter%20kit%3C/h3%3E%0A%3Cp%3EWe%20recomment%20to%20use%20%3Ca%20href%3D%22https%3A//cli.vuejs.org/zh/%22%3EVue%20Cli%203%3C/a%3E%20to%20create%20a%20project.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20Vue%20Cli%3C/span%3E%0Anpm%20install%20-g%20@vue/cli%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Create%20a%20project%3C/span%3E%0Avue%20create%20hello-world%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAfter%20the%20creation%20is%20complete%2C%20you%20can%20open%20the%20GUI%20by%20command.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Open%20GUI%3C/span%3E%0Avue%20ui%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20GUI%2C%20click%20on%20%27Dependencies%27%20-%26gt%3B%20%3Ccode%3EInstall%20Dependencies%3C/code%3E%20and%20add%20%3Ccode%3Evant%3C/code%3E%20to%20the%20dependencies.%3C/p%3E%0A%3Cimg%20width%3D%22100%25%22%20style%3D%22box-shadow%3A%200%201px%201px%20rgba%280%2C%200%2C%200%2C%20.1%29%3B%20border-radius%3A%203px%3B%22%20src%3D%22https%3A//img.yzcdn.cn/vant/vue-cli-demo-201809030812.png%22%20%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Ch4%3ENPM%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-shell%22%3Enpm%20i%20vant%20-S%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EYARN%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-shell%22%3Eyarn%20add%20vant%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECDN%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20style%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Elink%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Erel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22stylesheet%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vant/lib/vant-css/index.css%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20script%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vue/dist/vue.min.js%22%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22undefined%22%3E%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22https%3A//unpkg.com/vant/lib/vant.min.js%22%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22undefined%22%3E%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3E1.%20Use%20%3Ca%20href%3D%22https%3A//github.com/ant-design/babel-plugin-import%22%3Ebabel-plugin-import%3C/a%3E%20%28Recommended%29%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20babel-plugin-import%3C/span%3E%0Anpm%20i%20babel-plugin-import%20-D%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20set%20babel%20config%20in%20.babelrc%20or%20babel-loader%3C/span%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20Note%3A%20Don%27t%20set%20libraryDirectory%20if%20you%20are%20using%20webpack%201.%3C/span%3E%0A%7B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22plugins%22%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%22import%22%3C/span%3E%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22libraryName%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22vant%22%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22libraryDirectory%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22es%22%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22style%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%5D%0A%20%20%5D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20For%20users%20who%20use%20babel7%2C%20that%20can%20be%20configured%20in%20babel.config.js%3C/span%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27import%27%3C/span%3E%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryDirectory%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27es%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%5D%0A%20%20%5D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThen%20you%20can%20import%20components%20from%20vant%2C%20equivalent%20to%20import%20manually%20below.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Button%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20are%20using%20TypeScript%uFF0Cplease%20use%20%3Ca%20href%3D%22https%3A//github.com/Brooooooklyn/ts-import-plugin%22%3Ets-import-plugin%3C/a%3E%20instead%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch4%3E2.%20Manually%20import%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Button%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/button%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/base.css%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/button.css%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3E3.%20Import%20all%20components%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vant%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/lib/vant-css/index.css%27%3C/span%3E%3B%0A%0AVue.use%28Vant%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20configured%20babel-plugin-import%2C%20you%20won%27t%20be%20allowed%20to%20import%20all%20components.%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch3%3ERem%20units%3C/h3%3E%0A%3Cp%3EVant%20use%20%3Ccode%3Epx%3C/code%3E%20as%20size%20units%20by%20default%uFF0Cyou%20can%20use%20tools%20such%20as%20%3Ccode%3Epostcss-pxtorem%3C/code%3E%20to%20transform%20units%20to%20%3Ccode%3Erem%3C/code%3E.%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Ca%20href%3D%22https%3A//github.com/cuth/postcss-pxtorem%22%3Epostcss-pxtorem%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href%3D%22https%3A//github.com/amfe/lib-flexible%22%3Elib-flexible%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3Epostcss%20config%20example%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27autoprefixer%27%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebrowsers%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Android%20%26gt%3B%3D%204.0%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27iOS%20%26gt%3B%3D%207%27%3C/span%3E%5D%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27postcss-pxtorem%27%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ErootValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E37.5%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EpropList%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27*%27%3C/span%3E%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A")}},C=n(0),p=Object(C.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);p.options.__file="quickstart.en-US.md";a.default=p.exports}}]);