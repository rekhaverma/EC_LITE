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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.runtime.onInstalled.addListener(function() {\n    chrome.contextMenus.create({\n        \"title\": \"View in EC lite\",\n         \"contexts\":[\"page\",\"browser_action\"],\n         \"id\": \"ViewInLightbox\"\n    });\n});\n\n\nfunction contextClicked(info, tab) {\n  if (info.menuItemId == \"ViewInLightbox\" ) {\n        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {\n            chrome.tabs.sendMessage(tabs[0].id, {\"action\": \"startLightbox\"});\n        });\n    }\n};\n\n\n//Instruct Chrome to launch a particular function when context menu items are clicked.\nchrome.contextMenus.onClicked.addListener(contextClicked);\n// Open popup on click of chrome extension icon\nconsole.log(\"cliked\")\nchrome.browserAction.onClicked.addListener(function() {\n    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {\n        chrome.tabs.sendMessage(tabs[0].id, {\"action\": \"startLightbox\"});\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBcInRpdGxlXCI6IFwiVmlldyBpbiBFQyBsaXRlXCIsXG4gICAgICAgICBcImNvbnRleHRzXCI6W1wicGFnZVwiLFwiYnJvd3Nlcl9hY3Rpb25cIl0sXG4gICAgICAgICBcImlkXCI6IFwiVmlld0luTGlnaHRib3hcIlxuICAgIH0pO1xufSk7XG5cblxuZnVuY3Rpb24gY29udGV4dENsaWNrZWQoaW5mbywgdGFiKSB7XG4gIGlmIChpbmZvLm1lbnVJdGVtSWQgPT0gXCJWaWV3SW5MaWdodGJveFwiICkge1xuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgZnVuY3Rpb24odGFicykge1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1wiYWN0aW9uXCI6IFwic3RhcnRMaWdodGJveFwifSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblxuLy9JbnN0cnVjdCBDaHJvbWUgdG8gbGF1bmNoIGEgcGFydGljdWxhciBmdW5jdGlvbiB3aGVuIGNvbnRleHQgbWVudSBpdGVtcyBhcmUgY2xpY2tlZC5cbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKGNvbnRleHRDbGlja2VkKTtcbi8vIE9wZW4gcG9wdXAgb24gY2xpY2sgb2YgY2hyb21lIGV4dGVuc2lvbiBpY29uXG5jb25zb2xlLmxvZyhcImNsaWtlZFwiKVxuY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCkge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcImFjdGlvblwiOiBcInN0YXJ0TGlnaHRib3hcIn0pO1xuICAgIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

/******/ });