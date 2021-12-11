(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{415:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("在当前文档中嵌入其他的网页。对于iframe的样式问题，可以像div等一样操作，只是"),s("code",[t._v("margin:0 auto")]),t._v("对于居中定宽的"),s("code",[t._v("iframe")]),t._v("似乎无效，需要包含在div中来实现居中。")]),t._v(" "),s("h2",{attrs:{id:"重要属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要属性"}},[t._v("#")]),t._v(" 重要属性")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("name:")]),t._v(" 定义"),s("code",[t._v("iframe")]),t._v("的名字，该名称可以用作"),s("code",[t._v("a")]),t._v("或者"),s("code",[t._v("form")]),t._v("标签的"),s("code",[t._v("target")]),t._v("属性值。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("allow:")]),t._v(" 当定义"),s("code",[t._v('allow="fullscreen"')]),t._v("时，可以通过"),s("code",[t._v("<iframe>")]),t._v("的"),s("code",[t._v("requestFullscreen()")]),t._v("方法激活该内联框架的全屏模式。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("height/width:")]),t._v(" 定义内联框架的宽高。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("src:")]),t._v(" 定义被嵌套的页面的url地址。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("frameborder:")]),t._v(" 内网框架是否显示边框。“1”显示，“0”不显示。")]),t._v(" "),s("ul",[s("li",[t._v("此属性不赞成使用，推荐使用"),s("code",[t._v("CSS")]),t._v("的"),s("code",[t._v("border")]),t._v("代替。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("scrolling:")]),t._v(" 这个属性控制是否要在框架内显示滚动条，允许的值包括：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("auto")]),t._v(":仅当框架的内容超出框架的范围时显示滚动条。")]),t._v(" "),s("li",[s("code",[t._v("yes")]),t._v(": 始终显示滚动条。")]),t._v(" "),s("li",[s("code",[t._v("no")]),t._v(": 从不显示滚动条。")])])])]),t._v(" "),s("h2",{attrs:{id:"获取iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取iframe"}},[t._v("#")]),t._v(" 获取"),s("code",[t._v("iframe")])]),t._v(" "),s("ol",[s("li",[t._v("像获取普通的"),s("code",[t._v("dom")]),t._v("元素一样，通过标签名、id、class等获取。")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("window.frames")]),t._v('获取整个文档中的"iframe"的伪数组。')])]),t._v(" "),s("h2",{attrs:{id:"父子页面通信方式一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子页面通信方式一"}},[t._v("#")]),t._v(" 父子页面通信方式一")]),t._v(" "),s("p",[s("strong",[t._v("父访问子：")]),t._v(" 脚本可以通过"),s("code",[t._v("contentWindow")]),t._v("访问内联框架的"),s("code",[t._v("window")]),t._v("对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"innerDiv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置第一个iframe内联页面的“innerDiv”的背景颜色。")]),t._v("\n")])])]),s("p",[s("strong",[t._v("子访问父：")]),t._v(" "),s("code",[t._v("window.parent")]),t._v("访问父级窗口；"),s("code",[t._v("window.top")]),t._v("访问顶层父窗口。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outerDiv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 设置父窗口文档的"outerDiv"的背景颜色')]),t._v("\n")])])]),s("h2",{attrs:{id:"父子页面通信方式二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子页面通信方式二"}},[t._v("#")]),t._v(" 父子页面通信方式二")]),t._v(" "),s("p",[s("strong",[t._v("核心：")]),t._v(" "),s("code",[t._v("window.postmessage()")]),t._v("在页面之间传递消息。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"传给子页面的数据"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给子页面发送数据")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"子页面获取父页面传入的数据："')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子页面结束数据")]),t._v("\n")])])]),s("h2",{attrs:{id:"备注："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备注："}},[t._v("#")]),t._v(" 备注：")]),t._v(" "),s("p",[s("strong",[t._v("两种通信方式都不能跨域。")])]),t._v(" "),s("p",[t._v("“同源”策略规定：")]),t._v(" "),s("ul",[s("li",[t._v("如果我们有对另外一个窗口（例如，一个使用 "),s("code",[t._v("window.open")]),t._v(" 创建的弹窗，或者一个窗口中的 iframe）的引用，并且该窗口是同源的，那么我们就具有对该窗口的"),s("strong",[t._v("全部访问权限")]),t._v("。")]),t._v(" "),s("li",[t._v("否则，如果该窗口不是同源的，那么我们就无法访问该窗口中的内容：变量，文档，任何东西。唯一的例外是 "),s("code",[t._v("location")]),t._v("：我们可以修改它（进而重定向用户）。但是我们无法读取 "),s("code",[t._v("location")]),t._v("（因此，我们无法看到用户当前所处的位置，也就不会泄漏任何信息）。")])]),t._v(" "),s("p",[t._v("详情参阅："),s("a",{attrs:{href:"https://zh.javascript.info/cross-window-communication",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨窗口通信"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);