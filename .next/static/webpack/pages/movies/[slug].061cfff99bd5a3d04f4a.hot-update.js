"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[slug]",{

/***/ "./pages/movies/[slug].tsx":
/*!*********************************!*\
  !*** ./pages/movies/[slug].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled/base */ \"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\n\nvar formatPrice = function formatPrice(price) {\n  var _price$toString$split = price.toString(10).split(\"\"),\n      _price$toString$split2 = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__.default)(_price$toString$split),\n      hundredths = _price$toString$split2[0],\n      tenths = _price$toString$split2[1],\n      once = _price$toString$split2[2],\n      rest = _price$toString$split2.slice(3);\n\n  return \"\".concat(hundredths).concat(tenths).concat(once).concat(rest.join(\"\"));\n};\n\nvar fallBackRecord = {\n  title: \"empty\",\n  releaseYear: -1,\n  price: -1,\n  rating: -1,\n  image: \"empty\",\n  slug: \"empty\",\n  comments: [],\n  categories: []\n};\nvar GET_MOVIE_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query ($movieSlug: String!) {\\n    movieItem: movie(slug: $movieSlug) {\\n      title\\n      releaseYear\\n      price\\n      rating\\n      image\\n      slug\\n      comments {\\n        id\\n        text\\n      }\\n      categories {\\n        name\\n      }\\n    }\\n  }\\n\"])));\n\nvar ImgWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.default)(\"div\",  false ? 0 : {\n  target: \"euvott30\",\n  label: \"ImgWrapper\"\n})( false ? 0 : {\n  name: \"nw3eu4\",\n  styles: \"border:1px solid red;height:30em\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvbW92aWVzL1tzbHVnXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q2QiIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFtodW5kcmVkdGhzLCB0ZW50aHMsIG9uY2UsIC4uLnJlc3RdID0gcHJpY2UudG9TdHJpbmcoMTApLnNwbGl0KFwiXCIpXG5cbiAgcmV0dXJuIGAke2h1bmRyZWR0aHN9JHt0ZW50aHN9JHtvbmNlfSR7cmVzdC5qb2luKFwiXCIpfWBcbn1cblxuaW50ZXJmYWNlIE1vdmllRGF0YVJlc3BvbnNlIHtcbiAgbW92aWVJdGVtOiBNb3ZpZVxufVxuXG5jb25zdCBmYWxsQmFja1JlY29yZCA9IHtcbiAgdGl0bGU6IFwiZW1wdHlcIixcbiAgcmVsZWFzZVllYXI6IC0xLFxuICBwcmljZTogLTEsXG4gIHJhdGluZzogLTEsXG4gIGltYWdlOiBcImVtcHR5XCIsXG4gIHNsdWc6IFwiZW1wdHlcIixcbiAgY29tbWVudHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbn1cblxuY29uc3QgR0VUX01PVklFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSAoJG1vdmllU2x1ZzogU3RyaW5nISkge1xuICAgIG1vdmllSXRlbTogbW92aWUoc2x1ZzogJG1vdmllU2x1Zykge1xuICAgICAgdGl0bGVcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBwcmljZVxuICAgICAgcmF0aW5nXG4gICAgICBpbWFnZVxuICAgICAgc2x1Z1xuICAgICAgY29tbWVudHMge1xuICAgICAgICBpZFxuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBoZWlnaHQ6IDMwZW07XG5gXG5cbmNvbnN0IFNpbmdsZU1vdmllUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeTxNb3ZpZURhdGFSZXNwb25zZT4oR0VUX01PVklFX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBtb3ZpZVNsdWc6IHF1ZXJ5LnNsdWcsXG4gICAgfSxcbiAgfSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgY29uc29sZS5sb2coXCJkYXRhLlwiLCBkYXRhPy5tb3ZpZUl0ZW0pXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuICBjb25zb2xlLmxvZyhcImZvcm1hdFByaWNlKHByaWNlKVwiLCBmb3JtYXRQcmljZShwcmljZSkpXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICA8cD4ge3JlbGVhc2VZZWFyfSA8L3A+XG4gICAgICA8cD4ge3JhdGluZ30gPC9wPlxuICAgICAgPHA+IHtwcmljZS50b0ZpeGVkKDIpfSA8L3A+XG4gICAgICA8SW1nV3JhcHBlcj5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgICAgPC9JbWdXcmFwcGVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar SingleMoviePage = function SingleMoviePage() {\n  _s();\n\n  var _data$movieItem;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),\n      query = _useRouter.query;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      movieSlug: query.slug\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log(\"data.\", data === null || data === void 0 ? void 0 : data.movieItem);\n\n  var _ref = (_data$movieItem = data === null || data === void 0 ? void 0 : data.movieItem) !== null && _data$movieItem !== void 0 ? _data$movieItem : fallBackRecord,\n      title = _ref.title,\n      image = _ref.image,\n      releaseYear = _ref.releaseYear,\n      rating = _ref.rating,\n      price = _ref.price,\n      categories = _ref.categories;\n\n  console.log(\"formatPrice(price)\", formatPrice(price));\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n    href: \"/movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \" \\u2190 Movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, \" \", releaseYear, \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, \" \", rating, \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, \" \", price.toFixed(2), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(ImgWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n    src: image,\n    width: \"100%\",\n    height: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(SingleMoviePage, \"WmDs9Ho2ebrp3twXJ/K+bWZn45M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery];\n});\n\n_c = SingleMoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMoviePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleMoviePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBbUI7QUFDckMsOEJBQTRDQSxLQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLEVBQW1CQyxLQUFuQixDQUF5QixFQUF6QixDQUE1QztBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxNQUFuQjtBQUFBLE1BQTJCQyxJQUEzQjtBQUFBLE1BQW9DQyxJQUFwQzs7QUFFQSxtQkFBVUgsVUFBVixTQUF1QkMsTUFBdkIsU0FBZ0NDLElBQWhDLFNBQXVDQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxFQUFWLENBQXZDO0FBQ0QsQ0FKRDs7QUFVQSxJQUFNQyxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLEtBQUssRUFBRSxPQURjO0FBRXJCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQyxDQUZPO0FBR3JCVixFQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUhhO0FBSXJCVyxFQUFBQSxNQUFNLEVBQUUsQ0FBQyxDQUpZO0FBS3JCQyxFQUFBQSxLQUFLLEVBQUUsT0FMYztBQU1yQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmU7QUFPckJDLEVBQUFBLFFBQVEsRUFBRSxFQVBXO0FBUXJCQyxFQUFBQSxVQUFVLEVBQUU7QUFSUyxDQUF2QjtBQVdBLElBQU1DLGVBQWUsR0FBR3RCLG9EQUFILHFlQUFyQjs7QUFvQkEsSUFBTXVCLFVBQVUsR0FBRywrRUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBaEI7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG1CQUFnQnJCLHNEQUFTLEVBQXpCO0FBQUEsTUFBT3NCLEtBQVAsY0FBT0EsS0FBUDs7QUFDQSxrQkFBK0IxQix3REFBUSxDQUFvQnVCLGVBQXBCLEVBQXFDO0FBQzFFSSxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsU0FBUyxFQUFFRixLQUFLLENBQUNOO0FBRFI7QUFEK0QsR0FBckMsQ0FBdkM7QUFBQSxNQUFPUyxJQUFQLGFBQU9BLElBQVA7QUFBQSxNQUFhQyxPQUFiLGFBQWFBLE9BQWI7QUFBQSxNQUFzQkMsS0FBdEIsYUFBc0JBLEtBQXRCOztBQU1BLE1BQUlELE9BQUosRUFBYTtBQUNYLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUNELE1BQUlDLEtBQUosRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUEsS0FBSyxDQUFDQyxPQUFuQixDQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJMLElBQXJCLGFBQXFCQSxJQUFyQix1QkFBcUJBLElBQUksQ0FBRU0sU0FBM0I7O0FBQ0EsZ0NBQStETixJQUEvRCxhQUErREEsSUFBL0QsdUJBQStEQSxJQUFJLENBQUVNLFNBQXJFLDZEQUFrRnBCLGNBQWxGO0FBQUEsTUFBT0MsS0FBUCxRQUFPQSxLQUFQO0FBQUEsTUFBY0csS0FBZCxRQUFjQSxLQUFkO0FBQUEsTUFBcUJGLFdBQXJCLFFBQXFCQSxXQUFyQjtBQUFBLE1BQWtDQyxNQUFsQyxRQUFrQ0EsTUFBbEM7QUFBQSxNQUEwQ1gsS0FBMUMsUUFBMENBLEtBQTFDO0FBQUEsTUFBaURlLFVBQWpELFFBQWlEQSxVQUFqRDs7QUFDQVcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0M1QixXQUFXLENBQUNDLEtBQUQsQ0FBN0M7QUFDQSxTQUNFLG9EQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxvREFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtTLEtBQUwsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBS0MsV0FBTCxNQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLQyxNQUFMLE1BUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUtYLEtBQUssQ0FBQzZCLE9BQU4sQ0FBYyxDQUFkLENBQUwsTUFSRixFQVNFLG9EQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG9EQUFDLG1EQUFEO0FBQU8sT0FBRyxFQUFFakIsS0FBWjtBQUFtQixTQUFLLEVBQUMsTUFBekI7QUFBZ0MsVUFBTSxFQUFDLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLENBREY7QUFlRCxDQWpDRDs7R0FBTU07VUFDWXJCLG9EQUNlSjs7O0tBRjNCeUI7QUFrQ04sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1tzbHVnXS50c3g/OTFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7TW92aWV9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgW2h1bmRyZWR0aHMsIHRlbnRocywgb25jZSwgLi4ucmVzdF0gPSBwcmljZS50b1N0cmluZygxMCkuc3BsaXQoXCJcIilcblxuICByZXR1cm4gYCR7aHVuZHJlZHRoc30ke3RlbnRoc30ke29uY2V9JHtyZXN0LmpvaW4oXCJcIil9YFxufVxuXG5pbnRlcmZhY2UgTW92aWVEYXRhUmVzcG9uc2Uge1xuICBtb3ZpZUl0ZW06IE1vdmllXG59XG5cbmNvbnN0IGZhbGxCYWNrUmVjb3JkID0ge1xuICB0aXRsZTogXCJlbXB0eVwiLFxuICByZWxlYXNlWWVhcjogLTEsXG4gIHByaWNlOiAtMSxcbiAgcmF0aW5nOiAtMSxcbiAgaW1hZ2U6IFwiZW1wdHlcIixcbiAgc2x1ZzogXCJlbXB0eVwiLFxuICBjb21tZW50czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxufVxuXG5jb25zdCBHRVRfTU9WSUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5ICgkbW92aWVTbHVnOiBTdHJpbmchKSB7XG4gICAgbW92aWVJdGVtOiBtb3ZpZShzbHVnOiAkbW92aWVTbHVnKSB7XG4gICAgICB0aXRsZVxuICAgICAgcmVsZWFzZVllYXJcbiAgICAgIHByaWNlXG4gICAgICByYXRpbmdcbiAgICAgIGltYWdlXG4gICAgICBzbHVnXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMzBlbTtcbmBcblxuY29uc3QgU2luZ2xlTW92aWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKClcbiAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yfSA9IHVzZVF1ZXJ5PE1vdmllRGF0YVJlc3BvbnNlPihHRVRfTU9WSUVfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIG1vdmllU2x1ZzogcXVlcnkuc2x1ZyxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi48L2Rpdj5cbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImRhdGEuXCIsIGRhdGE/Lm1vdmllSXRlbSlcbiAgY29uc3Qge3RpdGxlLCBpbWFnZSwgcmVsZWFzZVllYXIsIHJhdGluZywgcHJpY2UsIGNhdGVnb3JpZXN9ID0gZGF0YT8ubW92aWVJdGVtID8/IGZhbGxCYWNrUmVjb3JkXG4gIGNvbnNvbGUubG9nKFwiZm9ybWF0UHJpY2UocHJpY2UpXCIsIGZvcm1hdFByaWNlKHByaWNlKSlcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBocmVmPVwiL21vdmllc1wiPlxuICAgICAgICA8YT4gJiM4NTkyOyBNb3ZpZXM8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgIDxwPiB7cmVsZWFzZVllYXJ9IDwvcD5cbiAgICAgIDxwPiB7cmF0aW5nfSA8L3A+XG4gICAgICA8cD4ge3ByaWNlLnRvRml4ZWQoMil9IDwvcD5cbiAgICAgIDxJbWdXcmFwcGVyPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XG4gICAgICA8L0ltZ1dyYXBwZXI+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTW92aWVQYWdlXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJGcmFnbWVudCIsImZvcm1hdFByaWNlIiwicHJpY2UiLCJ0b1N0cmluZyIsInNwbGl0IiwiaHVuZHJlZHRocyIsInRlbnRocyIsIm9uY2UiLCJyZXN0Iiwiam9pbiIsImZhbGxCYWNrUmVjb3JkIiwidGl0bGUiLCJyZWxlYXNlWWVhciIsInJhdGluZyIsImltYWdlIiwic2x1ZyIsImNvbW1lbnRzIiwiY2F0ZWdvcmllcyIsIkdFVF9NT1ZJRV9RVUVSWSIsIkltZ1dyYXBwZXIiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1vdmllU2x1ZyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1vdmllSXRlbSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

/***/ })

});