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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./lib/context.ts":
/*!************************!*\
  !*** ./lib/context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"./lib/prisma.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction createContext(req, res) {\n  return _objectSpread(_objectSpread(_objectSpread({}, req), res), {}, {\n    prisma: _prisma__WEBPACK_IMPORTED_MODULE_0__.default\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBO0FBUU8sU0FBU0MsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNENDLEdBQTVDLEVBQWtFO0FBQ3ZFLHVEQUNLRCxHQURMLEdBRUtDLEdBRkw7QUFHRUgsSUFBQUEsTUFBTUEsOENBQUFBO0FBSFI7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpbmVtYS1vcmRlci8uL2xpYi9jb250ZXh0LnRzPzRlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vcHJpc21hXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0IHtcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuICBwcmlzbWE6IFByaXNtYUNsaWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIC4uLnJlcSxcbiAgICAuLi5yZXMsXG4gICAgcHJpc21hLFxuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiY3JlYXRlQ29udGV4dCIsInJlcSIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/context.ts\n");

/***/ }),

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  // @ts-ignore\n  if (!global.prisma) {\n    // @ts-ignore\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  } // @ts-ignore\n\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTDtBQUNBLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixJQUFJRCx3REFBSixFQUFoQjtBQUNELEdBTEksQ0FNTDs7O0FBQ0FDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLW9yZGVyLy4vbGliL3ByaXNtYS50cz9kNzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GQLDate\": () => (/* binding */ GQLDate),\n/* harmony export */   \"schema\": () => (/* binding */ schema),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-scalars */ \"graphql-scalars\");\n/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/cookies */ \"./util/cookies.ts\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.ts\");\n/* harmony import */ var _object_types_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object-types/user */ \"./pages/api/object-types/user.ts\");\n/* harmony import */ var _object_types_movie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object-types/movie */ \"./pages/api/object-types/movie.ts\");\n/* harmony import */ var _object_types_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object-types/comment */ \"./pages/api/object-types/comment.ts\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query */ \"./pages/api/query/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst GQLDate = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.asNexusMethod)(graphql_scalars__WEBPACK_IMPORTED_MODULE_1__.DateTimeResolver, \"date\");\nconst schema = (0,nexus__WEBPACK_IMPORTED_MODULE_2__.makeSchema)({\n  types: [_object_types_comment__WEBPACK_IMPORTED_MODULE_9__.Comment, _object_types_user__WEBPACK_IMPORTED_MODULE_7__.User, _object_types_movie__WEBPACK_IMPORTED_MODULE_8__.Movie, GQLDate, _query__WEBPACK_IMPORTED_MODULE_10__.Query],\n  outputs: {\n    typegen: path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"generated/nexus-typegen.ts\"),\n    schema: path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"generated/schema.graphql\")\n  }\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema,\n  context: _lib_context__WEBPACK_IMPORTED_MODULE_6__.createContext\n});\nlet apolloServerHandler;\n\nasync function getApolloServerHandler() {\n  if (!apolloServerHandler) {\n    await apolloServer.start();\n    apolloServerHandler = apolloServer.createHandler({\n      path: \"/api\"\n    });\n  }\n\n  return apolloServerHandler;\n}\n\nconst handler = async (req, res) => {\n  const apolloServerHandler = await getApolloServerHandler();\n\n  if (req.method === \"OPTIONS\") {\n    res.end();\n    return;\n  }\n\n  (0,_util_cookies__WEBPACK_IMPORTED_MODULE_5__.setCookie)(res, \"movie-app\", \"movie-middleware\");\n  return apolloServerHandler(req, res);\n}; // @ts-ignore\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (micro_cors__WEBPACK_IMPORTED_MODULE_4___default()()(handler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTVksT0FBTyxHQUFHVixvREFBYSxDQUFDRCw2REFBRCxFQUFtQixNQUFuQixDQUE3QjtBQUVBLE1BQU1ZLE1BQU0sR0FBR1YsaURBQVUsQ0FBQztBQUMvQlcsRUFBQUEsS0FBSyxFQUFFLENBQUNKLDBEQUFELEVBQVVGLG9EQUFWLEVBQWdCQyxzREFBaEIsRUFBdUJHLE9BQXZCLEVBQWdDRCwwQ0FBaEMsQ0FEd0I7QUFFL0JJLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxPQUFPLEVBQUVaLGdEQUFBLENBQVVjLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLDRCQUF6QixDQURGO0FBRVBOLElBQUFBLE1BQU0sRUFBRVQsZ0RBQUEsQ0FBVWMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsMEJBQXpCO0FBRkQ7QUFGc0IsQ0FBRCxDQUF6QjtBQVFBLE1BQU1DLE1BQU0sR0FBRztBQUNwQkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLFVBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZjtBQU1QLE1BQU1DLFlBQVksR0FBRyxJQUFJdkIsNkRBQUosQ0FBaUI7QUFBQ2EsRUFBQUEsTUFBRDtBQUFTVyxFQUFBQSxPQUFPLEVBQUVqQix1REFBYUE7QUFBL0IsQ0FBakIsQ0FBckI7QUFDQSxJQUFJa0IsbUJBQUo7O0FBRUEsZUFBZUMsc0JBQWYsR0FBd0M7QUFDdEMsTUFBSSxDQUFDRCxtQkFBTCxFQUEwQjtBQUN4QixVQUFNRixZQUFZLENBQUNJLEtBQWIsRUFBTjtBQUNBRixJQUFBQSxtQkFBbUIsR0FBR0YsWUFBWSxDQUFDSyxhQUFiLENBQTJCO0FBQy9DeEIsTUFBQUEsSUFBSSxFQUFFO0FBRHlDLEtBQTNCLENBQXRCO0FBR0Q7O0FBQ0QsU0FBT3FCLG1CQUFQO0FBQ0Q7O0FBRUQsTUFBTUksT0FBdUIsR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNuRixRQUFNTixtQkFBbUIsR0FBRyxNQUFNQyxzQkFBc0IsRUFBeEQ7O0FBQ0EsTUFBSUksR0FBRyxDQUFDRSxNQUFKLEtBQWUsU0FBbkIsRUFBOEI7QUFDNUJELElBQUFBLEdBQUcsQ0FBQ0UsR0FBSjtBQUNBO0FBQ0Q7O0FBQ0QzQixFQUFBQSx3REFBUyxDQUFDeUIsR0FBRCxFQUFNLFdBQU4sRUFBbUIsa0JBQW5CLENBQVQ7QUFDQSxTQUFPTixtQkFBbUIsQ0FBQ0ssR0FBRCxFQUFNQyxHQUFOLENBQTFCO0FBQ0QsQ0FSRCxFQVVBOzs7QUFDQSxpRUFBZTFCLGlEQUFJLEdBQUd3QixPQUFILENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLW9yZGVyLy4vcGFnZXMvYXBpL2luZGV4LnRzPzIzY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9TZXJ2ZXJ9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCJcbmltcG9ydCB7RGF0ZVRpbWVSZXNvbHZlcn0gZnJvbSBcImdyYXBocWwtc2NhbGFyc1wiXG5pbXBvcnQge05leHRBcGlIYW5kbGVyLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQge2FzTmV4dXNNZXRob2QsIGxpc3QsIG1ha2VTY2hlbWEsIG5vbk51bGwsIG51bGxhYmxlLCBvYmplY3RUeXBlLCBzdHJpbmdBcmd9IGZyb20gXCJuZXh1c1wiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgY29ycyBmcm9tIFwibWljcm8tY29yc1wiXG5pbXBvcnQge3NldENvb2tpZX0gZnJvbSBcIi4uLy4uL3V0aWwvY29va2llc1wiXG5pbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gXCIuLi8uLi9saWIvY29udGV4dFwiXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL29iamVjdC10eXBlcy91c2VyXCJcbmltcG9ydCB7TW92aWV9IGZyb20gXCIuL29iamVjdC10eXBlcy9tb3ZpZVwiXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gXCIuL29iamVjdC10eXBlcy9jb21tZW50XCJcbmltcG9ydCB7UXVlcnl9IGZyb20gXCIuL3F1ZXJ5XCJcblxuZXhwb3J0IGNvbnN0IEdRTERhdGUgPSBhc05leHVzTWV0aG9kKERhdGVUaW1lUmVzb2x2ZXIsIFwiZGF0ZVwiKVxuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gbWFrZVNjaGVtYSh7XG4gIHR5cGVzOiBbQ29tbWVudCwgVXNlciwgTW92aWUsIEdRTERhdGUsIFF1ZXJ5XSxcbiAgb3V0cHV0czoge1xuICAgIHR5cGVnZW46IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImdlbmVyYXRlZC9uZXh1cy10eXBlZ2VuLnRzXCIpLFxuICAgIHNjaGVtYTogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZ2VuZXJhdGVkL3NjaGVtYS5ncmFwaHFsXCIpLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59XG5cbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe3NjaGVtYSwgY29udGV4dDogY3JlYXRlQ29udGV4dH0pXG5sZXQgYXBvbGxvU2VydmVySGFuZGxlcjogTmV4dEFwaUhhbmRsZXJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXBvbGxvU2VydmVySGFuZGxlcigpIHtcbiAgaWYgKCFhcG9sbG9TZXJ2ZXJIYW5kbGVyKSB7XG4gICAgYXdhaXQgYXBvbGxvU2VydmVyLnN0YXJ0KClcbiAgICBhcG9sbG9TZXJ2ZXJIYW5kbGVyID0gYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xuICAgICAgcGF0aDogXCIvYXBpXCIsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gYXBvbGxvU2VydmVySGFuZGxlclxufVxuXG5jb25zdCBoYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBhcG9sbG9TZXJ2ZXJIYW5kbGVyID0gYXdhaXQgZ2V0QXBvbGxvU2VydmVySGFuZGxlcigpXG4gIGlmIChyZXEubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xuICAgIHJlcy5lbmQoKVxuICAgIHJldHVyblxuICB9XG4gIHNldENvb2tpZShyZXMsIFwibW92aWUtYXBwXCIsIFwibW92aWUtbWlkZGxld2FyZVwiKVxuICByZXR1cm4gYXBvbGxvU2VydmVySGFuZGxlcihyZXEsIHJlcylcbn1cblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGRlZmF1bHQgY29ycygpKGhhbmRsZXIpXG4iXSwibmFtZXMiOlsiQXBvbGxvU2VydmVyIiwiRGF0ZVRpbWVSZXNvbHZlciIsImFzTmV4dXNNZXRob2QiLCJtYWtlU2NoZW1hIiwicGF0aCIsImNvcnMiLCJzZXRDb29raWUiLCJjcmVhdGVDb250ZXh0IiwiVXNlciIsIk1vdmllIiwiQ29tbWVudCIsIlF1ZXJ5IiwiR1FMRGF0ZSIsInNjaGVtYSIsInR5cGVzIiwib3V0cHV0cyIsInR5cGVnZW4iLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJhcG9sbG9TZXJ2ZXIiLCJjb250ZXh0IiwiYXBvbGxvU2VydmVySGFuZGxlciIsImdldEFwb2xsb1NlcnZlckhhbmRsZXIiLCJzdGFydCIsImNyZWF0ZUhhbmRsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.ts\n");

