"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/general/home",{

/***/ "./src/Components/Layout/Components/Footer/Mobile/index.tsx":
/*!******************************************************************!*\
  !*** ./src/Components/Layout/Components/Footer/Mobile/index.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_Common_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/Common/Dropdown */ \"./src/Components/Common/Dropdown/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./src/Components/Layout/Components/Footer/data.ts\");\n/* harmony import */ var _AboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutUs */ \"./src/Components/Layout/Components/Footer/Mobile/AboutUs.tsx\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Categories */ \"./src/Components/Layout/Components/Footer/Mobile/Categories.tsx\");\n/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactInfo */ \"./src/Components/Layout/Components/Footer/Mobile/ContactInfo.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/duyhp/Desktop/ban-hang-fe/lotus-app/src/Components/Layout/Components/Footer/Mobile/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar FooterMobile = function FooterMobile() {\n  _s();\n\n  var listPayment = _data__WEBPACK_IMPORTED_MODULE_2__.FooterData.listPayment,\n      contactInfo = _data__WEBPACK_IMPORTED_MODULE_2__.FooterData.contactInfo,\n      categories = _data__WEBPACK_IMPORTED_MODULE_2__.FooterData.categories,\n      aboutUs = _data__WEBPACK_IMPORTED_MODULE_2__.FooterData.aboutUs;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      emailInput = _useState[0],\n      setEmailInput = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    var val = e.target.value;\n    setEmailInput(val);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"w-full grid grid-cols-1\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"p-4 space-y-4 text-white\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: \"Contact with us \\u2764\\uFE0F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"bg-black text-white\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          className: \"w-full rounded-sm py-1 search-input bg-black-lead text-white font-bold\",\n          type: \"text\",\n          placeholder: \"Email\",\n          value: emailInput,\n          onChange: function onChange(e) {\n            return handleChange(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"space-x-2\",\n        children: listPayment === null || listPayment === void 0 ? void 0 : listPayment.map(function (e, index) {\n          return (\n            /*#__PURE__*/\n\n            /* eslint-disable @next/next/no-img-element */\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n              src: \"/img/payment/\".concat(e, \".webp\"),\n              alt: \"\",\n              height: 35\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, _this)\n          );\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"w-full space-y-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_Common_Dropdown__WEBPACK_IMPORTED_MODULE_0__.DropDownFooter, {\n          title: \"Th\\xF4ng tin li\\xEAn h\\u1EC7\",\n          childComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ContactInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            data: contactInfo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 69\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_Common_Dropdown__WEBPACK_IMPORTED_MODULE_0__.DropDownFooter, {\n          title: \"Danh m\\u1EE5c\",\n          childComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            data: categories\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 60\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_Common_Dropdown__WEBPACK_IMPORTED_MODULE_0__.DropDownFooter, {\n          title: \"V\\u1EC1 ch\\xFAng t\\xF4i\",\n          childComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_AboutUs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            data: aboutUs\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 64\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FooterMobile, \"FORN+ccEcxlcFSDv8QTxOCIX900=\");\n\n_c = FooterMobile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterMobile);\n\nvar _c;\n\n$RefreshReg$(_c, \"FooterMobile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9MYXlvdXQvQ29tcG9uZW50cy9Gb290ZXIvTW9iaWxlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFRQyxXQUFSLEdBQTBETCx5REFBMUQ7QUFBQSxNQUFxQk0sV0FBckIsR0FBMEROLHlEQUExRDtBQUFBLE1BQWtDTyxVQUFsQyxHQUEwRFAsd0RBQTFEO0FBQUEsTUFBOENRLE9BQTlDLEdBQTBEUixxREFBMUQ7O0FBQ0Esa0JBQW9DRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPVSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN4QixRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFuQjtBQUNBTCxJQUFBQSxhQUFhLENBQUNHLEdBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMsd0VBRFo7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFXLEVBQUMsT0FIZDtBQUlFLGVBQUssRUFBRUosVUFKVDtBQUtFLGtCQUFRLEVBQUUsa0JBQUFHLENBQUM7QUFBQSxtQkFBSUQsWUFBWSxDQUFDQyxDQUFELENBQWhCO0FBQUE7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxrQkFDR1AsV0FESCxhQUNHQSxXQURILHVCQUNHQSxXQUFXLENBQUVXLEdBQWIsQ0FBaUIsVUFBQ0osQ0FBRCxFQUFJSyxLQUFKO0FBQUE7QUFBQTs7QUFDaEI7QUFDQTtBQUFpQixpQkFBRyx5QkFBa0JMLENBQWxCLFVBQXBCO0FBQWdELGlCQUFHLEVBQUMsRUFBcEQ7QUFBdUQsb0JBQU0sRUFBRTtBQUEvRCxlQUFVSyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGZ0I7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQWlCRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxnQ0FDRSw4REFBQyx1RUFBRDtBQUFnQixlQUFLLEVBQUMsOEJBQXRCO0FBQTBDLHdCQUFjLGVBQUUsOERBQUMsb0RBQUQ7QUFBYSxnQkFBSSxFQUFFWDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyx1RUFBRDtBQUFnQixlQUFLLEVBQUMsZUFBdEI7QUFBaUMsd0JBQWMsZUFBRSw4REFBQyxtREFBRDtBQUFZLGdCQUFJLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLHVFQUFEO0FBQWdCLGVBQUssRUFBQyx5QkFBdEI7QUFBcUMsd0JBQWMsZUFBRSw4REFBQyxnREFBRDtBQUFTLGdCQUFJLEVBQUVDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FuQ0Q7O0dBQU1KOztLQUFBQTtBQXFDTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9MYXlvdXQvQ29tcG9uZW50cy9Gb290ZXIvTW9iaWxlL2luZGV4LnRzeD9lMmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3BEb3duRm9vdGVyIH0gZnJvbSBcIkBDb21wb25lbnRzL0NvbW1vbi9Ecm9wZG93blwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvb3RlckRhdGEgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vQWJvdXRVc1wiO1xuXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgQ29udGFjdEluZm8gZnJvbSBcIi4vQ29udGFjdEluZm9cIjtcblxuY29uc3QgRm9vdGVyTW9iaWxlID0gKCkgPT4ge1xuICBjb25zdCB7IGxpc3RQYXltZW50LCBjb250YWN0SW5mbywgY2F0ZWdvcmllcywgYWJvdXRVcyB9ID0gRm9vdGVyRGF0YTtcbiAgY29uc3QgW2VtYWlsSW5wdXQsIHNldEVtYWlsSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRFbWFpbElucHV0KHZhbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q29udGFjdCB3aXRoIHVzIOKdpO+4jzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXNtIHB5LTEgc2VhcmNoLWlucHV0IGJnLWJsYWNrLWxlYWQgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWxJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTJcIj5cbiAgICAgICAgICB7bGlzdFBheW1lbnQ/Lm1hcCgoZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbiAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtgL2ltZy9wYXltZW50LyR7ZX0ud2VicGB9IGFsdD1cIlwiIGhlaWdodD17MzV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LTRcIj5cbiAgICAgICAgICA8RHJvcERvd25Gb290ZXIgdGl0bGU9XCJUaMO0bmcgdGluIGxpw6puIGjhu4dcIiBjaGlsZENvbXBvbmVudD17PENvbnRhY3RJbmZvIGRhdGE9e2NvbnRhY3RJbmZvfSAvPn0gLz5cbiAgICAgICAgICA8RHJvcERvd25Gb290ZXIgdGl0bGU9XCJEYW5oIG3hu6VjXCIgY2hpbGRDb21wb25lbnQ9ezxDYXRlZ29yaWVzIGRhdGE9e2NhdGVnb3JpZXN9IC8+fSAvPlxuICAgICAgICAgIDxEcm9wRG93bkZvb3RlciB0aXRsZT1cIlbhu4EgY2jDum5nIHTDtGlcIiBjaGlsZENvbXBvbmVudD17PEFib3V0VXMgZGF0YT17YWJvdXRVc30gLz59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJNb2JpbGU7XG4iXSwibmFtZXMiOlsiRHJvcERvd25Gb290ZXIiLCJ1c2VTdGF0ZSIsIkZvb3RlckRhdGEiLCJBYm91dFVzIiwiQ2F0ZWdvcmllcyIsIkNvbnRhY3RJbmZvIiwiRm9vdGVyTW9iaWxlIiwibGlzdFBheW1lbnQiLCJjb250YWN0SW5mbyIsImNhdGVnb3JpZXMiLCJhYm91dFVzIiwiZW1haWxJbnB1dCIsInNldEVtYWlsSW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Layout/Components/Footer/Mobile/index.tsx\n");

/***/ })

});