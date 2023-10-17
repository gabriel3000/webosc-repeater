"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/webosc-repeater/page",{

/***/ "(app-pages-browser)/./src/app/webosc-repeater/_c/components/radioGroup/index.tsx":
/*!********************************************************************!*\
  !*** ./src/app/webosc-repeater/_c/components/radioGroup/index.tsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RadioGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radioGroup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radioGroup.module.css */ \"(app-pages-browser)/./src/app/webosc-repeater/_c/components/radioGroup/radioGroup.module.css\");\n/* harmony import */ var _radioGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radioGroup_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ReactContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ReactContextProvider */ \"(app-pages-browser)/./src/app/webosc-repeater/_c/context/ReactContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction RadioGroup(param) {\n    let { settings } = param;\n    _s();\n    const { id, defaultValue, knobIndex, instrumentIndex, radios, knob: k } = settings;\n    const { instrumentParams, setInstrumentParams } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ReactContextProvider__WEBPACK_IMPORTED_MODULE_2__.ReactContext);\n    const handleChange = (e)=>{\n        const newInstrumentParams = JSON.parse(JSON.stringify(instrumentParams));\n        const obj = newInstrumentParams[instrumentIndex].find((knob)=>{\n            return knob.knob === k;\n        });\n        if (obj !== undefined) {\n            obj.value = e.target.value;\n        }\n        setInstrumentParams(newInstrumentParams);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"radio-group radio-group-\".concat(knobIndex),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_radioGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"radio-group-options\"]),\n            children: radios.map((radio, radioIndex)=>{\n                const radioId = \"radio-group-\".concat(id, \"-\").concat(radioIndex, \"-\").concat(knobIndex, \"-\").concat(instrumentIndex);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_radioGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"radio-group-option\"]),\n                    children: [\n                        defaultValue,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"radio\",\n                            name: id,\n                            id: radioId,\n                            value: radio.value,\n                            defaultChecked: radio.value === defaultValue,\n                            onChange: (e)=>{\n                                handleChange(e);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/gabrieljablanczy/projects/webosc-repeater/src/app/webosc-repeater/_c/components/radioGroup/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: radioId,\n                            children: radio.label\n                        }, void 0, false, {\n                            fileName: \"/Users/gabrieljablanczy/projects/webosc-repeater/src/app/webosc-repeater/_c/components/radioGroup/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, radioIndex, true, {\n                    fileName: \"/Users/gabrieljablanczy/projects/webosc-repeater/src/app/webosc-repeater/_c/components/radioGroup/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/gabrieljablanczy/projects/webosc-repeater/src/app/webosc-repeater/_c/components/radioGroup/index.tsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, knobIndex, false, {\n        fileName: \"/Users/gabrieljablanczy/projects/webosc-repeater/src/app/webosc-repeater/_c/components/radioGroup/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(RadioGroup, \"ZTEH7BBnDY9bI1fsd5FCScoXez8=\");\n_c = RadioGroup;\nvar _c;\n$RefreshReg$(_c, \"RadioGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd2Vib3NjLXJlcGVhdGVyL19jL2NvbXBvbmVudHMvcmFkaW9Hcm91cC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ0U7QUFDc0I7QUFnQm5ELFNBQVNJLFdBQVcsS0FBOEI7UUFBOUIsRUFBQ0MsUUFBUSxFQUFxQixHQUE5Qjs7SUFDL0IsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsTUFBTUMsQ0FBQyxFQUFFLEdBQUdQO0lBQzFFLE1BQU0sRUFBRVEsZ0JBQWdCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdiLGlEQUFVQSxDQUFDRSx1RUFBWUE7SUFFekUsTUFBTVksZUFBZSxDQUFDQztRQUNsQixNQUFNQyxzQkFBMEJDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDUDtRQUMxRCxNQUFNUSxNQUFNSixtQkFBbUIsQ0FBQ1IsZ0JBQWdCLENBQUNhLElBQUksQ0FBQyxDQUFDWDtZQUNuRCxPQUFPQSxLQUFLQSxJQUFJLEtBQUtDO1FBQ3pCO1FBRUEsSUFBR1MsUUFBUUUsV0FBVztZQUNsQkYsSUFBSUcsS0FBSyxHQUFHUixFQUFFUyxNQUFNLENBQUNELEtBQUs7UUFDOUI7UUFDQVYsb0JBQW9CRztJQUN4QjtJQUVBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFXLDJCQUFxQyxPQUFWbkI7a0JBQ3ZDLDRFQUFDa0I7WUFBSUMsV0FBV3pCLHNGQUE0QjtzQkFDdkNRLE9BQU9rQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7Z0JBQ2hCLE1BQU1DLFVBQVUsZUFBcUJELE9BQU54QixJQUFHLEtBQWlCRSxPQUFkc0IsWUFBVyxLQUFnQnJCLE9BQWJELFdBQVUsS0FBbUIsT0FBaEJDO2dCQUNoRSxxQkFDSSw4REFBQ2lCO29CQUFJQyxXQUFXekIscUZBQTJCOzt3QkFBb0JLO3NDQUMzRCw4REFBQ3lCOzRCQUFNQyxNQUFLOzRCQUFRQyxNQUFNNUI7NEJBQUlBLElBQUl5Qjs0QkFBU1AsT0FBT0ssTUFBTUwsS0FBSzs0QkFBRVcsZ0JBQWdCTixNQUFNTCxLQUFLLEtBQUtqQjs0QkFBYzZCLFVBQVUsQ0FBQ3BCO2dDQUFNRCxhQUFhQzs0QkFBRzs7Ozs7O3NDQUM5SSw4REFBQ3FCOzRCQUFNQyxTQUFTUDtzQ0FBVUYsTUFBTVEsS0FBSzs7Ozs7OzttQkFGU1A7Ozs7O1lBSzFEOzs7Ozs7T0FWcUR0Qjs7Ozs7QUFjckU7R0EvQndCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dlYm9zYy1yZXBlYXRlci9fYy9jb21wb25lbnRzL3JhZGlvR3JvdXAvaW5kZXgudHN4Pzk2MzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcmFkaW9Hcm91cC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFJlYWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvUmVhY3RDb250ZXh0UHJvdmlkZXInO1xuaW1wb3J0IHsgS25vYiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFJhZGlvR3JvdXBTZXR0aW5ncyB7XG4gICAgc2V0dGluZ3M6IHsgXG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xuICAgICAgICBrbm9iSW5kZXg6IG51bWJlcjtcbiAgICAgICAgaW5zdHJ1bWVudEluZGV4OiBudW1iZXI7XG4gICAgICAgIGxhYmVsQ29udGVudDogc3RyaW5nO1xuICAgICAgICByYWRpb3M6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG4gICAgICAgIGtub2I6IHN0cmluZztcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFkaW9Hcm91cCh7c2V0dGluZ3N9OiBSYWRpb0dyb3VwU2V0dGluZ3MpIHtcbiAgICBjb25zdCB7IGlkLCBkZWZhdWx0VmFsdWUsIGtub2JJbmRleCwgaW5zdHJ1bWVudEluZGV4LCByYWRpb3MsIGtub2I6IGsgfSA9IHNldHRpbmdzO1xuICAgIGNvbnN0IHsgaW5zdHJ1bWVudFBhcmFtcywgc2V0SW5zdHJ1bWVudFBhcmFtcyB9ID0gdXNlQ29udGV4dChSZWFjdENvbnRleHQpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0luc3RydW1lbnRQYXJhbXM6YW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnN0cnVtZW50UGFyYW1zKSk7O1xuICAgICAgICBjb25zdCBvYmogPSBuZXdJbnN0cnVtZW50UGFyYW1zW2luc3RydW1lbnRJbmRleF0uZmluZCgoa25vYjpLbm9iKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga25vYi5rbm9iID09PSBrO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JqLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW5zdHJ1bWVudFBhcmFtcyhuZXdJbnN0cnVtZW50UGFyYW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJhZGlvLWdyb3VwIHJhZGlvLWdyb3VwLSR7a25vYkluZGV4fWB9IGtleT17a25vYkluZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsncmFkaW8tZ3JvdXAtb3B0aW9ucyddfT5cbiAgICAgICAgICAgICAgICB7cmFkaW9zLm1hcCgocmFkaW8sIHJhZGlvSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFkaW9JZCA9IGByYWRpby1ncm91cC0ke2lkfS0ke3JhZGlvSW5kZXh9LSR7a25vYkluZGV4fS0ke2luc3RydW1lbnRJbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydyYWRpby1ncm91cC1vcHRpb24nXX0ga2V5PXtyYWRpb0luZGV4fT57ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtpZH0gaWQ9e3JhZGlvSWR9IHZhbHVlPXtyYWRpby52YWx1ZX0gZGVmYXVsdENoZWNrZWQ9e3JhZGlvLnZhbHVlID09PSBkZWZhdWx0VmFsdWV9IG9uQ2hhbmdlPXsoZSk9PnsgaGFuZGxlQ2hhbmdlKGUpIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cmFkaW9JZH0+e3JhZGlvLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0Iiwic3R5bGUiLCJSZWFjdENvbnRleHQiLCJSYWRpb0dyb3VwIiwic2V0dGluZ3MiLCJpZCIsImRlZmF1bHRWYWx1ZSIsImtub2JJbmRleCIsImluc3RydW1lbnRJbmRleCIsInJhZGlvcyIsImtub2IiLCJrIiwiaW5zdHJ1bWVudFBhcmFtcyIsInNldEluc3RydW1lbnRQYXJhbXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3SW5zdHJ1bWVudFBhcmFtcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm9iaiIsImZpbmQiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJhZGlvIiwicmFkaW9JbmRleCIsInJhZGlvSWQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdENoZWNrZWQiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/webosc-repeater/_c/components/radioGroup/index.tsx\n"));

/***/ })

});