/***/ }),

/***/ "./pages/api/object-types/comment.ts":
/*!*******************************************!*\
  !*** ./pages/api/object-types/comment.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Comment = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.objectType)({\n  name: \"Comment\",\n\n  definition(t) {\n    t.nonNull.int(\"id\");\n    t.nonNull.string(\"text\");\n    t.string(\"movieId\");\n    t.string(\"ownerId\");\n    t.field(\"owner\", {\n      type: \"User\"\n    });\n    t.field(\"movie\", {\n      type: \"Movie\"\n    });\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2JqZWN0LXR5cGVzL2NvbW1lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxPQUFPLEdBQUdELGlEQUFVLENBQUM7QUFDaENFLEVBQUFBLElBQUksRUFBRSxTQUQwQjs7QUFFaENDLEVBQUFBLFVBQVUsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1pBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRixDQUFVQyxHQUFWLENBQWMsSUFBZDtBQUNBRixJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUUsTUFBVixDQUFpQixNQUFqQjtBQUNBSCxJQUFBQSxDQUFDLENBQUNHLE1BQUYsQ0FBUyxTQUFUO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0csTUFBRixDQUFTLFNBQVQ7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDSSxLQUFGLENBQVEsT0FBUixFQUFpQjtBQUFDQyxNQUFBQSxJQUFJLEVBQUU7QUFBUCxLQUFqQjtBQUNBTCxJQUFBQSxDQUFDLENBQUNJLEtBQUYsQ0FBUSxPQUFSLEVBQWlCO0FBQUNDLE1BQUFBLElBQUksRUFBRTtBQUFQLEtBQWpCO0FBQ0Q7O0FBVCtCLENBQUQsQ0FBMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9hcGkvb2JqZWN0LXR5cGVzL2NvbW1lbnQudHM/YTcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29iamVjdFR5cGV9IGZyb20gXCJuZXh1c1wiXG5cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gb2JqZWN0VHlwZSh7XG4gIG5hbWU6IFwiQ29tbWVudFwiLFxuICBkZWZpbml0aW9uKHQpIHtcbiAgICB0Lm5vbk51bGwuaW50KFwiaWRcIilcbiAgICB0Lm5vbk51bGwuc3RyaW5nKFwidGV4dFwiKVxuICAgIHQuc3RyaW5nKFwibW92aWVJZFwiKVxuICAgIHQuc3RyaW5nKFwib3duZXJJZFwiKVxuICAgIHQuZmllbGQoXCJvd25lclwiLCB7dHlwZTogXCJVc2VyXCJ9KVxuICAgIHQuZmllbGQoXCJtb3ZpZVwiLCB7dHlwZTogXCJNb3ZpZVwifSlcbiAgfSxcbn0pXG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsIkNvbW1lbnQiLCJuYW1lIiwiZGVmaW5pdGlvbiIsInQiLCJub25OdWxsIiwiaW50Iiwic3RyaW5nIiwiZmllbGQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/object-types/comment.ts\n");

/***/ }),

