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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/header-footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/header-footer.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*--------------------------------Header------------------------------------- */\r\n\r\n.header{\r\n\tline-height: 1.6;\r\n\twidth: 100%;\r\n\theight: 64px;\r\n\tbackground: #fbfcfe;\r\n\tcolor: black;\r\n\tfont-size: 1rem;\r\n  position: fixed;\r\n   z-index: 100;\r\n\t box-shadow: 0 5px 5px -5px #333;\r\n  }\r\n\r\n  a {\r\n  text-decoration: none;\r\n  color: #232323;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .main{\r\n  background: #fbfcfe;\r\n  }\r\n\r\n  .line{\r\n\tposition: absolute;\r\n\t  top: 50%;\r\n\t  transform: translateY(-50%);\r\n\t  width: 100%;\r\n  }\r\n\r\n  .dropbtn {\r\n\t  background-color: inherit;\r\n\t  padding: 1rem;\r\n\t  border: none;\r\n\t  margin: 0 0.5rem 0 0.5rem;\r\n\t  color: rgba(0, 0, 0, 0.54);\r\n\t  font-size: 1rem;\r\n\t  font-weight: 600;\r\n\t  text-decoration: none;\r\n\t\tbox-shadow: none;\r\n\t\tborder: 0;\r\n  }\r\n\r\n  .contener{\r\n\t\tposition: relative;\r\n\t\t/* bottom: -33px; */\r\n\t\tfloat: right;\r\n\t\tmargin-right: 50px;\r\n  }\r\n\r\n  .dropdown {\r\n\t  position: relative;\r\n\t  display: inline-block;\r\n  }\r\n\r\n  .dropdown-content {\r\n\t  display: none;\r\n\t  position: absolute;\r\n\t  min-width: 10rem;\r\n\t  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n\t  z-index: 1;\r\n\t  border: 1px solid;\r\n\t  border-radius: 12px;\r\n\t  background-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\t#AFEEEE,\r\n\t\t\t#B0E0E6\r\n\t\t  );\r\n\t\tborder: 2px solid black;\r\n  }\r\n\r\n  .dropdown-content a{\r\n\t  color: black;\r\n\t  font-weight: bold;\r\n\t  padding: 1rem 1rem;\r\n\t  text-decoration: none;\r\n\t  display: block;\r\n  }\r\n\r\n\r\n  .dropbtn a {\r\n\t  display: block;\r\n  }\r\n\r\n\r\n  .dropdown-content a:hover{\r\n\tcolor: rgba(246, 28, 32, 1);}\r\n\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n\r\n  .dropdown:hover .dropbtn {\r\n\tcursor: pointer;\r\n\ttext-decoration: underline;\r\n\tcolor:black;\r\n  }\r\n\r\n  .dropdown img {\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tmargin: 0px 20px 0px 50px;\r\n  }\r\n\r\n  h3.dropdown{\r\n\t  font-size: 2rem;\r\n\t  font-weight: 600;\r\n  }\r\n\r\n  .button-input {\r\n  background-color: inherit;\r\n  color: rgba(246, 28, 32, 1);\r\n  border: 1px solid rgba(246, 28, 32, 1);\r\n  border-radius: 20px;\r\n  min-width: 80px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.75;\r\n  padding: 6px 16px;\r\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\r\n  }\r\n\r\n  .button-input:hover{background-color: rgba(246, 28, 32, .3);\r\n  cursor: pointer;}\r\n\r\n  .button-input a {\r\n  color: rgba(246, 28, 32, 1);\r\n  }\r\n\r\n  #autorization{\r\n\tdisplay: block;\r\n  }\r\n\r\n  .button-input-autorization {\r\n  background-color: inherit;\r\n  color: rgb(144, 238, 144);\r\n  border: 1px solid rgb(144, 238, 144);\r\n  border-radius: 20px;\r\n  min-width: 80px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.75;\r\n  padding: 6px 16px;\r\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\r\n  }\r\n\r\n\r\n  .button-input, .button-input-autorization {\r\n\tbackground: transparent;\r\n\toutline: none;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tmax-width: 300px;\r\n  }\r\n\r\n  .button-input-autorization:hover {\r\n\tbackground-color: rgb(144, 238, 144, .3);\r\n  }\r\n\r\n  /*button:before (attr data-hover)*/\r\n  .button-input-autorization:hover:before {\r\n\topacity: 1;\r\n\ttransform: translate(0, 0);\r\n  }\r\n  .button-input-autorization:before {\r\n\tcontent: attr(data-hover);\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\topacity: 0;\r\n\ttransform: translate(-100%, 0);\r\n\ttransition: all 0.3s ease-in-out;\r\n  }\r\n  /*button div (button text before hover)*/\r\n  .button-input-autorization:hover a {\r\n\topacity: 0;\r\n\ttransform: translate(100%, 0);\r\n  }\r\n  .button-input-autorization a {\r\n\ttransition: all 0.3s ease-in-out;\r\n\tcolor: rgb(144, 238, 144);\r\n  }\r\n\r\n\r\n  /*------------боковое меню-----------------*/\r\n\r\n  /* nav toggle */\r\n\r\n  .nav-toggle {\r\n\tcursor: pointer;\r\n\theight: 2rem;\r\n\tleft: 2rem;\r\n\tposition: fixed;\r\n\ttop: 1rem;\r\n\twidth: 2.2rem;\r\n\tz-index: 99992;\r\n\tdisplay: none;\r\n  }\r\n  .nav-toggle:hover {\r\n\topacity: 0.8;\r\n  }\r\n  .nav-toggle .nav-toggle-bar,\r\n  .nav-toggle .nav-toggle-bar::after,\r\n  .nav-toggle .nav-toggle-bar::before {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(-50%);\r\n\t-ms-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n\tbackground: black;\r\n\tcontent: '';\r\n\theight: 3px;\r\n\ttransition: all .5s;\r\n\twidth: 100%;\r\n  }\r\n  .nav-toggle .nav-toggle-bar {\r\n\tmargin-top: 0;\r\n  }\r\n  .nav-toggle .nav-toggle-bar::after {\r\n\tmargin-top: 8px;\r\n  }\r\n  .nav-toggle .nav-toggle-bar::before {\r\n\tmargin-top: -8px;\r\n  }\r\n  .nav-toggle.expanded .nav-toggle-bar {\r\n\tbackground: transparent;\r\n  }\r\n  .nav-toggle.expanded .nav-toggle-bar::after, .nav-toggle.expanded .nav-toggle-bar::before {\r\n\tbackground: black;\r\n\tmargin-top: 0;\r\n  }\r\n  .nav-toggle.expanded .nav-toggle-bar::after {\r\n\t-ms-transform: rotate(45deg);\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n  }\r\n  .nav-toggle.expanded .nav-toggle-bar::before {\r\n\t-ms-transform: rotate(-45deg);\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n  }\r\n\r\n\r\n  .nav {\r\n\twidth: 260px;\r\n\theight: auto;\r\n\tbackground-image: linear-gradient(\r\n\t\t  to bottom,\r\n\t\t  #AFEEEE,\r\n\t\t  #B0E0E6\r\n\t\t);\r\n\ttop:0px;\r\n\tpadding: 30px;\r\n\tposition: fixed;\r\n\tleft: -430px;\r\n\ttransition: left 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\theight: calc(100vh + 20px);\r\n\tz-index: 998;\r\n\tpadding-top: 130px;\r\n  }\r\n  .nav.expanded {\r\n\tleft: 0;\r\n  }\r\n\r\n\r\n  /*--------------------выпадающий список----------------------*/\r\n\r\n  ul{\r\n\t  margin: 0;\r\n\t  padding: 0;\r\n\t  list-style: none;\r\n  }\r\n  .menu a{\r\n\t  color: black;\r\n\t  padding: 10px;\r\n\t  display: block;\r\n\t  border-bottom: 1px solid #666;\r\n\t  transition: 0.5s all;\r\n  }\r\n  .menu a:hover{\r\n\t  background: #666;\r\n\t  padding: 10px 0 10px 20px;\r\n  }\r\n  .menu li:first-child a, .menu li .v_menu li:first-child a{\r\n\t  border-radius: 3px 3px 0 0;\r\n  }\r\n  .menu li:last-child a, .menu li .v_menu li:last-child a{\r\n\t  border-radius: 0 0 3px 3px;\r\n\t  border-bottom: 0;\r\n  }\r\n  .menu li .v_menu li a{\r\n\t  border-radius: 0;\r\n  }\r\n  .p_menu{position: relative;}\r\n  .v_menu{\r\n\t  position: absolute;\r\n\t  width: 100%;\r\n\t  left: 100%;\r\n\t  top: -9999px;\r\n\t  opacity: 0;\r\n\t  border-left: 10px solid transparent;\r\n\t  transition: 0.5s opacity;\r\n\t  background-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\t#AFEEEE,\r\n\t\t\t#B0E0E6\r\n\t\t  );\r\n\t\tborder: 2px solid black;\r\n  }\r\n  .p_menu:hover .v_menu{\r\n\t  opacity: 1;\r\n\t  top: 0;\r\n  }\r\n  .p_menu::after{\r\n\t  content: \"\";\r\n\t  position: absolute;\r\n\t  border:5px solid;\r\n\t  border-color: transparent transparent transparent black;\r\n\t  top: 1em;\r\n\t  right: .7em;\r\n\t  transition: 0.5s;\r\n  }\r\n  .p_menu:hover::after{\r\n\t  transform: scaleX(-1);\r\n  }\r\n\r\n  p {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tmargin: 0;\r\n\tdisplay: list-item;\r\n  }\r\n\r\n  * {\r\n\tbox-sizing: border-box;\r\n  }\r\n\r\n  footer {\r\n\t position: relative;\r\n\t bottom: 0;\r\n\t width: 100%;\r\n\t background: #e9f5f7;\r\n\t color: white;\r\n\t text-align: center;\r\n\t height: 50px;\r\n  }\r\n\r\n\r\n  .footer-distributed .footer-left p {\r\n\tcolor: black;\r\n\tfont-size: 20px;\r\n\tposition: relative;\r\n\ttop: 10px;\r\n  }\r\n\r\n  @media (min-width: 1401px) {\r\n  .nav{display: none;}\r\n  }\r\n\r\n  @media (max-width: 1339px) {\r\n  .nav-toggle {display: block;}\r\n\r\n  .contener{display: none;}\r\n\r\n  .line {\r\n\t  position: absolute;\r\n\t  top: 50%;\r\n\t  transform: translateY(-50%);\r\n\t  width: 100%;\r\n\t  text-align: center;\r\n  }\r\n\r\n  }\r\n\r\n  @media (max-width: 440px) {\r\n\r\n\t.nav {width: 200px;}\r\n\r\n\t.dropdown img {\r\n\t  width: 2rem;\r\n\t  height: 2rem;\r\n\t  margin: 1.6rem 0.6rem -10px 3rem;\r\n\t}\r\n\r\n\th3.dropdown{\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: 600;\r\n\t}\r\n  }\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/preloader.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/preloader.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n\toverflow: hidden;\r\n  }\r\n\r\n  .preloader-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 80vh;\r\n\toverflow: hidden;\r\n\tanimation-delay: 1s;\r\n\tpadding: 0 10px;\r\n  }\r\n  .preloader-hide {\r\n\t  display: none;\r\n  }\r\n\r\n  .item-1 {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #f583a1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eed968;\r\n\tmargin: 7px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n  }\r\n  @keyframes scale {\r\n\t0% {\r\n\t  transform: scale(1);\r\n\t}\r\n\t50%,\r\n\t  75% {\r\n\t  transform: scale(2.5);\r\n\t}\r\n\t78%,\r\n\t  100% {\r\n\t  opacity: 0;\r\n\t}\r\n  }\r\n  .item-1:before {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eed968;\r\n\topacity: 0.7;\r\n\tanimation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n\tanimation-delay: 200ms;\r\n\ttransition: 0.5s all ease;\r\n\ttransform: scale(1);\r\n  }\r\n\r\n  .item-2 {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #f583a1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eece68;\r\n\tmargin: 7px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n  }\r\n  @keyframes scale {\r\n\t0% {\r\n\t  transform: scale(1);\r\n\t}\r\n\t50%,\r\n\t  75% {\r\n\t  transform: scale(2.5);\r\n\t}\r\n\t78%,\r\n\t  100% {\r\n\t  opacity: 0;\r\n\t}\r\n  }\r\n  .item-2:before {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eece68;\r\n\topacity: 0.7;\r\n\tanimation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n\tanimation-delay: 400ms;\r\n\ttransition: 0.5s all ease;\r\n\ttransform: scale(1);\r\n  }\r\n\r\n  .item-3 {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #f583a1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eec368;\r\n\tmargin: 7px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n  }\r\n  @keyframes scale {\r\n\t0% {\r\n\t  transform: scale(1);\r\n\t}\r\n\t50%,\r\n\t  75% {\r\n\t  transform: scale(2.5);\r\n\t}\r\n\t78%,\r\n\t  100% {\r\n\t  opacity: 0;\r\n\t}\r\n  }\r\n  .item-3:before {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eec368;\r\n\topacity: 0.7;\r\n\tanimation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n\tanimation-delay: 600ms;\r\n\ttransition: 0.5s all ease;\r\n\ttransform: scale(1);\r\n  }\r\n\r\n  .item-4 {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #f583a1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eead68;\r\n\tmargin: 7px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n  }\r\n  @keyframes scale {\r\n\t0% {\r\n\t  transform: scale(1);\r\n\t}\r\n\t50%,\r\n\t  75% {\r\n\t  transform: scale(2.5);\r\n\t}\r\n\t78%,\r\n\t  100% {\r\n\t  opacity: 0;\r\n\t}\r\n  }\r\n  .item-4:before {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #eead68;\r\n\topacity: 0.7;\r\n\tanimation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n\tanimation-delay: 800ms;\r\n\ttransition: 0.5s all ease;\r\n\ttransform: scale(1);\r\n  }\r\n\r\n  .item-5 {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: #f583a1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #ee8c68;\r\n\tmargin: 7px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n  }\r\n  @keyframes scale {\r\n\t0% {\r\n\t  transform: scale(1);\r\n\t}\r\n\t50%,\r\n\t  75% {\r\n\t  transform: scale(2.5);\r\n\t}\r\n\t78%,\r\n\t  100% {\r\n\t  opacity: 0;\r\n\t}\r\n  }\r\n  .item-5:before {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #ee8c68;\r\n\topacity: 0.7;\r\n\tanimation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\r\n\tanimation-delay: 1000ms;\r\n\ttransition: 0.5s all ease;\r\n\ttransform: scale(1);\r\n  }\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/progress.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/progress.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".progress-bar,\r\n.progress-bar-all {\r\n\tbackground-color: #1a1a1a;\r\n\theight: 30px;\r\n    padding: 3px;\r\n\twidth: 350px;\r\n\tmargin: 5px 0;\r\n\t-moz-border-radius: 5px;\r\n\t-webkit-border-radius: 5px;\r\n\tborder-radius: 5px;\r\n\t-moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\r\n\t-webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\r\n\tbox-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\r\n}\r\n\r\n.progress-bar span,\r\n.progress-bar-all span {\r\n\tdisplay: inline-block;\r\n\theight: 25px;\r\n\twidth: 200px;\r\n\t-moz-border-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\tborder-radius: 3px;\r\n\t-moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\r\n\t-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\r\n\tbox-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\r\n\t-webkit-transition: width .4s ease-in-out;\r\n\t-moz-transition: width .4s ease-in-out;\r\n\t-ms-transition: width .4s ease-in-out;\r\n\t-o-transition: width .4s ease-in-out;\r\n\ttransition: width .4s ease-in-out;\r\n}\r\n.blue span {\r\n\tbackground-color: #34c2e3;\r\n}\r\n\r\n.orange span {\r\n\t  background-color: #fecf23;\r\n}       \r\n\r\n.green span {\r\n\t  background-color: #a5df41;\r\n}\r\n.shine span {\r\n\tposition: relative;\r\n}\r\n\r\n.shine span::after {\r\n\tcontent: '';\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: #fff;\r\n\t-moz-border-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\tborder-radius: 3px;                     \r\n\r\n\t-webkit-animation: animate-shine 2s ease-out infinite;\r\n\t-moz-animation: animate-shine 2s ease-out infinite;\r\n}\r\n\r\n.glow span {\r\n\t-moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\r\n\t-webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\r\n\tbox-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\r\n\r\n\t-webkit-animation: animate-glow 1s ease-out infinite;\r\n\t-moz-animation: animate-glow 1s ease-out infinite;\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbody {\r\n\tbackground: #e9f5f7;\r\n\t/* position: relative; */\r\n    width: 100vw;\r\n\theight: 100vh;\r\n\tcolor: #000;\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n.container{\r\n\tpadding-top: 70px;\r\n\twidth: 70%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tfont-size: 1.5vw;\r\n\tmin-height: calc(100vh - 50px);\r\n}\r\n/* .menu {\r\n\twidth: 45%;\r\n\tfont-weight: 600;\r\n} */\r\n.link {\r\n\tbackground-color: inherit;\r\n    padding: 1rem;\r\n    border: none;\r\n    margin: 0 0.5rem 0 0.5rem;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.settings,\r\n.check-boxes {\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\twidth: 45%;\r\n}\r\n.card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    margin: 0 auto 10px;\r\n    text-align: center;\r\n\tfont-family: arial;\r\n    border-radius: 20px;\r\n    background: #2eddef52;\r\n}\r\n.card-hide {\r\n\tdisplay: none;\r\n}\r\n.card_img{\r\n\tmargin: 20px auto;\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n.card_main-input{\r\n\twidth: 95%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.card_phrase,\r\n.card_phrase-translate,\r\n.card_meaning,\r\n.card_meaning-translate,\r\n.card_word-transcription,\r\n.difficulty_btns,\r\n.card_word-translate {\r\n\twidth: 95%;\r\n\tmargin: 3px auto;\r\n}\r\n.word-hidden {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\nbutton,\r\n.word-hidden_btn {\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    background-color: inherit;\r\n    padding: 0.1em 0.4em;\r\n    border-radius: 20px;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1.2rem;\r\n    background: #429fafc9;\r\n    font-weight: 600;\r\n}\r\nbutton{\r\n    margin: 0px 5px 5px;\r\n}\r\n.word-hidden_btn {\r\n\tmargin-left: 10px;\r\n}\r\n.word-hidden_input {\r\n\tfont-size: 1.5em;\r\n\theight: 1.1em;\r\n\tfont-weight: normal;\r\n}\r\n.card_word-translate {\r\n\tfont-size: 1.5rem;\r\n}\r\n.multi-color {\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\tleft: 2px;\r\n\tfont-size: 1.5em;\r\n\tfont-weight: normal;\r\n}\r\n.difficulty_btns {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n}\r\n.bars {\r\n    margin: 10px auto;\r\n    width: 100%;\r\n}\r\n.bars-hide {\r\n\tdisplay: none;\r\n}\r\n.notification {\r\n\ttext-align: center;\r\n\tfont-weight: normal;\r\n}\r\n.para1 {\r\n\tfont-size: 1.5em;\r\n}\r\n.para2 {\r\n\tfont-size: 1.3em;\r\n}\r\n.para3 {\r\n\tfont-size: 1.2em;\r\n}\r\n\r\n@media (max-width: 1032px) {\r\n\t.container{\r\n\t\twidth: 80%;\r\n\t\t/* font-size: 3.5vw; */\r\n\t}\r\n\t.card_word-hidden {\r\n\t\twidth: 85%;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.word-hidden {\r\n\t\tmargin: 0;\r\n\t}\r\n\tbutton{\r\n\t\tmargin: 15px 5px 5px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\t.container{\r\n\t\twidth: 90%;\r\n\t\t/* font-size: 4vw; */\r\n\t}\r\n}\r\n", ""]);
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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/css/style.css */ "./src/layout/css/style.css");
/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_css_header_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/css/header-footer.css */ "./src/layout/css/header-footer.css");
/* harmony import */ var _layout_css_header_footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css_header_footer_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_css_progress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/css/progress.css */ "./src/layout/css/progress.css");
/* harmony import */ var _layout_css_progress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_css_progress_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_css_preloader_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/css/preloader.css */ "./src/layout/css/preloader.css");
/* harmony import */ var _layout_css_preloader_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_css_preloader_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/scripts/add-fields */ "./src/layout/scripts/add-fields.js");
/* harmony import */ var _layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/scripts/show-full-text */ "./src/layout/scripts/show-full-text.js");
/* harmony import */ var _layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/scripts/show-btns */ "./src/layout/scripts/show-btns.js");
/* harmony import */ var _layout_scripts_clear_for_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/scripts/clear-for-loading */ "./src/layout/scripts/clear-for-loading.js");
/* harmony import */ var _layout_scripts_set_input_width__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/scripts/set-input-width */ "./src/layout/scripts/set-input-width.js");
/* harmony import */ var _layout_scripts_multi_color_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/scripts/multi-color-result */ "./src/layout/scripts/multi-color-result.js");
/* harmony import */ var _layout_scripts_create_words_array_for_today__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/scripts/create-words-array-for-today */ "./src/layout/scripts/create-words-array-for-today.js");
/* harmony import */ var _layout_scripts_get_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/scripts/get-settings */ "./src/layout/scripts/get-settings.js");
/* harmony import */ var _layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/scripts/create-or-update-word */ "./src/layout/scripts/create-or-update-word.js");
/* harmony import */ var _layout_scripts_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/scripts/progress */ "./src/layout/scripts/progress.js");
/* harmony import */ var _layout_scripts_say__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/scripts/say */ "./src/layout/scripts/say.js");



