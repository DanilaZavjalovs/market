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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.module.css */ \"(app-pages-browser)/./app/[category]/[product]/product.module.css\");\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [selectedProduct, setSelectedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pathnameParts = pathname.split(\"/\");\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product/\".concat(pathnameParts[1]));\n                const data = await response.json();\n                const product = data.find((item)=>item.id.includes(pathnameParts[2]));\n                setSelectedProduct(product);\n                console.log(selectedProduct);\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left__side)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right__side),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__top),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: \"Product name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().seller),\n                                        children: \"Device shop\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                                        children: \"$50\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add__button),\n                                                children: \"Add to cart\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().fav__button),\n                                                children: \"Favorite\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().id),\n                                        children: \"Id: 3123213123\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Product Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description__text),\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"mBZTBmejDsj32PgpiBsLYKtbmvw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bY2F0ZWdvcnldL1twcm9kdWN0XS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDVDtBQUNJO0FBRS9CLFNBQVNLOztJQUV0QixNQUFNQyxXQUFXRiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDRyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGdCQUFnQkgsU0FBU0ksS0FBSyxDQUFDO1FBRXJDLE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQXNELE9BQWpCSixhQUFhLENBQUMsRUFBRTtnQkFDbEYsTUFBTUssT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUVoQyxNQUFNQyxVQUFVRixLQUFLRyxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDWCxhQUFhLENBQUMsRUFBRTtnQkFFbkVELG1CQUFtQlE7Z0JBQ25CSyxRQUFRQyxHQUFHLENBQUNmO1lBRWQsRUFBRSxPQUFPZ0IsT0FBWTtnQkFDbkIsTUFBTSxJQUFJQyxNQUFNRDtZQUNsQjtRQUNGO1FBQ0FaO0lBR0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQUtDLFdBQVd2QixpRUFBVzs7MEJBQzFCLDhEQUFDd0I7Z0JBQUlELFdBQVd2Qix1RUFBaUI7Ozs7OzswQkFHakMsOERBQUN3QjtnQkFBSUQsV0FBV3ZCLHdFQUFrQjs7a0NBQ2hDLDhEQUFDd0I7d0JBQUlELFdBQVd2QixrRUFBWTs7MENBQzFCLDhEQUFDNEI7Z0NBQUtMLFdBQVd2Qix1RUFBaUI7O2tEQUNoQyw4REFBQzhCO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFFUixXQUFXdkIsbUVBQWE7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FFL0IsOERBQUM0QjtnQ0FBS0wsV0FBV3ZCLDBFQUFvQjs7a0RBQ25DLDhEQUFDNEI7d0NBQUtMLFdBQVd2QixrRUFBWTtrREFBRTs7Ozs7O2tEQUMvQiw4REFBQ3dCO3dDQUFJRCxXQUFXdkIsb0VBQWM7OzBEQUM1Qiw4REFBQ29DO2dEQUFPQyxNQUFLO2dEQUFTZCxXQUFXdkIsd0VBQWtCOzBEQUFFOzs7Ozs7MERBQ3JELDhEQUFDb0M7Z0RBQU9DLE1BQUs7Z0RBQVNkLFdBQVd2Qix3RUFBa0I7MERBQUU7Ozs7Ozs7Ozs7OztrREFFdkQsOERBQUMrQjt3Q0FBRVIsV0FBV3ZCLCtEQUFTO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzdCLDhEQUFDd0I7d0JBQUlELFdBQVd2Qix3RUFBa0I7OzBDQUNoQyw4REFBQzhCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFFUixXQUFXdkIsOEVBQXdCOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQ7R0F0RHdCRTs7UUFFTEQsd0RBQVdBOzs7S0FGTkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tjYXRlZ29yeV0vW3Byb2R1Y3RdL3BhZ2UudHN4P2Q0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3QsIHNldFNlbGVjdGVkUHJvZHVjdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0LyR7cGF0aG5hbWVQYXJ0c1sxXX1gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5pZC5pbmNsdWRlcyhwYXRobmFtZVBhcnRzWzJdKSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9kdWN0KHByb2R1Y3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3QpXG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcblxuXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRfX3NpZGV9PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRfX3NpZGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fdG9wfT5cbiAgICAgICAgICAgIDxoND5Qcm9kdWN0IG5hbWU8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsbGVyfT5EZXZpY2Ugc2hvcDwvcD5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX2JvdHRvbX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JDUwPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX19idXR0b259PkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmZhdl9fYnV0dG9ufT5GYXZvcml0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pZH0+SWQ6IDMxMjMyMTMxMjM8L3A+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGg0PlByb2R1Y3QgRGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uX190ZXh0fT5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICkgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVBhdGhuYW1lIiwiUGFnZSIsInBhdGhuYW1lIiwic2VsZWN0ZWRQcm9kdWN0Iiwic2V0U2VsZWN0ZWRQcm9kdWN0IiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxlZnRfX3NpZGUiLCJyaWdodF9fc2lkZSIsInRpdGxlIiwic3BhbiIsInRpdGxlX190b3AiLCJoNCIsInAiLCJzZWxsZXIiLCJ0aXRsZV9fYm90dG9tIiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwidHlwZSIsImFkZF9fYnV0dG9uIiwiZmF2X19idXR0b24iLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uX190ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[category]/[product]/page.tsx\n"));

/***/ })

});