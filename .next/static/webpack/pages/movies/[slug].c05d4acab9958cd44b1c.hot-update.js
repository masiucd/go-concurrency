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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar GET_MOVIE_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query ($movieSlug: String!) {\\n    movie(slug: $movieSlug) {\\n      title\\n    }\\n  }\\n\"]))); // Get movie by slug\n\nvar SingleMoviePage = function SingleMoviePage() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),\n      query = _useRouter.query;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      slug: query.slug\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  console.log({\n    data: data\n  });\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 10\n    }\n  }, query.slug);\n};\n\n_s(SingleMoviePage, \"WmDs9Ho2ebrp3twXJ/K+bWZn45M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = SingleMoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMoviePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleMoviePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUcsZUFBZSxHQUFHRixvREFBSCxtVEFBckIsRUFRQTs7QUFFQSxJQUFNRyxlQUEwQixHQUFHLFNBQTdCQSxlQUE2QixHQUFNO0FBQUE7O0FBQ3ZDLG1CQUFnQkYsc0RBQVMsRUFBekI7QUFBQSxNQUFPRyxLQUFQLGNBQU9BLEtBQVA7O0FBQ0Esa0JBQStCTCx3REFBUSxDQUFDRyxlQUFELEVBQWtCO0FBQ3ZERyxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNFO0FBREg7QUFENEMsR0FBbEIsQ0FBdkM7QUFBQSxNQUFPQyxJQUFQLGFBQU9BLElBQVA7QUFBQSxNQUFhQyxPQUFiLGFBQWFBLE9BQWI7QUFBQSxNQUFzQkMsS0FBdEIsYUFBc0JBLEtBQXRCOztBQU1BLE1BQUlELE9BQUosRUFBYTtBQUNYLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUNELE1BQUlDLEtBQUosRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUEsS0FBSyxDQUFDQyxPQUFuQixDQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLElBQUFBLElBQUksRUFBSkE7QUFBRCxHQUFaO0FBRUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlILEtBQUssQ0FBQ0UsSUFBVixDQUFQO0FBQ0QsQ0FsQkQ7O0dBQU1IO1VBQ1lGLG9EQUNlRjs7O0tBRjNCSTtBQW1CTiwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMvW3NsdWddLnRzeD85MWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7RkN9IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBHRVRfTU9WSUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5ICgkbW92aWVTbHVnOiBTdHJpbmchKSB7XG4gICAgbW92aWUoc2x1ZzogJG1vdmllU2x1Zykge1xuICAgICAgdGl0bGVcbiAgICB9XG4gIH1cbmBcblxuLy8gR2V0IG1vdmllIGJ5IHNsdWdcblxuY29uc3QgU2luZ2xlTW92aWVQYWdlOiBGQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnkoR0VUX01PVklFX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHtkYXRhfSlcblxuICByZXR1cm4gPHA+e3F1ZXJ5LnNsdWd9PC9wPlxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTW92aWVQYWdlXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJ1c2VSb3V0ZXIiLCJHRVRfTU9WSUVfUVVFUlkiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsInZhcmlhYmxlcyIsInNsdWciLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

/***/ })

});