/* eslint-disable no-use-before-define */













 // eslint-disable-next-line import/no-cycle


var userId = localStorage.getItem('userId');
var token = localStorage.getItem('token');

function seeSettings() {
  return _seeSettings.apply(this, arguments);
}

function _seeSettings() {
  _seeSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var settings;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_layout_scripts_get_settings__WEBPACK_IMPORTED_MODULE_13__["default"])(userId, token);

          case 2:
            settings = _context.sent;
            return _context.abrupt("return", settings);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _seeSettings.apply(this, arguments);
}

var settings = seeSettings();

function createArray() {
  return _createArray.apply(this, arguments);
}

function _createArray() {
  _createArray = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var setSettings, wordsArrayForToday, shufledWordsArrayForToday;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return settings;

          case 2:
            setSettings = _context2.sent;
            _context2.next = 5;
            return Object(_layout_scripts_create_words_array_for_today__WEBPACK_IMPORTED_MODULE_12__["default"])(setSettings.wordsPerDay, setSettings.optional.cardsPerDay, token, userId);

          case 5:
            wordsArrayForToday = _context2.sent;
            console.log(wordsArrayForToday);
            shufledWordsArrayForToday = wordsArrayForToday.sort(function (a, b) {
              return a.group > b.group ? 1 : -1;
            });
            Object(_layout_scripts_clear_for_loading__WEBPACK_IMPORTED_MODULE_9__["showCard"])();
            return _context2.abrupt("return", shufledWordsArrayForToday);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createArray.apply(this, arguments);
}

var wordsArrayForToday = createArray();

function startApp() {
  return _startApp.apply(this, arguments);
}

function _startApp() {
  _startApp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var arrayOfWords, word;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return wordsArrayForToday;

          case 2:
            arrayOfWords = _context3.sent;

            if (arrayOfWords.length === 0) {
              Object(_layout_scripts_progress__WEBPACK_IMPORTED_MODULE_15__["default"])(token, userId);
            } else {
              word = arrayOfWords[arrayOfWords.length - 1];
              console.log(arrayOfWords);
              app(word, arrayOfWords);
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _startApp.apply(this, arguments);
}

Object(_layout_scripts_clear_for_loading__WEBPACK_IMPORTED_MODULE_9__["clearCard"])();
startApp();

function correctAnswer(_x, _x2) {
  return _correctAnswer.apply(this, arguments);
}

function _correctAnswer() {
  _correctAnswer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wordInfo, arrayOfWords) {
    var setSettings, isSoundOn, isTranslateOn, arr, diff3btn, diff2btn, diff1btn, diff0btn;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return settings;

          case 2:
            setSettings = _context4.sent;
            isSoundOn = document.getElementById('sound').checked;
            isTranslateOn = document.getElementById('translate').checked;
            arr = arrayOfWords.slice(0, arrayOfWords.length - 1);

            if (setSettings.optional.showWordsStatusButtons && arr.length > 0) {
              if (isSoundOn) {
                Object(_layout_scripts_say__WEBPACK_IMPORTED_MODULE_16__["default"])(wordInfo, arr, userId, token, false);
              }

              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["showDifficultyBtns"])();
              diff3btn = document.getElementById('difficulty_3_btn');

              diff3btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId, '3');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff2btn = document.getElementById('difficulty_2_btn');

              diff2btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId, '2');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff1btn = document.getElementById('difficulty_1_btn');

              diff1btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId, '1');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff0btn = document.getElementById('difficulty_0_btn');

              diff0btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId, '0');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };
            } else if (isSoundOn) {
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId);
              Object(_layout_scripts_say__WEBPACK_IMPORTED_MODULE_16__["default"])(wordInfo, arr, userId, token, true);
            } else if (arr.length > 0) {
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId);
              app(arr[arr.length - 1], arr);
            } else if (arr.length === 0) {
              startApp();
            }

            if (arr.length > 0) {
              if (setSettings.optional.showTextExample) {
                Object(_layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_7__["showFullTextExample"])(wordInfo);
              }

              if (setSettings.optional.showTextMeaning) {
                Object(_layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_7__["showFullTextMeaning"])(wordInfo);
              }

              if (isTranslateOn) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_6__["addWordTranslateInCard"])(wordInfo);
              }

              if (isTranslateOn && setSettings.optional.showTextExample) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_6__["addTextExampleTranslateInCard"])(wordInfo);
              }

              if (isTranslateOn && setSettings.optional.showTextMeaning) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_6__["addWordMeaningTranslateInCard"])(wordInfo);
              }
            }

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _correctAnswer.apply(this, arguments);
}

function checkInput(_x3, _x4) {
  return _checkInput.apply(this, arguments);
}

function _checkInput() {
  _checkInput = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wordInfo, arrayOfWords) {
    var word, multiColorResultWrapper, input, i, span;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            word = wordInfo.word;
            multiColorResultWrapper = document.querySelector('.multi-color');
            input = document.querySelector('.word-hidden_input');
            multiColorResultWrapper.textContent = '';

            if (word === input.value) {
              // GOOD ANSWER
              correctAnswer(wordInfo, arrayOfWords, token);
            } else {
              // BAD ANSWER
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo.id, token, userId, '3');

              for (i = 0; i < input.value.length; i += 1) {
                span = document.createElement('span');
                span.textContent = input.value[i];

                if (input.value[i] === word[i]) {
                  span.style.color = 'green';
                } else {
                  span.style.color = 'red';
                }

                multiColorResultWrapper.append(span);
              }
            }

            input.value = '';

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _checkInput.apply(this, arguments);
}

function app(_x5, _x6) {
  return _app.apply(this, arguments);
}

function _app() {
  _app = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(word, arrayOfWords) {
    var cardMeaningTranslate, cardTranslate, input, colorWrapper, setSettings, answerBtn, deleteWordbtn, difficultWordbtn;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(arrayOfWords.length === 0)) {
              _context6.next = 4;
              break;
            }

            startApp();
            _context6.next = 22;
            break;

          case 4:
            cardMeaningTranslate = document.querySelector('.card_meaning-translate');
            cardTranslate = document.querySelector('.card_phrase-translate');
            cardMeaningTranslate.textContent = '';
            cardTranslate.textContent = '';
            Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_6__["addCardFields"])(word, userId, token);
            Object(_layout_scripts_set_input_width__WEBPACK_IMPORTED_MODULE_10__["default"])(word);
            Object(_layout_scripts_multi_color_result__WEBPACK_IMPORTED_MODULE_11__["default"])();
            input = document.querySelector('.word-hidden');

            input.onsubmit = function (e) {
              e.preventDefault();
              checkInput(word, arrayOfWords);
            };

            colorWrapper = document.querySelector('.multi-color');

            colorWrapper.onclick = function () {
              colorWrapper.textContent = '';
              input.focus();
            };

            input.addEventListener('input', function () {
              colorWrapper.textContent = '';
              input.focus();
            });
            _context6.next = 18;
            return settings;

          case 18:
            setSettings = _context6.sent;

            if (setSettings.optional.showAnswerButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["showAnswerBtn"])();
              answerBtn = document.getElementById('answer_btn');

              answerBtn.onclick = function () {
                correctAnswer(word, arrayOfWords, token);
              };
            }

            if (setSettings.optional.showDeleteButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["showDeleteWordBtn"])();
              deleteWordbtn = document.getElementById('delete_btn');

              deleteWordbtn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(word.id, token, userId, '-1');
                app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
              };
            }

            if (setSettings.optional.showDifficultWordsButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_8__["showDifficultWordBtn"])();
              difficultWordbtn = document.getElementById('difficult_btn');

              difficultWordbtn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_14__["default"])(word.id, token, userId, '20');
                app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
              };
            }

          case 22:
            Object(_layout_scripts_progress__WEBPACK_IMPORTED_MODULE_15__["default"])(token, userId);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _app.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/layout/css/header-footer.css":
/*!******************************************!*\
  !*** ./src/layout/css/header-footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./header-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/header-footer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/layout/css/preloader.css":
/*!**************************************!*\
  !*** ./src/layout/css/preloader.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./preloader.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/preloader.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/layout/css/progress.css":
/*!*************************************!*\
  !*** ./src/layout/css/progress.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./progress.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/progress.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/layout/css/style.css":
/*!**********************************!*\
  !*** ./src/layout/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/layout/scripts/add-fields.js":
/*!******************************************!*\
  !*** ./src/layout/scripts/add-fields.js ***!
  \******************************************/
/*! exports provided: addCardFields, addTextExampleTranslateInCard, addWordMeaningTranslateInCard, addWordTranslateInCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardFields", function() { return addCardFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextExampleTranslateInCard", function() { return addTextExampleTranslateInCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWordMeaningTranslateInCard", function() { return addWordMeaningTranslateInCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWordTranslateInCard", function() { return addWordTranslateInCard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-settings */ "./src/layout/scripts/get-settings.js");




function addImg(wordInfo) {
  var imageWrapper = document.querySelector('.card_img');
  imageWrapper.textContent = '';
  var img = document.createElement('img');

  if (wordInfo.image.length > 100) {
    img.src = "data:image/jpg;base64,".concat(wordInfo.image);
  } else {
    img.src = "https://raw.githubusercontent.com/svirskia/rslang-data/master/".concat(wordInfo.image);
  }

  imageWrapper.append(img);
}

function addTextExampleInCard(wordInfo) {
  var cardPhrase = document.querySelector('.card_phrase');
  cardPhrase.innerHTML = wordInfo.textExample;
  var cardPhraseB = document.querySelector('.card_phrase b');
  cardPhraseB.textContent = '';
  var span = document.createElement('span');
  span.textContent = '[ ? ]';
  cardPhraseB.append(span);
}

function addWordMeaningInCard(wordInfo) {
  var cardMeaning = document.querySelector('.card_meaning');
  cardMeaning.innerHTML = wordInfo.textMeaning;
  var cardMeaningI = document.querySelector('.card_meaning i');
  cardMeaningI.textContent = '';
  var span = document.createElement('span');
  span.textContent = '[ ? ]';
  span.style.fontStyle = 'normal';
  span.style.fontWeight = 'bold';
  cardMeaningI.append(span);
}

