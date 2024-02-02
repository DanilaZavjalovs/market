"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/product/product.tsx":
/*!****************************************!*\
  !*** ./components/product/product.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.module.css */ \"(app-pages-browser)/./components/product/products.module.css\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_products_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    let newPathname = pathname.replace(/-/g, \" \").replace(/and/g, \"&\");\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    // Если мы переходим на главную, у нас отображается весь список товаров (особенности бека)\n    if (newPathname === \"/\") newPathname = \"\";\n    // Получение списка товаров после открытия страницы\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product\".concat(newPathname));\n                const data = await response.json();\n                console.log(data);\n                setProducts(data);\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().products),\n        children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().product),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"\",\n                        alt: \"Image\",\n                        width: 240,\n                        height: 190\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\".concat(product.categoryId.name, \"/\").concat(product.name),\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            \"$\",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buy),\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().favorite),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    src: \"/item_favorite.svg\",\n                                                    alt: \"Add to favorite\",\n                                                    width: 25,\n                                                    height: 22\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"rUAggqwEpjE30tgynBHF2S7b11o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBQ0Y7QUFDNkM7QUFDOUI7QUFhN0IsU0FBU007O0lBQ3RCLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixJQUFJSyxjQUFjRCxTQUFTRSxPQUFPLENBQUMsTUFBTSxLQUFLQSxPQUFPLENBQUMsUUFBUTtJQUM5RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVksRUFBRTtJQUV0RCwwRkFBMEY7SUFFMUYsSUFBSUcsZ0JBQWdCLEtBQUtBLGNBQWM7SUFFdkMsbURBQW1EO0lBRW5ESixnREFBU0EsQ0FBQztRQUNSLE1BQU1RLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0NBQWdELE9BQVpOO2dCQUNqRSxNQUFNTyxPQUFrQixNQUFNRixTQUFTRyxJQUFJO2dCQUUzQ0MsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWkosWUFBWUk7WUFDZCxFQUFFLE9BQU9JLE9BQVk7Z0JBQ25CLE1BQU0sSUFBSUMsTUFBTUQ7WUFDbEI7UUFDRjtRQUNBUDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXdEIsc0VBQWU7a0JBQzVCVSxTQUFTYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDSjtnQkFBSUMsV0FBV3RCLHFFQUFjOztrQ0FDNUIsOERBQUNDLGtEQUFLQTt3QkFBQ3lCLEtBQUk7d0JBQUdDLEtBQUk7d0JBQVFDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDOUMsOERBQUNSO3dCQUFJQyxXQUFXdEIsa0VBQVc7OzBDQUMzQiw4REFBQ0UsaURBQUlBO2dDQUFDNkIsTUFBTSxJQUErQlAsT0FBM0JBLFFBQVFRLFVBQVUsQ0FBQ0MsSUFBSSxFQUFDLEtBQWdCLE9BQWJULFFBQVFTLElBQUk7Z0NBQUlYLFdBQVd0QixrRUFBVzswQ0FBR3dCLFFBQVFTLElBQUk7Ozs7OzswQ0FDOUYsOERBQUNDO2dDQUFLWixXQUFXdEIsb0VBQWE7O2tEQUM1Qiw4REFBQ29DOzs0Q0FBRzs0Q0FBRVosUUFBUWEsS0FBSzs7Ozs7OztrREFDbkIsOERBQUNIO3dDQUFLWixXQUFXdEIscUVBQWM7OzBEQUM3Qiw4REFBQ3VDO2dEQUFPakIsV0FBV3RCLGlFQUFVOzBEQUFFOzs7Ozs7MERBQy9CLDhEQUFDdUM7Z0RBQU9qQixXQUFXdEIsc0VBQWU7MERBQ2hDLDRFQUFDQyxrREFBS0E7b0RBQ0p5QixLQUFJO29EQUNKQyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiaUJKOzs7Ozs7Ozs7O0FBdUI3QztHQXBEd0JuQjs7UUFDTEgsd0RBQVdBOzs7S0FETkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QudHN4Pzk1NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0cy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHtcbiAgaWQ6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICBwcmljZTogbnVtYmVyLFxuICBjYXRlZ29yeUlkOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGxldCBuZXdQYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoLy0vZywgJyAnKS5yZXBsYWNlKC9hbmQvZywgJyYnKTtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcblxuICAvLyDQldGB0LvQuCDQvNGLINC/0LXRgNC10YXQvtC00LjQvCDQvdCwINCz0LvQsNCy0L3Rg9GOLCDRgyDQvdCw0YEg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINCy0LXRgdGMINGB0L/QuNGB0L7QuiDRgtC+0LLQsNGA0L7QsiAo0L7RgdC+0LHQtdC90L3QvtGB0YLQuCDQsdC10LrQsClcblxuICBpZiAobmV3UGF0aG5hbWUgPT09IFwiL1wiKSBuZXdQYXRobmFtZSA9IFwiXCI7XG5cbiAgLy8g0J/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDRgtC+0LLQsNGA0L7QsiDQv9C+0YHQu9C1INC+0YLQutGA0YvRgtC40Y8g0YHRgtGA0LDQvdC40YbRi1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0JHtuZXdQYXRobmFtZX1gKTtcbiAgICAgICAgY29uc3QgZGF0YTogUHJvZHVjdFtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c30+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJcIiBhbHQ9XCJJbWFnZVwiIHdpZHRoPXsyNDB9IGhlaWdodD17MTkwfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb2R1Y3QuY2F0ZWdvcnlJZC5uYW1lfS8ke3Byb2R1Y3QubmFtZX1gfSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XG4gICAgICAgICAgICAgIDxoND4ke3Byb2R1Y3QucHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXl9PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGV9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pdGVtX2Zhdm9yaXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFkZCB0byBmYXZvcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdHMiLCJwYXRobmFtZSIsIm5ld1BhdGhuYW1lIiwicmVwbGFjZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImhyZWYiLCJjYXRlZ29yeUlkIiwibmFtZSIsInNwYW4iLCJib3R0b20iLCJoNCIsInByaWNlIiwiYnV0dG9ucyIsImJ1dHRvbiIsImJ1eSIsImZhdm9yaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/product.tsx\n"));

/***/ })

});