(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{407:function(t,v,_){"use strict";_.r(v);var a=_(27),o=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"css-background"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css-background"}},[t._v("#")]),t._v(" css-background")]),t._v(" "),_("h2",{attrs:{id:"background"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" background "),_("Badge",{attrs:{text:"简写属性"}})],1),t._v(" "),_("p",[t._v("background是CSS简写属性。"),_("br"),t._v("\n集中定义以下属性："),_("br"),t._v(" "),_("code",[t._v("background-origin")]),_("br"),t._v(" "),_("code",[t._v("background-clip")]),_("br"),t._v(" "),_("code",[t._v("background-image")]),_("br"),t._v(" "),_("code",[t._v("background-position")]),t._v("/"),_("code",[t._v("background-size")]),_("br"),t._v(" "),_("code",[t._v("background-repeat")]),_("br"),t._v(" "),_("code",[t._v("background-attachment")]),_("br"),t._v(" "),_("code",[t._v("background-color")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),_("p",[t._v("以上顺序是推荐书写顺序。\n注意"),_("code",[t._v("background-position")]),t._v("和"),_("code",[t._v("background-size")]),t._v("中间的"),_("strong",[t._v("斜杆")]),t._v("是固定写法")])]),t._v(" "),_("p",[t._v("对于所有简写属性，任何没有被指定的值都会被设定为它们的"),_("code",[t._v("初始值")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"使用举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用举例"}},[t._v("#")]),t._v(" 使用举例")]),t._v(" "),_("div",{staticClass:"language-css extra-class"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[_("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("content-box padding-box "),_("span",{pre:!0,attrs:{class:"token url"}},[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ice.jpg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" top right no-repeat space scroll pink"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*<box>====>出现2次：content-box padding-box*/")]),t._v("\n")])])]),_("h3",{attrs:{id:"书写规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#书写规则"}},[t._v("#")]),t._v(" 书写规则")]),t._v(" "),_("ul",[_("li",[t._v("可以定义多层背景，使用逗号分隔，先定义的背景"),_("code",[t._v("z-index")]),t._v("值越高。")]),t._v(" "),_("li",[_("code",[t._v("background-color")]),t._v("需要写在最后。(其实有些浏览器没这个要求)。")]),t._v(" "),_("li",[_("code",[t._v("<box>")]),t._v("可以出现0、1、2次。\n"),_("ul",[_("li",[t._v("出现1次同时设定"),_("code",[t._v("background-origin")]),t._v("和"),_("code",[t._v("background-clip")]),t._v("；")]),t._v(" "),_("li",[t._v("出现2次时，第一次的出现设定"),_("code",[t._v("background-origin")]),t._v("，第二次出现设定"),_("code",[t._v("background-clip")]),t._v("。")])])]),t._v(" "),_("li",[_("code",[t._v("background-size")]),_("span",{staticStyle:{color:"red"}},[_("strong",[t._v("只能")])]),t._v("紧跟着"),_("code",[t._v("background-position")]),t._v('出现，以"/"分割，如： "'),_("code",[t._v("center/200px 100px")]),t._v('"。')]),t._v(" "),_("li",[t._v("其他的书写顺序无关紧要，推荐顺序更可靠。")])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-image"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-image"}},[t._v("#")]),t._v(" background-image")]),t._v(" "),_("p",[t._v("为元素设置"),_("strong",[t._v("一个或者多个")]),t._v("背景图像。")]),t._v(" "),_("p",[_("strong",[t._v("border-images-bgColor的z-index关系：")]),t._v(" border>image1>image2>bgColor。")]),t._v(" "),_("h4",{attrs:{id:"使用举例-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用举例-2"}},[t._v("#")]),t._v(" "),_("strong",[t._v("使用举例:")])]),t._v(" "),_("div",{staticClass:"language-css extra-class"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[_("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token url"}},[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.jpg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),_("span",{pre:!0,attrs:{class:"token url"}},[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2.jpg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("br"),t._v(" "),_("h2",{attrs:{id:"background-clip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-clip"}},[t._v("#")]),t._v(" background-clip")]),t._v(" "),_("p",[t._v("设置元素背景(背景图或颜色)的"),_("strong",[t._v("绘制范围")]),t._v("。包括"),_("code",[t._v("border-box")]),t._v("、"),_("code",[t._v("padding-box")]),t._v("、"),_("code",[t._v("content-box")]),t._v("、"),_("code",[t._v("text")]),t._v("。默认值是"),_("code",[t._v("border-box")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"属性值介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性值介绍"}},[t._v("#")]),t._v(" 属性值介绍:")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("border-box")])])]),t._v(" "),_("p",[t._v("​\t\t默认值，背景延伸至边框外沿("),_("strong",[t._v("但是在边框下层")]),t._v(")。")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("padding-box")])])]),t._v(" "),_("p",[t._v("​\t\t背景延伸至padding外沿。不会绘制到边框处。")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("content-box")])])]),t._v(" "),_("p",[t._v("​\t\t背景只延伸至内容区("),_("code",[t._v("content")]),t._v(")的外沿。")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("text")])])]),t._v(" "),_("p",[t._v("​\t\t实验性的API，不建议在生产环境中使用。背景被裁减成文字的前景色。")]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-origin"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-origin"}},[t._v("#")]),t._v(" background-origin")]),t._v(" "),_("p",[t._v("指定"),_("code",[t._v("background-position")]),t._v("的"),_("strong",[t._v("定位参考范围")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"属性值介绍-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性值介绍-2"}},[t._v("#")]),t._v(" 属性值介绍:")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("border-box")])])]),t._v(" "),_("p",[t._v("​\t\t默认值，背景图片的摆放以"),_("code",[t._v("border")]),t._v("区域为参考。")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("padding-box")])])]),t._v(" "),_("p",[t._v("​\t\t背景图片的摆放以"),_("code",[t._v("padding")]),t._v("区域为参考。")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("content-box")])])]),t._v(" "),_("p",[t._v("​\t\t背景图片的摆放以"),_("code",[t._v("content")]),t._v("区域为参考。")]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-position"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-position"}},[t._v("#")]),t._v(" background-position")]),t._v(" "),_("p",[t._v("为背景图设置初始位置。这个位置相对于"),_("code",[t._v("background-origin")]),t._v("的属性值。")]),t._v(" "),_("h4",{attrs:{id:"属性值写法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性值写法"}},[t._v("#")]),t._v(" 属性值写法:")]),t._v(" "),_("p",[_("strong",[t._v("关键字")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("center")]),t._v("：上下左右居中。")]),t._v(" "),_("li",[_("code",[t._v("top")]),t._v("：左右居中，紧贴上部。")]),t._v(" "),_("li",[_("code",[t._v("left")]),t._v("：上下居中，紧贴左部。")]),t._v(" "),_("li",[_("code",[t._v("bottom、right")]),t._v("：同理")])]),t._v(" "),_("p",[_("strong",[t._v("两个值写法")])]),t._v(" "),_("ul",[_("li",[t._v("组合使用"),_("code",[t._v("top、bottom、left、right")])]),t._v(" "),_("li",[_("code",[t._v("25% 75%")]),t._v("、"),_("code",[t._v("50px 100px")]),t._v("等值：定义的是一个x/y坐标。前者x,后者y。")])]),t._v(" "),_("p",[_("strong",[t._v("指定偏移写法")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("bottom 10px right 20px")]),t._v("：距离下方10px，距离右方20px。")]),t._v(" "),_("li",[_("code",[t._v("top 10px right")]),t._v("：距离顶部10px，距离右边0px。")])]),t._v(" "),_("p",[_("strong",[t._v("置多重背景")])]),t._v(" "),_("p",[t._v("逗号分隔即可。")]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-size"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-size"}},[t._v("#")]),t._v(" background-size")]),t._v(" "),_("p",[t._v("设置背景图片大小。")]),t._v(" "),_("h4",{attrs:{id:"属性值写法-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性值写法-2"}},[t._v("#")]),t._v(" 属性值写法:")]),t._v(" "),_("p",[_("strong",[t._v("关键字")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("cover")]),t._v("：图片完全覆盖背景区。当"),_("code",[t._v("background-origin")]),t._v("为"),_("code",[t._v("content-box")]),t._v("时，有可能在另一侧超出"),_("code",[t._v("background-origin")]),t._v("区域，进入"),_("code",[t._v("padding-box")]),t._v("区域。")]),t._v(" "),_("li",[_("code",[t._v("contain")]),t._v("：缩放图片以完全进入背景区。")])]),t._v(" "),_("p",[_("strong",[t._v("一个值")])]),t._v(" "),_("p",[t._v("这个值指定图片的宽度，图片的高度隐式的为auto。")]),t._v(" "),_("ul",[_("li",[t._v("50%、3em、50px、auto")])]),t._v(" "),_("p",[_("strong",[t._v("两个值")])]),t._v(" "),_("p",[t._v("第一个值指定图片的宽度，第二个值指定图片的高度")]),t._v(" "),_("ul",[_("li",[t._v("50% auto、3em 25%、auto 6px、200px 100px、auto auto")])]),t._v(" "),_("p",[_("strong",[t._v("设置多重背景")])]),t._v(" "),_("p",[t._v("逗号分隔即可。")]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-repeat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-repeat"}},[t._v("#")]),t._v(" background-repeat")]),t._v(" "),_("p",[t._v("定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。")]),t._v(" "),_("h4",{attrs:{id:"属性值写法-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性值写法-3"}},[t._v("#")]),t._v(" 属性值写法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("单值")])]),t._v(" "),_("th",[_("strong",[t._v("等价于双值")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("repeat-x")])]),t._v(" "),_("td",[_("code",[t._v("repeat no-repeat")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("repeat-y")])]),t._v(" "),_("td",[_("code",[t._v("no-repeat repeat")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("repeat")])]),t._v(" "),_("td",[_("code",[t._v("repeat repeat")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("space")])]),t._v(" "),_("td",[_("code",[t._v("space space")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("round")])]),t._v(" "),_("td",[_("code",[t._v("round round")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("no-repeat")])]),t._v(" "),_("td",[_("code",[t._v("no-repeat no-repeat")])])])])]),t._v(" "),_("p",[t._v("单值组合成合适的双值。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("repeat")]),t._v("：重复，最后一个会被裁剪")]),t._v(" "),_("li",[_("code",[t._v("space")]),t._v("：重复，图像不被裁剪，"),_("strong",[t._v("均匀留空白")]),t._v("。")]),t._v(" "),_("li",[_("code",[t._v("round")]),t._v("：重复，图像不被裁剪，不留白，自由伸展。")]),t._v(" "),_("li",[_("code",[t._v("no-reapeat")]),t._v("：不重复。")])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"background-attachment"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-attachment"}},[t._v("#")]),t._v(" background-attachment")]),t._v(" "),_("p",[t._v("定义背景图像的位置是在视口内固定，还是随着包含它的区块滚动。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("fixed")]),t._v("： 背景图相对于"),_("strong",[t._v("视口")]),t._v("固定。")]),t._v(" "),_("li",[_("code",[t._v("local")]),t._v("：背景图相对于"),_("strong",[t._v("元素内容")]),t._v("固定。")]),t._v(" "),_("li",[_("code",[t._v("scroll")]),t._v("：背景图相对于"),_("strong",[t._v("元素本身")]),t._v("固定。")])])])}),[],!1,null,null,null);v.default=o.exports}}]);