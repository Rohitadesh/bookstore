"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fiction",{

/***/ "./src/pages/fiction.js":
/*!******************************!*\
  !*** ./src/pages/fiction.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import { send_value } from \"@/components/send\"\n\nconst Fiction = ()=>{\n    var _book_results;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [book, setbook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const get_books = async ()=>{\n            try {\n                let data_storage = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=gHcDNMtPecx1lAljsW3014jTqobTAjcb\");\n                // let data= await data_storage.json()\n                setbook(data_storage.data);\n            } catch (e) {\n                console.log(e);\n            }\n        };\n        get_books();\n    }, []);\n    // console.log(book.results?.books)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"border border-black h-[86%] w-[100%] flex flex-wrap flex-row gap-4 items-center justify-center overflow-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-1 flex flex-col flex-wrap items-center justify-center  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl italic\",\n                    children: \"Fiction Books\"\n                }, void 0, false, {\n                    fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[120%] w-[90%] grid grid-row-3 grid-cols-5 flex gap-4\",\n                children: (_book_results = book.results) === null || _book_results === void 0 ? void 0 : _book_results.books.map((element, index)=>{\n                    {}\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-black h-[15rem] w-[100%] flex flex-col flex-wrap justify-center items-center rounded-2xl gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \" pl-4 h-[50px] w-full truncate text-md text-black text-center \",\n                                children: element.title\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"pl-6 h-[50px] w-full truncate text-md text-black \",\n                                children: element.author\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-12 border shadow-xl rounded-md\",\n                                onClick: ()=>{\n                                    router.push({\n                                        pathname: \"/bookdetails\",\n                                        query: {\n                                            id: element.primary_isbn10,\n                                            author: element.author,\n                                            images: element.book_image,\n                                            publish: element.publisher,\n                                            titles: element.title,\n                                            amazon: element.amazon_product_url,\n                                            book_height: element.book_image_height,\n                                            book_width: element.book_image_width\n                                        }\n                                    });\n                                },\n                                children: \"view\"\n                            }, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lenovo/Desktop/git/bookstore/src/pages/fiction.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Fiction, \"u719a1eURYGG96xL0/xPr5dOw5I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fiction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fiction);\nvar _c;\n$RefreshReg$(_c, \"Fiction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmljdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0c7QUFDM0MsaURBQWlEO0FBQ3hCO0FBQ3pCLE1BQU1JLFVBQVM7UUEyQkNDOztJQTFCWixNQUFNQyxTQUFPTixzREFBU0E7SUFDdEIsTUFBTSxDQUFDSyxNQUFLRSxRQUFRLEdBQUNMLCtDQUFRQSxDQUFDLEVBQUU7SUFDaENELGdEQUFTQSxDQUFFO1FBQ1AsTUFBTU8sWUFBWTtZQUNkLElBQUc7Z0JBQ0MsSUFBSUMsZUFBZSxNQUFNTixpREFBUyxDQUFDO2dCQUNuQyxzQ0FBc0M7Z0JBQ3RDSSxRQUFRRSxhQUFhRSxJQUFJO1lBQzdCLEVBQ0EsT0FBTUMsR0FBRTtnQkFDSkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQjtRQUNKO1FBQ0FKO0lBQ0osR0FBRSxFQUFFO0lBQ0osbUNBQW1DO0lBQ25DLHFCQUNJLDhEQUFDTztRQUFLQyxXQUFVOzswQkFHaEIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUVYLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBa0I7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ0M7Z0JBQUlELFdBQVU7MkJBRVBYLGdCQUFBQSxLQUFLYyxPQUFPLGNBQVpkLG9DQUFBQSxjQUFjZSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxTQUFRQztvQkFDN0IsQ0FBOEM7b0JBQzlDLHFCQUNJLDhEQUFDTjt3QkFBZ0JELFdBQVU7OzBDQUV2Qiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQWtFTSxRQUFRRSxLQUFLOzs7Ozs7MENBQzdGLDhEQUFDTjtnQ0FBR0YsV0FBVTswQ0FBcURNLFFBQVFHLE1BQU07Ozs7OzswQ0FDakYsOERBQUNDO2dDQUFPVixXQUFVO2dDQUNsQlcsU0FBUztvQ0FDTHJCLE9BQU9zQixJQUFJLENBQ1A7d0NBQ0lDLFVBQVM7d0NBQ1RDLE9BQU07NENBQUNDLElBQUdULFFBQVFVLGNBQWM7NENBQ2hDUCxRQUFPSCxRQUFRRyxNQUFNOzRDQUNyQlEsUUFBT1gsUUFBUVksVUFBVTs0Q0FDekJDLFNBQVFiLFFBQVFjLFNBQVM7NENBQ3pCQyxRQUFPZixRQUFRRSxLQUFLOzRDQUNwQmMsUUFBT2hCLFFBQVFpQixrQkFBa0I7NENBQ2pDQyxhQUFZbEIsUUFBUW1CLGlCQUFpQjs0Q0FDckNDLFlBQVdwQixRQUFRcUIsZ0JBQWdCO3dDQUNuQztvQ0FFSjtnQ0FHUjswQ0FBRzs7Ozs7Ozt1QkF0QkdwQjs7Ozs7Z0JBMkJsQjs7Ozs7Ozs7Ozs7O0FBUWhCO0dBakVNbkI7O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTtBQWtFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmljdGlvbi5qcz8xMzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgeyBzZW5kX3ZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zZW5kXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuY29uc3QgRmljdGlvbj0gKCkgPT57XG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXG4gICAgY29uc3QgW2Jvb2ssc2V0Ym9va109dXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0ICgoKT0+e1xuICAgICAgICBjb25zdCBnZXRfYm9va3MgPSBhc3luYygpPT57XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFfc3RvcmFnZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL2N1cnJlbnQvaGFyZGNvdmVyLWZpY3Rpb24uanNvbj9hcGkta2V5PWdIY0ROTXRQZWN4MWxBbGpzVzMwMTRqVHFvYlRBamNiJylcbiAgICAgICAgICAgICAgICAvLyBsZXQgZGF0YT0gYXdhaXQgZGF0YV9zdG9yYWdlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldGJvb2soZGF0YV9zdG9yYWdlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldF9ib29rcygpO1xuICAgIH0sW10pXG4gICAgLy8gY29uc29sZS5sb2coYm9vay5yZXN1bHRzPy5ib29rcylcbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgaC1bODYlXSB3LVsxMDAlXVxuICAgICAgICBmbGV4IGZsZXgtd3JhcCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctYXV0b1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTEgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFxuICAgICAgICBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBpdGFsaWNcIj5GaWN0aW9uIEJvb2tzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTIwJV0gdy1bOTAlXSBncmlkIGdyaWQtcm93LTMgZ3JpZC1jb2xzLTUgZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvb2sucmVzdWx0cz8uYm9va3MubWFwKChlbGVtZW50LGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgICB7LyogY29uc29sZS5sb2coZWxlbWVudC5hbWF6b25fcHJvZHVjdF91cmwpICovfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgaC1bMTVyZW1dIHctWzEwMCVdXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC0yeGwgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHBsLTQgaC1bNTBweF0gdy1mdWxsIHRydW5jYXRlIHRleHQtbWQgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBcIj57ZWxlbWVudC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwbC02IGgtWzUwcHhdIHctZnVsbCB0cnVuY2F0ZSB0ZXh0LW1kIHRleHQtYmxhY2sgXCI+e2VsZW1lbnQuYXV0aG9yfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEyIGJvcmRlciBzaGFkb3cteGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6Jy9ib29rZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6e2lkOmVsZW1lbnQucHJpbWFyeV9pc2JuMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOmVsZW1lbnQuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczplbGVtZW50LmJvb2tfaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaDplbGVtZW50LnB1Ymxpc2hlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZXM6ZWxlbWVudC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbWF6b246ZWxlbWVudC5hbWF6b25fcHJvZHVjdF91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va19oZWlnaHQ6ZWxlbWVudC5ib29rX2ltYWdlX2hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rX3dpZHRoOmVsZW1lbnQuYm9va19pbWFnZV93aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICA8L21haW4+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgRmljdGlvbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmljdGlvbiIsImJvb2siLCJyb3V0ZXIiLCJzZXRib29rIiwiZ2V0X2Jvb2tzIiwiZGF0YV9zdG9yYWdlIiwiZ2V0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicmVzdWx0cyIsImJvb2tzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwidGl0bGUiLCJhdXRob3IiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsInByaW1hcnlfaXNibjEwIiwiaW1hZ2VzIiwiYm9va19pbWFnZSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJ0aXRsZXMiLCJhbWF6b24iLCJhbWF6b25fcHJvZHVjdF91cmwiLCJib29rX2hlaWdodCIsImJvb2tfaW1hZ2VfaGVpZ2h0IiwiYm9va193aWR0aCIsImJvb2tfaW1hZ2Vfd2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/fiction.js\n"));

/***/ })

});