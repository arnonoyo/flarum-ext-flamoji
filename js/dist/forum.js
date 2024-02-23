module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"forum": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~emoji-button":"vendors~emoji-button","vendors~emoji-button-message-zh":"vendors~emoji-button-message-zh"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpmodule_exports"] = window["webpackJsonpmodule_exports"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/common/utils/getEmojiCategories.js":
/*!************************************************!*\
  !*** ./src/common/utils/getEmojiCategories.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEmojiCategories; });
// see https://emoji-button.js.org/docs/api#categories
// for valid categories
function getEmojiCategories() {
  return ['smileys', 'people', 'animals', 'food', 'activities', 'travel', 'objects', 'symbols', 'flags'];
}

/***/ }),

/***/ "./src/common/utils/urlChecker.js":
/*!****************************************!*\
  !*** ./src/common/utils/urlChecker.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return urlChecker; });
// JavaScript way to check if the path starts with http:// or https://
// We're using a similar thing on the ConfigureTextFormatter.php
function urlChecker(url) {
  var regex = new RegExp('^(http|https)://', 'i');
  if (url.match(regex)) return true;
  return false;
}

/***/ }),

/***/ "./src/emoji-button-locale-data/dist lazy recursive ^\\.\\/.*$":
/*!**************************************************************************!*\
  !*** ./src/emoji-button-locale-data/dist lazy ^\.\/.*$ namespace object ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./zh": [
		"./src/emoji-button-locale-data/dist/zh.js",
		"vendors~emoji-button-message-zh"
	],
	"./zh.js": [
		"./src/emoji-button-locale-data/dist/zh.js",
		"vendors~emoji-button-message-zh"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/emoji-button-locale-data/dist lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/forum/components/TextEditorButton.js":
/*!**************************************************!*\
  !*** ./src/forum/components/TextEditorButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextEditorButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The `TextEditorButton` component displays a button suitable for the text
 * editor toolbar.
 *
 * So this class is only here because of
 * to set `showOnFocus={false}` on the tooltip.
 */

var TextEditorButton = /*#__PURE__*/function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TextEditorButton, _Button);

  function TextEditorButton() {
    return _Button.apply(this, arguments) || this;
  }

  var _proto = TextEditorButton.prototype;

  _proto.view = function view(vnode) {
    var originalView = _Button.prototype.view.call(this, vnode); // Steal tooltip label from the Button superclass


    var tooltipText = this.attrs.tooltipText || originalView.attrs.title;
    delete originalView.attrs.title;
    return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default.a, {
      showOnFocus: false,
      text: tooltipText
    }, originalView);
  };

  TextEditorButton.initAttrs = function initAttrs(attrs) {
    _Button.initAttrs.call(this, attrs);

    attrs.className = 'Button Button--icon Button--link Button-flamoji';
    attrs.tooltipText = attrs.title;
  };

  return TextEditorButton;
}(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils/getEmojiCategories */ "./src/common/utils/getEmojiCategories.js");
/* harmony import */ var _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TextEditorButton */ "./src/forum/components/TextEditorButton.js");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");





 // Make translation calls shorter

