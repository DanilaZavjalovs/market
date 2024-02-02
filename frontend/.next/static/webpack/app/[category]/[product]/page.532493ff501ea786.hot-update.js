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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.module.css */ \"(app-pages-browser)/./app/[category]/[product]/product.module.css\");\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [selectedProduct, setSelectedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const pathnameParts = pathname.split(\"/\");\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product/\".concat(pathnameParts[1]));\n                const data = await response.json();\n                const product = data.find((item)=>item.id.includes(pathnameParts[2]));\n                setSelectedProduct({\n                    ...product\n                });\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left__side)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right__side),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__top),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: selectedProduct.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().seller),\n                                        children: \"Device shop\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title__bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                                        children: [\n                                            \"$\",\n                                            selectedProduct.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add__button),\n                                                children: \"Add to cart\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().fav__button),\n                                                children: \"Favorite\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().id),\n                                        children: [\n                                            \"Id: \",\n                                            selectedProduct.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Product Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().description__text),\n                                children: selectedProduct.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\app\\\\[category]\\\\[product]\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"mBZTBmejDsj32PgpiBsLYKtbmvw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bY2F0ZWdvcnldL1twcm9kdWN0XS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDVDtBQUNJO0FBRy9CLFNBQVNLOztJQUV0QixNQUFNQyxXQUFXRiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDRyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBVSxDQUFDO0lBRWpFRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGdCQUFnQkgsU0FBU0ksS0FBSyxDQUFDO1FBRXJDLE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQXNELE9BQWpCSixhQUFhLENBQUMsRUFBRTtnQkFDbEYsTUFBTUssT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUVoQyxNQUFNQyxVQUFtQkYsS0FBS0csSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLENBQUNDLFFBQVEsQ0FBQ1gsYUFBYSxDQUFDLEVBQUU7Z0JBRTVFRCxtQkFBbUI7b0JBQUUsR0FBR1EsT0FBTztnQkFBQztZQUVsQyxFQUFFLE9BQU9LLE9BQVk7Z0JBQ25CLE1BQU0sSUFBSUMsTUFBTUQ7WUFDbEI7UUFDRjtRQUNBVjtJQUVGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWTtRQUFLQyxXQUFXckIsaUVBQVc7OzBCQUMxQiw4REFBQ3NCO2dCQUFJRCxXQUFXckIsdUVBQWlCOzs7Ozs7MEJBR2pDLDhEQUFDc0I7Z0JBQUlELFdBQVdyQix3RUFBa0I7O2tDQUNoQyw4REFBQ3NCO3dCQUFJRCxXQUFXckIsa0VBQVk7OzBDQUMxQiw4REFBQzBCO2dDQUFLTCxXQUFXckIsdUVBQWlCOztrREFDaEMsOERBQUM0QjtrREFBSXhCLGdCQUFnQnlCLElBQUk7Ozs7OztrREFDekIsOERBQUNDO3dDQUFFVCxXQUFXckIsbUVBQWE7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FFL0IsOERBQUMwQjtnQ0FBS0wsV0FBV3JCLDBFQUFvQjs7a0RBQ25DLDhEQUFDMEI7d0NBQUtMLFdBQVdyQixrRUFBWTs7NENBQUU7NENBQUVJLGdCQUFnQjZCLEtBQUs7Ozs7Ozs7a0RBQ3RELDhEQUFDWDt3Q0FBSUQsV0FBV3JCLG9FQUFjOzswREFDNUIsOERBQUNtQztnREFBT0MsTUFBSztnREFBU2YsV0FBV3JCLHdFQUFrQjswREFBRTs7Ozs7OzBEQUNyRCw4REFBQ21DO2dEQUFPQyxNQUFLO2dEQUFTZixXQUFXckIsd0VBQWtCOzBEQUFFOzs7Ozs7Ozs7Ozs7a0RBRXZELDhEQUFDOEI7d0NBQUVULFdBQVdyQiwrREFBUzs7NENBQUU7NENBQUtJLGdCQUFnQlksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHcEQsOERBQUNNO3dCQUFJRCxXQUFXckIsd0VBQWtCOzswQ0FDaEMsOERBQUM0QjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDRTtnQ0FBRVQsV0FBV3JCLDhFQUF3QjswQ0FBR0ksZ0JBQWdCbUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlFO0dBcER3QnJDOztRQUVMRCx3REFBV0E7OztLQUZOQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2NhdGVnb3J5XS9bcHJvZHVjdF0vcGFnZS50c3g/ZDQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGU8UHJvZHVjdD4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvZHVjdC8ke3BhdGhuYW1lUGFydHNbMV19YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdDogUHJvZHVjdCA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQuaW5jbHVkZXMocGF0aG5hbWVQYXJ0c1syXSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkUHJvZHVjdCh7IC4uLnByb2R1Y3QgfSk7XG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X19zaWRlfT5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0X19zaWRlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX3RvcH0+XG4gICAgICAgICAgICA8aDQ+e3NlbGVjdGVkUHJvZHVjdC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWxsZXJ9PkRldmljZSBzaG9wPC9wPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fYm90dG9tfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ke3NlbGVjdGVkUHJvZHVjdC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfX2J1dHRvbn0+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmF2X19idXR0b259PkZhdm9yaXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlkfT5JZDoge3NlbGVjdGVkUHJvZHVjdC5pZH08L3A+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGg0PlByb2R1Y3QgRGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uX190ZXh0fT57c2VsZWN0ZWRQcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICkgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVBhdGhuYW1lIiwiUGFnZSIsInBhdGhuYW1lIiwic2VsZWN0ZWRQcm9kdWN0Iiwic2V0U2VsZWN0ZWRQcm9kdWN0IiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJpbmNsdWRlcyIsImVycm9yIiwiRXJyb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVmdF9fc2lkZSIsInJpZ2h0X19zaWRlIiwidGl0bGUiLCJzcGFuIiwidGl0bGVfX3RvcCIsImg0IiwibmFtZSIsInAiLCJzZWxsZXIiLCJ0aXRsZV9fYm90dG9tIiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwidHlwZSIsImFkZF9fYnV0dG9uIiwiZmF2X19idXR0b24iLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uX190ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[category]/[product]/page.tsx\n"));

/***/ })

});