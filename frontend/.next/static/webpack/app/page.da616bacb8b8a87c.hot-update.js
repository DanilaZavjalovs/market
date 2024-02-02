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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.module.css */ \"(app-pages-browser)/./components/product/products.module.css\");\n/* harmony import */ var _products_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_products_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    let newPathname = pathname.replace(/-/g, \" \").replace(/and/g, \"&\");\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (newPathname === \"/\") newPathname = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/product\".concat(newPathname));\n                const data = await response.json();\n                console.log(data);\n                setProducts(data);\n            } catch (error) {\n                throw new Error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Получаем параметр поиска из URL\n        const searchQuery = router.query.query;\n        // Если есть параметр поиска, фильтруем массив продуктов\n        if (searchQuery) {\n            setFilteredProducts(products.filter((product)=>product.name.includes(searchQuery)));\n        } else {\n            setFilteredProducts(products);\n        }\n    }, [\n        router.query,\n        products\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().products),\n        children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().product),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"\",\n                        alt: \"Image\",\n                        width: 240,\n                        height: 190\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\".concat(product.categoryId.name, \"/\").concat(product.name),\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: [\n                                            \"$\",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().buy),\n                                                children: \"Buy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_products_module_css__WEBPACK_IMPORTED_MODULE_5___default().favorite),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    src: \"/item_favorite.svg\",\n                                                    alt: \"Add to favorite\",\n                                                    width: 25,\n                                                    height: 22\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d1zz\\\\Desktop\\\\market\\\\frontend\\\\components\\\\product\\\\product.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"yQn0cmvT5PsZyn7JT7DWq9LRJPE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBQ0Y7QUFDNEI7QUFDYjtBQWE3QixTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV0osNERBQVdBO0lBQzVCLElBQUlLLGNBQWNELFNBQVNFLE9BQU8sQ0FBQyxNQUFNLEtBQUtBLE9BQU8sQ0FBQyxRQUFRO0lBQzlELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQVksRUFBRTtJQUV0RSxJQUFJRyxnQkFBZ0IsS0FBS0EsY0FBYztJQUV2Q0osZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG9DQUFnRCxPQUFaUjtnQkFDakUsTUFBTVMsT0FBa0IsTUFBTUYsU0FBU0csSUFBSTtnQkFFM0NDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBQ1pOLFlBQVlNO1lBQ2QsRUFBRSxPQUFPSSxPQUFZO2dCQUNuQixNQUFNLElBQUlDLE1BQU1EO1lBQ2xCO1FBQ0Y7UUFDQVA7SUFDRixHQUFHLEVBQUU7SUFFTFYsZ0RBQVNBLENBQUM7UUFDUixrQ0FBa0M7UUFDbEMsTUFBTW1CLGNBQWNDLE9BQU9DLEtBQUssQ0FBQ0EsS0FBSztRQUV0Qyx3REFBd0Q7UUFDeEQsSUFBSUYsYUFBYTtZQUNmVixvQkFBb0JILFNBQVNnQixNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDTjtRQUN2RSxPQUFPO1lBQ0xWLG9CQUFvQkg7UUFDdEI7SUFDRixHQUFHO1FBQUNjLE9BQU9DLEtBQUs7UUFBRWY7S0FBUztJQUUzQixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVcvQixzRUFBZTtrQkFDNUJVLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0wsU0FBU00sc0JBQ3RCLDhEQUFDSDtnQkFBSUMsV0FBVy9CLHFFQUFjOztrQ0FDNUIsOERBQUNDLGtEQUFLQTt3QkFBQ2lDLEtBQUk7d0JBQUdDLEtBQUk7d0JBQVFDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDOUMsOERBQUNQO3dCQUFJQyxXQUFXL0Isa0VBQVc7OzBDQUMzQiw4REFBQ0UsaURBQUlBO2dDQUFDcUMsTUFBTSxJQUErQlosT0FBM0JBLFFBQVFhLFVBQVUsQ0FBQ1osSUFBSSxFQUFDLEtBQWdCLE9BQWJELFFBQVFDLElBQUk7Z0NBQUlHLFdBQVcvQixrRUFBVzswQ0FBRzJCLFFBQVFDLElBQUk7Ozs7OzswQ0FDOUYsOERBQUNhO2dDQUFLVixXQUFXL0Isb0VBQWE7O2tEQUM1Qiw4REFBQzJDOzs0Q0FBRzs0Q0FBRWhCLFFBQVFpQixLQUFLOzs7Ozs7O2tEQUNuQiw4REFBQ0g7d0NBQUtWLFdBQVcvQixxRUFBYzs7MERBQzdCLDhEQUFDOEM7Z0RBQU9mLFdBQVcvQixpRUFBVTswREFBRTs7Ozs7OzBEQUMvQiw4REFBQzhDO2dEQUFPZixXQUFXL0Isc0VBQWU7MERBQ2hDLDRFQUFDQyxrREFBS0E7b0RBQ0ppQyxLQUFJO29EQUNKQyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiaUJKOzs7Ozs7Ozs7O0FBdUI3QztHQTdEd0IzQjs7UUFDTEgsd0RBQVdBOzs7S0FETkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QudHN4Pzk1NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0cy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIGlkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgcHJpY2U6IG51bWJlcixcbiAgY2F0ZWdvcnlJZDoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBsZXQgbmV3UGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC8tL2csICcgJykucmVwbGFjZSgvYW5kL2csICcmJyk7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuXG4gIGlmIChuZXdQYXRobmFtZSA9PT0gXCIvXCIpIG5ld1BhdGhuYW1lID0gXCJcIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvZHVjdCR7bmV3UGF0aG5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGE6IFByb2R1Y3RbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QsNGA0LDQvNC10YLRgCDQv9C+0LjRgdC60LAg0LjQtyBVUkxcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHJvdXRlci5xdWVyeS5xdWVyeTtcblxuICAgIC8vINCV0YHQu9C4INC10YHRgtGMINC/0LDRgNCw0LzQtdGC0YAg0L/QvtC40YHQutCwLCDRhNC40LvRjNGC0YDRg9C10Lwg0LzQsNGB0YHQuNCyINC/0YDQvtC00YPQutGC0L7QslxuICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0Lm5hbWUuaW5jbHVkZXMoc2VhcmNoUXVlcnkpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeSwgcHJvZHVjdHNdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c30+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCJcIiBhbHQ9XCJJbWFnZVwiIHdpZHRoPXsyNDB9IGhlaWdodD17MTkwfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb2R1Y3QuY2F0ZWdvcnlJZC5uYW1lfS8ke3Byb2R1Y3QubmFtZX1gfSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XG4gICAgICAgICAgICAgIDxoND4ke3Byb2R1Y3QucHJpY2V9PC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXl9PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGV9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pdGVtX2Zhdm9yaXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFkZCB0byBmYXZvcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdHMiLCJwYXRobmFtZSIsIm5ld1BhdGhuYW1lIiwicmVwbGFjZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwic2VhcmNoUXVlcnkiLCJyb3V0ZXIiLCJxdWVyeSIsImZpbHRlciIsInByb2R1Y3QiLCJuYW1lIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImhyZWYiLCJjYXRlZ29yeUlkIiwic3BhbiIsImJvdHRvbSIsImg0IiwicHJpY2UiLCJidXR0b25zIiwiYnV0dG9uIiwiYnV5IiwiZmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/product.tsx\n"));

/***/ })

});