function addWordTranslateInCard(wordInfo) {
  var wordTranslate = document.querySelector('.card_word-translate');
  wordTranslate.textContent = wordInfo.wordTranslate;
}

function addWordTranscriptionInCard(wordInfo) {
  var wordTranscription = document.querySelector('.card_word-transcription');
  wordTranscription.textContent = wordInfo.transcription;
}

function addTextExampleTranslateInCard(wordInfo) {
  var cardTranslate = document.querySelector('.card_phrase-translate');
  cardTranslate.textContent = wordInfo.textExampleTranslate;
}

function addWordMeaningTranslateInCard(wordInfo) {
  var cardMeaningTranslate = document.querySelector('.card_meaning-translate');
  cardMeaningTranslate.textContent = wordInfo.textMeaningTranslate;
}

function addCardFields(_x, _x2, _x3) {
  return _addCardFields.apply(this, arguments);
}

function _addCardFields() {
  _addCardFields = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(word, userId, token) {
    var settings;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_get_settings__WEBPACK_IMPORTED_MODULE_2__["default"])(userId, token);

          case 2:
            settings = _context.sent;

            if (settings.optional.showImage) {
              addImg(word);
            }

            if (settings.optional.showTextExample) {
              addTextExampleInCard(word);
            }

            if (settings.optional.showTextMeaning) {
              addWordMeaningInCard(word);
            }

            if (settings.optional.showTranslation) {
              addWordTranslateInCard(word);
            }

            if (settings.optional.showTranscription) {
              addWordTranscriptionInCard(word);
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addCardFields.apply(this, arguments);
}



/***/ }),

/***/ "./src/layout/scripts/add-notification.js":
/*!************************************************!*\
  !*** ./src/layout/scripts/add-notification.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addNotification() {
  var notificationWrapper = document.querySelector('.notification');
  var para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent = 'Congratulations!';
  var para2 = document.createElement('p');
  para2.classList.add('para2');
  para2.textContent = "That's all for today.";
  var para3 = document.createElement('p');
  para3.classList.add('para3');
  para3.textContent = 'There are still new cards, but the daily limit has been reached. You can increase the limit in the settings, but please keep in mind that the more new cards you see, the more you will need to repeat in the near future';
  notificationWrapper.append(para1, para2, para3);
  var cardWrapper = document.querySelector('.card');
  cardWrapper.textContent = '';
}

/* harmony default export */ __webpack_exports__["default"] = (addNotification);

/***/ }),

/***/ "./src/layout/scripts/clear-for-loading.js":
/*!*************************************************!*\
  !*** ./src/layout/scripts/clear-for-loading.js ***!
  \*************************************************/
/*! exports provided: clearCard, showCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCard", function() { return clearCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCard", function() { return showCard; });
function clearCard() {
  var card = document.querySelector('.card');
  card.classList.add('card-hide');
  var bars = document.querySelector('.bars');
  bars.classList.add('bars-hide');
}

function showCard() {
  var card = document.querySelector('.card');
  card.classList.remove('card-hide');
  var bars = document.querySelector('.bars');
  bars.classList.remove('bars-hide');
  var preloader = document.querySelector('.preloader-container');
  preloader.classList.add('preloader-hide');
}



/***/ }),

/***/ "./src/layout/scripts/create-or-update-word.js":
/*!*****************************************************!*\
  !*** ./src/layout/scripts/create-or-update-word.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_user_word_by_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-word-by-id */ "./src/layout/scripts/get-user-word-by-id.js");
/* harmony import */ var _create_user_word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-user-word */ "./src/layout/scripts/create-user-word.js");
/* harmony import */ var _update_user_word__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-user-word */ "./src/layout/scripts/update-user-word.js");






function createOrUpdateWord(_x, _x2, _x3, _x4) {
  return _createOrUpdateWord.apply(this, arguments);
}

function _createOrUpdateWord() {
  _createOrUpdateWord = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(wordId, token, userId, diff) {
    var now, userWord, wordFirstTime, currentWordDifficulty;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            now = new Date();
            _context.next = 3;
            return Object(_get_user_word_by_id__WEBPACK_IMPORTED_MODULE_2__["default"])(token, wordId, userId);

          case 3:
            userWord = _context.sent;

            if (userWord !== null) {
              wordFirstTime = userWord.optional.firstTime;
              currentWordDifficulty = userWord.difficulty;
              Object(_update_user_word__WEBPACK_IMPORTED_MODULE_4__["default"])({
                userId: userId,
                token: token,
                wordId: userWord.wordId,
                word: {
                  difficulty: diff || String(+currentWordDifficulty - 1),
                  optional: {
                    firstTime: wordFirstTime,
                    lastTime: now.getTime()
                  }
                }
              });
            } else {
              Object(_create_user_word__WEBPACK_IMPORTED_MODULE_3__["default"])({
                userId: userId,
                token: token,
                wordId: wordId,
                word: {
                  difficulty: diff || '0',
                  optional: {
                    firstTime: now.getTime(),
                    lastTime: now.getTime()
                  }
                }
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createOrUpdateWord.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (createOrUpdateWord);

/***/ }),

/***/ "./src/layout/scripts/create-user-word.js":
/*!************************************************!*\
  !*** ./src/layout/scripts/create-user-word.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var createUserWord = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var userId, token, wordId, word, rawResponse, newWord;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref2.userId, token = _ref2.token, wordId = _ref2.wordId, word = _ref2.word;
            _context.next = 3;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/words/").concat(wordId), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(word)
            });

          case 3:
            rawResponse = _context.sent;
            _context.next = 6;
            return rawResponse.json();

          case 6:
            newWord = _context.sent;
            return _context.abrupt("return", newWord);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUserWord(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createUserWord);

/***/ }),

/***/ "./src/layout/scripts/create-words-array-for-today.js":
/*!************************************************************!*\
  !*** ./src/layout/scripts/create-words-array-for-today.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_user_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-words */ "./src/layout/scripts/get-user-words.js");
/* harmony import */ var _get_random_word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-random-word */ "./src/layout/scripts/get-random-word.js");
/* harmony import */ var _get_word_by_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-word-by-id */ "./src/layout/scripts/get-word-by-id.js");



/* eslint-disable max-len */




function createWordsArrayForToday(_x, _x2, _x3, _x4) {
  return _createWordsArrayForToday.apply(this, arguments);
}

function _createWordsArrayForToday() {
  _createWordsArrayForToday = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(newWords, maxCards, token, userId) {
    var now, allUserWods, sortedFromNewAllUserWods, alredyLearnedWordsToday, alredyLearnedNewWordsToday, i, lastRepeatTime, fourHoursEarlier, _i, firstRepeatTime, _fourHoursEarlier, arrayOfWordsForToday, _i2, randomWord, difficult3UserWords, _i3, difficultUserWord, difficult2UserWords, _i4, notEasyUserWord, difficult1UserWords, _i5, easyUserWord, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            now = new Date();
            _context.next = 3;
            return Object(_get_user_words__WEBPACK_IMPORTED_MODULE_2__["default"])(token, userId);

          case 3:
            allUserWods = _context.sent;
            sortedFromNewAllUserWods = allUserWods.sort(function (a, b) {
              return a.optional.lastTime < b.optional.lastTime ? 1 : -1;
            });
            alredyLearnedWordsToday = 0;
            alredyLearnedNewWordsToday = 0;

            for (i = 0; i < sortedFromNewAllUserWods.length; i += 1) {
              lastRepeatTime = new Date(sortedFromNewAllUserWods[i].optional.lastTime - 4 * 3600 * 1000);
              fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);

              if (lastRepeatTime.getDate() === fourHoursEarlier.getDate() && sortedFromNewAllUserWods[i].difficulty !== '3' && sortedFromNewAllUserWods[i].difficulty !== '-1') {
                alredyLearnedWordsToday += 1;
              } //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
              //   break;
              // }

            }

            for (_i = 0; _i < sortedFromNewAllUserWods.length; _i += 1) {
              firstRepeatTime = new Date(sortedFromNewAllUserWods[_i].optional.firstTime - 4 * 3600 * 1000);
              _fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);

              if (firstRepeatTime.getDate() === _fourHoursEarlier.getDate() && sortedFromNewAllUserWods[_i].difficulty !== '3' && sortedFromNewAllUserWods[_i].difficulty !== '-1') {
                alredyLearnedNewWordsToday += 1;
              } //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
              //   break;
              // }

            }

            arrayOfWordsForToday = [];

            for (_i2 = 0; _i2 < newWords - alredyLearnedNewWordsToday; _i2 += 1) {
              randomWord = Object(_get_random_word__WEBPACK_IMPORTED_MODULE_3__["default"])();
              arrayOfWordsForToday.push(randomWord);
            }

            difficult3UserWords = allUserWods.filter(function (item) {
              return +item.difficulty > 2;
            });
            _i3 = 0;

          case 13:
            if (!(_i3 < difficult3UserWords.length)) {
              _context.next = 24;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday)) {
              _context.next = 19;
              break;
            }

            difficultUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult3UserWords[_i3].wordId);
            arrayOfWordsForToday.push(difficultUserWord);
            _context.next = 21;
            break;

          case 19:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("break", 24);

          case 21:
            _i3 += 1;
            _context.next = 13;
            break;

          case 24:
            difficult2UserWords = allUserWods.filter(function (item) {
              return +item.difficulty === 2;
            });
            _i4 = 0;

          case 26:
            if (!(_i4 < difficult2UserWords.length)) {
              _context.next = 37;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday && (now.getTime() - difficult2UserWords[_i4].optional.lastTime) / 60000 / 60 > 22 // если больше 22 часов не повторялось
            && difficult2UserWords[_i4].wordId !== '5efe34e3635aec001764d725')) {
              _context.next = 32;
              break;
            }

            // глюк
            notEasyUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult2UserWords[_i4].wordId);
            arrayOfWordsForToday.push(notEasyUserWord);
            _context.next = 34;
            break;

          case 32:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 34;
              break;
            }

            return _context.abrupt("break", 37);

          case 34:
            _i4 += 1;
            _context.next = 26;
            break;

          case 37:
            difficult1UserWords = allUserWods.filter(function (item) {
              return +item.difficulty === 1;
            });
            _i5 = 0;

          case 39:
            if (!(_i5 < difficult1UserWords.length)) {
              _context.next = 50;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday && (now.getTime() - difficult1UserWords[_i5].optional.lastTime) / 60000 / 60 > 70)) {
              _context.next = 45;
              break;
            }

            // если больше 70 часов не повторялось
            easyUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult1UserWords[_i5].wordId);
            arrayOfWordsForToday.push(easyUserWord);
            _context.next = 47;
            break;

          case 45:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 47;
              break;
            }

            return _context.abrupt("break", 50);

          case 47:
            _i5 += 1;
            _context.next = 39;
            break;

          case 50:
            _context.next = 52;
            return Promise.all(arrayOfWordsForToday);

          case 52:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createWordsArrayForToday.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (createWordsArrayForToday);

/***/ }),

/***/ "./src/layout/scripts/get-random-word.js":
/*!***********************************************!*\
  !*** ./src/layout/scripts/get-random-word.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var getRandomWord = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(words) {
    var randomGroup, randomPage, randomWord, rawResponse, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            randomGroup = Math.floor(Math.random() * 6);
            randomPage = Math.floor(Math.random() * 30);
            randomWord = Math.floor(Math.random() * 20);
            _context.next = 5;
            return fetch("https://afternoon-falls-25894.herokuapp.com/words?page=".concat(randomPage, "&group=").concat(randomGroup), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(words)
            });

          case 5:
            rawResponse = _context.sent;
            _context.next = 8;
            return rawResponse.json();

          case 8:
            content = _context.sent;
            return _context.abrupt("return", content[randomWord]);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRandomWord(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getRandomWord);

/***/ }),

/***/ "./src/layout/scripts/get-settings.js":
/*!********************************************!*\
  !*** ./src/layout/scripts/get-settings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var getSettings = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId, token) {
    var rawResponse, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/settings"), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });

          case 2:
            rawResponse = _context.sent;
            _context.next = 5;
            return rawResponse.json();

          case 5:
            content = _context.sent;
            return _context.abrupt("return", content);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSettings(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getSettings);

/***/ }),

/***/ "./src/layout/scripts/get-user-word-by-id.js":
/*!***************************************************!*\
  !*** ./src/layout/scripts/get-user-word-by-id.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var getUserWordById = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token, wordId, userId) {
    var rawResponse, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/words/").concat(wordId), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });

          case 3:
            rawResponse = _context.sent;
            _context.next = 6;
            return rawResponse.json();

          case 6:
            content = _context.sent;
            return _context.abrupt("return", content);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", null);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUserWordById(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getUserWordById);

/***/ }),

/***/ "./src/layout/scripts/get-user-words.js":
/*!**********************************************!*\
  !*** ./src/layout/scripts/get-user-words.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var getUserWords = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token, userId) {
    var rawResponse, allWords;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/words"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });

          case 2:
            rawResponse = _context.sent;
            _context.next = 5;
            return rawResponse.json();

          case 5:
            allWords = _context.sent;
            return _context.abrupt("return", allWords);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserWords(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getUserWords);

/***/ }),

/***/ "./src/layout/scripts/get-word-by-id.js":
/*!**********************************************!*\
  !*** ./src/layout/scripts/get-word-by-id.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var getWordById = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(wordId) {
    var rawResponse, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://afternoon-falls-25894.herokuapp.com/words/".concat(wordId), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });

          case 2:
            rawResponse = _context.sent;
            _context.next = 5;
            return rawResponse.json();

          case 5:
            content = _context.sent;
            return _context.abrupt("return", content);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getWordById(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getWordById);

/***/ }),

/***/ "./src/layout/scripts/multi-color-result.js":
/*!**************************************************!*\
  !*** ./src/layout/scripts/multi-color-result.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addMultiColorResult() {
  var inputContainer = document.querySelector('.card_word-hidden');
  inputContainer.style.position = 'relative';
  var multiColorResultWrapper = document.createElement('div');
  multiColorResultWrapper.classList.add('multi-color');
  inputContainer.append(multiColorResultWrapper);
}

/* harmony default export */ __webpack_exports__["default"] = (addMultiColorResult);

/***/ }),

/***/ "./src/layout/scripts/progress.js":
/*!****************************************!*\
  !*** ./src/layout/scripts/progress.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_user_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-words */ "./src/layout/scripts/get-user-words.js");
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-settings */ "./src/layout/scripts/get-settings.js");
/* harmony import */ var _add_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-notification */ "./src/layout/scripts/add-notification.js");



/* eslint-disable max-len */




function progress(_x, _x2) {
  return _progress.apply(this, arguments);
}

