(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/Components/ImageCarousel.tsx":
/*!******************************************!*\
  !*** ./src/Components/ImageCarousel.tsx ***!
  \******************************************/
/*! exports provided: ImageCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarousel", function() { return ImageCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/es/index.js");

//material components
//import { makeStyles } from "@material-ui/core/styles";
//carousel components


//const styles = makeStyles({});
var ImageCarousel = function (_a) {
    //const classes = styles();
    var images = _a.images;
    var renderImages = function () {
        return images.map(function (imgSrc) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: imgSrc, alt: "temp" })));
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], null, renderImages());
};


/***/ }),

/***/ "./src/Components/PostCard.tsx":
/*!*************************************!*\
  !*** ./src/Components/PostCard.tsx ***!
  \*************************************/
/*! exports provided: PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return PostCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ImageCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageCarousel */ "./src/Components/ImageCarousel.tsx");

//material components




//created components

var Questionnaire = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Questionnaire */ "./src/Components/Questionnaire.tsx")).then(function (_a) {
        var Questionnaire = _a.Questionnaire;
        return ({
            default: Questionnaire,
        });
    });
});
var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
    card: {
        width: "95%",
        margin: "auto",
        marginBottom: "5px",
    },
    expandIcon: {
        marginLeft: "85%",
    },
});
var PostCard = function (_a) {
    var post = _a.post;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), expanded = _b[0], toggleExpansion = _b[1];
    var imagesArray = [
        "https://picsum.photos/id/1018/1000/600/",
        "https://picsum.photos/id/1018/1000/600/",
        "https://picsum.photos/id/1018/1000/600/",
    ];
    var classes = styles();
    var renderCard = function () {
        if (!post) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], { className: classes.card },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], { avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], { alt: post.handle, src: post.userImage }), title: "Need to add title", subheader: post.createdAt }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageCarousel__WEBPACK_IMPORTED_MODULE_5__["ImageCarousel"], { images: imagesArray })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], { disableSpacing: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { className: classes.expandIcon, onClick: function () { return toggleExpansion(!expanded); } }, expanded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, null))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], { in: expanded },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Questions being loaded...") },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Questionnaire, { questions: post.questions }))))));
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderCard());
};


/***/ }),

/***/ "./src/Pages/BrowsePage/Browse.tsx":
/*!*****************************************!*\
  !*** ./src/Pages/BrowsePage/Browse.tsx ***!
  \*****************************************/
/*! exports provided: Browse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browse", function() { return Browse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/PostCard */ "./src/Components/PostCard.tsx");

//material components
// import { Paper, Grid } from "@material-ui/core";

//created components
// import { ImageCarousel } from "../../Components/ImageCarousel";
// import { Questionnaire } from "../../Components/Questionnaire";
// import { UserCard } from "../../Components/UserCard";

