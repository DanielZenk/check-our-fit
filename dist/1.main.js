(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/@material-ui/icons/ExpandLess.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandLess.js ***!
  \*******************************************************/
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
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
  \*******************************************************/
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            innerRef = _props.innerRef,
            tolerance = _props.tolerance,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/CSSTranslate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/CSSTranslate.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (position, axis) {
  var positionCss = axis === 'horizontal' ? [position, 0, 0] : [0, position, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/components/Carousel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/components/Carousel.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cssClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/es/cssClasses.js");
/* harmony import */ var _CSSTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/es/CSSTranslate.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Thumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Thumbs */ "./node_modules/react-responsive-carousel/lib/es/components/Thumbs.js");
/* harmony import */ var _customPropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customPropTypes */ "./node_modules/react-responsive-carousel/lib/es/customPropTypes.js");
/* harmony import */ var _shims_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shims/document */ "./node_modules/react-responsive-carousel/lib/es/shims/document.js");
/* harmony import */ var _shims_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shims/window */ "./node_modules/react-responsive-carousel/lib/es/shims/window.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var noop = function noop() {};

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (!_this.state.autoPlay || react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(_this.props.children) <= 1) {
        return;
      }

      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (!_this.state.autoPlay) {
        return;
      }

      clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      });

      _this.clearAutoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      });

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (Object(_shims_document__WEBPACK_IMPORTED_MODULE_8__["default"])().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains(Object(_shims_document__WEBPACK_IMPORTED_MODULE_8__["default"])().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];
      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize
        };
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.selectItem({
        selectedItem: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);

      _this.clearAutoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false
      });

      _this.props.onSwipeEnd(event);

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var isHorizontal = _this.props.axis === 'horizontal';
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(_this.props.children);
      var initialBoundry = 0;

      var currentPosition = _this.getPosition(_this.state.selectedItem);

      var finalBoundry = _this.props.infiniteLoop ? _this.getPosition(childrenLength - 1) - 100 : _this.getPosition(childrenLength - 1);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }

      var position = currentPosition + 100 / (_this.state.itemSize / handledDelta);

      if (_this.props.infiniteLoop) {
        // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
        // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
        if (_this.state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (_this.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }

      position += '%';

      _this.setPosition(position); // allows scroll if the swipe was within the tolerance


      var hasMoved = Math.abs(axisDelta) > _this.props.swipeScrollTolerance;

      if (hasMoved && !_this.state.cancelClick) {
        _this.setState({
          cancelClick: true
        });
      }

      return hasMoved;
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (position, forceReflow) {
      var list = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this.listRef);
      ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
        list.style[prop] = Object(_CSSTranslate__WEBPACK_IMPORTED_MODULE_4__["default"])(position, _this.props.axis);
      });

      if (forceReflow) {
        list.offsetLeft;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetPosition", function () {
      var currentPosition = _this.getPosition(_this.state.selectedItem) + '%';

      _this.setPosition(currentPosition);
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position, fromSwipe) {
      var lastPosition = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(_this.props.children) - 1;
      var needClonedSlide = _this.props.infiniteLoop && !fromSwipe && (position < 0 || position > lastPosition);
      var oldPosition = position;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      if (needClonedSlide) {
        // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
        // this is only needed for non-swiping situation
        _this.setState({
          swiping: true
        }, function () {
          if (oldPosition < 0) {
            if (_this.props.centerMode && _this.props.axis === 'horizontal') {
              _this.setPosition("-".concat((lastPosition + 2) * _this.props.centerSlidePercentage - (100 - _this.props.centerSlidePercentage) / 2, "%"), true);
            } else {
              _this.setPosition("-".concat((lastPosition + 2) * 100, "%"), true);
            }
          } else if (oldPosition > lastPosition) {
            _this.setPosition(0, true);
          }

          _this.selectItem({
            selectedItem: position,
            swiping: false
          });
        });
      } else {
        _this.selectItem({
          // if it's not a slider, we don't need to set position here
          selectedItem: position
        });
      } // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1, true);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1, true);
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (e) {
      if (!e.key || e.key === 'Enter') {
        var newIndex = e.target.value;

        _this.selectItem({
          selectedItem: newIndex
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state, cb) {
      _this.setState(state, cb);

      _this.handleOnChange(state.selectedItem, react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img');
      return images && images[selectedItem];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableImageHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];
      var images = item && item.getElementsByTagName('img');

      if (_this.state.hasMount && images.length > 0) {
        var image = images[0];

        if (!image.complete) {
          // if the image is still loading, the size won't be available so we trigger a new render after it's done
          var onImageLoad = function onImageLoad() {
            _this.forceUpdate();

            image.removeEventListener('load', onImageLoad);
          };

          image.addEventListener('load', onImageLoad);
        }

        var height = image.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    _this.state = {
      initialized: false,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.resetPosition();
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      this.bindEvents();

      if (this.state.autoPlay && react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      this.setState({
        initialized: true
      });
      var initialImage = this.getInitialImage();

      if (initialImage) {
        // if it's a carousel of images, we set the mount state after the first image is loaded
        initialImage.addEventListener('load', this.setMountState);
      } else {
        this.setMountState();
      }
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_9__["default"])().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      Object(_shims_window__WEBPACK_IMPORTED_MODULE_9__["default"])().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        Object(_shims_document__WEBPACK_IMPORTED_MODULE_8__["default"])().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_9__["default"])().removeEventListener('resize', this.updateSizes);
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_9__["default"])().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        Object(_shims_document__WEBPACK_IMPORTED_MODULE_8__["default"])().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(index) {
      if (this.props.infiniteLoop) {
        // index has to be added by 1 because of the first cloned slide
        ++index;
      }

      if (index === 0) {
        return 0;
      }

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children);

      if (this.props.centerMode && this.props.axis === 'horizontal') {
        var currentPosition = -index * this.props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;

        if (index && (index !== lastPosition || this.props.infiniteLoop)) {
          currentPosition += (100 - this.props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - this.props.centerSlidePercentage;
        }

        return currentPosition;
      }

      return -index * 100;
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(this.props.children, function (item, index) {
        var slideProps = {
          ref: function ref(e) {
            return _this2.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].ITEM(true, index === _this2.state.selectedItem),
          onClick: _this2.handleClickItem.bind(_this2, index, item)
        };

        if (_this2.props.centerMode && _this2.props.axis === 'horizontal') {
          slideProps.style = {
            minWidth: _this2.props.centerSlidePercentage + '%'
          };
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", slideProps, _this2.props.renderItem(item, {
          isSelected: index === _this2.state.selectedItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this3 = this;

      if (!this.props.showIndicators) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "control-dots"
      }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(this.props.children, function (item, index) {
        return _this3.props.renderIndicator(_this3.changeItem, index === _this3.state.selectedItem, index, _this3.props.labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.children || react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children) === 0) {
        return null;
      }

      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop); // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children) - 1 || this.props.infiniteLoop); // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = this.getPosition(this.state.selectedItem); // if 3d is available, let's take advantage of the performance of transform

      var transformProp = Object(_CSSTranslate__WEBPACK_IMPORTED_MODULE_4__["default"])(currentPosition + '%', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp
      };

      if (!this.state.swiping) {
        itemListStyles = _objectSpread({}, itemListStyles, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          MsTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }

      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableImageHeight(this.state.selectedItem);
          swiperProps.style.height = itemHeight || 'auto';
          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style.height = this.state.itemSize;
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].WRAPPER(true, this.props.axis),
        style: containerStyles,
        ref: this.setItemsWrapperRef
      }, this.props.swipeable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_easy_swipe__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
        tagName: "ul",
        ref: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].SLIDER(true, this.state.swiping),
        ref: this.setListRef,
        style: itemListStyles
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderControls(), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Carousel, "displayName", 'Carousel');

_defineProperty(Carousel, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  showArrows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  showStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  showIndicators: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  infiniteLoop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  showThumbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  thumbWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onClickItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onClickThumb: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  axis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['horizontal', 'vertical']),
  verticalSwipe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['natural', 'standard']),
  width: _customPropTypes__WEBPACK_IMPORTED_MODULE_7__["unit"],
  useKeyboardArrows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  stopOnHover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  swipeScrollTolerance: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  swipeable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dynamicHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  emulateTouch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  statusFormatter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  centerMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  centerSlidePercentage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    leftArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    rightArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  onSwipeStart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSwipeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSwipeMove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderArrowPrev: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderArrowNext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderIndicator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderThumbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

_defineProperty(Carousel, "defaultProps", {
  showIndicators: true,
  showArrows: true,
  showStatus: true,
  showThumbs: true,
  infiniteLoop: false,
  selectedItem: 0,
  axis: 'horizontal',
  verticalSwipe: 'standard',
  width: '100%',
  useKeyboardArrows: false,
  autoPlay: false,
  stopOnHover: true,
  interval: 3000,
  transitionTime: 350,
  swipeScrollTolerance: 5,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: false,
  onClickItem: noop,
  onClickThumb: noop,
  onChange: noop,
  statusFormatter: defaultStatusFormatter,
  centerMode: false,
  centerSlidePercentage: 80,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {},
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _cssClasses__WEBPACK_IMPORTED_MODULE_3__["default"].DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item, _ref) {
    var isSelected = _ref.isSelected;
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    return children;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/components/Thumbs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/components/Thumbs.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/es/cssClasses.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dimensions */ "./node_modules/react-responsive-carousel/lib/es/dimensions.js");
/* harmony import */ var _CSSTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/es/CSSTranslate.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shims_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shims/window */ "./node_modules/react-responsive-carousel/lib/es/shims/window.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits(Thumbs, _Component);

  var _super = _createSuper(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || _this.state.images.length === 0) {
        return;
      }

      var total = _this.props.children.length;
      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : Object(_dimensions__WEBPACK_IMPORTED_MODULE_3__["outerWidth"])(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var lastPosition = total - visibleItems;
      var showArrows = visibleItems < total;

      _this.setState(function (_state, props) {
        return {
          itemSize,
          visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition,
          showArrows
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item, e) {
      if (!e.keyCode || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (deltaX) {
      var leftBoundary = 0;
      var currentPosition = -_this.state.firstItem * _this.state.itemSize;
      var lastLeftBoundary = -_this.state.visibleItems * _this.state.itemSize; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX) + '%'; // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = Object(_CSSTranslate__WEBPACK_IMPORTED_MODULE_4__["default"])(position, _this.props.axis);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.lastPosition ? _this.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      hasMount: false,
      firstItem: 0,
      itemSize: null,
      visibleItems: 0,
      lastPosition: 0,
      showArrows: false,
      images: _this.getImages()
    };
    return _this;
  }

  _createClass(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount(nextProps) {
      this.setupThumbs();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props, state) {
      if (props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: props.selectedItem,
          firstItem: this.getFirstItem(props.selectedItem)
        });
      }

      if (props.children !== this.props.children) {
        this.setState({
          images: this.getImages()
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_6__["default"])().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      Object(_shims_window__WEBPACK_IMPORTED_MODULE_6__["default"])().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_6__["default"])().removeEventListener('resize', this.updateSizes);
      Object(_shims_window__WEBPACK_IMPORTED_MODULE_6__["default"])().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getImages",
    value: function getImages() {
      var images = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(this.props.children, function (item, index) {
        var img = item; // if the item is not an image, try to find the first image in the item's children.

        if (item.type !== 'img') {
          img = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(item.props.children).filter(function (children) {
            return children.type === 'img';
          })[0];
        }

        if (!img || img.length === 0) {
          return null;
        }

        return img;
      });

      if (images.filter(function (image) {
        return image;
      }).length === 0) {
        console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
        return [];
      }

      return images;
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.state.images.map(function (img, index) {
        var itemClass = _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].ITEM(false, index === _this2.state.selectedItem && _this2.state.hasMount);
        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };

        if (index === 0) {
          img = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(img, {
            onLoad: _this2.setMountState
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", _extends({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.children) {
        return null;
      } // show left arrow?


      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * this.state.itemSize + 'px';
      var transformProp = Object(_CSSTranslate__WEBPACK_IMPORTED_MODULE_4__["default"])(currentPosition, this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].CAROUSEL(false)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].ARROW_PREV(!hasPrev),
        onClick: this.slideRight,
        "aria-label": this.props.labels.leftArrow
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_easy_swipe__WEBPACK_IMPORTED_MODULE_5___default.a, {
        tagName: "ul",
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef
      }, this.renderItems()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: _cssClasses__WEBPACK_IMPORTED_MODULE_2__["default"].ARROW_NEXT(!hasNext),
        onClick: this.slideLeft,
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Thumbs, "displayName", 'Thumbs');

_defineProperty(Thumbs, "propsTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  thumbWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    leftArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    rightArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
});

_defineProperty(Thumbs, "defaultProps", {
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350,
  axis: 'horizontal'
});

/* harmony default export */ __webpack_exports__["default"] = (Thumbs);

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/cssClasses.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/cssClasses.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  ROOT: function ROOT(customClassName) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'carousel-root': true,
      [customClassName]: !!customClassName
    });
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      dot: true,
      selected: selected
    });
  }
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/customPropTypes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/customPropTypes.js ***!
  \**************************************************************************/
/*! exports provided: unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
var unit = function unit(props, propName, componentName) {
  if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
    return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %');
  }
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/dimensions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/dimensions.js ***!
  \*********************************************************************/
/*! exports provided: outerWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/index.js ***!
  \****************************************************************/
/*! exports provided: Carousel, Thumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Carousel */ "./node_modules/react-responsive-carousel/lib/es/components/Carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _components_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_Thumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Thumbs */ "./node_modules/react-responsive-carousel/lib/es/components/Thumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thumbs", function() { return _components_Thumbs__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/shims/document.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/shims/document.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return document;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/es/shims/window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/es/shims/window.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return window;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./carousel.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvdXRpbHMvY3JlYXRlU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZWFzeS1zd2lwZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVhc3ktc3dpcGUvbGliL3JlYWN0LXN3aXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9lcy9DU1NUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2VzL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2VzL2NvbXBvbmVudHMvVGh1bWJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9lcy9jc3NDbGFzc2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9lcy9jdXN0b21Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2VzL2RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9lcy9zaGltcy9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvZXMvc2hpbXMvd2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcz81ZDA4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkY7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNHpcIlxufSksICdFeHBhbmRMZXNzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02elwiXG59KSwgJ0V4cGFuZE1vcmUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU3ZnSWNvbjtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb25cIikpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdmdJY29uKHBhdGgsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBDb21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5tZW1vKF9yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU3ZnSWNvbi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpLCBwYXRoKTtcbiAgfSkpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJcIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiSWNvblwiKTtcbiAgfVxuXG4gIENvbXBvbmVudC5tdWlOYW1lID0gX1N2Z0ljb24uZGVmYXVsdC5tdWlOYW1lO1xuICByZXR1cm4gQ29tcG9uZW50O1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJvdXNlbCAuY29udHJvbC1hcnJvdywuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93ey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbjtvcGFjaXR5Oi40O2ZpbHRlcjphbHBoYShvcGFjaXR5PTQwKTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjIwcHg7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2ZvbnQtc2l6ZTozMnB4O2N1cnNvcjpwb2ludGVyfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpob3ZlcntvcGFjaXR5OjE7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MTAwKX0uY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3c6YmVmb3JlLC5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3c6YmVmb3Jle21hcmdpbjowIDVweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItdG9wOjhweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjhweCBzb2xpZCB0cmFuc3BhcmVudDtjb250ZW50OicnfS5jYXJvdXNlbCAuY29udHJvbC1kaXNhYmxlZC5jb250cm9sLWFycm93e29wYWNpdHk6MDtmaWx0ZXI6YWxwaGEob3BhY2l0eT0wKTtjdXJzb3I6aW5oZXJpdDtkaXNwbGF5Om5vbmV9LmNhcm91c2VsIC5jb250cm9sLXByZXYuY29udHJvbC1hcnJvd3tsZWZ0OjB9LmNhcm91c2VsIC5jb250cm9sLXByZXYuY29udHJvbC1hcnJvdzpiZWZvcmV7Ym9yZGVyLXJpZ2h0OjhweCBzb2xpZCAjZmZmfS5jYXJvdXNlbCAuY29udHJvbC1uZXh0LmNvbnRyb2wtYXJyb3d7cmlnaHQ6MH0uY2Fyb3VzZWwgLmNvbnRyb2wtbmV4dC5jb250cm9sLWFycm93OmJlZm9yZXtib3JkZXItbGVmdDo4cHggc29saWQgI2ZmZn0uY2Fyb3VzZWwtcm9vdHtvdXRsaW5lOm5vbmV9LmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmNhcm91c2VsICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5jYXJvdXNlbCBpbWd7d2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztwb2ludGVyLWV2ZW50czpub25lfS5jYXJvdXNlbCAuY2Fyb3VzZWx7cG9zaXRpb246cmVsYXRpdmV9LmNhcm91c2VsIC5jb250cm9sLWFycm93e291dGxpbmU6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOm5vbmU7dG9wOjUwJTttYXJnaW4tdG9wOi0xM3B4O2ZvbnQtc2l6ZToxOHB4fS5jYXJvdXNlbCAudGh1bWJzLXdyYXBwZXJ7bWFyZ2luOjIwcHg7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbCAudGh1bWJzey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7cG9zaXRpb246cmVsYXRpdmU7bGlzdC1zdHlsZTpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0uY2Fyb3VzZWwgLnRodW1iey13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmJvcmRlciAuMTVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246Ym9yZGVyIC4xNXMgZWFzZS1pbjtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6NnB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjNweCBzb2xpZCAjZmZmO3BhZGRpbmc6MnB4fS5jYXJvdXNlbCAudGh1bWI6Zm9jdXN7Ym9yZGVyOjNweCBzb2xpZCAjY2NjO291dGxpbmU6bm9uZX0uY2Fyb3VzZWwgLnRodW1iLnNlbGVjdGVkLC5jYXJvdXNlbCAudGh1bWI6aG92ZXJ7Ym9yZGVyOjNweCBzb2xpZCAjMzMzfS5jYXJvdXNlbCAudGh1bWIgaW1ne3ZlcnRpY2FsLWFsaWduOnRvcH0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowO292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93e3RvcDowO2NvbG9yOiNmZmY7Zm9udC1zaXplOjI2cHg7Ym90dG9tOjA7bWFyZ2luLXRvcDowO3BhZGRpbmc6NXB4fS5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXIgLmNvbnRyb2wtYXJyb3c6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMil9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlcntvdmVyZmxvdzpoaWRkZW47bWFyZ2luOmF1dG87d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjstbW96LXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjstbXMtdHJhbnNpdGlvbjpoZWlnaHQgLjE1cyBlYXNlLWluOy1vLXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOmhlaWdodCAuMTVzIGVhc2UtaW59LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLWhvcml6b250YWwgLnNsaWRlcnstbXMtYm94LW9yaWVudDpob3Jpem9udGFsO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbW96LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6LW1vei1mbGV4O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleH0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyLmF4aXMtaG9yaXpvbnRhbCAuc2xpZGVyIC5zbGlkZXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1mbG93OmNvbHVtbn0uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyLmF4aXMtdmVydGljYWx7LW1zLWJveC1vcmllbnQ6aG9yaXpvbnRhbDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1vei1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2FsIC5zbGlkZXJ7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jYXJvdXNlbCAuc2xpZGVye21hcmdpbjowO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTAwJX0uY2Fyb3VzZWwgLnNsaWRlci5hbmltYXRlZHstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXQ7LW1vei10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0Oy1tcy10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dH0uY2Fyb3VzZWwgLnNsaWRle21pbi13aWR0aDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6IzAwMH0uY2Fyb3VzZWwgLnNsaWRlIGltZ3t3aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXI6MH0uY2Fyb3VzZWwgLnNsaWRlIGlmcmFtZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDpjYWxjKDEwMCUgLSA4MHB4KTttYXJnaW46MCA0MHB4IDQwcHg7Ym9yZGVyOjB9LmNhcm91c2VsIC5zbGlkZSAubGVnZW5key13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0Oy1tcy10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NDBweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNDUlO3dpZHRoOjkwJTtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmZmY7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxMnB4O3RleHQtYWxpZ246Y2VudGVyO29wYWNpdHk6MC4yNTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXQ7LW1zLXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0fS5jYXJvdXNlbCAuY29udHJvbC1kb3Rze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO21hcmdpbjoxMHB4IDA7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX1AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpey5jYXJvdXNlbCAuY29udHJvbC1kb3Rze2JvdHRvbTowfX0uY2Fyb3VzZWwgLmNvbnRyb2wtZG90cyAuZG90ey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW47LW1zLXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluO29wYWNpdHk6LjM7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MzApO2JveC1zaGFkb3c6MXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjkpO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTt3aWR0aDo4cHg7aGVpZ2h0OjhweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCA4cHh9LmNhcm91c2VsIC5jb250cm9sLWRvdHMgLmRvdC5zZWxlY3RlZCwuY2Fyb3VzZWwgLmNvbnRyb2wtZG90cyAuZG90OmhvdmVye29wYWNpdHk6MTtmaWx0ZXI6YWxwaGEob3BhY2l0eT0xMDApfS5jYXJvdXNlbCAuY2Fyb3VzZWwtc3RhdHVze3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7cGFkZGluZzo1cHg7Zm9udC1zaXplOjEwcHg7dGV4dC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjkpO2NvbG9yOiNmZmZ9LmNhcm91c2VsOmhvdmVyIC5zbGlkZSAubGVnZW5ke29wYWNpdHk6MX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICcuL3JlYWN0LXN3aXBlJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCcuL3JlYWN0LXN3aXBlJykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0U3dpcGUpO1xuICAgIGdsb2JhbC5pbmRleCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0U3dpcGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuXG4gIHZhciBfcmVhY3RTd2lwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFN3aXBlKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0U3dpcGUyLmRlZmF1bHQ7XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0JywgJ3Byb3AtdHlwZXMnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3Byb3AtdHlwZXMnKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5yZWFjdFN3aXBlID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLnNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb24gPSBzZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykge1xuICAgIHZhciB0YXJnZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIHZhciBzdXBwb3J0c0NhcHR1cmVPcHRpb24gPSBmYWxzZTtcbiAgZnVuY3Rpb24gc2V0SGFzU3VwcG9ydFRvQ2FwdHVyZU9wdGlvbihoYXNTdXBwb3J0KSB7XG4gICAgc3VwcG9ydHNDYXB0dXJlT3B0aW9uID0gaGFzU3VwcG9ydDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2NhcHR1cmUnLCB7IGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uKHRydWUpO1xuICAgICAgfSB9KSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxuICBmdW5jdGlvbiBnZXRTYWZlRXZlbnRIYW5kbGVyT3B0cygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogeyBjYXB0dXJlOiB0cnVlIH07XG5cbiAgICByZXR1cm4gc3VwcG9ydHNDYXB0dXJlT3B0aW9uID8gb3B0aW9ucyA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbZ2V0UG9zaXRpb24gcmV0dXJucyBhIHBvc2l0aW9uIGVsZW1lbnQgdGhhdCB3b3JrcyBmb3IgbW91c2Ugb3IgdG91Y2ggZXZlbnRzXVxuICAgKiBAcGFyYW0gIHtbRXZlbnRdfSBldmVudCBbdGhlIHJlY2VpdmVkIGV2ZW50XVxuICAgKiBAcmV0dXJuIHtbT2JqZWN0XX0gICAgICBbeCBhbmQgeSBjb29yZHNdXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQb3NpdGlvbihldmVudCkge1xuICAgIGlmICgndG91Y2hlcycgaW4gZXZlbnQpIHtcbiAgICAgIHZhciBfZXZlbnQkdG91Y2hlcyQgPSBldmVudC50b3VjaGVzWzBdLFxuICAgICAgICAgIHBhZ2VYID0gX2V2ZW50JHRvdWNoZXMkLnBhZ2VYLFxuICAgICAgICAgIHBhZ2VZID0gX2V2ZW50JHRvdWNoZXMkLnBhZ2VZO1xuXG4gICAgICByZXR1cm4geyB4OiBwYWdlWCwgeTogcGFnZVkgfTtcbiAgICB9XG5cbiAgICB2YXIgc2NyZWVuWCA9IGV2ZW50LnNjcmVlblgsXG4gICAgICAgIHNjcmVlblkgPSBldmVudC5zY3JlZW5ZO1xuXG4gICAgcmV0dXJuIHsgeDogc2NyZWVuWCwgeTogc2NyZWVuWSB9O1xuICB9XG5cbiAgdmFyIFJlYWN0U3dpcGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZWFjdFN3aXBlLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJlYWN0U3dpcGUoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0U3dpcGUpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFJlYWN0U3dpcGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdFN3aXBlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgIF90aGlzLl9oYW5kbGVTd2lwZVN0YXJ0ID0gX3RoaXMuX2hhbmRsZVN3aXBlU3RhcnQuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5faGFuZGxlU3dpcGVNb3ZlID0gX3RoaXMuX2hhbmRsZVN3aXBlTW92ZS5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLl9oYW5kbGVTd2lwZUVuZCA9IF90aGlzLl9oYW5kbGVTd2lwZUVuZC5iaW5kKF90aGlzKTtcblxuICAgICAgX3RoaXMuX29uTW91c2VEb3duID0gX3RoaXMuX29uTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuX29uTW91c2VNb3ZlID0gX3RoaXMuX29uTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuX29uTW91c2VVcCA9IF90aGlzLl9vbk1vdXNlVXAuYmluZChfdGhpcyk7XG5cbiAgICAgIF90aGlzLl9zZXRTd2lwZXJSZWYgPSBfdGhpcy5fc2V0U3dpcGVyUmVmLmJpbmQoX3RoaXMpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWFjdFN3aXBlLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zd2lwZXIpIHtcbiAgICAgICAgICB0aGlzLnN3aXBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVTd2lwZU1vdmUsIGdldFNhZmVFdmVudEhhbmRsZXJPcHRzKHtcbiAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVyKSB7XG4gICAgICAgICAgdGhpcy5zd2lwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlU3dpcGVNb3ZlLCBnZXRTYWZlRXZlbnRIYW5kbGVyT3B0cyh7XG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfb25Nb3VzZURvd24nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWxsb3dNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk1vdXNlTW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVTd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk1vdXNlVXAnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVTdGFydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVN3aXBlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9nZXRQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGV2ZW50KSxcbiAgICAgICAgICAgIHggPSBfZ2V0UG9zaXRpb24ueCxcbiAgICAgICAgICAgIHkgPSBfZ2V0UG9zaXRpb24ueTtcblxuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IHsgeDogeCwgeTogeSB9O1xuICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX2hhbmRsZVN3aXBlTW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVN3aXBlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMubW92ZVN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9nZXRQb3NpdGlvbjIgPSBnZXRQb3NpdGlvbihldmVudCksXG4gICAgICAgICAgICB4ID0gX2dldFBvc2l0aW9uMi54LFxuICAgICAgICAgICAgeSA9IF9nZXRQb3NpdGlvbjIueTtcblxuICAgICAgICB2YXIgZGVsdGFYID0geCAtIHRoaXMubW92ZVN0YXJ0Lng7XG4gICAgICAgIHZhciBkZWx0YVkgPSB5IC0gdGhpcy5tb3ZlU3RhcnQueTtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIGhhbmRsaW5nIHRoZSByZXNwb25zYWJpbGl0eSBvZiBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgdG9cbiAgICAgICAgLy8gdGhlIGNvbXBvbmVudCBoYW5kbGluZyB0aGUgZXZlbnRcbiAgICAgICAgdmFyIHNob3VsZFByZXZlbnREZWZhdWx0ID0gdGhpcy5wcm9wcy5vblN3aXBlTW92ZSh7XG4gICAgICAgICAgeDogZGVsdGFYLFxuICAgICAgICAgIHk6IGRlbHRhWVxuICAgICAgICB9LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZVBvc2l0aW9uID0geyBkZWx0YVg6IGRlbHRhWCwgZGVsdGFZOiBkZWx0YVkgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVFbmQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVTd2lwZUVuZChldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVFbmQoZXZlbnQpO1xuXG4gICAgICAgIHZhciB0b2xlcmFuY2UgPSB0aGlzLnByb3BzLnRvbGVyYW5jZTtcblxuXG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiB0aGlzLm1vdmVQb3NpdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLm1vdmVQb3NpdGlvbi5kZWx0YVggPCAtdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVMZWZ0KDEsIGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZVBvc2l0aW9uLmRlbHRhWCA+IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlUmlnaHQoMSwgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFZIDwgLXRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlVXAoMSwgZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFZID4gdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVEb3duKDEsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZVBvc2l0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfc2V0U3dpcGVyUmVmJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0U3dpcGVyUmVmKG5vZGUpIHtcbiAgICAgICAgdGhpcy5zd2lwZXIgPSBub2RlO1xuICAgICAgICB0aGlzLnByb3BzLmlubmVyUmVmKG5vZGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHRhZ05hbWUgPSBfcHJvcHMudGFnTmFtZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgYWxsb3dNb3VzZUV2ZW50cyA9IF9wcm9wcy5hbGxvd01vdXNlRXZlbnRzLFxuICAgICAgICAgICAgb25Td2lwZVVwID0gX3Byb3BzLm9uU3dpcGVVcCxcbiAgICAgICAgICAgIG9uU3dpcGVEb3duID0gX3Byb3BzLm9uU3dpcGVEb3duLFxuICAgICAgICAgICAgb25Td2lwZUxlZnQgPSBfcHJvcHMub25Td2lwZUxlZnQsXG4gICAgICAgICAgICBvblN3aXBlUmlnaHQgPSBfcHJvcHMub25Td2lwZVJpZ2h0LFxuICAgICAgICAgICAgb25Td2lwZVN0YXJ0ID0gX3Byb3BzLm9uU3dpcGVTdGFydCxcbiAgICAgICAgICAgIG9uU3dpcGVNb3ZlID0gX3Byb3BzLm9uU3dpcGVNb3ZlLFxuICAgICAgICAgICAgb25Td2lwZUVuZCA9IF9wcm9wcy5vblN3aXBlRW5kLFxuICAgICAgICAgICAgaW5uZXJSZWYgPSBfcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgICB0b2xlcmFuY2UgPSBfcHJvcHMudG9sZXJhbmNlLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3RhZ05hbWUnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJywgJ2NoaWxkcmVuJywgJ2FsbG93TW91c2VFdmVudHMnLCAnb25Td2lwZVVwJywgJ29uU3dpcGVEb3duJywgJ29uU3dpcGVMZWZ0JywgJ29uU3dpcGVSaWdodCcsICdvblN3aXBlU3RhcnQnLCAnb25Td2lwZU1vdmUnLCAnb25Td2lwZUVuZCcsICdpbm5lclJlZicsICd0b2xlcmFuY2UnXSk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIHRoaXMucHJvcHMudGFnTmFtZSxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICByZWY6IHRoaXMuX3NldFN3aXBlclJlZixcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9vbk1vdXNlRG93bixcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5faGFuZGxlU3dpcGVTdGFydCxcbiAgICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuX2hhbmRsZVN3aXBlRW5kLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgICB9LCBwcm9wcyksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVhY3RTd2lwZTtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBSZWFjdFN3aXBlLmRpc3BsYXlOYW1lID0gJ1JlYWN0U3dpcGUnO1xuICBSZWFjdFN3aXBlLnByb3BUeXBlcyA9IHtcbiAgICB0YWdOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAgIGFsbG93TW91c2VFdmVudHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICBvblN3aXBlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblN3aXBlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVMZWZ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZVJpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZVN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZU1vdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblN3aXBlRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICB0b2xlcmFuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcbiAgUmVhY3RTd2lwZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgYWxsb3dNb3VzZUV2ZW50czogZmFsc2UsXG4gICAgb25Td2lwZVVwOiBmdW5jdGlvbiBvblN3aXBlVXAoKSB7fSxcbiAgICBvblN3aXBlRG93bjogZnVuY3Rpb24gb25Td2lwZURvd24oKSB7fSxcbiAgICBvblN3aXBlTGVmdDogZnVuY3Rpb24gb25Td2lwZUxlZnQoKSB7fSxcbiAgICBvblN3aXBlUmlnaHQ6IGZ1bmN0aW9uIG9uU3dpcGVSaWdodCgpIHt9LFxuICAgIG9uU3dpcGVTdGFydDogZnVuY3Rpb24gb25Td2lwZVN0YXJ0KCkge30sXG4gICAgb25Td2lwZU1vdmU6IGZ1bmN0aW9uIG9uU3dpcGVNb3ZlKCkge30sXG4gICAgb25Td2lwZUVuZDogZnVuY3Rpb24gb25Td2lwZUVuZCgpIHt9LFxuICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZigpIHt9LFxuXG4gICAgdG9sZXJhbmNlOiAwXG4gIH07XG4gIGV4cG9ydHMuZGVmYXVsdCA9IFJlYWN0U3dpcGU7XG59KTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHBvc2l0aW9uLCBheGlzKSB7XG4gIHZhciBwb3NpdGlvbkNzcyA9IGF4aXMgPT09ICdob3Jpem9udGFsJyA/IFtwb3NpdGlvbiwgMCwgMF0gOiBbMCwgcG9zaXRpb24sIDBdO1xuICB2YXIgdHJhbnNpdGlvblByb3AgPSAndHJhbnNsYXRlM2QnO1xuICB2YXIgdHJhbnNsYXRlZFBvc2l0aW9uID0gJygnICsgcG9zaXRpb25Dc3Muam9pbignLCcpICsgJyknO1xuICByZXR1cm4gdHJhbnNpdGlvblByb3AgKyB0cmFuc2xhdGVkUG9zaXRpb247XG59KTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQga2xhc3MgZnJvbSAnLi4vY3NzQ2xhc3Nlcyc7XG5pbXBvcnQgQ1NTVHJhbnNsYXRlIGZyb20gJy4uL0NTU1RyYW5zbGF0ZSc7XG5pbXBvcnQgU3dpcGUgZnJvbSAncmVhY3QtZWFzeS1zd2lwZSc7XG5pbXBvcnQgVGh1bWJzIGZyb20gJy4vVGh1bWJzJztcbmltcG9ydCAqIGFzIGN1c3RvbVByb3BUeXBlcyBmcm9tICcuLi9jdXN0b21Qcm9wVHlwZXMnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4uL3NoaW1zL2RvY3VtZW50JztcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi4vc2hpbXMvd2luZG93JztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBkZWZhdWx0U3RhdHVzRm9ybWF0dGVyID0gZnVuY3Rpb24gZGVmYXVsdFN0YXR1c0Zvcm1hdHRlcihjdXJyZW50LCB0b3RhbCkge1xuICByZXR1cm4gXCJcIi5jb25jYXQoY3VycmVudCwgXCIgb2YgXCIpLmNvbmNhdCh0b3RhbCk7XG59O1xuXG52YXIgQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhcm91c2VsLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENhcm91c2VsKTtcblxuICBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYXJvdXNlbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRUaHVtYnNSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnRodW1ic1JlZiA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0Q2Fyb3VzZWxXcmFwcGVyUmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYgPSBub2RlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldExpc3RSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmxpc3RSZWYgPSBub2RlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldEl0ZW1zV3JhcHBlclJlZlwiLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuaXRlbXNXcmFwcGVyUmVmID0gbm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRJdGVtc1JlZlwiLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgIGlmICghX3RoaXMuaXRlbXNSZWYpIHtcbiAgICAgICAgX3RoaXMuaXRlbXNSZWYgPSBbXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaXRlbXNSZWZbaW5kZXhdID0gbm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdXRvUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmF1dG9QbGF5IHx8IENoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSA8PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVyKTtcbiAgICAgIF90aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmluY3JlbWVudCgpO1xuICAgICAgfSwgX3RoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsZWFyQXV0b1BsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5hdXRvUGxheSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lcik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRBdXRvUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbGVhckF1dG9QbGF5KCk7XG5cbiAgICAgIF90aGlzLmF1dG9QbGF5KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcE9uSG92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc01vdXNlRW50ZXJlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmNsZWFyQXV0b1BsYXkoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGFydE9uTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc01vdXNlRW50ZXJlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5hdXRvUGxheSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzRm9jdXNXaXRoaW5UaGVDYXJvdXNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0RG9jdW1lbnQoKS5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYgfHwgX3RoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmLmNvbnRhaW5zKGdldERvY3VtZW50KCkuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJuYXZpZ2F0ZVdpdGhLZXlib2FyZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFfdGhpcy5pc0ZvY3VzV2l0aGluVGhlQ2Fyb3VzZWwoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBheGlzID0gX3RoaXMucHJvcHMuYXhpcztcbiAgICAgIHZhciBpc0hvcml6b250YWwgPSBheGlzID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB2YXIga2V5TmFtZXMgPSB7XG4gICAgICAgIEFycm93VXA6IDM4LFxuICAgICAgICBBcnJvd1JpZ2h0OiAzOSxcbiAgICAgICAgQXJyb3dEb3duOiA0MCxcbiAgICAgICAgQXJyb3dMZWZ0OiAzN1xuICAgICAgfTtcbiAgICAgIHZhciBuZXh0S2V5ID0gaXNIb3Jpem9udGFsID8ga2V5TmFtZXMuQXJyb3dSaWdodCA6IGtleU5hbWVzLkFycm93RG93bjtcbiAgICAgIHZhciBwcmV2S2V5ID0gaXNIb3Jpem9udGFsID8ga2V5TmFtZXMuQXJyb3dMZWZ0IDoga2V5TmFtZXMuQXJyb3dVcDtcblxuICAgICAgaWYgKG5leHRLZXkgPT09IGUua2V5Q29kZSkge1xuICAgICAgICBfdGhpcy5pbmNyZW1lbnQoKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldktleSA9PT0gZS5rZXlDb2RlKSB7XG4gICAgICAgIF90aGlzLmRlY3JlbWVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVNpemVzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gX3RoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIGZpcnN0SXRlbSA9IF90aGlzLml0ZW1zUmVmWzBdO1xuICAgICAgdmFyIGl0ZW1TaXplID0gaXNIb3Jpem9udGFsID8gZmlyc3RJdGVtLmNsaWVudFdpZHRoIDogZmlyc3RJdGVtLmNsaWVudEhlaWdodDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9zdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMudGh1bWJzUmVmKSB7XG4gICAgICAgIF90aGlzLnRodW1ic1JlZi51cGRhdGVTaXplcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldE1vdW50U3RhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNNb3VudDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlQ2xpY2tJdGVtXCIsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgaWYgKENoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5jYW5jZWxDbGljaykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2FuY2VsQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMub25DbGlja0l0ZW0oaW5kZXgsIGl0ZW0pO1xuXG4gICAgICBpZiAoaW5kZXggIT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVPbkNoYW5nZVwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgIGlmIChDaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGluZGV4LCBpdGVtKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVDbGlja1RodW1iXCIsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgX3RoaXMucHJvcHMub25DbGlja1RodW1iKGluZGV4LCBpdGVtKTtcblxuICAgICAgX3RoaXMuc2VsZWN0SXRlbSh7XG4gICAgICAgIHNlbGVjdGVkSXRlbTogaW5kZXhcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVTdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3dpcGluZzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnByb3BzLm9uU3dpcGVTdGFydChldmVudCk7XG5cbiAgICAgIF90aGlzLmNsZWFyQXV0b1BsYXkoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlRW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsQ2xpY2s6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMucHJvcHMub25Td2lwZUVuZChldmVudCk7XG5cbiAgICAgIF90aGlzLmF1dG9QbGF5KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZU1vdmVcIiwgZnVuY3Rpb24gKGRlbHRhLCBldmVudCkge1xuICAgICAgX3RoaXMucHJvcHMub25Td2lwZU1vdmUoZXZlbnQpO1xuXG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gX3RoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgdmFyIGluaXRpYWxCb3VuZHJ5ID0gMDtcblxuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IF90aGlzLmdldFBvc2l0aW9uKF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG5cbiAgICAgIHZhciBmaW5hbEJvdW5kcnkgPSBfdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgPyBfdGhpcy5nZXRQb3NpdGlvbihjaGlsZHJlbkxlbmd0aCAtIDEpIC0gMTAwIDogX3RoaXMuZ2V0UG9zaXRpb24oY2hpbGRyZW5MZW5ndGggLSAxKTtcbiAgICAgIHZhciBheGlzRGVsdGEgPSBpc0hvcml6b250YWwgPyBkZWx0YS54IDogZGVsdGEueTtcbiAgICAgIHZhciBoYW5kbGVkRGVsdGEgPSBheGlzRGVsdGE7IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgbGVmdCBvdXQgb2YgYm91bmRhcmllc1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBpbml0aWFsQm91bmRyeSAmJiBheGlzRGVsdGEgPiAwKSB7XG4gICAgICAgIGhhbmRsZWREZWx0YSA9IDA7XG4gICAgICB9IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgcmlnaHQgb3V0IG9mIGJvdW5kYXJpZXNcblxuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmaW5hbEJvdW5kcnkgJiYgYXhpc0RlbHRhIDwgMCkge1xuICAgICAgICBoYW5kbGVkRGVsdGEgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyAxMDAgLyAoX3RoaXMuc3RhdGUuaXRlbVNpemUgLyBoYW5kbGVkRGVsdGEpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaW5maW5pdGVMb29wKSB7XG4gICAgICAgIC8vIFdoZW4gYWxsb3dpbmcgaW5maW5pdGUgbG9vcCwgaWYgd2Ugc2xpZGUgbGVmdCBmcm9tIHBvc2l0aW9uIDAgd2UgcmV2ZWFsIHRoZSBjbG9uZWQgbGFzdCBzbGlkZSB0aGF0IGFwcGVhcnMgYmVmb3JlIGl0XG4gICAgICAgIC8vIGlmIHdlIHNsaWRlIGV2ZW4gZnVydGhlciB3ZSBuZWVkIHRvIGp1bXAgdG8gb3RoZXIgc2lkZSBzbyBpdCBjYW4gY29udGludWUgLSBhbmQgdmljZSB2ZXJzYSBmb3IgdGhlIGxhc3Qgc2xpZGVcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gMCAmJiBwb3NpdGlvbiA+IC0xMDApIHtcbiAgICAgICAgICBwb3NpdGlvbiAtPSBjaGlsZHJlbkxlbmd0aCAqIDEwMDtcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGNoaWxkcmVuTGVuZ3RoIC0gMSAmJiBwb3NpdGlvbiA8IC1jaGlsZHJlbkxlbmd0aCAqIDEwMCkge1xuICAgICAgICAgIHBvc2l0aW9uICs9IGNoaWxkcmVuTGVuZ3RoICogMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9uICs9ICclJztcblxuICAgICAgX3RoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pOyAvLyBhbGxvd3Mgc2Nyb2xsIGlmIHRoZSBzd2lwZSB3YXMgd2l0aGluIHRoZSB0b2xlcmFuY2VcblxuXG4gICAgICB2YXIgaGFzTW92ZWQgPSBNYXRoLmFicyhheGlzRGVsdGEpID4gX3RoaXMucHJvcHMuc3dpcGVTY3JvbGxUb2xlcmFuY2U7XG5cbiAgICAgIGlmIChoYXNNb3ZlZCAmJiAhX3RoaXMuc3RhdGUuY2FuY2VsQ2xpY2spIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNhbmNlbENsaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFzTW92ZWQ7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0UG9zaXRpb25cIiwgZnVuY3Rpb24gKHBvc2l0aW9uLCBmb3JjZVJlZmxvdykge1xuICAgICAgdmFyIGxpc3QgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcy5saXN0UmVmKTtcbiAgICAgIFsnV2Via2l0VHJhbnNmb3JtJywgJ01velRyYW5zZm9ybScsICdNc1RyYW5zZm9ybScsICdPVHJhbnNmb3JtJywgJ3RyYW5zZm9ybScsICdtc1RyYW5zZm9ybSddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgbGlzdC5zdHlsZVtwcm9wXSA9IENTU1RyYW5zbGF0ZShwb3NpdGlvbiwgX3RoaXMucHJvcHMuYXhpcyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZvcmNlUmVmbG93KSB7XG4gICAgICAgIGxpc3Qub2Zmc2V0TGVmdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZXNldFBvc2l0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSBfdGhpcy5nZXRQb3NpdGlvbihfdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pICsgJyUnO1xuXG4gICAgICBfdGhpcy5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlY3JlbWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9zaXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxO1xuICAgICAgdmFyIGZyb21Td2lwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICAgIF90aGlzLm1vdmVUbyhfdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gLSAodHlwZW9mIHBvc2l0aW9ucyA9PT0gJ251bWJlcicgPyBwb3NpdGlvbnMgOiAxKSwgZnJvbVN3aXBlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNyZW1lbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcbiAgICAgIHZhciBmcm9tU3dpcGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgICBfdGhpcy5tb3ZlVG8oX3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtICsgKHR5cGVvZiBwb3NpdGlvbnMgPT09ICdudW1iZXInID8gcG9zaXRpb25zIDogMSksIGZyb21Td2lwZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibW92ZVRvXCIsIGZ1bmN0aW9uIChwb3NpdGlvbiwgZnJvbVN3aXBlKSB7XG4gICAgICB2YXIgbGFzdFBvc2l0aW9uID0gQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pIC0gMTtcbiAgICAgIHZhciBuZWVkQ2xvbmVkU2xpZGUgPSBfdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgIWZyb21Td2lwZSAmJiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID4gbGFzdFBvc2l0aW9uKTtcbiAgICAgIHZhciBvbGRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uID0gX3RoaXMucHJvcHMuaW5maW5pdGVMb29wID8gbGFzdFBvc2l0aW9uIDogMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID4gbGFzdFBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gX3RoaXMucHJvcHMuaW5maW5pdGVMb29wID8gMCA6IGxhc3RQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRDbG9uZWRTbGlkZSkge1xuICAgICAgICAvLyBzZXQgc3dpcGluZyB0cnVlIHdvdWxkIGRpc2FibGUgdHJhbnNpdGlvbiB0aW1lLCB0aGVuIHdlIHNldCBzbGlkZXIgdG8gY2xvbmVkIHBvc2l0aW9uIGFuZCBmb3JjZSBhIHJlZmxvd1xuICAgICAgICAvLyB0aGlzIGlzIG9ubHkgbmVlZGVkIGZvciBub24tc3dpcGluZyBzaXR1YXRpb25cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN3aXBpbmc6IHRydWVcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvbGRQb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5jZW50ZXJNb2RlICYmIF90aGlzLnByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICBfdGhpcy5zZXRQb3NpdGlvbihcIi1cIi5jb25jYXQoKGxhc3RQb3NpdGlvbiArIDIpICogX3RoaXMucHJvcHMuY2VudGVyU2xpZGVQZXJjZW50YWdlIC0gKDEwMCAtIF90aGlzLnByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZSkgLyAyLCBcIiVcIiksIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24oXCItXCIuY29uY2F0KChsYXN0UG9zaXRpb24gKyAyKSAqIDEwMCwgXCIlXCIpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG9sZFBvc2l0aW9uID4gbGFzdFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRQb3NpdGlvbigwLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RJdGVtKHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogcG9zaXRpb24sXG4gICAgICAgICAgICBzd2lwaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNlbGVjdEl0ZW0oe1xuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgc2xpZGVyLCB3ZSBkb24ndCBuZWVkIHRvIHNldCBwb3NpdGlvbiBoZXJlXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBwb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZG9uJ3QgcmVzZXQgYXV0byBwbGF5IHdoZW4gc3RvcCBvbiBob3ZlciBpcyBlbmFibGVkLCBkb2luZyBzbyB3aWxsIHRyaWdnZXIgYSBjYWxsIHRvIGF1dG8gcGxheSBtb3JlIHRoYW4gb25jZVxuICAgICAgLy8gYW5kIHdpbGwgcmVzdWx0IGluIHRoZSBpbnRlcnZhbCBmdW5jdGlvbiBub3QgYmVpbmcgY2xlYXJlZCBjb3JyZWN0bHkuXG5cblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmF1dG9QbGF5ICYmIF90aGlzLnN0YXRlLmlzTW91c2VFbnRlcmVkID09PSBmYWxzZSkge1xuICAgICAgICBfdGhpcy5yZXNldEF1dG9QbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DbGlja05leHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaW5jcmVtZW50KDEsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsaWNrUHJldlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kZWNyZW1lbnQoMSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVGb3J3YXJkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmluY3JlbWVudCgxLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlQmFja3dhcmRzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRlY3JlbWVudCgxLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGFuZ2VJdGVtXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUua2V5IHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIF90aGlzLnNlbGVjdEl0ZW0oe1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogbmV3SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2VsZWN0SXRlbVwiLCBmdW5jdGlvbiAoc3RhdGUsIGNiKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSwgY2IpO1xuXG4gICAgICBfdGhpcy5oYW5kbGVPbkNoYW5nZShzdGF0ZS5zZWxlY3RlZEl0ZW0sIENoaWxkcmVuLnRvQXJyYXkoX3RoaXMucHJvcHMuY2hpbGRyZW4pW3N0YXRlLnNlbGVjdGVkSXRlbV0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldEluaXRpYWxJbWFnZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3RoaXMucHJvcHMuc2VsZWN0ZWRJdGVtO1xuICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5pdGVtc1JlZiAmJiBfdGhpcy5pdGVtc1JlZltzZWxlY3RlZEl0ZW1dO1xuICAgICAgdmFyIGltYWdlcyA9IGl0ZW0gJiYgaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICByZXR1cm4gaW1hZ2VzICYmIGltYWdlc1tzZWxlY3RlZEl0ZW1dO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFZhcmlhYmxlSW1hZ2VIZWlnaHRcIiwgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgaXRlbSA9IF90aGlzLml0ZW1zUmVmICYmIF90aGlzLml0ZW1zUmVmW3Bvc2l0aW9uXTtcbiAgICAgIHZhciBpbWFnZXMgPSBpdGVtICYmIGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaGFzTW91bnQgJiYgaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1hZ2VzWzBdO1xuXG4gICAgICAgIGlmICghaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2UgaXMgc3RpbGwgbG9hZGluZywgdGhlIHNpemUgd29uJ3QgYmUgYXZhaWxhYmxlIHNvIHdlIHRyaWdnZXIgYSBuZXcgcmVuZGVyIGFmdGVyIGl0J3MgZG9uZVxuICAgICAgICAgIHZhciBvbkltYWdlTG9hZCA9IGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcblxuICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uSW1hZ2VMb2FkKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uSW1hZ2VMb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWFnZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBoZWlnaHQgPiAwID8gaGVpZ2h0IDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkSXRlbTogcHJvcHMuc2VsZWN0ZWRJdGVtLFxuICAgICAgaGFzTW91bnQ6IGZhbHNlLFxuICAgICAgaXNNb3VzZUVudGVyZWQ6IGZhbHNlLFxuICAgICAgYXV0b1BsYXk6IHByb3BzLmF1dG9QbGF5XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2Fyb3VzZWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXR1cENhcm91c2VsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmICghcHJldlByb3BzLmNoaWxkcmVuICYmIHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgIXRoaXMuc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5zZXR1cENhcm91c2VsKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2U3RhdGUuc3dpcGluZyAmJiAhdGhpcy5zdGF0ZS5zd2lwaW5nKSB7XG4gICAgICAgIC8vIFdlIHN0b3BwZWQgc3dpcGluZywgZW5zdXJlIHdlIGFyZSBoZWFkaW5nIHRvIHRoZSBuZXcvY3VycmVudCBzbGlkZSBhbmQgbm90IHN0dWNrXG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldlByb3BzLnNlbGVjdGVkSXRlbSAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0gfHwgcHJldlByb3BzLmNlbnRlck1vZGUgIT09IHRoaXMucHJvcHMuY2VudGVyTW9kZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy5hdXRvUGxheSAhPT0gdGhpcy5wcm9wcy5hdXRvUGxheSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvUGxheSkge1xuICAgICAgICAgIHRoaXMuc2V0dXBBdXRvUGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVzdHJveUF1dG9QbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhdXRvUGxheTogdGhpcy5wcm9wcy5hdXRvUGxheVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lDYXJvdXNlbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cENhcm91c2VsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwQ2Fyb3VzZWwoKSB7XG4gICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuYXV0b1BsYXkgJiYgQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0dXBBdXRvUGxheSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGluaXRpYWxJbWFnZSA9IHRoaXMuZ2V0SW5pdGlhbEltYWdlKCk7XG5cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgLy8gaWYgaXQncyBhIGNhcm91c2VsIG9mIGltYWdlcywgd2Ugc2V0IHRoZSBtb3VudCBzdGF0ZSBhZnRlciB0aGUgZmlyc3QgaW1hZ2UgaXMgbG9hZGVkXG4gICAgICAgIGluaXRpYWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5zZXRNb3VudFN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0TW91bnRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95Q2Fyb3VzZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveUNhcm91c2VsKCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95QXV0b1BsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBBdXRvUGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cEF1dG9QbGF5KCkge1xuICAgICAgdGhpcy5hdXRvUGxheSgpO1xuICAgICAgdmFyIGNhcm91c2VsV3JhcHBlciA9IHRoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zdG9wT25Ib3ZlciAmJiBjYXJvdXNlbFdyYXBwZXIpIHtcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnN0b3BPbkhvdmVyKTtcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnN0YXJ0T25MZWF2ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lBdXRvUGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95QXV0b1BsYXkoKSB7XG4gICAgICB0aGlzLmNsZWFyQXV0b1BsYXkoKTtcbiAgICAgIHZhciBjYXJvdXNlbFdyYXBwZXIgPSB0aGlzLmNhcm91c2VsV3JhcHBlclJlZjtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcE9uSG92ZXIgJiYgY2Fyb3VzZWxXcmFwcGVyKSB7XG4gICAgICAgIGNhcm91c2VsV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5zdG9wT25Ib3Zlcik7XG4gICAgICAgIGNhcm91c2VsV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5zdGFydE9uTGVhdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAvLyBhcyB0aGUgd2lkdGhzIGFyZSBjYWxjdWxhdGVkLCB3ZSBuZWVkIHRvIHJlc2l6ZVxuICAgICAgLy8gdGhlIGNhcm91c2VsIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgICBnZXRXaW5kb3coKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNpemVzKTsgLy8gaXNzdWUgIzIgLSBpbWFnZSBsb2FkaW5nIHNtYWxsZXJcblxuICAgICAgZ2V0V2luZG93KCkuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMudXBkYXRlU2l6ZXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy51c2VLZXlib2FyZEFycm93cykge1xuICAgICAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm5hdmlnYXRlV2l0aEtleWJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgIC8vIHJlbW92aW5nIGxpc3RlbmVyc1xuICAgICAgZ2V0V2luZG93KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTaXplcyk7XG4gICAgICBnZXRXaW5kb3coKS5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy51cGRhdGVTaXplcyk7XG4gICAgICB2YXIgaW5pdGlhbEltYWdlID0gdGhpcy5nZXRJbml0aWFsSW1hZ2UoKTtcblxuICAgICAgaWYgKGluaXRpYWxJbWFnZSkge1xuICAgICAgICBpbml0aWFsSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuc2V0TW91bnRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZUtleWJvYXJkQXJyb3dzKSB7XG4gICAgICAgIGdldERvY3VtZW50KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubmF2aWdhdGVXaXRoS2V5Ym9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3NpdGlvbihpbmRleCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGVMb29wKSB7XG4gICAgICAgIC8vIGluZGV4IGhhcyB0byBiZSBhZGRlZCBieSAxIGJlY2F1c2Ugb2YgdGhlIGZpcnN0IGNsb25lZCBzbGlkZVxuICAgICAgICArK2luZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXJNb2RlICYmIHRoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAtaW5kZXggKiB0aGlzLnByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZTtcbiAgICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IGNoaWxkcmVuTGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAoaW5kZXggJiYgKGluZGV4ICE9PSBsYXN0UG9zaXRpb24gfHwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3ApKSB7XG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uICs9ICgxMDAgLSB0aGlzLnByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZSkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsYXN0UG9zaXRpb24pIHtcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKz0gMTAwIC0gdGhpcy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLWluZGV4ICogMTAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJdGVtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJdGVtcyhpc0Nsb25lKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHNsaWRlUHJvcHMgPSB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRJdGVtc1JlZihlLCBpbmRleCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXk6ICdpdGVtS2V5JyArIGluZGV4ICsgKGlzQ2xvbmUgPyAnY2xvbmUnIDogJycpLFxuICAgICAgICAgIGNsYXNzTmFtZToga2xhc3MuSVRFTSh0cnVlLCBpbmRleCA9PT0gX3RoaXMyLnN0YXRlLnNlbGVjdGVkSXRlbSksXG4gICAgICAgICAgb25DbGljazogX3RoaXMyLmhhbmRsZUNsaWNrSXRlbS5iaW5kKF90aGlzMiwgaW5kZXgsIGl0ZW0pXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5jZW50ZXJNb2RlICYmIF90aGlzMi5wcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBzbGlkZVByb3BzLnN0eWxlID0ge1xuICAgICAgICAgICAgbWluV2lkdGg6IF90aGlzMi5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UgKyAnJSdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgc2xpZGVQcm9wcywgX3RoaXMyLnByb3BzLnJlbmRlckl0ZW0oaXRlbSwge1xuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGluZGV4ID09PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRJdGVtXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDb250cm9sc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDb250cm9scygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtZG90c1wiXG4gICAgICB9LCBDaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMucHJvcHMucmVuZGVySW5kaWNhdG9yKF90aGlzMy5jaGFuZ2VJdGVtLCBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLnNlbGVjdGVkSXRlbSwgaW5kZXgsIF90aGlzMy5wcm9wcy5sYWJlbHMuaXRlbSk7XG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclN0YXR1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGF0dXMoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd1N0YXR1cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1zdGF0dXNcIlxuICAgICAgfSwgdGhpcy5wcm9wcy5zdGF0dXNGb3JtYXR0ZXIodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gKyAxLCBDaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUaHVtYnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGh1bWJzKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dUaHVtYnMgfHwgQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYnMsIHtcbiAgICAgICAgcmVmOiB0aGlzLnNldFRodW1ic1JlZixcbiAgICAgICAgb25TZWxlY3RJdGVtOiB0aGlzLmhhbmRsZUNsaWNrVGh1bWIsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIHRyYW5zaXRpb25UaW1lOiB0aGlzLnByb3BzLnRyYW5zaXRpb25UaW1lLFxuICAgICAgICB0aHVtYldpZHRoOiB0aGlzLnByb3BzLnRodW1iV2lkdGgsXG4gICAgICAgIGxhYmVsczogdGhpcy5wcm9wcy5sYWJlbHNcbiAgICAgIH0sIHRoaXMucHJvcHMucmVuZGVyVGh1bWJzKHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBDaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIGNhblNob3dBcnJvd3MgPSB0aGlzLnByb3BzLnNob3dBcnJvd3MgJiYgQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxOyAvLyBzaG93IGxlZnQgYXJyb3c/XG5cbiAgICAgIHZhciBoYXNQcmV2ID0gY2FuU2hvd0Fycm93cyAmJiAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPiAwIHx8IHRoaXMucHJvcHMuaW5maW5pdGVMb29wKTsgLy8gc2hvdyByaWdodCBhcnJvd1xuXG4gICAgICB2YXIgaGFzTmV4dCA9IGNhblNob3dBcnJvd3MgJiYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtIDwgQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxIHx8IHRoaXMucHJvcHMuaW5maW5pdGVMb29wKTsgLy8gb2JqIHRvIGhvbGQgdGhlIHRyYW5zZm9ybWF0aW9ucyBhbmQgc3R5bGVzXG5cbiAgICAgIHZhciBpdGVtTGlzdFN0eWxlcyA9IHt9O1xuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pOyAvLyBpZiAzZCBpcyBhdmFpbGFibGUsIGxldCdzIHRha2UgYWR2YW50YWdlIG9mIHRoZSBwZXJmb3JtYW5jZSBvZiB0cmFuc2Zvcm1cblxuICAgICAgdmFyIHRyYW5zZm9ybVByb3AgPSBDU1NUcmFuc2xhdGUoY3VycmVudFBvc2l0aW9uICsgJyUnLCB0aGlzLnByb3BzLmF4aXMpO1xuICAgICAgdmFyIHRyYW5zaXRpb25UaW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uVGltZSArICdtcyc7XG4gICAgICBpdGVtTGlzdFN0eWxlcyA9IHtcbiAgICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBNb3pUcmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXG4gICAgICAgIE1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBPVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXG4gICAgICAgIG1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wXG4gICAgICB9O1xuXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuc3dpcGluZykge1xuICAgICAgICBpdGVtTGlzdFN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW1MaXN0U3R5bGVzLCB7XG4gICAgICAgICAgV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgICBNb3pUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICAgIE1zVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgICBPVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICAgIG1zVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1zQ2xvbmUgPSB0aGlzLnJlbmRlckl0ZW1zKHRydWUpO1xuICAgICAgdmFyIGZpcnN0Q2xvbmUgPSBpdGVtc0Nsb25lLnNoaWZ0KCk7XG4gICAgICB2YXIgbGFzdENsb25lID0gaXRlbXNDbG9uZS5wb3AoKTtcbiAgICAgIHZhciBzd2lwZXJQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBrbGFzcy5TTElERVIodHJ1ZSwgdGhpcy5zdGF0ZS5zd2lwaW5nKSxcbiAgICAgICAgb25Td2lwZU1vdmU6IHRoaXMub25Td2lwZU1vdmUsXG4gICAgICAgIG9uU3dpcGVTdGFydDogdGhpcy5vblN3aXBlU3RhcnQsXG4gICAgICAgIG9uU3dpcGVFbmQ6IHRoaXMub25Td2lwZUVuZCxcbiAgICAgICAgc3R5bGU6IGl0ZW1MaXN0U3R5bGVzLFxuICAgICAgICB0b2xlcmFuY2U6IHRoaXMucHJvcHMuc3dpcGVTY3JvbGxUb2xlcmFuY2VcbiAgICAgIH07XG4gICAgICB2YXIgY29udGFpbmVyU3R5bGVzID0ge307XG5cbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgc3dpcGVyUHJvcHMub25Td2lwZUxlZnQgPSB0aGlzLm9uU3dpcGVGb3J3YXJkO1xuICAgICAgICBzd2lwZXJQcm9wcy5vblN3aXBlUmlnaHQgPSB0aGlzLm9uU3dpcGVCYWNrd2FyZHM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZHluYW1pY0hlaWdodCkge1xuICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5nZXRWYXJpYWJsZUltYWdlSGVpZ2h0KHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICBzd2lwZXJQcm9wcy5zdHlsZS5oZWlnaHQgPSBpdGVtSGVpZ2h0IHx8ICdhdXRvJztcbiAgICAgICAgICBjb250YWluZXJTdHlsZXMuaGVpZ2h0ID0gaXRlbUhlaWdodCB8fCAnYXV0byc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlclByb3BzLm9uU3dpcGVVcCA9IHRoaXMucHJvcHMudmVydGljYWxTd2lwZSA9PT0gJ25hdHVyYWwnID8gdGhpcy5vblN3aXBlQmFja3dhcmRzIDogdGhpcy5vblN3aXBlRm9yd2FyZDtcbiAgICAgICAgc3dpcGVyUHJvcHMub25Td2lwZURvd24gPSB0aGlzLnByb3BzLnZlcnRpY2FsU3dpcGUgPT09ICduYXR1cmFsJyA/IHRoaXMub25Td2lwZUZvcndhcmQgOiB0aGlzLm9uU3dpcGVCYWNrd2FyZHM7XG4gICAgICAgIHN3aXBlclByb3BzLnN0eWxlLmhlaWdodCA9IHRoaXMuc3RhdGUuaXRlbVNpemU7XG4gICAgICAgIGNvbnRhaW5lclN0eWxlcy5oZWlnaHQgPSB0aGlzLnN0YXRlLml0ZW1TaXplO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGtsYXNzLlJPT1QodGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICByZWY6IHRoaXMuc2V0Q2Fyb3VzZWxXcmFwcGVyUmVmLFxuICAgICAgICB0YWJJbmRleDogXCIwXCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBrbGFzcy5DQVJPVVNFTCh0cnVlKSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnByb3BzLnJlbmRlckFycm93UHJldih0aGlzLm9uQ2xpY2tQcmV2LCBoYXNQcmV2LCB0aGlzLnByb3BzLmxhYmVscy5sZWZ0QXJyb3cpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZToga2xhc3MuV1JBUFBFUih0cnVlLCB0aGlzLnByb3BzLmF4aXMpLFxuICAgICAgICBzdHlsZTogY29udGFpbmVyU3R5bGVzLFxuICAgICAgICByZWY6IHRoaXMuc2V0SXRlbXNXcmFwcGVyUmVmXG4gICAgICB9LCB0aGlzLnByb3BzLnN3aXBlYWJsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlLCBfZXh0ZW5kcyh7XG4gICAgICAgIHRhZ05hbWU6IFwidWxcIixcbiAgICAgICAgcmVmOiB0aGlzLnNldExpc3RSZWZcbiAgICAgIH0sIHN3aXBlclByb3BzLCB7XG4gICAgICAgIGFsbG93TW91c2VFdmVudHM6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXG4gICAgICB9KSwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgbGFzdENsb25lLCB0aGlzLnJlbmRlckl0ZW1zKCksIHRoaXMucHJvcHMuaW5maW5pdGVMb29wICYmIGZpcnN0Q2xvbmUpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZToga2xhc3MuU0xJREVSKHRydWUsIHRoaXMuc3RhdGUuc3dpcGluZyksXG4gICAgICAgIHJlZjogdGhpcy5zZXRMaXN0UmVmLFxuICAgICAgICBzdHlsZTogaXRlbUxpc3RTdHlsZXNcbiAgICAgIH0sIHRoaXMucHJvcHMuaW5maW5pdGVMb29wICYmIGxhc3RDbG9uZSwgdGhpcy5yZW5kZXJJdGVtcygpLCB0aGlzLnByb3BzLmluZmluaXRlTG9vcCAmJiBmaXJzdENsb25lKSksIHRoaXMucHJvcHMucmVuZGVyQXJyb3dOZXh0KHRoaXMub25DbGlja05leHQsIGhhc05leHQsIHRoaXMucHJvcHMubGFiZWxzLnJpZ2h0QXJyb3cpLCB0aGlzLnJlbmRlckNvbnRyb2xzKCksIHRoaXMucmVuZGVyU3RhdHVzKCkpLCB0aGlzLnJlbmRlclRodW1icygpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2Fyb3VzZWw7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDYXJvdXNlbCwgXCJkaXNwbGF5TmFtZVwiLCAnQ2Fyb3VzZWwnKTtcblxuX2RlZmluZVByb3BlcnR5KENhcm91c2VsLCBcInByb3BUeXBlc1wiLCB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBzaG93QXJyb3dzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1N0YXR1czogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dJbmRpY2F0b3JzOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5maW5pdGVMb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1RodW1iczogUHJvcFR5cGVzLmJvb2wsXG4gIHRodW1iV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DbGlja0l0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tUaHVtYjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG4gIHZlcnRpY2FsU3dpcGU6IFByb3BUeXBlcy5vbmVPZihbJ25hdHVyYWwnLCAnc3RhbmRhcmQnXSksXG4gIHdpZHRoOiBjdXN0b21Qcm9wVHlwZXMudW5pdCxcbiAgdXNlS2V5Ym9hcmRBcnJvd3M6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0b3BPbkhvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzd2lwZVNjcm9sbFRvbGVyYW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHluYW1pY0hlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGVtdWxhdGVUb3VjaDogUHJvcFR5cGVzLmJvb2wsXG4gIHN0YXR1c0Zvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2VudGVyTW9kZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNlbnRlclNsaWRlUGVyY2VudGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbGFiZWxzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxlZnRBcnJvdzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByaWdodEFycm93OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW06IFByb3BUeXBlcy5zdHJpbmdcbiAgfSksXG4gIG9uU3dpcGVTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3dpcGVFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvblN3aXBlTW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlckFycm93UHJldjogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlckFycm93TmV4dDogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlckluZGljYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuICByZW5kZXJUaHVtYnM6IFByb3BUeXBlcy5mdW5jXG59KTtcblxuX2RlZmluZVByb3BlcnR5KENhcm91c2VsLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIHNob3dJbmRpY2F0b3JzOiB0cnVlLFxuICBzaG93QXJyb3dzOiB0cnVlLFxuICBzaG93U3RhdHVzOiB0cnVlLFxuICBzaG93VGh1bWJzOiB0cnVlLFxuICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICBzZWxlY3RlZEl0ZW06IDAsXG4gIGF4aXM6ICdob3Jpem9udGFsJyxcbiAgdmVydGljYWxTd2lwZTogJ3N0YW5kYXJkJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdXNlS2V5Ym9hcmRBcnJvd3M6IGZhbHNlLFxuICBhdXRvUGxheTogZmFsc2UsXG4gIHN0b3BPbkhvdmVyOiB0cnVlLFxuICBpbnRlcnZhbDogMzAwMCxcbiAgdHJhbnNpdGlvblRpbWU6IDM1MCxcbiAgc3dpcGVTY3JvbGxUb2xlcmFuY2U6IDUsXG4gIHN3aXBlYWJsZTogdHJ1ZSxcbiAgZHluYW1pY0hlaWdodDogZmFsc2UsXG4gIGVtdWxhdGVUb3VjaDogZmFsc2UsXG4gIG9uQ2xpY2tJdGVtOiBub29wLFxuICBvbkNsaWNrVGh1bWI6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBzdGF0dXNGb3JtYXR0ZXI6IGRlZmF1bHRTdGF0dXNGb3JtYXR0ZXIsXG4gIGNlbnRlck1vZGU6IGZhbHNlLFxuICBjZW50ZXJTbGlkZVBlcmNlbnRhZ2U6IDgwLFxuICBsYWJlbHM6IHtcbiAgICBsZWZ0QXJyb3c6ICdwcmV2aW91cyBzbGlkZSAvIGl0ZW0nLFxuICAgIHJpZ2h0QXJyb3c6ICduZXh0IHNsaWRlIC8gaXRlbScsXG4gICAgaXRlbTogJ3NsaWRlIGl0ZW0nXG4gIH0sXG4gIG9uU3dpcGVTdGFydDogZnVuY3Rpb24gb25Td2lwZVN0YXJ0KCkge30sXG4gIG9uU3dpcGVFbmQ6IGZ1bmN0aW9uIG9uU3dpcGVFbmQoKSB7fSxcbiAgb25Td2lwZU1vdmU6IGZ1bmN0aW9uIG9uU3dpcGVNb3ZlKCkge30sXG4gIHJlbmRlckFycm93UHJldjogZnVuY3Rpb24gcmVuZGVyQXJyb3dQcmV2KG9uQ2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBrbGFzcy5BUlJPV19QUkVWKCFoYXNQcmV2KSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIYW5kbGVyXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlckFycm93TmV4dDogZnVuY3Rpb24gcmVuZGVyQXJyb3dOZXh0KG9uQ2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBrbGFzcy5BUlJPV19ORVhUKCFoYXNOZXh0KSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIYW5kbGVyXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlckluZGljYXRvcjogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKG9uQ2xpY2tIYW5kbGVyLCBpc1NlbGVjdGVkLCBpbmRleCwgbGFiZWwpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICBjbGFzc05hbWU6IGtsYXNzLkRPVChpc1NlbGVjdGVkKSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIYW5kbGVyLFxuICAgICAgb25LZXlEb3duOiBvbkNsaWNrSGFuZGxlcixcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJcIi5jb25jYXQobGFiZWwsIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJJdGVtOiBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIF9yZWYpIHtcbiAgICB2YXIgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZDtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSxcbiAgcmVuZGVyVGh1bWJzOiBmdW5jdGlvbiByZW5kZXJUaHVtYnMoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQga2xhc3MgZnJvbSAnLi4vY3NzQ2xhc3Nlcyc7XG5pbXBvcnQgeyBvdXRlcldpZHRoIH0gZnJvbSAnLi4vZGltZW5zaW9ucyc7XG5pbXBvcnQgQ1NTVHJhbnNsYXRlIGZyb20gJy4uL0NTU1RyYW5zbGF0ZSc7XG5pbXBvcnQgU3dpcGUgZnJvbSAncmVhY3QtZWFzeS1zd2lwZSc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4uL3NoaW1zL3dpbmRvdyc7XG5cbnZhciBUaHVtYnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRodW1icywgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUaHVtYnMpO1xuXG4gIGZ1bmN0aW9uIFRodW1icyhfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGh1bWJzKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRJdGVtc1dyYXBwZXJSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLml0ZW1zV3JhcHBlclJlZiA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNMaXN0UmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5pdGVtc0xpc3RSZWYgPSBub2RlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFRodW1ic1JlZlwiLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgIGlmICghX3RoaXMudGh1bWJzUmVmKSB7XG4gICAgICAgIF90aGlzLnRodW1ic1JlZiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy50aHVtYnNSZWZbaW5kZXhdID0gbm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVTaXplc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmNoaWxkcmVuIHx8ICFfdGhpcy5pdGVtc1dyYXBwZXJSZWYgfHwgX3RoaXMuc3RhdGUuaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3RhbCA9IF90aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHZhciB3cmFwcGVyU2l6ZSA9IF90aGlzLml0ZW1zV3JhcHBlclJlZi5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBpdGVtU2l6ZSA9IF90aGlzLnByb3BzLnRodW1iV2lkdGggPyBfdGhpcy5wcm9wcy50aHVtYldpZHRoIDogb3V0ZXJXaWR0aChfdGhpcy50aHVtYnNSZWZbMF0pO1xuICAgICAgdmFyIHZpc2libGVJdGVtcyA9IE1hdGguZmxvb3Iod3JhcHBlclNpemUgLyBpdGVtU2l6ZSk7XG4gICAgICB2YXIgbGFzdFBvc2l0aW9uID0gdG90YWwgLSB2aXNpYmxlSXRlbXM7XG4gICAgICB2YXIgc2hvd0Fycm93cyA9IHZpc2libGVJdGVtcyA8IHRvdGFsO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3N0YXRlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGl0ZW1TaXplLFxuICAgICAgICAgIHZpc2libGVJdGVtcyxcbiAgICAgICAgICBmaXJzdEl0ZW06IHNob3dBcnJvd3MgPyBfdGhpcy5nZXRGaXJzdEl0ZW0ocHJvcHMuc2VsZWN0ZWRJdGVtKSA6IDAsXG4gICAgICAgICAgbGFzdFBvc2l0aW9uLFxuICAgICAgICAgIHNob3dBcnJvd3NcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldE1vdW50U3RhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNNb3VudDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlQ2xpY2tJdGVtXCIsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSwgZSkge1xuICAgICAgaWYgKCFlLmtleUNvZGUgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBfdGhpcy5wcm9wcy5vblNlbGVjdEl0ZW07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaGFuZGxlcihpbmRleCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlU3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlRW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3dpcGluZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVNb3ZlXCIsIGZ1bmN0aW9uIChkZWx0YVgpIHtcbiAgICAgIHZhciBsZWZ0Qm91bmRhcnkgPSAwO1xuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IC1fdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiBfdGhpcy5zdGF0ZS5pdGVtU2l6ZTtcbiAgICAgIHZhciBsYXN0TGVmdEJvdW5kYXJ5ID0gLV90aGlzLnN0YXRlLnZpc2libGVJdGVtcyAqIF90aGlzLnN0YXRlLml0ZW1TaXplOyAvLyBwcmV2ZW50IHVzZXIgZnJvbSBzd2lwaW5nIGxlZnQgb3V0IG9mIGJvdW5kYXJpZXNcblxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gbGVmdEJvdW5kYXJ5ICYmIGRlbHRhWCA+IDApIHtcbiAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgIH0gLy8gcHJldmVudCB1c2VyIGZyb20gc3dpcGluZyByaWdodCBvdXQgb2YgYm91bmRhcmllc1xuXG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGxhc3RMZWZ0Qm91bmRhcnkgJiYgZGVsdGFYIDwgMCkge1xuICAgICAgICBkZWx0YVggPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgd3JhcHBlclNpemUgPSBfdGhpcy5pdGVtc1dyYXBwZXJSZWYuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgcG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyAxMDAgLyAod3JhcHBlclNpemUgLyBkZWx0YVgpICsgJyUnOyAvLyBpZiAzZCBpc24ndCBhdmFpbGFibGUgd2Ugd2lsbCB1c2UgbGVmdCB0byBtb3ZlXG5cbiAgICAgIGlmIChfdGhpcy5pdGVtc0xpc3RSZWYpIHtcbiAgICAgICAgWydXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ01zVHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAndHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIF90aGlzLml0ZW1zTGlzdFJlZi5zdHlsZVtwcm9wXSA9IENTU1RyYW5zbGF0ZShwb3NpdGlvbiwgX3RoaXMucHJvcHMuYXhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNsaWRlUmlnaHRcIiwgZnVuY3Rpb24gKHBvc2l0aW9ucykge1xuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLmZpcnN0SXRlbSAtICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlkZUxlZnRcIiwgZnVuY3Rpb24gKHBvc2l0aW9ucykge1xuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLmZpcnN0SXRlbSArICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtb3ZlVG9cIiwgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAvLyBwb3NpdGlvbiBjYW4ndCBiZSBsb3dlciB0aGFuIDBcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPCAwID8gMCA6IHBvc2l0aW9uOyAvLyBwb3NpdGlvbiBjYW4ndCBiZSBoaWdoZXIgdGhhbiBsYXN0IHBvc3Rpb25cblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA+PSBfdGhpcy5sYXN0UG9zaXRpb24gPyBfdGhpcy5sYXN0UG9zaXRpb24gOiBwb3NpdGlvbjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdEl0ZW06IHBvc2l0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBfcHJvcHMuc2VsZWN0ZWRJdGVtLFxuICAgICAgaGFzTW91bnQ6IGZhbHNlLFxuICAgICAgZmlyc3RJdGVtOiAwLFxuICAgICAgaXRlbVNpemU6IG51bGwsXG4gICAgICB2aXNpYmxlSXRlbXM6IDAsXG4gICAgICBsYXN0UG9zaXRpb246IDAsXG4gICAgICBzaG93QXJyb3dzOiBmYWxzZSxcbiAgICAgIGltYWdlczogX3RoaXMuZ2V0SW1hZ2VzKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaHVtYnMsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXR1cFRodW1icygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGlmIChwcm9wcy5zZWxlY3RlZEl0ZW0gIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogcHJvcHMuc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGZpcnN0SXRlbTogdGhpcy5nZXRGaXJzdEl0ZW0ocHJvcHMuc2VsZWN0ZWRJdGVtKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNoaWxkcmVuICE9PSB0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGltYWdlczogdGhpcy5nZXRJbWFnZXMoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuID09PSBwcmV2UHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUaGlzIHdpbGwgY2FwdHVyZSBhbnkgc2l6ZSBjaGFuZ2VzIGZvciBhcnJvdyBhZGp1c3RtZW50cyBldGMuXG4gICAgICAvLyB1c3VhbGx5IGluIHRoZSBzYW1lIHJlbmRlciBjeWNsZSBzbyB3ZSBkb24ndCBzZWUgYW55IGZsaWNrZXJzXG5cblxuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGVzdHJveVRodW1icygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cFRodW1ic1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cFRodW1icygpIHtcbiAgICAgIC8vIGFzIHRoZSB3aWR0aHMgYXJlIGNhbGN1bGF0ZWQsIHdlIG5lZWQgdG8gcmVzaXplXG4gICAgICAvLyB0aGUgY2Fyb3VzZWwgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcbiAgICAgIGdldFdpbmRvdygpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpOyAvLyBpc3N1ZSAjMiAtIGltYWdlIGxvYWRpbmcgc21hbGxlclxuXG4gICAgICBnZXRXaW5kb3coKS5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy51cGRhdGVTaXplcyk7IC8vIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCB3ZSBuZWVkIHRvIGNhbGN1bGF0ZVxuICAgICAgLy8gdGhlIGNvbnRhaW5lciBzaXplIHRvIGFkanVzdCB0aGUgcmVzcG9uc2l2ZSBiZWhhdmlvdXJcblxuICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95VGh1bWJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lUaHVtYnMoKSB7XG4gICAgICAvLyByZW1vdmluZyBsaXN0ZW5lcnNcbiAgICAgIGdldFdpbmRvdygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpO1xuICAgICAgZ2V0V2luZG93KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMudXBkYXRlU2l6ZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJbWFnZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgICAgdmFyIGltYWdlcyA9IENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGltZyA9IGl0ZW07IC8vIGlmIHRoZSBpdGVtIGlzIG5vdCBhbiBpbWFnZSwgdHJ5IHRvIGZpbmQgdGhlIGZpcnN0IGltYWdlIGluIHRoZSBpdGVtJ3MgY2hpbGRyZW4uXG5cbiAgICAgICAgaWYgKGl0ZW0udHlwZSAhPT0gJ2ltZycpIHtcbiAgICAgICAgICBpbWcgPSBDaGlsZHJlbi50b0FycmF5KGl0ZW0ucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi50eXBlID09PSAnaW1nJztcbiAgICAgICAgICB9KVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nIHx8IGltZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyBpbWFnZXMgZm91bmQhIENhbid0IGJ1aWxkIHRoZSB0aHVtYiBsaXN0IHdpdGhvdXQgaW1hZ2VzLiBJZiB5b3UgZG9uJ3QgbmVlZCB0aHVtYnMsIHNldCBzaG93VGh1bWJzPXtmYWxzZX0gaW4gdGhlIENhcm91c2VsLiBOb3RlIHRoYXQgaXQncyBub3QgcG9zc2libGUgdG8gZ2V0IGltYWdlcyByZW5kZXJlZCBpbnNpZGUgY3VzdG9tIGNvbXBvbmVudHMuIE1vcmUgaW5mbyBhdCBodHRwczovL2dpdGh1Yi5jb20vbGVhbmRyb3dkL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvYmxvYi9tYXN0ZXIvVFJPVUJMRVNIT09USU5HLm1kXCIpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWFnZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEZpcnN0SXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaXJzdEl0ZW0oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gc2VsZWN0ZWRJdGVtO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtID49IHRoaXMuc3RhdGUubGFzdFBvc2l0aW9uKSB7XG4gICAgICAgIGZpcnN0SXRlbSA9IHRoaXMuc3RhdGUubGFzdFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtIDwgdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKyB0aGlzLnN0YXRlLnZpc2libGVJdGVtcykge1xuICAgICAgICBmaXJzdEl0ZW0gPSB0aGlzLnN0YXRlLmZpcnN0SXRlbTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA8IHRoaXMuc3RhdGUuZmlyc3RJdGVtKSB7XG4gICAgICAgIGZpcnN0SXRlbSA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpcnN0SXRlbTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySXRlbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1nLCBpbmRleCkge1xuICAgICAgICB2YXIgaXRlbUNsYXNzID0ga2xhc3MuSVRFTShmYWxzZSwgaW5kZXggPT09IF90aGlzMi5zdGF0ZS5zZWxlY3RlZEl0ZW0gJiYgX3RoaXMyLnN0YXRlLmhhc01vdW50KTtcbiAgICAgICAgdmFyIHRodW1iUHJvcHMgPSB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFRodW1ic1JlZihlLCBpbmRleCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IGl0ZW1DbGFzcyxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2tJdGVtLmJpbmQoX3RoaXMyLCBpbmRleCwgX3RoaXMyLnByb3BzLmNoaWxkcmVuW2luZGV4XSksXG4gICAgICAgICAgb25LZXlEb3duOiBfdGhpczIuaGFuZGxlQ2xpY2tJdGVtLmJpbmQoX3RoaXMyLCBpbmRleCwgX3RoaXMyLnByb3BzLmNoaWxkcmVuW2luZGV4XSksXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBcIlwiLmNvbmNhdChfdGhpczIucHJvcHMubGFiZWxzLml0ZW0sIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IF90aGlzMi5wcm9wcy50aHVtYldpZHRoXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGltZyA9IFJlYWN0LmNsb25lRWxlbWVudChpbWcsIHtcbiAgICAgICAgICAgIG9uTG9hZDogX3RoaXMyLnNldE1vdW50U3RhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIF9leHRlbmRzKHt9LCB0aHVtYlByb3BzLCB7XG4gICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgICB0YWJJbmRleDogMFxuICAgICAgICB9KSwgaW1nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyBzaG93IGxlZnQgYXJyb3c/XG5cblxuICAgICAgdmFyIGhhc1ByZXYgPSB0aGlzLnN0YXRlLnNob3dBcnJvd3MgJiYgdGhpcy5zdGF0ZS5maXJzdEl0ZW0gPiAwOyAvLyBzaG93IHJpZ2h0IGFycm93XG5cbiAgICAgIHZhciBoYXNOZXh0ID0gdGhpcy5zdGF0ZS5zaG93QXJyb3dzICYmIHRoaXMuc3RhdGUuZmlyc3RJdGVtIDwgdGhpcy5zdGF0ZS5sYXN0UG9zaXRpb247IC8vIG9iaiB0byBob2xkIHRoZSB0cmFuc2Zvcm1hdGlvbnMgYW5kIHN0eWxlc1xuXG4gICAgICB2YXIgaXRlbUxpc3RTdHlsZXMgPSB7fTtcbiAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAtdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiB0aGlzLnN0YXRlLml0ZW1TaXplICsgJ3B4JztcbiAgICAgIHZhciB0cmFuc2Zvcm1Qcm9wID0gQ1NTVHJhbnNsYXRlKGN1cnJlbnRQb3NpdGlvbiwgdGhpcy5wcm9wcy5heGlzKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uVGltZSA9IHRoaXMucHJvcHMudHJhbnNpdGlvblRpbWUgKyAnbXMnO1xuICAgICAgaXRlbUxpc3RTdHlsZXMgPSB7XG4gICAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgTW96VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBNc1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgT1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgTW96VHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgTXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICBPVHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uVGltZSxcbiAgICAgICAgbXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBrbGFzcy5DQVJPVVNFTChmYWxzZSlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBrbGFzcy5XUkFQUEVSKGZhbHNlKSxcbiAgICAgICAgcmVmOiB0aGlzLnNldEl0ZW1zV3JhcHBlclJlZlxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IGtsYXNzLkFSUk9XX1BSRVYoIWhhc1ByZXYpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnNsaWRlUmlnaHQsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmxhYmVscy5sZWZ0QXJyb3dcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZSwge1xuICAgICAgICB0YWdOYW1lOiBcInVsXCIsXG4gICAgICAgIGNsYXNzTmFtZToga2xhc3MuU0xJREVSKGZhbHNlLCB0aGlzLnN0YXRlLnN3aXBpbmcpLFxuICAgICAgICBvblN3aXBlTGVmdDogdGhpcy5zbGlkZUxlZnQsXG4gICAgICAgIG9uU3dpcGVSaWdodDogdGhpcy5zbGlkZVJpZ2h0LFxuICAgICAgICBvblN3aXBlTW92ZTogdGhpcy5vblN3aXBlTW92ZSxcbiAgICAgICAgb25Td2lwZVN0YXJ0OiB0aGlzLm9uU3dpcGVTdGFydCxcbiAgICAgICAgb25Td2lwZUVuZDogdGhpcy5vblN3aXBlRW5kLFxuICAgICAgICBzdHlsZTogaXRlbUxpc3RTdHlsZXMsXG4gICAgICAgIGlubmVyUmVmOiB0aGlzLnNldEl0ZW1zTGlzdFJlZlxuICAgICAgfSwgdGhpcy5yZW5kZXJJdGVtcygpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IGtsYXNzLkFSUk9XX05FWFQoIWhhc05leHQpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnNsaWRlTGVmdCxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMubGFiZWxzLnJpZ2h0QXJyb3dcbiAgICAgIH0pKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRodW1icztcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFRodW1icywgXCJkaXNwbGF5TmFtZVwiLCAnVGh1bWJzJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUaHVtYnMsIFwicHJvcHNUeXBlc1wiLCB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aHVtYldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsYWJlbHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGVmdEFycm93OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJpZ2h0QXJyb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUaHVtYnMsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgc2VsZWN0ZWRJdGVtOiAwLFxuICB0aHVtYldpZHRoOiA4MCxcbiAgdHJhbnNpdGlvblRpbWU6IDM1MCxcbiAgYXhpczogJ2hvcml6b250YWwnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJzOyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBST09UOiBmdW5jdGlvbiBST09UKGN1c3RvbUNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjbGFzc05hbWVzKHtcbiAgICAgICdjYXJvdXNlbC1yb290JzogdHJ1ZSxcbiAgICAgIFtjdXN0b21DbGFzc05hbWVdOiAhIWN1c3RvbUNsYXNzTmFtZVxuICAgIH0pO1xuICB9LFxuICBDQVJPVVNFTDogZnVuY3Rpb24gQ0FST1VTRUwoaXNTbGlkZXIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lcyh7XG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcbiAgICAgICdjYXJvdXNlbC1zbGlkZXInOiBpc1NsaWRlclxuICAgIH0pO1xuICB9LFxuICBXUkFQUEVSOiBmdW5jdGlvbiBXUkFQUEVSKGlzU2xpZGVyLCBheGlzKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoe1xuICAgICAgJ3RodW1icy13cmFwcGVyJzogIWlzU2xpZGVyLFxuICAgICAgJ3NsaWRlci13cmFwcGVyJzogaXNTbGlkZXIsXG4gICAgICAnYXhpcy1ob3Jpem9udGFsJzogYXhpcyA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgJ2F4aXMtdmVydGljYWwnOiBheGlzICE9PSAnaG9yaXpvbnRhbCdcbiAgICB9KTtcbiAgfSxcbiAgU0xJREVSOiBmdW5jdGlvbiBTTElERVIoaXNTbGlkZXIsIGlzU3dpcGluZykge1xuICAgIHJldHVybiBjbGFzc05hbWVzKHtcbiAgICAgIHRodW1iczogIWlzU2xpZGVyLFxuICAgICAgc2xpZGVyOiBpc1NsaWRlcixcbiAgICAgIGFuaW1hdGVkOiAhaXNTd2lwaW5nXG4gICAgfSk7XG4gIH0sXG4gIElURU06IGZ1bmN0aW9uIElURU0oaXNTbGlkZXIsIHNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoe1xuICAgICAgdGh1bWI6ICFpc1NsaWRlcixcbiAgICAgIHNsaWRlOiBpc1NsaWRlcixcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgIH0pO1xuICB9LFxuICBBUlJPV19QUkVWOiBmdW5jdGlvbiBBUlJPV19QUkVWKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoe1xuICAgICAgJ2NvbnRyb2wtYXJyb3cgY29udHJvbC1wcmV2JzogdHJ1ZSxcbiAgICAgICdjb250cm9sLWRpc2FibGVkJzogZGlzYWJsZWRcbiAgICB9KTtcbiAgfSxcbiAgQVJST1dfTkVYVDogZnVuY3Rpb24gQVJST1dfTkVYVChkaXNhYmxlZCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzKHtcbiAgICAgICdjb250cm9sLWFycm93IGNvbnRyb2wtbmV4dCc6IHRydWUsXG4gICAgICAnY29udHJvbC1kaXNhYmxlZCc6IGRpc2FibGVkXG4gICAgfSk7XG4gIH0sXG4gIERPVDogZnVuY3Rpb24gRE9UKHNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoe1xuICAgICAgZG90OiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgfSk7XG4gIH1cbn07IiwiZXhwb3J0IHZhciB1bml0ID0gZnVuY3Rpb24gdW5pdChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKCEvKHB0fHB4fGVtfHJlbXx2d3x2aHwlKSQvLnRlc3QocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3VwcGxpZWQgdG8nICsgJyBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gVmFsaWRhdGlvbiBmYWlsZWQuIEl0IG5lZWRzIHRvIGJlIGEgc2l6ZSB1bml0IGxpa2UgcHQsIHB4LCBlbSwgcmVtLCB2dywgJScpO1xuICB9XG59OyIsImV4cG9ydCB2YXIgb3V0ZXJXaWR0aCA9IGZ1bmN0aW9uIG91dGVyV2lkdGgoZWwpIHtcbiAgdmFyIHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB3aWR0aCArPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgcmV0dXJuIHdpZHRoO1xufTsiLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL0Nhcm91c2VsJztcbmltcG9ydCBUaHVtYnMgZnJvbSAnLi9jb21wb25lbnRzL1RodW1icyc7XG5leHBvcnQgeyBDYXJvdXNlbCwgVGh1bWJzIH07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50O1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdztcbn0pOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwubWluLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5taW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==