/***/ "./pages/api/object-types/movie.ts":
/*!*****************************************!*\
  !*** ./pages/api/object-types/movie.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Movie\": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Movie = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.objectType)({\n  name: \"Movie\",\n\n  definition(t) {\n    t.nonNull.int(\"id\", {\n      description: \"uses int instead of uuid\"\n    });\n    t.nonNull.string(\"title\", {\n      description: \"movie title\"\n    });\n    t.nonNull.int(\"releaseYear\", {\n      description: \"year released\"\n    });\n    t.nonNull.int(\"price\", {\n      description: \"price of the movie\"\n    });\n    t.nonNull.int(\"rating\", {\n      description: \"rating from 0 to 5\"\n    });\n    t.nonNull.string(\"image\", {\n      description: \"URL string\"\n    });\n    t.list.nullable.field(\"comments\", {\n      type: \"Comment\"\n    });\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2JqZWN0LXR5cGVzL21vdmllLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsS0FBSyxHQUFHRCxpREFBVSxDQUFDO0FBQzlCRSxFQUFBQSxJQUFJLEVBQUUsT0FEd0I7O0FBRTlCQyxFQUFBQSxVQUFVLENBQUNDLENBQUQsRUFBSTtBQUNaQSxJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUMsR0FBVixDQUFjLElBQWQsRUFBb0I7QUFBQ0MsTUFBQUEsV0FBVyxFQUFFO0FBQWQsS0FBcEI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGLENBQVVHLE1BQVYsQ0FBaUIsT0FBakIsRUFBMEI7QUFBQ0QsTUFBQUEsV0FBVyxFQUFFO0FBQWQsS0FBMUI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGLENBQVVDLEdBQVYsQ0FBYyxhQUFkLEVBQTZCO0FBQUNDLE1BQUFBLFdBQVcsRUFBRTtBQUFkLEtBQTdCO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0MsT0FBRixDQUFVQyxHQUFWLENBQWMsT0FBZCxFQUF1QjtBQUFDQyxNQUFBQSxXQUFXLEVBQUU7QUFBZCxLQUF2QjtBQUNBSCxJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUMsR0FBVixDQUFjLFFBQWQsRUFBd0I7QUFBQ0MsTUFBQUEsV0FBVyxFQUFFO0FBQWQsS0FBeEI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGLENBQVVHLE1BQVYsQ0FBaUIsT0FBakIsRUFBMEI7QUFBQ0QsTUFBQUEsV0FBVyxFQUFFO0FBQWQsS0FBMUI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDSyxJQUFGLENBQU9DLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLFVBQXRCLEVBQWtDO0FBQUNDLE1BQUFBLElBQUksRUFBRTtBQUFQLEtBQWxDO0FBQ0Q7O0FBVjZCLENBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9hcGkvb2JqZWN0LXR5cGVzL21vdmllLnRzPzBhMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYmplY3RUeXBlfSBmcm9tIFwibmV4dXNcIlxuXG5leHBvcnQgY29uc3QgTW92aWUgPSBvYmplY3RUeXBlKHtcbiAgbmFtZTogXCJNb3ZpZVwiLFxuICBkZWZpbml0aW9uKHQpIHtcbiAgICB0Lm5vbk51bGwuaW50KFwiaWRcIiwge2Rlc2NyaXB0aW9uOiBcInVzZXMgaW50IGluc3RlYWQgb2YgdXVpZFwifSlcbiAgICB0Lm5vbk51bGwuc3RyaW5nKFwidGl0bGVcIiwge2Rlc2NyaXB0aW9uOiBcIm1vdmllIHRpdGxlXCJ9KVxuICAgIHQubm9uTnVsbC5pbnQoXCJyZWxlYXNlWWVhclwiLCB7ZGVzY3JpcHRpb246IFwieWVhciByZWxlYXNlZFwifSlcbiAgICB0Lm5vbk51bGwuaW50KFwicHJpY2VcIiwge2Rlc2NyaXB0aW9uOiBcInByaWNlIG9mIHRoZSBtb3ZpZVwifSlcbiAgICB0Lm5vbk51bGwuaW50KFwicmF0aW5nXCIsIHtkZXNjcmlwdGlvbjogXCJyYXRpbmcgZnJvbSAwIHRvIDVcIn0pXG4gICAgdC5ub25OdWxsLnN0cmluZyhcImltYWdlXCIsIHtkZXNjcmlwdGlvbjogXCJVUkwgc3RyaW5nXCJ9KVxuICAgIHQubGlzdC5udWxsYWJsZS5maWVsZChcImNvbW1lbnRzXCIsIHt0eXBlOiBcIkNvbW1lbnRcIn0pXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJNb3ZpZSIsIm5hbWUiLCJkZWZpbml0aW9uIiwidCIsIm5vbk51bGwiLCJpbnQiLCJkZXNjcmlwdGlvbiIsInN0cmluZyIsImxpc3QiLCJudWxsYWJsZSIsImZpZWxkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/object-types/movie.ts\n");

/***/ }),

