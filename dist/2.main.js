(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Menu.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js"));

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}

/***/ }),

/***/ "./src/Components/TopBar.tsx":
/*!***********************************!*\
  !*** ./src/Components/TopBar.tsx ***!
  \***********************************/
/*! exports provided: TopBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return TopBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

//material components



var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
    root: {
        width: 250,
    },
    appbar: {
        backgroundColor: "#9b0a0a",
        color: "white",
        textAlign: "center",
        width: "100%"
    },
    menuButton: {
        marginRight: "2px",
        marginLeft: "5px",
        width: "35px"
    }
});
var TopBar = function (_a) {
    var changePage = _a.changePage;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), drawerOpen = _b[0], toggleDrawer = _b[1];
    var classes = styles();
    //const changePage = Props: changePage;
    function listItemClicked(newPage) {
        changePage(newPage);
        toggleDrawer(false);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], { position: "static", className: classes.appbar },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "menu", onClick: function () { return toggleDrawer(true); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], { open: drawerOpen, onClose: function () { return toggleDrawer(false); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], { className: classes.root },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { button: true, onClick: function () { return listItemClicked("Browse"); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: "Browse" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { button: true, onClick: function () { return listItemClicked("Upload"); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: "Upload" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], { button: true, onClick: function () { return listItemClicked("Your Posts"); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], { primary: "Your Posts" })))))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy91dGlscy9jcmVhdGVTdmdJY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RvcEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHVDQUF1QyxtQkFBTyxDQUFDLHdGQUFnQzs7QUFFL0Usb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELHNDQUFzQyxtQkFBTyxDQUFDLHdGQUEyQjs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSCxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ3hDO0FBQzZGO0FBQzlDO0FBQ087QUFDdEQsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0EsYUFBYSxzREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRDQUFLO0FBQ2pCLFFBQVEsNENBQUssZUFBZSx3REFBTSxHQUFHLGdEQUFnRDtBQUNyRixZQUFZLDRDQUFLLGVBQWUsNERBQVUsR0FBRyw2R0FBNkcsMkJBQTJCLEVBQUUsRUFBRTtBQUN6TCxnQkFBZ0IsNENBQUssZUFBZSw4REFBUTtBQUM1QyxRQUFRLDRDQUFLO0FBQ2IsWUFBWSw0Q0FBSyxlQUFlLHdEQUFNLEdBQUcseUNBQXlDLDRCQUE0QixFQUFFLEVBQUU7QUFDbEgsZ0JBQWdCLDRDQUFLLGVBQWUsc0RBQUksR0FBRywwQkFBMEI7QUFDckUsb0JBQW9CLDRDQUFLLGVBQWUsMERBQVEsR0FBRyxxQ0FBcUMsa0NBQWtDLEVBQUUsRUFBRTtBQUM5SCx3QkFBd0IsNENBQUssZUFBZSw4REFBWSxHQUFHLG9CQUFvQjtBQUMvRSxvQkFBb0IsNENBQUssZUFBZSwwREFBUSxHQUFHLHFDQUFxQyxrQ0FBa0MsRUFBRSxFQUFFO0FBQzlILHdCQUF3Qiw0Q0FBSyxlQUFlLDhEQUFZLEdBQUcsb0JBQW9CO0FBQy9FLG9CQUFvQiw0Q0FBSyxlQUFlLDBEQUFRLEdBQUcscUNBQXFDLHNDQUFzQyxFQUFFLEVBQUU7QUFDbEksd0JBQXdCLDRDQUFLLGVBQWUsOERBQVksR0FBRyx3QkFBd0I7QUFDbkYiLCJmaWxlIjoiMi5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiXG59KSwgJ01lbnUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU3ZnSWNvbjtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb25cIikpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdmdJY29uKHBhdGgsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBDb21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5tZW1vKF9yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU3ZnSWNvbi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpLCBwYXRoKTtcbiAgfSkpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJcIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiSWNvblwiKTtcbiAgfVxuXG4gIENvbXBvbmVudC5tdWlOYW1lID0gX1N2Z0ljb24uZGVmYXVsdC5tdWlOYW1lO1xuICByZXR1cm4gQ29tcG9uZW50O1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy9tYXRlcmlhbCBjb21wb25lbnRzXHJcbmltcG9ydCB7IEFwcEJhciwgSWNvbkJ1dHRvbiwgRHJhd2VyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxudmFyIHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICB9LFxyXG4gICAgYXBwYmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5YjBhMGFcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMnB4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI1cHhcIixcclxuICAgICAgICB3aWR0aDogXCIzNXB4XCJcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCB2YXIgVG9wQmFyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hhbmdlUGFnZSA9IF9hLmNoYW5nZVBhZ2U7XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGRyYXdlck9wZW4gPSBfYlswXSwgdG9nZ2xlRHJhd2VyID0gX2JbMV07XHJcbiAgICB2YXIgY2xhc3NlcyA9IHN0eWxlcygpO1xyXG4gICAgLy9jb25zdCBjaGFuZ2VQYWdlID0gUHJvcHM6IGNoYW5nZVBhZ2U7XHJcbiAgICBmdW5jdGlvbiBsaXN0SXRlbUNsaWNrZWQobmV3UGFnZSkge1xyXG4gICAgICAgIGNoYW5nZVBhZ2UobmV3UGFnZSk7XHJcbiAgICAgICAgdG9nZ2xlRHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwQmFyLCB7IHBvc2l0aW9uOiBcInN0YXRpY1wiLCBjbGFzc05hbWU6IGNsYXNzZXMuYXBwYmFyIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBlZGdlOiBcInN0YXJ0XCIsIGNsYXNzTmFtZTogY2xhc3Nlcy5tZW51QnV0dG9uLCBjb2xvcjogXCJpbmhlcml0XCIsIFwiYXJpYS1sYWJlbFwiOiBcIm1lbnVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlRHJhd2VyKHRydWUpOyB9IH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJY29uLCBudWxsKSkpLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcmF3ZXIsIHsgb3BlbjogZHJhd2VyT3Blbiwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlRHJhd2VyKGZhbHNlKTsgfSB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5yb290IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBidXR0b246IHRydWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpc3RJdGVtQ2xpY2tlZChcIkJyb3dzZVwiKTsgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtVGV4dCwgeyBwcmltYXJ5OiBcIkJyb3dzZVwiIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCB7IGJ1dHRvbjogdHJ1ZSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gbGlzdEl0ZW1DbGlja2VkKFwiVXBsb2FkXCIpOyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IFwiVXBsb2FkXCIgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHsgYnV0dG9uOiB0cnVlLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBsaXN0SXRlbUNsaWNrZWQoXCJZb3VyIFBvc3RzXCIpOyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IFwiWW91ciBQb3N0c1wiIH0pKSkpKSkpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9