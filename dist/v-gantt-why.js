(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-gantt-why"] = factory();
	else
		root["v-gantt-why"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5cd8");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0288":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "064b":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "0655":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("0288")))

/***/ }),

/***/ "07a2":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("8a1c");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "08ba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var DOMIterables = __webpack_require__("064b");
var forEach = __webpack_require__("3c10");
var createNonEnumerableProperty = __webpack_require__("0fc1");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "0a51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("1c8b");
var DESCRIPTORS = __webpack_require__("1e2c");
var global = __webpack_require__("d890");
var has = __webpack_require__("faa8");
var isObject = __webpack_require__("a719");
var defineProperty = __webpack_require__("d910").f;
var copyConstructorProperties = __webpack_require__("c69d");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "0a60":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "0c3c":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "0fc1":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var definePropertyModule = __webpack_require__("d910");
var createPropertyDescriptor = __webpack_require__("38b9");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "1025":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("3a08");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "16ff":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("a1a8");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("e505");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("ea92");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".gantt-chart{position:relative;overflow:hidden;outline:1px solid #f0f0f0}.gantt-chart,.gantt-container{height:100%;width:100%}.gantt-header{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;outline:1px solid #f0f0f0}.gantt-header-title{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%;background:#747e80;color:#fff;text-align:center}.gantt-header-timeline{overflow:hidden}.gantt-body,.gantt-timeline{position:relative}.gantt-timeline{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex}.gantt-timeline-day{overflow:hidden;font-weight:700;color:#777}.gantt-timeline-scale{display:-webkit-box;display:-ms-flexbox;display:flex}.gantt-timeline-scale>div{height:100%;font-size:.8rem;font-weight:700;color:#777;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:18px}.gantt-timeline-block:first-child .gantt-timeline-scale div:first-child{visibility:hidden}.gantt-leftbar{width:100%;height:100%;background:#fff;color:#777;font-size:.8rem}.gantt-leftbar-wrapper{-webkit-box-flex:0;-ms-flex:none;flex:none;position:relative;overflow:hidden;background:#fff;outline:1px solid #f0f0f0;z-index:100}.gantt-leftbar-defalutItem{width:100%;height:100%;outline:1px solid #f0f0f0}.gantt-table{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.gantt-markline-area{position:absolute;z-index:99}.gantt-markline{position:absolute;z-index:100;width:2px;height:100vh}.gantt-markline-label{padding:3px;float:left;color:#fff;font-size:.7rem}.gantt-blocks-wrapper{overflow:hidden}.gantt-block{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:repeat}.gantt-block-container{position:relative;height:100%}.gantt-block-item{position:absolute;height:100%}.gantt-block-defaultBlock{width:100%;height:100%;outline:1px solid #f0f0f0;background:#f0f0f0}.gantt-scroll-y{overflow-y:scroll;position:absolute;z-index:1000;top:0;right:0;height:100%;width:17px}.gantt-scroll-y>div{width:17px}.gantt-scroll-x{overflow-x:scroll;position:absolute;z-index:1000;left:0;bottom:0;width:100%;height:17px}.gantt-scroll-x>div{height:17px}.gantt-header-title{background:#fff;font-size:16px;font-family:PingFang SC;font-weight:500;color:#5181df}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var $reduce = __webpack_require__("58d8").left;
var arrayMethodIsStrict = __webpack_require__("d7e1");
var arrayMethodUsesToLength = __webpack_require__("ff9c");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "18f6":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "1944":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var createNonEnumerableProperty = __webpack_require__("0fc1");
var has = __webpack_require__("faa8");
var setGlobal = __webpack_require__("e4db");
var inspectSource = __webpack_require__("1025");
var InternalStateModule = __webpack_require__("b702");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "1b2e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("1c8b");

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "1b99":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");

module.exports = global;


/***/ }),

/***/ "1bbd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("9f67");
var definePropertyModule = __webpack_require__("d910");
var createPropertyDescriptor = __webpack_require__("38b9");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "1c2e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("1944");
var anObject = __webpack_require__("857c");
var fails = __webpack_require__("efe2");
var flags = __webpack_require__("99ad");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "1c8b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var getOwnPropertyDescriptor = __webpack_require__("aa6b").f;
var createNonEnumerableProperty = __webpack_require__("0fc1");
var redefine = __webpack_require__("1944");
var setGlobal = __webpack_require__("e4db");
var copyConstructorProperties = __webpack_require__("c69d");
var isForced = __webpack_require__("e8d6");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "1ca1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");
var isArray = __webpack_require__("74e7");
var wellKnownSymbol = __webpack_require__("90fb");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "1e2c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("efe2");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "1ea7":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("efe2");
var wellKnownSymbol = __webpack_require__("90fb");
var V8_VERSION = __webpack_require__("f594");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2039":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var fails = __webpack_require__("efe2");
var createElement = __webpack_require__("ae25");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "2118":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "258f":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("90fb");
var create = __webpack_require__("6d60");
var definePropertyModule = __webpack_require__("d910");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "2732":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "27b5":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("d910").f;
var has = __webpack_require__("faa8");
var wellKnownSymbol = __webpack_require__("90fb");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "2a91":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("47ae");
var classofRaw = __webpack_require__("2118");
var wellKnownSymbol = __webpack_require__("90fb");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "2e4c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("16ff");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("9c13f43c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3438":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}});


/***/ }),

