module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }

  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }

  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);

    try {
      b.send();
    } catch (a) {}

    return 200 <= b.status && 299 >= b.status;
  }

  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }

  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
      a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4E4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4E4);
    }
  });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/admin/components/CustomEmojiList.js":
/*!*************************************************!*\
  !*** ./src/admin/components/CustomEmojiList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomEmojiList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditEmojiModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditEmojiModal */ "./src/admin/components/EditEmojiModal.js");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");
/* harmony import */ var _states_CustomEmojiListState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/CustomEmojiListState */ "./src/admin/states/CustomEmojiListState.js");








var CustomEmojiList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomEmojiList, _Component);

  function CustomEmojiList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CustomEmojiList.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.category = this.attrs.category;
    this.customEmojiListState = new _states_CustomEmojiListState__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.customEmojiListState.loadResults(this.category);
  };

  _proto.view = function view() {
    var state = this.customEmojiListState;
    return m("div", {
      className: "customEmoji-list"
    }, state.isLoading() && state.emojis.length === 0 ? m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, {
      display: "unset",
      size: "large"
    }) : '', m("ul", null, state.emojis.map(function (emoji) {
      var url = Object(_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_5__["default"])(emoji.path()) ? emoji.path() : app.forum.attribute('baseUrl') + emoji.path();
      return m("li", null, m("div", {
        "class": "customEmoji"
      }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Button Button--icon customEmoji-editButton",
        icon: "fas fa-pencil-alt",
        onclick: function onclick() {
          return app.modal.show(_EditEmojiModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            model: emoji
          });
        }
      }), m("div", {
        className: "customEmoji-imageWrapper"
      }, m("img", {
        src: url,
        className: "customEmoji-image",
        alt: emoji.title(),
        title: emoji.textToReplace()
      })), m("div", {
        className: "customEmoji-title"
      }, m("h4", null, emoji.title()))));
    }), m("li", null, m("div", {
      "class": "customEmoji addEmoji"
    }, m("div", {
      className: "customEmoji-imageWrapper"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button Button--icon customEmoji-addButton",
      icon: "fas fa-plus",
      onclick: function onclick() {
        return app.modal.show(_EditEmojiModal__WEBPACK_IMPORTED_MODULE_3__["default"]);
      }
    }))))), state.hasMoreResults() && m("div", {
      className: "customEmoji-loadMore"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button Button--primary",
      disabled: state.isLoading(),
      loading: state.isLoading(),
      onclick: function onclick() {
        return state.loadMore();
      }
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.emoji_list.load_more_button'))));
  };

  return CustomEmojiList;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/CustomEmojiSection.js":
/*!****************************************************!*\
  !*** ./src/admin/components/CustomEmojiSection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomEmojiSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomEmojiList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomEmojiList */ "./src/admin/components/CustomEmojiList.js");
/* harmony import */ var _EditEmojiModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditEmojiModal */ "./src/admin/components/EditEmojiModal.js");
/* harmony import */ var _EditEmojiCategoryModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditEmojiCategoryModal */ "./src/admin/components/EditEmojiCategoryModal.js");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);










var CustomEmojiSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomEmojiSection, _Component);

  function CustomEmojiSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CustomEmojiSection.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.categories = Object.keys(this.attrs.categories) || [];
  };

  _proto.exportEmojiList = function exportEmojiList() {
    var customEmojiList = {};
    app.store.find('the-turk/emojis').then(function (results) {
      results.payload.data.map(function (emoji, i) {
        var attr = emoji.attributes;
        customEmojiList[i] = {
          title: attr.title,
          text_to_replace: attr.text_to_replace,
          path: attr.path,
          category: attr.category
        };
      });
      var blob = new Blob([JSON.stringify(customEmojiList)], {
        type: 'application/json;charset=utf-8'
      });
      Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, 'flamoji.json');
    });
  };

  _proto.importEmojiList = function importEmojiList() {
    if (!confirm(app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.import_emojis_message'))) return;
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = function (e) {
      // getting a hold of the file reference
      var file = e.target.files[0]; // setting up the reader

      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8'); // here we tell the reader what to do when it's done reading...

      reader.onload = function (readerEvent) {
        app.request({
          method: 'POST',
          url: app.forum.attribute('apiUrl') + "/the-turk/import-emojis",
          body: {
            data: JSON.parse(readerEvent.target.result)
          }
        }).then(function () {
          _EditEmojiModal__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.clearCache().then(function () {
            return window.location.reload();
          });
        });
      };
    };

    input.click();
  };

  _proto.flamojiTopItems = function flamojiTopItems() {
    var _this = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default.a();
    items.add('import', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: "fas fa-sign-in-alt",
      onclick: function onclick() {
        return _this.importEmojiList();
      }
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.import_json_button')));
    items.add('export', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: "fas fa-share",
      onclick: function onclick() {
        return _this.exportEmojiList();
      }
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.export_json_button')));
    return items;
  };

  _proto.view = function view() {
    return m("div", {
      className: "ExtensionPage-customFlamoji"
    }, m("div", {
      className: "ExtensionPage-customFlamoji-header"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ExtensionTitle"
    }, m("div", {
      className: "ExtensionName"
    }, m("h2", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.heading_title'))), m("div", {
      "class": "ExtensionPage-headerTopItems"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default()(this.flamojiTopItems().toArray())))))), this.categories.map(function (category) {
      return m("div", {
        className: "container"
      }, m("h2", null, category ? category : "无分类", "\xA0\xA0", category ? m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "Button Button--icon customEmoji-editButton",
        icon: "fas fa-pencil-alt",
        onclick: function onclick() {
          return app.modal.show(_EditEmojiCategoryModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            model: category
          });
        }
      }) : ""), m(_CustomEmojiList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        category: category
      }));
    }));
  };

  return CustomEmojiSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/EditEmojiCategoryModal.js":
