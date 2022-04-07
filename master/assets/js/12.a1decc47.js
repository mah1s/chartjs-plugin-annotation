(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{497:function(t,e,a){"use strict";a.r(e);var s=a(22),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-x-migration-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-x-migration-guide"}},[t._v("#")]),t._v(" 1.x Migration Guide")]),t._v(" "),a("p",[a("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 1 introduces a number of breaking changes in order to compatible with Chart.js 3 and to align with Chart.js 3 options.")]),t._v(" "),a("h2",{attrs:{id:"setup-and-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-installation"}},[t._v("#")]),t._v(" Setup and installation")]),t._v(" "),a("p",[t._v("Chart.js 3 is tree-shakeable and thus requires registering the plugins when used as an "),a("code",[t._v("npm")]),t._v(" module. Here is an example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LineController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LineElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LinearScale "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Annotation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chartjs-plugin-annotation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LineController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LineElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PointElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LinearScale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data: ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// annotation plugin options")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// annotation element options")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scaleID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("borderColor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("borderWidth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"plugin-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[t._v("#")]),t._v(" Plugin options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("events")]),t._v(" array was removed. Listened events are determined automatically from the hooks specified.")]),t._v(" "),a("li",[a("code",[t._v("enter")]),t._v(", "),a("code",[t._v("leave")]),t._v(", "),a("code",[t._v("click")]),t._v(", "),a("code",[t._v("dblclick")]),t._v(" event hooks can now be defined also at plugin level options.")])]),t._v(" "),a("h3",{attrs:{id:"element-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-options"}},[t._v("#")]),t._v(" Element options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("onMouseenter")]),t._v(" was removed. Use "),a("code",[t._v("enter")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onMouseleave")]),t._v(" was removed. Use "),a("code",[t._v("leave")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onMouseover")]),t._v(" was removed. Use "),a("code",[t._v("enter")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onMouseout")]),t._v(" was removed. Use "),a("code",[t._v("leave")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onMousemove")]),t._v(" was removed.")]),t._v(" "),a("li",[a("code",[t._v("onMousedown")]),t._v(" was removed. Use "),a("code",[t._v("click")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onMouseup")]),t._v(" was removed. Use "),a("code",[t._v("click")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onClick")]),t._v(" was removed. Use "),a("code",[t._v("click")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onDblclick")]),t._v(" was removed. Use "),a("code",[t._v("dblclick")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("onContextmenu")]),t._v(" was removed.")]),t._v(" "),a("li",[a("code",[t._v("onWheel")]),t._v(" was removed.")])]),t._v(" "),a("h3",{attrs:{id:"line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#line"}},[t._v("#")]),t._v(" Line")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mode")]),t._v(" was removed. The mode is automatically calculated based on the scale.")]),t._v(" "),a("li",[a("code",[t._v("position")]),t._v(" values were changed to "),a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(" and "),a("code",[t._v("'end'")]),t._v(".\n"),a("ul",[a("li",[a("code",[t._v("'start'")]),t._v(" replaces previous "),a("code",[t._v("'left'")]),t._v(" and "),a("code",[t._v("'top'")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("'end'")]),t._v(" replaces previous "),a("code",[t._v("'right'")]),t._v(" and "),a("code",[t._v("'bottom'")]),t._v(".")])])])]),t._v(" "),a("h4",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[t._v("#")]),t._v(" Label")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fontColor")]),t._v(" was renamed to "),a("code",[t._v("font.color")])]),t._v(" "),a("li",[a("code",[t._v("fontFamily")]),t._v(" was renamed to "),a("code",[t._v("font.family")])]),t._v(" "),a("li",[a("code",[t._v("fontSize")]),t._v(" was renamed to "),a("code",[t._v("font.size")])]),t._v(" "),a("li",[a("code",[t._v("fontStyle")]),t._v(" was renamed to "),a("code",[t._v("font.style")])]),t._v(" "),a("li",[a("code",[t._v("lineHeight")]),t._v(" was renamed to "),a("code",[t._v("font.lineHeight")])])]),t._v(" "),a("h2",{attrs:{id:"event-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-hooks"}},[t._v("#")]),t._v(" Event hooks")]),t._v(" "),a("ul",[a("li",[t._v("Event hooks are now supplied with single "),a("code",[t._v("context")]),t._v(" parameter, containing "),a("code",[t._v("chart")]),t._v(" and "),a("code",[t._v("element")]),t._v(" properties. "),a("code",[t._v("chart")]),t._v(" is the chart instance and "),a("code",[t._v("element")]),t._v(" is the event target annotation element.")]),t._v(" "),a("li",[t._v("Events are now fired from "),a("code",[t._v("beforeEvent")]),t._v(" hook.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);