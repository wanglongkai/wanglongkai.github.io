(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{416:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"scss基本知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss基本知识点"}},[s._v("#")]),s._v(" Scss基本知识点")]),s._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("blockquote",[a("p",[s._v("任何可以用作css属性值的赋值都可以用作"),a("code",[s._v("scss")]),s._v("的变量值，甚至是以空格分割的多个属性值。")])]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#f90"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myBorder")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$font")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Myriad Pro"')]),s._v("、Myriad、"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Helvetica Neue"')]),s._v("、Helvetica、"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Liberation Sans"')]),s._v("、Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("strong",[s._v("变量作用域：")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("scss")]),s._v("变量可以理解为"),a("code",[s._v("{...}")]),s._v("作用域。定义在css规则块内，该变量就只在该规则块内有效。")]),s._v(" "),a("p",[s._v("变量必须先声明，后使用。")])]),s._v(" "),a("p",[s._v("变量值也可以引用其他变量。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$border")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1px solid "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("strong",[s._v("变量命名规则：")])]),s._v(" "),a("blockquote",[a("p",[s._v("变量可以是驼峰式("),a("code",[s._v("$myBorder")]),s._v(")，也可以是中划线($my-border)或下划线($my_border)连接的格式。中划线和下划线分割是等效的。比如："),a("code",[s._v("$link-color")]),s._v("和"),a("code",[s._v("$link_color")]),s._v("其实指向的是同一个变量。")])]),s._v(" "),a("p",[a("strong",[s._v("默认变量值：")])]),s._v(" "),a("p",[a("code",[s._v("!default")]),s._v("标签标注变量默认值。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fancybox-width")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 400px "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[s._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".fancybox ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fancybox-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"嵌套规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套规则"}},[s._v("#")]),s._v(" 嵌套规则")]),s._v(" "),a("p",[a("strong",[s._v("选择器嵌套：")])]),s._v(" "),a("p",[a("code",[s._v("&")]),s._v("在嵌套规则中代表父选择器。这对"),a("code",[s._v(":hover")]),s._v("等伪类非常有用。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#content a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v("：hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*编译后*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#content a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#content a:hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("父选择器标识符("),a("code",[s._v("&")]),s._v(")之前可以添加额外的选择器。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#content aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#mian "),a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*编译后*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#content aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#main #content aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("scss")]),s._v("嵌套规则非常智能，可以在实际使用中多做尝试。")]),s._v(" "),a("p",[a("strong",[s._v("属性嵌套：")])]),s._v(" "),a("p",[s._v("嵌套属性的规则是这样的：把属性名从中划线-的地方断开，在根属性后边添加一个"),a("strong",[s._v("冒号:")]),s._v("，紧跟一个"),a("code",[s._v("{ }")]),s._v("块，把子属性部分写在这个"),a("code",[s._v("{ }")]),s._v("块中。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border:")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*编译后*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("bordr-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"import规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import规则"}},[s._v("#")]),s._v(" @import规则")]),s._v(" "),a("p",[a("code",[s._v("css")]),s._v("的"),a("code",[s._v("@import")]),s._v("规则特别不常用，原因是：只有执行到"),a("code",[s._v("@import")]),s._v("规则时，浏览器才会去下载指定的css文件，导致页面加载速度变慢。而"),a("code",[s._v("scss")]),s._v("的"),a("code",[s._v("@import")]),s._v("在文件生成时就导入相关的文件。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("scss")]),s._v("的"),a("code",[s._v("@import")]),s._v("规则可以不指明导入文件的后缀。比如：")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*相当于 @import "colors.scss"*/')]),s._v("\n")])])]),a("p",[a("strong",[a("code",[s._v("scss")]),s._v("局部文件")]),s._v("：")]),s._v(" "),a("p",[s._v("局部文件以下划线开头，这样"),a("code",[s._v("scss")]),s._v("文件在编译时就不会单独为该文件输出"),a("code",[s._v("css")]),s._v("文件，而只把这个文件用作导入。")]),s._v(" "),a("h2",{attrs:{id:"混合器-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合器-mixin"}},[s._v("#")]),s._v(" 混合器 "),a("code",[s._v("@mixin")])]),s._v(" "),a("p",[s._v("混合器的目的是实现大"),a("strong",[s._v("段样式代码的重用")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("定义混合器：")]),s._v(" "),a("code",[s._v("@mixin")])]),s._v(" "),a("p",[s._v("最简单的定义：")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("rounded-corners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("使用混合器：")]),s._v(" "),a("code",[s._v("@include")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".notice ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid #00aa00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" rounded-corners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("混合器的使用场景：")])]),s._v(" "),a("p",[s._v("判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如"),a("code",[s._v("rounded-corners``fancy-font")]),s._v("或者"),a("code",[s._v("no-bullets")]),s._v("，那么往往能够构造一个合适的混合器。如果你找不到，这时候构造一个混合器可能并不合适。")]),s._v(" "),a("p",[a("strong",[s._v("有参混合器：")])]),s._v(" "),a("p",[s._v("定义有参混合器：")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has-params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("使用有参混合器：")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has-params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("#ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*或者：*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has-params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*编译结果*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a:hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a:visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"继承-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承-extend"}},[s._v("#")]),s._v(" 继承 "),a("code",[s._v("@extend")])]),s._v(" "),a("p",[s._v("区分"),a("strong",[s._v("继承和混合器的区别")]),s._v("很重要。混合器是实现css规则的重用，而继承是实现选择器的重用。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3cplus.com/preprocessor/understanding-placeholder-selectors.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("看懂这篇博客"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"备注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[s._v("#")]),s._v(" 备注")]),s._v(" "),a("p",[a("code",[s._v("Scss")]),s._v("是目前最为强大的"),a("code",[s._v("css")]),s._v("预编译语言，它的"),a("code",[s._v("SassScript")]),s._v("语法接近编程语言：有条件判断、循环等控制语句特性，有函数特性。在实际使用时要多猜想"),a("code",[s._v("scss")]),s._v("能实现你的效果。")])])}),[],!1,null,null,null);t.default=e.exports}}]);