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
/* harmony import */ var _components_meetups_MeetUpDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetUpDetail */ "./components/meetups/MeetUpDetail.js");

var _jsxFileName = "D:\\Coding\\Udemy\\23 Next-js\\nextjs bigger-project\\pages\\[meetupId]\\index.js";
//meetupId is in [] as it is a placeholder name for the ID which changes dynamically depending on the page.


function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Head, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "add a New Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Add your own meetups and create amazing networking oppurtunities."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewMeetupForm, {
      onAddMeetup: addMeetUpHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetUpDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJhZGRNZWV0VXBIYW5kbGVyIiwibWVldHVwRGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7QUFLQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixzQkFDRSxxRUFBQyxRQUFEO0FBQUEsNEJBQ0EscUVBQUMsSUFBRDtBQUFBLDhCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBU0EscUVBQUMsYUFBRDtBQUFlLGlCQUFXLEVBQUVDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUQSxlQVlBLHFFQUFDLHdFQUFEO0FBQ0EsV0FBSyxFQUFFRCxLQUFLLENBQUNFLFVBQU4sQ0FBaUJDLEtBRHhCO0FBRUEsV0FBSyxFQUFFSCxLQUFLLENBQUNFLFVBQU4sQ0FBaUJFLEtBRnhCO0FBR0EsYUFBTyxFQUFFSixLQUFLLENBQUNFLFVBQU4sQ0FBaUJHLE9BSDFCO0FBSUEsaUJBQVcsRUFBRUwsS0FBSyxDQUFDRSxVQUFOLENBQWlCSTtBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkg7O0tBdEJRUCxhO0FBc0JSLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQztBQW9DRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uMTZmNzczYjZiMDY5NTRiNjEzZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWVldHVwSWQgaXMgaW4gW10gYXMgaXQgaXMgYSBwbGFjZWhvbGRlciBuYW1lIGZvciB0aGUgSUQgd2hpY2ggY2hhbmdlcyBkeW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIHBhZ2UuXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbCc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHsvKkluc2VydCBBbGwgdGhlIHRhZ3MgeW91IHdvdWxkIHB1dCBpbiB0aGUgaGVhZCBzZWN0aW9uIG9mIEhUTUwgKi99XHJcbiAgICAgICAgPHRpdGxlPmFkZCBhIE5ldyBNZWV0dXA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkFkZCB5b3VyIG93biBtZWV0dXBzIGFuZCBjcmVhdGUgYW1hemluZyBuZXR3b3JraW5nIG9wcHVydHVuaXRpZXMuXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0VXBIYW5kbGVyfSAvPlxyXG4gICBcclxuXHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBuZWVkZWQgaWYgeW91IHJ1biBnZXRTdGF0aWNQcm9wc1xyXG4vL2Rlc2NyaWJlIGFsbCB0aGUgZHluYW1pYyBhZHJlc3Nlc1xyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIC8vZmFsbGJhYWNrOmZhbHNlIGltcGxpZXMgdGhhdCBhbGwgcGFnZXMgYXJlIGNvdmVyZWQgYmVsb3c7IGlmIHVzZXIgaW5wdXRzIGFub3RoZXIgcGFnZSB0aGV5IGdldCBhIDQwNCBlcnJvciBwYWdlLiBcclxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuLy8gICAgIHBhdGhzOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgICAgIG1lZXR1cElkOiBcIm0yXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL1BKQWRtaW46OVFrRXdmNjg3aE55Y3R6QGNsdXN0ZXIwLnliaXVjLm1vbmdvZGIubmV0L1Byb2plY3RuZXh0anM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7IFxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4vL2VtcHR5IG9iamVjdCBiZWxvdyBtZWFucyBmaW5kIGFsbCBvYmplY3RzLCBzZWNvbmQgY3JpdGVyaWEgc2VhcmNoZXMgZmllbGRzXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuIFxyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgLy9mYWxsYmFhY2s6ZmFsc2UgaW1wbGllcyB0aGF0IGFsbCBwYWdlcyBhcmUgY292ZXJlZCBiZWxvdzsgaWYgdXNlciBpbnB1dHMgYW5vdGhlciBwYWdlIHRoZXkgZ2V0IGEgNDA0IGVycm9yIHBhZ2UuXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBcclxuICBcclxuICAvL2ZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbi8vIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vUEpBZG1pbjo5UWtFd2Y2ODdoTnljdHpAY2x1c3RlcjAueWJpdWMubW9uZ29kYi5uZXQvUHJvamVjdG5leHRqcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTsgXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG5cclxuLy8gT2JqZWN0SWQgY29udmVydHMgdmFyaWFibGUgdG8gTW9uZ29EQiBvYmplY3RcclxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe30sIHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCksIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE1lZXR1cCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBEYXRhOiB7XHJcbi8vICAgICAgICAgaW1hZ2U6XCJodHRwczovL2ltZy5lbWctc2VydmljZXMubmV0L0h0bWxQYWdlcy9IdG1sUGFnZTEzOTUxL2xhcmdlLXNwYWluLWhvbGEucG5nXCIsXHJcbi8vICAgICAgICAgaWQ6ICdtMScsXHJcbi8vICAgICAgICAgdGl0bGU6J0ZpcnN0IE1lZXR1cCcsXHJcbi8vICAgICAgICAgYWRkcmVzczogXCJTb21lIFN0cmVldCA1LCBTb21lIENpdHlcIixcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIVwiLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzOyJdLCJzb3VyY2VSb290IjoiIn0=