(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/Pages/PostsPage/IndividualPost.tsx":
/*!************************************************!*\
  !*** ./src/Pages/PostsPage/IndividualPost.tsx ***!
  \************************************************/
/*! exports provided: IndividualPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPost", function() { return IndividualPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");

//material components


//victory components (graph)

var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    card: {
        marginLeft: "10px",
        marginTop: "10px",
    },
});
var IndividualPost = function () {
    var classes = styles();
    // const data = [
    //   { answers: 1, responses: 13000, label: 13000 },
    //   { answers: 2, responses: 16500, label: 16500 },
    //   { answers: 3, responses: 14250, label: 14250 },
    //   { answers: 4, responses: 19000, label: 19000 },
    // ];
    var data = [
        {
            question: "what are animals",
            answers: [
                { answers: 1, responses: 13000, label: 13000 },
                { answers: 2, responses: 16500, label: 16500 },
                { answers: 3, responses: 14250, label: 14250 },
                { answers: 4, responses: 19000, label: 19000 },
            ],
        },
        {
            question: "what the frick frack",
            answers: [
                { answers: 1, responses: 13000, label: 13000 },
                { answers: 2, responses: 16500, label: 16500 },
                { answers: 3, responses: 14250, label: 14250 },
                { answers: 4, responses: 19000, label: 19000 },
            ],
        },
        {
            question: "what are animals",
            answers: [
                { answers: 1, responses: 13000, label: 13000 },
                { answers: 2, responses: 16500, label: 16500 },
                { answers: 3, responses: 14250, label: 14250 },
                { answers: 4, responses: 19000, label: 19000 },
            ],
        },
        {
            question: "what the frick frack",
            answers: [
                { answers: 1, responses: 13000, label: 13000 },
                { answers: 2, responses: 16500, label: 16500 },
                { answers: 3, responses: 14250, label: 14250 },
                { answers: 4, responses: 19000, label: 19000 },
            ],
        },
    ];
    var renderGraph = function (questionNumber) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { variant: "h6" }, data[questionNumber].question),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_3__["VictoryChart"]
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            , { 
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding: 20 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_3__["VictoryAxis"]
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                , { 
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues: [1, 2, 3, 4], tickFormat: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"] }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_3__["VictoryAxis"], { dependentAxis: true, 
                    // tickFormat specifies how ticks should be displayed
                    tickFormat: function (x) { return "" + x; } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_3__["VictoryBar"], { data: data[questionNumber].answers, x: "answers", y: "responses" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_3__["VictoryLabel"], null))));
    };
    var renderResponses = function () {
        return data.map(function (question, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { item: true, xs: 6 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], { className: classes.card },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { container: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { item: true, xs: 8 }, renderGraph(index))))));
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderResponses());
};


/***/ }),

/***/ "./src/Pages/PostsPage/UserPosts.tsx":
/*!*******************************************!*\
  !*** ./src/Pages/PostsPage/UserPosts.tsx ***!
  \*******************************************/
/*! exports provided: UserPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPosts", function() { return UserPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _IndividualPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndividualPost */ "./src/Pages/PostsPage/IndividualPost.tsx");

//material components


//created components

