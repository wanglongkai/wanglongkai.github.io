(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{371:function(t,s,a){t.exports=a.p+"assets/img/flex-direction.25dde35d.jpg"},372:function(t,s,a){t.exports=a.p+"assets/img/flex-wrap.891e460a.jpg"},373:function(t,s,a){t.exports=a.p+"assets/img/flex-justify-content.e372054b.jpg"},374:function(t,s,a){t.exports=a.p+"assets/img/flex-align-item.7d2438aa.jpg"},375:function(t,s,a){t.exports=a.p+"assets/img/flex-align-content.32d839c6.jpg"},376:function(t,s,a){t.exports=a.p+"assets/img/flex-grow.6c596211.jpg"},377:function(t,s,a){t.exports=a.p+"assets/img/flex-shrink.79549491.jpg"},378:function(t,s,a){t.exports=a.p+"assets/img/flex-align-self.8c9ac62c.jpg"},409:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"flex布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[t._v("#")]),t._v(" Flex布局")]),t._v(" "),e("p",[t._v("详情参阅"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?%5E%25$",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-Flex布局教程"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"flex布局是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex布局是什么？"}},[t._v("#")]),t._v(" Flex布局是什么？")]),t._v(" "),e("p",[t._v("弹性布局，容器设置"),e("code",[t._v("display")]),t._v("为"),e("code",[t._v("flex")]),t._v("或"),e("code",[t._v("inlne-flex")]),t._v("即指定为flex布局。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v(".box{\n\tdisplay:flex;\n}\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("设为flex布局后，直接子元素的"),e("code",[t._v("float")]),t._v("、"),e("code",[t._v("clear")]),t._v("、"),e("code",[t._v("vertical-align")]),t._v("属性都将失效。")])]),t._v(" "),e("h2",{attrs:{id:"容器的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[t._v("#")]),t._v(" 容器的属性")]),t._v(" "),e("p",[t._v("以下6个属性设置在容器上。")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-direction\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-wrap\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-flow==>flex-direction和flex-wrap的简写形式\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" justify-content\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" align-items\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" align-content\n")])])]),e("br"),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("flex-direction")]),t._v(":决定主轴的方向（即项目排列的方向）。常用")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍*/")]),t._v("\nrow（默认值）：主轴为水平方向，起点在左端。\nrow-reverse：主轴为水平方向，起点在右端。\ncolumn：主轴为垂直方向，起点在上沿。\ncolumn-reverse：主轴为垂直方向，起点在下沿。\n")])])]),e("p",[e("img",{attrs:{src:a(371),alt:"flex-direction"}})])])]),t._v(" "),e("p",[e("br"),t._v(" "),e("br")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("flex-wrap")]),t._v(":默认情况下，项目都排在一条轴线上。该属性定义一条轴线排不下时，如何换行。")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nowrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：不换行。\nwrap：换行，第一行在上方，即常规的换行。\nwrap-reverse：换行，第一行在下方。\n")])])]),e("p",[e("img",{attrs:{src:a(372),alt:"flex-wrap"}}),t._v(" "),e("br"),t._v(" "),e("br")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("justify-content")]),t._v("：定义项目在主轴上的对齐方式。常用")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍*/")]),t._v("\nflex-start（默认值）：左对齐\nflex-end：右对齐\ncenter： 居中\nspace-between：两端对齐，项目之间的间隔都相等。\nspace-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。\n")])])]),e("p",[e("img",{attrs:{src:a(373),alt:"justify-content"}}),t._v(" "),e("br"),t._v(" "),e("br")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("align-items")]),t._v(":定义项目在交叉轴上的对齐方式。")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍*/")]),t._v("\nflex-start：交叉轴的起点对齐。\nflex-end：交叉轴的终点对齐。\ncenter：交叉轴的中点对齐。\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("baseline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 项目的第一行文字的基线对齐。\nstretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。\n")])])]),e("p",[e("img",{attrs:{src:a(374),alt:"align-items"}})])])]),t._v(" "),e("p",[e("br"),t._v(" "),e("br")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("align-content")]),t._v(":属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍*/")]),t._v("\nflex-start：与交叉轴的起点对齐。\nflex-end：与交叉轴的终点对齐。\ncenter：与交叉轴的中点对齐。\nspace-between：与交叉轴两端对齐，轴线之间的间隔平均分布。\nspace-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\nstretch（默认值）：轴线占满整个交叉轴。\n")])])]),e("p",[e("img",{attrs:{src:a(375),alt:"align-content"}}),t._v(" "),e("br"),t._v(" "),e("br")])])]),t._v(" "),e("h2",{attrs:{id:"项目的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[t._v("#")]),t._v(" 项目的属性")]),t._v(" "),e("p",[t._v("以下6个属性设置在项目上。")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" order\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-grow\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-shrink\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex-basis\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" flex\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" align-self\n")])])]),e("br"),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("flex")]),t._v(":"),e("code",[t._v("flex-grow")]),t._v("、"),e("code",[t._v("flex-shrink")]),t._v("、"),e("code",[t._v("flex-basis")]),t._v("的简写形式，默认值为"),e("code",[t._v("0 1 auto")]),t._v("。")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("flex-grow")]),t._v("属性定义项目的放大比例，默认为"),e("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(376),alt:"flex-grow"}})])]),t._v(" "),e("li",[e("p",[e("code",[t._v("flex-shrink")]),t._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(377),alt:"flex-shrink"}})])]),t._v(" "),e("li",[e("p",[e("code",[t._v("flex-basis")]),t._v("属性定义了在分配多余空间之前，项目占据的主轴空间。")]),t._v(" "),e("ul",[e("li",[t._v("浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),e("code",[t._v("auto")]),t._v("，即项目的本来大小。")])])])])])]),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("align-self")]),t._v(":该属性允许单个项目在交叉轴上有不一样的对齐方式，可覆盖"),e("code",[t._v("align-items")]),t._v("的属性。")])]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*属性介绍：同align-items一样*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("auto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("表示继承align-items的属性值。（默认值）\n")])])]),e("p",[e("img",{attrs:{src:a(378),alt:"align-self"}})])])])])}),[],!1,null,null,null);s.default=n.exports}}]);