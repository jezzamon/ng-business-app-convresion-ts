/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./productManagement/app/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n\tthrow new Error(\"define cannot be used indirect\");\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-define.js?");

/***/ }),

/***/ "./productManagement/app/app.ts":
/*!**************************************!*\
  !*** ./productManagement/app/app.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/toastr */ \"./productManagement/js/toastr.js\");\n/* harmony import */ var _js_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_toastr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_angular_1_5_5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/angular-1.5.5.js */ \"./productManagement/js/angular-1.5.5.js\");\n/* harmony import */ var _js_angular_1_5_5_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_angular_1_5_5_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconsole.log('hi there');\r\n_js_angular_1_5_5_js__WEBPACK_IMPORTED_MODULE_1__[\"module\"](\"productManagement\", [\"common.services\",\r\n    \"ui.router\",\r\n    \"ui.mask\",\r\n    \"ui.bootstrap\",\r\n    \"angularCharts\",\r\n    \"productResourceMock\"\r\n])\r\n    .config(function ($provide) {\r\n    $provide.decorator(\"$exceptionHandler\", [\"$delegate\",\r\n        function ($delegate) {\r\n            return function (exception, cause) {\r\n                exception.message = \"Error. See devtools console \\n Message: \" + exception.message;\r\n                $delegate(exception, cause);\r\n                alert(exception.message);\r\n                _js_toastr__WEBPACK_IMPORTED_MODULE_0__[\"error\"](exception.message);\r\n            };\r\n        }]);\r\n})\r\n    .config([\"$stateProvider\",\r\n    \"$urlRouterProvider\",\r\n    function ($stateProvider, $urlRouterProvider) {\r\n        $urlRouterProvider.otherwise(\"/\");\r\n        $stateProvider\r\n            .state(\"home\", {\r\n            url: \"/\",\r\n            templateUrl: \"app/welcomeView.html\"\r\n        })\r\n            // Products\r\n            .state(\"productList\", {\r\n            url: \"/products\",\r\n            templateUrl: \"app/products/productListView.html\",\r\n            controller: \"ProductListCtrl as vm\"\r\n        })\r\n            .state(\"productEdit\", {\r\n            abstract: true,\r\n            url: \"/products/edit/:productId\",\r\n            templateUrl: \"app/products/productEditView.html\",\r\n            controller: \"ProductEditCtrl as vm\",\r\n            resolve: {\r\n                productResource: \"productResource\",\r\n                product: function (productResource, $stateParams) {\r\n                    var productId = $stateParams.productId;\r\n                    return productResource.get({\r\n                        productId: productId\r\n                    }).$promise;\r\n                }\r\n            }\r\n        })\r\n            .state(\"productEdit.info\", {\r\n            url: \"/info\",\r\n            templateUrl: \"app/products/productEditInfoView.html\",\r\n        })\r\n            .state(\"productEdit.price\", {\r\n            url: \"/price\",\r\n            templateUrl: \"app/products/productEditPriceView.html\",\r\n        })\r\n            .state(\"productEdit.tags\", {\r\n            url: \"/tags\",\r\n            templateUrl: \"app/products/productEditTagsView.html\",\r\n        })\r\n            .state(\"productDetail\", {\r\n            url: \"/products/:productId\",\r\n            templateUrl: \"app/products/productDetailView.html\",\r\n            controller: \"ProductDetailCtrl as vm\",\r\n            resolve: {\r\n                productResource: \"productResource\",\r\n                product: function (productResource, $stateParams) {\r\n                    var productId = $stateParams.productId;\r\n                    return productResource.get({\r\n                        productId: productId\r\n                    }).$promise;\r\n                }\r\n            }\r\n        })\r\n            .state(\"priceAnalytics\", {\r\n            url: \"/priceAnalytics\",\r\n            templateUrl: \"app/prices/priceAnalyticsView.html\",\r\n            controller: \"PriceAnalyticsCtrl\",\r\n            resolve: {\r\n                productResource: \"productResource\",\r\n                products: function (productResource) {\r\n                    return productResource.query(function (response) {\r\n                        // no code needed for success\r\n                    }, function (response) {\r\n                        // code for failure \r\n                        if (response.status === 404) { // if 404 not found\r\n                            alert(\"Error accessing resource: \" +\r\n                                // response.config.method + \" \" + response.config.url);\r\n                                // toastr.error(\"Error accessing resource: \" + \r\n                                response.config.method + \" \" + response.config.url);\r\n                        }\r\n                        else {\r\n                            alert(response.statusText);\r\n                        }\r\n                    }).$promise;\r\n                }\r\n            }\r\n        });\r\n    }\r\n]);\r\nconsole.log();\r\n\n\n//# sourceURL=webpack:///./productManagement/app/app.ts?");

