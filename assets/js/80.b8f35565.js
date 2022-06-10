(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{467:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日常笔记-编react技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日常笔记-编react技术栈"}},[t._v("#")]),t._v(" 日常笔记-编React技术栈")]),t._v(" "),a("h2",{attrs:{id:"let-vs-const-vs-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-vs-const-vs-var"}},[t._v("#")]),t._v(" let vs const vs var")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("var")]),t._v(":")])]),t._v(" "),a("p",[a("code",[t._v("var")]),t._v("声明的变量是函数作用域，会变量提升。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("let、const")]),t._v(":")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("let")]),t._v("和"),a("code",[t._v("const")]),t._v("声明的变量是块级作用域；")]),t._v(" "),a("li",[t._v("不存在变量提升；")]),t._v(" "),a("li",[t._v("一个作用域中不允许重复声明；")]),t._v(" "),a("li",[t._v("先声明后使用；")]),t._v(" "),a("li",[a("code",[t._v("const")]),t._v("声明的变量所指向的内存地址不得改动。")])]),t._v(" "),a("h2",{attrs:{id:"for-of与for-in的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of与for-in的区别"}},[t._v("#")]),t._v(" "),a("code",[t._v("for...of")]),t._v("与"),a("code",[t._v("for...in")]),t._v("的区别")]),t._v(" "),a("p",[a("code",[t._v("for...in")]),t._v("语句以任意顺序迭代对象的"),a("strong",[t._v("可枚举属性(包括原型)")]),t._v(",=="),a("span",{staticStyle:{color:"red"}},[t._v("取键")]),t._v("==；")]),t._v(" "),a("p",[a("code",[t._v("for...of")]),t._v("语句遍历可迭代对象定义的迭代数据。常见于"),a("strong",[t._v("数组、字符串")]),t._v("等，=="),a("span",{staticStyle:{color:"red"}},[t._v("取值")]),t._v("==。")]),t._v(" "),a("blockquote",[a("p",[t._v("以下示例显示了与Array一起使用时，for...of循环和for...in循环之间的区别。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("objCustom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("arrCustom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" iterable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\niterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 0, 1, 2, "foo", "arrCustom", "objCustom"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 0, 1, 2, "foo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3, 5, 7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"react生命周期函数的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react生命周期函数的理解"}},[t._v("#")]),t._v(" React生命周期函数的理解")]),t._v(" "),a("p",[a("strong",[t._v("挂载阶段")])]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("constructor()")])])]),t._v(" "),a("li",[a("code",[t._v("static getDerivedStateFromProps()")])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("render()")])])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("componentDicMount()")])])])]),t._v(" "),a("p",[a("strong",[t._v("更新阶段")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("static getDerivedStateFromProps()")])]),t._v(" "),a("li",[a("code",[t._v("shouldComponentUpdate()")])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("render()")])])]),t._v(" "),a("li",[a("code",[t._v("getSnapshotBeforeUpdate()")])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("componentDidUpdate()")])])])]),t._v(" "),a("p",[a("strong",[t._v("卸载阶段")])]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("componentWillUnmount()")])])])]),t._v(" "),a("p",[a("strong",[t._v("错误处理")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("static getDerivedStateFromError()")])]),t._v(" "),a("li",[a("code",[t._v("componentDidCatch()")])])]),t._v(" "),a("h4",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#constructor",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("constructor()")]),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("如果不初始化"),a("code",[t._v("state")]),t._v("或不进行方法绑定时，可以不为"),a("code",[t._v("React")]),t._v("组件实现构造函数。")]),t._v(" "),a("li",[t._v("构造函数中"),a("strong",[t._v("不要调用setState()方法")]),t._v("。")]),t._v(" "),a("li",[t._v("不可以在构造函数中引入任何副作用或订阅。如果遇到，请将对于的操作放置到"),a("code",[t._v("componentDidMount")]),t._v("中。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[a("strong",[t._v("避免将props的值赋值给state！以下是个常见的错误：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要这样做")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("只有在你刻意忽略 prop 更新的情况下使用。")])])]),t._v(" "),a("h4",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#render",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("render()")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("render()")]),t._v("是class组件中唯一必须实现的方法。")])]),t._v(" "),a("p",[a("code",[t._v("render()")]),t._v("的返回值：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("React元素")]),t._v("。无论是"),a("code",[t._v("<div/>")]),t._v("还是"),a("code",[t._v("<MyComponnet/>")]),t._v("都是React元素。")]),t._v(" "),a("li",[a("strong",[t._v("数组或"),a("code",[t._v("fragments")])]),t._v("。数组项可以是"),a("code",[t._v("jsx")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("Portals")]),t._v("。可以渲染子节点到不同的 DOM 子树中。")]),t._v(" "),a("li",[t._v("**字符串或数字类型。**它们在 DOM 中会被渲染为文本节点。")]),t._v(" "),a("li",[t._v("布尔值或"),a("code",[t._v("null")]),t._v("。什么都不渲染。（主要用于支持返回 "),a("code",[t._v("test && <Child/>")]),t._v(" 的模式，其中 test 为布尔类型。)")])]),t._v(" "),a("p",[a("code",[t._v("render()")]),t._v("函数应该为纯函数。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("shouldComponentUpdate()")]),t._v(" 返回 false，则不会调用 "),a("code",[t._v("render()")]),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"componentdidmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#componentdidmount",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("componentDidMount()")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("componentDidMount()")]),t._v(" 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。")]),t._v(" "),a("p",[t._v("这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 "),a("code",[t._v("componentWillUnmount()")]),t._v(" 里取消订阅")]),t._v(" "),a("h4",{attrs:{id:"componentdidupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#componentdidupdate",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("componentDidUpdate()")]),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// snapshot 为getSnapshotBeforeUpdate()的返回值")]),t._v("\n")])])]),a("p",[t._v("当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 典型用法（不要忘记比较 props）：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你也可以在 "),a("code",[t._v("componentDidUpdate()")]),t._v(" 中"),a("strong",[t._v("直接调用 "),a("code",[t._v("setState()")])]),t._v("，但请注意"),a("strong",[t._v("它必须被包裹在一个条件语句里")]),t._v("，正如上述的例子那样进行处理，否则会导致死循环。")]),t._v(" "),a("h4",{attrs:{id:"componentwillunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://react.docschina.org/docs/react-component.html#componentwillunmount",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("componentWillUnmount()")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("componentWillUnmount()")]),t._v(" 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 "),a("code",[t._v("componentDidMount()")]),t._v(" 中创建的订阅等。")]),t._v(" "),a("p",[a("code",[t._v("componentWillUnmount()")]),t._v(" 中"),a("strong",[t._v("不应调用 "),a("code",[t._v("setState()")])]),t._v("，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。")]),t._v(" "),a("h4",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://react.docschina.org/docs/error-boundaries.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("错误处理")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("错误边界在开发模式下只会闪一下，界面渲染依然会中断。在生产模式下不会中断界面渲染。")]),t._v(" "),a("h2",{attrs:{id:"react-中-keys-的作用是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-keys-的作用是什么？"}},[t._v("#")]),t._v(" React 中 keys 的作用是什么？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("key 帮助 React 识别哪些元素改变了，比如被添加或删除。减少组件的更新区域，提升性能")]),t._v(" "),a("li",[t._v("一个好的经验法则是：在 "),a("code",[t._v("map()")]),t._v(" 方法中的元素需要设置 key 属性。")]),t._v(" "),a("li",[t._v("key是唯一的，是指"),a("strong",[t._v("key 只是在兄弟节点之间必须唯一")]),t._v("。")]),t._v(" "),a("li",[t._v("key 会传递信息给 React ，但不会传递给你的组件。即，"),a("code",[t._v("props.key")]),t._v("读不到值。")])]),t._v(" "),a("h2",{attrs:{id:"调用-setstate-之后发生了什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用-setstate-之后发生了什么？"}},[t._v("#")]),t._v(" 调用 setState 之后发生了什么？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("setState()")]),t._v(" 将对组件 state 的更改加入更新队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。")]),t._v(" "),a("li",[a("code",[t._v("setState()")]),t._v(" 并不是立即更新组件。它会批量推迟更新。")])]),t._v(" "),a("h2",{attrs:{id:"简述-flux-思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-flux-思想"}},[t._v("#")]),t._v(" 简述 flux 思想")]),t._v(" "),a("p",[t._v('答案：Flux 的最大特点，就是数据的"单向流动"。')]),t._v(" "),a("ol",[a("li",[t._v("用户访问 View")]),t._v(" "),a("li",[t._v("View 发出用户的 Action")]),t._v(" "),a("li",[t._v("Dispatcher 收到 Action，要求 Store 进行相应的更新")]),t._v(" "),a("li",[t._v('Store 更新后，发出一个"change"事件')]),t._v(" "),a("li",[t._v('View 收到"change"事件后，更新页面')])]),t._v(" "),a("h2",{attrs:{id:"打包，并在本地测试的步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包，并在本地测试的步骤"}},[t._v("#")]),t._v(" 打包，并在本地测试的步骤")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("package.json")]),t._v("添加"),a("code",[t._v('"homepage": "."')]),t._v("项。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("npm run build")]),t._v("执行打包。")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://create-react-app.dev/docs/deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("本地全局安装静态服务器"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g serve  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局安装serve")]),t._v("\nserve "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前目录的build目录作为静态资源目录 ")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"react中组件传值方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react中组件传值方式"}},[t._v("#")]),t._v(" React中组件传值方式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("props和回调")]),t._v("。常用用于父子组件通信。")]),t._v(" "),a("li",[a("strong",[t._v("context对象")]),t._v("。常用于跨级组件通信。")]),t._v(" "),a("li",[a("strong",[t._v("redux、mobx等状态库")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("事件发布订阅")]),t._v("(node的events内置库)。不常用，但是是个很重要的思想。")])]),t._v(" "),a("h2",{attrs:{id:"开启react项目装饰器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启react项目装饰器模式"}},[t._v("#")]),t._v(" 开启React项目装饰器模式")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("依赖"),a("code",[t._v("react-app-rewired")]),t._v("、"),a("code",[t._v("customize-cra")]),t._v("两个库。")])]),t._v(" "),a("li",[a("p",[t._v("修改"),a("code",[t._v("package.json")]),t._v("文件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts eject"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成如下：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app-rewired start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app-rewired build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app-rewired test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts eject"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在项目根目录新建"),a("code",[t._v("config-overrides.js")]),t._v(",用于修改默认配置")])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("config-overrides.js")]),t._v("中添加如下配置以启动装饰器模式")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    override"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    addDecoratorsLegacy\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"customize-cra"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDecoratorsLegacy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这仅仅只是添加装饰器，在这儿还可以添加很多其他功能，根据需要添加。")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"react路由-组件懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react路由-组件懒加载"}},[t._v("#")]),t._v(" React路由/组件懒加载")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可以借助"),a("code",[t._v("React")]),t._v("的 "),a("strong",[a("code",[t._v("lazy、suspense")])]),t._v(" API 实现懒加载。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" LazyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/LazyComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Suspense fallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("LazyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Suspense"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用社区的"),a("code",[t._v("react-loadable")]),t._v("库实现懒加载。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Loadable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-loadable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Loading "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-loading-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载中组件")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Loadable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"create-react-app项目scss-sass模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app项目scss-sass模块化"}},[t._v("#")]),t._v(" "),a("code",[t._v("create-react-app")]),t._v("项目"),a("code",[t._v("scss/sass")]),t._v("模块化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装"),a("code",[t._v("node-sass")]),t._v("包")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("scss")]),t._v("文件以"),a("code",[t._v("xxx.module.scss")]),t._v("命名")])]),t._v(" "),a("li",[a("p",[t._v("局部文件命名："),a("code",[t._v("_xxx.module.scss")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);