/***/ "./pages/api/object-types/user.ts":
/*!****************************************!*\
  !*** ./pages/api/object-types/user.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n\nconst User = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.objectType)({\n  name: \"User\",\n\n  definition(t) {\n    t.nonNull.int(\"id\");\n    t.nonNull.string(\"firstName\");\n    t.nonNull.string(\"lastName\");\n    t.nonNull.string(\"email\");\n    t.nonNull.string(\"password\");\n    t.int(\"role\");\n    t.list.nullable.field(\"comments\", {\n      type: \"Comment\"\n    });\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2JqZWN0LXR5cGVzL3VzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxJQUFJLEdBQUdELGlEQUFVLENBQUM7QUFDN0JFLEVBQUFBLElBQUksRUFBRSxNQUR1Qjs7QUFFN0JDLEVBQUFBLFVBQVUsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1pBLElBQUFBLENBQUMsQ0FBQ0MsT0FBRixDQUFVQyxHQUFWLENBQWMsSUFBZDtBQUNBRixJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUUsTUFBVixDQUFpQixXQUFqQjtBQUNBSCxJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUUsTUFBVixDQUFpQixVQUFqQjtBQUNBSCxJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUUsTUFBVixDQUFpQixPQUFqQjtBQUNBSCxJQUFBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVUUsTUFBVixDQUFpQixVQUFqQjtBQUNBSCxJQUFBQSxDQUFDLENBQUNFLEdBQUYsQ0FBTSxNQUFOO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPQyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixVQUF0QixFQUFrQztBQUFDQyxNQUFBQSxJQUFJLEVBQUU7QUFBUCxLQUFsQztBQUNEOztBQVY0QixDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLW9yZGVyLy4vcGFnZXMvYXBpL29iamVjdC10eXBlcy91c2VyLnRzPzk1MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYmplY3RUeXBlfSBmcm9tIFwibmV4dXNcIlxuXG5leHBvcnQgY29uc3QgVXNlciA9IG9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlVzZXJcIixcbiAgZGVmaW5pdGlvbih0KSB7XG4gICAgdC5ub25OdWxsLmludChcImlkXCIpXG4gICAgdC5ub25OdWxsLnN0cmluZyhcImZpcnN0TmFtZVwiKVxuICAgIHQubm9uTnVsbC5zdHJpbmcoXCJsYXN0TmFtZVwiKVxuICAgIHQubm9uTnVsbC5zdHJpbmcoXCJlbWFpbFwiKVxuICAgIHQubm9uTnVsbC5zdHJpbmcoXCJwYXNzd29yZFwiKVxuICAgIHQuaW50KFwicm9sZVwiKVxuICAgIHQubGlzdC5udWxsYWJsZS5maWVsZChcImNvbW1lbnRzXCIsIHt0eXBlOiBcIkNvbW1lbnRcIn0pXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJVc2VyIiwibmFtZSIsImRlZmluaXRpb24iLCJ0Iiwibm9uTnVsbCIsImludCIsInN0cmluZyIsImxpc3QiLCJudWxsYWJsZSIsImZpZWxkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/object-types/user.ts\n");

/***/ }),

