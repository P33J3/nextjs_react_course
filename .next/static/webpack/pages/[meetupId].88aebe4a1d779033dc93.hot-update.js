webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetUpDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetUpDetail */ "./components/meetups/MeetUpDetail.js");

var _jsxFileName = "D:\\Coding\\Udemy\\23 Next-js\\nextjs bigger-project\\pages\\[meetupId]\\index.js";
//meetupId is in [] as it is a placeholder name for the ID which changes dynamically depending on the page.




function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Add your own meetups and create amazing networking oppurtunities."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetUpDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, this);
}

_c = MeetupDetails;
; // needed if you run getStaticProps
//describe all the dynamic adresses
// export async function getStaticPaths() {
//   return {
//     //fallbaack:false implies that all pages are covered below; if user inputs another page they get a 404 error page. 
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// };

;
//   return {
//     props: {
//       meetupData: {
//         image:"https://img.emg-services.net/HtmlPages/HtmlPage13951/large-spain-hola.png",
//         id: 'm1',
//         title:'First Meetup',
//         address: "Some Street 5, Some City",
//         description: "This is a first meetup!",
//       }
//     }
//   }
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7O0FBS0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUVFO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQVVBLHFFQUFDLHdFQUFEO0FBQ0EsV0FBSyxFQUFFQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRHhCO0FBRUEsV0FBSyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFLEtBRnhCO0FBR0EsYUFBTyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLE9BSDFCO0FBSUEsaUJBQVcsRUFBRUosS0FBSyxDQUFDQyxVQUFOLENBQWlCSTtBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkg7O0tBcEJRTixhO0FBb0JSLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQztBQW9DRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uODhhZWJlNGExZDc3OTAzM2RjOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWVldHVwSWQgaXMgaW4gW10gYXMgaXQgaXMgYSBwbGFjZWhvbGRlciBuYW1lIGZvciB0aGUgSUQgd2hpY2ggY2hhbmdlcyBkeW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIHBhZ2UuXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0VXBEZXRhaWwnO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7LypJbnNlcnQgQWxsIHRoZSB0YWdzIHlvdSB3b3VsZCBwdXQgaW4gdGhlIGhlYWQgc2VjdGlvbiBvZiBIVE1MICovfVxyXG4gICAgICAgIDx0aXRsZT57cHJvcHN9PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJBZGQgeW91ciBvd24gbWVldHVwcyBhbmQgY3JlYXRlIGFtYXppbmcgbmV0d29ya2luZyBvcHB1cnR1bml0aWVzLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIFxyXG4gICAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gbmVlZGVkIGlmIHlvdSBydW4gZ2V0U3RhdGljUHJvcHNcclxuLy9kZXNjcmliZSBhbGwgdGhlIGR5bmFtaWMgYWRyZXNzZXNcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICAvL2ZhbGxiYWFjazpmYWxzZSBpbXBsaWVzIHRoYXQgYWxsIHBhZ2VzIGFyZSBjb3ZlcmVkIGJlbG93OyBpZiB1c2VyIGlucHV0cyBhbm90aGVyIHBhZ2UgdGhleSBnZXQgYSA0MDQgZXJyb3IgcGFnZS4gXHJcbi8vICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgICBwYXRoczogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgICBtZWV0dXBJZDogXCJtMVwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcblxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgICBtZWV0dXBJZDogXCJtMlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9QSkFkbWluOjlRa0V3ZjY4N2hOeWN0ekBjbHVzdGVyMC55Yml1Yy5tb25nb2RiLm5ldC9Qcm9qZWN0bmV4dGpzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpOyBcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuLy9lbXB0eSBvYmplY3QgYmVsb3cgbWVhbnMgZmluZCBhbGwgb2JqZWN0cywgc2Vjb25kIGNyaXRlcmlhIHNlYXJjaGVzIGZpZWxkc1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcbiBcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIC8vZmFsbGJhYWNrOmZhbHNlIGltcGxpZXMgdGhhdCBhbGwgcGFnZXMgYXJlIGNvdmVyZWQgYmVsb3c7IGlmIHVzZXIgaW5wdXRzIGFub3RoZXIgcGFnZSB0aGV5IGdldCBhIDQwNCBlcnJvciBwYWdlLlxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgXHJcbiAgXHJcbiAgLy9mZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4vLyBjb25zb2xlLmxvZyhtZWV0dXBJZCk7XHJcblxyXG5jb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL1BKQWRtaW46OVFrRXdmNjg3aE55Y3R6QGNsdXN0ZXIwLnliaXVjLm1vbmdvZGIubmV0L1Byb2plY3RuZXh0anM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7IFxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuXHJcbi8vIE9iamVjdElkIGNvbnZlcnRzIHZhcmlhYmxlIHRvIE1vbmdvREIgb2JqZWN0XHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHt9LCB7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpLCB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRNZWV0dXApO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwRGF0YToge1xyXG4vLyAgICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWcuZW1nLXNlcnZpY2VzLm5ldC9IdG1sUGFnZXMvSHRtbFBhZ2UxMzk1MS9sYXJnZS1zcGFpbi1ob2xhLnBuZ1wiLFxyXG4vLyAgICAgICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgICAgIHRpdGxlOidGaXJzdCBNZWV0dXAnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6IFwiU29tZSBTdHJlZXQgNSwgU29tZSBDaXR5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9