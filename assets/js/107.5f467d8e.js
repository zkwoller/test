(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{505:function(_,e,v){"use strict";v.r(e);var o=v(56),t=Object(o.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220202415.png",alt:""}})]),_._v(" "),v("p",[v("code",[_._v("Chrome 80")]),_._v(" 版本在 2020年2月份 正式发布了，随后又陆续更新了几个小版本，本次升级主要是更新了安全修复和稳定性改进以及用户体验优化。")]),_._v(" "),v("p",[_._v("如果你是一个Web站点维护者、其中的两项更新你一定要关注，因为下面这两项更新可能导致你站点的现有的功能不能正常运行；你需要及时排查站点是否存在问题并且做出对应的修复策略。")]),_._v(" "),v("h2",{attrs:{id:"_1-混合内容强制-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-混合内容强制-https"}},[_._v("#")]),_._v(" 1.混合内容强制 HTTPS")]),_._v(" "),v("p",[_._v("混合内容是指 "),v("code",[_._v("https")]),_._v(" 页面下有非 "),v("code",[_._v("https")]),_._v(" 资源时，浏览器的加载策略。")]),_._v(" "),v("p",[_._v("在 "),v("code",[_._v("Chrome 80")]),_._v(" 中，如果你的页面开启了 "),v("code",[_._v("https")]),_._v("，同时你在页面中请求了 "),v("code",[_._v("http")]),_._v(" 的音频和视频资源，这些资源将将自动升级为 "),v("code",[_._v("https")]),_._v(" ，并且默认情况下，如果它们无法通过"),v("code",[_._v("https")]),_._v(" 加载，"),v("code",[_._v("Chrome")]),_._v(" 将阻止它们。这样就会造成一些未支持 "),v("code",[_._v("https")]),_._v(" 协议的资源加载失败。")]),_._v(" "),v("p",[_._v("如果你想临时访问这些资源，你可以通过更改下面的浏览器设置来访问：")]),_._v(" "),v("p",[_._v("1.单击地址栏上的锁定图标并选择 “站点设置”：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220203516.png",alt:""}})]),_._v(" "),v("p",[_._v('2.将 "隐私设置和安全性" 中的 "不安全内容" 选择为 "允许"：')]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220203557.png",alt:""}})]),_._v(" "),v("p",[_._v("你还可以通过设置 "),v("code",[_._v("StricterMixedContentTreatmentEnabled")]),_._v(" 策略来控制这些变化：")]),_._v(" "),v("blockquote",[v("p",[_._v("此策略控制浏览器中混合内容（HTTPS站点中的HTTP内容）的处理方式。如果该政策设置为true或未设置，则音频和视频混合内容将自动升级为HTTPS（即，URL将被重写为HTTPS，如果资源不能通过HTTPS获得，则不会进行回退），并且将显示“不安全”警告在网址列中显示图片混合内容。如果该策略设置为false，则将禁用音频和视频的自动升级，并且不会显示图像警告。该策略不影响音频，视频和图像以外的其他类型的混合内容。")])]),_._v(" "),v("p",[_._v("但是以上策略是一个临时策略，将在 "),v("code",[_._v("Chrome 84")]),_._v(" 中删除。更合理的方式是你需要推动全站资源开启 "),v("code",[_._v("HTTPS")]),_._v("、"),v("code",[_._v("Chrome")]),_._v(" 也是推荐大家这么做的。")]),_._v(" "),v("h2",{attrs:{id:"_2-强推-samesite-cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-强推-samesite-cookie"}},[_._v("#")]),_._v(" 2.强推 SameSite Cookie")]),_._v(" "),v("p",[v("code",[_._v("SameSite")]),_._v(" 是 "),v("code",[_._v("Chrome 51")]),_._v(" 版本为浏览器的 "),v("code",[_._v("Cookie")]),_._v(" 新增的了一个属性， "),v("code",[_._v("SameSite")]),_._v(" 阻止浏览器将此 "),v("code",[_._v("Cookie")]),_._v(" 与跨站点请求一起发送。其主要目标是降低跨源信息泄漏的风险。同时也在一定程度上阻止了 "),v("code",[_._v("CSRF")]),_._v("（Cross-site request forgery 跨站请求伪造）。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220211009.png",alt:""}})]),_._v(" "),v("p",[v("code",[_._v("Cookie")]),_._v(" 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 "),v("code",[_._v("Cookie")]),_._v(" 的 "),v("code",[_._v("HTTP")]),_._v(" 请求，这就是 "),v("code",[_._v("CSRF")]),_._v(" 攻击。")]),_._v(" "),v("p",[v("code",[_._v("SameSite")]),_._v(" 可以避免跨站请求发送 "),v("code",[_._v("Cookie")]),_._v("，有以下三个属性：")]),_._v(" "),v("h3",{attrs:{id:"strict"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[_._v("#")]),_._v(" Strict")]),_._v(" "),v("p",[v("code",[_._v("Strict")]),_._v(" 是最严格的防护，将阻止浏览器在所有跨站点浏览上下文中将 "),v("code",[_._v("Cookie")]),_._v(" 发送到目标站点，即使在遵循常规链接时也是如此。因此这种设置可以阻止所有 "),v("code",[_._v("CSRF")]),_._v(" 攻击。然而，它的用户友好性太差，即使是普通的 "),v("code",[_._v("GET")]),_._v(" 请求它也不允许通过。")]),_._v(" "),v("p",[_._v("例如，对于一个普通的站点，这意味着如果一个已经登录的用户跟踪一个发布在公司讨论论坛或电子邮件上的网站链接，这个站点将不会收到 "),v("code",[_._v("Cookie")]),_._v(" ，用户访问该站点还需要重新登陆。")]),_._v(" "),v("p",[_._v("不过，具有交易业务的网站很可能不希望从外站链接到任何交易页面，因此这种场景最适合使用 "),v("code",[_._v("strict")]),_._v(" 标志。")]),_._v(" "),v("h3",{attrs:{id:"lax"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lax"}},[_._v("#")]),_._v(" Lax")]),_._v(" "),v("p",[_._v("对于允许用户从外部链接到达本站并使用已有会话的网站站，默认的 "),v("code",[_._v("Lax")]),_._v(" 值在安全性和可用性之间提供了合理的平衡。 "),v("code",[_._v("Lax")]),_._v(" 属性只会在使用危险 "),v("code",[_._v("HTTP")]),_._v(" 方法发送跨域 "),v("code",[_._v("Cookie")]),_._v(" 的时候进行阻止，例如 "),v("code",[_._v("POST")]),_._v(" 方式。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220211236.png",alt:""}})]),_._v(" "),v("p",[_._v("例如，一个用户在 A站点 点击了一个 B站点（GET请求），而假如 B站点 使用了"),v("code",[_._v("Samesite-cookies=Lax")]),_._v("，那么用户可以正常登录 B 站点。相对地，如果用户在 A 站点提交了一个表单到 B站点（POST请求），那么用户的请求将被阻止，因为浏览器不允许使用 "),v("code",[_._v("POST")]),_._v(" 方式将 "),v("code",[_._v("Cookie")]),_._v(" 从A域发送到Ｂ域。")]),_._v(" "),v("h3",{attrs:{id:"none"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[_._v("#")]),_._v(" None")]),_._v(" "),v("p",[_._v("浏览器会在同站请求、跨站请求下继续发送 "),v("code",[_._v("Cookies")]),_._v("，不区分大小写。")]),_._v(" "),v("h3",{attrs:{id:"策略更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#策略更新"}},[_._v("#")]),_._v(" 策略更新")]),_._v(" "),v("p",[_._v("在旧版浏览器，如果 "),v("code",[_._v("SameSite")]),_._v(" 属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于 "),v("code",[_._v("None")]),_._v("，"),v("code",[_._v("Cookies")]),_._v(" 会被包含在任何请求中——包括跨站请求。")]),_._v(" "),v("p",[_._v("但是，在 "),v("code",[_._v("Chrome 80+")]),_._v(" 版本中，"),v("code",[_._v("SameSite")]),_._v(" 的默认属性是 "),v("code",[_._v("SameSite=Lax")]),_._v("。换句话说，当 "),v("code",[_._v("Cookie")]),_._v(" 没有设置 "),v("code",[_._v("SameSite")]),_._v(" 属性时，将会视作 "),v("code",[_._v("SameSite")]),_._v(" 属性被设置为"),v("code",[_._v("Lax")]),_._v(" 。如果想要指定 "),v("code",[_._v("Cookies")]),_._v(" 在同站、跨站请求都被发送，那么需要明确指定 "),v("code",[_._v("SameSite")]),_._v(" 为 "),v("code",[_._v("None")]),_._v("。具有 "),v("code",[_._v("SameSite=None")]),_._v(" 的 "),v("code",[_._v("Cookie")]),_._v(" 也必须标记为安全并通过 "),v("code",[_._v("HTTPS")]),_._v(" 传送。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220210917.png",alt:""}})]),_._v(" "),v("p",[_._v("如果你的 "),v("code",[_._v("Cookie")]),_._v(" 未能正确配置。以下是 "),v("code",[_._v("Chrome 80")]),_._v(" 和早期的 "),v("code",[_._v("Chrome")]),_._v("（77 以上）版本中开发者工具控制台的警告：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220210758.png",alt:""}})]),_._v(" "),v("p",[_._v("在 "),v("code",[_._v("Chrome 88")]),_._v(" 之前，您将能够使用策略还原为旧版 "),v("code",[_._v("Cookie")]),_._v(" 行为。您可以使用 "),v("code",[_._v("LegacySameSiteCookieBehaviorEnabledForDomainList")]),_._v(" 指定受信任的域，也可以使用 "),v("code",[_._v("LegacySameSiteCookieBehaviorEnabled")]),_._v(" 控制全局默认值。有关更多详细信息，请访问 "),v("code",[_._v("Cookie旧版SameSite政策")]),_._v("：https://www.chromium.org/administrators/policy-list-3/cookie-legacy-samesite-policies。")]),_._v(" "),v("p",[_._v("以上更新可能对以下功能造成影响：")]),_._v(" "),v("ul",[v("li",[v("ol",[v("li",[_._v("跨域名登陆失效")])])]),_._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[v("code",[_._v("jsonp")]),_._v(" 获取数据失效")])])]),_._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[v("code",[_._v("iframe")]),_._v(" 嵌套的页面打不开或异常")])])]),_._v(" "),v("li",[v("ol",{attrs:{start:"4"}},[v("li",[_._v("部分客户端未改造导致各种数据获取异常")])])])]),_._v(" "),v("p",[_._v("建议大家针对上述更新对自己的站点功能在新版浏览器下做一些测试，以免影响功能正常使用。")]),_._v(" "),v("p",[_._v("你可以到 "),v("code",[_._v("chrome://flags/")]),_._v(" 开启 "),v("code",[_._v("SameSite by default cookies")]),_._v("、"),v("code",[_._v("Cookies without SameSite must be secure")]),_._v(" 进行测试。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://lsqimg-1257917459.cos.ap-beijing.myqcloud.com/20200220210625.png",alt:""}})])])}),[],!1,null,null,null);e.default=t.exports}}]);