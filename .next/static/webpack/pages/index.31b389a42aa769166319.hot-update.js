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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/index.tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n // import Image from \"next/image\"\n\n\nvar MOVIES_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query movies {\\n    movies {\\n      title\\n      rating\\n      releaseYear\\n      comments {\\n        text\\n      }\\n    }\\n  }\\n\"])));\n\nvar Title = function Title(_ref3) {\n  var children = _ref3.children,\n      title = _ref3.title;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, title ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 29\n    }\n  }, title) : children);\n};\n\n_c = Title;\n\nvar Home = function Home() {\n  _s();\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(MOVIES_QUERY, {\n    fetchPolicy: \"cache-and-network\"\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"Welcome to sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Capture, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"Z+0LgrSWpTZsLds+tjQq9+67f1U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _ref2 =  false ? 0 : {\n  name: \"j84uhx-TextPart\",\n  styles: \"font-weight:900;font-size:7rem;letter-spacing:0.53cm;display:flex;padding:0;height:7rem;align-items:center;label:TextPart;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FYyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHtGQywgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiXG5cbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IE1PVklFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbW92aWVzIHtcbiAgICBtb3ZpZXMge1xuICAgICAgdGl0bGVcbiAgICAgIHJhdGluZ1xuICAgICAgcmVsZWFzZVllYXJcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nXG59XG5jb25zdCBUaXRsZTogRkM8VGl0bGVQcm9wcz4gPSAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgcmV0dXJuIDxGcmFnbWVudD57dGl0bGUgPyA8aDE+e3RpdGxlfTwvaDE+IDogY2hpbGRyZW59PC9GcmFnbWVudD5cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBzaWNrIG1vdmllczwvaDE+XG4gICAgICA8L1RpdGxlPlxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxMH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYH1cbiAgICA+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIk1vdmllc1wiIC8+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIkFib3V0XCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiQ29udGFjdFwiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar TextPart = function TextPart(_ref4) {\n  var text = _ref4.text;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h3, {\n    initial: {\n      x: 10\n    },\n    whileHover: {\n      fontWeight: 400,\n      x: -4,\n      letterSpacing: 0\n    },\n    transition: {\n      duration: 0.2\n    },\n    css: _ref2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, text);\n};\n\n_c3 = TextPart;\n\nvar _ref =  false ? 0 : {\n  name: \"a3z1yr-Capture\",\n  styles: \"display:flex;flex-flow:column wrap;max-width:500px;border:1px solid red;height:100%;label:Capture;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGYyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHtGQywgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiXG5cbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IE1PVklFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbW92aWVzIHtcbiAgICBtb3ZpZXMge1xuICAgICAgdGl0bGVcbiAgICAgIHJhdGluZ1xuICAgICAgcmVsZWFzZVllYXJcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nXG59XG5jb25zdCBUaXRsZTogRkM8VGl0bGVQcm9wcz4gPSAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgcmV0dXJuIDxGcmFnbWVudD57dGl0bGUgPyA8aDE+e3RpdGxlfTwvaDE+IDogY2hpbGRyZW59PC9GcmFnbWVudD5cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBzaWNrIG1vdmllczwvaDE+XG4gICAgICA8L1RpdGxlPlxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxMH19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYH1cbiAgICA+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIk1vdmllc1wiIC8+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIkFib3V0XCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiQ29udGFjdFwiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar Capture = function Capture() {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n    css: _ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextPart, {\n    text: \"Movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextPart, {\n    text: \"About\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextPart, {\n    text: \"Contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c4 = Capture;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c2, \"Home\");\n$RefreshReg$(_c3, \"TextPart\");\n$RefreshReg$(_c4, \"Capture\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLElBVkYsRUFXRSxvREFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQWhCRDs7TUFBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCB7Y3NzfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCJcbmltcG9ydCB0eXBlIHtOZXh0UGFnZX0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQge0ZDLCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCJcblxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgTU9WSUVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBtb3ZpZXMge1xuICAgIG1vdmllcyB7XG4gICAgICB0aXRsZVxuICAgICAgcmF0aW5nXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgY29tbWVudHMge1xuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmludGVyZmFjZSBUaXRsZVByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmdcbn1cbmNvbnN0IFRpdGxlOiBGQzxUaXRsZVByb3BzPiA9ICh7Y2hpbGRyZW4sIHRpdGxlfSkgPT4ge1xuICByZXR1cm4gPEZyYWdtZW50Pnt0aXRsZSA/IDxoMT57dGl0bGV9PC9oMT4gOiBjaGlsZHJlbn08L0ZyYWdtZW50PlxufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KE1PVklFU19RVUVSWSwge2ZldGNoUG9saWN5OiBcImNhY2hlLWFuZC1uZXR3b3JrXCJ9KVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi48L2Rpdj5cbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2ljayBtb3ZpZXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIHNpY2sgbW92aWVzPC9oMT5cbiAgICAgIDwvVGl0bGU+XG4gICAgICA8Q2FwdHVyZSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5jb25zdCBUZXh0UGFydCA9ICh7dGV4dH06IHt0ZXh0OiBzdHJpbmd9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5oM1xuICAgICAgaW5pdGlhbD17e3g6IDEwfX1cbiAgICAgIHdoaWxlSG92ZXI9e3tcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICB4OiAtNCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgIH19XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICB9fVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNjbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYH1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L21vdGlvbi5oMz5cbiAgKVxufVxuY29uc3QgQ2FwdHVyZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiTW92aWVzXCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiQWJvdXRcIiAvPlxuICAgICAgPFRleHRQYXJ0IHRleHQ9XCJDb250YWN0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiY3NzIiwibW90aW9uIiwiZ3FsIiwiSGVhZCIsIkZyYWdtZW50IiwiTU9WSUVTX1FVRVJZIiwiVGl0bGUiLCJjaGlsZHJlbiIsInRpdGxlIiwiSG9tZSIsImZldGNoUG9saWN5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJUZXh0UGFydCIsInRleHQiLCJ4IiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJkdXJhdGlvbiIsIkNhcHR1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});