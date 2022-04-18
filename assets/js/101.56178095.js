(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{499:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"四、全景标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、全景标记"}},[t._v("#")]),t._v(" 四、全景标记")]),t._v(" "),a("p",[t._v("为了让全景图知道，我要把标记标注在什么地方，我需要一个工具来把原图和全景图上的位置关联起来：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://conardli.top/img/qj/qj_17_qj.gif",alt:""}}),t._v("\n由于这部分代码和"),a("code",[t._v("Three.js")]),t._v("关系不大，这里我只说一下基本的实现逻辑，有兴趣可以去我的"),a("code",[t._v("github")]),t._v("仓库查看。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-要求"}},[t._v("#")]),t._v(" 4.1 要求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("建立坐标和全景的映射关系，为全景赋予一套虚拟坐标")])]),t._v(" "),a("li",[a("p",[t._v("在一张平铺的全景图上，可以在任意位置增加标记，并获取标记的坐标")])]),t._v(" "),a("li",[a("p",[t._v("使用坐标在预览全景增加标记，看到的标记位置和平铺全景中的位置相同")])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-坐标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-坐标"}},[t._v("#")]),t._v(" 4.2 坐标")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("2D")]),t._v("平面上，我们能监听屏幕的鼠标事件，我们可以获取的也只是当前的鼠标坐标，我们要做的是将鼠标坐标转换成三维空间坐标。")]),t._v(" "),a("p",[t._v("看起来好像是不可能的，二维坐标怎么能转换成三维坐标呢？")]),t._v(" "),a("p",[t._v("但是，我们可以借助一种中间坐标来转换，可以把它称之为“经纬度”。")]),t._v(" "),a("p",[t._v("在这之前，我们先来看看我们常说的经纬度到底是什么。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-经纬度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-经纬度"}},[t._v("#")]),t._v(" 4.3 经纬度")]),t._v(" "),a("p",[t._v("使用经纬度，可以精确的定位到地球上任意一个点，它的计算规则是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://conardli.top/img/qj/qj_18_jwd.png",alt:""}})]),t._v(" "),a("p",[t._v("通常把连接南极到北极的线叫做子午线也叫经线，其所对应的面叫做子午面，规定英国伦敦格林尼治天文台原址的那条经线称为0°经线，也叫本初子午线其对应的面即本初子午面。")]),t._v(" "),a("p",[t._v("经度：球面上某店对应的子午面与本初子午面间的夹角。东正西负。")]),t._v(" "),a("p",[t._v("纬度 ：球面上某点的法线（以该店作为切点与球面相切的面的法线）与赤道平面的夹角。北正南负。")]),t._v(" "),a("p",[t._v("由此，地球上每一个点都能被对应到一个经度和纬度，想对应的，也能对应到某条经线和纬线上。")]),t._v(" "),a("p",[t._v("这样，即使把球面展开称平面，我们仍然能用经纬度表示某店\b点的位置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://conardli.top/img/qj/qj_19_map.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_4-4-坐标转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-坐标转换"}},[t._v("#")]),t._v(" 4.4 坐标转换")]),t._v(" "),a("p",[t._v("基于上面的分析，我们完全可以给平面的全景图赋予一个虚拟的“经纬度”。我们使用"),a("code",[t._v("Canvas")]),t._v('为它绘制一张"经纬网"：')]),t._v(" "),a("p",[a("img",{attrs:{src:"http://conardli.top/img/qj/qj_20_jwd.png",alt:""}})]),t._v(" "),a("p",[t._v('将鼠标坐标转换为"经纬度"：')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calLonLat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _setContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _setContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _setContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _setContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  iy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lonS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lonS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lonS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" lonS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" latS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("latS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("latS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" latS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  lon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  lat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lon")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lat")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("这样平面地图上的某点就可以和三维坐标关联起来了，当然，这还需要一定的转换，有兴趣可以去源码研究下"),a("code",[t._v("geoPosition2World")]),t._v("和"),a("code",[t._v("worldPostion2Screen")]),t._v("两个函数。")]),t._v(" "),a("h2",{attrs:{id:"五、插件封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、插件封装"}},[t._v("#")]),t._v(" 五、插件封装")]),t._v(" "),a("p",[t._v("上面的代码中，我们实现了全景预览和全景标记的功能，下面，我们要把这些功能封装成插件。")]),t._v(" "),a("p",[t._v("所谓插件，即可以直接引用你写的代码，并添加少量的配置就可以实现想要的功能。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-全景预览封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-全景预览封装"}},[t._v("#")]),t._v(" 5.1 全景预览封装")]),t._v(" "),a("p",[t._v("我们来看看，究竟哪些配置是可以抽取出来的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'panoramaConianer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources/img/panorama/pano-7.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lables")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("widthSegments")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("heightSegments")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pRadius")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minFocalLength")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maxFocalLength")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sprite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("container")]),t._v(":"),a("code",[t._v("dom")]),t._v("容器的"),a("code",[t._v("id")])]),t._v(" "),a("li",[a("code",[t._v("url")]),t._v(":图片路径")]),t._v(" "),a("li",[a("code",[t._v("lables")]),t._v(":全景中的标记数组，格式为"),a("code",[t._v("{position:{lon:114,lat:38},logoUrl:'lableLogo.png',text:'name'}")])]),t._v(" "),a("li",[a("code",[t._v("widthSegments")]),t._v(":水平切段数")]),t._v(" "),a("li",[a("code",[t._v("heightSegments")]),t._v(":垂直切段数（值小粗糙速度快，值大精细速度慢）")]),t._v(" "),a("li",[a("code",[t._v("pRadius")]),t._v(":全景球的半径，推荐使用默认值")]),t._v(" "),a("li",[a("code",[t._v("minFocalLength")]),t._v(":镜头最小拉近距离")]),t._v(" "),a("li",[a("code",[t._v("maxFocalLength")]),t._v(":镜头最大拉近距离")]),t._v(" "),a("li",[a("code",[t._v("sprite")]),t._v(":展示的标记类型"),a("code",[t._v("label,icon")])]),t._v(" "),a("li",[a("code",[t._v("onClick")]),t._v(":标记的点击事件")])]),t._v(" "),a("p",[t._v("上面的配置是可以用户配置的，那么用户该如何传入插件呢？")]),t._v(" "),a("p",[t._v("我们可以在插件中声明一些默认配置"),a("code",[t._v("options")]),t._v("，用户使用构造函数传入参数，然后使用"),a("code",[t._v("Object.assign")]),t._v("将传入配置覆盖到默认配置。")]),t._v(" "),a("p",[t._v("接下来，你就可以使用"),a("code",[t._v("this.def")]),t._v("来访问这些变量了，然后只需要把写死的代码改成这些配置即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认配置...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tpanorama")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("opt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntpanorama"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("def")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("opt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("def "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化操作...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-2-全景标记封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-全景标记封装"}},[t._v("#")]),t._v(" 5.2 全景标记封装")]),t._v(" "),a("p",[t._v("基本逻辑和上面的类似，下面是提取出来的一些参数。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" setOpt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myDiv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setting容器")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("imgUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources/img/panorama/3.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定宽度，高度自适应")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showGrid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否显示格网")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showPosition")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否显示经纬度提示")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lableColor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#9400D3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标记颜色")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("gridColor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#48D1CC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//格网颜色")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lables")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标记   {lon:114,lat:38,text:'标记一'}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("addLable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启后双击添加标记  (必须开启经纬度提示)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getLable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启后右键查询标记  (必须开启经纬度提示)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("deleteLbale")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启默认中键删除 （必须开启经纬度提示）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"六、发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、发布"}},[t._v("#")]),t._v(" 六、发布")]),t._v(" "),a("p",[t._v("接下来，我们就好考虑如何将写好的插件让用户使用了。")]),t._v(" "),a("p",[t._v("我们主要考虑两种场景，直接引用和"),a("code",[t._v("npm install")])]),t._v(" "),a("h3",{attrs:{id:"_6-1-直接引用js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-直接引用js"}},[t._v("#")]),t._v(" 6.1 直接引用"),a("code",[t._v("JS")])]),t._v(" "),a("p",[t._v("为了不污染全局变量，我们使用一个自执行函数"),a("code",[t._v("(function(){}())")]),t._v("将代码包起来，然后将我们写好的插件暴露给全局变量"),a("code",[t._v("window")]),t._v("。")]),t._v(" "),a("p",[t._v("我把它放在"),a("code",[t._v("originSrc")]),t._v("目录下。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tpanorama")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("opt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    tpanorama"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tpanoramaSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("opt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    tpanoramaSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tpanorama "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tpanorama"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tpanoramaSetting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" panoramaSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-2-使用npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-使用npm-install"}},[t._v("#")]),t._v(" 6.2 使用"),a("code",[t._v("npm install")])]),t._v(" "),a("p",[t._v("直接将写好的插件导出：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tpanorama"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" panoramaSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我把它放在"),a("code",[t._v("src")]),t._v("目录下。")]),t._v(" "),a("p",[t._v("同时，我们要把"),a("code",[t._v("package.json")]),t._v("中的"),a("code",[t._v("main")]),t._v("属性指向我们要导出的文件："),a("code",[t._v('"main": "lib/index.js"')]),t._v("，然后将"),a("code",[t._v("name")]),t._v("、"),a("code",[t._v("description")]),t._v("、"),a("code",[t._v("version")]),t._v("等信息补充完整。")]),t._v(" "),a("p",[t._v("下面，我们就可以开始发布了，首先你要有一个"),a("code",[t._v("npm")]),t._v("账号，并且登陆，如果你没有账号，使用下面的命令创建一个账号。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm adduser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npmjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n")])])]),a("p",[t._v("如果你已经有账号了，那么可以直接使用下面的命令进行登陆。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm login "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npmjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n")])])]),a("p",[t._v("登陆成功之后，就可以发布了：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm publish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npmjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n")])])]),a("p",[t._v("注意，上面每个命令我都手动指定了"),a("code",[t._v("registry")]),t._v("，这是因为当前你使用的"),a("code",[t._v("npm")]),t._v("源可能已经被更换了，可能使用的是淘宝源或者公司源，这时不手动指定会导致发布失败。")]),t._v(" "),a("p",[t._v("发布成功后直接在"),a("a",{attrs:{href:"https://www.npmjs.com/package/tpanorama",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("npm官网")]),a("OutboundLink")],1),t._v("上看到你的包了。")]),t._v(" "),a("p",[t._v("然后，你可以直接使用"),a("code",[t._v("npm install tpanorama")]),t._v("进行安装，然后进行使用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tpanorama"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tpanoramaSetting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tpanorama'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-3-babel编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-babel编译"}},[t._v("#")]),t._v(" 6.3 babel编译")]),t._v(" "),a("p",[t._v("最后不要忘了，无论使用以上哪种方式，我们都要使用"),a("code",[t._v("babel")]),t._v("编译后才能暴露给用户。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("scripts")]),t._v("中创建一个"),a("code",[t._v("build")]),t._v("命令，将源文件进行编译，最终暴露给用户使用的将是"),a("code",[t._v("lib")]),t._v("和"),a("code",[t._v("origin")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel src --out-dir lib && babel originSrc --out-dir origin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("你还可以指定一些其他的命令来供用户测试，如我将写好的例子全部放在"),a("code",[t._v("examples")]),t._v("中，然后在"),a("code",[t._v("scripts")]),t._v("定义了"),a("code",[t._v("expamle")]),t._v("命令：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"example"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run webpack && node ./server/www"')]),t._v("\n")])])]),a("p",[t._v("这样，用户将代码克隆后直接在本地运行"),a("code",[t._v("npm run example")]),t._v("就可以进行调试了。")]),t._v(" "),a("h2",{attrs:{id:"七、小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、小结"}},[t._v("#")]),t._v(" 七、小结")]),t._v(" "),a("p",[t._v("本项目的"),a("code",[t._v("github")]),t._v("地址：https://github.com/ConardLi/tpanorama")]),t._v(" "),a("p",[t._v("文中如有错误，欢迎在评论区指正，如果这篇文章帮助到了你，欢迎点赞和关注。")])])}),[],!1,null,null,null);s.default=r.exports}}]);