/*!********************************************************!*\
  !*** ./src/admin/components/EditEmojiCategoryModal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditEmojiCategoryModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/SettingsModal */ "flarum/admin/components/SettingsModal");
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);







var EditEmojiCategoryModal = /*#__PURE__*/function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditEmojiCategoryModal, _SettingsModal);

  function EditEmojiCategoryModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = EditEmojiCategoryModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _SettingsModal.prototype.oninit.call(this, vnode);

    this.customCategories = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(this.setting(['the-turk-flamoji.custom_categories'])() || []))();
  };

  _proto.className = function className() {
    return 'EditEmojiModal Modal--small';
  };

  _proto.title = function title() {
    return this.attrs.model;
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add('path', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji_category.path_or_url_label')), m("input", {
      className: "FormControl",
      placeholder: "/assets/emojis/batman.png",
      value: this.customCategories[this.attrs.model].path,
      oninput: function oninput(e) {
        _this.customCategories[_this.attrs.model].path = e.target.value;
      }
    })), 20);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary EditEmojiModal-save',
      loading: this.loading
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji_category.submit_button'))), -10);
    return items;
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    var settings = {
      'the-turk-flamoji.custom_categories': JSON.stringify(this.customCategories)
    };
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/settings',
      body: settings
    }).then(function (res) {
      Object.assign(app.data.settings, settings);

      _this2.hide();

      _this2.loading = false;

      _this2.showSuccessMessage();
    });
    ;
  };

  _proto.showSuccessMessage = function showSuccessMessage() {
    return app.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: 'success'
    }, app.translator.trans('core.admin.settings.saved_message'));
  };

  return EditEmojiCategoryModal;
}(flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/EditEmojiModal.js":
/*!************************************************!*\
  !*** ./src/admin/components/EditEmojiModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditEmojiModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/urlChecker */ "./src/common/utils/urlChecker.js");







/**
 * The `EditEmojiModal` component shows a modal dialog which allows the user
 * to add or edit a emoji.
 */

var EditEmojiModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditEmojiModal, _Modal);

  function EditEmojiModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditEmojiModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.emoji = this.attrs.model || app.store.createRecord('emojis');
    this.emojiTitle = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.emoji.title() || '');
    this.textToReplace = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.emoji.textToReplace() || '');
    this.path = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.emoji.path() || '');
    this.category = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.emoji.category() || '');
  };

  _proto.className = function className() {
    return 'EditEmojiModal Modal--small';
  };

  _proto.title = function title() {
    var url = '';
    if (this.path()) url = Object(_common_utils_urlChecker__WEBPACK_IMPORTED_MODULE_6__["default"])(this.path()) ? this.path() : app.forum.attribute('baseUrl') + this.path();
    return this.emojiTitle() ? this.path() ? [m('img', {
      className: 'EditEmojiModal-titleEmoji',
      src: url,
      alt: this.emojiTitle()
    }), this.emojiTitle()] : this.emojiTitle() : app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.modal_title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add('title', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.emoji_title_label')), m("input", {
      className: "FormControl",
      bidi: this.emojiTitle
    })), 50);
    items.add('category', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.emoji_category')), m("input", {
      className: "FormControl",
      bidi: this.category
    })), 40);
    items.add('textToReplace', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.text_to_replace_label')), m("input", {
      className: "FormControl",
      bidi: this.textToReplace
    })), 30);
    items.add('path', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.path_or_url_label')), m("input", {
      className: "FormControl",
      placeholder: "/assets/emojis/batman.png",
      bidi: this.path
    })), 20);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary EditEmojiModal-save',
      loading: this.loading
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.submit_button')), this.emoji.exists ? m("button", {
      type: "button",
      className: "Button EditEmojiModal-delete",
      onclick: this["delete"].bind(this)
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_button')) : ''), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      title: this.emojiTitle(),
      textToReplace: this.textToReplace(),
      path: this.path(),
      category: this.category()
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var exists = this.emoji.exists;
    this.emoji.save(this.submitData()).then(function (emoji) {
      _this.clearCache().then(function () {
        _this.hide(); // if (!exists) app.customEmojiListState.addToList(emoji);
        // 暂时都刷新页面吧


        _this.loading = false;

        _this.showSuccessMessage();

        setTimeout(function () {
          return window.location.reload();
        }, 500);
      });
    });
  };

  _proto["delete"] = function _delete() {
    var _this2 = this;

    if (confirm(app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_confirmation'))) {
      this.emoji["delete"]().then(function () {
        _this2.clearCache().then(function () {
          _this2.hide();

          app.customEmojiListState.removeFromList(_this2.emoji.id());

          _this2.showSuccessMessage();
        });
      });
    }
  };

  _proto.showSuccessMessage = function showSuccessMessage() {
    return app.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: 'success'
    }, app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji.saved_message'));
  } // Seems like we need to clear cache
  // to tell TextFormatter that some changes
  // have been made on the configurator.
  ;

  _proto.clearCache = function clearCache() {
    return app.request({
      method: 'DELETE',
      url: app.forum.attribute('apiUrl') + '/cache'
    });
  };

  return EditEmojiModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/AdminPage */ "flarum/admin/components/AdminPage");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CustomEmojiSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CustomEmojiSection */ "./src/admin/components/CustomEmojiSection.js");
/* harmony import */ var _common_models_Emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/Emoji */ "./src/common/models/Emoji.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/getEmojiCategories */ "./src/common/utils/getEmojiCategories.js");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__);










flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('the-turk-flamoji', function (app) {
  app.store.models.emojis = _common_models_Emoji__WEBPACK_IMPORTED_MODULE_4__["default"];
  var initialCategoryOptions = {};
  Object(_common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_6__["default"])().forEach(function (category) {
    initialCategoryOptions[category] = app.translator.trans('the-turk-flamoji.admin.settings.emoji_categories.' + category);
  });
  var emojiDataOptions = {};
  emojiDataOptions['zh'] = 'zh';
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, ['oncreate', 'onupdate'], function () {
    if (this.extension.id != 'tk-flamoji') return;
    var $recentsCountSetting = this.$('.recentsCountSetting');

    if (!this.setting(['the-turk-flamoji.show_recents'])()) {
      $recentsCountSetting.hide();
    } else {
      $recentsCountSetting.show();
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'oninit', function () {
    if (this.extension.id != 'tk-flamoji') return;
    this.specifiedCategories = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(JSON.parse(this.setting(['the-turk-flamoji.specify_categories'])() || []))();
    this.customCategories = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(JSON.parse(this.setting(['the-turk-flamoji.custom_categories'])() || []))();
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'sections', function (items) {
    if (this.extension.id != 'tk-flamoji') return;
    items.has('permissions') ? items.remove('permissions') : '';
    items.add('customFlamoji', m(_components_CustomEmojiSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      categories: this.customCategories
    }));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'dirty', function (original) {
    var _this = this;

    if (!this.extension || this.extension.id != 'tk-flamoji') return original();
    var dirty = {};
    var specifiedCategories = JSON.stringify(this.specifiedCategories);
    var customCategories = JSON.stringify(this.customCategories);

    if (specifiedCategories !== this.setting(['the-turk-flamoji.specify_categories'])()) {
      dirty['the-turk-flamoji.specify_categories'] = specifiedCategories;
    }

    if (customCategories !== this.setting(['the-turk-flamoji.custom_categories'])()) {
      dirty['the-turk-flamoji.custom_categories'] = customCategories;
    }

    Object.keys(this.settings).forEach(function (key) {
      var value = _this.settings[key]();

      if (value !== app.data.settings[key]) {
        dirty[key] = value;
      }
    });
    return dirty;
  });
  app.extensionData["for"]('tk-flamoji').registerSetting(function () {
    var _this2 = this;

    return m("div", {
      className: "Flamoji--settingsContainer"
    }, m("div", {
      className: "Flamoji--generalUISettingsContainer"
    }, m("h3", null, app.translator.trans('the-turk-flamoji.admin.settings.general_ui_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.auto_hide'])() && this.setting(['the-turk-flamoji.auto_hide'])() !== '0',
      onchange: this.settings['the-turk-flamoji.auto_hide']
    }, app.translator.trans('the-turk-flamoji.admin.settings.auto_hide_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.auto_hide_text'))), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.show_preview'])() && this.setting(['the-turk-flamoji.show_preview'])() !== '0',
      onchange: this.settings['the-turk-flamoji.show_preview']
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_preview_label'))), m("div", {
      className: "helpText"
    })), m("div", {
      className: "Flamoji--generalUISetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.show_search'])() && this.setting(['the-turk-flamoji.show_search'])() !== '0',
      onchange: this.settings['the-turk-flamoji.show_search']
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_search_label'))), m("div", {
      className: "helpText"
    }))), m("div", {
      className: "Flamoji--emojiSettingsContainer"
    }, m("h3", null, app.translator.trans('the-turk-flamoji.admin.settings.emoji_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.show_variants'])() && this.setting(['the-turk-flamoji.show_variants'])() !== '0',
      onchange: this.settings['the-turk-flamoji.show_variants']
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_variants_label'))), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_variants_text'))), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.emoji_style_label')), m(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: this.setting(['the-turk-flamoji.emoji_style'])() || 'twemoji',
      options: {
        "native": app.translator.trans('the-turk-flamoji.admin.settings.emoji_style_native_option'),
        twemoji: 'Twemoji'
      },
      buttonClassName: "Button",
      onchange: this.settings['the-turk-flamoji.emoji_style']
    })), m("div", {
      className: "helpText"
    })), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.emoji_data_label')), m(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: this.setting(['the-turk-flamoji.emoji_data'])() || 'en',
      options: emojiDataOptions,
      buttonClassName: "Button",
      onchange: this.settings['the-turk-flamoji.emoji_data']
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.emoji_data_text'))), m("div", {
      className: "Flamoji--emojiSetting"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.emoji_version_label')), m(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: this.setting(['the-turk-flamoji.emoji_version'])() || '12.1',
      options: {
        '14.0.2': '14.0.2'
      },
      buttonClassName: "Button",
      onchange: this.settings['the-turk-flamoji.emoji_version']
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.emoji_version_text')))), m("div", {
      className: "Flamoji--categorySettingsContainer"
    }, m("h3", null, app.translator.trans('the-turk-flamoji.admin.settings.category_settings_heading')), m("hr", null), m("div", {
      className: "Flamoji--categorySetting"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.initial_category_label')), m(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: this.setting(['the-turk-flamoji.initial_category'])() || 'smileys',
      options: initialCategoryOptions,
      buttonClassName: "Button",
      onchange: this.settings['the-turk-flamoji.initial_category']
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.initial_category_text'))), m("div", {
      className: "Flamoji--categorySetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.show_category_buttons'])() && this.setting(['the-turk-flamoji.show_category_buttons'])() !== '0',
      onchange: this.settings['the-turk-flamoji.show_category_buttons']
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_category_buttons_label'))), m("div", {
      className: "helpText"
    })), m("div", {
      className: "Flamoji--categorySetting"
    }, m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: !!this.setting(['the-turk-flamoji.show_recents'])() && this.setting(['the-turk-flamoji.show_recents'])() !== '0',
      onchange: this.settings['the-turk-flamoji.show_recents']
    }, app.translator.trans('the-turk-flamoji.admin.settings.show_recents_label'))), m("div", {
      className: "helpText"
    })), m("div", {
      className: "Flamoji--categorySetting recentsCountSetting"
    }, m("div", {
      className: "Form-group recentsCountGroup"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.recents_count_label')), m("input", {
      className: "FormControl",
      type: "number",
      bidi: this.setting('the-turk-flamoji.recents_count')
    })), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.recents_count_text'))), m("div", {
      className: "Flamoji--categorySetting specifyCategoriesSetting"
    }, m("div", {
      className: "Form-group specifyCategoriesGroup"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.specify_categories_label')), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.specify_categories_text')), m("div", {
      className: "options"
    }, Object(_common_utils_getEmojiCategories__WEBPACK_IMPORTED_MODULE_6__["default"])().map(function (category) {
      return m("div", {
        className: "cat-checkbox"
      }, m("input", {
        type: "checkbox",
        name: "specifyCats[]",
        checked: _this2.specifiedCategories.indexOf(category) > -1,
        onchange: function onchange(change) {
          if (change.target.checked) {
            _this2.specifiedCategories.push(category);
          } else {
            var index = _this2.specifiedCategories.indexOf(category);

            if (index > -1) {
              _this2.specifiedCategories.splice(index, 1);
            }
          }
        }
      }), m("label", {
        "for": category
      }, app.translator.trans('the-turk-flamoji.admin.settings.emoji_categories.' + category)));
    })))), m("div", {
      className: "Flamoji--categorySetting specifyCategoriesSetting"
    }, m("div", {
      className: "Form-group specifyCategoriesGroup"
    }, m("label", null, app.translator.trans('the-turk-flamoji.admin.settings.custom_categories_label')), m("div", {
      className: "helpText"
    }, app.translator.trans('the-turk-flamoji.admin.settings.custom_categories_text')), m("div", {
      className: "options"
    }, Object.keys(this.customCategories || {}).map(function (category) {
      return m("div", {
        className: "cat-checkbox"
      }, m("input", {
        type: "checkbox",
        name: "customCats[]",
        checked: _this2.customCategories[category].is_enabled == 1,
        onchange: function onchange(change) {
          _this2.customCategories[category].is_enabled = change.target.checked ? 1 : 0;
        }
      }), m("label", {
        "for": category
      }, category ? category : "无分类"));
    }))))));
  });
});

