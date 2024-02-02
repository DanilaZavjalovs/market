"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[category]/page",{

/***/ "(app-pages-browser)/./components/product/product.tsx":
/*!****************************************!*\
  !*** ./components/product/product.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.module.css */ \"(app-pages-browser)/./components/product/products.module.css\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_products_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    let newPathname = pathname.replace(/-/g, \" \").replace(/and/g, \"&\");\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(products);\n    // Поиск по товарам\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const search = searchParams.get(\"query\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (search) {\n            setFilteredProducts(products.filter((product)=>product.name.includes(search)));\n        } else {\n            setFilteredProducts(products);\n        }\n    }, [\n        search\n    ]);\n    // Если мы переходим на главную, у нас отображается весь список товаров (особенности бека)\n    if (newPathname === \"/\") newPathname = \"\";\n    // Получение списка товаров после открытия страницы\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product\".concat(newPathname));\n                const data = await response.json();\n                console.log(data);\n                setProducts(data);\n                setFilteredProducts(products);\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().products),\n        children: filteredProducts.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().product),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"\",\n                        alt: \"Image\",\n                        width: 240,\n                        height: 190\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\".concat(product.categoryId.name, \"/\").concat(product.name),\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            \"$\",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buy),\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().favorite),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    src: \"/item_favorite.svg\",\n                                                    alt: \"Add to favorite\",\n                                                    width: 25,\n                                                    height: 22\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"XVx0CCAknjKSCxGwezHBKA2hj9o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBQ0Y7QUFDNkM7QUFDOUI7QUFhN0IsU0FBU087O0lBQ3RCLE1BQU1DLFdBQVdMLDREQUFXQTtJQUM1QixJQUFJTSxjQUFjRCxTQUFTRSxPQUFPLENBQUMsTUFBTSxLQUFLQSxPQUFPLENBQUMsUUFBUTtJQUM5RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNPLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFZSztJQUVwRSxtQkFBbUI7SUFFbkIsTUFBTUksZUFBZVgsZ0VBQWVBO0lBQ3BDLE1BQU1ZLFNBQVNELGFBQWFFLEdBQUcsQ0FBQztJQUVoQ1osZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxRQUFRO1lBQ1ZGLG9CQUFvQkgsU0FBU08sTUFBTSxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0w7UUFDdkUsT0FBTztZQUNMRixvQkFBb0JIO1FBQ3RCO0lBRUYsR0FBRztRQUFDSztLQUFPO0lBRVgsMEZBQTBGO0lBRTFGLElBQUlQLGdCQUFnQixLQUFLQSxjQUFjO0lBRXZDLG1EQUFtRDtJQUVuREosZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQ0FBZ0QsT0FBWmY7Z0JBQ2pFLE1BQU1nQixPQUFrQixNQUFNRixTQUFTRyxJQUFJO2dCQUUzQ0MsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWmIsWUFBWWE7Z0JBQ1pYLG9CQUFvQkg7WUFDdEIsRUFBRSxPQUFPa0IsT0FBWTtnQkFDbkIsTUFBTSxJQUFJQyxNQUFNRDtZQUNsQjtRQUNGO1FBQ0FQO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdoQyxzRUFBZTtrQkFDNUJhLGlCQUFpQm9CLEdBQUcsQ0FBQyxDQUFDZCxTQUFTZSxzQkFDOUIsOERBQUNIO2dCQUFJQyxXQUFXaEMscUVBQWM7O2tDQUM1Qiw4REFBQ0Msa0RBQUtBO3dCQUFDa0MsS0FBSTt3QkFBR0MsS0FBSTt3QkFBUUMsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUM5Qyw4REFBQ1A7d0JBQUlDLFdBQVdoQyxrRUFBVzs7MENBQzNCLDhEQUFDRSxpREFBSUE7Z0NBQUNzQyxNQUFNLElBQStCckIsT0FBM0JBLFFBQVFzQixVQUFVLENBQUNyQixJQUFJLEVBQUMsS0FBZ0IsT0FBYkQsUUFBUUMsSUFBSTtnQ0FBSVksV0FBV2hDLGtFQUFXOzBDQUFHbUIsUUFBUUMsSUFBSTs7Ozs7OzBDQUM5Riw4REFBQ3NCO2dDQUFLVixXQUFXaEMsb0VBQWE7O2tEQUM1Qiw4REFBQzRDOzs0Q0FBRzs0Q0FBRXpCLFFBQVEwQixLQUFLOzs7Ozs7O2tEQUNuQiw4REFBQ0g7d0NBQUtWLFdBQVdoQyxxRUFBYzs7MERBQzdCLDhEQUFDK0M7Z0RBQU9mLFdBQVdoQyxpRUFBVTswREFBRTs7Ozs7OzBEQUMvQiw4REFBQytDO2dEQUFPZixXQUFXaEMsc0VBQWU7MERBQ2hDLDRFQUFDQyxrREFBS0E7b0RBQ0prQyxLQUFJO29EQUNKQyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiaUJKOzs7Ozs7Ozs7O0FBdUI3QztHQXJFd0IzQjs7UUFDTEosd0RBQVdBO1FBT1BDLDREQUFlQTs7O0tBUmRHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeD85NTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIGlkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgcHJpY2U6IG51bWJlcixcbiAgY2F0ZWdvcnlJZDoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBsZXQgbmV3UGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC8tL2csICcgJykucmVwbGFjZSgvYW5kL2csICcmJyk7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4ocHJvZHVjdHMpO1xuXG4gIC8vINCf0L7QuNGB0Log0L/QviDRgtC+0LLQsNGA0LDQvFxuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBzZWFyY2ggPSBzZWFyY2hQYXJhbXMuZ2V0KFwicXVlcnlcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QubmFtZS5pbmNsdWRlcyhzZWFyY2gpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMpO1xuICAgIH1cblxuICB9LCBbc2VhcmNoXSlcblxuICAvLyDQldGB0LvQuCDQvNGLINC/0LXRgNC10YXQvtC00LjQvCDQvdCwINCz0LvQsNCy0L3Rg9GOLCDRgyDQvdCw0YEg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINCy0LXRgdGMINGB0L/QuNGB0L7QuiDRgtC+0LLQsNGA0L7QsiAo0L7RgdC+0LHQtdC90L3QvtGB0YLQuCDQsdC10LrQsClcblxuICBpZiAobmV3UGF0aG5hbWUgPT09IFwiL1wiKSBuZXdQYXRobmFtZSA9IFwiXCI7XG5cbiAgLy8g0J/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDRgtC+0LLQsNGA0L7QsiDQv9C+0YHQu9C1INC+0YLQutGA0YvRgtC40Y8g0YHRgtGA0LDQvdC40YbRi1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0JHtuZXdQYXRobmFtZX1gKTtcbiAgICAgICAgY29uc3QgZGF0YTogUHJvZHVjdFtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSlcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzfT5cbiAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0fSBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiXCIgYWx0PVwiSW1hZ2VcIiB3aWR0aD17MjQwfSBoZWlnaHQ9ezE5MH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9kdWN0LmNhdGVnb3J5SWQubmFtZX0vJHtwcm9kdWN0Lm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3Byb2R1Y3QubmFtZX08L0xpbms+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxuICAgICAgICAgICAgICA8aDQ+JHtwcm9kdWN0LnByaWNlfTwvaDQ+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV5fT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmZhdm9yaXRlfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaXRlbV9mYXZvcml0ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBZGQgdG8gZmF2b3JpdGVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzIiwicGF0aG5hbWUiLCJuZXdQYXRobmFtZSIsInJlcGxhY2UiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwibmFtZSIsImluY2x1ZGVzIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImhyZWYiLCJjYXRlZ29yeUlkIiwic3BhbiIsImJvdHRvbSIsImg0IiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwiYnV5IiwiZmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/product.tsx\n"));

/***/ })

});