var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    root: {
        flexGrow: 1,
    },
    leftPaper: {
        marginTop: "5px",
        marginLeft: "4px",
        height: "97%",
    },
    rightPaper: {
        marginTop: "5px",
        marginLeft: "4px",
        height: "97%",
    },
});
var Browse = function () {
    var classes = styles();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), posts = _a[0], setPosts = _a[1];
    // const [currPost, setCurrPost] = useState({});
    // componentDidMount() {
    //   axios.get("/posts")
    // }
    // const updateCurrPost = () => {
    //   if (posts) setCurrPost(posts[0]);
    // };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!posts) {
            fetch("/posts")
                .then(function (res) { return res.json(); })
                .then(function (result) {
                setPosts(result);
                console.log(posts);
            });
        }
    });
    var renderPosts = function () {
        if (!posts) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Loading posts...");
        }
        return posts.map(function (post) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_PostCard__WEBPACK_IMPORTED_MODULE_2__["PostCard"], { post: post });
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classes.root }, renderPosts());
};
/*
<Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} md={8}>
          <Paper className={classes.leftPaper}>
            <ImageCarousel images={imagesArray} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.rightPaper}>
            {posts ? (
              <>
                <UserCard
                  userImage={posts[0].userImage}
                  createdAt={posts[0].createdAt}
                />
                <Questionnaire questions={posts[0].questions} />
              </>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
*/


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbWFnZUNhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qb3N0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL0Jyb3dzZVBhZ2UvQnJvd3NlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDMUI7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDK0Q7QUFDVjtBQUNyRCw4QkFBOEI7QUFDdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBSztBQUN6QixnQkFBZ0IsNENBQUssdUJBQXVCLDJCQUEyQjtBQUN2RSxTQUFTO0FBQ1Q7QUFDQSxXQUFXLDRDQUFLLGVBQWUsa0VBQVE7QUFDdkM7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNsRDtBQUM4RztBQUN4RDtBQUNDO0FBQ0E7QUFDdkQ7QUFDZ0Q7QUFDaEQsb0JBQW9CLDRDQUFLO0FBQ3pCLFdBQVcsMElBQXlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNELGFBQWEsMkVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUDtBQUNBLGFBQWEsc0RBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUssZUFBZSxzREFBSSxHQUFHLDBCQUEwQjtBQUNyRSxZQUFZLDRDQUFLLGVBQWUsNERBQVUsR0FBRyxTQUFTLDRDQUFLLGVBQWUsd0RBQU0sR0FBRyx3Q0FBd0MsMERBQTBEO0FBQ3JMLFlBQVksNENBQUssZUFBZSw2REFBVztBQUMzQyxnQkFBZ0IsNENBQUssZUFBZSw0REFBYSxHQUFHLHNCQUFzQjtBQUMxRSxZQUFZLDRDQUFLLGVBQWUsNkRBQVcsR0FBRyx1QkFBdUI7QUFDckUsZ0JBQWdCLDRDQUFLLGVBQWUsNERBQVUsR0FBRyxzREFBc0QsbUNBQW1DLEVBQUUsRUFBRSxhQUFhLDRDQUFLLGVBQWUsb0VBQVUsVUFBVSw0Q0FBSyxlQUFlLG9FQUFVO0FBQ2pPLFlBQVksNENBQUssZUFBZSwwREFBUSxHQUFHLGVBQWU7QUFDMUQsZ0JBQWdCLDRDQUFLLGVBQWUsNkRBQVc7QUFDL0Msb0JBQW9CLDRDQUFLLGVBQWUsOENBQVEsR0FBRyxXQUFXLDRDQUFLLHlEQUF5RDtBQUM1SCx3QkFBd0IsNENBQUssK0JBQStCLDRCQUE0QjtBQUN4RjtBQUNBLFdBQVcsNENBQUssZUFBZSw0Q0FBSztBQUNwQzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDbkQ7QUFDQSxXQUFXLGNBQWM7QUFDNkI7QUFDdEQ7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFdBQVc7QUFDK0I7QUFDckQsYUFBYSwyRUFBVTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDTTtBQUNQO0FBQ0EsYUFBYSxzREFBUTtBQUNyQixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSyxlQUFlLDZEQUFRLEdBQUcsYUFBYTtBQUMvRCxTQUFTO0FBQ1Q7QUFDQSxXQUFXLDRDQUFLLHVCQUF1QiwwQkFBMEI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEdBQUcsS0FBSyxFQUFFO0FBQ2pDLDRCQUE0QixrQkFBa0I7QUFDOUMsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBLHVCQUF1QixHQUFHLEtBQUssRUFBRTtBQUNqQyw0QkFBNEIsbUJBQW1CO0FBQy9DLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9tYXRlcmlhbCBjb21wb25lbnRzXHJcbi8vaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy9jYXJvdXNlbCBjb21wb25lbnRzXHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcclxuLy9jb25zdCBzdHlsZXMgPSBtYWtlU3R5bGVzKHt9KTtcclxuZXhwb3J0IHZhciBJbWFnZUNhcm91c2VsID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAvL2NvbnN0IGNsYXNzZXMgPSBzdHlsZXMoKTtcclxuICAgIHZhciBpbWFnZXMgPSBfYS5pbWFnZXM7XHJcbiAgICB2YXIgcmVuZGVySW1hZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWdTcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpbWdTcmMsIGFsdDogXCJ0ZW1wXCIgfSkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJvdXNlbCwgbnVsbCwgcmVuZGVySW1hZ2VzKCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vbWF0ZXJpYWwgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIENhcmRIZWFkZXIsIENhcmRDb250ZW50LCBDYXJkQWN0aW9ucywgSWNvbkJ1dHRvbiwgQ29sbGFwc2UsIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuLy9jcmVhdGVkIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW1hZ2VDYXJvdXNlbCB9IGZyb20gXCIuL0ltYWdlQ2Fyb3VzZWxcIjtcclxudmFyIFF1ZXN0aW9ubmFpcmUgPSBSZWFjdC5sYXp5KGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuL1F1ZXN0aW9ubmFpcmVcIikudGhlbihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgUXVlc3Rpb25uYWlyZSA9IF9hLlF1ZXN0aW9ubmFpcmU7XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFF1ZXN0aW9ubmFpcmUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbnZhciBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICB3aWR0aDogXCI5NSVcIixcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgIH0sXHJcbiAgICBleHBhbmRJY29uOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCI4NSVcIixcclxuICAgIH0sXHJcbn0pO1xyXG5leHBvcnQgdmFyIFBvc3RDYXJkID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgcG9zdCA9IF9hLnBvc3Q7XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGV4cGFuZGVkID0gX2JbMF0sIHRvZ2dsZUV4cGFuc2lvbiA9IF9iWzFdO1xyXG4gICAgdmFyIGltYWdlc0FycmF5ID0gW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMTAwMC82MDAvXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOC8xMDAwLzYwMC9cIixcclxuICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzEwMDAvNjAwL1wiLFxyXG4gICAgXTtcclxuICAgIHZhciBjbGFzc2VzID0gc3R5bGVzKCk7XHJcbiAgICB2YXIgcmVuZGVyQ2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXBvc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5jYXJkIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZEhlYWRlciwgeyBhdmF0YXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCB7IGFsdDogcG9zdC5oYW5kbGUsIHNyYzogcG9zdC51c2VySW1hZ2UgfSksIHRpdGxlOiBcIk5lZWQgdG8gYWRkIHRpdGxlXCIsIHN1YmhlYWRlcjogcG9zdC5jcmVhdGVkQXQgfSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRlbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlQ2Fyb3VzZWwsIHsgaW1hZ2VzOiBpbWFnZXNBcnJheSB9KSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZEFjdGlvbnMsIHsgZGlzYWJsZVNwYWNpbmc6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBjbGFzc05hbWU6IGNsYXNzZXMuZXhwYW5kSWNvbiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlRXhwYW5zaW9uKCFleHBhbmRlZCk7IH0gfSwgZXhwYW5kZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cGFuZExlc3MsIG51bGwpIDogUmVhY3QuY3JlYXRlRWxlbWVudChFeHBhbmRNb3JlLCBudWxsKSkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbGxhcHNlLCB7IGluOiBleHBhbmRlZCB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkQ29udGVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1c3BlbnNlLCB7IGZhbGxiYWNrOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCJRdWVzdGlvbnMgYmVpbmcgbG9hZGVkLi4uXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25uYWlyZSwgeyBxdWVzdGlvbnM6IHBvc3QucXVlc3Rpb25zIH0pKSkpKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHJlbmRlckNhcmQoKSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vbWF0ZXJpYWwgY29tcG9uZW50c1xyXG4vLyBpbXBvcnQgeyBQYXBlciwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vL2NyZWF0ZWQgY29tcG9uZW50c1xyXG4vLyBpbXBvcnQgeyBJbWFnZUNhcm91c2VsIH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbFwiO1xyXG4vLyBpbXBvcnQgeyBRdWVzdGlvbm5haXJlIH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvUXVlc3Rpb25uYWlyZVwiO1xyXG4vLyBpbXBvcnQgeyBVc2VyQ2FyZCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1VzZXJDYXJkXCI7XHJcbmltcG9ydCB7IFBvc3RDYXJkIH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxudmFyIHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIGxlZnRQYXBlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCI1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjRweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI5NyVcIixcclxuICAgIH0sXHJcbiAgICByaWdodFBhcGVyOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjVweFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjk3JVwiLFxyXG4gICAgfSxcclxufSk7XHJcbmV4cG9ydCB2YXIgQnJvd3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBzdHlsZXMoKTtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKHVuZGVmaW5lZCksIHBvc3RzID0gX2FbMF0sIHNldFBvc3RzID0gX2FbMV07XHJcbiAgICAvLyBjb25zdCBbY3VyclBvc3QsIHNldEN1cnJQb3N0XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gICBheGlvcy5nZXQoXCIvcG9zdHNcIilcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnN0IHVwZGF0ZUN1cnJQb3N0ID0gKCkgPT4ge1xyXG4gICAgLy8gICBpZiAocG9zdHMpIHNldEN1cnJQb3N0KHBvc3RzWzBdKTtcclxuICAgIC8vIH07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghcG9zdHMpIHtcclxuICAgICAgICAgICAgZmV0Y2goXCIvcG9zdHNcIilcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciByZW5kZXJQb3N0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXBvc3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJMb2FkaW5nIHBvc3RzLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFBvc3RDYXJkLCB7IHBvc3Q6IHBvc3QgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMucm9vdCB9LCByZW5kZXJQb3N0cygpKTtcclxufTtcclxuLypcclxuPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRQYXBlcn0+XHJcbiAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsIGltYWdlcz17aW1hZ2VzQXJyYXl9IC8+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodFBhcGVyfT5cclxuICAgICAgICAgICAge3Bvc3RzID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgICAgICAgICAgdXNlckltYWdlPXtwb3N0c1swXS51c2VySW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17cG9zdHNbMF0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbm5haXJlIHF1ZXN0aW9ucz17cG9zdHNbMF0ucXVlc3Rpb25zfSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=