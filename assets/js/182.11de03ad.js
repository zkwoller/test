(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{580:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在上一节我们实现了一个极简的"),a("code",[t._v("useState")]),t._v("，了解了"),a("code",[t._v("Hooks")]),t._v("的运行原理。")]),t._v(" "),a("p",[t._v("本节我们讲解"),a("code",[t._v("Hooks")]),t._v("的数据结构，为后面介绍具体的"),a("code",[t._v("hook")]),t._v("打下基础。")]),t._v(" "),a("h2",{attrs:{id:"dispatcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher"}},[t._v("#")]),t._v(" dispatcher")]),t._v(" "),a("p",[t._v("在上一节的极简"),a("code",[t._v("useState")]),t._v("实现中，使用"),a("code",[t._v("isMount")]),t._v("变量区分"),a("code",[t._v("mount")]),t._v("与"),a("code",[t._v("update")]),t._v("。")]),t._v(" "),a("p",[t._v("在真实的"),a("code",[t._v("Hooks")]),t._v("中，组件"),a("code",[t._v("mount")]),t._v("时的"),a("code",[t._v("hook")]),t._v("与"),a("code",[t._v("update")]),t._v("时的"),a("code",[t._v("hook")]),t._v("来源于不同的对象，这类对象在源码中被称为"),a("code",[t._v("dispatcher")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount时的Dispatcher")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("HooksDispatcherOnMount")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dispatcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useContext")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" readContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useImperativeHandle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountImperativeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useLayoutEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountLayoutEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useMemo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountMemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useReducer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mountState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update时的Dispatcher")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("HooksDispatcherOnUpdate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dispatcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useContext")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" readContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useImperativeHandle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateImperativeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useLayoutEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateLayoutEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useMemo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateMemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useReducer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" updateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可见，"),a("code",[t._v("mount")]),t._v("时调用的"),a("code",[t._v("hook")]),t._v("和"),a("code",[t._v("update")]),t._v("时调用的"),a("code",[t._v("hook")]),t._v("其实是两个不同的函数。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("FunctionComponent")]),t._v(" "),a("code",[t._v("render")]),t._v("前，会根据"),a("code",[t._v("FunctionComponent")]),t._v("对应"),a("code",[t._v("fiber")]),t._v("的以下条件区分"),a("code",[t._v("mount")]),t._v("与"),a("code",[t._v("update")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("p",[t._v("并将不同情况对应的"),a("code",[t._v("dispatcher")]),t._v("赋值给全局变量"),a("code",[t._v("ReactCurrentDispatcher")]),t._v("的"),a("code",[t._v("current")]),t._v("属性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ReactCurrentDispatcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" HooksDispatcherOnMount\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HooksDispatcherOnUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),t._v(" "),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L409",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到这行代码")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("FunctionComponent")]),t._v(" "),a("code",[t._v("render")]),t._v("时，会从"),a("code",[t._v("ReactCurrentDispatcher.current")]),t._v("（即当前"),a("code",[t._v("dispatcher")]),t._v("）中寻找需要的"),a("code",[t._v("hook")]),t._v("。")]),t._v(" "),a("p",[t._v("换言之，不同的调用栈上下文为"),a("code",[t._v("ReactCurrentDispatcher.current")]),t._v("赋值不同的"),a("code",[t._v("dispatcher")]),t._v("，则"),a("code",[t._v("FunctionComponent")]),t._v(" "),a("code",[t._v("render")]),t._v("时调用的"),a("code",[t._v("hook")]),t._v("也是不同的函数。")]),t._v(" "),a("blockquote",[a("p",[t._v("除了这两个"),a("code",[t._v("dispatcher")]),t._v("，你可以在"),a("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1775",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到其他"),a("code",[t._v("dispatcher")]),t._v("定义")])]),t._v(" "),a("h2",{attrs:{id:"一个dispatcher使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个dispatcher使用场景"}},[t._v("#")]),t._v(" 一个dispatcher使用场景")]),t._v(" "),a("p",[t._v("当错误的书写了嵌套形式的"),a("code",[t._v("hook")]),t._v("，如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("此时"),a("code",[t._v("ReactCurrentDispatcher.current")]),t._v("已经指向"),a("code",[t._v("ContextOnlyDispatcher")]),t._v("，所以调用"),a("code",[t._v("useState")]),t._v("实际会调用"),a("code",[t._v("throwInvalidHookError")]),t._v("，直接抛出异常。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ContextOnlyDispatcher")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dispatcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" throwInvalidHookError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useContext")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" throwInvalidHookError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" throwInvalidHookError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useImperativeHandle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" throwInvalidHookError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useLayoutEffect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" throwInvalidHookError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L458",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到这段逻辑")])]),t._v(" "),a("h2",{attrs:{id:"hook的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hook的数据结构"}},[t._v("#")]),t._v(" Hook的数据结构")]),t._v(" "),a("p",[t._v("接下来我们学习"),a("code",[t._v("hook")]),t._v("的数据结构。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hook")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hook "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("memoizedState")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseState")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseQueue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("queue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L546",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到创建"),a("code",[t._v("hook")]),t._v("的逻辑")])]),t._v(" "),a("p",[t._v("其中除"),a("code",[t._v("memoizedState")]),t._v("以外字段的意义与上一章介绍的"),a("RouterLink",{attrs:{to:"/reactDiff/state/update.html#updatequeue"}},[t._v("updateQueue")]),t._v("类似。")],1),t._v(" "),a("h2",{attrs:{id:"memoizedstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memoizedstate"}},[t._v("#")]),t._v(" memoizedState")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("hook")]),t._v("与"),a("code",[t._v("FunctionComponent fiber")]),t._v("都存在"),a("code",[t._v("memoizedState")]),t._v("属性，不要混淆他们的概念。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("fiber.memoizedState")]),t._v("："),a("code",[t._v("FunctionComponent")]),t._v("对应"),a("code",[t._v("fiber")]),t._v("保存的"),a("code",[t._v("Hooks")]),t._v("链表。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("hook.memoizedState")]),t._v("："),a("code",[t._v("Hooks")]),t._v("链表中保存的单一"),a("code",[t._v("hook")]),t._v("对应的数据。")])])])]),t._v(" "),a("p",[t._v("不同类型"),a("code",[t._v("hook")]),t._v("的"),a("code",[t._v("memoizedState")]),t._v("保存不同类型数据，具体如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("useState：对于"),a("code",[t._v("const [state, updateState] = useState(initialState)")]),t._v("，"),a("code",[t._v("memoizedState")]),t._v("保存"),a("code",[t._v("state")]),t._v("的值")])]),t._v(" "),a("li",[a("p",[t._v("useReducer：对于"),a("code",[t._v("const [state, dispatch] = useReducer(reducer, {});")]),t._v("，"),a("code",[t._v("memoizedState")]),t._v("保存"),a("code",[t._v("state")]),t._v("的值")])]),t._v(" "),a("li",[a("p",[t._v("useEffect："),a("code",[t._v("memoizedState")]),t._v("保存包含"),a("code",[t._v("useEffect回调函数")]),t._v("、"),a("code",[t._v("依赖项")]),t._v("等的链表数据结构"),a("code",[t._v("effect")]),t._v("，你可以在"),a("a",{attrs:{href:"https://github.com/acdlite/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberHooks.new.js#L1181",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("effect")]),t._v("的创建过程。"),a("code",[t._v("effect")]),t._v("链表同时会保存在"),a("code",[t._v("fiber.updateQueue")]),t._v("中")])]),t._v(" "),a("li",[a("p",[t._v("useRef：对于"),a("code",[t._v("useRef(1)")]),t._v("，"),a("code",[t._v("memoizedState")]),t._v("保存"),a("code",[t._v("{current: 1}")])])]),t._v(" "),a("li",[a("p",[t._v("useMemo：对于"),a("code",[t._v("useMemo(callback, [depA])")]),t._v("，"),a("code",[t._v("memoizedState")]),t._v("保存"),a("code",[t._v("[callback(), depA]")])])]),t._v(" "),a("li",[a("p",[t._v("useCallback：对于"),a("code",[t._v("useCallback(callback, [depA])")]),t._v("，"),a("code",[t._v("memoizedState")]),t._v("保存"),a("code",[t._v("[callback, depA]")]),t._v("。与"),a("code",[t._v("useMemo")]),t._v("的区别是，"),a("code",[t._v("useCallback")]),t._v("保存的是"),a("code",[t._v("callback")]),t._v("函数本身，而"),a("code",[t._v("useMemo")]),t._v("保存的是"),a("code",[t._v("callback")]),t._v("函数的执行结果")])])]),t._v(" "),a("p",[t._v("有些"),a("code",[t._v("hook")]),t._v("是没有"),a("code",[t._v("memoizedState")]),t._v("的，比如：")]),t._v(" "),a("ul",[a("li",[t._v("useContext")])])])}),[],!1,null,null,null);e.default=r.exports}}]);