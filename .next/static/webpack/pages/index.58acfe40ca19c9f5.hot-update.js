"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavBar/NavBarPages.tsx":
/*!***********************************************!*\
  !*** ./src/components/NavBar/NavBarPages.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NavBtn = (param)=>{\n    let { id  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>{\n            let element = document.getElementById(id);\n            element && element.scrollIntoView({\n                behavior: \"smooth\",\n                block: \"start\"\n            });\n            window.history.replaceState(null, \"\", \"#\" + id);\n        },\n        className: \"text-gray-800 font-bold rounded-lg\",\n        children: id.toUpperCase()\n    }, void 0, false, {\n        fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined);\n};\n_c = NavBtn;\nconst NavBarPages = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBtn, {\n                    id: \"feed\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBtn, {\n                    id: \"about\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBtn, {\n                    id: \"skills\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBtn, {\n                    id: \"experience\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBtn, {\n                    id: \"projects\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://blog.gustavosilveira.codes\",\n                    className: \"text-gray-800 font-bold rounded-lg\",\n                    children: \"BLOG\"\n                }, void 0, false, {\n                    fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/gustavo/Documents/xp/src/components/NavBar/NavBarPages.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = NavBarPages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBarPages);\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBtn\");\n$RefreshReg$(_c1, \"NavBarPages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyUGFnZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLFNBQVk7UUFBWCxFQUFFQyxHQUFFLEVBQUU7SUFDbEIscUJBQ0ksOERBQUNDO1FBQ0dDLFNBQVMsSUFBTTtZQUNYLElBQUlDLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQ0w7WUFDdENHLFdBQVdBLFFBQVFHLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtnQkFBVUMsT0FBTztZQUFRO1lBQ3ZFQyxPQUFPQyxPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSyxNQUFNWDtRQUNqRDtRQUNBWSxXQUFVO2tCQUVUWixHQUFHYSxXQUFXOzs7Ozs7QUFHM0I7S0FiTWQ7QUFlTixNQUFNZSxjQUFjLElBQU07SUFDdEIscUJBQ0k7OzBCQUNJLDhEQUFDQzswQkFDRyw0RUFBQ2hCO29CQUFPQyxJQUFHOzs7Ozs7Ozs7OzswQkFFZiw4REFBQ2U7MEJBQ0csNEVBQUNoQjtvQkFBT0MsSUFBRzs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNlOzBCQUNHLDRFQUFDaEI7b0JBQU9DLElBQUc7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDZTswQkFDRyw0RUFBQ2hCO29CQUFPQyxJQUFHOzs7Ozs7Ozs7OzswQkFFZiw4REFBQ2U7MEJBQ0csNEVBQUNoQjtvQkFBT0MsSUFBRzs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNlOzBCQUNHLDRFQUFDQztvQkFBRUMsTUFBSztvQkFBcUNMLFdBQVU7OEJBQXFDOzs7Ozs7Ozs7Ozs7O0FBSTVHO01BdkJNRTtBQXlCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyUGFnZXMudHN4P2ZhYjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmF2QnRuID0gKHsgaWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50ICYmIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsICgnIycgKyBpZCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZm9udC1ib2xkIHJvdW5kZWQtbGdcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7aWQudG9VcHBlckNhc2UoKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuY29uc3QgTmF2QmFyUGFnZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2QnRuIGlkPSdmZWVkJz48L05hdkJ0bj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkJ0biBpZD0nYWJvdXQnPjwvTmF2QnRuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2QnRuIGlkPSdza2lsbHMnPjwvTmF2QnRuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2QnRuIGlkPSdleHBlcmllbmNlJz48L05hdkJ0bj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkJ0biBpZD0ncHJvamVjdHMnPjwvTmF2QnRuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ibG9nLmd1c3Rhdm9zaWx2ZWlyYS5jb2Rlc1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZm9udC1ib2xkIHJvdW5kZWQtbGdcIj5CTE9HPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyUGFnZXM7Il0sIm5hbWVzIjpbIk5hdkJ0biIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwid2luZG93IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImNsYXNzTmFtZSIsInRvVXBwZXJDYXNlIiwiTmF2QmFyUGFnZXMiLCJsaSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar/NavBarPages.tsx\n"));

/***/ })

});