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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled/base */ \"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\n\nvar formatPrice = function formatPrice(price) {\n  var _price$toString$split = price.toString(10).split(\"\"),\n      _price$toString$split2 = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__.default)(_price$toString$split),\n      tens = _price$toString$split2[0],\n      unit = _price$toString$split2[1],\n      rest = _price$toString$split2.slice(2);\n\n  return \"\".concat(tens).concat(unit, \".\").concat(rest.join(\"\"), \"$\");\n};\n\nvar fallBackRecord = {\n  title: \"empty\",\n  releaseYear: -1,\n  price: -1,\n  rating: -1,\n  image: \"empty\",\n  slug: \"empty\",\n  comments: [],\n  categories: []\n};\nvar GET_MOVIE_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query ($movieSlug: String!) {\\n    movieItem: movie(slug: $movieSlug) {\\n      title\\n      releaseYear\\n      price\\n      rating\\n      image\\n      slug\\n      comments {\\n        id\\n        text\\n      }\\n      categories {\\n        name\\n      }\\n    }\\n  }\\n\"])));\n\nvar ImgWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.default)(\"div\",  false ? 0 : {\n  target: \"euvott31\",\n  label: \"ImgWrapper\"\n})( false ? 0 : {\n  name: \"nw3eu4\",\n  styles: \"border:1px solid red;height:30em\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvbW92aWVzL1tzbHVnXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUQ2QiIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFt0ZW5zLCB1bml0LCAuLi5yZXN0XSA9IHByaWNlLnRvU3RyaW5nKDEwKS5zcGxpdChcIlwiKVxuICByZXR1cm4gYCR7dGVuc30ke3VuaXR9LiR7cmVzdC5qb2luKFwiXCIpfSRgXG59XG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAzMGVtO1xuYFxuXG5jb25zdCBTdHlsZWRNb3ZpZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuYFxuXG5jb25zdCBTaW5nbGVNb3ZpZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnk8TW92aWVEYXRhUmVzcG9uc2U+KEdFVF9NT1ZJRV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbW92aWVTbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8U3R5bGVkTW92aWU+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB5ZWFyOiA8c3Bhbj57cmVsZWFzZVllYXJ9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICByYXRpbmc6IDxzcGFuPntyYXRpbmd9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBwcmljZTogPHNwYW4+e2Zvcm1hdFByaWNlKHByaWNlKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZE1vdmllPlxuICAgICAgPEltZ1dyYXBwZXI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvSW1nV3JhcHBlcj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVNb3ZpZVBhZ2VcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar StyledMovie = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.default)(\"section\",  false ? 0 : {\n  target: \"euvott30\",\n  label: \"StyledMovie\"\n})( false ? 0 : {\n  name: \"e37dl5\",\n  styles: \"border:2px solid red;h3{font-size:9rem;text-align:center;}.info{display:flex;border:2px solid red;max-width:40rem;margin:0 auto;justify-content:space-between;}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvbW92aWVzL1tzbHVnXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFt0ZW5zLCB1bml0LCAuLi5yZXN0XSA9IHByaWNlLnRvU3RyaW5nKDEwKS5zcGxpdChcIlwiKVxuICByZXR1cm4gYCR7dGVuc30ke3VuaXR9LiR7cmVzdC5qb2luKFwiXCIpfSRgXG59XG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAzMGVtO1xuYFxuXG5jb25zdCBTdHlsZWRNb3ZpZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuYFxuXG5jb25zdCBTaW5nbGVNb3ZpZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnk8TW92aWVEYXRhUmVzcG9uc2U+KEdFVF9NT1ZJRV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbW92aWVTbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8U3R5bGVkTW92aWU+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB5ZWFyOiA8c3Bhbj57cmVsZWFzZVllYXJ9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICByYXRpbmc6IDxzcGFuPntyYXRpbmd9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBwcmljZTogPHNwYW4+e2Zvcm1hdFByaWNlKHByaWNlKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZE1vdmllPlxuICAgICAgPEltZ1dyYXBwZXI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvSW1nV3JhcHBlcj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVNb3ZpZVBhZ2VcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar SingleMoviePage = function SingleMoviePage() {\n  _s();\n\n  var _data$movieItem;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),\n      query = _useRouter.query;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      movieSlug: query.slug\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  var _ref = (_data$movieItem = data === null || data === void 0 ? void 0 : data.movieItem) !== null && _data$movieItem !== void 0 ? _data$movieItem : fallBackRecord,\n      title = _ref.title,\n      image = _ref.image,\n      releaseYear = _ref.releaseYear,\n      rating = _ref.rating,\n      price = _ref.price,\n      categories = _ref.categories;\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n    href: \"/movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \" \\u2190 Movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledMovie, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, \"year: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 19\n    }\n  }, releaseYear), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, \"rating: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 21\n    }\n  }, rating), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, \"price: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 20\n    }\n  }, formatPrice(price)), \" \"))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(ImgWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n    src: image,\n    width: \"100%\",\n    height: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(SingleMoviePage, \"WmDs9Ho2ebrp3twXJ/K+bWZn45M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery];\n});\n\n_c = SingleMoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMoviePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleMoviePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sS0FBTCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsV0FBUCxDQURSLEVBQ21DLEdBRG5DLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsTUFBUCxDQURWLEVBQ2dDLEdBRGhDLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1gsV0FBVyxDQUFDQyxLQUFELENBQWxCLENBRFQsRUFDMkMsR0FEM0MsQ0FQRixDQUZGLENBTEYsRUFtQkUsb0RBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Usb0RBQUMsbURBQUQ7QUFBTyxPQUFHLEVBQUVXLEtBQVo7QUFBbUIsU0FBSyxFQUFDLE1BQXpCO0FBQWdDLFVBQU0sRUFBQyxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQkYsQ0FERjtBQXlCRCxDQTFDRDs7R0FBTU87VUFDWXJCLG9EQUNlSjs7O0tBRjNCeUI7QUEyQ04sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1tzbHVnXS50c3g/OTFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7TW92aWV9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgW3RlbnMsIHVuaXQsIC4uLnJlc3RdID0gcHJpY2UudG9TdHJpbmcoMTApLnNwbGl0KFwiXCIpXG4gIHJldHVybiBgJHt0ZW5zfSR7dW5pdH0uJHtyZXN0LmpvaW4oXCJcIil9JGBcbn1cblxuaW50ZXJmYWNlIE1vdmllRGF0YVJlc3BvbnNlIHtcbiAgbW92aWVJdGVtOiBNb3ZpZVxufVxuXG5jb25zdCBmYWxsQmFja1JlY29yZCA9IHtcbiAgdGl0bGU6IFwiZW1wdHlcIixcbiAgcmVsZWFzZVllYXI6IC0xLFxuICBwcmljZTogLTEsXG4gIHJhdGluZzogLTEsXG4gIGltYWdlOiBcImVtcHR5XCIsXG4gIHNsdWc6IFwiZW1wdHlcIixcbiAgY29tbWVudHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbn1cblxuY29uc3QgR0VUX01PVklFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSAoJG1vdmllU2x1ZzogU3RyaW5nISkge1xuICAgIG1vdmllSXRlbTogbW92aWUoc2x1ZzogJG1vdmllU2x1Zykge1xuICAgICAgdGl0bGVcbiAgICAgIHJlbGVhc2VZZWFyXG4gICAgICBwcmljZVxuICAgICAgcmF0aW5nXG4gICAgICBpbWFnZVxuICAgICAgc2x1Z1xuICAgICAgY29tbWVudHMge1xuICAgICAgICBpZFxuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBoZWlnaHQ6IDMwZW07XG5gXG5cbmNvbnN0IFN0eWxlZE1vdmllID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogOXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIG1heC13aWR0aDogNDByZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5gXG5cbmNvbnN0IFNpbmdsZU1vdmllUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeTxNb3ZpZURhdGFSZXNwb25zZT4oR0VUX01PVklFX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBtb3ZpZVNsdWc6IHF1ZXJ5LnNsdWcsXG4gICAgfSxcbiAgfSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+XG4gIH1cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgY29uc3Qge3RpdGxlLCBpbWFnZSwgcmVsZWFzZVllYXIsIHJhdGluZywgcHJpY2UsIGNhdGVnb3JpZXN9ID0gZGF0YT8ubW92aWVJdGVtID8/IGZhbGxCYWNrUmVjb3JkXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBocmVmPVwiL21vdmllc1wiPlxuICAgICAgICA8YT4gJiM4NTkyOyBNb3ZpZXM8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxTdHlsZWRNb3ZpZT5cbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHllYXI6IDxzcGFuPntyZWxlYXNlWWVhcn08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHJhdGluZzogPHNwYW4+e3JhdGluZ308L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHByaWNlOiA8c3Bhbj57Zm9ybWF0UHJpY2UocHJpY2UpfTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkTW92aWU+XG4gICAgICA8SW1nV3JhcHBlcj5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxuICAgICAgPC9JbWdXcmFwcGVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiZ3FsIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiRnJhZ21lbnQiLCJmb3JtYXRQcmljZSIsInByaWNlIiwidG9TdHJpbmciLCJzcGxpdCIsInRlbnMiLCJ1bml0IiwicmVzdCIsImpvaW4iLCJmYWxsQmFja1JlY29yZCIsInRpdGxlIiwicmVsZWFzZVllYXIiLCJyYXRpbmciLCJpbWFnZSIsInNsdWciLCJjb21tZW50cyIsImNhdGVnb3JpZXMiLCJHRVRfTU9WSUVfUVVFUlkiLCJJbWdXcmFwcGVyIiwiU3R5bGVkTW92aWUiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1vdmllU2x1ZyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwibW92aWVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

/***/ })

});