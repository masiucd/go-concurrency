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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar fallBackRecord = {\n  title: \"empty\",\n  releaseYear: -1,\n  price: -1,\n  rating: -1,\n  image: \"empty\",\n  slug: \"empty\",\n  comments: [],\n  categories: []\n};\nvar GET_MOVIE_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query ($movieSlug: String!) {\\n    movieItem: movie(slug: $movieSlug) {\\n      title\\n      releaseYear\\n      price\\n      rating\\n      image\\n      slug\\n      comments {\\n        id\\n        text\\n      }\\n      categories {\\n        name\\n      }\\n    }\\n  }\\n\"]))); // Get movie by slug\n\nvar SingleMoviePage = function SingleMoviePage() {\n  _s();\n\n  var _data$movieItem;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      query = _useRouter.query;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      movieSlug: query.slug\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log(\"data.\", data === null || data === void 0 ? void 0 : data.movieItem);\n\n  var _ref = (_data$movieItem = data === null || data === void 0 ? void 0 : data.movieItem) !== null && _data$movieItem !== void 0 ? _data$movieItem : fallBackRecord,\n      title = _ref.title,\n      image = _ref.image;\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, \"asdasd\"), title, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n    src: image,\n    width: 500,\n    height: 500,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(SingleMoviePage, \"WmDs9Ho2ebrp3twXJ/K+bWZn45M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = SingleMoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMoviePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleMoviePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1JLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLE9BRGM7QUFFckJDLEVBQUFBLFdBQVcsRUFBRSxDQUFDLENBRk87QUFHckJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLENBSGE7QUFJckJDLEVBQUFBLE1BQU0sRUFBRSxDQUFDLENBSlk7QUFLckJDLEVBQUFBLEtBQUssRUFBRSxPQUxjO0FBTXJCQyxFQUFBQSxJQUFJLEVBQUUsT0FOZTtBQU9yQkMsRUFBQUEsUUFBUSxFQUFFLEVBUFc7QUFRckJDLEVBQUFBLFVBQVUsRUFBRTtBQVJTLENBQXZCO0FBV0EsSUFBTUMsZUFBZSxHQUFHWixvREFBSCxxZUFBckIsRUFvQkE7O0FBRUEsSUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG1CQUFnQlgsc0RBQVMsRUFBekI7QUFBQSxNQUFPWSxLQUFQLGNBQU9BLEtBQVA7O0FBQ0Esa0JBQStCZix3REFBUSxDQUFvQmEsZUFBcEIsRUFBcUM7QUFDMUVHLElBQUFBLFNBQVMsRUFBRTtBQUNUQyxNQUFBQSxTQUFTLEVBQUVGLEtBQUssQ0FBQ0w7QUFEUjtBQUQrRCxHQUFyQyxDQUF2QztBQUFBLE1BQU9RLElBQVAsYUFBT0EsSUFBUDtBQUFBLE1BQWFDLE9BQWIsYUFBYUEsT0FBYjtBQUFBLE1BQXNCQyxLQUF0QixhQUFzQkEsS0FBdEI7O0FBTUEsTUFBSUQsT0FBSixFQUFhO0FBQ1gsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhQSxLQUFLLENBQUNDLE9BQW5CLENBQVA7QUFDRDs7QUFFREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkwsSUFBckIsYUFBcUJBLElBQXJCLHVCQUFxQkEsSUFBSSxDQUFFTSxTQUEzQjs7QUFDQSxnQ0FBdUJOLElBQXZCLGFBQXVCQSxJQUF2Qix1QkFBdUJBLElBQUksQ0FBRU0sU0FBN0IsNkRBQTBDcEIsY0FBMUM7QUFBQSxNQUFPQyxLQUFQLFFBQU9BLEtBQVA7QUFBQSxNQUFjSSxLQUFkLFFBQWNBLEtBQWQ7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdKLEtBRkgsRUFJRSxvREFBQyxtREFBRDtBQUFPLE9BQUcsRUFBRUksS0FBWjtBQUFtQixTQUFLLEVBQUUsR0FBMUI7QUFBK0IsVUFBTSxFQUFFLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQsQ0ExQkQ7O0dBQU1LO1VBQ1lYLG9EQUNlSDs7O0tBRjNCYztBQTJCTiwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeD85MWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5pbnRlcmZhY2UgTW92aWVEYXRhUmVzcG9uc2Uge1xuICBtb3ZpZUl0ZW06IE1vdmllXG59XG5cbmNvbnN0IGZhbGxCYWNrUmVjb3JkID0ge1xuICB0aXRsZTogXCJlbXB0eVwiLFxuICByZWxlYXNlWWVhcjogLTEsXG4gIHByaWNlOiAtMSxcbiAgcmF0aW5nOiAtMSxcbiAgaW1hZ2U6IFwiZW1wdHlcIixcbiAgc2x1ZzogXCJlbXB0eVwiLFxuICBjb21tZW50czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxufVxuXG5jb25zdCBHRVRfTU9WSUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5ICgkbW92aWVTbHVnOiBTdHJpbmchKSB7XG4gICAgbW92aWVJdGVtOiBtb3ZpZShzbHVnOiAkbW92aWVTbHVnKSB7XG4gICAgICB0aXRsZVxuICAgICAgcmVsZWFzZVllYXJcbiAgICAgIHByaWNlXG4gICAgICByYXRpbmdcbiAgICAgIGltYWdlXG4gICAgICBzbHVnXG4gICAgICBjb21tZW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRleHRcbiAgICAgIH1cbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbi8vIEdldCBtb3ZpZSBieSBzbHVnXG5cbmNvbnN0IFNpbmdsZU1vdmllUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeTxNb3ZpZURhdGFSZXNwb25zZT4oR0VUX01PVklFX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBtb3ZpZVNsdWc6IHF1ZXJ5LnNsdWcsXG4gICAgfSxcbiAgfSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgY29uc29sZS5sb2coXCJkYXRhLlwiLCBkYXRhPy5tb3ZpZUl0ZW0pXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2V9ID0gZGF0YT8ubW92aWVJdGVtID8/IGZhbGxCYWNrUmVjb3JkXG5cbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIDxwPmFzZGFzZDwvcD5cbiAgICAgIHt0aXRsZX1cbiAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9kYXJrLWtuaWdodC5qcGdcIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz4gKi99XG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IC8+XG4gICAgPC9wPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVNb3ZpZVBhZ2VcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkltYWdlIiwidXNlUm91dGVyIiwiZmFsbEJhY2tSZWNvcmQiLCJ0aXRsZSIsInJlbGVhc2VZZWFyIiwicHJpY2UiLCJyYXRpbmciLCJpbWFnZSIsInNsdWciLCJjb21tZW50cyIsImNhdGVnb3JpZXMiLCJHRVRfTU9WSUVfUVVFUlkiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1vdmllU2x1ZyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1vdmllSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

/***/ })

});