function _progress() {
  _progress = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token, userId) {
    var allUserWods, settings, now, sortedFromNewAllUserWods, alredyLearnedWordsToday, alredyLearnedNewWordsToday, i, lastRepeatTime, fourHoursEarlier, barAll, _i, firstRepeatTime, _fourHoursEarlier, bar;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_get_user_words__WEBPACK_IMPORTED_MODULE_2__["default"])(token, userId);

          case 2:
            allUserWods = _context.sent;
            _context.next = 5;
            return Object(_get_settings__WEBPACK_IMPORTED_MODULE_3__["default"])(userId, token);

          case 5:
            settings = _context.sent;
            now = new Date();
            sortedFromNewAllUserWods = allUserWods.sort(function (a, b) {
              return a.optional.lastTime < b.optional.lastTime ? 1 : -1;
            });
            alredyLearnedWordsToday = 0;
            alredyLearnedNewWordsToday = 0;

            for (i = 0; i < sortedFromNewAllUserWods.length; i += 1) {
              lastRepeatTime = new Date(sortedFromNewAllUserWods[i].optional.lastTime - 4 * 3600 * 1000);
              fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);

              if (lastRepeatTime.getDate() === fourHoursEarlier.getDate() && sortedFromNewAllUserWods[i].difficulty !== '3' && sortedFromNewAllUserWods[i].difficulty !== '-1') {
                alredyLearnedWordsToday += 1;
              } //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
              //   break;
              // }

            }

            barAll = document.querySelector('.progress-bar-all span');
            barAll.style.width = "".concat(alredyLearnedWordsToday / settings.optional.cardsPerDay * 100, "%");

            for (_i = 0; _i < sortedFromNewAllUserWods.length; _i += 1) {
              firstRepeatTime = new Date(sortedFromNewAllUserWods[_i].optional.firstTime - 4 * 3600 * 1000);
              _fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);

              if (firstRepeatTime.getDate() === _fourHoursEarlier.getDate() && sortedFromNewAllUserWods[_i].difficulty !== '3' && sortedFromNewAllUserWods[_i].difficulty !== '-1') {
                alredyLearnedNewWordsToday += 1;
              } //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
              //   break;
              // }

            }

            bar = document.querySelector('.progress-bar span');
            bar.style.width = "".concat(alredyLearnedNewWordsToday / settings.wordsPerDay * 100, "%");

            if (alredyLearnedWordsToday / settings.optional.cardsPerDay >= 1) {
              Object(_add_notification__WEBPACK_IMPORTED_MODULE_4__["default"])();
            }

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _progress.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (progress);

/***/ }),

/***/ "./src/layout/scripts/say.js":
/*!***********************************!*\
  !*** ./src/layout/scripts/say.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-settings */ "./src/layout/scripts/get-settings.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "./src/index.js");


 // eslint-disable-next-line import/no-cycle


var voiceAudio = document.getElementById('audio');
var voiceExample = document.getElementById('audio-example');
var voiceMeaning = document.getElementById('audio-meaning');

function sayMeaning(word, arr, runApp) {
  if (word.audioMeaning.length > 100) {
    voiceMeaning.src = "data:audio/mpeg;base64,".concat(word.audioMeaning);
  } else {
    voiceMeaning.src = "https://raw.githubusercontent.com/svirskia/rslang-data/master/".concat(word.audioMeaning);
  }

  voiceMeaning.play();

  if (runApp) {
    voiceMeaning.onended = function () {
      return Object(_index__WEBPACK_IMPORTED_MODULE_3__["default"])(arr[arr.length - 1], arr);
    };
  }
}

function sayExample(_x, _x2, _x3, _x4, _x5) {
  return _sayExample.apply(this, arguments);
}

function _sayExample() {
  _sayExample = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(word, userId, token, arr, runApp) {
    var settings;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_get_settings__WEBPACK_IMPORTED_MODULE_2__["default"])(userId, token);

          case 2:
            settings = _context.sent;

            if (word.audioExample.length > 100) {
              voiceExample.src = "data:audio/mpeg;base64,".concat(word.audioExample);
            } else {
              voiceExample.src = "https://raw.githubusercontent.com/svirskia/rslang-data/master/".concat(word.audioExample);
            }

            voiceExample.play();

            if (settings.optional.showTextMeaning) {
              voiceExample.onended = function () {
                return sayMeaning(word, arr, runApp);
              };
            } else if (runApp) {
              voiceExample.onended = function () {
                return Object(_index__WEBPACK_IMPORTED_MODULE_3__["default"])(arr[arr.length - 1], arr);
              };
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sayExample.apply(this, arguments);
}

function sayWord(_x6, _x7, _x8, _x9) {
  return _sayWord.apply(this, arguments);
}

function _sayWord() {
  _sayWord = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(word, arr, userId, token) {
    var runApp,
        settings,
        _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            runApp = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : true;
            _context2.next = 3;
            return Object(_get_settings__WEBPACK_IMPORTED_MODULE_2__["default"])(userId, token);

          case 3:
            settings = _context2.sent;

            if (word.audio.length > 100) {
              voiceAudio.src = "data:audio/mpeg;base64,".concat(word.audio);
            } else {
              voiceAudio.src = "https://raw.githubusercontent.com/svirskia/rslang-data/master/".concat(word.audio);
            }

            voiceAudio.play();

            if (settings.optional.showTextExample) {
              voiceAudio.onended = function () {
                return sayExample(word, userId, token, arr, runApp);
              };
            } else if (settings.optional.showTextMeaning) {
              voiceAudio.onended = function () {
                return sayMeaning(word, arr, runApp);
              };
            } else if (runApp) {
              voiceAudio.onended = function () {
                return Object(_index__WEBPACK_IMPORTED_MODULE_3__["default"])(arr[arr.length - 1], arr);
              };
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sayWord.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (sayWord);

/***/ }),

/***/ "./src/layout/scripts/set-input-width.js":
/*!***********************************************!*\
  !*** ./src/layout/scripts/set-input-width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setInputWidth(word) {
  var input = document.querySelector('.word-hidden_input');
  input.style.width = "".concat(word.word.length / 1.5, "em");
}

/* harmony default export */ __webpack_exports__["default"] = (setInputWidth);

/***/ }),

/***/ "./src/layout/scripts/show-btns.js":
/*!*****************************************!*\
  !*** ./src/layout/scripts/show-btns.js ***!
  \*****************************************/
/*! exports provided: showDifficultyBtns, hideDifficultyBtns, showAnswerBtn, showDifficultWordBtn, showDeleteWordBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDifficultyBtns", function() { return showDifficultyBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDifficultyBtns", function() { return hideDifficultyBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAnswerBtn", function() { return showAnswerBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDifficultWordBtn", function() { return showDifficultWordBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteWordBtn", function() { return showDeleteWordBtn; });
function showDifficultyBtns() {
  var btnsWrapper = document.querySelector('.difficulty_btns');
  var difficulty3btn = document.createElement('button');
  difficulty3btn.setAttribute('id', 'difficulty_3_btn');
  difficulty3btn.textContent = 'Again';
  var difficulty2btn = document.createElement('button');
  difficulty2btn.setAttribute('id', 'difficulty_2_btn');
  difficulty2btn.textContent = 'Hard';
  var difficulty1btn = document.createElement('button');
  difficulty1btn.setAttribute('id', 'difficulty_1_btn');
  difficulty1btn.textContent = 'Normal';
  var difficulty0btn = document.createElement('button');
  difficulty0btn.setAttribute('id', 'difficulty_0_btn');
  difficulty0btn.textContent = 'Easy';
  btnsWrapper.append(difficulty3btn, difficulty2btn, difficulty1btn, difficulty0btn);
  return btnsWrapper;
}

function hideDifficultyBtns() {
  var btnsWrapper = document.querySelector('.difficulty_btns');
  btnsWrapper.textContent = '';
}

function showAnswerBtn() {
  var showAnswerWrapper = document.querySelector('.answer_btn');
  showAnswerWrapper.textContent = '';
  var showAnswerbtn = document.createElement('button');
  showAnswerbtn.setAttribute('id', 'answer_btn');
  showAnswerbtn.textContent = 'Show Answer';
  showAnswerWrapper.append(showAnswerbtn);
}

function showDifficultWordBtn() {
  var showDifficultWordWrapper = document.querySelector('.difficult_btn');
  showDifficultWordWrapper.textContent = '';
  var showDifficultWordbtn = document.createElement('button');
  showDifficultWordbtn.setAttribute('id', 'difficult_btn');
  showDifficultWordbtn.textContent = 'Mark as "difficult"';
  showDifficultWordWrapper.append(showDifficultWordbtn);
}

function showDeleteWordBtn() {
  var showDeleteWordWrapper = document.querySelector('.delete_btn');
  showDeleteWordWrapper.textContent = '';
  var showDeletebtn = document.createElement('button');
  showDeletebtn.setAttribute('id', 'delete_btn');
  showDeletebtn.textContent = 'Delete';
  showDeleteWordWrapper.append(showDeletebtn);
}



/***/ }),

/***/ "./src/layout/scripts/show-full-text.js":
/*!**********************************************!*\
  !*** ./src/layout/scripts/show-full-text.js ***!
  \**********************************************/
/*! exports provided: showFullTextExample, showFullTextMeaning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFullTextExample", function() { return showFullTextExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFullTextMeaning", function() { return showFullTextMeaning; });
function showFullTextExample(wordInfo) {
  var example = document.querySelector('.card_phrase');
  example.innerHTML = wordInfo.textExample;
}

function showFullTextMeaning(wordInfo) {
  var meaning = document.querySelector('.card_meaning');
  meaning.innerHTML = wordInfo.textMeaning;
}



/***/ }),