/***/ "./pages/api/query/comment.ts":
/*!************************************!*\
  !*** ./pages/api/query/comment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst getComments = t => {\n  t.list.field(\"comments\", {\n    type: \"Comment\",\n\n    // @ts-ignore\n    async resolve(parent, args, {\n      prisma\n    }) {\n      return await prisma.comment.findMany({\n        select: {\n          text: true,\n          movie: true,\n          owner: true\n        }\n      });\n    }\n\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcXVlcnkvY29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSU8sTUFBTUEsV0FBVyxHQUFJQyxDQUFELElBQWU7QUFDeENBLEVBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPQyxLQUFQLENBQWEsVUFBYixFQUF5QjtBQUN2QkMsSUFBQUEsSUFBSSxFQUFFLFNBRGlCOztBQUV2QjtBQUNBLFVBQU1DLE9BQU4sQ0FBY0MsTUFBZCxFQUFzQkMsSUFBdEIsRUFBNEI7QUFBQ0MsTUFBQUE7QUFBRCxLQUE1QixFQUErQztBQUM3QyxhQUFPLE1BQU1BLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxRQUFmLENBQXdCO0FBQ25DQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsSUFBSSxFQUFFLElBREE7QUFFTkMsVUFBQUEsS0FBSyxFQUFFLElBRkQ7QUFHTkMsVUFBQUEsS0FBSyxFQUFFO0FBSEQ7QUFEMkIsT0FBeEIsQ0FBYjtBQU9EOztBQVhzQixHQUF6QjtBQWFELENBZE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9hcGkvcXVlcnkvY29tbWVudC50cz9iYmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JqZWN0RGVmaW5pdGlvbkJsb2NrfSBmcm9tIFwibmV4dXMvZGlzdC9ibG9ja3NcIlxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbnRleHRcIlxuaW1wb3J0IHtRdWVyeVR9IGZyb20gXCIuL3R5cGVcIlxuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAodDogUXVlcnlUKSA9PiB7XG4gIHQubGlzdC5maWVsZChcImNvbW1lbnRzXCIsIHtcbiAgICB0eXBlOiBcIkNvbW1lbnRcIixcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYXN5bmMgcmVzb2x2ZShwYXJlbnQsIGFyZ3MsIHtwcmlzbWF9OiBDb250ZXh0KSB7XG4gICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmNvbW1lbnQuZmluZE1hbnkoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICAgIG1vdmllOiB0cnVlLFxuICAgICAgICAgIG93bmVyOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuICB9KVxufVxuIl0sIm5hbWVzIjpbImdldENvbW1lbnRzIiwidCIsImxpc3QiLCJmaWVsZCIsInR5cGUiLCJyZXNvbHZlIiwicGFyZW50IiwiYXJncyIsInByaXNtYSIsImNvbW1lbnQiLCJmaW5kTWFueSIsInNlbGVjdCIsInRleHQiLCJtb3ZpZSIsIm93bmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/query/comment.ts\n");

/***/ }),

