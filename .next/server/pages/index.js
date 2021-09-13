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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/marcis/masiu/cinema-order/pages/index.tsx\";\n\n\n\n // import Image from \"next/image\"\n\n\nconst MOVIES_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  query movies {\n    movies {\n      title\n      rating\n      releaseYear\n      comments {\n        text\n      }\n    }\n  }\n`;\n\nconst Title = ({\n  children,\n  title\n}) => {\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }\n  }, title ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 29\n    }\n  }, title) : children);\n};\n\nconst Home = () => {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(MOVIES_QUERY, {\n    fetchPolicy: \"cache-and-network\"\n  });\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log(data);\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Sick movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Welcome to sick movies\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7OztBQUVBLE1BQU1JLFlBQVksR0FBR0gsb0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhBOztBQWdCQSxNQUFNSSxLQUFxQixHQUFHLENBQUM7QUFBQ0MsRUFBQUEsUUFBRDtBQUFXQyxFQUFBQTtBQUFYLENBQUQsS0FBdUI7QUFDbkQsU0FBTyxvREFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVdBLEtBQUssR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLEtBQUwsQ0FBSCxHQUFzQkQsUUFBdEMsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTUUsSUFBYyxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFDQyxJQUFBQSxJQUFEO0FBQU9DLElBQUFBLEtBQVA7QUFBY0MsSUFBQUE7QUFBZCxNQUF5Qlgsd0RBQVEsQ0FBQ0ksWUFBRCxFQUFlO0FBQUNRLElBQUFBLFdBQVcsRUFBRTtBQUFkLEdBQWYsQ0FBdkM7O0FBRUEsTUFBSUQsT0FBSixFQUFhO0FBQ1gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhQSxLQUFLLENBQUNHLE9BQW5CLENBQVA7QUFDRDs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFFQSxTQUNFLG9EQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxvREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBS0Usb0RBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixDQUxGLENBREY7QUFXRCxDQXRCRDs7QUF3QkEsaUVBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHR5cGUge05leHRQYWdlfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7RkMsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBNT1ZJRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1vdmllcyB7XG4gICAgbW92aWVzIHtcbiAgICAgIHRpdGxlXG4gICAgICByYXRpbmdcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xufVxuY29uc3QgVGl0bGU6IEZDPFRpdGxlUHJvcHM+ID0gKHtjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XG4gIHJldHVybiA8RnJhZ21lbnQ+e3RpdGxlID8gPGgxPnt0aXRsZX08L2gxPiA6IGNoaWxkcmVufTwvRnJhZ21lbnQ+XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlUXVlcnkoTU9WSUVTX1FVRVJZLCB7ZmV0Y2hQb2xpY3k6IFwiY2FjaGUtYW5kLW5ldHdvcmtcIn0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaWNrIG1vdmllczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gc2ljayBtb3ZpZXM8L2gxPlxuICAgICAgPC9UaXRsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkhlYWQiLCJGcmFnbWVudCIsIk1PVklFU19RVUVSWSIsIlRpdGxlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZmV0Y2hQb2xpY3kiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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