/***/ "3553":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("2732");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "38b9":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "3a08":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var setGlobal = __webpack_require__("e4db");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "3ac0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ab0d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("424c8e08", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("5dfd").forEach;
var arrayMethodIsStrict = __webpack_require__("d7e1");
var arrayMethodUsesToLength = __webpack_require__("ff9c");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "3da3":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "4194":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var $find = __webpack_require__("5dfd").find;
var addToUnscopables = __webpack_require__("258f");
var arrayMethodUsesToLength = __webpack_require__("ff9c");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "4350":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("90fb");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "45af":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("da10");
var toLength = __webpack_require__("d88d");
var toAbsoluteIndex = __webpack_require__("e1d6");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "47ae":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("90fb");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "4fda":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("6d7a");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "50fb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("857c");
var aPossiblePrototype = __webpack_require__("d1fd");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "513c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("1e2c");
var global = __webpack_require__("d890");
var isForced = __webpack_require__("e8d6");
var redefine = __webpack_require__("1944");
var has = __webpack_require__("faa8");
var classof = __webpack_require__("2118");
var inheritIfRequired = __webpack_require__("7063");
var toPrimitive = __webpack_require__("9f67");
var fails = __webpack_require__("efe2");
var create = __webpack_require__("6d60");
var getOwnPropertyNames = __webpack_require__("b338").f;
var getOwnPropertyDescriptor = __webpack_require__("aa6b").f;
var defineProperty = __webpack_require__("d910").f;
var trim = __webpack_require__("c10f").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "52f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("47ae");
var classof = __webpack_require__("2a91");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "58d8":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("0c3c");
var toObject = __webpack_require__("3553");
var IndexedObject = __webpack_require__("692f");
var toLength = __webpack_require__("d88d");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "5cd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.8@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/gantt.vue?vue&type=template&id=1d81c0e5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-chart",on:{"&wheel":function($event){return _vm.wheelHandle($event)},"&touchstart":function($event){return _vm.touchStartHandle($event)},"&touchmove":function($event){return _vm.touchMoveHandle($event)},"&touchend":function($event){return _vm.touchEndHandle($event)}}},[_c('div',{staticClass:"gantt-container",style:({
      height: ("calc(100% - " + _vm.scrollXBarHeight + "px)"),
      width: ("calc(100% - " + _vm.scrollYBarWidth + "px)")
    })},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideHeader),expression:"!hideHeader"}],staticClass:"gantt-header",style:({ width: ("calc(100% + " + _vm.scrollYBarWidth + "px)") })},[_c('div',{staticClass:"gantt-header-title",style:({
          'line-height': _vm.titleHeight + 'px',
          height: _vm.titleHeight + 'px',
          width: _vm.titleWidth + 'px'
        })},[_vm._t("title",[_vm._v("welcome v-gantt-chart")])],2),_c('div',{ref:"headerTimeline",staticClass:"gantt-header-timeline"},[_c('div',{staticClass:"gantt-timeline-wrapper",style:({ width: _vm.totalWidth + _vm.scrollYBarWidth + 'px' })},[_c('timeline',{attrs:{"start":_vm.start,"end":_vm.end,"cellWidth":_vm.cellWidth,"titleHeight":_vm.titleHeight,"scale":_vm.scale,"startTimeOfRenderArea":_vm.dayjs(_vm.startTimeOfRenderArea),"endTimeOfRenderArea":_vm.dayjs(_vm.endTimeOfRenderArea),"getPositonOffset":_vm.getPositonOffset},scopedSlots:_vm._u([{key:"default",fn:function(ref){
        var day = ref.day;
        var getTimeScales = ref.getTimeScales;
return [_vm._t("timeline",null,{"day":day,"getTimeScales":getTimeScales})]}}],null,true)})],1)])]),_c('div',{staticClass:"gantt-body",style:({ height: ("calc(100% - " + _vm.actualHeaderHeight + "px)") })},[_c('div',{staticClass:"gantt-table"},[_c('div',{ref:"marklineArea",staticClass:"gantt-markline-area",style:({ marginLeft: _vm.titleWidth + 'px' })},[(_vm.showCurrentTime)?_c('CurrentTime',{attrs:{"getPositonOffset":_vm.getPositonOffset}}):_vm._e(),_vm._l((_vm.timeLines),function(times,index){return _c('mark-line',{key:index,attrs:{"markLineTime":times.time,"getPositonOffset":_vm.getPositonOffset,"color":times.color}})})],2),_c('div',{ref:"leftbarWrapper",staticClass:"gantt-leftbar-wrapper",style:({
            width: _vm.titleWidth + 'px',
            height: ("calc(100% + " + _vm.scrollXBarHeight + "px)")
          })},[_c('LeftBar',{style:({ height: _vm.totalHeight + _vm.scrollXBarHeight + 'px' }),attrs:{"datas":_vm.datas,"dataKey":_vm.dataKey,"scrollTop":_vm.scrollTop,"heightOfBlocksWrapper":_vm.heightOfBlocksWrapper,"cellHeight":_vm.cellHeight,"preload":_vm.preload},scopedSlots:_vm._u([{key:"default",fn:function(ref){
          var data = ref.data;
return [_vm._t("left",null,{"data":data})]}}],null,true)})],1),_c('div',{ref:"blocksWrapper",staticClass:"gantt-blocks-wrapper"},[_c('blocks',{style:({ width: _vm.totalWidth + 'px' }),attrs:{"scrollTop":_vm.scrollTop,"scrollLeft":_vm.scrollLeft,"heightOfBlocksWrapper":_vm.heightOfBlocksWrapper,"widthOfBlocksWrapper":_vm.widthOfBlocksWrapper,"arrayKeys":_vm.arrayKeys,"itemKey":_vm.itemKey,"dataKey":_vm.dataKey,"datas":_vm.datas,"cellWidth":_vm.cellWidth,"cellHeight":_vm.cellHeight,"scale":_vm.scale,"getPositonOffset":_vm.getPositonOffset,"getWidthAbout2Times":_vm.getWidthAbout2Times,"customGenerateBlocks":_vm.customGenerateBlocks,"startTimeOfRenderArea":_vm.startTimeOfRenderArea,"endTimeOfRenderArea":_vm.endTimeOfRenderArea,"preload":_vm.preload},scopedSlots:_vm._u([(!_vm.customGenerateBlocks)?{key:"default",fn:function(ref){
          var data = ref.data;
          var item = ref.item;
return [_vm._t("block",null,{"data":data,"item":item})]}}:{key:"default",fn:function(ref){
              var data = ref.data;
              var getPositonOffset = ref.getPositonOffset;
              var getWidthAbout2Times = ref.getWidthAbout2Times;
              var isInRenderingTimeRange = ref.isInRenderingTimeRange;
              var isAcrossRenderingTimeRange = ref.isAcrossRenderingTimeRange;
return [_vm._t("block",null,{"data":data,"getPositonOffset":getPositonOffset,"getWidthAbout2Times":getWidthAbout2Times,"isInRenderingTimeRange":isInRenderingTimeRange,"isAcrossRenderingTimeRange":isAcrossRenderingTimeRange,"startTimeOfRenderArea":_vm.startTimeOfRenderArea,"endTimeOfRenderArea":_vm.endTimeOfRenderArea})]}}],null,true)})],1)])])]),_c('div',{ref:"scrollYBar",staticClass:"gantt-scroll-y",style:({
      width: (_vm.scrollYBarWidth + "px"),
      height: ("calc(100% - " + _vm.actualHeaderHeight + "px"),
      marginTop: (_vm.actualHeaderHeight + "px")
    }),on:{"&scroll":function($event){return _vm.syncScrollY($event)}}},[_c('div',{style:({ height: _vm.totalHeight + 'px' })})]),_c('div',{ref:"scrollXBar",staticClass:"gantt-scroll-x",style:({
      height: (_vm.scrollXBarHeight + "px"),
      width: ("calc(100% - " + _vm.titleWidth + "px )"),
      marginLeft: _vm.titleWidth + 'px'
    }),on:{"&scroll":function($event){return _vm.syncScrollX($event)}}},[_c('div',{style:({ width: _vm.totalWidth + 'px' })})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/gantt.vue?vue&type=template&id=1d81c0e5&

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("b4fb");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("fe59");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("b130");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("513c");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__("1b2e");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.number.parse-float.js
var es_number_parse_float = __webpack_require__("b691");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("e18c");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("1c2e");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("90aa");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("08ba");

// EXTERNAL MODULE: ./node_modules/_dayjs@1.9.4@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("a0f6");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./node_modules/_resize-observer-polyfill@1.5.1@resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("0655");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("9302");

// CONCATENATED MODULE: ./src/utils/timeLineUtils.js



// import dayjs from "dayjs";
var scaleList = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60, 120, 180, 240, 360, 720, 1440];
var MINUTE_OF_ONE_DAY = 60 * 24;
function timeLineUtils_isDayScale(scale) {
  return scale >= MINUTE_OF_ONE_DAY && scale % MINUTE_OF_ONE_DAY === 0;
}
/**
 * 验证是否合法scale值
 *
 * @export
 * @param {number} scale
 * @returns
 */

function validateScale(scale) {
  if (!scaleList.includes(scale) && !timeLineUtils_isDayScale(scale)) {
    throw new RangeError("\u9519\u8BEF\u7684scale\u503C\uFF0C\u8F93\u5165\u503C\u4E3A".concat(scale, ",\u53EF\u7528\u7684scale\u503C\u4E3A").concat(scaleList.join(","), ",\u6216\u8005\u4E3A1440\u7684\u6574\u6570\u500D"));
  }

  return true;
}
/**
 * 根据给出的scale 和 start 时间 计算出用于计算和生成图表的启始时间
 * eg：Start 为10:10分 刻度为60，getBeginTimeOfTimeLine函数给出的时间 为 10:00分
 *                    刻度为5，getBeginTimeOfTimeLine函数给出的时间 为 10:10分
 *                    刻度为3，getBeginTimeOfTimeLine函数给出的时间 为 10:09分
 *
 * @export
 * @param {dayjs} start
 * @param {number} [scale=60]
 * @returns {dayjs}计算的启始时间
 */

function getBeginTimeOfTimeLine(start) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  validateScale(scale);
  var timeBlocks;
  var result = start.clone();
  var rate = scale / 60;

  if (scale > 60) {
    timeBlocks = Math.floor(start.hour() / rate);
    result = result.hour(timeBlocks * rate).minute(0).second(0);
  } else {
    timeBlocks = Math.floor(start.minute() / scale);
    result = result.minute(timeBlocks * scale).second(0);
  }

  return result;
}
/**
 * 根据所给 scale计算 两个时间差一共可以分成多少个刻度
 * 注意： timdStart 并不是实际的开始计算的时间，会通过getBeginTimeOfTimeLine 函数计算出分割开始时间
 *
 * @export
 * @param {dayjs} timeStart 开始时间
 * @param {dayjs} timeEnd 结束时间
 * @param {number} [scale=60] 分割的刻度
 * @returns 时间块数量
 */

