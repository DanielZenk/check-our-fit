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
            .then(function (result) {
            console.log(result);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true }, questions ? renderQuestions() : null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], { fullWidth: true }, postId ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: function () { return submitAnswers(); } }, "Submit"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Clear"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Skip"))) : null))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9RdWVzdGlvbm5haXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDcEQ7QUFDc0Q7QUFDdUI7QUFDN0U7QUFDcUQ7QUFDckQsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0EsYUFBYSxzREFBUTtBQUNyQixrQkFBa0Isd0RBQVUsQ0FBQyxnRUFBVztBQUN4QztBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLGVBQWUsMERBQVEsR0FBRyxpQ0FBaUM7QUFDcEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLGVBQWUsMkRBQVMsR0FBRyw4R0FBOEcsc0NBQXNDLEVBQUUsb0JBQW9CO0FBQzlOLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVksNENBQUssZUFBZSw0Q0FBSztBQUNyQyxRQUFRLDRDQUFLO0FBQ2IsWUFBWSw0Q0FBSyxlQUFlLDZEQUFXLEdBQUcsa0JBQWtCO0FBQ2hFLFFBQVEsNENBQUs7QUFDYixZQUFZLDRDQUFLLGVBQWUsNkRBQVcsR0FBRyxrQkFBa0IsWUFBWSw0Q0FBSyxlQUFlLDRDQUFLO0FBQ3JHLGdCQUFnQiw0Q0FBSyxlQUFlLHdEQUFNLEdBQUcsdUJBQXVCLHdCQUF3QixFQUFFLEVBQUU7QUFDaEcsZ0JBQWdCLDRDQUFLLGVBQWUsd0RBQU07QUFDMUMsZ0JBQWdCLDRDQUFLLGVBQWUsd0RBQU07QUFDMUMiLCJmaWxlIjoiMC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vbWF0ZXJpYWwgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBUZXh0RmllbGQsIE1lbnVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vdXNlciBjb250ZXh0XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvVXNlckNvbnRleHRcIjtcclxudmFyIHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcXVlc3Rpb246IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCIsXHJcbiAgICB9LFxyXG59KTtcclxuZXhwb3J0IHZhciBRdWVzdGlvbm5haXJlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgcXVlc3Rpb25zID0gX2EucXVlc3Rpb25zLCBwb3N0SWQgPSBfYS5wb3N0SWQ7XHJcbiAgICB2YXIgY2xhc3NlcyA9IHN0eWxlcygpO1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUoW10pLCBhbnN3ZXJzID0gX2JbMF0sIHNldEFuc3dlcnMgPSBfYlsxXTtcclxuICAgIHZhciB1c2VyT2JqID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICB2YXIgcmVuZGVyQW5zd2VycyA9IGZ1bmN0aW9uIChhbnN3ZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGFuc3dlcnMpLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogZW50cnlbMF0sIHZhbHVlOiBlbnRyeVswXSB9LCBlbnRyeVsxXS5hbnN3ZXJUZXh0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldE9uZUFuc3dlciA9IGZ1bmN0aW9uIChlLCBpbmRleCkge1xyXG4gICAgICAgIHZhciB0ZW1wID0gYW5zd2VycztcclxuICAgICAgICB0ZW1wW2luZGV4XSA9IHBhcnNlSW50KGUudmFsdWUsIDEwKTtcclxuICAgICAgICBzZXRBbnN3ZXJzKHRlbXApO1xyXG4gICAgfTtcclxuICAgIHZhciByZW5kZXJRdWVzdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFxdWVzdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zLm1hcChmdW5jdGlvbiAocXVlc3Rpb24sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsga2V5OiBpbmRleCwgc2VsZWN0OiB0cnVlLCBjbGFzc05hbWU6IGNsYXNzZXMucXVlc3Rpb24sIGxhYmVsOiBxdWVzdGlvbi5xdWVzdGlvblRleHQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0T25lQW5zd2VyKGUudGFyZ2V0LCBpbmRleCk7IH0sIGRlZmF1bHRWYWx1ZTogXCJcIiB9LCByZW5kZXJBbnN3ZXJzKHF1ZXN0aW9uLmFuc3dlcnMpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN1Ym1pdEFuc3dlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlcnNPYmogPSB7IGFuc3dlcnM6IGFuc3dlcnMgfTtcclxuICAgICAgICBmZXRjaChcImh0dHBzOi8vdXMtY2VudHJhbDEtZmFzaGlvbmFibGUtdHlwZXNjcmlwdC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL3Bvc3QvXCIgKyBwb3N0SWQgKyBcIi9hbnN3ZXJcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHVzZXJPYmoudG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFuc3dlcnNPYmopLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgeyBmdWxsV2lkdGg6IHRydWUgfSwgcXVlc3Rpb25zID8gcmVuZGVyUXVlc3Rpb25zKCkgOiBudWxsKSksXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCB7IGZ1bGxXaWR0aDogdHJ1ZSB9LCBwb3N0SWQgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Ym1pdEFuc3dlcnMoKTsgfSB9LCBcIlN1Ym1pdFwiKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIkNsZWFyXCIpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwiU2tpcFwiKSkpIDogbnVsbCkpKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=