/***/ "./pages/api/query/index.ts":
/*!**********************************!*\
  !*** ./pages/api/query/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": () => (/* binding */ Query)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ \"./pages/api/query/comment.ts\");\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie */ \"./pages/api/query/movie.ts\");\n\n\n\nconst Query = (0,nexus__WEBPACK_IMPORTED_MODULE_0__.extendType)({\n  type: \"Query\",\n\n  definition(t) {\n    (0,_movie__WEBPACK_IMPORTED_MODULE_2__.getMovies)(t);\n    (0,_movie__WEBPACK_IMPORTED_MODULE_2__.getMovie)(t);\n    (0,_comment__WEBPACK_IMPORTED_MODULE_1__.getComments)(t);\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcXVlcnkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxNQUFNSSxLQUFLLEdBQUdKLGlEQUFVLENBQUM7QUFDOUJLLEVBQUFBLElBQUksRUFBRSxPQUR3Qjs7QUFFOUJDLEVBQUFBLFVBQVUsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1pKLElBQUFBLGlEQUFTLENBQUNJLENBQUQsQ0FBVDtBQUNBTCxJQUFBQSxnREFBUSxDQUFDSyxDQUFELENBQVI7QUFDQU4sSUFBQUEscURBQVcsQ0FBQ00sQ0FBRCxDQUFYO0FBQ0Q7O0FBTjZCLENBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtb3JkZXIvLi9wYWdlcy9hcGkvcXVlcnkvaW5kZXgudHM/ZWI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2V4dGVuZFR5cGV9IGZyb20gXCJuZXh1c1wiXG5pbXBvcnQge2dldENvbW1lbnRzfSBmcm9tIFwiLi9jb21tZW50XCJcblxuaW1wb3J0IHtnZXRNb3ZpZSwgZ2V0TW92aWVzfSBmcm9tIFwiLi9tb3ZpZVwiXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IGV4dGVuZFR5cGUoe1xuICB0eXBlOiBcIlF1ZXJ5XCIsXG4gIGRlZmluaXRpb24odCkge1xuICAgIGdldE1vdmllcyh0KVxuICAgIGdldE1vdmllKHQpXG4gICAgZ2V0Q29tbWVudHModClcbiAgfSxcbn0pXG4iXSwibmFtZXMiOlsiZXh0ZW5kVHlwZSIsImdldENvbW1lbnRzIiwiZ2V0TW92aWUiLCJnZXRNb3ZpZXMiLCJRdWVyeSIsInR5cGUiLCJkZWZpbml0aW9uIiwidCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/query/index.ts\n");

