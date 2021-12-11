(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{422:function(a,t,e){"use strict";e.r(t);var s=e(27),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"http-cookies详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-cookies详解"}},[a._v("#")]),a._v(" HTTP cookies详解")]),a._v(" "),e("h2",{attrs:{id:"cookie是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie是什么"}},[a._v("#")]),a._v(" cookie是什么")]),a._v(" "),e("p",[a._v("cookie是浏览器存储在用户电脑上的一小段文本文件；是"),e("code",[a._v("纯文本格式")]),a._v("，不包含任何可执行的代码。一个 Web 页面或服务器告知浏览器按照一定规范来储存这些信息，并在随后的请求中将这些信息发送至服务器，Web 服务器就可以使用这些信息来"),e("code",[a._v("识别不同的用户")]),a._v("。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"创建cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建cookie"}},[a._v("#")]),a._v(" 创建cookie")]),a._v(" "),e("p",[a._v("Web服务器通过发送给浏览器一个"),e("code",[a._v("Set-Cookie")]),a._v("的HTTP消息头来创建一个cookie。"),e("code",[a._v("Set-Cookie")]),a._v("消息头是一个字符串，格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" expires"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("domain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" secure"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("浏览器接收到"),e("code",[a._v("Set-Cookie")]),a._v("后，会在随后的每次请求头中设置"),e("code",[a._v("Cookie")]),a._v("选项。并且只包含"),e("code",[a._v("cookie")]),a._v("的值，"),e("strong",[a._v("忽略全部设置选项")]),a._v("。例如：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("name1"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" name2"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" value3\n")])])]),e("p",[a._v("所以我们用"),e("code",[a._v("document.cookie")]),a._v("获取的cookie是"),e("code",[a._v("name1=vlaue1; name2=value2")]),a._v("字符串，而没有"),e("code",[a._v("expires、path")]),a._v("等设置选项。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"expires过期时间选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires过期时间选项"}},[a._v("#")]),a._v(" "),e("code",[a._v("expires")]),a._v("过期时间选项")]),a._v(" "),e("p",[e("code",[a._v("expires")]),a._v("选项指定cookie的过期时间。")]),a._v(" "),e("p",[a._v("超过这个时间的cookie就不会随请求发送至服务器了，而是被浏览器"),e("strong",[a._v("删除")]),a._v("。")]),a._v(" "),e("p",[a._v("格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" expires"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Sat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("02")]),a._v(" May "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2009")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("38")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GMT")]),a._v("\n")])])]),e("ul",[e("li",[e("p",[a._v("没有设置"),e("code",[a._v("expires")]),a._v("选项时，该cookie会在当前会话结束时失效。")])]),a._v(" "),e("li",[e("p",[a._v("如果"),e("code",[a._v("expires")]),a._v("设置了一个过去的时间点，那么该cookie会被立刻删除掉。"),e("strong",[a._v("删除指定"),e("code",[a._v("cookie")]),a._v("的唯一方法。")])])])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"domain作用域选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#domain作用域选项"}},[a._v("#")]),a._v(" "),e("code",[a._v("domain")]),a._v("作用域选项")]),a._v(" "),e("p",[e("code",[a._v("domain")]),a._v("选项指定cookie在哪个或哪些域中有效。")]),a._v(" "),e("p",[a._v("默认情况下，"),e("code",[a._v("domain")]),a._v("会被设置为创建该cookie的页面所在的域名，所以当给相同域名发送请求时该cookie会被发送至服务器。")]),a._v(" "),e("p",[a._v("格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wlk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com\n")])])]),e("p",[a._v("如上，"),e("code",[a._v("name=Nicholas")]),a._v("cookie项就会在所有的"),e("code",[a._v("*.wlk.com")]),a._v("域名中有效。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"path路径选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path路径选项"}},[a._v("#")]),a._v(" "),e("code",[a._v("path")]),a._v("路径选项")]),a._v(" "),e("p",[e("code",[a._v("path")]),a._v("选项指定了请求的URL中必须存在指定的路径时，该cookie项才会有效。")]),a._v(" "),e("p",[a._v("格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("blog\n")])])]),e("p",[a._v("如上，"),e("code",[a._v("path")]),a._v(" 选项值会与 "),e("code",[a._v("/blog")]),a._v("，"),e("code",[a._v("/bloganything")]),a._v(" 等等相匹配；任何以 "),e("code",[a._v("/blog")]),a._v(" 开头的路径都是有效的。需要注意的是，只有在 "),e("code",[a._v("domain")]),a._v(" 选项核实完毕之后才会对 "),e("code",[a._v("path")]),a._v(" 属性进行比较。"),e("code",[a._v("path")]),a._v(" 属性的默认值是发送 "),e("code",[a._v("Set-Cookie")]),a._v(" 消息头所对应的 URL 中的 "),e("code",[a._v("path")]),a._v(" 部分。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"secure安全选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secure安全选项"}},[a._v("#")]),a._v(" "),e("code",[a._v("secure")]),a._v("安全选项")]),a._v(" "),e("p",[e("strong",[a._v("最后一个选项")]),a._v("是 "),e("code",[a._v("secure")]),a._v("。不像其它选项，该选项只是一个标记而"),e("strong",[a._v("没有值")]),a._v("。只有当一个请求通过 SSL 或 HTTPS 发送时，包含 "),e("code",[a._v("secure")]),a._v(" 选项的 cookie 才能随请求发送至服务器。")]),a._v(" "),e("p",[a._v("格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" secure\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"cookie的维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie的维护"}},[a._v("#")]),a._v(" Cookie的维护")]),a._v(" "),e("p",[a._v("在一个 cookie 中可以指定任意数量的选项，并且这些选项可以是任意顺序，例如：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nczonline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("net"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("blog\n")])])]),e("p",[a._v("这个 cookie 有四个标识符：cookie 的 "),e("code",[a._v("name")]),a._v("，"),e("code",[a._v("domain")]),a._v("，"),e("code",[a._v("path")]),a._v("，"),e("code",[a._v("secure")]),a._v(" 标记。要想改变这个 cookie 的值，需要发送另一个具有"),e("strong",[a._v("相同")]),a._v(" cookie "),e("code",[a._v("name")]),a._v("，"),e("code",[a._v("domain")]),a._v("，"),e("code",[a._v("path")]),a._v(" 的 "),e("code",[a._v("Set-Cookie")]),a._v(" 消息头。例如：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Greg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nczonline"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("net"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("blog\n")])])]),e("p",[a._v("如果有任意一项不同，就会创建一个完全不同的新cookie。")]),a._v(" "),e("p",[a._v("cookie设置项越详细越靠前，越靠前，先生效。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"cookie限制条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie限制条件"}},[a._v("#")]),a._v(" Cookie限制条件")]),a._v(" "),e("p",[a._v("部分浏览器对cookie条数有所限制，比如Opera限定为30个，IE7限定为50个，Safari和Chrome没有个数限制。发向服务器的所有cookie的最大数据量不能超过：4KB。")]),a._v(" "),e("p",[a._v("超出部分会被截取掉，不发送至服务器。")]),a._v(" "),e("p",[a._v("随着浏览器的更新，这些限制可能会有所变化。")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"javascript中的cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的cookie"}},[a._v("#")]),a._v(" JavaScript中的cookie")]),a._v(" "),e("p",[a._v("通过JavaScript中的"),e("code",[a._v("document.cookie")]),a._v("属性，可以创建、修改、删除cookie。创建cookie时，相当于"),e("code",[a._v("Set-Cookie")]),a._v("消息头；读取cookie时，相当于"),e("code",[a._v("cookie")]),a._v("消息头。")]),a._v(" "),e("p",[e("strong",[a._v("创建/修改/删除cookie：")]),a._v("这一条语句就全部解决。")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name=Nicholas;domain=nczonline.net;path=/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("以上代码，并不会删除现已存储在页面中的cookie，它只是简单的创建、修改或删除字符串中指定的cookie。")]),a._v(" "),e("p",[e("strong",[a._v("获取cookie：")])]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookie\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n返回的是所有当前页面下的cookie。格式如下：(别搞丢了 **分号和空格**)\nname1=Greg; name2=Nicholas; addr=nanjing\n*/")]),a._v("\n")])])]),e("p",[a._v("所以我们需要手工解析该cookie字符串，来提取指定的cookie项。"),e("a",{attrs:{href:"http://119.45.114.204:8080/wanglk/blog/ECMAScript/ES3_5/myCookiejs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("我自己封装的操作Cookie的模块"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("strong",[a._v("注意：")]),a._v("一旦 cookie 通过 JavaScript 设置后便不能提取它的选项，所以你将不能知道 "),e("code",[a._v("domain")]),a._v("，"),e("code",[a._v("path")]),a._v("，"),e("code",[a._v("expires")]),a._v(" 日期或 "),e("code",[a._v("secure")]),a._v(" 标记。(通过浏览器控制台的Application/Cookies可以查看)")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"httponly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[a._v("#")]),a._v(" HttpOnly")]),a._v(" "),e("p",[e("code",[a._v("HttpOnly")]),a._v("选项告知浏览器该cookie绝不能通过JavaScript的"),e("code",[a._v("document.cookie")]),a._v("属性访问。这阻止了通过JavaScript发起的跨站脚本攻击(XSS)。")]),a._v(" "),e("p",[a._v("一旦设置了该选项，该cookie项就不能通过JavaScript操作了。")]),a._v(" "),e("p",[a._v("格式如下：")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("Set"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Cookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Nicholas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" HttpOnly\n")])])]),e("p",[a._v("我们不能自己设置"),e("code",[a._v("HttpOnly")]),a._v("，因为我们不能再通过 JavaScript 读取这些 cookie。服务器自己已经设置好了。")])])}),[],!1,null,null,null);t.default=o.exports}}]);