var t = 'the-turk-flamoji.forum.';
var t_p = t + 'emoji-button.';
flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('the-turk-flamoji', function () {
  // localization of the `emoji-button` package
  var i18n = {
    search: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'search_placeholder'),
    notFound: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'no_emojis_found_message'),
    categories: {
      recents: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.recents'),
      smileys: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.smileys'),
      people: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.people'),
      animals: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.animals'),
      food: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.food'),
      activities: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.activities'),
      travel: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.travel'),
      objects: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.objects'),
      symbols: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.symbols'),
      flags: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.flags'),
      custom: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t_p + 'categories.custom')
    }
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'oncreate', function () {
    this.flamojiButton = document.querySelector('.Button-flamoji');
    this.flamojiContainer = document.createElement('div');
    this.flamojiContainer.classList.add('ComposerBody-flamojiContainer');
    this.flamojiButton.after(this.flamojiContainer);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'oninit', function () {
    var _this = this;

    this.isPickerLoading = this.isPickerLoaded = false; // https://v4.webpack.js.org/guides/public-path/#on-the-fly

    __webpack_require__.p = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl') + '/assets/extensions/tk-flamoji/dist/'; // dyanmically load translated emoji keyword files

    this.emojiData = function (lang) {
      _this.isPickerLoading = true;
      return __webpack_require__("./src/emoji-button-locale-data/dist lazy recursive ^\\.\\/.*$")("./" + lang);
    };
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'toolbarItems', function (items) {
    var _this2 = this;

    items.add('flamoji', _components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      onclick: function onclick() {
        if (_this2.isPickerLoading == true) return;

        if (_this2.isPickerLoaded == false) {
          _this2.emojiData(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.emoji_data')).then(function (localeData) {
            flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
              method: 'GET',
              url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/the-turk/emojis'
            }).then(function (response) {
              var baseUrl = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl');
              var specifiedCategories = JSON.parse(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.specify_categories'));
              var customCategories = JSON.parse(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.custom_categories'));
              var emoji_version = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.emoji_version'); // so if we don't sort `specifiedCategories` array
              // based on `sortingArr`, some categories are
              // obviously not working. It seems like a bug
              // in the `emoji-button` repository.

              var sortingArr = Object(_common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_2__["default"])();
              specifiedCategories.sort(function (a, b) {
                return sortingArr.indexOf(a) - sortingArr.indexOf(b);
              }); // 为""会导致默认选中报错

              customCategories = customCategories.map(function (c) {
                return c ? c : "无分类";
              });
              var specifiedCategoryCount = specifiedCategories.length;
              var customEmojis = [];
              var customEmojiReplacers = {};
              response['data'].map(function (customEmoji) {
                var path = customEmoji['attributes']['path'];
                var categoryName = customEmoji['attributes']['category'] ? customEmoji['attributes']['category'] : "无分类";
                customEmojiReplacers[path] = customEmoji['attributes']['text_to_replace'];

                if (customCategories.findIndex(function (c) {
                  return c == categoryName;
                }) >= 0) {
                  customEmojis.push({
                    emoji: Object(_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_5__["default"])(path) ? path : baseUrl + path,
                    category: specifiedCategoryCount + customCategories.findIndex(function (c) {
                      return c == categoryName;
                    }),
                    categoryName: categoryName,
                    name: customEmoji['attributes']['title'],
                    version: emoji_version,
                    custom: true
                  });
                }
              }); // 过滤掉不显示的emoji(emoji.category存的是索引)

              var specifiedCategoryIndex = [];
              specifiedCategories.map(function (s) {
                if (sortingArr.findIndex(function (sa) {
                  return sa == s;
                }) >= 0) {
                  specifiedCategoryIndex.push(sortingArr.findIndex(function (sa) {
                    return sa == s;
                  }));
                }
              });
              var emojiData = {
                emoji: JSON.parse(JSON.stringify(localeData["default"].emoji.filter(function (e) {
                  return specifiedCategoryIndex.length != 0 && specifiedCategoryIndex.findIndex(function (s) {
                    return s == e.category;
                  }) >= 0;
                }))),
                categories: specifiedCategories.concat(customCategories)
              };
              emojiData.emoji = emojiData.emoji.map(function (e) {
                e.category = specifiedCategoryIndex.findIndex(function (s) {
                  return s == e.category;
                });
                return e;
              });
              emojiData.emoji = emojiData.emoji.concat(customEmojis);
              var initialCategory = specifiedCategories.findIndex(function (s) {
                return s == flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.initial_category');
              }) >= 0 ? flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.initial_category') : emojiData.categories[0];
              var icons = {
                categories: {}
              };
              customCategories.map(function (customCategory) {
                var _customEmojis$find;

                icons.categories[customCategory] = (_customEmojis$find = customEmojis.find(function (c) {
                  return c.categoryName == customCategory;
                })) == null ? void 0 : _customEmojis$find.emoji;
                i18n.categories[customCategory] = customCategory;
              });
              __webpack_require__.e(/*! import() | emoji-button */ "vendors~emoji-button").then(__webpack_require__.bind(null, /*! @joeattardi/emoji-button */ "./node_modules/@joeattardi/emoji-button/dist/index.js")).then(function (_ref) {
                var EmojiButton = _ref.EmojiButton;
                _this2.picker = new EmojiButton({
                  theme: 'light',
                  // based on Flarum's less variables 
                  autoFocusSearch: false,
                  rootElement: _this2.flamojiContainer,
                  style: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.emoji_style'),
                  recentsCount: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.recents_count'),
                  showRecents: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.show_recents'),
                  showVariants: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.show_variants'),
                  autoHide: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.auto_hide'),
                  showPreview: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.show_preview'),
                  showCategoryButtons: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.show_category_buttons'),
                  showSearch: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.show_search'),
                  emojiVersion: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('flamoji.emoji_version'),
                  initialCategory: initialCategory,
                  categories: emojiData.categories,
                  emojiData: emojiData,
                  icons: icons,
                  i18n: i18n
                });

                _this2.picker.on('emoji', function (selection) {
                  var insert = selection.emoji; // Handle custom emoji.
                  // Since we can't pass a third argument into EmojiButton's emojiData
                  // option, we can use an array which stores emoji path as its key and
                  // its replacer text as its value. We're using emoji paths because
                  // they tend to be unique.

                  if (!insert) insert = customEmojiReplacers[selection.url.replace(baseUrl, '')];

                  _this2.attrs.composer.editor.insertAtCursor(insert);
                });

                _this2.isPickerLoaded = true;
                _this2.isPickerLoading = false;
                m.redraw();

                _this2.picker.togglePicker(_this2.flamojiButton);
              });
            });
          });
        } else {
          _this2.picker.togglePicker(_this2.flamojiButton);
        }
      },
      icon: this.isPickerLoading ? 'fas fa-spinner fa-pulse' : 'far fa-smile-wink',
      title: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(t + 'composer.emoji_tooltip')
    }));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'toolbarItems', function (items) {
    items.has('emoji') ? items.remove('emoji') : '';
  });
}, -150 // initialize before flarum/emoji
);

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map