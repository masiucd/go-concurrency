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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled/base */ \"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_icons_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icons/star */ \"./components/icons/star.tsx\");\n/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/styles */ \"./styles/styles.ts\");\n/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuid */ \"./node_modules/cuid/index.js\");\n/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/masiuciszek/web-dev/projects/Cinema-wizard/pages/movies/[slug].tsx\",\n    _this = undefined,\n    _templateObject,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\n\n\n\nvar formatPrice = function formatPrice(price) {\n  var _price$toString$split = price.toString(10).split(\"\"),\n      _price$toString$split2 = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__.default)(_price$toString$split),\n      tens = _price$toString$split2[0],\n      unit = _price$toString$split2[1],\n      rest = _price$toString$split2.slice(2);\n\n  return \"\".concat(tens).concat(unit, \".\").concat(rest.join(\"\"), \"$\");\n};\n\nvar generateStars = function generateStars(rating) {\n  var xs = [];\n\n  for (var i = 0; i < rating; i++) {\n    // xs.push(<Image key={cuid()} src=\"/star.svg\" width={20} height={20} />)\n    xs.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_icons_star__WEBPACK_IMPORTED_MODULE_3__.default, {\n      key: cuid__WEBPACK_IMPORTED_MODULE_5___default()(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }));\n  }\n\n  return xs;\n};\n\nvar fallBackRecord = {\n  title: \"empty\",\n  releaseYear: -1,\n  price: -1,\n  rating: -1,\n  image: \"empty\",\n  slug: \"empty\",\n  comments: [],\n  categories: []\n};\nvar GET_MOVIE_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject || (_templateObject = (0,_Users_masiuciszek_web_dev_projects_Cinema_wizard_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query ($movieSlug: String!) {\\n    movieItem: movie(slug: $movieSlug) {\\n      title\\n      releaseYear\\n      price\\n      rating\\n      image\\n      slug\\n      comments {\\n        id\\n        text\\n      }\\n      categories {\\n        name\\n      }\\n    }\\n  }\\n\"])));\n\nvar ImgWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.default)(\"div\",  false ? 0 : {\n  target: \"euvott31\",\n  label: \"ImgWrapper\"\n})( false ? 0 : {\n  name: \"nw3eu4\",\n  styles: \"border:1px solid red;height:30em\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvbW92aWVzL1tzbHVnXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkQ2QiIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBTdGFyIGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9zdGFyXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHtjb2xvcnNNYWlufSBmcm9tIFwiQHN0eWxlcy9zdHlsZXNcIlxuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFt0ZW5zLCB1bml0LCAuLi5yZXN0XSA9IHByaWNlLnRvU3RyaW5nKDEwKS5zcGxpdChcIlwiKVxuICByZXR1cm4gYCR7dGVuc30ke3VuaXR9LiR7cmVzdC5qb2luKFwiXCIpfSRgXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RhcnMgPSAocmF0aW5nOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGluZzsgaSsrKSB7XG4gICAgLy8geHMucHVzaCg8SW1hZ2Uga2V5PXtjdWlkKCl9IHNyYz1cIi9zdGFyLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz4pXG4gICAgeHMucHVzaCg8U3RhciBrZXk9e2N1aWQoKX0gLz4pXG4gIH1cbiAgcmV0dXJuIHhzXG59XG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAzMGVtO1xuYFxuXG5jb25zdCBTdHlsZWRNb3ZpZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjM1ZW07XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnNNYWluLmhpZ2hsaWdodH07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBTaW5nbGVNb3ZpZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnk8TW92aWVEYXRhUmVzcG9uc2U+KEdFVF9NT1ZJRV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbW92aWVTbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8U3R5bGVkTW92aWU+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB5ZWFyOiA8c3Bhbj57cmVsZWFzZVllYXJ9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICByYXRpbmc6IDxzcGFuPntnZW5lcmF0ZVN0YXJzKHJhdGluZyl9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBwcmljZTogPHNwYW4+e2Zvcm1hdFByaWNlKHByaWNlKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZE1vdmllPlxuICAgICAgPEltZ1dyYXBwZXI+ey8qIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz4gKi99PC9JbWdXcmFwcGVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar StyledMovie = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__.default)(\"section\",  false ? 0 : {\n  target: \"euvott30\",\n  label: \"StyledMovie\"\n})(\"border:2px solid red;h3{font-size:9rem;text-align:center;}.info{display:flex;border:2px solid red;max-width:40rem;margin:0 auto;justify-content:space-evenly;p{font-size:1.35em;span{color:\", _styles_styles__WEBPACK_IMPORTED_MODULE_4__.colorsMain.highlight, \";font-weight:bold;}}}\" + ( false ? 0 : \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNpdWNpc3play93ZWItZGV2L3Byb2plY3RzL0NpbmVtYS13aXphcmQvcGFnZXMvbW92aWVzL1tzbHVnXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQyIsImZpbGUiOiIvVXNlcnMvbWFzaXVjaXN6ZWsvd2ViLWRldi9wcm9qZWN0cy9DaW5lbWEtd2l6YXJkL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBTdGFyIGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9zdGFyXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHtjb2xvcnNNYWlufSBmcm9tIFwiQHN0eWxlcy9zdHlsZXNcIlxuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFt0ZW5zLCB1bml0LCAuLi5yZXN0XSA9IHByaWNlLnRvU3RyaW5nKDEwKS5zcGxpdChcIlwiKVxuICByZXR1cm4gYCR7dGVuc30ke3VuaXR9LiR7cmVzdC5qb2luKFwiXCIpfSRgXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RhcnMgPSAocmF0aW5nOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGluZzsgaSsrKSB7XG4gICAgLy8geHMucHVzaCg8SW1hZ2Uga2V5PXtjdWlkKCl9IHNyYz1cIi9zdGFyLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz4pXG4gICAgeHMucHVzaCg8U3RhciBrZXk9e2N1aWQoKX0gLz4pXG4gIH1cbiAgcmV0dXJuIHhzXG59XG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAzMGVtO1xuYFxuXG5jb25zdCBTdHlsZWRNb3ZpZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjM1ZW07XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnNNYWluLmhpZ2hsaWdodH07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBTaW5nbGVNb3ZpZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnk8TW92aWVEYXRhUmVzcG9uc2U+KEdFVF9NT1ZJRV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbW92aWVTbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8U3R5bGVkTW92aWU+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB5ZWFyOiA8c3Bhbj57cmVsZWFzZVllYXJ9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICByYXRpbmc6IDxzcGFuPntnZW5lcmF0ZVN0YXJzKHJhdGluZyl9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBwcmljZTogPHNwYW4+e2Zvcm1hdFByaWNlKHByaWNlKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZE1vdmllPlxuICAgICAgPEltZ1dyYXBwZXI+ey8qIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz4gKi99PC9JbWdXcmFwcGVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl19 */\"));\n\nvar SingleMoviePage = function SingleMoviePage() {\n  _s();\n\n  var _data$movieItem;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(),\n      query = _useRouter.query;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(GET_MOVIE_QUERY, {\n    variables: {\n      movieSlug: query.slug\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 12\n      }\n    }, \"Loading ...\");\n  }\n\n  if (error) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  }\n\n  var _ref = (_data$movieItem = data === null || data === void 0 ? void 0 : data.movieItem) !== null && _data$movieItem !== void 0 ? _data$movieItem : fallBackRecord,\n      title = _ref.title,\n      image = _ref.image,\n      releaseYear = _ref.releaseYear,\n      rating = _ref.rating,\n      price = _ref.price,\n      categories = _ref.categories;\n\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n    href: \"/movies\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \" \\u2190 Movies\")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledMovie, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, \"year: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 19\n    }\n  }, releaseYear), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, \"rating: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 21\n    }\n  }, generateStars(rating)), \" \"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, \"price: \", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 20\n    }\n  }, formatPrice(price)), \" \"))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(ImgWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(SingleMoviePage, \"WmDs9Ho2ebrp3twXJ/K+bWZn45M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery];\n});\n\n_c = SingleMoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMoviePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleMoviePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBTXVCO1VBQ1kxQixvREFDZU47OztLQUYzQmdDO0FBeUNOLCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9bc2x1Z10udHN4PzkxZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBTdGFyIGZyb20gXCJAY29tcG9uZW50cy9pY29ucy9zdGFyXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge01vdmllfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHtjb2xvcnNNYWlufSBmcm9tIFwiQHN0eWxlcy9zdHlsZXNcIlxuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtYXRQcmljZSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IFt0ZW5zLCB1bml0LCAuLi5yZXN0XSA9IHByaWNlLnRvU3RyaW5nKDEwKS5zcGxpdChcIlwiKVxuICByZXR1cm4gYCR7dGVuc30ke3VuaXR9LiR7cmVzdC5qb2luKFwiXCIpfSRgXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RhcnMgPSAocmF0aW5nOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGluZzsgaSsrKSB7XG4gICAgLy8geHMucHVzaCg8SW1hZ2Uga2V5PXtjdWlkKCl9IHNyYz1cIi9zdGFyLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz4pXG4gICAgeHMucHVzaCg8U3RhciBrZXk9e2N1aWQoKX0gLz4pXG4gIH1cbiAgcmV0dXJuIHhzXG59XG5cbmludGVyZmFjZSBNb3ZpZURhdGFSZXNwb25zZSB7XG4gIG1vdmllSXRlbTogTW92aWVcbn1cblxuY29uc3QgZmFsbEJhY2tSZWNvcmQgPSB7XG4gIHRpdGxlOiBcImVtcHR5XCIsXG4gIHJlbGVhc2VZZWFyOiAtMSxcbiAgcHJpY2U6IC0xLFxuICByYXRpbmc6IC0xLFxuICBpbWFnZTogXCJlbXB0eVwiLFxuICBzbHVnOiBcImVtcHR5XCIsXG4gIGNvbW1lbnRzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG59XG5cbmNvbnN0IEdFVF9NT1ZJRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgKCRtb3ZpZVNsdWc6IFN0cmluZyEpIHtcbiAgICBtb3ZpZUl0ZW06IG1vdmllKHNsdWc6ICRtb3ZpZVNsdWcpIHtcbiAgICAgIHRpdGxlXG4gICAgICByZWxlYXNlWWVhclxuICAgICAgcHJpY2VcbiAgICAgIHJhdGluZ1xuICAgICAgaW1hZ2VcbiAgICAgIHNsdWdcbiAgICAgIGNvbW1lbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAzMGVtO1xuYFxuXG5jb25zdCBTdHlsZWRNb3ZpZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjM1ZW07XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnNNYWluLmhpZ2hsaWdodH07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBTaW5nbGVNb3ZpZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9ID0gdXNlUXVlcnk8TW92aWVEYXRhUmVzcG9uc2U+KEdFVF9NT1ZJRV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbW92aWVTbHVnOiBxdWVyeS5zbHVnLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgaW1hZ2UsIHJlbGVhc2VZZWFyLCByYXRpbmcsIHByaWNlLCBjYXRlZ29yaWVzfSA9IGRhdGE/Lm1vdmllSXRlbSA/PyBmYWxsQmFja1JlY29yZFxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZXNcIj5cbiAgICAgICAgPGE+ICYjODU5MjsgTW92aWVzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8U3R5bGVkTW92aWU+XG4gICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB5ZWFyOiA8c3Bhbj57cmVsZWFzZVllYXJ9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICByYXRpbmc6IDxzcGFuPntnZW5lcmF0ZVN0YXJzKHJhdGluZyl9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBwcmljZTogPHNwYW4+e2Zvcm1hdFByaWNlKHByaWNlKX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZE1vdmllPlxuICAgICAgPEltZ1dyYXBwZXI+ey8qIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz4gKi99PC9JbWdXcmFwcGVyPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZU1vdmllUGFnZVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiU3RhciIsImNvbG9yc01haW4iLCJjdWlkIiwiZ3FsIiwiTGluayIsInVzZVJvdXRlciIsIkZyYWdtZW50IiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsInRvU3RyaW5nIiwic3BsaXQiLCJ0ZW5zIiwidW5pdCIsInJlc3QiLCJqb2luIiwiZ2VuZXJhdGVTdGFycyIsInJhdGluZyIsInhzIiwiaSIsInB1c2giLCJmYWxsQmFja1JlY29yZCIsInRpdGxlIiwicmVsZWFzZVllYXIiLCJpbWFnZSIsInNsdWciLCJjb21tZW50cyIsImNhdGVnb3JpZXMiLCJHRVRfTU9WSUVfUVVFUlkiLCJJbWdXcmFwcGVyIiwiU3R5bGVkTW92aWUiLCJoaWdobGlnaHQiLCJTaW5nbGVNb3ZpZVBhZ2UiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1vdmllU2x1ZyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwibW92aWVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[slug].tsx\n");

/***/ })

});