var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    card: {
        //maxWidth: "20%",
        marginLeft: "10px",
        marginTop: "10px",
    },
    media: {
        height: 140,
    },
});
var UserPosts = function () {
    //cardId should change to a number if a card is selected
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), cardId = _a[0], clickCard = _a[1];
    var classes = styles();
    //() => clickCard(id)
    var renderCard = function (id) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { item: true, xs: 12, sm: 4, md: 3 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], { className: classes.card },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], { className: classes.media, image: "https://picsum.photos/id/1018/1000/600/", title: "Contemplative Reptile" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { gutterBottom: true, variant: "h5", component: "h2" }, "Title of post can go here"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], { variant: "body2", color: "textSecondary", component: "p" }, "Posted time can go here. Amount of responses can go here."))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { size: "small", color: "primary", onClick: function () { return clickCard(id); } }, "View Responses"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { size: "small", color: "primary" }, "Delete")))));
    };
    //map through cards and render
    var renderCards = function () {
        var randomArray = [1, 2, 3, 4, 5, 6, 7];
        return randomArray.map(function (index) {
            return renderCard(randomArray[index]);
        });
    };
    var renderIndividualPost = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndividualPost__WEBPACK_IMPORTED_MODULE_3__["IndividualPost"], null);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { container: true }, cardId === 0 ? renderCards() : renderIndividualPost()));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGFnZXMvUG9zdHNQYWdlL0luZGl2aWR1YWxQb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZXMvUG9zdHNQYWdlL1VzZXJQb3N0cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzFCO0FBQ3NEO0FBQ0s7QUFDM0Q7QUFDOEU7QUFDOUUsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBLFVBQVUsNkNBQTZDO0FBQ3ZELFVBQVUsNkNBQTZDO0FBQ3ZELFVBQVUsNkNBQTZDO0FBQ3ZELFVBQVUsNkNBQTZDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RCxpQkFBaUIsNkNBQTZDO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RCxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUE2QztBQUM5RCxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQTZDO0FBQzlELGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RCxpQkFBaUIsNkNBQTZDO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUssZUFBZSw0Q0FBSztBQUN6QyxZQUFZLDRDQUFLLGVBQWUsNERBQVUsR0FBRyxnQkFBZ0I7QUFDN0QsWUFBWSw0Q0FBSyxlQUFlLG9EQUFZO0FBQzVDO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxnQkFBZ0IsNENBQUssZUFBZSxtREFBVztBQUMvQztBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHLGdCQUFnQiw0Q0FBSyxlQUFlLG1EQUFXLEdBQUc7QUFDbEQ7QUFDQSw4Q0FBOEMsZUFBZSxFQUFFLEVBQUU7QUFDakUsZ0JBQWdCLDRDQUFLLGVBQWUsa0RBQVUsR0FBRyxtRUFBbUU7QUFDcEgsZ0JBQWdCLDRDQUFLLGVBQWUsb0RBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLGVBQWUsc0RBQUksR0FBRyxvQkFBb0I7QUFDbkUsZ0JBQWdCLDRDQUFLLGVBQWUsc0RBQUksR0FBRywwQkFBMEI7QUFDckUsb0JBQW9CLDRDQUFLLGVBQWUsc0RBQUksR0FBRyxrQkFBa0I7QUFDakUsd0JBQXdCLDRDQUFLLGVBQWUsc0RBQUksR0FBRyxvQkFBb0I7QUFDdkUsU0FBUztBQUNUO0FBQ0EsV0FBVyw0Q0FBSyxlQUFlLDRDQUFLO0FBQ3BDOzs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ3hDO0FBQ3NEO0FBQ21FO0FBQ3pIO0FBQ2tEO0FBQ2xELGFBQWEsMkVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUDtBQUNBLGFBQWEsc0RBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLLGVBQWUsc0RBQUksR0FBRyxtQ0FBbUM7QUFDOUUsWUFBWSw0Q0FBSyxlQUFlLHNEQUFJLEdBQUcsMEJBQTBCO0FBQ2pFLGdCQUFnQiw0Q0FBSyxlQUFlLGdFQUFjO0FBQ2xELG9CQUFvQiw0Q0FBSyxlQUFlLDJEQUFTLEdBQUcsNkdBQTZHO0FBQ2pLLG9CQUFvQiw0Q0FBSyxlQUFlLDZEQUFXO0FBQ25ELHdCQUF3Qiw0Q0FBSyxlQUFlLDREQUFVLEdBQUcscURBQXFEO0FBQzlHLHdCQUF3Qiw0Q0FBSyxlQUFlLDREQUFVLEdBQUcsMkRBQTJEO0FBQ3BILGdCQUFnQiw0Q0FBSyxlQUFlLDZEQUFXO0FBQy9DLG9CQUFvQiw0Q0FBSyxlQUFlLHdEQUFNLEdBQUcsd0RBQXdELHNCQUFzQixFQUFFLEVBQUU7QUFDbkksb0JBQW9CLDRDQUFLLGVBQWUsd0RBQU0sR0FBRyxrQ0FBa0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLDRDQUFLLGVBQWUsOERBQWM7QUFDakQ7QUFDQSxZQUFZLDRDQUFLLGVBQWUsc0RBQUksR0FBRyxrQkFBa0I7QUFDekQiLCJmaWxlIjoiNC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL21hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL3ZpY3RvcnkgY29tcG9uZW50cyAoZ3JhcGgpXHJcbmltcG9ydCB7IFZpY3RvcnlCYXIsIFZpY3RvcnlBeGlzLCBWaWN0b3J5Q2hhcnQsIFZpY3RvcnlMYWJlbCB9IGZyb20gXCJ2aWN0b3J5XCI7XHJcbnZhciBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCB2YXIgSW5kaXZpZHVhbFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IHN0eWxlcygpO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IFtcclxuICAgIC8vICAgeyBhbnN3ZXJzOiAxLCByZXNwb25zZXM6IDEzMDAwLCBsYWJlbDogMTMwMDAgfSxcclxuICAgIC8vICAgeyBhbnN3ZXJzOiAyLCByZXNwb25zZXM6IDE2NTAwLCBsYWJlbDogMTY1MDAgfSxcclxuICAgIC8vICAgeyBhbnN3ZXJzOiAzLCByZXNwb25zZXM6IDE0MjUwLCBsYWJlbDogMTQyNTAgfSxcclxuICAgIC8vICAgeyBhbnN3ZXJzOiA0LCByZXNwb25zZXM6IDE5MDAwLCBsYWJlbDogMTkwMDAgfSxcclxuICAgIC8vIF07XHJcbiAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBcIndoYXQgYXJlIGFuaW1hbHNcIixcclxuICAgICAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiAxLCByZXNwb25zZXM6IDEzMDAwLCBsYWJlbDogMTMwMDAgfSxcclxuICAgICAgICAgICAgICAgIHsgYW5zd2VyczogMiwgcmVzcG9uc2VzOiAxNjUwMCwgbGFiZWw6IDE2NTAwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDMsIHJlc3BvbnNlczogMTQyNTAsIGxhYmVsOiAxNDI1MCB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiA0LCByZXNwb25zZXM6IDE5MDAwLCBsYWJlbDogMTkwMDAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb246IFwid2hhdCB0aGUgZnJpY2sgZnJhY2tcIixcclxuICAgICAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiAxLCByZXNwb25zZXM6IDEzMDAwLCBsYWJlbDogMTMwMDAgfSxcclxuICAgICAgICAgICAgICAgIHsgYW5zd2VyczogMiwgcmVzcG9uc2VzOiAxNjUwMCwgbGFiZWw6IDE2NTAwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDMsIHJlc3BvbnNlczogMTQyNTAsIGxhYmVsOiAxNDI1MCB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiA0LCByZXNwb25zZXM6IDE5MDAwLCBsYWJlbDogMTkwMDAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb246IFwid2hhdCBhcmUgYW5pbWFsc1wiLFxyXG4gICAgICAgICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDEsIHJlc3BvbnNlczogMTMwMDAsIGxhYmVsOiAxMzAwMCB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiAyLCByZXNwb25zZXM6IDE2NTAwLCBsYWJlbDogMTY1MDAgfSxcclxuICAgICAgICAgICAgICAgIHsgYW5zd2VyczogMywgcmVzcG9uc2VzOiAxNDI1MCwgbGFiZWw6IDE0MjUwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDQsIHJlc3BvbnNlczogMTkwMDAsIGxhYmVsOiAxOTAwMCB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogXCJ3aGF0IHRoZSBmcmljayBmcmFja1wiLFxyXG4gICAgICAgICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDEsIHJlc3BvbnNlczogMTMwMDAsIGxhYmVsOiAxMzAwMCB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbnN3ZXJzOiAyLCByZXNwb25zZXM6IDE2NTAwLCBsYWJlbDogMTY1MDAgfSxcclxuICAgICAgICAgICAgICAgIHsgYW5zd2VyczogMywgcmVzcG9uc2VzOiAxNDI1MCwgbGFiZWw6IDE0MjUwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFuc3dlcnM6IDQsIHJlc3BvbnNlczogMTkwMDAsIGxhYmVsOiAxOTAwMCB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgdmFyIHJlbmRlckdyYXBoID0gZnVuY3Rpb24gKHF1ZXN0aW9uTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNlwiIH0sIGRhdGFbcXVlc3Rpb25OdW1iZXJdLnF1ZXN0aW9uKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChWaWN0b3J5Q2hhcnRcclxuICAgICAgICAgICAgLy8gZG9tYWluUGFkZGluZyB3aWxsIGFkZCBzcGFjZSB0byBlYWNoIHNpZGUgb2YgVmljdG9yeUJhciB0b1xyXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGl0IGZyb20gb3ZlcmxhcHBpbmcgdGhlIGF4aXNcclxuICAgICAgICAgICAgLCB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZG9tYWluUGFkZGluZyB3aWxsIGFkZCBzcGFjZSB0byBlYWNoIHNpZGUgb2YgVmljdG9yeUJhciB0b1xyXG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCBpdCBmcm9tIG92ZXJsYXBwaW5nIHRoZSBheGlzXHJcbiAgICAgICAgICAgICAgICBkb21haW5QYWRkaW5nOiAyMCB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChWaWN0b3J5QXhpc1xyXG4gICAgICAgICAgICAgICAgLy8gdGlja1ZhbHVlcyBzcGVjaWZpZXMgYm90aCB0aGUgbnVtYmVyIG9mIHRpY2tzIGFuZCB3aGVyZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhleSBhcmUgcGxhY2VkIG9uIHRoZSBheGlzXHJcbiAgICAgICAgICAgICAgICAsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGlja1ZhbHVlcyBzcGVjaWZpZXMgYm90aCB0aGUgbnVtYmVyIG9mIHRpY2tzIGFuZCB3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXkgYXJlIHBsYWNlZCBvbiB0aGUgYXhpc1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tWYWx1ZXM6IFsxLCAyLCAzLCA0XSwgdGlja0Zvcm1hdDogW1wiQW5zd2VyIDFcIiwgXCJBbnN3ZXIgMlwiLCBcIkFuc3dlciAzXCIsIFwiQW5zd2VyIDRcIl0gfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZpY3RvcnlBeGlzLCB7IGRlcGVuZGVudEF4aXM6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpY2tGb3JtYXQgc3BlY2lmaWVzIGhvdyB0aWNrcyBzaG91bGQgYmUgZGlzcGxheWVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja0Zvcm1hdDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIFwiXCIgKyB4OyB9IH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChWaWN0b3J5QmFyLCB7IGRhdGE6IGRhdGFbcXVlc3Rpb25OdW1iZXJdLmFuc3dlcnMsIHg6IFwiYW5zd2Vyc1wiLCB5OiBcInJlc3BvbnNlc1wiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChWaWN0b3J5TGFiZWwsIG51bGwpKSkpO1xyXG4gICAgfTtcclxuICAgIHZhciByZW5kZXJSZXNwb25zZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChxdWVzdGlvbiwgaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDYgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBjbGFzc05hbWU6IGNsYXNzZXMuY2FyZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBjb250YWluZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGl0ZW06IHRydWUsIHhzOiA4IH0sIHJlbmRlckdyYXBoKGluZGV4KSkpKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCByZW5kZXJSZXNwb25zZXMoKSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL21hdGVyaWFsIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHksIEdyaWQsIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vY3JlYXRlZCBjb21wb25lbnRzXHJcbmltcG9ydCB7IEluZGl2aWR1YWxQb3N0IH0gZnJvbSBcIi4vSW5kaXZpZHVhbFBvc3RcIjtcclxudmFyIHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIC8vbWF4V2lkdGg6IFwiMjAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICAgIGhlaWdodDogMTQwLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCB2YXIgVXNlclBvc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy9jYXJkSWQgc2hvdWxkIGNoYW5nZSB0byBhIG51bWJlciBpZiBhIGNhcmQgaXMgc2VsZWN0ZWRcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKDApLCBjYXJkSWQgPSBfYVswXSwgY2xpY2tDYXJkID0gX2FbMV07XHJcbiAgICB2YXIgY2xhc3NlcyA9IHN0eWxlcygpO1xyXG4gICAgLy8oKSA9PiBjbGlja0NhcmQoaWQpXHJcbiAgICB2YXIgcmVuZGVyQ2FyZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDQsIG1kOiAzIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBjbGFzc05hbWU6IGNsYXNzZXMuY2FyZCB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQWN0aW9uQXJlYSwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRNZWRpYSwgeyBjbGFzc05hbWU6IGNsYXNzZXMubWVkaWEsIGltYWdlOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzEwMDAvNjAwL1wiLCB0aXRsZTogXCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIiB9KSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRDb250ZW50LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgZ3V0dGVyQm90dG9tOiB0cnVlLCB2YXJpYW50OiBcImg1XCIsIGNvbXBvbmVudDogXCJoMlwiIH0sIFwiVGl0bGUgb2YgcG9zdCBjYW4gZ28gaGVyZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTJcIiwgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiLCBjb21wb25lbnQ6IFwicFwiIH0sIFwiUG9zdGVkIHRpbWUgY2FuIGdvIGhlcmUuIEFtb3VudCBvZiByZXNwb25zZXMgY2FuIGdvIGhlcmUuXCIpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmRBY3Rpb25zLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwic21hbGxcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGlja0NhcmQoaWQpOyB9IH0sIFwiVmlldyBSZXNwb25zZXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJzbWFsbFwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSwgXCJEZWxldGVcIikpKSkpO1xyXG4gICAgfTtcclxuICAgIC8vbWFwIHRocm91Z2ggY2FyZHMgYW5kIHJlbmRlclxyXG4gICAgdmFyIHJlbmRlckNhcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kb21BcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcclxuICAgICAgICByZXR1cm4gcmFuZG9tQXJyYXkubWFwKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyQ2FyZChyYW5kb21BcnJheVtpbmRleF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciByZW5kZXJJbmRpdmlkdWFsUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpdmlkdWFsUG9zdCwgbnVsbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgY29udGFpbmVyOiB0cnVlIH0sIGNhcmRJZCA9PT0gMCA/IHJlbmRlckNhcmRzKCkgOiByZW5kZXJJbmRpdmlkdWFsUG9zdCgpKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=