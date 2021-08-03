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
        children: props.meetupData
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7O0FBS0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUVFO0FBQUEsa0JBQVFBLEtBQUssQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBVUEscUVBQUMsd0VBQUQ7QUFDQSxXQUFLLEVBQUVELEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsS0FEeEI7QUFFQSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkUsS0FGeEI7QUFHQSxhQUFPLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsT0FIMUI7QUFJQSxpQkFBVyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CSDs7S0FwQlFOLGE7QUFvQlIsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBb0JDO0FBb0NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS42MmNjNTU3NjI2MGQ2MWFkZGY4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9tZWV0dXBJZCBpcyBpbiBbXSBhcyBpdCBpcyBhIHBsYWNlaG9sZGVyIG5hbWUgZm9yIHRoZSBJRCB3aGljaCBjaGFuZ2VzIGR5bmFtaWNhbGx5IGRlcGVuZGluZyBvbiB0aGUgcGFnZS5cclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbCc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHsvKkluc2VydCBBbGwgdGhlIHRhZ3MgeW91IHdvdWxkIHB1dCBpbiB0aGUgaGVhZCBzZWN0aW9uIG9mIEhUTUwgKi99XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQWRkIHlvdXIgb3duIG1lZXR1cHMgYW5kIGNyZWF0ZSBhbWF6aW5nIG5ldHdvcmtpbmcgb3BwdXJ0dW5pdGllcy5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICBcclxuICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIG5lZWRlZCBpZiB5b3UgcnVuIGdldFN0YXRpY1Byb3BzXHJcbi8vZGVzY3JpYmUgYWxsIHRoZSBkeW5hbWljIGFkcmVzc2VzXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgLy9mYWxsYmFhY2s6ZmFsc2UgaW1wbGllcyB0aGF0IGFsbCBwYWdlcyBhcmUgY292ZXJlZCBiZWxvdzsgaWYgdXNlciBpbnB1dHMgYW5vdGhlciBwYWdlIHRoZXkgZ2V0IGEgNDA0IGVycm9yIHBhZ2UuIFxyXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyAgICAgcGF0aHM6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgICAgbWVldHVwSWQ6IFwibTJcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vUEpBZG1pbjo5UWtFd2Y2ODdoTnljdHpAY2x1c3RlcjAueWJpdWMubW9uZ29kYi5uZXQvUHJvamVjdG5leHRqcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTsgXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbi8vZW1wdHkgb2JqZWN0IGJlbG93IG1lYW5zIGZpbmQgYWxsIG9iamVjdHMsIHNlY29uZCBjcml0ZXJpYSBzZWFyY2hlcyBmaWVsZHNcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG4gXHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICAvL2ZhbGxiYWFjazpmYWxzZSBpbXBsaWVzIHRoYXQgYWxsIHBhZ2VzIGFyZSBjb3ZlcmVkIGJlbG93OyBpZiB1c2VyIGlucHV0cyBhbm90aGVyIHBhZ2UgdGhleSBnZXQgYSA0MDQgZXJyb3IgcGFnZS5cclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIFxyXG4gIFxyXG4gIC8vZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuLy8gY29uc29sZS5sb2cobWVldHVwSWQpO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9QSkFkbWluOjlRa0V3ZjY4N2hOeWN0ekBjbHVzdGVyMC55Yml1Yy5tb25nb2RiLm5ldC9Qcm9qZWN0bmV4dGpzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpOyBcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcblxyXG4vLyBPYmplY3RJZCBjb252ZXJ0cyB2YXJpYWJsZSB0byBNb25nb0RCIG9iamVjdFxyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7fSwgeyBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSwgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkTWVldHVwKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cERhdGE6IHtcclxuLy8gICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1nLmVtZy1zZXJ2aWNlcy5uZXQvSHRtbFBhZ2VzL0h0bWxQYWdlMTM5NTEvbGFyZ2Utc3BhaW4taG9sYS5wbmdcIixcclxuLy8gICAgICAgICBpZDogJ20xJyxcclxuLy8gICAgICAgICB0aXRsZTonRmlyc3QgTWVldHVwJyxcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgU3RyZWV0IDUsIFNvbWUgQ2l0eVwiLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==