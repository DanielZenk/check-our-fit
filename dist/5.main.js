(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/Components/Questionnaire.tsx":
/*!******************************************!*\
  !*** ./src/Components/Questionnaire.tsx ***!
  \******************************************/
/*! exports provided: Questionnaire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questionnaire", function() { return Questionnaire; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

//material components


var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    question: {
        marginBottom: "15px",
        width: "95%",
        marginLeft: "5px",
    },
});
var Questionnaire = function (_a) {
    var questions = _a.questions;
    var classes = styles();
    var renderQuestions = function () {
        if (!questions)
            return;
        console.log(questions);
        return questions.map(function (question) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { className: classes.question, label: question.questionText }));
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true }, questions ? renderQuestions() : null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Submit"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Clear"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Skip")))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9RdWVzdGlvbm5haXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzFCO0FBQ3NEO0FBQ2E7QUFDbkUsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBSyxlQUFlLDJEQUFTLEdBQUcsNERBQTREO0FBQ2hILFNBQVM7QUFDVDtBQUNBLFlBQVksNENBQUssZUFBZSw0Q0FBSztBQUNyQyxRQUFRLDRDQUFLO0FBQ2IsWUFBWSw0Q0FBSyxlQUFlLDZEQUFXLEdBQUcsa0JBQWtCO0FBQ2hFLFFBQVEsNENBQUs7QUFDYixZQUFZLDRDQUFLLGVBQWUsNkRBQVcsR0FBRyxrQkFBa0I7QUFDaEUsZ0JBQWdCLDRDQUFLLGVBQWUsd0RBQU07QUFDMUMsZ0JBQWdCLDRDQUFLLGVBQWUsd0RBQU07QUFDMUMsZ0JBQWdCLDRDQUFLLGVBQWUsd0RBQU07QUFDMUMiLCJmaWxlIjoiNS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL21hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbnZhciBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjVweFwiLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCB2YXIgUXVlc3Rpb25uYWlyZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHF1ZXN0aW9ucyA9IF9hLnF1ZXN0aW9ucztcclxuICAgIHZhciBjbGFzc2VzID0gc3R5bGVzKCk7XHJcbiAgICB2YXIgcmVuZGVyUXVlc3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghcXVlc3Rpb25zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zLm1hcChmdW5jdGlvbiAocXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBjbGFzc05hbWU6IGNsYXNzZXMucXVlc3Rpb24sIGxhYmVsOiBxdWVzdGlvbi5xdWVzdGlvblRleHQgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2wsIHsgZnVsbFdpZHRoOiB0cnVlIH0sIHF1ZXN0aW9ucyA/IHJlbmRlclF1ZXN0aW9ucygpIDogbnVsbCkpLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgeyBmdWxsV2lkdGg6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIlN1Ym1pdFwiKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIkNsZWFyXCIpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwiU2tpcFwiKSkpKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=