function calcScalesAbout2Times(timeStart, timeEnd) {
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

  if (timeStart.isAfter(timeEnd)) {
    throw new TypeError("错误的参数顺序，函数calcScalesAbout2Times的第一个时间参数必须大于第二个时间参数");
  }

  validateScale(scale);
  var startBlocksTime = getBeginTimeOfTimeLine(timeStart, scale);
  var result = 0;

  while (!startBlocksTime.isAfter(timeEnd)) {
    result++;
    startBlocksTime = startBlocksTime.add(scale, "minute");
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/tool.js
/**
 * 是否没有值
 *
 * @export
 * @param {*} v
 * @returns
 */
function isUndef(v) {
  return v === undefined || v === null;
}
/**
 * 是否有值
 *
 * @export
 * @param {*} v
 * @returns
 */

function isDef(v) {
  return v !== undefined && v !== null;
}
function warn(str) {
  // eslint-disable-next-line
  console.warn(str);
}
// CONCATENATED MODULE: ./src/utils/gtUtils.js
// import dayjs from 'dayjs' //替换dayjs 兼容性会好一点，但是速度就很慢了，之前测了一下，大概快30倍？有点忘记了
//缓存 解析值，加速一点点吧
var cacheParseTime = function () {
  var cacheString = {};
  var cacheValue = {};
  var count = 0;
  return function (timeName, timeString) {
    if (cacheString[timeName] !== timeString) {
      // 避免缓存过多对象
      if (count++ > 10000) {
        cacheString = {};
        cacheValue = {};
      }

      cacheString[timeName] = timeString;
      return cacheValue[timeName] = parseTime(timeString);
    }

    return cacheValue[timeName];
  };
}(); // pStart 关于缓存这个值是因为getWidthAbout2Times和getPositonOffset通常是前后连续调用，start 值会再两个函数中分别用到一次

/**
 * 根据配置项计算两个时间的在gantt 图中的长度
 * 注：时间上start 早， end 晚
 *
 * @export
 * @param {string} start
 * @param {string} end
 * @param {{scale:number,cellWidth:number}} arg
 * @returns number
 */


function gtUtils_getWidthAbout2Times(start, end, arg) {
  var scale = arg.scale,
      cellWidth = arg.cellWidth;
  var pStart = cacheParseTime("pStart", start);
  var pEnd = parseTime(end);
  return diffTimeByMinutes(pStart, pEnd) / scale * cellWidth;
}
/**
 * 根据配置项计算 相对于 时间轴起始时间的距离 是 getWidthAbout2Times 的特化
 * 注：时间上，time 晚  beginTimeOfTimeLine 早
 *
 * @export
 * @param {string} time
 * @param {string} beginTimeOfTimeLine
 * @param {{scale:number,cellWidth:number}} arg
 * @returns number
 */

function gtUtils_getPositonOffset(time, beginTimeOfTimeLine, arg) {
  var scale = arg.scale,
      cellWidth = arg.cellWidth;
  var pTime = cacheParseTime("pStart", time);
  var pBeginTimeOfTimeLine = cacheParseTime("pBeginTimeOfTimeLine", beginTimeOfTimeLine);
  return diffTimeByMinutes(pBeginTimeOfTimeLine, pTime) / scale * cellWidth;
}

function parseTime(time) {
  return new Date(time);
}
/**
 * 计算两个时间相差的分钟数
 *
 * @param {string} start
 * @param {string} end
 * @returns
 */


function diffTimeByMinutes(start, end) {
  var diff = end.getTime() - start.getTime();
  return diff / 1000 / 60;
} // function parseTime(time){
//   return dayjs(time)
// }
// function diffTimeByMinutes(start,end){
//   return end.diff(start, "m", true)
// }
// CONCATENATED MODULE: ./src/utils/throttle.js
function throttle(fn) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  //fn为要执行的函数，interval为延迟时间
  var _self = fn,
      //保存需要被延迟执行的函数引用
  timer,
      //定时器
  firstTime = true; //是否第一次调用

  return function () {
    //返回一个函数，形成闭包，持久化变量
    var args = arguments,
        //缓存变量
    _me = this;

    if (firstTime) {
      //如果是第一次调用，不用延迟执行
      _self.apply(_me, args);

      return firstTime = false;
    }

    if (timer) {
      //如果定时器还在，说明上一次延迟执行还没有完成
      return false;
    }

    timer = setTimeout(function () {
      //延迟一段时间执行
      clearTimeout(timer);
      timer = null;

      _self.apply(_me, args);
    }, interval);
  };
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/time-line/index.vue?vue&type=template&id=46bb0151&
var time_linevue_type_template_id_46bb0151_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-timeline",style:({ 'margin-left': -_vm.cellWidth / 2 + 'px' })},[(_vm.lazy)?_c('div',{staticClass:"gantt-timeline-padding_block",style:({ width: _vm.paddingWidth + 'px' })}):_vm._e(),_vm._l((_vm.allDayBlocks),function(day,index){return [(!_vm.lazy || _vm.isInRenderingDayRange(day))?_c('div',{key:index,staticClass:"gantt-timeline-block",style:({ width: _vm.getTimeScales(day).length * _vm.cellWidth + 'px' })},[_vm._t("default",[_c('div',{staticClass:"gantt-timeline-day",style:(_vm.heightStyle)},[_vm._v(" "+_vm._s(day.format("YYYY-MM-DD"))+" ")]),(!_vm.isDayScale)?_c('div',{staticClass:"gantt-timeline-scale",style:(_vm.heightStyle)},_vm._l((_vm.getTimeScales(day)),function(time,index){return _c('div',{key:index,style:(_vm.cellWidthStyle)})}),0):_vm._e()],{"day":day,"getTimeScales":_vm.getTimeScales})],2):_vm._e()]})],2)}
var time_linevue_type_template_id_46bb0151_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/time-line/index.vue?vue&type=template&id=46bb0151&

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("f3dd");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("0a51");

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("4194");

// EXTERNAL MODULE: ./node_modules/_dayjs@1.9.4@dayjs/plugin/isSameOrBefore.js
var isSameOrBefore = __webpack_require__("e60a");
var isSameOrBefore_default = /*#__PURE__*/__webpack_require__.n(isSameOrBefore);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.9.4@dayjs/plugin/isSameOrAfter.js
var isSameOrAfter = __webpack_require__("3438");
var isSameOrAfter_default = /*#__PURE__*/__webpack_require__.n(isSameOrAfter);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.9.4@dayjs/plugin/isBetween.js
var isBetween = __webpack_require__("5ecf");
var isBetween_default = /*#__PURE__*/__webpack_require__.n(isBetween);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/time-line/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




dayjs_min_default.a.extend(isSameOrBefore_default.a);
dayjs_min_default.a.extend(isSameOrAfter_default.a);
dayjs_min_default.a.extend(isBetween_default.a);

var START_DAY = Symbol();
var MIDDLE_DAY = Symbol();
var END_DAY = Symbol();

function isSameDay(one, two) {
  return one.isSame(two, "day");
}

function isSameOrBetween(start, end, mid) {
  return mid.isSameOrAfter(start) && mid.isSameOrBefore(end);
}

/* harmony default export */ var time_linevue_type_script_lang_js_ = ({
  name: "Timeline",
  props: {
    start: {
      type: dayjs_min_default.a
    },
    end: {
      type: dayjs_min_default.a
    },
    cellWidth: {
      type: Number
    },
    titleHeight: {
      type: Number
    },
    scale: {
      type: Number
    },
    endTimeOfRenderArea: [dayjs_min_default.a, null],
    startTimeOfRenderArea: [dayjs_min_default.a, null],
    getPositonOffset: {
      type: Function
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    startDayOfRenderArea: function startDayOfRenderArea() {
      return this.startTimeOfRenderArea.startOf("day");
    },
    endDayOfRenderArea: function endDayOfRenderArea() {
      return this.endTimeOfRenderArea.endOf("day");
    },
    paddingWidth: function paddingWidth() {
      var allDayBlocks = this.allDayBlocks,
          scale = this.scale,
          startDayOfRenderArea = this.startDayOfRenderArea;
      var temp = allDayBlocks.find(function (day) {
        if (scale >= MINUTE_OF_ONE_DAY && startDayOfRenderArea.isBetween(day, day.add(scale / MINUTE_OF_ONE_DAY, "day"))) {
          return true;
        } else {
          return isSameDay(day, startDayOfRenderArea);
        }
      });

      if (!temp || temp == allDayBlocks[0]) {
        return 0;
      } else {
        return this.getPositonOffset(temp.toString());
      }
    },
    isDayScale: function isDayScale() {
      var scale = this.scale;
      return timeLineUtils_isDayScale(scale);
    },

    /**
     * 天列表
     * @returns {[dayjs]} 该data中所有需要渲染的数据
     */
    allDayBlocks: function allDayBlocks() {
      var temp = [];
      var start = this.start,
          end = this.end,
          scale = this.scale,
          isDayScale = this.isDayScale;
      var tempStart = start.clone().startOf("day");
      var addNum = isDayScale && scale > MINUTE_OF_ONE_DAY ? scale / MINUTE_OF_ONE_DAY : 1;

      while (tempStart.isSameOrBefore(end)) {
        temp.push(tempStart);
        tempStart = tempStart.add(addNum, "day");
      }

      return temp;
    },
    cellWidthStyle: function cellWidthStyle() {
      return {
        width: "".concat(this.cellWidth, "px")
      };
    },
    heightStyle: function heightStyle() {
      return {
        height: this.titleHeight / (this.isDayScale ? 1 : 2) + "px",
        "line-height": this.titleHeight / (this.isDayScale ? 1 : 2) + "px"
      };
    }
  },
  methods: {
    isInRenderingDayRange: function isInRenderingDayRange(day) {
      var startDayOfRenderArea = this.startDayOfRenderArea,
          endDayOfRenderArea = this.endDayOfRenderArea,
          scale = this.scale;

      if (scale >= MINUTE_OF_ONE_DAY && startDayOfRenderArea.isBetween(day, day.add(scale / MINUTE_OF_ONE_DAY, "day"))) {
        return true;
      } else if (isSameOrBetween(startDayOfRenderArea, endDayOfRenderArea, day)) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * 获取时间刻度数组
     *
     * @param {dayjs} date
     * @returns {[string]} 该data中所有需要渲染的数据
     */
    getTimeScales: function getTimeScales(date) {
      var start = this.start,
          end = this.end;

      if (isSameDay(date, start)) {
        return this.generateTimeScale(START_DAY);
      } else if (isSameDay(date, end)) {
        return this.generateTimeScale(END_DAY);
      } else {
        return this.generateTimeScale(MIDDLE_DAY);
      }
    },

    /**
     * 生成时间刻度数组
     *
     * @param {Symbol} type
     * @returns {[string]} 该data中所有需要渲染的数据
     */
    generateTimeScale: function generateTimeScale(type) {
      var totalblock = [];
      var start = this.start,
          end = this.end,
          scale = this.scale;
      var a, b;

      switch (type) {
        case START_DAY:
          //和start同一天
          a = getBeginTimeOfTimeLine(start, scale); //start和end同一天特殊处理

          if (isSameDay(start, end)) {
            b = end;
          } else {
            b = start.endOf("day");
          }

          break;

        case END_DAY:
          //和end 同一天
          a = end.startOf("day");
          b = end;
          break;

        case MIDDLE_DAY:
          //start和end中间的天
          a = start.startOf("day");
          b = start.endOf("day");
          break;

        default:
          throw new TypeError("错误的计算类型");
      }

      while (!a.isAfter(b)) {
        totalblock.push(a);
        a = a.add(scale, "minute");
      }

      return totalblock;
    }
  }
});
// CONCATENATED MODULE: ./src/components/time-line/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_time_linevue_type_script_lang_js_ = (time_linevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/time-line/index.vue





/* normalize component */

var component = normalizeComponent(
  components_time_linevue_type_script_lang_js_,
  time_linevue_type_template_id_46bb0151_render,
  time_linevue_type_template_id_46bb0151_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var time_line = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/mark-line/current-time.vue?vue&type=template&id=21fd45d2&
var current_timevue_type_template_id_21fd45d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mark-line',{attrs:{"markLineTime":_vm.currentTime,"getPositonOffset":_vm.getPositonOffset,"color":"rgba(255,0,0,.4)"}})}
var current_timevue_type_template_id_21fd45d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/mark-line/current-time.vue?vue&type=template&id=21fd45d2&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/mark-line/index.vue?vue&type=template&id=2ba0cb5c&
var mark_linevue_type_template_id_2ba0cb5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"gantt-markline",style:({ 'background-color': _vm.color, left: _vm.getPosition() + 'px' })},[_c('div',{staticClass:"gantt-markline-label",style:({ 'background-color': _vm.color })},[_vm._v(" "+_vm._s(_vm.dayjs(_vm.markLineTime).format("HH:mm:ss"))+" ")])])}
var mark_linevue_type_template_id_2ba0cb5c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/mark-line/index.vue?vue&type=template&id=2ba0cb5c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/mark-line/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mark_linevue_type_script_lang_js_ = ({
  name: "MarkLine",
  props: {
    markLineTime: {
      validator: function validator(date) {
        return dayjs_min_default()(date).isValid();
      }
    },
    color: {
      type: String,
      default: "#0ca30a"
    },
    getPositonOffset: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      visible: false,
      dayjs: dayjs_min_default.a
    };
  },
  methods: {
    getPosition: function getPosition() {
      if (this.markLineTime == null) {
        this.visible = false;
        return 0;
      } else {
        this.visible = true;
        return this.getPositonOffset(this.markLineTime);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/mark-line/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mark_linevue_type_script_lang_js_ = (mark_linevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/mark-line/index.vue





/* normalize component */

var mark_line_component = normalizeComponent(
  components_mark_linevue_type_script_lang_js_,
  mark_linevue_type_template_id_2ba0cb5c_render,
  mark_linevue_type_template_id_2ba0cb5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mark_line = (mark_line_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/mark-line/current-time.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//


/* harmony default export */ var current_timevue_type_script_lang_js_ = ({
  name: "CurrentTime",
  components: {
    MarkLine: mark_line
  },
  props: {
    getPositonOffset: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      currentTime: dayjs_min_default()().toString()
    };
  },
  created: function created() {
    var _this = this;

    var timeNow = setInterval(function () {
      _this.currentTime = dayjs_min_default()().toString();
    }, 1000);
    this.$once("hook:beforeDestroy", function () {
      clearInterval(timeNow);
    });
  }
});
// CONCATENATED MODULE: ./src/components/mark-line/current-time.vue?vue&type=script&lang=js&
 /* harmony default export */ var mark_line_current_timevue_type_script_lang_js_ = (current_timevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/mark-line/current-time.vue





/* normalize component */

var current_time_component = normalizeComponent(
  mark_line_current_timevue_type_script_lang_js_,
  current_timevue_type_template_id_21fd45d2_render,
  current_timevue_type_template_id_21fd45d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var current_time = (current_time_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/left-bar/index.vue?vue&type=template&id=58155d87&
var left_barvue_type_template_id_58155d87_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-leftbar"},[_c('div',{staticClass:"gantt-leftbar-item gantt-block-top-space",style:({ height: _vm.topSpace + 'px' })}),_vm._l((_vm.showDatas),function(data,index){return _c('div',{key:_vm.dataKey ? data[_vm.dataKey] : index,staticClass:"gantt-leftbar-item",style:(_vm.cellHeightStyle)},[_vm._t("default",[_c('div',{staticClass:"gantt-leftbar-defalutItem"},[_vm._v("need slot")])],{"data":data})],2)})],2)}
var left_barvue_type_template_id_58155d87_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/left-bar/index.vue?vue&type=template&id=58155d87&

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("77ad");

// CONCATENATED MODULE: ./src/components/dynamic-render.js



var dynamicRender = {
  props: {
    scrollTop: {
      type: Number,
      required: true
    },
    heightOfBlocksWrapper: {
      type: Number,
      required: true
    },
    cellHeight: {
      type: Number,
      required: true
    },
    datas: {
      type: Array,
      required: true
    },
    // 为 0 时加载全部行,
    //预加载的数量,是前后都计算
    preload: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      //上一次加载的第一个节点
      oldTopIndex: 0,
      startRenderNum: 0,
      endRenderNum: 0
    };
  },
  computed: {
    blockHeight: function blockHeight() {
      var datas = this.datas,
          cellHeight = this.cellHeight;
      return datas.length * cellHeight;
    },
    //计算当前屏幕显示的第一行数据的index
    currentTopIndex: function currentTopIndex() {
      var scrollTop = this.scrollTop,
          cellHeight = this.cellHeight,
          datas = this.datas,
          heightOfBlocksWrapper = this.heightOfBlocksWrapper;
      var availableScrollTop = datas.length * cellHeight - heightOfBlocksWrapper;

      if (cellHeight > 0 && availableScrollTop < scrollTop) {
        /*eslint no-console: "warn"*/
        console.warn("\u9519\u8BEF\u7684scrollTop\u503C ".concat(scrollTop, ",\u53EF\u7528\u6EDA\u52A8\u9AD8\u5EA6\u4E3A").concat(availableScrollTop, "\uFF0C\u4EE3\u7801\u81EA\u52A8\u77EB\u6B63"));
        return Math.ceil(availableScrollTop / cellHeight);
      }

      return Math.ceil(scrollTop / cellHeight);
    },
    showDatas: function showDatas() {
      var startRenderNum = this.startRenderNum,
          endRenderNum = this.endRenderNum,
          datas = this.datas;
      return datas.slice(startRenderNum, endRenderNum);
    },

    /**
     * 计算第一个撑开前置高度的容器块高度
     */
    topSpace: function topSpace() {
      var oldTopIndex = this.oldTopIndex,
          cellHeight = this.cellHeight,
          preload = this.preload;
      var start = oldTopIndex - preload > 0 ? oldTopIndex - preload : 0;
      return start * cellHeight;
    }
  },
  watch: {
    currentTopIndex: function currentTopIndex(val) {
      var oldTopIndex = this.oldTopIndex,
          preload = this.preload;

      if (preload === 0) {
        this.sliceData();
        return;
      }

      if (oldTopIndex === val) {
        return;
      } // 预先多加载几个，避免过多的触发sliceData，


      var errorValue = 1; // 为误差值，

      if (val < oldTopIndex - (preload - errorValue) || val > oldTopIndex + (preload - errorValue)) {
        this.oldTopIndex = val;
        this.sliceData();
      }
    },
    datas: function datas() {
      this.sliceData();
    },
    heightOfBlocksWrapper: function heightOfBlocksWrapper() {
      this.sliceData();
    },
    cellHeight: function cellHeight() {
      this.sliceData();
    },
    preload: function preload() {
      this.sliceData();
    }
  },
  created: function created() {
    this.sliceData();
  },
  methods: {
    /**
     * 分割出dom中需要显示的数据
     */
    sliceData: function sliceData() {
      var heightOfBlocksWrapper = this.heightOfBlocksWrapper,
          currentTopIndex = this.currentTopIndex,
          cellHeight = this.cellHeight,
          preload = this.preload,
          datas = this.datas; //没有高度，不需要渲染元素

      if (heightOfBlocksWrapper === 0 || cellHeight === 0) {
        this.endRenderNum = 0;
        this.startRenderNum = 0;
        return;
      } // 为 0 全部渲染


      if (preload === 0) {
        this.endRenderNum = datas.length;
        this.startRenderNum = 0;
        return;
      }

      var endRenderNum = currentTopIndex + Math.ceil(heightOfBlocksWrapper / cellHeight) + preload;
      this.endRenderNum = endRenderNum > datas.length ? datas.length : endRenderNum;
      this.startRenderNum = currentTopIndex - preload > 0 ? currentTopIndex - preload : 0;
    }
  }
};
/* harmony default export */ var dynamic_render = (dynamicRender);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/left-bar/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var left_barvue_type_script_lang_js_ = ({
  name: "LeftBar",
  mixins: [dynamic_render],
  props: {
    dataKey: String,
    datas: {
      type: Array,
      required: true
    }
  },
  computed: {
    cellHeightStyle: function cellHeightStyle() {
      return {
        height: "".concat(this.cellHeight, "px")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/left-bar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_left_barvue_type_script_lang_js_ = (left_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/left-bar/index.vue





/* normalize component */

var left_bar_component = normalizeComponent(
  components_left_barvue_type_script_lang_js_,
  left_barvue_type_template_id_58155d87_render,
  left_barvue_type_template_id_58155d87_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var left_bar = (left_bar_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82471f36-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/blocks/index.vue?vue&type=template&id=184bed09&scoped=true&
var blocksvue_type_template_id_184bed09_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-blocks",style:({ height: _vm.blockHeight + 'px' })},[_c('div',{staticClass:"gantt-block gantt-block-top-space",style:({ height: _vm.topSpace + 'px' })}),_vm._l((_vm.showDatas),function(data,index){return _c('div',{key:_vm.dataKey ? data[_vm.dataKey] : index,staticClass:"gantt-block",style:(_vm.blockStyle)},[_c('div',{staticClass:"top_class1"},[(!_vm.customGenerateBlocks)?[_vm._l((_vm.concatArray(data)),function(item,index){return [(
              _vm.isInRenderingTimeRangeOrIsAcrossRenderingTimeRange(
                item.start,
                item.end
              )
            )?_c('div',{key:_vm.itemKey ? item[_vm.itemKey] : index,staticClass:"gantt-block-item",style:({
              left: _vm.getPosition(item) + 'px',
              width: _vm.getWidth(item) + 'px'
            })},[_vm._t("default",[_c('div',{staticClass:"gantt-block-defaultBlock"},[_vm._v("need slot")])],{"data":data,"item":item})],2):_vm._e()]})]:[_vm._t("default",[_vm._v("need slot")],{"data":data,"getPositonOffset":_vm.getPositonOffset,"getWidthAbout2Times":_vm.getWidthAbout2Times,"isInRenderingTimeRange":_vm.isInRenderingTimeRange,"isAcrossRenderingTimeRange":_vm.isAcrossRenderingTimeRange})]],2),_c('div',{staticClass:"top_class2"},[(!_vm.customGenerateBlocks)?[_vm._l((_vm.concatArray2(data)),function(item,index){return [(
              _vm.isInRenderingTimeRangeOrIsAcrossRenderingTimeRange(
                item.start,
                item.end
              )
            )?_c('div',{key:_vm.itemKey ? item[_vm.itemKey] : index,staticClass:"gantt-block-item",style:({
              left: _vm.getPosition(item) + 'px',
              width: _vm.getWidth(item) + 'px'
            }),attrs:{"data-aa":"asd"}},[_vm._t("default",[_c('div',{staticClass:"gantt-block-defaultBlock"},[_vm._v("need slot")])],{"data":data,"item":item})],2):_vm._e()]})]:[_vm._t("default",[_vm._v("need slot")],{"data":data,"getPositonOffset":_vm.getPositonOffset,"getWidthAbout2Times":_vm.getWidthAbout2Times,"isInRenderingTimeRange":_vm.isInRenderingTimeRange,"isAcrossRenderingTimeRange":_vm.isAcrossRenderingTimeRange})]],2)])})],2)}
var blocksvue_type_template_id_184bed09_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/blocks/index.vue?vue&type=template&id=184bed09&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@3.6.5@core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("1784");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/components/blocks/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blocksvue_type_script_lang_js_ = ({
  name: "Blocks",
  mixins: [dynamic_render],
  props: {
    dataKey: String,
    itemKey: String,
    arrayKeys: {
      type: Array
    },
    scrollLeft: Number,
    cellWidth: {
      type: Number,
      required: true
    },
    scale: {
      type: Number,
      required: true
    },
    widthOfBlocksWrapper: {
      type: Number,
      required: true
    },
    endTimeOfRenderArea: [Number, null],
    startTimeOfRenderArea: [Number, null],
    getPositonOffset: Function,
    getWidthAbout2Times: Function,
    customGenerateBlocks: Boolean
  },
  computed: {
    renderAarrys: function renderAarrys() {
      var arrayKeys = this.arrayKeys;

      if (arrayKeys.length > 0) {
        return arrayKeys;
      }

      return ["gtArray"];
    },
    blockStyle: function blockStyle() {
      return {
        backgroundSize: "".concat(this.cellWidth, "px ").concat(this.cellHeight, "px"),
        height: "".concat(this.cellHeight, "px") // paddingTop: `${this.cellHeight / 3}px`

      };
    },
    blockStyle2: function blockStyle2() {
      return {
        // backgroundSize: `${this.cellWidth}px ${this.cellHeight}px`,
        height: "13px",
        paddingTop: "20px"
      };
    }
  },
  methods: {
    /**
     * 根据renderAarrys拼接需要渲染的数组
     *
     * @param {*} data
     * @returns {[]} 该data中所有需要渲染的数据
     */
    concatArray: function concatArray(data) {
      return this.renderAarrys.reduce(function (prev, curr) {
        if (Array.isArray(data[curr])) {
          return prev.concat(data[curr]);
        } else {
          return prev;
        }
      }, []);
    },
    concatArray2: function concatArray2(data) {
      return ["gtArray2"].reduce(function (prev, curr) {
        if (Array.isArray(data[curr])) {
          return prev.concat(data[curr]);
        } else {
          return prev;
        }
      }, []);
    },

    /**
     * 判定时间段是否跨越了渲染的时间范围 或者判定时间是否在渲染的时间范围内
     *
     * @param {{timeStart:string}} item
     * @param {{timeEnd:string}} item
     * @returns {boolean}
     */
    isInRenderingTimeRangeOrIsAcrossRenderingTimeRange: function isInRenderingTimeRangeOrIsAcrossRenderingTimeRange(timeStart, timeEnd) {
      if (this.heightOfBlocksWrapper === 0) {
        return false;
      }

      var startTimeOfRenderArea = this.startTimeOfRenderArea,
          endTimeOfRenderArea = this.endTimeOfRenderArea;

      if (isUndef(startTimeOfRenderArea) || isUndef(endTimeOfRenderArea)) {
        return false;
      }

      var timeStartToMs = new Date(timeStart).getTime();
      var timeEndToMs = new Date(timeEnd).getTime();

      if (startTimeOfRenderArea >= timeStartToMs && timeEndToMs >= endTimeOfRenderArea) {
        return true;
      }

      if (startTimeOfRenderArea <= timeStartToMs && timeStartToMs <= endTimeOfRenderArea) {
        return true;
      }

      if (startTimeOfRenderArea <= timeEndToMs && timeEndToMs <= endTimeOfRenderArea) {
        return true;
      }

      return false;
    },

    /**
     * 判定时间是否在渲染的时间范围内
     *
     * @param {{time:string}} item
     * @returns {boolean}
     */
    isInRenderingTimeRange: function isInRenderingTimeRange(time) {
      if (this.heightOfBlocksWrapper === 0) {
        return false;
      }

      var startTimeOfRenderArea = this.startTimeOfRenderArea,
          endTimeOfRenderArea = this.endTimeOfRenderArea;

      if (isUndef(startTimeOfRenderArea) || isUndef(endTimeOfRenderArea)) {
        return false;
      }

      var timeToMs = new Date(time).getTime();

      if (startTimeOfRenderArea <= timeToMs && timeToMs <= endTimeOfRenderArea) {
        return true;
      }

      return false;
    },

    /**
     * 判定时间段是否跨越了渲染的时间范围
     *
     * @param {{timeStart:string}} item
     * @param {{timeEnd:string}} item
     * @returns {boolean}
     */
    isAcrossRenderingTimeRange: function isAcrossRenderingTimeRange(timeStart, timeEnd) {
      if (this.heightOfBlocksWrapper === 0) {
        return false;
      }

      var startTimeOfRenderArea = this.startTimeOfRenderArea,
          endTimeOfRenderArea = this.endTimeOfRenderArea;

      if (isUndef(startTimeOfRenderArea) || isUndef(endTimeOfRenderArea)) {
        return false;
      }

      var timeStartToMs = new Date(timeStart).getTime();
      var timeEndToMs = new Date(timeEnd).getTime();

      if (startTimeOfRenderArea >= timeStartToMs && timeEndToMs >= endTimeOfRenderArea) {
        return true;
      }

      return false;
    },

    /**
     * 计算时间块长度
     *
     * @param {{start:string,end:string}} block
     * @returns {number}
     */
    getWidth: function getWidth(block) {
      if (isUndef(block.start) || isUndef(block.end)) {
        // warn(`错误，该数据项不含start值 与 end 值 ${JSON.stringify(block)}，无法计算宽度值。`)
        return 0;
      }

      return this.getWidthAbout2Times(block.start, block.end);
    },

    /**
     * 计算时间块偏移
     *
     * @param {{start:string}} block
     * @returns {number}
     */
    getPosition: function getPosition(block) {
      if (isUndef(block.start)) {
        warn("\u9519\u8BEF\uFF0C\u8BE5\u6570\u636E\u9879\u4E0D\u542Bstart \u503C ".concat(JSON.stringify(block), "\uFF0C\u65E0\u6CD5\u8BA1\u7B97\u504F\u79FB\u503C\u3002"));
        return 0;
      }

      return this.getPositonOffset(block.start);
    }
  }
});
// CONCATENATED MODULE: ./src/components/blocks/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blocksvue_type_script_lang_js_ = (blocksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/blocks/index.vue?vue&type=style&index=0&id=184bed09&scoped=true&lang=css&
var blocksvue_type_style_index_0_id_184bed09_scoped_true_lang_css_ = __webpack_require__("e299");

// CONCATENATED MODULE: ./src/components/blocks/index.vue






/* normalize component */

var blocks_component = normalizeComponent(
  components_blocksvue_type_script_lang_js_,
  blocksvue_type_template_id_184bed09_scoped_true_render,
  blocksvue_type_template_id_184bed09_scoped_true_staticRenderFns,
  false,
  null,
  "184bed09",
  null
  
)

/* harmony default export */ var blocks = (blocks_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./src/gantt.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var ganttvue_type_script_lang_js_ = ({
  name: "Gantt",
  components: {
    Timeline: time_line,
    LeftBar: left_bar,
    Blocks: blocks,
    MarkLine: mark_line,
    CurrentTime: current_time
  },
  props: {
    startTime: {
      default: function _default() {
        return dayjs_min_default()();
      },
      validator: function validator(date) {
        var ok = dayjs_min_default()(date).isValid();
        if (!ok) warn("\u975E\u6CD5\u7684\u5F00\u59CB\u65F6\u95F4 ".concat(date));
        return ok;
      }
    },
    endTime: {
      default: function _default() {
        return dayjs_min_default()();
      },
      validator: function validator(date) {
        var ok = dayjs_min_default()(date).isValid();
        if (!ok) warn("\u975E\u6CD5\u7684\u7ED3\u675F\u65F6\u95F4 ".concat(date));
        return ok;
      }
    },
    cellWidth: {
      type: Number,
      default: 50
    },
    cellHeight: {
      type: Number,
      default: 20
    },
    titleHeight: {
      type: Number,
      default: 40
    },
    titleWidth: {
      type: Number,
      default: 200
    },
    scale: {
      type: Number,
      default: 60,
      validator: function validator(value) {
        return scaleList.includes(value) || timeLineUtils_isDayScale(value);
      }
    },
    datas: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dataKey: {
      type: String,
      default: undefined
    },
    itemKey: {
      type: String,
      default: undefined
    },
    arrayKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showCurrentTime: {
      type: Boolean,
      default: false
    },
    timeLines: {
      type: Array
    },
    scrollToTime: {
      validator: function validator(date) {
        return dayjs_min_default()(date).isValid();
      }
    },
    scrollToPostion: {
      validator: function validator(obj) {
        var validX = isDef(obj.x) ? !Number.isNaN(obj.x) : true;
        var validY = isDef(obj.y) ? !Number.isNaN(obj.y) : true;

        if (!validX && !validY) {
          warn("scrollToPostion x或y 有值为非Number类型");
          return false;
        }

        return true;
      }
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideXScrollBar: {
      type: Boolean,
      default: false
    },
    hideYScrollBar: {
      type: Boolean,
      default: false
    },
    customGenerateBlocks: {
      type: Boolean,
      default: false
    },
    timeRangeCorrection: {
      type: Boolean,
      default: true
    },
    preload: {
      type: Number
    }
  },
  data: function data() {
    return {
      //缓存节点
      selector: {
        gantt_leftbar: {},
        gantt_table: {},
        gantt_scroll_y: {},
        gantt_timeline: {},
        gantt_scroll_x: {},
        gantt_markArea: {}
      },
      scrollTop: 0,
      scrollLeft: 0,
      //block 区域需要渲染的范围
      //先渲染出空框架，在mounted后再得到真实的渲染范围，然后在根据范围渲染数据，比之前设置一个默认高度宽度，额外的渲染浪费更少了
      heightOfBlocksWrapper: 0,
      widthOfBlocksWrapper: 0,
      scrollBarWitdh: 17,
      dayjs: dayjs_min_default.a,
      preTouchPosition: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    start: function start() {
      return dayjs_min_default()(this.startTime);
    },
    end: function end() {
      var start = this.start,
          widthOfBlocksWrapper = this.widthOfBlocksWrapper,
          scale = this.scale,
          cellWidth = this.cellWidth,
          timeRangeCorrection = this.timeRangeCorrection;
      var end = dayjs_min_default()(this.endTime);
      var totalWidth = calcScalesAbout2Times(start, end, scale) * cellWidth; // 时间纠正和补偿

      if (timeRangeCorrection && (start.isAfter(end) || totalWidth <= widthOfBlocksWrapper)) {
        end = getBeginTimeOfTimeLine(start, scale).add(widthOfBlocksWrapper / cellWidth * scale, "minute");
      }

      return end;
    },
    totalWidth: function totalWidth() {
      var cellWidth = this.cellWidth,
          totalScales = this.totalScales;
      return cellWidth * totalScales;
    },
    totalScales: function totalScales() {
      var start = this.start,
          end = this.end,
          scale = this.scale;
      return calcScalesAbout2Times(start, end, scale);
    },
    totalHeight: function totalHeight() {
      var datas = this.datas,
          cellHeight = this.cellHeight;
      return datas.length * cellHeight;
    },
    beginTimeOfTimeLine: function beginTimeOfTimeLine() {
      var value = getBeginTimeOfTimeLine(this.start, this.scale);
      return value;
    },
    beginTimeOfTimeLineToString: function beginTimeOfTimeLineToString() {
      return this.beginTimeOfTimeLine.toString();
    },
    avialableScrollLeft: function avialableScrollLeft() {
      // 不减这个1，滚动到时间轴尽头后继续滚动会慢慢的溢出
      var totalWidth = this.totalWidth,
          widthOfBlocksWrapper = this.widthOfBlocksWrapper;
      return totalWidth - widthOfBlocksWrapper - 1;
    },
    avialableScrollTop: function avialableScrollTop() {
      var totalHeight = this.totalHeight,
          heightOfBlocksWrapper = this.heightOfBlocksWrapper;
      return totalHeight - heightOfBlocksWrapper - 1;
    },
    scrollXBarHeight: function scrollXBarHeight() {
      return this.hideXScrollBar ? 0 : this.scrollBarWitdh;
    },
    scrollYBarWidth: function scrollYBarWidth() {
      return this.hideYScrollBar ? 0 : this.scrollBarWitdh;
    },
    actualHeaderHeight: function actualHeaderHeight() {
      return this.hideHeader ? 0 : this.titleHeight;
    },
    startTimeOfRenderArea: function startTimeOfRenderArea() {
      if (this.heightOfBlocksWrapper === 0) {
        return;
      }

      var beginTimeOfTimeLine = this.beginTimeOfTimeLine,
          scrollLeft = this.scrollLeft,
          cellWidth = this.cellWidth,
          scale = this.scale;
      return beginTimeOfTimeLine.add(scrollLeft / cellWidth * scale, "minute").toDate().getTime();
    },
    endTimeOfRenderArea: function endTimeOfRenderArea() {
      if (this.heightOfBlocksWrapper === 0) {
        return;
      }

      var beginTimeOfTimeLine = this.beginTimeOfTimeLine,
          scrollLeft = this.scrollLeft,
          cellWidth = this.cellWidth,
          scale = this.scale,
          widthOfBlocksWrapper = this.widthOfBlocksWrapper,
          totalWidth = this.totalWidth;
      var renderWidth = totalWidth < widthOfBlocksWrapper ? totalWidth : widthOfBlocksWrapper;
      return beginTimeOfTimeLine.add((scrollLeft + renderWidth) / cellWidth * scale, "minute").toDate().getTime();
    }
  },
  watch: {
    scrollToTime: {
      handler: function handler(newV) {
        if (!newV) {
          return;
        }

        var start = this.start,
            end = this.end;
        var time = dayjs_min_default()(newV);

        if (!(time.isAfter(start) && time.isBefore(end))) {
          warn("\u5F53\u524D\u6EDA\u52A8\u81F3".concat(newV, "\u4E0D\u5728").concat(start, "\u548C").concat(end, "\u7684\u8303\u56F4\u4E4B\u5185"));
          return;
        }

        var offset = this.getPositonOffset(newV);
        this.$nextTick(this.manualScroll(offset));
      },
      immediate: true
    },
    scrollToPostion: {
      handler: function handler(newV) {
        if (!newV) {
          return;
        }

        var x = Number.parseFloat(newV.x);
        var y = Number.parseFloat(newV.y);

        if (!Number.isNaN(x) && x !== this.scrollLeft) {
          this.$nextTick(this.manualScroll(x));
        }

        if (!Number.isNaN(y) && y !== this.scrollTop) {
          this.$nextTick(this.manualScroll(undefined, y));
        }
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.cacheSelector(); // 计算准确的渲染区域范围

    var observeContainer = throttle(function (entries) {
      entries.forEach(function (entry) {
        var cr = entry.contentRect;
        _this.heightOfBlocksWrapper = cr.height;
        _this.widthOfBlocksWrapper = cr.width;
      });
    });
    var observer = new ResizeObserver_es["a" /* default */](observeContainer);
    observer.observe(this.$refs.blocksWrapper);
    this.$once("hook:beforeDestroy", function () {
      observer.disconnect();

      _this.releaseSelector();
    });
  },
  methods: {
    touchMoveHandle: function touchMoveHandle(e) {
      var finger = e.touches[0];
      this.wheelHandle({
        deltaX: this.preTouchPosition.x - finger.screenX,
        deltaY: this.preTouchPosition.y - finger.screenY
      });
      this.preTouchPosition.x = finger.screenX;
      this.preTouchPosition.y = finger.screenY;
    },
    touchStartHandle: function touchStartHandle(e) {
      var finger = e.touches[0];
      this.preTouchPosition.x = finger.screenX;
      this.preTouchPosition.y = finger.screenY;
    },
    touchEndHandle: function touchEndHandle() {
      this.preTouchPosition.x = 0;
      this.preTouchPosition.y = 0;
    },
    getWidthAbout2Times: function getWidthAbout2Times(start, end) {
      var options = {
        scale: this.scale,
        cellWidth: this.cellWidth
      };
      return gtUtils_getWidthAbout2Times(start, end, options);
    },

    /**
     * 为时间线计算偏移
     */
    getPositonOffset: function getPositonOffset(date) {
      var options = {
        scale: this.scale,
        cellWidth: this.cellWidth
      };
      return gtUtils_getPositonOffset(date, this.beginTimeOfTimeLineToString, options);
    },
    //缓存节点
    cacheSelector: function cacheSelector() {
      this.selector.gantt_leftbar = this.$refs.leftbarWrapper;
      this.selector.gantt_table = this.$refs.blocksWrapper;
      this.selector.gantt_scroll_y = this.$refs.scrollYBar;
      this.selector.gantt_timeline = this.$refs.headerTimeline;
      this.selector.gantt_scroll_x = this.$refs.scrollXBar;
      this.selector.gantt_markArea = this.$refs.marklineArea;
    },
    releaseSelector: function releaseSelector() {
      var key;

      for (key in this.selector) {
        this.selector[key] = null;
      }
    },
    wheelHandle: function wheelHandle(event) {
      var deltaX = event.deltaX,
          deltaY = event.deltaY;
      var scrollTop = this.scrollTop,
          scrollLeft = this.scrollLeft,
          avialableScrollLeft = this.avialableScrollLeft,
          avialableScrollTop = this.avialableScrollTop;

      if (deltaY !== 0) {
        if (scrollTop + deltaY >= avialableScrollTop && scrollTop !== avialableScrollTop) {
          this.manualScroll(undefined, avialableScrollTop);
        } else if (scrollTop + deltaY < 0 && scrollTop !== 0
        /*滚动为0限制*/
        ) {
            this.manualScroll(undefined, 0);
          } else {
          this.manualScroll(undefined, scrollTop + deltaY);
        }
      }

      if (deltaX !== 0) {
        if (scrollLeft + deltaX >= avialableScrollLeft && scrollLeft !== avialableScrollLeft) {
          this.manualScroll(avialableScrollLeft);
        } else if (scrollLeft + deltaX < 0 && scrollLeft !== 0
        /*滚动为0限制*/
        ) {
            this.manualScroll(0);
          } else {
          this.manualScroll(scrollLeft + deltaX);
        }
      }
    },
    manualScroll: function manualScroll(x, y) {
      if (x != undefined) {
        this.selector.gantt_scroll_x.scrollLeft = x;
      }

      if (y != undefined) {
        this.selector.gantt_scroll_y.scrollTop = y;
      }
    },
    //同步fixleft和block的滚动
    syncScrollY: function syncScrollY(event) {
      var _this$selector = this.selector,
          gantt_leftbar = _this$selector.gantt_leftbar,
          gantt_table = _this$selector.gantt_table;
      var topValue = event.target.scrollTop;
      this.scrollTop = gantt_table.scrollTop = gantt_leftbar.scrollTop = topValue;
      this.$emit("scrollTop", topValue);
    },
    syncScrollX: function syncScrollX(event) {
      var _this$selector2 = this.selector,
          gantt_table = _this$selector2.gantt_table,
          gantt_timeline = _this$selector2.gantt_timeline,
          gantt_markArea = _this$selector2.gantt_markArea;
      var leftValue = event.target.scrollLeft;
      this.scrollLeft = gantt_timeline.scrollLeft = gantt_table.scrollLeft = leftValue;
      gantt_markArea.style.left = -leftValue + "px";
      this.$emit("scrollLeft", leftValue);
    }
  }
});
// CONCATENATED MODULE: ./src/gantt.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ganttvue_type_script_lang_js_ = (ganttvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/gantt.vue?vue&type=style&index=0&lang=scss&
var ganttvue_type_style_index_0_lang_scss_ = __webpack_require__("c3ab");

// CONCATENATED MODULE: ./src/gantt.vue






/* normalize component */

var gantt_component = normalizeComponent(
  src_ganttvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gantt = (gantt_component.exports);
// CONCATENATED MODULE: ./src/index.js
/*
 * @Descripttion:
 * @Author: whyjs
 * @Date: 2020-07-19 03:18:56
 * @LastEditors: whyjs
 * @LastEditTime: 2020-11-06 15:41:06
 */
 // 定义我们的插件

var myPlugin = {
  // eslint-disable-next-line
  version: "1.0.6",
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  // eslint-disable-next-line
  install: function install(Vue, options) {
    // 将其注册为vue的组件，'gantt'是组件名
    Vue.component("v-gantt-why", gantt);
  }
}; // 新增

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(myPlugin);
} // 最后将插件导出，并在main.js中通过Vue.use()即可使用插件


/* harmony default export */ var src_0 = (myPlugin);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.8@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "5dfd":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("e349");
var IndexedObject = __webpack_require__("692f");
var toObject = __webpack_require__("3553");
var toLength = __webpack_require__("d88d");
var arraySpeciesCreate = __webpack_require__("1ca1");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "5ecf":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(e,t,i){t.prototype.isBetween=function(e,t,s,f){var n=i(e),o=i(t),r="("===(f=f||"()")[0],u=")"===f[1];return(r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))}}});


/***/ }),

/***/ "604f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var inspectSource = __webpack_require__("1025");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "692f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("efe2");
var classof = __webpack_require__("2118");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "6d28":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("9b9d");
var store = __webpack_require__("3a08");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "6d51":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("1b99");
var has = __webpack_require__("faa8");
var wrappedWellKnownSymbolModule = __webpack_require__("4350");
var defineProperty = __webpack_require__("d910").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "6d60":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("857c");
var defineProperties = __webpack_require__("dbe8");
var enumBugKeys = __webpack_require__("18f6");
var hiddenKeys = __webpack_require__("d5a8");
var html = __webpack_require__("6fdf");
var documentCreateElement = __webpack_require__("ae25");
var sharedKey = __webpack_require__("7db2");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "6d7a":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("1b99");
var global = __webpack_require__("d890");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "6fdf":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("6d7a");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "7063":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");
var setPrototypeOf = __webpack_require__("50fb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "74cb":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("c54b");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "74e7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("2118");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "77ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var isObject = __webpack_require__("a719");
var isArray = __webpack_require__("74e7");
var toAbsoluteIndex = __webpack_require__("e1d6");
var toLength = __webpack_require__("d88d");
var toIndexedObject = __webpack_require__("da10");
var createProperty = __webpack_require__("1bbd");
var wellKnownSymbol = __webpack_require__("90fb");
var arrayMethodHasSpeciesSupport = __webpack_require__("1ea7");
var arrayMethodUsesToLength = __webpack_require__("ff9c");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "783d":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("90fb");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7db2":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("6d28");
var uid = __webpack_require__("7e8b");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "7e8b":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "84b3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var trim = __webpack_require__("c10f").trim;
var whitespaces = __webpack_require__("fc8c");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "857c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "85cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8a1c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");
var classof = __webpack_require__("2118");
var wellKnownSymbol = __webpack_require__("90fb");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "8d44":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("6d7a");
var getOwnPropertyNamesModule = __webpack_require__("b338");
var getOwnPropertySymbolsModule = __webpack_require__("0a60");
var anObject = __webpack_require__("857c");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "90aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var notARegExp = __webpack_require__("07a2");
var requireObjectCoercible = __webpack_require__("2732");
var correctIsRegExpLogic = __webpack_require__("783d");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "90fb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var shared = __webpack_require__("6d28");
var has = __webpack_require__("faa8");
var uid = __webpack_require__("7e8b");
var NATIVE_SYMBOL = __webpack_require__("c54b");
var USE_SYMBOL_AS_UID = __webpack_require__("74cb");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "9302":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var IndexedObject = __webpack_require__("692f");
var toIndexedObject = __webpack_require__("da10");
var arrayMethodIsStrict = __webpack_require__("d7e1");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "99ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("857c");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "9b9d":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "9f67":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "a0f6":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=this.$L||D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "a1a8":
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

/***/ "a719":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "aa6b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var propertyIsEnumerableModule = __webpack_require__("ef71");
var createPropertyDescriptor = __webpack_require__("38b9");
var toIndexedObject = __webpack_require__("da10");
var toPrimitive = __webpack_require__("9f67");
var has = __webpack_require__("faa8");
var IE8_DOM_DEFINE = __webpack_require__("2039");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "ab0d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("a1a8");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".top_class1[data-v-184bed09]{height:13px;padding-top:60px}.top_class2[data-v-184bed09]{height:13px;padding-top:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ae25":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var isObject = __webpack_require__("a719");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "b130":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var $includes = __webpack_require__("45af").includes;
var addToUnscopables = __webpack_require__("258f");
var arrayMethodUsesToLength = __webpack_require__("ff9c");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "b338":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ead4");
var enumBugKeys = __webpack_require__("18f6");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "b4fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var fails = __webpack_require__("efe2");
var isArray = __webpack_require__("74e7");
var isObject = __webpack_require__("a719");
var toObject = __webpack_require__("3553");
var toLength = __webpack_require__("d88d");
var createProperty = __webpack_require__("1bbd");
var arraySpeciesCreate = __webpack_require__("1ca1");
var arrayMethodHasSpeciesSupport = __webpack_require__("1ea7");
var wellKnownSymbol = __webpack_require__("90fb");
var V8_VERSION = __webpack_require__("f594");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "b691":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("1c8b");
var parseFloat = __webpack_require__("84b3");

// `Number.parseFloat` method
// https://tc39.github.io/ecma262/#sec-number.parseFloat
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "b702":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("604f");
var global = __webpack_require__("d890");
var isObject = __webpack_require__("a719");
var createNonEnumerableProperty = __webpack_require__("0fc1");
var objectHas = __webpack_require__("faa8");
var sharedKey = __webpack_require__("7db2");
var hiddenKeys = __webpack_require__("d5a8");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "c051":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("da10");
var nativeGetOwnPropertyNames = __webpack_require__("b338").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "c10f":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("2732");
var whitespaces = __webpack_require__("fc8c");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "c3ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_gantt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e4c");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_gantt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_gantt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c54b":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("efe2");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "c69d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("faa8");
var ownKeys = __webpack_require__("8d44");
var getOwnPropertyDescriptorModule = __webpack_require__("aa6b");
var definePropertyModule = __webpack_require__("d910");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "cbab":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ead4");
var enumBugKeys = __webpack_require__("18f6");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "d1fd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a719");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "d5a8":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d7e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("efe2");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "d88d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3da3");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "d890":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("0288")))

/***/ }),

