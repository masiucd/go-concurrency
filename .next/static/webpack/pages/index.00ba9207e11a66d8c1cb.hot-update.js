"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/index.tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n // import Image from \"next/image\"\n\n\nvar MOVIES_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query movies {\\n    movies {\\n      title\\n      rating\\n      releaseYear\\n      comments {\\n        text\\n      }\\n    }\\n  }\\n\"])));\n\nvar Home = function Home() {\n  _s();\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(MOVIES_QUERY, {\n    fetchPolicy: \"cache-and-network\"\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Capture, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"Z+0LgrSWpTZsLds+tjQq9+67f1U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _ref2 =  false ? 0 : {\n  name: \"yqlfdv-TextPart\",\n  styles: \"font-weight:900;font-size:7rem;letter-spacing:0.53cm;display:flex;padding:0;height:7rem;align-items:center;text-transform:capitalize;label:TextPart;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEYyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBNT1ZJRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1vdmllcyB7XG4gICAgbW92aWVzIHtcbiAgICAgIHRpdGxlXG4gICAgICByYXRpbmdcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxMH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9e2AvJHt0ZXh0fWB9PlxuICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgbWluLWhlaWdodDogNTByZW07XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwibW92aWVzXCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiYWJvdXRcIiAvPlxuICAgICAgPFRleHRQYXJ0IHRleHQ9XCJjb250YWN0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar TextPart = function TextPart(_ref3) {\n  var text = _ref3.text;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h3, {\n    initial: {\n      x: 10\n    },\n    whileHover: {\n      fontWeight: 400,\n      x: -4,\n      letterSpacing: 0\n    },\n    transition: {\n      duration: 0.2\n    },\n    css: _ref2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n    href: \"/\".concat(text),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, text)));\n};\n\n_c2 = TextPart;\n\nvar _ref =  false ? 0 : {\n  name: \"17kn2v2-Capture\",\n  styles: \"display:flex;flex-flow:column wrap;max-width:500px;margin-top:3rem;border:2px solid red;min-height:50rem;label:Capture;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBNT1ZJRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1vdmllcyB7XG4gICAgbW92aWVzIHtcbiAgICAgIHRpdGxlXG4gICAgICByYXRpbmdcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxMH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9e2AvJHt0ZXh0fWB9PlxuICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgbWluLWhlaWdodDogNTByZW07XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwibW92aWVzXCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiYWJvdXRcIiAvPlxuICAgICAgPFRleHRQYXJ0IHRleHQ9XCJjb250YWN0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar Capture = function Capture() {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n    css: _ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextPart, {\n    text: \"movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextPart, {\n    text: \"about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextPart, {\n    text: \"contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c3 = Capture;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"TextPart\");\n$RefreshReg$(_c3, \"Capture\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUdBOzs7QUFFQSxJQUFNTyxZQUFZLEdBQUdKLG9EQUFILDZWQUFsQjs7QUFhQSxJQUFNSyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDM0Isa0JBQStCUix3REFBUSxDQUFDTyxZQUFELEVBQWU7QUFBQ0UsSUFBQUEsV0FBVyxFQUFFO0FBQWQsR0FBZixDQUF2QztBQUFBLE1BQU9DLElBQVAsYUFBT0EsSUFBUDtBQUFBLE1BQWFDLEtBQWIsYUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxPQUFwQixhQUFvQkEsT0FBcEI7O0FBRUEsTUFBSUEsT0FBSixFQUFhO0FBQ1gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhQSxLQUFLLENBQUNFLE9BQW5CLENBQVA7QUFDRDs7QUFFRCxTQUNFLG9EQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxvREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBS0Usb0RBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNELENBbkJEOztHQUFNTDtVQUMyQlI7OztLQUQzQlE7QUFxQk4sK0RBQWVBLElBQWY7Ozs7Ozs7OztBQUVBLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQTRCO0FBQUEsTUFBMUJDLElBQTBCLFNBQTFCQSxJQUEwQjtBQUMzQyxTQUNFLG9EQUFDLG9EQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUNDLE1BQUFBLENBQUMsRUFBRTtBQUFKLEtBRFg7QUFFRSxjQUFVLEVBQUU7QUFDVkMsTUFBQUEsVUFBVSxFQUFFLEdBREY7QUFFVkQsTUFBQUEsQ0FBQyxFQUFFLENBQUMsQ0FGTTtBQUdWRSxNQUFBQSxhQUFhLEVBQUU7QUFITCxLQUZkO0FBT0UsY0FBVSxFQUFFO0FBQ1ZDLE1BQUFBLFFBQVEsRUFBRTtBQURBLEtBUGQ7QUFVRSxPQUFHLE9BVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCRSxvREFBQyxrREFBRDtBQUFNLFFBQUksYUFBTUosSUFBTixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLElBQUosQ0FERixDQXJCRixDQURGO0FBMkJELENBNUJEOztNQUFNRDs7Ozs7Ozs7O0FBNkJOLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsU0FDRTtBQUNFLE9BQUcsTUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsb0RBQUMsUUFBRDtBQUFVLFFBQUksRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLG9EQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxvREFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFnQkQsQ0FqQkQ7O01BQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBNT1ZJRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1vdmllcyB7XG4gICAgbW92aWVzIHtcbiAgICAgIHRpdGxlXG4gICAgICByYXRpbmdcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxMH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9e2AvJHt0ZXh0fWB9PlxuICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgbWluLWhlaWdodDogNTByZW07XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwibW92aWVzXCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiYWJvdXRcIiAvPlxuICAgICAgPFRleHRQYXJ0IHRleHQ9XCJjb250YWN0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiY3NzIiwibW90aW9uIiwiZ3FsIiwiSGVhZCIsIkxpbmsiLCJGcmFnbWVudCIsIk1PVklFU19RVUVSWSIsIkhvbWUiLCJmZXRjaFBvbGljeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwiVGV4dFBhcnQiLCJ0ZXh0IiwieCIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZHVyYXRpb24iLCJDYXB0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});