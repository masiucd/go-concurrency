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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.tsx":
/*!**************************!*\
  !*** ./pages/movies.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies.tsx\";\n\n\n\n\nconst MOVIES_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  query movies {\n    movies {\n      title\n      rating\n      releaseYear\n      id\n      comments {\n        text\n      }\n    }\n  }\n`;\n\nconst MoviesPage = () => {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(MOVIES_QUERY, {\n    fetchPolicy: \"cache-and-network\"\n  });\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log(\"data\", data.movies);\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"MoviesPage\"), data.movies.map(m => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n    key: m.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, m.title)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsWUFBWSxHQUFHRixvREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTs7QUFhQSxNQUFNRyxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUNDLElBQUFBLElBQUQ7QUFBT0MsSUFBQUEsS0FBUDtBQUFjQyxJQUFBQTtBQUFkLE1BQXlCUCx3REFBUSxDQUFDRyxZQUFELEVBQWU7QUFBQ0ssSUFBQUEsV0FBVyxFQUFFO0FBQWQsR0FBZixDQUF2Qzs7QUFFQSxNQUFJRCxPQUFKLEVBQWE7QUFDWCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRDs7QUFDRCxNQUFJRCxLQUFKLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFBLEtBQUssQ0FBQ0csT0FBbkIsQ0FBUDtBQUNEOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CTixJQUFJLENBQUNPLE1BQXpCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHUCxJQUFJLENBQUNPLE1BQUwsQ0FBWUMsR0FBWixDQUFpQkMsQ0FBRCxJQUNmO0FBQUcsT0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlRCxDQUFDLENBQUNFLEtBQWpCLENBREQsQ0FGSCxDQURGO0FBUUQsQ0FsQkQ7O0FBb0JBLGlFQUFlWixVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLW9yZGVyLy4vcGFnZXMvbW92aWVzLnRzeD83OWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgTU9WSUVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBtb3ZpZXMge1xuICAgIG1vdmllcyB7XG4gICAgICB0aXRsZVxuICAgICAgcmF0aW5nXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgaWRcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuY29uc3QgTW92aWVzUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KE1PVklFU19RVUVSWSwge2ZldGNoUG9saWN5OiBcImNhY2hlLWFuZC1uZXR3b3JrXCJ9KVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi48L2Rpdj5cbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEubW92aWVzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TW92aWVzUGFnZTwvaDE+XG4gICAgICB7ZGF0YS5tb3ZpZXMubWFwKChtKSA9PiAoXG4gICAgICAgIDxwIGtleT17bS5pZH0+e20udGl0bGV9PC9wPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzUGFnZVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiZ3FsIiwiUmVhY3QiLCJNT1ZJRVNfUVVFUlkiLCJNb3ZpZXNQYWdlIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImZldGNoUG9saWN5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJtb3ZpZXMiLCJtYXAiLCJtIiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies.tsx"));
module.exports = __webpack_exports__;

})();