/***/ }),

/***/ "./pages/api/query/movie.ts":
/*!**********************************!*\
  !*** ./pages/api/query/movie.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"getMovie\": () => (/* binding */ getMovie)\n/* harmony export */ });\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ \"nexus\");\n/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getMovies = t => {\n  t.list.field(\"movies\", {\n    type: \"Movie\",\n\n    async resolve(_, __, ctx) {\n      return await ctx.prisma.movie.findMany();\n    }\n\n  });\n};\nconst getMovie = t => {\n  t.field(\"movie\", {\n    type: \"Movie\",\n    args: {\n      id: (0,nexus__WEBPACK_IMPORTED_MODULE_0__.nonNull)((0,nexus__WEBPACK_IMPORTED_MODULE_0__.intArg)())\n    },\n\n    async resolve(_, {\n      id\n    }, ctx) {\n      return await ctx.prisma.movie.findFirst({\n        where: {\n          id\n        }\n      });\n    }\n\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcXVlcnkvbW92aWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSU8sTUFBTUUsU0FBUyxHQUFJQyxDQUFELElBQXFCO0FBQzVDQSxFQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsS0FBUCxDQUFhLFFBQWIsRUFBdUI7QUFDckJDLElBQUFBLElBQUksRUFBRSxPQURlOztBQUVyQixVQUFNQyxPQUFOLENBQWNDLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxHQUFyQixFQUFtQztBQUNqQyxhQUFPLE1BQU1BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxLQUFYLENBQWlCQyxRQUFqQixFQUFiO0FBQ0Q7O0FBSm9CLEdBQXZCO0FBTUQsQ0FQTTtBQVNBLE1BQU1DLFFBQVEsR0FBSVgsQ0FBRCxJQUFxQjtBQUMzQ0EsRUFBQUEsQ0FBQyxDQUFDRSxLQUFGLENBQVEsT0FBUixFQUFpQjtBQUNmQyxJQUFBQSxJQUFJLEVBQUUsT0FEUztBQUVmUyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsRUFBRSxFQUFFZiw4Q0FBTyxDQUFDRCw2Q0FBTSxFQUFQO0FBRFAsS0FGUzs7QUFLZixVQUFNTyxPQUFOLENBQWNDLENBQWQsRUFBaUI7QUFBQ1EsTUFBQUE7QUFBRCxLQUFqQixFQUF1Qk4sR0FBdkIsRUFBcUM7QUFDbkMsYUFBTyxNQUFNQSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsS0FBWCxDQUFpQkssU0FBakIsQ0FBMkI7QUFBQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQUNGLFVBQUFBO0FBQUQ7QUFBUixPQUEzQixDQUFiO0FBQ0Q7O0FBUGMsR0FBakI7QUFTRCxDQVZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZW1hLW9yZGVyLy4vcGFnZXMvYXBpL3F1ZXJ5L21vdmllLnRzPzI4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbnRBcmcsIG5vbk51bGx9IGZyb20gXCJuZXh1c1wiXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi8uLi8uLi9saWIvY29udGV4dFwiXG5pbXBvcnQge1F1ZXJ5VH0gZnJvbSBcIi4vdHlwZVwiXG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAodDogUXVlcnlUKTogdm9pZCA9PiB7XG4gIHQubGlzdC5maWVsZChcIm1vdmllc1wiLCB7XG4gICAgdHlwZTogXCJNb3ZpZVwiLFxuICAgIGFzeW5jIHJlc29sdmUoXywgX18sIGN0eDogQ29udGV4dCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGN0eC5wcmlzbWEubW92aWUuZmluZE1hbnkoKVxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZSA9ICh0OiBRdWVyeVQpOiB2b2lkID0+IHtcbiAgdC5maWVsZChcIm1vdmllXCIsIHtcbiAgICB0eXBlOiBcIk1vdmllXCIsXG4gICAgYXJnczoge1xuICAgICAgaWQ6IG5vbk51bGwoaW50QXJnKCkpLFxuICAgIH0sXG4gICAgYXN5bmMgcmVzb2x2ZShfLCB7aWR9LCBjdHg6IENvbnRleHQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBjdHgucHJpc21hLm1vdmllLmZpbmRGaXJzdCh7d2hlcmU6IHtpZH19KVxuICAgIH0sXG4gIH0pXG59XG4iXSwibmFtZXMiOlsiaW50QXJnIiwibm9uTnVsbCIsImdldE1vdmllcyIsInQiLCJsaXN0IiwiZmllbGQiLCJ0eXBlIiwicmVzb2x2ZSIsIl8iLCJfXyIsImN0eCIsInByaXNtYSIsIm1vdmllIiwiZmluZE1hbnkiLCJnZXRNb3ZpZSIsImFyZ3MiLCJpZCIsImZpbmRGaXJzdCIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/query/movie.ts\n");

