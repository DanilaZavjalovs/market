"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[category]/[product]/page",{

/***/ "(app-pages-browser)/./app/[category]/[product]/page.tsx":
/*!*******************************************!*\
  !*** ./app/[category]/[product]/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.module.css */ \"(app-pages-browser)/./app/[category]/[product]/product.module.css\");\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [selectedProduct, setSelectedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pathnameParts = pathname.split(\"/\");\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product/\".concat(pathnameParts[1]));\n                const data = await response.json();\n                const product = data.find((item)=>item.id.includes(pathnameParts[2]));\n                if (product) {\n                    setSelectedProduct(product);\n                    console.log(selectedProduct);\n                }\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left__side)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right__side),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__top),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: \"Product name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().seller),\n                                        children: \"Device shop\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                                        children: \"$\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add__button),\n                                                children: \"Add to cart\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().fav__button),\n                                                children: \"Favorite\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().id),\n                                        children: \"Id: 3123213123\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Product Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description__text),\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"mBZTBmejDsj32PgpiBsLYKtbmvw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bY2F0ZWdvcnldL1twcm9kdWN0XS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDVDtBQUNJO0FBRS9CLFNBQVNLOztJQUV0QixNQUFNQyxXQUFXRiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDRyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGdCQUFnQkgsU0FBU0ksS0FBSyxDQUFDO1FBRXJDLE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQXNELE9BQWpCSixhQUFhLENBQUMsRUFBRTtnQkFDbEYsTUFBTUssT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUVoQyxNQUFNQyxVQUFVRixLQUFLRyxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDWCxhQUFhLENBQUMsRUFBRTtnQkFFbkUsSUFBSU8sU0FBUztvQkFDWFIsbUJBQW1CUTtvQkFDbkJLLFFBQVFDLEdBQUcsQ0FBQ2Y7Z0JBQ2Q7WUFFRixFQUFFLE9BQU9nQixPQUFZO2dCQUNuQixNQUFNLElBQUlDLE1BQU1EO1lBQ2xCO1FBQ0Y7UUFDQVo7SUFFRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2M7UUFBS0MsV0FBV3ZCLGlFQUFXOzswQkFDMUIsOERBQUN3QjtnQkFBSUQsV0FBV3ZCLHVFQUFpQjs7Ozs7OzBCQUdqQyw4REFBQ3dCO2dCQUFJRCxXQUFXdkIsd0VBQWtCOztrQ0FDaEMsOERBQUN3Qjt3QkFBSUQsV0FBV3ZCLGtFQUFZOzswQ0FDMUIsOERBQUM0QjtnQ0FBS0wsV0FBV3ZCLHVFQUFpQjs7a0RBQ2hDLDhEQUFDOEI7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7d0NBQUVSLFdBQVd2QixtRUFBYTtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUUvQiw4REFBQzRCO2dDQUFLTCxXQUFXdkIsMEVBQW9COztrREFDbkMsOERBQUM0Qjt3Q0FBS0wsV0FBV3ZCLGtFQUFZO2tEQUFFOzs7Ozs7a0RBQy9CLDhEQUFDd0I7d0NBQUlELFdBQVd2QixvRUFBYzs7MERBQzVCLDhEQUFDb0M7Z0RBQU9DLE1BQUs7Z0RBQVNkLFdBQVd2Qix3RUFBa0I7MERBQUU7Ozs7OzswREFDckQsOERBQUNvQztnREFBT0MsTUFBSztnREFBU2QsV0FBV3ZCLHdFQUFrQjswREFBRTs7Ozs7Ozs7Ozs7O2tEQUV2RCw4REFBQytCO3dDQUFFUixXQUFXdkIsK0RBQVM7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHN0IsOERBQUN3Qjt3QkFBSUQsV0FBV3ZCLHdFQUFrQjs7MENBQ2hDLDhEQUFDOEI7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQUVSLFdBQVd2Qiw4RUFBd0I7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQXZEd0JFOztRQUVMRCx3REFBV0E7OztLQUZOQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2NhdGVnb3J5XS9bcHJvZHVjdF0vcGFnZS50c3g/ZDQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdChcIi9cIik7XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb2R1Y3QvJHtwYXRobmFtZVBhcnRzWzFdfWApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkLmluY2x1ZGVzKHBhdGhuYW1lUGFydHNbMl0pKTtcblxuICAgICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkUHJvZHVjdChwcm9kdWN0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3QpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfX3NpZGV9PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfX3NpZGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fdG9wfT5cbiAgICAgICAgICAgIDxoND5Qcm9kdWN0IG5hbWU8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsbGVyfT5EZXZpY2Ugc2hvcDwvcD5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX2JvdHRvbX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JHt9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX19idXR0b259PkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmZhdl9fYnV0dG9ufT5GYXZvcml0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pZH0+SWQ6IDMxMjMyMTMxMjM8L3A+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGg0PlByb2R1Y3QgRGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uX190ZXh0fT5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICkgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVBhdGhuYW1lIiwiUGFnZSIsInBhdGhuYW1lIiwic2VsZWN0ZWRQcm9kdWN0Iiwic2V0U2VsZWN0ZWRQcm9kdWN0IiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxlZnRfX3NpZGUiLCJyaWdodF9fc2lkZSIsInRpdGxlIiwic3BhbiIsInRpdGxlX190b3AiLCJoNCIsInAiLCJzZWxsZXIiLCJ0aXRsZV9fYm90dG9tIiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwidHlwZSIsImFkZF9fYnV0dG9uIiwiZmF2X19idXR0b24iLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uX190ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[category]/[product]/page.tsx\n"));

/***/ })

});