/***/ }),

/***/ "./productManagement/js/angular-1.5.5.js":
/*!***********************************************!*\
  !*** ./productManagement/js/angular-1.5.5.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./productManagement/js/toastr.js":
/*!****************************************!*\
  !*** ./productManagement/js/toastr.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;﻿/*\n * Toastr\n * Copyright 2012-2014 John Papa and Hans Fjällemark.\n * All Rights Reserved.\n * Use, reproduction, distribution, and modification of this code is subject to the terms and\n * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php\n *\n * Author: John Papa and Hans Fjällemark\n * ARIA Support: Greta Krafsig\n * Project: https://github.com/CodeSeven/toastr\n */\n; (function (define) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {\n        return (function () {\n            var $container;\n            var listener;\n            var toastId = 0;\n            var toastType = {\n                error: 'error',\n                info: 'info',\n                success: 'success',\n                warning: 'warning'\n            };\n\n            var toastr = {\n                clear: clear,\n                remove: remove,\n                error: error,\n                getContainer: getContainer,\n                info: info,\n                options: {},\n                subscribe: subscribe,\n                success: success,\n                version: '2.0.3',\n                warning: warning\n            };\n\n            return toastr;\n\n            //#region Accessible Methods\n            function error(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.error,\n                    iconClass: getOptions().iconClasses.error,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function getContainer(options, create) {\n                if (!options) { options = getOptions(); }\n                $container = $('#' + options.containerId);\n                if ($container.length) {\n                    return $container;\n                }\n                if(create) {\n                    $container = createContainer(options);\n                }\n                return $container;\n            }\n\n            function info(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.info,\n                    iconClass: getOptions().iconClasses.info,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function subscribe(callback) {\n                listener = callback;\n            }\n\n            function success(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.success,\n                    iconClass: getOptions().iconClasses.success,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function warning(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.warning,\n                    iconClass: getOptions().iconClasses.warning,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function clear($toastElement) {\n                var options = getOptions();\n                if (!$container) { getContainer(options); }\n                if (!clearToast($toastElement, options)) {\n                    clearContainer(options);\n                }\n            }\n\n            function remove($toastElement) {\n                var options = getOptions();\n                if (!$container) { getContainer(options); }\n                if ($toastElement && $(':focus', $toastElement).length === 0) {\n                    removeToast($toastElement);\n                    return;\n                }\n                if ($container.children().length) {\n                    $container.remove();\n                }\n            }\n            //#endregion\n\n            //#region Internal Methods\n\n            function clearContainer(options){\n                var toastsToClear = $container.children();\n                for (var i = toastsToClear.length - 1; i >= 0; i--) {\n                    clearToast($(toastsToClear[i]), options);\n                };\n            }\n\n            function clearToast($toastElement, options){\n                if ($toastElement && $(':focus', $toastElement).length === 0) {\n                    $toastElement[options.hideMethod]({\n                        duration: options.hideDuration,\n                        easing: options.hideEasing,\n                        complete: function () { removeToast($toastElement); }\n                    });\n                    return true;\n                }\n                return false;\n            }\n\n            function createContainer(options) {\n                $container = $('<div/>')\n                    .attr('id', options.containerId)\n                    .addClass(options.positionClass)\n                    .attr('aria-live', 'polite')\n                    .attr('role', 'alert');\n\n                $container.appendTo($(options.target));\n                return $container;\n            }\n\n            function getDefaults() {\n                return {\n                    tapToDismiss: true,\n                    toastClass: 'toast',\n                    containerId: 'toast-container',\n                    debug: false,\n\n                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery\n                    showDuration: 300,\n                    showEasing: 'swing', //swing and linear are built into jQuery\n                    onShown: undefined,\n                    hideMethod: 'fadeOut',\n                    hideDuration: 1000,\n                    hideEasing: 'swing',\n                    onHidden: undefined,\n\n                    extendedTimeOut: 1000,\n                    iconClasses: {\n                        error: 'toast-error',\n                        info: 'toast-info',\n                        success: 'toast-success',\n                        warning: 'toast-warning'\n                    },\n                    iconClass: 'toast-info',\n                    positionClass: 'toast-top-right',\n                    timeOut: 5000, // Set timeOut and extendedTimeout to 0 to make it sticky\n                    titleClass: 'toast-title',\n                    messageClass: 'toast-message',\n                    target: 'body',\n                    closeHtml: '<button>&times;</button>',\n                    newestOnTop: true\n                };\n            }\n\n            function publish(args) {\n                if (!listener) { return; }\n                listener(args);\n            }\n\n            function notify(map) {\n                var options = getOptions(),\n                    iconClass = map.iconClass || options.iconClass;\n\n                if (typeof (map.optionsOverride) !== 'undefined') {\n                    options = $.extend(options, map.optionsOverride);\n                    iconClass = map.optionsOverride.iconClass || iconClass;\n                }\n\n                toastId++;\n\n                $container = getContainer(options, true);\n                var intervalId = null,\n                    $toastElement = $('<div/>'),\n                    $titleElement = $('<div/>'),\n                    $messageElement = $('<div/>'),\n                    $closeElement = $(options.closeHtml),\n                    response = {\n                        toastId: toastId,\n                        state: 'visible',\n                        startTime: new Date(),\n                        options: options,\n                        map: map\n                    };\n\n                if (map.iconClass) {\n                    $toastElement.addClass(options.toastClass).addClass(iconClass);\n                }\n\n                if (map.title) {\n                    $titleElement.append(map.title).addClass(options.titleClass);\n                    $toastElement.append($titleElement);\n                }\n\n                if (map.message) {\n                    $messageElement.append(map.message).addClass(options.messageClass);\n                    $toastElement.append($messageElement);\n                }\n\n                if (options.closeButton) {\n                    $closeElement.addClass('toast-close-button').attr(\"role\", \"button\");\n                    $toastElement.prepend($closeElement);\n                }\n\n                $toastElement.hide();\n                if (options.newestOnTop) {\n                    $container.prepend($toastElement);\n                } else {\n                    $container.append($toastElement);\n                }\n\n\n                $toastElement[options.showMethod](\n                    { duration: options.showDuration, easing: options.showEasing, complete: options.onShown }\n                );\n\n                if (options.timeOut > 0) {\n                    intervalId = setTimeout(hideToast, options.timeOut);\n                }\n\n                $toastElement.hover(stickAround, delayedHideToast);\n                if (!options.onclick && options.tapToDismiss) {\n                    $toastElement.click(hideToast);\n                }\n\n                if (options.closeButton && $closeElement) {\n                    $closeElement.click(function (event) {\n                        if( event.stopPropagation ) {\n                            event.stopPropagation();\n                        } else if( event.cancelBubble !== undefined && event.cancelBubble !== true ) {\n                            event.cancelBubble = true;\n                        }\n                        hideToast(true);\n                    });\n                }\n\n                if (options.onclick) {\n                    $toastElement.click(function () {\n                        options.onclick();\n                        hideToast();\n                    });\n                }\n\n                publish(response);\n\n                if (options.debug && console) {\n                    console.log(response);\n                }\n\n                return $toastElement;\n\n                function hideToast(override) {\n                    if ($(':focus', $toastElement).length && !override) {\n                        return;\n                    }\n                    return $toastElement[options.hideMethod]({\n                        duration: options.hideDuration,\n                        easing: options.hideEasing,\n                        complete: function () {\n                            removeToast($toastElement);\n                            if (options.onHidden && response.state !== 'hidden') {\n                                options.onHidden();\n                            }\n                            response.state = 'hidden';\n                            response.endTime = new Date();\n                            publish(response);\n                        }\n                    });\n                }\n\n                function delayedHideToast() {\n                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {\n                        intervalId = setTimeout(hideToast, options.extendedTimeOut);\n                    }\n                }\n\n                function stickAround() {\n                    clearTimeout(intervalId);\n                    $toastElement.stop(true, true)[options.showMethod](\n                        { duration: options.showDuration, easing: options.showEasing }\n                    );\n                }\n            }\n\n            function getOptions() {\n                return $.extend({}, getDefaults(), toastr.options);\n            }\n\n            function removeToast($toastElement) {\n                if (!$container) { $container = getContainer(); }\n                if ($toastElement.is(':visible')) {\n                    return;\n                }\n                $toastElement.remove();\n                $toastElement = null;\n                if ($container.children().length === 0) {\n                    $container.remove();\n                }\n            }\n            //#endregion\n\n        })();\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n}(__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")));\n\n//# sourceURL=webpack:///./productManagement/js/toastr.js?");

/***/ })

/******/ });