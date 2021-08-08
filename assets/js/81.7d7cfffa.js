(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{465:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue小技巧"}},[t._v("#")]),t._v(" Vue小技巧")]),t._v(" "),a("h2",{attrs:{id:"工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[t._v("#")]),t._v(" 工程化")]),t._v(" "),a("ol",[a("li",[t._v("全局安装vue-cli:"),a("code",[t._v("npm install -g @vue-cli")])]),t._v(" "),a("li",[t._v("初始化一个vue-cli工程："),a("code",[t._v("vue create vueProjectNmae")])]),t._v(" "),a("li",[t._v("开始工程\n"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),a("ol",[a("li",[t._v("定义组件")]),t._v(" "),a("li",[t._v("导入组件")]),t._v(" "),a("li",[t._v("注册组件")]),t._v(" "),a("li",[t._v("使用组件\ntemplate中只能有一个根组件。一般如下：")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),a("p",[t._v("只能用mutations改变状态"),a("br"),t._v("\n事件提交mutations，mutations改变state，state驱动视图变化。"),a("br"),t._v('\nVue.component("name",{})形式注册全局组件时，必须在Vue实例化之前执行。\n'),a("br")]),t._v(" "),a("h2",{attrs:{id:"click-native-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#click-native-stop"}},[t._v("#")]),t._v(" @click.native.stop")]),t._v(" "),a("p",[a("strong",[t._v("Vue")]),t._v(",组件上绑定事件需要加"),a("code",[t._v(".native")]),t._v("事件修饰符，可以用"),a("code",[t._v("@click.stop")]),t._v("阻止没有事件处理函数的事件冒泡。\n"),a("br")]),t._v(" "),a("h2",{attrs:{id:"sync修饰符使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sync修饰符使用"}},[t._v("#")]),t._v(" "),a("code",[t._v("sync")]),t._v("修饰符使用")]),t._v(" "),a("p",[t._v("对一个 prop 进行“双向绑定”。"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"通过-listeners实现隔代组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-listeners实现隔代组件通信"}},[t._v("#")]),t._v(" 通过$listeners实现隔代组件通信")]),t._v(" "),a("p",[t._v("子组件中的"),a("code",[t._v("$listeners")]),t._v("属性包含了父组件传入子组件的"),a("strong",[t._v("事件监听")]),t._v("(不包含.native修饰的)，子组件可通过"),a("code",[t._v('v-on="$listeners"')]),t._v("传入孙子组件，孙子组件通过"),a("code",[t._v("this.$emit(事件名，参数)")]),t._v("触发父组件或爷爷组件中的事件。\n"),a("br")]),t._v(" "),a("h2",{attrs:{id:"隔代组件通信方法汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔代组件通信方法汇总"}},[t._v("#")]),t._v(" 隔代组件通信方法汇总")]),t._v(" "),a("ol",[a("li",[t._v("vuex-状态管理")]),t._v(" "),a("li",[t._v("props-代代传")]),t._v(" "),a("li",[t._v("provide/inject-依赖注入")]),t._v(" "),a("li",[t._v("bus-中央事件总线\n"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"离线安装npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线安装npm包"}},[t._v("#")]),t._v(" 离线安装npm包")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在有线环境下下载npm包:")]),t._v(" "),a("blockquote",[a("p",[t._v("npm install vue-scroller --global-style")]),t._v(" "),a("p",[t._v("会把vue-scroller和它依赖的到打包到vue-scroller一个包中。")])])]),t._v(" "),a("li",[a("p",[t._v("离线环境下导入npm包：")]),t._v(" "),a("blockquote",[a("p",[t._v("拷贝第一步打包好的npm包")]),t._v(" "),a("p",[t._v("放入需要包项目的node-modules文件夹即可。")]),t._v(" "),a("p",[t._v("不用修改package.json文件")])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"vue深度作用域样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue深度作用域样式"}},[t._v("#")]),t._v(" vue深度作用域样式")]),t._v(" "),a("p",[t._v("在当前组件中"),a("span",{staticStyle:{color:"red"}},[t._v("强制")]),t._v("修改子组件样式")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# css中使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# less"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("scss中使用 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/deep/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"监听组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听组件的生命周期"}},[t._v("#")]),t._v(" 监听组件的生命周期")]),t._v(" "),a("p",[a("strong",[t._v("普通做法：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Parent.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @mounted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dosomething'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Child.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("简单做法：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Parent.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @hook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("mounted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doSomething'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"路由参数解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由参数解耦"}},[t._v("#")]),t._v(" 路由参数解耦")]),t._v(" "),a("p",[t._v("一般在组件内使用路由参数，大多数人会这么做：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParamsId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样做的缺点：高度耦合，使得该组件只能在某些特定的url上使用。")]),t._v(" "),a("p",[a("strong",[t._v("推荐的做法：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//核心")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("将路由的props属性设置为true后，组件内可通过props接收params参数")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParamsId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"函数式组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式组件"}},[t._v("#")]),t._v(" 函数式组件")]),t._v(" "),a("p",[t._v("函数式组件是无状态，无任何生命周期和方法的组件，无法实例化。创建函数式组件很简单，只需在"),a("code",[t._v("template")]),t._v("上添加"),a("code",[t._v("functional")]),t._v("声明即可。渲染性能更高。")]),t._v(" "),a("p",[t._v("函数式组件需要的一些都通过context参数传递。 具体参阅 "),a("RouterLink",{attrs:{to:"/blog/vue/vue_basic/[https://cn.vuejs.org/v2/guide/render-function.html#函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#函数式组件)"}},[t._v("Vue函数式组件")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);