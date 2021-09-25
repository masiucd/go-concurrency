"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/index.tsx\";\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n // import Image from \"next/image\"\n\n\nconst MOVIES_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n  query movies {\n    movies {\n      title\n      rating\n      releaseYear\n      comments {\n        text\n      }\n    }\n  }\n`;\n\nconst Title = ({\n  children,\n  title\n}) => {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, title ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 29\n    }\n  }, title) : children);\n};\n\nconst Home = () => {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(MOVIES_QUERY, {\n    fetchPolicy: \"cache-and-network\"\n  });\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"Welcome to sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Capture, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\nvar _ref =  false ? 0 : {\n  name: \"127iuw6-TextPart\",\n  styles: \"width:70%;font-weight:900;font-size:8rem;letter-spacing:0.53cm;label:TextPart;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FYyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge2Nzc30gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgdHlwZSB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHtGQywgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiXG5cbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IE1PVklFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbW92aWVzIHtcbiAgICBtb3ZpZXMge1xuICAgICAgdGl0bGVcbiAgICAgIHJhdGluZ1xuICAgICAgcmVsZWFzZVllYXJcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nXG59XG5jb25zdCBUaXRsZTogRkM8VGl0bGVQcm9wcz4gPSAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgcmV0dXJuIDxGcmFnbWVudD57dGl0bGUgPyA8aDE+e3RpdGxlfTwvaDE+IDogY2hpbGRyZW59PC9GcmFnbWVudD5cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VRdWVyeShNT1ZJRVNfUVVFUlksIHtmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wifSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgbW92aWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlPlxuICAgICAgICA8aDE+V2VsY29tZSB0byBzaWNrIG1vdmllczwvaDE+XG4gICAgICA8L1RpdGxlPlxuICAgICAgPENhcHR1cmUgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgVGV4dFBhcnQgPSAoe3RleHR9OiB7dGV4dDogc3RyaW5nfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaDNcbiAgICAgIGluaXRpYWw9e3t4OiAxNX19XG4gICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgeDogLTQsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgfX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICB3aWR0aDogNzAlO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNjbTtcbiAgICAgIGB9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9tb3Rpb24uaDM+XG4gIClcbn1cbmNvbnN0IENhcHR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiTW92aWVzXCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiQWJvdXRcIiAvPlxuICAgICAgPFRleHRQYXJ0IHRleHQ9XCJDb250YWN0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst TextPart = ({\n  text\n}) => {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h3, {\n    initial: {\n      x: 15\n    },\n    whileHover: {\n      fontWeight: 400,\n      x: -4,\n      letterSpacing: 0\n    },\n    transition: {\n      duration: 0.2\n    },\n    css: _ref,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, text);\n};\n\nconst Capture = () => {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextPart, {\n    text: \"Movies\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextPart, {\n    text: \"About\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextPart, {\n    text: \"Contact\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuaW1wb3J0IHtjc3N9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHR5cGUge05leHRQYWdlfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7RkMsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBNT1ZJRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1vdmllcyB7XG4gICAgbW92aWVzIHtcbiAgICAgIHRpdGxlXG4gICAgICByYXRpbmdcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xufVxuY29uc3QgVGl0bGU6IEZDPFRpdGxlUHJvcHM+ID0gKHtjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XG4gIHJldHVybiA8RnJhZ21lbnQ+e3RpdGxlID8gPGgxPnt0aXRsZX08L2gxPiA6IGNoaWxkcmVufTwvRnJhZ21lbnQ+XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlUXVlcnkoTU9WSUVTX1FVRVJZLCB7ZmV0Y2hQb2xpY3k6IFwiY2FjaGUtYW5kLW5ldHdvcmtcIn0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaWNrIG1vdmllczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gc2ljayBtb3ZpZXM8L2gxPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxDYXB0dXJlIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbmNvbnN0IFRleHRQYXJ0ID0gKHt0ZXh0fToge3RleHQ6IHN0cmluZ30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmgzXG4gICAgICBpbml0aWFsPXt7eDogMTV9fVxuICAgICAgd2hpbGVIb3Zlcj17e1xuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIHg6IC00LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgfX1cbiAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIH19XG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDcwJTtcblxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzY207XG4gICAgICBgfVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbW90aW9uLmgzPlxuICApXG59XG5jb25zdCBDYXB0dXJlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIk1vdmllc1wiIC8+XG4gICAgICA8VGV4dFBhcnQgdGV4dD1cIkFib3V0XCIgLz5cbiAgICAgIDxUZXh0UGFydCB0ZXh0PVwiQ29udGFjdFwiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImNzcyIsIm1vdGlvbiIsImdxbCIsIkhlYWQiLCJGcmFnbWVudCIsIk1PVklFU19RVUVSWSIsIlRpdGxlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZmV0Y2hQb2xpY3kiLCJtZXNzYWdlIiwiVGV4dFBhcnQiLCJ0ZXh0IiwieCIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZHVyYXRpb24iLCJDYXB0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();