/***/ "./src/layout/scripts/update-user-word.js":
/*!************************************************!*\
  !*** ./src/layout/scripts/update-user-word.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var updateUserWord = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var userId, token, wordId, word, rawResponse, updatedWord;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref2.userId, token = _ref2.token, wordId = _ref2.wordId, word = _ref2.word;
            _context.next = 3;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/words/").concat(wordId), {
              method: 'PUT',
              headers: {
                Authorization: "Bearer ".concat(token),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(word)
            });

          case 3:
            rawResponse = _context.sent;
            _context.next = 6;
            return rawResponse.json();

          case 6:
            updatedWord = _context.sent;
            return _context.abrupt("return", updatedWord);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateUserWord(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateUserWord);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvaGVhZGVyLWZvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvcHJlbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9wcm9ncmVzcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL2hlYWRlci1mb290ZXIuY3NzPzQ4MTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvcHJlbG9hZGVyLmNzcz9kMTI2Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3Byb2dyZXNzLmNzcz84OTFlIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3N0eWxlLmNzcz8wOGVhIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9hZGQtZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9hZGQtbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jbGVhci1mb3ItbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY3JlYXRlLW9yLXVwZGF0ZS13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtdXNlci13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtd29yZHMtYXJyYXktZm9yLXRvZGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9nZXQtcmFuZG9tLXdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZC1ieS1pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC13b3JkLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9tdWx0aS1jb2xvci1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3NldC1pbnB1dC13aWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvc2hvdy1idG5zLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zaG93LWZ1bGwtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvdXBkYXRlLXVzZXItd29yZC5qcyJdLCJuYW1lcyI6WyJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzZWVTZXR0aW5ncyIsImdldFNldHRpbmdzIiwic2V0dGluZ3MiLCJjcmVhdGVBcnJheSIsInNldFNldHRpbmdzIiwiY3JlYXRlV29yZHNBcnJheUZvclRvZGF5Iiwid29yZHNQZXJEYXkiLCJvcHRpb25hbCIsImNhcmRzUGVyRGF5Iiwid29yZHNBcnJheUZvclRvZGF5IiwiY29uc29sZSIsImxvZyIsInNodWZsZWRXb3Jkc0FycmF5Rm9yVG9kYXkiLCJzb3J0IiwiYSIsImIiLCJncm91cCIsInNob3dDYXJkIiwic3RhcnRBcHAiLCJhcnJheU9mV29yZHMiLCJsZW5ndGgiLCJwcm9ncmVzcyIsIndvcmQiLCJhcHAiLCJjbGVhckNhcmQiLCJjb3JyZWN0QW5zd2VyIiwid29yZEluZm8iLCJpc1NvdW5kT24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImlzVHJhbnNsYXRlT24iLCJhcnIiLCJzbGljZSIsInNob3dXb3Jkc1N0YXR1c0J1dHRvbnMiLCJzYXlXb3JkIiwic2hvd0RpZmZpY3VsdHlCdG5zIiwiZGlmZjNidG4iLCJvbmNsaWNrIiwiY3JlYXRlT3JVcGRhdGVXb3JkIiwiaWQiLCJoaWRlRGlmZmljdWx0eUJ0bnMiLCJkaWZmMmJ0biIsImRpZmYxYnRuIiwiZGlmZjBidG4iLCJzaG93VGV4dEV4YW1wbGUiLCJzaG93RnVsbFRleHRFeGFtcGxlIiwic2hvd1RleHRNZWFuaW5nIiwic2hvd0Z1bGxUZXh0TWVhbmluZyIsImFkZFdvcmRUcmFuc2xhdGVJbkNhcmQiLCJhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCIsImFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkIiwiY2hlY2tJbnB1dCIsIm11bHRpQ29sb3JSZXN1bHRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImkiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY29sb3IiLCJhcHBlbmQiLCJjYXJkTWVhbmluZ1RyYW5zbGF0ZSIsImNhcmRUcmFuc2xhdGUiLCJhZGRDYXJkRmllbGRzIiwic2V0SW5wdXRXaWR0aCIsImFkZE11bHRpQ29sb3JSZXN1bHQiLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbG9yV3JhcHBlciIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dBbnN3ZXJCdXR0b24iLCJzaG93QW5zd2VyQnRuIiwiYW5zd2VyQnRuIiwic2hvd0RlbGV0ZUJ1dHRvbiIsInNob3dEZWxldGVXb3JkQnRuIiwiZGVsZXRlV29yZGJ0biIsInNob3dEaWZmaWN1bHRXb3Jkc0J1dHRvbiIsInNob3dEaWZmaWN1bHRXb3JkQnRuIiwiZGlmZmljdWx0V29yZGJ0biIsImFkZEltZyIsImltYWdlV3JhcHBlciIsImltZyIsImltYWdlIiwic3JjIiwiYWRkVGV4dEV4YW1wbGVJbkNhcmQiLCJjYXJkUGhyYXNlIiwiaW5uZXJIVE1MIiwidGV4dEV4YW1wbGUiLCJjYXJkUGhyYXNlQiIsImFkZFdvcmRNZWFuaW5nSW5DYXJkIiwiY2FyZE1lYW5pbmciLCJ0ZXh0TWVhbmluZyIsImNhcmRNZWFuaW5nSSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJ3b3JkVHJhbnNsYXRlIiwiYWRkV29yZFRyYW5zY3JpcHRpb25JbkNhcmQiLCJ3b3JkVHJhbnNjcmlwdGlvbiIsInRyYW5zY3JpcHRpb24iLCJ0ZXh0RXhhbXBsZVRyYW5zbGF0ZSIsInRleHRNZWFuaW5nVHJhbnNsYXRlIiwic2hvd0ltYWdlIiwic2hvd1RyYW5zbGF0aW9uIiwic2hvd1RyYW5zY3JpcHRpb24iLCJhZGROb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25XcmFwcGVyIiwicGFyYTEiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXJhMiIsInBhcmEzIiwiY2FyZFdyYXBwZXIiLCJjYXJkIiwiYmFycyIsInJlbW92ZSIsInByZWxvYWRlciIsIndvcmRJZCIsImRpZmYiLCJub3ciLCJEYXRlIiwiZ2V0VXNlcldvcmRCeUlkIiwidXNlcldvcmQiLCJ3b3JkRmlyc3RUaW1lIiwiZmlyc3RUaW1lIiwiY3VycmVudFdvcmREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInVwZGF0ZVVzZXJXb3JkIiwiU3RyaW5nIiwibGFzdFRpbWUiLCJnZXRUaW1lIiwiY3JlYXRlVXNlcldvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXdSZXNwb25zZSIsImpzb24iLCJuZXdXb3JkIiwibmV3V29yZHMiLCJtYXhDYXJkcyIsImdldFVzZXJXb3JkcyIsImFsbFVzZXJXb2RzIiwic29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzIiwiYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkiLCJhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSIsImxhc3RSZXBlYXRUaW1lIiwiZm91ckhvdXJzRWFybGllciIsImdldERhdGUiLCJmaXJzdFJlcGVhdFRpbWUiLCJhcnJheU9mV29yZHNGb3JUb2RheSIsInJhbmRvbVdvcmQiLCJnZXRSYW5kb21Xb3JkIiwicHVzaCIsImRpZmZpY3VsdDNVc2VyV29yZHMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlmZmljdWx0VXNlcldvcmQiLCJnZXRXb3JkQnlJZCIsImRpZmZpY3VsdDJVc2VyV29yZHMiLCJub3RFYXN5VXNlcldvcmQiLCJkaWZmaWN1bHQxVXNlcldvcmRzIiwiZWFzeVVzZXJXb3JkIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdCIsIndvcmRzIiwicmFuZG9tR3JvdXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QYWdlIiwiY29udGVudCIsImFsbFdvcmRzIiwiaW5wdXRDb250YWluZXIiLCJwb3NpdGlvbiIsImJhckFsbCIsIndpZHRoIiwiYmFyIiwidm9pY2VBdWRpbyIsInZvaWNlRXhhbXBsZSIsInZvaWNlTWVhbmluZyIsInNheU1lYW5pbmciLCJydW5BcHAiLCJhdWRpb01lYW5pbmciLCJwbGF5Iiwib25lbmRlZCIsInNheUV4YW1wbGUiLCJhdWRpb0V4YW1wbGUiLCJhdWRpbyIsImJ0bnNXcmFwcGVyIiwiZGlmZmljdWx0eTNidG4iLCJzZXRBdHRyaWJ1dGUiLCJkaWZmaWN1bHR5MmJ0biIsImRpZmZpY3VsdHkxYnRuIiwiZGlmZmljdWx0eTBidG4iLCJzaG93QW5zd2VyV3JhcHBlciIsInNob3dBbnN3ZXJidG4iLCJzaG93RGlmZmljdWx0V29yZFdyYXBwZXIiLCJzaG93RGlmZmljdWx0V29yZGJ0biIsInNob3dEZWxldGVXb3JkV3JhcHBlciIsInNob3dEZWxldGVidG4iLCJleGFtcGxlIiwibWVhbmluZyIsInVwZGF0ZWRXb3JkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SSxzQkFBTSxFQUFFLGtCQUZEO0FBR1AsZ0NBQWdCO0FBSFQsZUFGb0c7QUFPN0dDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekgsSUFBZjtBQVB1RyxhQUFoRixDQUhWOztBQUFBO0FBR2YwSCx1QkFIZTtBQUFBO0FBQUEsbUJBWUtBLFdBQVcsQ0FBQ0MsSUFBWixFQVpMOztBQUFBO0FBWWZtRSx1QkFaZTtBQUFBLDZDQWNkQSxXQWRjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRqRixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCOztBQWlCZUEsNkVBQWYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDY0cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZiZmNmZTtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHQgYm94LXNoYWRvdzogMCA1cHggNXB4IC01cHggIzMzMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMyMzIzMjM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbntcXHJcXG4gIGJhY2tncm91bmQ6ICNmYmZjZmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGluZXtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ICB0b3A6IDUwJTtcXHJcXG5cXHQgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHQgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3BidG4ge1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHQgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0ICBib3JkZXI6IG5vbmU7XFxyXFxuXFx0ICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xcclxcblxcdCAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxuXFx0ICBmb250LXNpemU6IDFyZW07XFxyXFxuXFx0ICBmb250LXdlaWdodDogNjAwO1xcclxcblxcdCAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdFxcdGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuXFx0XFx0Ym9yZGVyOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbmVye1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQvKiBib3R0b206IC0zM3B4OyAqL1xcclxcblxcdFxcdGZsb2F0OiByaWdodDtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGRvd24ge1xcclxcblxcdCAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcblxcdCAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgIG1pbi13aWR0aDogMTByZW07XFxyXFxuXFx0ICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG5cXHQgIHotaW5kZXg6IDE7XFxyXFxuXFx0ICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG5cXHQgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuXFx0XFx0XFx0dG8gYm90dG9tLFxcclxcblxcdFxcdFxcdCNBRkVFRUUsXFxyXFxuXFx0XFx0XFx0I0IwRTBFNlxcclxcblxcdFxcdCAgKTtcXHJcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93bi1jb250ZW50IGF7XFxyXFxuXFx0ICBjb2xvcjogYmxhY2s7XFxyXFxuXFx0ICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHQgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG5cXHQgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHQgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmRyb3BidG4gYSB7XFxyXFxuXFx0ICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXJ7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMjQ2LCAyOCwgMzIsIDEpO31cXHJcXG5cXHJcXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxcclxcblxcclxcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGRvd24gaW1nIHtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHRoZWlnaHQ6IDNyZW07XFxyXFxuXFx0bWFyZ2luOiAwcHggMjBweCAwcHggNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgzLmRyb3Bkb3due1xcclxcblxcdCAgZm9udC1zaXplOiAycmVtO1xcclxcblxcdCAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24taW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0NiwgMjgsIDMyLCAxKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ2LCAyOCwgMzIsIDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogODBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS43NTtcXHJcXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxib3gtc2hhZG93IDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLGJvcmRlciAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24taW5wdXQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI4LCAzMiwgLjMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO31cXHJcXG5cXHJcXG4gIC5idXR0b24taW5wdXQgYSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNDYsIDI4LCAzMiwgMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYXV0b3JpemF0aW9ue1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGNvbG9yOiByZ2IoMTQ0LCAyMzgsIDE0NCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQ0LCAyMzgsIDE0NCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcclxcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLGJveC1zaGFkb3cgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsYm9yZGVyIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dCwgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb24ge1xcclxcblxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0bWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24taW5wdXQtYXV0b3JpemF0aW9uOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMzgsIDE0NCwgLjMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLypidXR0b246YmVmb3JlIChhdHRyIGRhdGEtaG92ZXIpKi9cXHJcXG4gIC5idXR0b24taW5wdXQtYXV0b3JpemF0aW9uOmhvdmVyOmJlZm9yZSB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIC5idXR0b24taW5wdXQtYXV0b3JpemF0aW9uOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogYXR0cihkYXRhLWhvdmVyKTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIC8qYnV0dG9uIGRpdiAoYnV0dG9uIHRleHQgYmVmb3JlIGhvdmVyKSovXFxyXFxuICAuYnV0dG9uLWlucHV0LWF1dG9yaXphdGlvbjpob3ZlciBhIHtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb24gYSB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0Y29sb3I6IHJnYigxNDQsIDIzOCwgMTQ0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qLS0tLS0tLS0tLS0t0LHQvtC60L7QstC+0LUg0LzQtdC90Y4tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuICAvKiBuYXYgdG9nZ2xlICovXFxyXFxuXFxyXFxuICAubmF2LXRvZ2dsZSB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGhlaWdodDogMnJlbTtcXHJcXG5cXHRsZWZ0OiAycmVtO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDFyZW07XFxyXFxuXFx0d2lkdGg6IDIuMnJlbTtcXHJcXG5cXHR6LWluZGV4OiA5OTk5MjtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLm5hdi10b2dnbGU6aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhcixcXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhcjo6YWZ0ZXIsXFxyXFxuICAubmF2LXRvZ2dsZSAubmF2LXRvZ2dsZS1iYXI6OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGhlaWdodDogM3B4O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAuNXM7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZSAubmF2LXRvZ2dsZS1iYXIge1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZSAubmF2LXRvZ2dsZS1iYXI6OmFmdGVyIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZSAubmF2LXRvZ2dsZS1iYXI6OmJlZm9yZSB7XFxyXFxuXFx0bWFyZ2luLXRvcDogLThweDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlLmV4cGFuZGVkIC5uYXYtdG9nZ2xlLWJhciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZS5leHBhbmRlZCAubmF2LXRvZ2dsZS1iYXI6OmFmdGVyLCAubmF2LXRvZ2dsZS5leHBhbmRlZCAubmF2LXRvZ2dsZS1iYXI6OmJlZm9yZSB7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlLmV4cGFuZGVkIC5uYXYtdG9nZ2xlLWJhcjo6YWZ0ZXIge1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgfVxcclxcbiAgLm5hdi10b2dnbGUuZXhwYW5kZWQgLm5hdi10b2dnbGUtYmFyOjpiZWZvcmUge1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuXFx0d2lkdGg6IDI2MHB4O1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuXFx0XFx0ICB0byBib3R0b20sXFxyXFxuXFx0XFx0ICAjQUZFRUVFLFxcclxcblxcdFxcdCAgI0IwRTBFNlxcclxcblxcdFxcdCk7XFxyXFxuXFx0dG9wOjBweDtcXHJcXG5cXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRsZWZ0OiAtNDMwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCA1MDBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggKyAyMHB4KTtcXHJcXG5cXHR6LWluZGV4OiA5OTg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEzMHB4O1xcclxcbiAgfVxcclxcbiAgLm5hdi5leHBhbmRlZCB7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS3QstGL0L/QsNC00LDRjtGJ0LjQuSDRgdC/0LjRgdC+0LotLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gIHVse1xcclxcblxcdCAgbWFyZ2luOiAwO1xcclxcblxcdCAgcGFkZGluZzogMDtcXHJcXG5cXHQgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubWVudSBhe1xcclxcblxcdCAgY29sb3I6IGJsYWNrO1xcclxcblxcdCAgcGFkZGluZzogMTBweDtcXHJcXG5cXHQgIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdCAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XFxyXFxuXFx0ICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXHJcXG4gIH1cXHJcXG4gIC5tZW51IGE6aG92ZXJ7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kOiAjNjY2O1xcclxcblxcdCAgcGFkZGluZzogMTBweCAwIDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG4gIC5tZW51IGxpOmZpcnN0LWNoaWxkIGEsIC5tZW51IGxpIC52X21lbnUgbGk6Zmlyc3QtY2hpbGQgYXtcXHJcXG5cXHQgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcclxcbiAgfVxcclxcbiAgLm1lbnUgbGk6bGFzdC1jaGlsZCBhLCAubWVudSBsaSAudl9tZW51IGxpOmxhc3QtY2hpbGQgYXtcXHJcXG5cXHQgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcclxcblxcdCAgYm9yZGVyLWJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG4gIC5tZW51IGxpIC52X21lbnUgbGkgYXtcXHJcXG5cXHQgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICB9XFxyXFxuICAucF9tZW51e3Bvc2l0aW9uOiByZWxhdGl2ZTt9XFxyXFxuICAudl9tZW51e1xcclxcblxcdCAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgd2lkdGg6IDEwMCU7XFxyXFxuXFx0ICBsZWZ0OiAxMDAlO1xcclxcblxcdCAgdG9wOiAtOTk5OXB4O1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHQgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdCAgdHJhbnNpdGlvbjogMC41cyBvcGFjaXR5O1xcclxcblxcdCAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcblxcdFxcdFxcdHRvIGJvdHRvbSxcXHJcXG5cXHRcXHRcXHQjQUZFRUVFLFxcclxcblxcdFxcdFxcdCNCMEUwRTZcXHJcXG5cXHRcXHQgICk7XFxyXFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxuICAucF9tZW51OmhvdmVyIC52X21lbnV7XFxyXFxuXFx0ICBvcGFjaXR5OiAxO1xcclxcblxcdCAgdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgLnBfbWVudTo6YWZ0ZXJ7XFxyXFxuXFx0ICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgIGJvcmRlcjo1cHggc29saWQ7XFxyXFxuXFx0ICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrO1xcclxcblxcdCAgdG9wOiAxZW07XFxyXFxuXFx0ICByaWdodDogLjdlbTtcXHJcXG5cXHQgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB9XFxyXFxuICAucF9tZW51OmhvdmVyOjphZnRlcntcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAge1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAqIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG5cXHQgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdCBib3R0b206IDA7XFxyXFxuXFx0IHdpZHRoOiAxMDAlO1xcclxcblxcdCBiYWNrZ3JvdW5kOiAjZTlmNWY3O1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxuXFx0IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHQgaGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQgcCB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dG9wOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDFweCkge1xcclxcbiAgLm5hdntkaXNwbGF5OiBub25lO31cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzM5cHgpIHtcXHJcXG4gIC5uYXYtdG9nZ2xlIHtkaXNwbGF5OiBibG9jazt9XFxyXFxuXFxyXFxuICAuY29udGVuZXJ7ZGlzcGxheTogbm9uZTt9XFxyXFxuXFxyXFxuICAubGluZSB7XFxyXFxuXFx0ICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ICB0b3A6IDUwJTtcXHJcXG5cXHQgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHQgIHdpZHRoOiAxMDAlO1xcclxcblxcdCAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxyXFxuXFxyXFxuXFx0Lm5hdiB7d2lkdGg6IDIwMHB4O31cXHJcXG5cXHJcXG5cXHQuZHJvcGRvd24gaW1nIHtcXHJcXG5cXHQgIHdpZHRoOiAycmVtO1xcclxcblxcdCAgaGVpZ2h0OiAycmVtO1xcclxcblxcdCAgbWFyZ2luOiAxLjZyZW0gMC42cmVtIC0xMHB4IDNyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGgzLmRyb3Bkb3due1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0fVxcclxcbiAgfVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmVsb2FkZXItY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiA4MHZoO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0YW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB9XFxyXFxuICAucHJlbG9hZGVyLWhpZGUge1xcclxcblxcdCAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLTEge1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjU4M2ExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkOTY4O1xcclxcblxcdG1hcmdpbjogN3B4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc2NhbGUge1xcclxcblxcdDAlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSxcXHJcXG5cXHQgIDc1JSB7XFxyXFxuXFx0ICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxyXFxuXFx0fVxcclxcblxcdDc4JSxcXHJcXG5cXHQgIDEwMCUge1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuICAuaXRlbS0xOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkOTY4O1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG5cXHRhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLTIge1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjU4M2ExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjZTY4O1xcclxcblxcdG1hcmdpbjogN3B4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc2NhbGUge1xcclxcblxcdDAlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSxcXHJcXG5cXHQgIDc1JSB7XFxyXFxuXFx0ICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxyXFxuXFx0fVxcclxcblxcdDc4JSxcXHJcXG5cXHQgIDEwMCUge1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuICAuaXRlbS0yOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjZTY4O1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG5cXHRhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLTMge1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjU4M2ExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjMzY4O1xcclxcblxcdG1hcmdpbjogN3B4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc2NhbGUge1xcclxcblxcdDAlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSxcXHJcXG5cXHQgIDc1JSB7XFxyXFxuXFx0ICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxyXFxuXFx0fVxcclxcblxcdDc4JSxcXHJcXG5cXHQgIDEwMCUge1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuICAuaXRlbS0zOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjMzY4O1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG5cXHRhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDYwMG1zO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLTQge1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjU4M2ExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVhZDY4O1xcclxcblxcdG1hcmdpbjogN3B4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc2NhbGUge1xcclxcblxcdDAlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSxcXHJcXG5cXHQgIDc1JSB7XFxyXFxuXFx0ICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxyXFxuXFx0fVxcclxcblxcdDc4JSxcXHJcXG5cXHQgIDEwMCUge1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuICAuaXRlbS00OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVhZDY4O1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG5cXHRhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDgwMG1zO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtLTUge1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjU4M2ExO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWU4YzY4O1xcclxcblxcdG1hcmdpbjogN3B4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBrZXlmcmFtZXMgc2NhbGUge1xcclxcblxcdDAlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSxcXHJcXG5cXHQgIDc1JSB7XFxyXFxuXFx0ICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxyXFxuXFx0fVxcclxcblxcdDc4JSxcXHJcXG5cXHQgIDEwMCUge1xcclxcblxcdCAgb3BhY2l0eTogMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuICAuaXRlbS01OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWU4YzY4O1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG5cXHRhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcXHJcXG5cXHR0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3Jlc3MtYmFyLFxcclxcbi5wcm9ncmVzcy1iYXItYWxsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcblxcdHdpZHRoOiAzNTBweDtcXHJcXG5cXHRtYXJnaW46IDVweCAwO1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwIGluc2V0LCAwIDFweCAwICM0NDQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA1cHggIzAwMCBpbnNldCwgMCAxcHggMCAjNDQ0O1xcclxcblxcdGJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwIGluc2V0LCAwIDFweCAwICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcy1iYXIgc3BhbixcXHJcXG4ucHJvZ3Jlc3MtYmFyLWFsbCBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyMDBweDtcXHJcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5cXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpIGluc2V0O1xcclxcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSBpbnNldDtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpIGluc2V0O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdC1tb3otdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdC1tcy10cmFuc2l0aW9uOiB3aWR0aCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdHRyYW5zaXRpb246IHdpZHRoIC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJsdWUgc3BhbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzM0YzJlMztcXHJcXG59XFxyXFxuXFxyXFxuLm9yYW5nZSBzcGFuIHtcXHJcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6ICNmZWNmMjM7XFxyXFxufSAgICAgICBcXHJcXG5cXHJcXG4uZ3JlZW4gc3BhbiB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkZjQxO1xcclxcbn1cXHJcXG4uc2hpbmUgc3BhbiB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpbmUgc3Bhbjo6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDNweDsgICAgICAgICAgICAgICAgICAgICBcXHJcXG5cXHJcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zaGluZSAycyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG5cXHQtbW96LWFuaW1hdGlvbjogYW5pbWF0ZS1zaGluZSAycyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb3cgc3BhbiB7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQsIDAgLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQsIDAgLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQ7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIGluc2V0LCAwIC01cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIGluc2V0O1xcclxcblxcclxcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLWdsb3cgMXMgZWFzZS1vdXQgaW5maW5pdGU7XFxyXFxuXFx0LW1vei1hbmltYXRpb246IGFuaW1hdGUtZ2xvdyAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZTlmNWY3O1xcclxcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcclxcblxcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcblxcdHBhZGRpbmctdG9wOiA3MHB4O1xcclxcblxcdHdpZHRoOiA3MCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjV2dztcXHJcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxyXFxufVxcclxcbi8qIC5tZW51IHtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufSAqL1xcclxcbi5saW5rIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLnNldHRpbmdzLFxcclxcbi5jaGVjay1ib3hlcyB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR3aWR0aDogNDUlO1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmVkZGVmNTI7XFxyXFxufVxcclxcbi5jYXJkLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkX2ltZ3tcXHJcXG5cXHRtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXJkX21haW4taW5wdXR7XFxyXFxuXFx0d2lkdGg6IDk1JTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhcmRfcGhyYXNlLFxcclxcbi5jYXJkX3BocmFzZS10cmFuc2xhdGUsXFxyXFxuLmNhcmRfbWVhbmluZyxcXHJcXG4uY2FyZF9tZWFuaW5nLXRyYW5zbGF0ZSxcXHJcXG4uY2FyZF93b3JkLXRyYW5zY3JpcHRpb24sXFxyXFxuLmRpZmZpY3VsdHlfYnRucyxcXHJcXG4uY2FyZF93b3JkLXRyYW5zbGF0ZSB7XFxyXFxuXFx0d2lkdGg6IDk1JTtcXHJcXG5cXHRtYXJnaW46IDNweCBhdXRvO1xcclxcbn1cXHJcXG4ud29yZC1oaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5idXR0b24sXFxyXFxuLndvcmQtaGlkZGVuX2J0biB7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjRlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0MjlmYWZjOTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuYnV0dG9ue1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggNXB4O1xcclxcbn1cXHJcXG4ud29yZC1oaWRkZW5fYnRuIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLndvcmQtaGlkZGVuX2lucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGhlaWdodDogMS4xZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuLmNhcmRfd29yZC10cmFuc2xhdGUge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4ubXVsdGktY29sb3Ige1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IDBweDtcXHJcXG5cXHRsZWZ0OiAycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG4uZGlmZmljdWx0eV9idG5zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJhcnMge1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5iYXJzLWhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5ub3RpZmljYXRpb24ge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG4ucGFyYTEge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcbi5wYXJhMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG59XFxyXFxuLnBhcmEzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMnB4KSB7XFxyXFxuXFx0LmNvbnRhaW5lcntcXHJcXG5cXHRcXHR3aWR0aDogODAlO1xcclxcblxcdFxcdC8qIGZvbnQtc2l6ZTogMy41dnc7ICovXFxyXFxuXFx0fVxcclxcblxcdC5jYXJkX3dvcmQtaGlkZGVuIHtcXHJcXG5cXHRcXHR3aWR0aDogODUlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0fVxcclxcblxcdC53b3JkLWhpZGRlbiB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdH1cXHJcXG5cXHRidXR0b257XFxyXFxuXFx0XFx0bWFyZ2luOiAxNXB4IDVweCA1cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHQuY29udGFpbmVye1xcclxcblxcdFxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0XFx0LyogZm9udC1zaXplOiA0dnc7ICovXFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmltcG9ydCAnLi9sYXlvdXQvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9sYXlvdXQvY3NzL2hlYWRlci1mb290ZXIuY3NzJztcclxuaW1wb3J0ICcuL2xheW91dC9jc3MvcHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0ICcuL2xheW91dC9jc3MvcHJlbG9hZGVyLmNzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFkZENhcmRGaWVsZHMsIGFkZFRleHRFeGFtcGxlVHJhbnNsYXRlSW5DYXJkLFxyXG4gIGFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkLCBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkLFxyXG59IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvYWRkLWZpZWxkcyc7XHJcbmltcG9ydCB7IHNob3dGdWxsVGV4dEV4YW1wbGUsIHNob3dGdWxsVGV4dE1lYW5pbmcgfSBmcm9tICcuL2xheW91dC9zY3JpcHRzL3Nob3ctZnVsbC10ZXh0JztcclxuaW1wb3J0IHtcclxuICBzaG93RGlmZmljdWx0eUJ0bnMsIGhpZGVEaWZmaWN1bHR5QnRucywgc2hvd0Fuc3dlckJ0biwgc2hvd0RpZmZpY3VsdFdvcmRCdG4sIHNob3dEZWxldGVXb3JkQnRuLFxyXG59IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvc2hvdy1idG5zJztcclxuaW1wb3J0IHsgY2xlYXJDYXJkLCBzaG93Q2FyZCB9IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvY2xlYXItZm9yLWxvYWRpbmcnO1xyXG5cclxuaW1wb3J0IHNldElucHV0V2lkdGggZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9zZXQtaW5wdXQtd2lkdGgnO1xyXG5pbXBvcnQgYWRkTXVsdGlDb2xvclJlc3VsdCBmcm9tICcuL2xheW91dC9zY3JpcHRzL211bHRpLWNvbG9yLXJlc3VsdCc7XHJcblxyXG5pbXBvcnQgY3JlYXRlV29yZHNBcnJheUZvclRvZGF5IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvY3JlYXRlLXdvcmRzLWFycmF5LWZvci10b2RheSc7XHJcblxyXG5pbXBvcnQgZ2V0U2V0dGluZ3MgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9nZXQtc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IGNyZWF0ZU9yVXBkYXRlV29yZCBmcm9tICcuL2xheW91dC9zY3JpcHRzL2NyZWF0ZS1vci11cGRhdGUtd29yZCc7XHJcblxyXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9wcm9ncmVzcyc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCBzYXlXb3JkIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvc2F5JztcclxuXHJcbmNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlZVNldHRpbmdzKCkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XHJcbiAgcmV0dXJuIHNldHRpbmdzO1xyXG59XHJcbmNvbnN0IHNldHRpbmdzID0gc2VlU2V0dGluZ3MoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KCkge1xyXG4gIGNvbnN0IHNldFNldHRpbmdzID0gYXdhaXQgc2V0dGluZ3M7XHJcbiAgY29uc3Qgd29yZHNBcnJheUZvclRvZGF5ID0gYXdhaXQgY3JlYXRlV29yZHNBcnJheUZvclRvZGF5KFxyXG4gICAgc2V0U2V0dGluZ3Mud29yZHNQZXJEYXksIHNldFNldHRpbmdzLm9wdGlvbmFsLmNhcmRzUGVyRGF5LCB0b2tlbiwgdXNlcklkLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2cod29yZHNBcnJheUZvclRvZGF5KTtcclxuICBjb25zdCBzaHVmbGVkV29yZHNBcnJheUZvclRvZGF5ID0gd29yZHNBcnJheUZvclRvZGF5LnNvcnQoKGEsIGIpID0+IChhLmdyb3VwID4gYi5ncm91cCA/IDEgOiAtMSkpO1xyXG4gIHNob3dDYXJkKCk7XHJcbiAgcmV0dXJuIHNodWZsZWRXb3Jkc0FycmF5Rm9yVG9kYXk7XHJcbn1cclxuY29uc3Qgd29yZHNBcnJheUZvclRvZGF5ID0gY3JlYXRlQXJyYXkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xyXG4gIGNvbnN0IGFycmF5T2ZXb3JkcyA9IGF3YWl0IHdvcmRzQXJyYXlGb3JUb2RheTtcclxuXHJcbiAgaWYgKGFycmF5T2ZXb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgIHByb2dyZXNzKHRva2VuLCB1c2VySWQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB3b3JkID0gYXJyYXlPZldvcmRzW2FycmF5T2ZXb3Jkcy5sZW5ndGggLSAxXTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5T2ZXb3Jkcyk7XHJcbiAgICBhcHAod29yZCwgYXJyYXlPZldvcmRzKTtcclxuICB9XHJcbn1cclxuY2xlYXJDYXJkKCk7XHJcbnN0YXJ0QXBwKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb3JyZWN0QW5zd2VyKHdvcmRJbmZvLCBhcnJheU9mV29yZHMpIHtcclxuICBjb25zdCBzZXRTZXR0aW5ncyA9IGF3YWl0IHNldHRpbmdzO1xyXG4gIGNvbnN0IGlzU291bmRPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VuZCcpLmNoZWNrZWQ7XHJcbiAgY29uc3QgaXNUcmFuc2xhdGVPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGUnKS5jaGVja2VkO1xyXG4gIGNvbnN0IGFyciA9IGFycmF5T2ZXb3Jkcy5zbGljZSgwLCBhcnJheU9mV29yZHMubGVuZ3RoIC0gMSk7XHJcblxyXG4gIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93V29yZHNTdGF0dXNCdXR0b25zICYmIGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAoaXNTb3VuZE9uKSB7XHJcbiAgICAgIHNheVdvcmQod29yZEluZm8sIGFyciwgdXNlcklkLCB0b2tlbiwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEaWZmaWN1bHR5QnRucygpO1xyXG4gICAgY29uc3QgZGlmZjNidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eV8zX2J0bicpO1xyXG4gICAgZGlmZjNidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCB0b2tlbiwgdXNlcklkLCAnMycpO1xyXG4gICAgICBoaWRlRGlmZmljdWx0eUJ0bnMoKTtcclxuICAgICAgYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpZmYyYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHlfMl9idG4nKTtcclxuICAgIGRpZmYyYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgdG9rZW4sIHVzZXJJZCwgJzInKTtcclxuICAgICAgaGlkZURpZmZpY3VsdHlCdG5zKCk7XHJcbiAgICAgIGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaWZmMWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHR5XzFfYnRuJyk7XHJcbiAgICBkaWZmMWJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQsICcxJyk7XHJcbiAgICAgIGhpZGVEaWZmaWN1bHR5QnRucygpO1xyXG4gICAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlmZjBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eV8wX2J0bicpO1xyXG4gICAgZGlmZjBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCB0b2tlbiwgdXNlcklkLCAnMCcpO1xyXG4gICAgICBoaWRlRGlmZmljdWx0eUJ0bnMoKTtcclxuICAgICAgYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAoaXNTb3VuZE9uKSB7XHJcbiAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQpO1xyXG4gICAgc2F5V29yZCh3b3JkSW5mbywgYXJyLCB1c2VySWQsIHRva2VuLCB0cnVlKTtcclxuICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQpO1xyXG4gICAgYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XHJcbiAgfSBlbHNlIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICBzdGFydEFwcCgpO1xyXG4gIH1cclxuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dEV4YW1wbGUpIHsgc2hvd0Z1bGxUZXh0RXhhbXBsZSh3b3JkSW5mbyk7IH1cclxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHsgc2hvd0Z1bGxUZXh0TWVhbmluZyh3b3JkSW5mbyk7IH1cclxuXHJcbiAgICBpZiAoaXNUcmFuc2xhdGVPbikge1xyXG4gICAgICBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKTtcclxuICAgIH1cclxuICAgIGlmIChpc1RyYW5zbGF0ZU9uICYmIHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0RXhhbXBsZSkge1xyXG4gICAgICBhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNUcmFuc2xhdGVPbiAmJiBzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHtcclxuICAgICAgYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQod29yZEluZm8pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tJbnB1dCh3b3JkSW5mbywgYXJyYXlPZldvcmRzKSB7XHJcbiAgY29uc3QgeyB3b3JkIH0gPSB3b3JkSW5mbztcclxuXHJcbiAgY29uc3QgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sb3InKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhpZGRlbl9pbnB1dCcpO1xyXG4gIG11bHRpQ29sb3JSZXN1bHRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGlmICh3b3JkID09PSBpbnB1dC52YWx1ZSkgeyAvLyBHT09EIEFOU1dFUlxyXG4gICAgY29ycmVjdEFuc3dlcih3b3JkSW5mbywgYXJyYXlPZldvcmRzLCB0b2tlbik7XHJcbiAgfSBlbHNlIHsgLy8gQkFEIEFOU1dFUlxyXG4gICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCB0b2tlbiwgdXNlcklkLCAnMycpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQudmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlW2ldO1xyXG5cclxuICAgICAgaWYgKGlucHV0LnZhbHVlW2ldID09PSB3b3JkW2ldKSB7XHJcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICdncmVlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICB9XHJcbiAgICAgIG11bHRpQ29sb3JSZXN1bHRXcmFwcGVyLmFwcGVuZChzcGFuKTtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQudmFsdWUgPSAnJztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYXBwKHdvcmQsIGFycmF5T2ZXb3Jkcykge1xyXG4gIGlmIChhcnJheU9mV29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBzdGFydEFwcCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBjYXJkTWVhbmluZ1RyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX21lYW5pbmctdHJhbnNsYXRlJyk7XHJcbiAgICBjb25zdCBjYXJkVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfcGhyYXNlLXRyYW5zbGF0ZScpO1xyXG4gICAgY2FyZE1lYW5pbmdUcmFuc2xhdGUudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNhcmRUcmFuc2xhdGUudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBhZGRDYXJkRmllbGRzKHdvcmQsIHVzZXJJZCwgdG9rZW4pO1xyXG4gICAgc2V0SW5wdXRXaWR0aCh3b3JkKTtcclxuICAgIGFkZE11bHRpQ29sb3JSZXN1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhpZGRlbicpO1xyXG5cclxuXHJcbiAgICBpbnB1dC5vbnN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2hlY2tJbnB1dCh3b3JkLCBhcnJheU9mV29yZHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb2xvcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sb3InKTtcclxuICAgIGNvbG9yV3JhcHBlci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjb2xvcldyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbG9yV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0U2V0dGluZ3MgPSBhd2FpdCBzZXR0aW5ncztcclxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93QW5zd2VyQnV0dG9uKSB7XHJcbiAgICAgIHNob3dBbnN3ZXJCdG4oKTtcclxuICAgICAgY29uc3QgYW5zd2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcl9idG4nKTtcclxuICAgICAgYW5zd2VyQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29ycmVjdEFuc3dlcih3b3JkLCBhcnJheU9mV29yZHMsIHRva2VuKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93RGVsZXRlQnV0dG9uKSB7XHJcbiAgICAgIHNob3dEZWxldGVXb3JkQnRuKCk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVdvcmRidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlX2J0bicpO1xyXG4gICAgICBkZWxldGVXb3JkYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmQuaWQsIHRva2VuLCB1c2VySWQsICctMScpO1xyXG4gICAgICAgIGFwcChhcnJheU9mV29yZHNbYXJyYXlPZldvcmRzLmxlbmd0aCAtIDJdLCBhcnJheU9mV29yZHMuc2xpY2UoMCwgYXJyYXlPZldvcmRzLmxlbmd0aCAtIDEpKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93RGlmZmljdWx0V29yZHNCdXR0b24pIHtcclxuICAgICAgc2hvd0RpZmZpY3VsdFdvcmRCdG4oKTtcclxuICAgICAgY29uc3QgZGlmZmljdWx0V29yZGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHRfYnRuJyk7XHJcbiAgICAgIGRpZmZpY3VsdFdvcmRidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZC5pZCwgdG9rZW4sIHVzZXJJZCwgJzIwJyk7XHJcbiAgICAgICAgYXBwKGFycmF5T2ZXb3Jkc1thcnJheU9mV29yZHMubGVuZ3RoIC0gMl0sIGFycmF5T2ZXb3Jkcy5zbGljZSgwLCBhcnJheU9mV29yZHMubGVuZ3RoIC0gMSkpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm9ncmVzcyh0b2tlbiwgdXNlcklkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLWZvb3Rlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZWxvYWRlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2dyZXNzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2dldC1zZXR0aW5ncyc7XHJcblxyXG5mdW5jdGlvbiBhZGRJbWcod29yZEluZm8pIHtcclxuICBjb25zdCBpbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9pbWcnKTtcclxuICBpbWFnZVdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpZiAod29yZEluZm8uaW1hZ2UubGVuZ3RoID4gMTAwKSB7XHJcbiAgICBpbWcuc3JjID0gYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwke3dvcmRJbmZvLmltYWdlfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGltZy5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N2aXJza2lhL3JzbGFuZy1kYXRhL21hc3Rlci8ke3dvcmRJbmZvLmltYWdlfWA7XHJcbiAgfVxyXG4gIGltYWdlV3JhcHBlci5hcHBlbmQoaW1nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGV4dEV4YW1wbGVJbkNhcmQod29yZEluZm8pIHtcclxuICBjb25zdCBjYXJkUGhyYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfcGhyYXNlJyk7XHJcbiAgY2FyZFBocmFzZS5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0RXhhbXBsZTtcclxuXHJcbiAgY29uc3QgY2FyZFBocmFzZUIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UgYicpO1xyXG5cclxuICBjYXJkUGhyYXNlQi50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdbID8gXSc7XHJcbiAgY2FyZFBocmFzZUIuYXBwZW5kKHNwYW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRXb3JkTWVhbmluZ0luQ2FyZCh3b3JkSW5mbykge1xyXG4gIGNvbnN0IGNhcmRNZWFuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZycpO1xyXG4gIGNhcmRNZWFuaW5nLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRNZWFuaW5nO1xyXG5cclxuICBjb25zdCBjYXJkTWVhbmluZ0kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nIGknKTtcclxuICBjYXJkTWVhbmluZ0kudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLnRleHRDb250ZW50ID0gJ1sgPyBdJztcclxuICBzcGFuLnN0eWxlLmZvbnRTdHlsZSA9ICdub3JtYWwnO1xyXG4gIHNwYW4uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcclxuICBjYXJkTWVhbmluZ0kuYXBwZW5kKHNwYW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKSB7XHJcbiAgY29uc3Qgd29yZFRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3dvcmQtdHJhbnNsYXRlJyk7XHJcbiAgd29yZFRyYW5zbGF0ZS50ZXh0Q29udGVudCA9IHdvcmRJbmZvLndvcmRUcmFuc2xhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFdvcmRUcmFuc2NyaXB0aW9uSW5DYXJkKHdvcmRJbmZvKSB7XHJcbiAgY29uc3Qgd29yZFRyYW5zY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLXRyYW5zY3JpcHRpb24nKTtcclxuICB3b3JkVHJhbnNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdvcmRJbmZvLnRyYW5zY3JpcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRleHRFeGFtcGxlVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKSB7XHJcbiAgY29uc3QgY2FyZFRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3BocmFzZS10cmFuc2xhdGUnKTtcclxuICBjYXJkVHJhbnNsYXRlLnRleHRDb250ZW50ID0gd29yZEluZm8udGV4dEV4YW1wbGVUcmFuc2xhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKSB7XHJcbiAgY29uc3QgY2FyZE1lYW5pbmdUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nLXRyYW5zbGF0ZScpO1xyXG4gIGNhcmRNZWFuaW5nVHJhbnNsYXRlLnRleHRDb250ZW50ID0gd29yZEluZm8udGV4dE1lYW5pbmdUcmFuc2xhdGU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZENhcmRGaWVsZHMod29yZCwgdXNlcklkLCB0b2tlbikge1xyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XHJcblxyXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93SW1hZ2UpIHtcclxuICAgIGFkZEltZyh3b3JkKTtcclxuICB9XHJcblxyXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dEV4YW1wbGUpIHtcclxuICAgIGFkZFRleHRFeGFtcGxlSW5DYXJkKHdvcmQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0TWVhbmluZykge1xyXG4gICAgYWRkV29yZE1lYW5pbmdJbkNhcmQod29yZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RyYW5zbGF0aW9uKSB7XHJcbiAgICBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNldHRpbmdzLm9wdGlvbmFsLnNob3dUcmFuc2NyaXB0aW9uKSB7XHJcbiAgICBhZGRXb3JkVHJhbnNjcmlwdGlvbkluQ2FyZCh3b3JkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYWRkQ2FyZEZpZWxkcywgYWRkVGV4dEV4YW1wbGVUcmFuc2xhdGVJbkNhcmQsXHJcbiAgYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQsIGFkZFdvcmRUcmFuc2xhdGVJbkNhcmQsXHJcbn07XHJcbiIsImZ1bmN0aW9uIGFkZE5vdGlmaWNhdGlvbigpIHtcclxuICBjb25zdCBub3RpZmljYXRpb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpO1xyXG5cclxuICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwYXJhMS5jbGFzc0xpc3QuYWRkKCdwYXJhMScpO1xyXG4gIHBhcmExLnRleHRDb250ZW50ID0gJ0NvbmdyYXR1bGF0aW9ucyEnO1xyXG5cclxuICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwYXJhMi5jbGFzc0xpc3QuYWRkKCdwYXJhMicpO1xyXG4gIHBhcmEyLnRleHRDb250ZW50ID0gXCJUaGF0J3MgYWxsIGZvciB0b2RheS5cIjtcclxuXHJcbiAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcGFyYTMuY2xhc3NMaXN0LmFkZCgncGFyYTMnKTtcclxuICBwYXJhMy50ZXh0Q29udGVudCA9ICdUaGVyZSBhcmUgc3RpbGwgbmV3IGNhcmRzLCBidXQgdGhlIGRhaWx5IGxpbWl0IGhhcyBiZWVuIHJlYWNoZWQuIFlvdSBjYW4gaW5jcmVhc2UgdGhlIGxpbWl0IGluIHRoZSBzZXR0aW5ncywgYnV0IHBsZWFzZSBrZWVwIGluIG1pbmQgdGhhdCB0aGUgbW9yZSBuZXcgY2FyZHMgeW91IHNlZSwgdGhlIG1vcmUgeW91IHdpbGwgbmVlZCB0byByZXBlYXQgaW4gdGhlIG5lYXIgZnV0dXJlJztcclxuICBub3RpZmljYXRpb25XcmFwcGVyLmFwcGVuZChwYXJhMSwgcGFyYTIsIHBhcmEzKTtcclxuXHJcbiAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gIGNhcmRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE5vdGlmaWNhdGlvbjtcclxuIiwiZnVuY3Rpb24gY2xlYXJDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycycpO1xyXG4gIGJhcnMuY2xhc3NMaXN0LmFkZCgnYmFycy1oaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycycpO1xyXG4gIGJhcnMuY2xhc3NMaXN0LnJlbW92ZSgnYmFycy1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXItY29udGFpbmVyJyk7XHJcbiAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlci1oaWRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFyQ2FyZCwgc2hvd0NhcmQgfTtcclxuIiwiaW1wb3J0IGdldFVzZXJXb3JkQnlJZCBmcm9tICcuL2dldC11c2VyLXdvcmQtYnktaWQnO1xyXG5pbXBvcnQgY3JlYXRlVXNlcldvcmQgZnJvbSAnLi9jcmVhdGUtdXNlci13b3JkJztcclxuaW1wb3J0IHVwZGF0ZVVzZXJXb3JkIGZyb20gJy4vdXBkYXRlLXVzZXItd29yZCc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVdvcmQod29yZElkLCB0b2tlbiwgdXNlcklkLCBkaWZmKSB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB1c2VyV29yZCA9IGF3YWl0IGdldFVzZXJXb3JkQnlJZCh0b2tlbiwgd29yZElkLCB1c2VySWQpO1xyXG4gIGlmICh1c2VyV29yZCAhPT0gbnVsbCkge1xyXG4gICAgY29uc3Qgd29yZEZpcnN0VGltZSA9IHVzZXJXb3JkLm9wdGlvbmFsLmZpcnN0VGltZTtcclxuICAgIGNvbnN0IGN1cnJlbnRXb3JkRGlmZmljdWx0eSA9IHVzZXJXb3JkLmRpZmZpY3VsdHk7XHJcbiAgICB1cGRhdGVVc2VyV29yZCh7XHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHdvcmRJZDogdXNlcldvcmQud29yZElkLFxyXG4gICAgICB3b3JkOiB7XHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZiB8fCBTdHJpbmcoK2N1cnJlbnRXb3JkRGlmZmljdWx0eSAtIDEpLFxyXG4gICAgICAgIG9wdGlvbmFsOiB7IGZpcnN0VGltZTogd29yZEZpcnN0VGltZSwgbGFzdFRpbWU6IG5vdy5nZXRUaW1lKCkgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjcmVhdGVVc2VyV29yZCh7XHJcbiAgICAgIHVzZXJJZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHdvcmRJZCxcclxuICAgICAgd29yZDogeyBkaWZmaWN1bHR5OiBkaWZmIHx8ICcwJywgb3B0aW9uYWw6IHsgZmlyc3RUaW1lOiBub3cuZ2V0VGltZSgpLCBsYXN0VGltZTogbm93LmdldFRpbWUoKSB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yVXBkYXRlV29yZDtcclxuIiwiY29uc3QgY3JlYXRlVXNlcldvcmQgPSBhc3luYyAoe1xyXG4gIHVzZXJJZCwgdG9rZW4sIHdvcmRJZCwgd29yZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkod29yZCksXHJcbiAgfSk7XHJcbiAgY29uc3QgbmV3V29yZCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIG5ld1dvcmQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VyV29yZDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgZ2V0VXNlcldvcmRzIGZyb20gJy4vZ2V0LXVzZXItd29yZHMnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tV29yZCBmcm9tICcuL2dldC1yYW5kb20td29yZCc7XHJcbmltcG9ydCBnZXRXb3JkQnlJZCBmcm9tICcuL2dldC13b3JkLWJ5LWlkJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmRzQXJyYXlGb3JUb2RheShuZXdXb3JkcywgbWF4Q2FyZHMsIHRva2VuLCB1c2VySWQpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGFsbFVzZXJXb2RzID0gYXdhaXQgZ2V0VXNlcldvcmRzKHRva2VuLCB1c2VySWQpO1xyXG4gIGNvbnN0IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcyA9IGFsbFVzZXJXb2RzLnNvcnQoKGEsIGIpID0+IChhLm9wdGlvbmFsLmxhc3RUaW1lIDwgYi5vcHRpb25hbC5sYXN0VGltZSA/IDEgOiAtMSkpO1xyXG4gIGxldCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSA9IDA7XHJcbiAgbGV0IGFscmVkeUxlYXJuZWROZXdXb3Jkc1RvZGF5ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxhc3RSZXBlYXRUaW1lID0gbmV3IERhdGUoc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLm9wdGlvbmFsLmxhc3RUaW1lIC0gNCAqIDM2MDAgKiAxMDAwKTtcclxuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcclxuICAgIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXHJcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnMydcclxuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICctMScpIHtcclxuICAgICAgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgKz0gMTtcclxuICAgIH1cclxuICAgIC8vICBlbHNlIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgIT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpKSB7XHJcbiAgICAvLyAgIGJyZWFrO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZmlyc3RSZXBlYXRUaW1lID0gbmV3IERhdGUoc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLm9wdGlvbmFsLmZpcnN0VGltZSAtIDQgKiAzNjAwICogMTAwMCk7XHJcbiAgICBjb25zdCBmb3VySG91cnNFYXJsaWVyID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDQgKiAzNjAwICogMTAwMCk7XHJcbiAgICBpZiAoZmlyc3RSZXBlYXRUaW1lLmdldERhdGUoKSA9PT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKClcclxuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICczJ1xyXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xyXG4gICAgICBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSArPSAxO1xyXG4gICAgfVxyXG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcclxuICAgIC8vICAgYnJlYWs7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnJheU9mV29yZHNGb3JUb2RheSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1dvcmRzIC0gYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXk7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgcmFuZG9tV29yZCA9IGdldFJhbmRvbVdvcmQoKTtcclxuICAgIGFycmF5T2ZXb3Jkc0ZvclRvZGF5LnB1c2gocmFuZG9tV29yZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaWZmaWN1bHQzVXNlcldvcmRzID0gYWxsVXNlcldvZHMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5kaWZmaWN1bHR5ID4gMik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHQzVXNlcldvcmRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoIDwgbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheSkge1xyXG4gICAgICBjb25zdCBkaWZmaWN1bHRVc2VyV29yZCA9IGdldFdvcmRCeUlkKGRpZmZpY3VsdDNVc2VyV29yZHNbaV0ud29yZElkKTtcclxuICAgICAgYXJyYXlPZldvcmRzRm9yVG9kYXkucHVzaChkaWZmaWN1bHRVc2VyV29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGFycmF5T2ZXb3Jkc0ZvclRvZGF5Lmxlbmd0aCA+PSBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5KSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlmZmljdWx0MlVzZXJXb3JkcyA9IGFsbFVzZXJXb2RzLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uZGlmZmljdWx0eSA9PT0gMik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHQyVXNlcldvcmRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoIDwgbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheVxyXG4gICAgICAmJiAobm93LmdldFRpbWUoKSAtIGRpZmZpY3VsdDJVc2VyV29yZHNbaV0ub3B0aW9uYWwubGFzdFRpbWUpIC8gNjAwMDAgLyA2MCA+IDIyIC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSAyMiDRh9Cw0YHQvtCyINC90LUg0L/QvtCy0YLQvtGA0Y/Qu9C+0YHRjFxyXG4gICAgICAmJiBkaWZmaWN1bHQyVXNlcldvcmRzW2ldLndvcmRJZCAhPT0gJzVlZmUzNGUzNjM1YWVjMDAxNzY0ZDcyNScpIHsgLy8g0LPQu9GO0LpcclxuICAgICAgY29uc3Qgbm90RWFzeVVzZXJXb3JkID0gZ2V0V29yZEJ5SWQoZGlmZmljdWx0MlVzZXJXb3Jkc1tpXS53b3JkSWQpO1xyXG4gICAgICBhcnJheU9mV29yZHNGb3JUb2RheS5wdXNoKG5vdEVhc3lVc2VyV29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGFycmF5T2ZXb3Jkc0ZvclRvZGF5Lmxlbmd0aCA+PSBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5KSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlmZmljdWx0MVVzZXJXb3JkcyA9IGFsbFVzZXJXb2RzLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uZGlmZmljdWx0eSA9PT0gMSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHQxVXNlcldvcmRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoIDwgbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheVxyXG4gICAgICAmJiAobm93LmdldFRpbWUoKSAtIGRpZmZpY3VsdDFVc2VyV29yZHNbaV0ub3B0aW9uYWwubGFzdFRpbWUpIC8gNjAwMDAgLyA2MCA+IDcwKSB7IC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSA3MCDRh9Cw0YHQvtCyINC90LUg0L/QvtCy0YLQvtGA0Y/Qu9C+0YHRjFxyXG4gICAgICBjb25zdCBlYXN5VXNlcldvcmQgPSBnZXRXb3JkQnlJZChkaWZmaWN1bHQxVXNlcldvcmRzW2ldLndvcmRJZCk7XHJcbiAgICAgIGFycmF5T2ZXb3Jkc0ZvclRvZGF5LnB1c2goZWFzeVVzZXJXb3JkKTtcclxuICAgIH0gZWxzZSBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoID49IG1heENhcmRzIC0gYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChhcnJheU9mV29yZHNGb3JUb2RheSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV29yZHNBcnJheUZvclRvZGF5O1xyXG4iLCJjb25zdCBnZXRSYW5kb21Xb3JkID0gYXN5bmMgKHdvcmRzKSA9PiB7XHJcbiAgY29uc3QgcmFuZG9tR3JvdXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICBjb25zdCByYW5kb21QYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApO1xyXG4gIGNvbnN0IHJhbmRvbVdvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCk7XHJcblxyXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vd29yZHM/cGFnZT0ke3JhbmRvbVBhZ2V9Jmdyb3VwPSR7cmFuZG9tR3JvdXB9YCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkod29yZHMpLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiBjb250ZW50W3JhbmRvbVdvcmRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tV29yZDtcclxuIiwiY29uc3QgZ2V0U2V0dGluZ3MgPSBhc3luYyAodXNlcklkLCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3NldHRpbmdzYCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFNldHRpbmdzO1xyXG4iLCJjb25zdCBnZXRVc2VyV29yZEJ5SWQgPSBhc3luYyAodG9rZW4sIHdvcmRJZCwgdXNlcklkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gbm8gd29yZFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJXb3JkQnlJZDtcclxuIiwiY29uc3QgZ2V0VXNlcldvcmRzID0gYXN5bmMgKHRva2VuLCB1c2VySWQpID0+IHtcclxuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS93b3Jkc2AsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgYWxsV29yZHMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiBhbGxXb3JkcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJXb3JkcztcclxuIiwiY29uc3QgZ2V0V29yZEJ5SWQgPSBhc3luYyAod29yZElkKSA9PiB7XHJcbiAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hZnRlcm5vb24tZmFsbHMtMjU4OTQuaGVyb2t1YXBwLmNvbS93b3Jkcy8ke3dvcmRJZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAvLyA1ZWZlMzRlMzYzNWFlYzAwMTc2NGQ3MjUgIC0g0LPQu9GO0YfQvdC+0LUg0YHQu9C+0LLQvlxyXG4gIHJldHVybiBjb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V29yZEJ5SWQ7XHJcbiIsImZ1bmN0aW9uIGFkZE11bHRpQ29sb3JSZXN1bHQoKSB7XHJcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLWhpZGRlbicpO1xyXG4gIGlucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuXHJcbiAgY29uc3QgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtdWx0aUNvbG9yUmVzdWx0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtdWx0aS1jb2xvcicpO1xyXG5cclxuICBpbnB1dENvbnRhaW5lci5hcHBlbmQobXVsdGlDb2xvclJlc3VsdFdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNdWx0aUNvbG9yUmVzdWx0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbmltcG9ydCBnZXRVc2VyV29yZHMgZnJvbSAnLi9nZXQtdXNlci13b3Jkcyc7XHJcbmltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2dldC1zZXR0aW5ncyc7XHJcbmltcG9ydCBhZGROb3RpZmljYXRpb24gZnJvbSAnLi9hZGQtbm90aWZpY2F0aW9uJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2dyZXNzKHRva2VuLCB1c2VySWQpIHtcclxuICBjb25zdCBhbGxVc2VyV29kcyA9IGF3YWl0IGdldFVzZXJXb3Jkcyh0b2tlbiwgdXNlcklkKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzKHVzZXJJZCwgdG9rZW4pO1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGNvbnN0IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcyA9IGFsbFVzZXJXb2RzLnNvcnQoKGEsIGIpID0+IChhLm9wdGlvbmFsLmxhc3RUaW1lIDwgYi5vcHRpb25hbC5sYXN0VGltZSA/IDEgOiAtMSkpO1xyXG4gIGxldCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSA9IDA7XHJcbiAgbGV0IGFscmVkeUxlYXJuZWROZXdXb3Jkc1RvZGF5ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxhc3RSZXBlYXRUaW1lID0gbmV3IERhdGUoc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLm9wdGlvbmFsLmxhc3RUaW1lIC0gNCAqIDM2MDAgKiAxMDAwKTtcclxuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcclxuICAgIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXHJcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnMydcclxuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICctMScpIHtcclxuICAgICAgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgKz0gMTtcclxuICAgIH1cclxuICAgIC8vICBlbHNlIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgIT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpKSB7XHJcbiAgICAvLyAgIGJyZWFrO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBjb25zdCBiYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWFsbCBzcGFuJyk7XHJcbiAgYmFyQWxsLnN0eWxlLndpZHRoID0gYCR7KGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5IC8gc2V0dGluZ3Mub3B0aW9uYWwuY2FyZHNQZXJEYXkpICogMTAwfSVgO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZmlyc3RSZXBlYXRUaW1lID0gbmV3IERhdGUoc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLm9wdGlvbmFsLmZpcnN0VGltZSAtIDQgKiAzNjAwICogMTAwMCk7XHJcbiAgICBjb25zdCBmb3VySG91cnNFYXJsaWVyID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDQgKiAzNjAwICogMTAwMCk7XHJcbiAgICBpZiAoZmlyc3RSZXBlYXRUaW1lLmdldERhdGUoKSA9PT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKClcclxuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICczJ1xyXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xyXG4gICAgICBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSArPSAxO1xyXG4gICAgfVxyXG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcclxuICAgIC8vICAgYnJlYWs7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXIgc3BhbicpO1xyXG4gIGJhci5zdHlsZS53aWR0aCA9IGAkeyhhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSAvIHNldHRpbmdzLndvcmRzUGVyRGF5KSAqIDEwMH0lYDtcclxuXHJcbiAgaWYgKGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5IC8gc2V0dGluZ3Mub3B0aW9uYWwuY2FyZHNQZXJEYXkgPj0gMSkge1xyXG4gICAgYWRkTm90aWZpY2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9ncmVzcztcclxuIiwiaW1wb3J0IGdldFNldHRpbmdzIGZyb20gJy4vZ2V0LXNldHRpbmdzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbmNvbnN0IHZvaWNlQXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8nKTtcclxuY29uc3Qgdm9pY2VFeGFtcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvLWV4YW1wbGUnKTtcclxuY29uc3Qgdm9pY2VNZWFuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvLW1lYW5pbmcnKTtcclxuXHJcbmZ1bmN0aW9uIHNheU1lYW5pbmcod29yZCwgYXJyLCBydW5BcHApIHtcclxuICBpZiAod29yZC5hdWRpb01lYW5pbmcubGVuZ3RoID4gMTAwKSB7XHJcbiAgICB2b2ljZU1lYW5pbmcuc3JjID0gYGRhdGE6YXVkaW8vbXBlZztiYXNlNjQsJHt3b3JkLmF1ZGlvTWVhbmluZ31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2b2ljZU1lYW5pbmcuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdmlyc2tpYS9yc2xhbmctZGF0YS9tYXN0ZXIvJHt3b3JkLmF1ZGlvTWVhbmluZ31gO1xyXG4gIH1cclxuICB2b2ljZU1lYW5pbmcucGxheSgpO1xyXG4gIGlmIChydW5BcHApIHtcclxuICAgIHZvaWNlTWVhbmluZy5vbmVuZGVkID0gKCkgPT4gYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXlFeGFtcGxlKHdvcmQsIHVzZXJJZCwgdG9rZW4sIGFyciwgcnVuQXBwKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncyh1c2VySWQsIHRva2VuKTtcclxuXHJcbiAgaWYgKHdvcmQuYXVkaW9FeGFtcGxlLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgdm9pY2VFeGFtcGxlLnNyYyA9IGBkYXRhOmF1ZGlvL21wZWc7YmFzZTY0LCR7d29yZC5hdWRpb0V4YW1wbGV9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgdm9pY2VFeGFtcGxlLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3ZpcnNraWEvcnNsYW5nLWRhdGEvbWFzdGVyLyR7d29yZC5hdWRpb0V4YW1wbGV9YDtcclxuICB9XHJcbiAgdm9pY2VFeGFtcGxlLnBsYXkoKTtcclxuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRNZWFuaW5nKSB7XHJcbiAgICB2b2ljZUV4YW1wbGUub25lbmRlZCA9ICgpID0+IHNheU1lYW5pbmcod29yZCwgYXJyLCBydW5BcHApO1xyXG4gIH0gZWxzZSBpZiAocnVuQXBwKSB7XHJcbiAgICB2b2ljZUV4YW1wbGUub25lbmRlZCA9ICgpID0+IGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBzYXlXb3JkKHdvcmQsIGFyciwgdXNlcklkLCB0b2tlbiwgcnVuQXBwID0gdHJ1ZSkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XHJcblxyXG4gIGlmICh3b3JkLmF1ZGlvLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgdm9pY2VBdWRpby5zcmMgPSBgZGF0YTphdWRpby9tcGVnO2Jhc2U2NCwke3dvcmQuYXVkaW99YDtcclxuICB9IGVsc2Uge1xyXG4gICAgdm9pY2VBdWRpby5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N2aXJza2lhL3JzbGFuZy1kYXRhL21hc3Rlci8ke3dvcmQuYXVkaW99YDtcclxuICB9XHJcbiAgdm9pY2VBdWRpby5wbGF5KCk7XHJcbiAgaWYgKHNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0RXhhbXBsZSkge1xyXG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gc2F5RXhhbXBsZSh3b3JkLCB1c2VySWQsIHRva2VuLCBhcnIsIHJ1bkFwcCk7XHJcbiAgfSBlbHNlIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHtcclxuICAgIHZvaWNlQXVkaW8ub25lbmRlZCA9ICgpID0+IHNheU1lYW5pbmcod29yZCwgYXJyLCBydW5BcHApO1xyXG4gIH0gZWxzZSBpZiAocnVuQXBwKSB7XHJcbiAgICB2b2ljZUF1ZGlvLm9uZW5kZWQgPSAoKSA9PiBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNheVdvcmQ7XHJcbiIsImZ1bmN0aW9uIHNldElucHV0V2lkdGgod29yZCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtaGlkZGVuX2lucHV0Jyk7XHJcbiAgaW5wdXQuc3R5bGUud2lkdGggPSBgJHt3b3JkLndvcmQubGVuZ3RoIC8gMS41fWVtYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0SW5wdXRXaWR0aDtcclxuIiwiZnVuY3Rpb24gc2hvd0RpZmZpY3VsdHlCdG5zKCkge1xyXG4gIGNvbnN0IGJ0bnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZmZpY3VsdHlfYnRucycpO1xyXG5cclxuICBjb25zdCBkaWZmaWN1bHR5M2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRpZmZpY3VsdHkzYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0eV8zX2J0bicpO1xyXG4gIGRpZmZpY3VsdHkzYnRuLnRleHRDb250ZW50ID0gJ0FnYWluJztcclxuXHJcbiAgY29uc3QgZGlmZmljdWx0eTJidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkaWZmaWN1bHR5MmJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdHlfMl9idG4nKTtcclxuICBkaWZmaWN1bHR5MmJ0bi50ZXh0Q29udGVudCA9ICdIYXJkJztcclxuXHJcbiAgY29uc3QgZGlmZmljdWx0eTFidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkaWZmaWN1bHR5MWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdHlfMV9idG4nKTtcclxuICBkaWZmaWN1bHR5MWJ0bi50ZXh0Q29udGVudCA9ICdOb3JtYWwnO1xyXG5cclxuICBjb25zdCBkaWZmaWN1bHR5MGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRpZmZpY3VsdHkwYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0eV8wX2J0bicpO1xyXG4gIGRpZmZpY3VsdHkwYnRuLnRleHRDb250ZW50ID0gJ0Vhc3knO1xyXG5cclxuICBidG5zV3JhcHBlci5hcHBlbmQoZGlmZmljdWx0eTNidG4sIGRpZmZpY3VsdHkyYnRuLCBkaWZmaWN1bHR5MWJ0biwgZGlmZmljdWx0eTBidG4pO1xyXG4gIHJldHVybiBidG5zV3JhcHBlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZURpZmZpY3VsdHlCdG5zKCkge1xyXG4gIGNvbnN0IGJ0bnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZmZpY3VsdHlfYnRucycpO1xyXG4gIGJ0bnNXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbnN3ZXJCdG4oKSB7XHJcbiAgY29uc3Qgc2hvd0Fuc3dlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyX2J0bicpO1xyXG4gIHNob3dBbnN3ZXJXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGNvbnN0IHNob3dBbnN3ZXJidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzaG93QW5zd2VyYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYW5zd2VyX2J0bicpO1xyXG4gIHNob3dBbnN3ZXJidG4udGV4dENvbnRlbnQgPSAnU2hvdyBBbnN3ZXInO1xyXG4gIHNob3dBbnN3ZXJXcmFwcGVyLmFwcGVuZChzaG93QW5zd2VyYnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0RpZmZpY3VsdFdvcmRCdG4oKSB7XHJcbiAgY29uc3Qgc2hvd0RpZmZpY3VsdFdvcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZmZpY3VsdF9idG4nKTtcclxuICBzaG93RGlmZmljdWx0V29yZFdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3Qgc2hvd0RpZmZpY3VsdFdvcmRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzaG93RGlmZmljdWx0V29yZGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdF9idG4nKTtcclxuICBzaG93RGlmZmljdWx0V29yZGJ0bi50ZXh0Q29udGVudCA9ICdNYXJrIGFzIFwiZGlmZmljdWx0XCInO1xyXG4gIHNob3dEaWZmaWN1bHRXb3JkV3JhcHBlci5hcHBlbmQoc2hvd0RpZmZpY3VsdFdvcmRidG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGVsZXRlV29yZEJ0bigpIHtcclxuICBjb25zdCBzaG93RGVsZXRlV29yZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX2J0bicpO1xyXG4gIHNob3dEZWxldGVXb3JkV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBjb25zdCBzaG93RGVsZXRlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2hvd0RlbGV0ZWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZV9idG4nKTtcclxuICBzaG93RGVsZXRlYnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgc2hvd0RlbGV0ZVdvcmRXcmFwcGVyLmFwcGVuZChzaG93RGVsZXRlYnRuKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBzaG93RGlmZmljdWx0eUJ0bnMsIGhpZGVEaWZmaWN1bHR5QnRucywgc2hvd0Fuc3dlckJ0biwgc2hvd0RpZmZpY3VsdFdvcmRCdG4sIHNob3dEZWxldGVXb3JkQnRuLFxyXG59O1xyXG4iLCJmdW5jdGlvbiBzaG93RnVsbFRleHRFeGFtcGxlKHdvcmRJbmZvKSB7XHJcbiAgY29uc3QgZXhhbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3BocmFzZScpO1xyXG4gIGV4YW1wbGUuaW5uZXJIVE1MID0gd29yZEluZm8udGV4dEV4YW1wbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGdWxsVGV4dE1lYW5pbmcod29yZEluZm8pIHtcclxuICBjb25zdCBtZWFuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZycpO1xyXG4gIG1lYW5pbmcuaW5uZXJIVE1MID0gd29yZEluZm8udGV4dE1lYW5pbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dGdWxsVGV4dEV4YW1wbGUsIHNob3dGdWxsVGV4dE1lYW5pbmcgfTtcclxuIiwiY29uc3QgdXBkYXRlVXNlcldvcmQgPSBhc3luYyAoe1xyXG4gIHVzZXJJZCwgdG9rZW4sIHdvcmRJZCwgd29yZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3b3JkKSxcclxuICB9KTtcclxuICBjb25zdCB1cGRhdGVkV29yZCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZWRXb3JkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVXNlcldvcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=