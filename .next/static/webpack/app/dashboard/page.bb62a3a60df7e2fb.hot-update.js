"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.js":
/*!*******************************!*\
  !*** ./app/dashboard/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardActions,CardContent,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CardActions/CardActions.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _library_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/firebase */ \"(app-pages-browser)/./library/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Adjust path as needed\nfunction Dashboard() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [professors, setProfessors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Example state for professor data\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_library_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (!user) {\n                router.push(\"/signin\"); // Redirect to sign-in if not authenticated\n            }\n        });\n        // Fetch initial professor data here if needed\n        const fetchProfessors = async ()=>{\n            try {\n                const response = await fetch(\"/api/professors\");\n                const data = await response.json();\n                setProfessors(data);\n            } catch (error) {\n                console.error(\"Error fetching professors:\", error);\n            }\n        };\n        fetchProfessors();\n        return ()=>unsubscribe(); // Cleanup subscription on unmount\n    }, [\n        router\n    ]);\n    const handleSignOut = async ()=>{\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_library_firebase__WEBPACK_IMPORTED_MODULE_4__.auth); // Use signOut function from Firebase\n            router.push(\"/\"); // Redirect to home page after sign-out\n        } catch (error) {\n            console.error(\"Sign Out Error\", error);\n        }\n    };\n    const handleSearch = ()=>{\n        // Implement search logic here\n        const filteredProfessors = professors.filter((professor)=>professor.name.toLowerCase().includes(search.toLowerCase()));\n        setProfessors(filteredProfessors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        bgcolor: \"#EDE7F6\" // Light purple background\n        ,\n        p: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h3\",\n                gutterBottom: true,\n                children: \"Welcome to your Dashboard!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                label: \"Search Professors\",\n                variant: \"outlined\",\n                value: search,\n                onChange: (e)=>setSearch(e.target.value),\n                onKeyPress: (e)=>e.key === \"Enter\" && handleSearch(),\n                sx: {\n                    mb: 2,\n                    width: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                variant: \"contained\",\n                color: \"primary\",\n                onClick: handleSignOut,\n                sx: {\n                    mb: 3\n                },\n                children: \"Sign Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                width: \"100%\",\n                maxWidth: \"1200px\",\n                children: professors.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: \"No professors found.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this) : professors.map((professor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        sx: {\n                            mb: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        variant: \"h5\",\n                                        children: professor.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        variant: \"body2\",\n                                        children: professor.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        variant: \"body2\",\n                                        children: [\n                                            \"Rating: \",\n                                            professor.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardActions_CardContent_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    size: \"small\",\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, professor.id, true, {\n                        fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PCS\\\\Documents\\\\GitHub\\\\AI-RateMyProfessor\\\\Class-Critique\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"0/oGnMBHMv770+GRART5sBridXU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ3VEO0FBQzlCO0FBQ3pCO0FBQ0UsQ0FBQyx3QkFBd0I7QUFFeEQsU0FBU2M7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUUsR0FBRyxtQ0FBbUM7SUFDckYsTUFBTSxDQUFDa0IsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLGNBQWNWLGlFQUFrQkEsQ0FBQ0csbURBQUlBLEVBQUUsQ0FBQ1E7WUFDNUMsSUFBSSxDQUFDQSxNQUFNO2dCQUNUTixPQUFPTyxJQUFJLENBQUMsWUFBWSwyQ0FBMkM7WUFDckU7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxNQUFNQyxrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENWLGNBQWNTO1lBQ2hCLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUVBTDtRQUVBLE9BQU8sSUFBTUgsZUFBZSxrQ0FBa0M7SUFDaEUsR0FBRztRQUFDTDtLQUFPO0lBRVgsTUFBTWUsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNbkIsc0RBQU9BLENBQUNFLG1EQUFJQSxHQUFHLHFDQUFxQztZQUMxREUsT0FBT08sSUFBSSxDQUFDLE1BQU0sdUNBQXVDO1FBQzNELEVBQUUsT0FBT00sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0JBQWtCQTtRQUNsQztJQUNGO0lBRUEsTUFBTUcsZUFBZTtRQUNuQiw4QkFBOEI7UUFDOUIsTUFBTUMscUJBQXFCaEIsV0FBV2lCLE1BQU0sQ0FBQ0MsQ0FBQUEsWUFDM0NBLFVBQVVDLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNuQixPQUFPa0IsV0FBVztRQUUxRG5CLGNBQWNlO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUM5Qix3SUFBR0E7UUFDRm9DLE9BQU07UUFDTkMsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLGVBQWM7UUFDZEMsZ0JBQWU7UUFDZkMsWUFBVztRQUNYQyxTQUFRLFVBQVUsMEJBQTBCOztRQUM1Q0MsR0FBRzs7MEJBRUgsOERBQUN6Qyx3SUFBVUE7Z0JBQUMwQyxTQUFRO2dCQUFLQyxZQUFZOzBCQUFDOzs7Ozs7MEJBQ3RDLDhEQUFDMUMsd0lBQVNBO2dCQUNSMkMsT0FBTTtnQkFDTkYsU0FBUTtnQkFDUkcsT0FBTy9CO2dCQUNQZ0MsVUFBVSxDQUFDQyxJQUFNaEMsVUFBVWdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDekNJLFlBQVksQ0FBQ0YsSUFBTUEsRUFBRUcsR0FBRyxLQUFLLFdBQVd2QjtnQkFDeEN3QixJQUFJO29CQUFFQyxJQUFJO29CQUFHbEIsT0FBTztnQkFBUTs7Ozs7OzBCQUU5Qiw4REFBQ25DLHdJQUFNQTtnQkFBQzJDLFNBQVE7Z0JBQVlXLE9BQU07Z0JBQVVDLFNBQVM1QjtnQkFBZXlCLElBQUk7b0JBQUVDLElBQUk7Z0JBQUU7MEJBQUc7Ozs7OzswQkFHbkYsOERBQUN0RCx3SUFBR0E7Z0JBQUNvQyxPQUFNO2dCQUFPcUIsVUFBUzswQkFDeEIzQyxXQUFXNEMsTUFBTSxLQUFLLGtCQUNyQiw4REFBQ3hELHdJQUFVQTs4QkFBQzs7Ozs7MkJBRVpZLFdBQVc2QyxHQUFHLENBQUMsQ0FBQzNCLDBCQUNkLDhEQUFDNUIsd0lBQUlBO3dCQUFvQmlELElBQUk7NEJBQUVDLElBQUk7d0JBQUU7OzBDQUNuQyw4REFBQ2pELHlJQUFXQTs7a0RBQ1YsOERBQUNILHdJQUFVQTt3Q0FBQzBDLFNBQVE7a0RBQU1aLFVBQVVDLElBQUk7Ozs7OztrREFDeEMsOERBQUMvQix3SUFBVUE7d0NBQUMwQyxTQUFRO2tEQUFTWixVQUFVNEIsV0FBVzs7Ozs7O2tEQUNsRCw4REFBQzFELHdJQUFVQTt3Q0FBQzBDLFNBQVE7OzRDQUFROzRDQUFTWixVQUFVNkIsTUFBTTs7Ozs7Ozs7Ozs7OzswQ0FFdkQsOERBQUN2RCx5SUFBV0E7MENBQ1YsNEVBQUNMLHdJQUFNQTtvQ0FBQzZELE1BQUs7OENBQVE7Ozs7Ozs7Ozs7Ozt1QkFQZDlCLFVBQVUrQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBZW5DO0dBeEZ3Qm5EOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UuanM/YmY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIENhcmQsIENhcmRDb250ZW50LCBDYXJkQWN0aW9ucyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2xpYnJhcnkvZmlyZWJhc2UnOyAvLyBBZGp1c3QgcGF0aCBhcyBuZWVkZWRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbcHJvZmVzc29ycywgc2V0UHJvZmVzc29yc10gPSB1c2VTdGF0ZShbXSk7IC8vIEV4YW1wbGUgc3RhdGUgZm9yIHByb2Zlc3NvciBkYXRhXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJyk7IC8vIFJlZGlyZWN0IHRvIHNpZ24taW4gaWYgbm90IGF1dGhlbnRpY2F0ZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmV0Y2ggaW5pdGlhbCBwcm9mZXNzb3IgZGF0YSBoZXJlIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgZmV0Y2hQcm9mZXNzb3JzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJvZmVzc29ycycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0UHJvZmVzc29ycyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9mZXNzb3JzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2Zlc3NvcnMoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTsgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7IC8vIFVzZSBzaWduT3V0IGZ1bmN0aW9uIGZyb20gRmlyZWJhc2VcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlIGFmdGVyIHNpZ24tb3V0XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTaWduIE91dCBFcnJvcicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAvLyBJbXBsZW1lbnQgc2VhcmNoIGxvZ2ljIGhlcmVcclxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZmVzc29ycyA9IHByb2Zlc3NvcnMuZmlsdGVyKHByb2Zlc3NvciA9PlxyXG4gICAgICBwcm9mZXNzb3IubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgKTtcclxuICAgIHNldFByb2Zlc3NvcnMoZmlsdGVyZWRQcm9mZXNzb3JzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcclxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBiZ2NvbG9yPVwiI0VERTdGNlwiIC8vIExpZ2h0IHB1cnBsZSBiYWNrZ3JvdW5kXHJcbiAgICAgIHA9ezN9XHJcbiAgICA+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbT5XZWxjb21lIHRvIHlvdXIgRGFzaGJvYXJkITwvVHlwb2dyYXBoeT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPVwiU2VhcmNoIFByb2Zlc3NvcnNcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZVNlYXJjaCgpfVxyXG4gICAgICAgIHN4PXt7IG1iOiAyLCB3aWR0aDogJzMwMHB4JyB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fSBzeD17eyBtYjogMyB9fT5cclxuICAgICAgICBTaWduIE91dFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBtYXhXaWR0aD1cIjEyMDBweFwiPlxyXG4gICAgICAgIHtwcm9mZXNzb3JzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pk5vIHByb2Zlc3NvcnMgZm91bmQuPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBwcm9mZXNzb3JzLm1hcCgocHJvZmVzc29yKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkIGtleT17cHJvZmVzc29yLmlkfSBzeD17eyBtYjogMiB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57cHJvZmVzc29yLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+e3Byb2Zlc3Nvci5kZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5SYXRpbmc6IHtwcm9mZXNzb3IucmF0aW5nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+VmlldyBEZXRhaWxzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlRleHRGaWVsZCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRBY3Rpb25zIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiRGFzaGJvYXJkIiwicm91dGVyIiwicHJvZmVzc29ycyIsInNldFByb2Zlc3NvcnMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1bnN1YnNjcmliZSIsInVzZXIiLCJwdXNoIiwiZmV0Y2hQcm9mZXNzb3JzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2lnbk91dCIsImhhbmRsZVNlYXJjaCIsImZpbHRlcmVkUHJvZmVzc29ycyIsImZpbHRlciIsInByb2Zlc3NvciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJnY29sb3IiLCJwIiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5Iiwic3giLCJtYiIsImNvbG9yIiwib25DbGljayIsIm1heFdpZHRoIiwibGVuZ3RoIiwibWFwIiwiZGVzY3JpcHRpb24iLCJyYXRpbmciLCJzaXplIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});