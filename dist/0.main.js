(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
/* harmony import */ var _Context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/UserContext */ "./src/Context/UserContext.tsx");

//material components


//user context

var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    question: {
        marginBottom: "15px",
        width: "95%",
        marginLeft: "5px",
    },
});
var Questionnaire = function (_a) {
    var questions = _a.questions, postId = _a.postId;
    var classes = styles();
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), answers = _b[0], setAnswers = _b[1];
    var userObj = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
    var renderAnswers = function (answers) {
        return Object.entries(answers).map(function (entry) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], { key: entry[0], value: entry[0] }, entry[1].answerText));
        });
    };
    var setOneAnswer = function (e, index) {
        var temp = answers;
        temp[index] = parseInt(e.value, 10);
        setAnswers(temp);
    };
    var renderQuestions = function () {
        if (!questions)
            return;
        return questions.map(function (question, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { key: index, select: true, className: classes.question, label: question.questionText, onChange: function (e) { return setOneAnswer(e.target, index); }, defaultValue: "" }, renderAnswers(question.answers)));
        });
    };
    var submitAnswers = function () {
        var answersObj = { answers: answers };
        fetch("https://us-central1-fashionable-typescript.cloudfunctions.net/api/post/" + postId + "/answer", {
            method: "post",
            headers: {
                Authorization: "Bearer " + userObj.token,
            },
            body: JSON.stringify(answersObj),
        })
            .then(function (result) {
            result.json();
        })
            .then(function (result) { });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true }, questions ? renderQuestions() : null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true }, postId ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: function () { return submitAnswers(); } }, "Submit"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Clear"))) : null))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9RdWVzdGlvbm5haXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDcEQ7QUFDc0Q7QUFDdUI7QUFDN0U7QUFDcUQ7QUFDckQsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0EsYUFBYSxzREFBUTtBQUNyQixrQkFBa0Isd0RBQVUsQ0FBQyxnRUFBVztBQUN4QztBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLGVBQWUsMERBQVEsR0FBRyxpQ0FBaUM7QUFDcEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLGVBQWUsMkRBQVMsR0FBRyw4R0FBOEcsc0NBQXNDLEVBQUUsb0JBQW9CO0FBQzlOLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDLEVBQUU7QUFDdkM7QUFDQSxZQUFZLDRDQUFLLGVBQWUsNENBQUs7QUFDckMsUUFBUSw0Q0FBSztBQUNiLFlBQVksNENBQUssZUFBZSw2REFBVyxHQUFHLGtCQUFrQjtBQUNoRSxRQUFRLDRDQUFLO0FBQ2IsWUFBWSw0Q0FBSyxlQUFlLDZEQUFXLEdBQUcsa0JBQWtCLFlBQVksNENBQUssZUFBZSw0Q0FBSztBQUNyRyxnQkFBZ0IsNENBQUssZUFBZSx3REFBTSxHQUFHLHVCQUF1Qix3QkFBd0IsRUFBRSxFQUFFO0FBQ2hHLGdCQUFnQiw0Q0FBSyxlQUFlLHdEQUFNO0FBQzFDIiwiZmlsZSI6IjAubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL21hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQ29udHJvbCwgVGV4dEZpZWxkLCBNZW51SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL3VzZXIgY29udGV4dFxyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L1VzZXJDb250ZXh0XCI7XHJcbnZhciBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE1cHhcIixcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjVweFwiLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCB2YXIgUXVlc3Rpb25uYWlyZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHF1ZXN0aW9ucyA9IF9hLnF1ZXN0aW9ucywgcG9zdElkID0gX2EucG9zdElkO1xyXG4gICAgdmFyIGNsYXNzZXMgPSBzdHlsZXMoKTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgYW5zd2VycyA9IF9iWzBdLCBzZXRBbnN3ZXJzID0gX2JbMV07XHJcbiAgICB2YXIgdXNlck9iaiA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgdmFyIHJlbmRlckFuc3dlcnMgPSBmdW5jdGlvbiAoYW5zd2Vycykge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhhbnN3ZXJzKS5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBrZXk6IGVudHJ5WzBdLCB2YWx1ZTogZW50cnlbMF0gfSwgZW50cnlbMV0uYW5zd2VyVGV4dCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRPbmVBbnN3ZXIgPSBmdW5jdGlvbiAoZSwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgdGVtcCA9IGFuc3dlcnM7XHJcbiAgICAgICAgdGVtcFtpbmRleF0gPSBwYXJzZUludChlLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgc2V0QW5zd2Vycyh0ZW1wKTtcclxuICAgIH07XHJcbiAgICB2YXIgcmVuZGVyUXVlc3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghcXVlc3Rpb25zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9ucy5tYXAoZnVuY3Rpb24gKHF1ZXN0aW9uLCBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkLCB7IGtleTogaW5kZXgsIHNlbGVjdDogdHJ1ZSwgY2xhc3NOYW1lOiBjbGFzc2VzLnF1ZXN0aW9uLCBsYWJlbDogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldE9uZUFuc3dlcihlLnRhcmdldCwgaW5kZXgpOyB9LCBkZWZhdWx0VmFsdWU6IFwiXCIgfSwgcmVuZGVyQW5zd2VycyhxdWVzdGlvbi5hbnN3ZXJzKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBzdWJtaXRBbnN3ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhbnN3ZXJzT2JqID0geyBhbnN3ZXJzOiBhbnN3ZXJzIH07XHJcbiAgICAgICAgZmV0Y2goXCJodHRwczovL3VzLWNlbnRyYWwxLWZhc2hpb25hYmxlLXR5cGVzY3JpcHQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9wb3N0L1wiICsgcG9zdElkICsgXCIvYW5zd2VyXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB1c2VyT2JqLnRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhbnN3ZXJzT2JqKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCB7IGZ1bGxXaWR0aDogdHJ1ZSB9LCBxdWVzdGlvbnMgPyByZW5kZXJRdWVzdGlvbnMoKSA6IG51bGwpKSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2wsIHsgZnVsbFdpZHRoOiB0cnVlIH0sIHBvc3RJZCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3VibWl0QW5zd2VycygpOyB9IH0sIFwiU3VibWl0XCIpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwiQ2xlYXJcIikpKSA6IG51bGwpKSkpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9