/***/ }),

/***/ "./util/cookies.ts":
/*!*************************!*\
  !*** ./util/cookies.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst setCookie = (res, name, value, options = {}) => {\n  const checkValue = typeof value === \"object\" ? \"j:\" + JSON.stringify(value) : String(value);\n\n  if (\"maxAge\" in options) {\n    options.expires = new Date(Date.now() + options.maxAge);\n    options.maxAge /= 1000;\n  }\n\n  res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(name, String(checkValue), options));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2Nvb2tpZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHTyxNQUFNQyxTQUFTLEdBQUcsQ0FDdkJDLEdBRHVCLEVBRXZCQyxJQUZ1QixFQUd2QkMsS0FIdUIsRUFJdkJDLE9BQStCLEdBQUcsRUFKWCxLQUtwQjtBQUNILFFBQU1DLFVBQVUsR0FBRyxPQUFPRixLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLE9BQU9HLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixLQUFmLENBQW5DLEdBQTJESyxNQUFNLENBQUNMLEtBQUQsQ0FBcEY7O0FBQ0EsTUFBSSxZQUFZQyxPQUFoQixFQUF5QjtBQUN2QkEsSUFBQUEsT0FBTyxDQUFDSyxPQUFSLEdBQWtCLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEtBQWFQLE9BQU8sQ0FBQ1EsTUFBOUIsQ0FBbEI7QUFDQVIsSUFBQUEsT0FBTyxDQUFDUSxNQUFSLElBQW1CLElBQW5CO0FBQ0Q7O0FBRURYLEVBQUFBLEdBQUcsQ0FBQ1ksU0FBSixDQUFjLFlBQWQsRUFBNEJkLGlEQUFTLENBQUNHLElBQUQsRUFBT00sTUFBTSxDQUFDSCxVQUFELENBQWIsRUFBMkJELE9BQTNCLENBQXJDO0FBQ0QsQ0FiTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NpbmVtYS1vcmRlci8uL3V0aWwvY29va2llcy50cz8wOGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VyaWFsaXplLCBDb29raWVTZXJpYWxpemVPcHRpb25zfSBmcm9tIFwiY29va2llXCJcbmltcG9ydCB7TmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiXG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuICBuYW1lOiBzdHJpbmcsXG4gIHZhbHVlOiB1bmtub3duLFxuICBvcHRpb25zOiBDb29raWVTZXJpYWxpemVPcHRpb25zID0ge31cbikgPT4ge1xuICBjb25zdCBjaGVja1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJqOlwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogU3RyaW5nKHZhbHVlKVxuICBpZiAoXCJtYXhBZ2VcIiBpbiBvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG9wdGlvbnMubWF4QWdlISlcbiAgICBvcHRpb25zLm1heEFnZSEgLz0gMTAwMFxuICB9XG5cbiAgcmVzLnNldEhlYWRlcihcIlNldC1Db29raWVcIiwgc2VyaWFsaXplKG5hbWUsIFN0cmluZyhjaGVja1ZhbHVlKSwgb3B0aW9ucykpXG59XG4iXSwibmFtZXMiOlsic2VyaWFsaXplIiwic2V0Q29va2llIiwicmVzIiwibmFtZSIsInZhbHVlIiwib3B0aW9ucyIsImNoZWNrVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJtYXhBZ2UiLCJzZXRIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/cookies.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-scalars");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "nexus":
/*!************************!*\
  !*** external "nexus" ***!
  \************************/
/***/ ((module) => {

module.exports = require("nexus");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.ts"));
module.exports = __webpack_exports__;

})();