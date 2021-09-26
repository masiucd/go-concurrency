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
exports.id = "pages/movies/[slug]";
exports.ids = ["pages/movies/[slug]"];
exports.modules = {

/***/ "./pages/movies/[slug].tsx":
/*!*********************************!*\
  !*** ./pages/movies/[slug].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\";\n\n\n\n\nconst fallBackRecord = {\n  title: \"empty\",\n  releaseYear: -1,\n  price: -1,\n  rating: -1,\n  image: \"empty\",\n  slug: \"empty\",\n  comments: [],\n  categories: []\n};\nconst GET_MOVIE_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  query ($movieSlug: String!) {\n    movieItem: movie(slug: $movieSlug) {\n      title\n      releaseYear\n      price\n      rating\n      image\n      slug\n      comments {\n        id\n        text\n      }\n      categories {\n        name\n      }\n    }\n  }\n`; // Get movie by slug\n\nconst SingleMoviePage = () => {\n  var _data$movieItem;\n\n  const {\n    query\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      movieSlug: query.slug\n    }\n  });\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log(\"data.\", data === null || data === void 0 ? void 0 : data.movieItem);\n  const {\n    title\n  } = (_data$movieItem = data === null || data === void 0 ? void 0 : data.movieItem) !== null && _data$movieItem !== void 0 ? _data$movieItem : fallBackRecord;\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"asdasd\"), title, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"asdas\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleMoviePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQU1BLE1BQU1HLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLE9BRGM7QUFFckJDLEVBQUFBLFdBQVcsRUFBRSxDQUFDLENBRk87QUFHckJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLENBSGE7QUFJckJDLEVBQUFBLE1BQU0sRUFBRSxDQUFDLENBSlk7QUFLckJDLEVBQUFBLEtBQUssRUFBRSxPQUxjO0FBTXJCQyxFQUFBQSxJQUFJLEVBQUUsT0FOZTtBQU9yQkMsRUFBQUEsUUFBUSxFQUFFLEVBUFc7QUFRckJDLEVBQUFBLFVBQVUsRUFBRTtBQVJTLENBQXZCO0FBV0EsTUFBTUMsZUFBZSxHQUFHWCxvREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQkEsRUFvQkE7O0FBRUEsTUFBTVksZUFBZSxHQUFHLE1BQU07QUFBQTs7QUFDNUIsUUFBTTtBQUFDQyxJQUFBQTtBQUFELE1BQVVaLHNEQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUFDYSxJQUFBQSxJQUFEO0FBQU9DLElBQUFBLE9BQVA7QUFBZ0JDLElBQUFBO0FBQWhCLE1BQXlCakIsd0RBQVEsQ0FBb0JZLGVBQXBCLEVBQXFDO0FBQzFFTSxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNMO0FBRFI7QUFEK0QsR0FBckMsQ0FBdkM7O0FBTUEsTUFBSU8sT0FBSixFQUFhO0FBQ1gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhQSxLQUFLLENBQUNHLE9BQW5CLENBQVA7QUFDRDs7QUFFREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlAsSUFBckIsYUFBcUJBLElBQXJCLHVCQUFxQkEsSUFBSSxDQUFFUSxTQUEzQjtBQUNBLFFBQU07QUFBQ25CLElBQUFBO0FBQUQseUJBQVVXLElBQVYsYUFBVUEsSUFBVix1QkFBVUEsSUFBSSxDQUFFUSxTQUFoQiw2REFBNkJwQixjQUFuQztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHQyxLQUZILEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLENBREY7QUFPRCxDQXpCRDs7QUEwQkEsaUVBQWVTLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeD85MWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuLy8gR2V0IG1vdmllIGJ5IHNsdWdcblxuY29uc3QgU2luZ2xlTW92aWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKClcbiAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yfSA9IHVzZVF1ZXJ5PE1vdmllRGF0YVJlc3BvbnNlPihHRVRfTU9WSUVfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIG1vdmllU2x1ZzogcXVlcnkuc2x1ZyxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi48L2Rpdj5cbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImRhdGEuXCIsIGRhdGE/Lm1vdmllSXRlbSlcbiAgY29uc3Qge3RpdGxlfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICA8cD5hc2Rhc2Q8L3A+XG4gICAgICB7dGl0bGV9XG4gICAgICA8cD5hc2RhczwvcD5cbiAgICA8L3A+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiZ3FsIiwidXNlUm91dGVyIiwiZmFsbEJhY2tSZWNvcmQiLCJ0aXRsZSIsInJlbGVhc2VZZWFyIiwicHJpY2UiLCJyYXRpbmciLCJpbWFnZSIsInNsdWciLCJjb21tZW50cyIsImNhdGVnb3JpZXMiLCJHRVRfTU9WSUVfUVVFUlkiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YXJpYWJsZXMiLCJtb3ZpZVNsdWciLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1vdmllSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[slug].tsx"));
module.exports = __webpack_exports__;

})();