/***/ }),

/***/ "./src/admin/states/CustomEmojiListState.js":
/*!**************************************************!*\
  !*** ./src/admin/states/CustomEmojiListState.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomEmojiListState; });
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);


var CustomEmojiListState = /*#__PURE__*/function () {
  function CustomEmojiListState() {
    this.emojis = [];
    this.moreResults = false;
    this.loading = false;
  }
  /**
   * Load more custom emojis
   *
   * @param category 类型
   * @param offset The index to start the page at.
   */


  var _proto = CustomEmojiListState.prototype;

  _proto.loadResults = function loadResults(category, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    this.loading = true;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('the-turk/emojis', {
      page: {
        limit: 23,
        offset: offset
      },
      category: category
    }).then(this.parseResults.bind(this));
  }
  /**
   * Load the next page of emoji results.
   */
  ;

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.emojis.length);
  }
  /**
   * Parse results and append them to the emoji list.
   */
  ;

  _proto.parseResults = function parseResults(results) {
    var _this$emojis;

    (_this$emojis = this.emojis).push.apply(_this$emojis, results);

    this.loading = false;
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    m.redraw();
    return results;
  }
  /**
   * Add an emoji to the beginning of the list
   */
  ;

  _proto.addToList = function addToList(emoji) {
    this.loading = true;
    this.emojis.unshift(emoji);
    this.loading = false;
  }
  /**
   * Remove an emoji from the list
   */
  ;

  _proto.removeFromList = function removeFromList(emojiId) {
    this.loading = true;
    var index = this.emojis.findIndex(function (emoji) {
      return emojiId === emoji.id();
    });
    this.emojis.splice(index, 1);
    this.loading = false;
  }
  /**
   * Are there any emojis in the list?
   */
  ;

  _proto.hasEmojis = function hasEmojis() {
    return this.emojis.length > 0;
  }
  /**
   * Is the emoji list loading?
   */
  ;

  _proto.isLoading = function isLoading() {
    return this.loading;
  }
  /**
   * Does this list has more emojis?
   */
  ;

  _proto.hasMoreResults = function hasMoreResults() {
    return this.moreResults;
  }
  /**
   * Does this list have any emojis?
   */
  ;

  _proto.empty = function empty() {
    return !this.hasEmojis() && !this.isLoading();
  };

  return CustomEmojiListState;
}();



/***/ }),

/***/ "./src/common/models/Emoji.js":
/*!************************************!*\
  !*** ./src/common/models/Emoji.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emoji; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Emoji = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Emoji, _mixin);

  function Emoji() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Emoji.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/the-turk/emojis' + (this.exists ? '/' + this.data.id : '');
  };

  return Emoji;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  title: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('title'),
  textToReplace: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('text_to_replace'),
  path: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('path'),
  category: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('category')
}));



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

/***/ "flarum/admin/components/AdminPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/AdminPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/SettingsModal":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/SettingsModal']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/SettingsModal'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map