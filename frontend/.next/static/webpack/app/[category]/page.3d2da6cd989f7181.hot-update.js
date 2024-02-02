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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.module.css */ \"(app-pages-browser)/./components/product/products.module.css\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_products_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    let newPathname = pathname.replace(/-/g, \" \").replace(/and/g, \"&\");\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (newPathname === \"/\") newPathname = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product\".concat(newPathname));\n                const data = await response.json();\n                console.log(data);\n                setProducts(data);\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().products),\n        children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().product),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"\",\n                        alt: \"Image\",\n                        width: 240,\n                        height: 190\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\".concat(product.categoryId.name, \"/\").concat(product.name),\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            \"$\",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buy),\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().favorite),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    src: \"/item_favorite.svg\",\n                                                    alt: \"Add to favorite\",\n                                                    width: 25,\n                                                    height: 22\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"/WtzIT7rqacezq53ViZPsaX86fg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBQ0Y7QUFDNEI7QUFDYjtBQWE3QixTQUFTTzs7SUFDdEIsTUFBTUMsV0FBV0wsNERBQVdBO0lBQzVCLElBQUlNLGNBQWNELFNBQVNFLE9BQU8sQ0FBQyxNQUFNLEtBQUtBLE9BQU8sQ0FBQyxRQUFRO0lBQzlELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQVksRUFBRTtJQUN0RSxNQUFNUyxTQUFTWCwwREFBU0E7SUFFeEIsSUFBSUssZ0JBQWdCLEtBQUtBLGNBQWM7SUFFdkNKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQ0FBZ0QsT0FBWlQ7Z0JBQ2pFLE1BQU1VLE9BQWtCLE1BQU1GLFNBQVNHLElBQUk7Z0JBRTNDQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaUCxZQUFZTztZQUNkLEVBQUUsT0FBT0ksT0FBWTtnQkFDbkIsTUFBTSxJQUFJQyxNQUFNRDtZQUNsQjtRQUNGO1FBQ0FQO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVcxQixzRUFBZTtrQkFDNUJXLFNBQVNnQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDSjtnQkFBSUMsV0FBVzFCLHFFQUFjOztrQ0FDNUIsOERBQUNDLGtEQUFLQTt3QkFBQzZCLEtBQUk7d0JBQUdDLEtBQUk7d0JBQVFDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDOUMsOERBQUNSO3dCQUFJQyxXQUFXMUIsa0VBQVc7OzBDQUMzQiw4REFBQ0UsaURBQUlBO2dDQUFDaUMsTUFBTSxJQUErQlAsT0FBM0JBLFFBQVFRLFVBQVUsQ0FBQ0MsSUFBSSxFQUFDLEtBQWdCLE9BQWJULFFBQVFTLElBQUk7Z0NBQUlYLFdBQVcxQixrRUFBVzswQ0FBRzRCLFFBQVFTLElBQUk7Ozs7OzswQ0FDOUYsOERBQUNDO2dDQUFLWixXQUFXMUIsb0VBQWE7O2tEQUM1Qiw4REFBQ3dDOzs0Q0FBRzs0Q0FBRVosUUFBUWEsS0FBSzs7Ozs7OztrREFDbkIsOERBQUNIO3dDQUFLWixXQUFXMUIscUVBQWM7OzBEQUM3Qiw4REFBQzJDO2dEQUFPakIsV0FBVzFCLGlFQUFVOzBEQUFFOzs7Ozs7MERBQy9CLDhEQUFDMkM7Z0RBQU9qQixXQUFXMUIsc0VBQWU7MERBQ2hDLDRFQUFDQyxrREFBS0E7b0RBQ0o2QixLQUFJO29EQUNKQyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiaUJKOzs7Ozs7Ozs7O0FBdUI3QztHQWxEd0J0Qjs7UUFDTEosd0RBQVdBO1FBSWJDLHNEQUFTQTs7O0tBTEZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeD85NTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgdHlwZSBQcm9kdWN0ID0ge1xuICBpZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHByaWNlOiBudW1iZXIsXG4gIGNhdGVnb3J5SWQ6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgbGV0IG5ld1BhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvLS9nLCAnICcpLnJlcGxhY2UoL2FuZC9nLCAnJicpO1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgaWYgKG5ld1BhdGhuYW1lID09PSBcIi9cIikgbmV3UGF0aG5hbWUgPSBcIlwiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0JHtuZXdQYXRobmFtZX1gKTtcbiAgICAgICAgY29uc3QgZGF0YTogUHJvZHVjdFtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c30+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJcIiBhbHQ9XCJJbWFnZVwiIHdpZHRoPXsyNDB9IGhlaWdodD17MTkwfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb2R1Y3QuY2F0ZWdvcnlJZC5uYW1lfS8ke3Byb2R1Y3QubmFtZX1gfSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XG4gICAgICAgICAgICAgIDxoND4ke3Byb2R1Y3QucHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXl9PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGV9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pdGVtX2Zhdm9yaXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFkZCB0byBmYXZvcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdHMiLCJwYXRobmFtZSIsIm5ld1BhdGhuYW1lIiwicmVwbGFjZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsInJvdXRlciIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdCIsImluZGV4Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0IiwiaHJlZiIsImNhdGVnb3J5SWQiLCJuYW1lIiwic3BhbiIsImJvdHRvbSIsImg0IiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwiYnV5IiwiZmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/product.tsx\n"));

/***/ })

});