/***/ "d910":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var IE8_DOM_DEFINE = __webpack_require__("2039");
var anObject = __webpack_require__("857c");
var toPrimitive = __webpack_require__("9f67");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "da10":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("692f");
var requireObjectCoercible = __webpack_require__("2732");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "dbe8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var definePropertyModule = __webpack_require__("d910");
var anObject = __webpack_require__("857c");
var objectKeys = __webpack_require__("cbab");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "e18c":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("47ae");
var redefine = __webpack_require__("1944");
var toString = __webpack_require__("52f9");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "e1d6":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3da3");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "e299":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_184bed09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ac0");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_184bed09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_184bed09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e349":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("0c3c");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "e4db":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var createNonEnumerableProperty = __webpack_require__("0fc1");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "e505":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "e60a":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}}});


/***/ }),

/***/ "e8d6":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("efe2");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "ea92":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAXCAYAAACVp2gDAAAAbElEQVRYR+3SMQ3AMBAEQRtZoAXwk7DCYVN5DsAWo9vLMoGZeXdWE1pA4xMABRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkP/QP0U427N+eeAzRXSxcMkEWCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "ead4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("faa8");
var toIndexedObject = __webpack_require__("da10");
var indexOf = __webpack_require__("45af").indexOf;
var hiddenKeys = __webpack_require__("d5a8");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ef71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "efe2":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "f3dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var global = __webpack_require__("d890");
var getBuiltIn = __webpack_require__("6d7a");
var IS_PURE = __webpack_require__("9b9d");
var DESCRIPTORS = __webpack_require__("1e2c");
var NATIVE_SYMBOL = __webpack_require__("c54b");
var USE_SYMBOL_AS_UID = __webpack_require__("74cb");
var fails = __webpack_require__("efe2");
var has = __webpack_require__("faa8");
var isArray = __webpack_require__("74e7");
var isObject = __webpack_require__("a719");
var anObject = __webpack_require__("857c");
var toObject = __webpack_require__("3553");
var toIndexedObject = __webpack_require__("da10");
var toPrimitive = __webpack_require__("9f67");
var createPropertyDescriptor = __webpack_require__("38b9");
var nativeObjectCreate = __webpack_require__("6d60");
var objectKeys = __webpack_require__("cbab");
var getOwnPropertyNamesModule = __webpack_require__("b338");
var getOwnPropertyNamesExternal = __webpack_require__("c051");
var getOwnPropertySymbolsModule = __webpack_require__("0a60");
var getOwnPropertyDescriptorModule = __webpack_require__("aa6b");
var definePropertyModule = __webpack_require__("d910");
var propertyIsEnumerableModule = __webpack_require__("ef71");
var createNonEnumerableProperty = __webpack_require__("0fc1");
var redefine = __webpack_require__("1944");
var shared = __webpack_require__("6d28");
var sharedKey = __webpack_require__("7db2");
var hiddenKeys = __webpack_require__("d5a8");
var uid = __webpack_require__("7e8b");
var wellKnownSymbol = __webpack_require__("90fb");
var wrappedWellKnownSymbolModule = __webpack_require__("4350");
var defineWellKnownSymbol = __webpack_require__("6d51");
var setToStringTag = __webpack_require__("27b5");
var InternalStateModule = __webpack_require__("b702");
var $forEach = __webpack_require__("5dfd").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "f594":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d890");
var userAgent = __webpack_require__("4fda");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "faa8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "fc8c":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fe59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("1c8b");
var forEach = __webpack_require__("3c10");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "ff9c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("1e2c");
var fails = __webpack_require__("efe2");
var has = __webpack_require__("faa8");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ })

/******/ });
});
//# sourceMappingURL=v-gantt-why.umd.js.map