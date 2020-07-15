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
exports.push([module.i, ".progress-bar,\n.progress-bar-all {\n\tbackground-color: #1a1a1a;\n\theight: 30px;\n    padding: 3px;\n\twidth: 350px;\n\tmargin: 5px 0;\n\t-moz-border-radius: 5px;\n\t-webkit-border-radius: 5px;\n\tborder-radius: 5px;\n\t-moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\n\t-webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\n\tbox-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;\n}\n\n.progress-bar span,\n.progress-bar-all span {\n\tdisplay: inline-block;\n\theight: 25px;\n\twidth: 200px;\n\t-moz-border-radius: 3px;\n\t-webkit-border-radius: 3px;\n\tborder-radius: 3px;\n\t-moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\n\t-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\n\tbox-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\n\t-webkit-transition: width .4s ease-in-out;\n\t-moz-transition: width .4s ease-in-out;\n\t-ms-transition: width .4s ease-in-out;\n\t-o-transition: width .4s ease-in-out;\n\ttransition: width .4s ease-in-out;\n}\n.blue span {\n\tbackground-color: #34c2e3;\n}\n\n.orange span {\n\t  background-color: #fecf23;\n}       \n\n.green span {\n\t  background-color: #a5df41;\n}\n.shine span {\n\tposition: relative;\n}\n\n.shine span::after {\n\tcontent: '';\n\topacity: 0;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: #fff;\n\t-moz-border-radius: 3px;\n\t-webkit-border-radius: 3px;\n\tborder-radius: 3px;                     \n\n\t-webkit-animation: animate-shine 2s ease-out infinite;\n\t-moz-animation: animate-shine 2s ease-out infinite;\n}\n\n.glow span {\n\t-moz-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\n\t-webkit-box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\n\tbox-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;\n\n\t-webkit-animation: animate-glow 1s ease-out infinite;\n\t-moz-animation: animate-glow 1s ease-out infinite;\n}\n\n", ""]);
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

  if (btnsWrapper.innerHTML === '') {
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
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvaGVhZGVyLWZvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvcHJlbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9wcm9ncmVzcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL2hlYWRlci1mb290ZXIuY3NzPzQ4MTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvcHJlbG9hZGVyLmNzcz9kMTI2Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3Byb2dyZXNzLmNzcz84OTFlIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3N0eWxlLmNzcz8wOGVhIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9hZGQtZmllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9hZGQtbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jbGVhci1mb3ItbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY3JlYXRlLW9yLXVwZGF0ZS13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtdXNlci13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtd29yZHMtYXJyYXktZm9yLXRvZGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9nZXQtcmFuZG9tLXdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZC1ieS1pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC13b3JkLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9tdWx0aS1jb2xvci1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3NldC1pbnB1dC13aWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvc2hvdy1idG5zLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zaG93LWZ1bGwtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvdXBkYXRlLXVzZXItd29yZC5qcyJdLCJuYW1lcyI6WyJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJzZWVTZXR0aW5ncyIsImdldFNldHRpbmdzIiwic2V0dGluZ3MiLCJjcmVhdGVBcnJheSIsInNldFNldHRpbmdzIiwiY3JlYXRlV29yZHNBcnJheUZvclRvZGF5Iiwid29yZHNQZXJEYXkiLCJvcHRpb25hbCIsImNhcmRzUGVyRGF5Iiwid29yZHNBcnJheUZvclRvZGF5IiwiY29uc29sZSIsImxvZyIsInNodWZsZWRXb3Jkc0FycmF5Rm9yVG9kYXkiLCJzb3J0IiwiYSIsImIiLCJncm91cCIsInNob3dDYXJkIiwic3RhcnRBcHAiLCJhcnJheU9mV29yZHMiLCJsZW5ndGgiLCJwcm9ncmVzcyIsIndvcmQiLCJhcHAiLCJjbGVhckNhcmQiLCJjb3JyZWN0QW5zd2VyIiwid29yZEluZm8iLCJpc1NvdW5kT24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImlzVHJhbnNsYXRlT24iLCJhcnIiLCJzbGljZSIsInNob3dXb3Jkc1N0YXR1c0J1dHRvbnMiLCJzYXlXb3JkIiwic2hvd0RpZmZpY3VsdHlCdG5zIiwiZGlmZjNidG4iLCJvbmNsaWNrIiwiY3JlYXRlT3JVcGRhdGVXb3JkIiwiaWQiLCJoaWRlRGlmZmljdWx0eUJ0bnMiLCJkaWZmMmJ0biIsImRpZmYxYnRuIiwiZGlmZjBidG4iLCJzaG93VGV4dEV4YW1wbGUiLCJzaG93RnVsbFRleHRFeGFtcGxlIiwic2hvd1RleHRNZWFuaW5nIiwic2hvd0Z1bGxUZXh0TWVhbmluZyIsImFkZFdvcmRUcmFuc2xhdGVJbkNhcmQiLCJhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCIsImFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkIiwiY2hlY2tJbnB1dCIsIm11bHRpQ29sb3JSZXN1bHRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImkiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY29sb3IiLCJhcHBlbmQiLCJjYXJkTWVhbmluZ1RyYW5zbGF0ZSIsImNhcmRUcmFuc2xhdGUiLCJhZGRDYXJkRmllbGRzIiwic2V0SW5wdXRXaWR0aCIsImFkZE11bHRpQ29sb3JSZXN1bHQiLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbG9yV3JhcHBlciIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dBbnN3ZXJCdXR0b24iLCJzaG93QW5zd2VyQnRuIiwiYW5zd2VyQnRuIiwic2hvd0RlbGV0ZUJ1dHRvbiIsInNob3dEZWxldGVXb3JkQnRuIiwiZGVsZXRlV29yZGJ0biIsInNob3dEaWZmaWN1bHRXb3Jkc0J1dHRvbiIsInNob3dEaWZmaWN1bHRXb3JkQnRuIiwiZGlmZmljdWx0V29yZGJ0biIsImFkZEltZyIsImltYWdlV3JhcHBlciIsImltZyIsImltYWdlIiwic3JjIiwiYWRkVGV4dEV4YW1wbGVJbkNhcmQiLCJjYXJkUGhyYXNlIiwiaW5uZXJIVE1MIiwidGV4dEV4YW1wbGUiLCJjYXJkUGhyYXNlQiIsImFkZFdvcmRNZWFuaW5nSW5DYXJkIiwiY2FyZE1lYW5pbmciLCJ0ZXh0TWVhbmluZyIsImNhcmRNZWFuaW5nSSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJ3b3JkVHJhbnNsYXRlIiwiYWRkV29yZFRyYW5zY3JpcHRpb25JbkNhcmQiLCJ3b3JkVHJhbnNjcmlwdGlvbiIsInRyYW5zY3JpcHRpb24iLCJ0ZXh0RXhhbXBsZVRyYW5zbGF0ZSIsInRleHRNZWFuaW5nVHJhbnNsYXRlIiwic2hvd0ltYWdlIiwic2hvd1RyYW5zbGF0aW9uIiwic2hvd1RyYW5zY3JpcHRpb24iLCJhZGROb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25XcmFwcGVyIiwicGFyYTEiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXJhMiIsInBhcmEzIiwiY2FyZFdyYXBwZXIiLCJjYXJkIiwiYmFycyIsInJlbW92ZSIsInByZWxvYWRlciIsIndvcmRJZCIsImRpZmYiLCJub3ciLCJEYXRlIiwiZ2V0VXNlcldvcmRCeUlkIiwidXNlcldvcmQiLCJ3b3JkRmlyc3RUaW1lIiwiZmlyc3RUaW1lIiwiY3VycmVudFdvcmREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInVwZGF0ZVVzZXJXb3JkIiwiU3RyaW5nIiwibGFzdFRpbWUiLCJnZXRUaW1lIiwiY3JlYXRlVXNlcldvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXdSZXNwb25zZSIsImpzb24iLCJuZXdXb3JkIiwibmV3V29yZHMiLCJtYXhDYXJkcyIsImdldFVzZXJXb3JkcyIsImFsbFVzZXJXb2RzIiwic29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzIiwiYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkiLCJhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSIsImxhc3RSZXBlYXRUaW1lIiwiZm91ckhvdXJzRWFybGllciIsImdldERhdGUiLCJmaXJzdFJlcGVhdFRpbWUiLCJhcnJheU9mV29yZHNGb3JUb2RheSIsInJhbmRvbVdvcmQiLCJnZXRSYW5kb21Xb3JkIiwicHVzaCIsImRpZmZpY3VsdDNVc2VyV29yZHMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlmZmljdWx0VXNlcldvcmQiLCJnZXRXb3JkQnlJZCIsImRpZmZpY3VsdDJVc2VyV29yZHMiLCJub3RFYXN5VXNlcldvcmQiLCJkaWZmaWN1bHQxVXNlcldvcmRzIiwiZWFzeVVzZXJXb3JkIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdCIsIndvcmRzIiwicmFuZG9tR3JvdXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QYWdlIiwiY29udGVudCIsImFsbFdvcmRzIiwiaW5wdXRDb250YWluZXIiLCJwb3NpdGlvbiIsImJhckFsbCIsIndpZHRoIiwiYmFyIiwidm9pY2VBdWRpbyIsInZvaWNlRXhhbXBsZSIsInZvaWNlTWVhbmluZyIsInNheU1lYW5pbmciLCJydW5BcHAiLCJhdWRpb01lYW5pbmciLCJwbGF5Iiwib25lbmRlZCIsInNheUV4YW1wbGUiLCJhdWRpb0V4YW1wbGUiLCJhdWRpbyIsImJ0bnNXcmFwcGVyIiwiZGlmZmljdWx0eTNidG4iLCJzZXRBdHRyaWJ1dGUiLCJkaWZmaWN1bHR5MmJ0biIsImRpZmZpY3VsdHkxYnRuIiwiZGlmZmljdWx0eTBidG4iLCJzaG93QW5zd2VyV3JhcHBlciIsInNob3dBbnN3ZXJidG4iLCJzaG93RGlmZmljdWx0V29yZFdyYXBwZXIiLCJzaG93RGlmZmljdWx0V29yZGJ0biIsInNob3dEZWxldGVXb3JkV3JhcHBlciIsInNob3dEZWxldGVidG4iLCJleGFtcGxlIiwibWVhbmluZyIsInVwZGF0ZWRXb3JkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LHFCQUFPLEVBQUU7QUFDUEMsNkJBQWEsbUJBQVk1SSxLQUFaLENBRE47QUFFUDZJLHNCQUFNLEVBQUUsa0JBRkQ7QUFHUCxnQ0FBZ0I7QUFIVCxlQUZvRztBQU83R0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWV6SCxJQUFmO0FBUHVHLGFBQWhGLENBSFY7O0FBQUE7QUFHZjBILHVCQUhlO0FBQUE7QUFBQSxtQkFZS0EsV0FBVyxDQUFDQyxJQUFaLEVBWkw7O0FBQUE7QUFZZm1FLHVCQVplO0FBQUEsNkNBY2RBLFdBZGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZGpGLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7O0FBaUJlQSw2RUFBZixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1IZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogNjRweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmJmY2ZlO1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgei1pbmRleDogMTAwO1xcclxcblxcdCBib3gtc2hhZG93OiAwIDVweCA1cHggLTVweCAjMzMzO1xcclxcbiAgfVxcclxcblxcclxcbiAgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzIzMjMyMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWlue1xcclxcbiAgYmFja2dyb3VuZDogI2ZiZmNmZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saW5le1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgIHRvcDogNTAlO1xcclxcblxcdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdCAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGJ0biB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcblxcdCAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHQgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxyXFxuXFx0ICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXHJcXG5cXHQgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHQgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogbm9uZTtcXHJcXG5cXHRcXHRib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVuZXJ7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdC8qIGJvdHRvbTogLTMzcHg7ICovXFxyXFxuXFx0XFx0ZmxvYXQ6IHJpZ2h0O1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93biB7XFxyXFxuXFx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZHJvcGRvd24tY29udGVudCB7XFxyXFxuXFx0ICBkaXNwbGF5OiBub25lO1xcclxcblxcdCAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgbWluLXdpZHRoOiAxMHJlbTtcXHJcXG5cXHQgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcclxcblxcdCAgei1pbmRleDogMTtcXHJcXG5cXHQgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcblxcdCAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHQgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG5cXHRcXHRcXHR0byBib3R0b20sXFxyXFxuXFx0XFx0XFx0I0FGRUVFRSxcXHJcXG5cXHRcXHRcXHQjQjBFMEU2XFxyXFxuXFx0XFx0ICApO1xcclxcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYXtcXHJcXG5cXHQgIGNvbG9yOiBibGFjaztcXHJcXG5cXHQgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdCAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcblxcdCAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdCAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuZHJvcGJ0biBhIHtcXHJcXG5cXHQgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlcntcXHJcXG5cXHRjb2xvcjogcmdiYSgyNDYsIDI4LCAzMiwgMSk7fVxcclxcblxcclxcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XFxyXFxuXFxyXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRjb2xvcjpibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kcm9wZG93biBpbWcge1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdGhlaWdodDogM3JlbTtcXHJcXG5cXHRtYXJnaW46IDBweCAyMHB4IDBweCA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDMuZHJvcGRvd257XFxyXFxuXFx0ICBmb250LXNpemU6IDJyZW07XFxyXFxuXFx0ICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgY29sb3I6IHJnYmEoMjQ2LCAyOCwgMzIsIDEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDYsIDI4LCAzMiwgMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcclxcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLGJveC1zaGFkb3cgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsYm9yZGVyIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjgsIDMyLCAuMyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7fVxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dCBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0NiwgMjgsIDMyLCAxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhdXRvcml6YXRpb257XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uLWlucHV0LWF1dG9yaXphdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgY29sb3I6IHJnYigxNDQsIDIzOCwgMTQ0KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDQsIDIzOCwgMTQ0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxyXFxuICBwYWRkaW5nOiA2cHggMTZweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsYm94LXNoYWRvdyAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxib3JkZXIgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYnV0dG9uLWlucHV0LCAuYnV0dG9uLWlucHV0LWF1dG9yaXphdGlvbiB7XFxyXFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIzOCwgMTQ0LCAuMyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKmJ1dHRvbjpiZWZvcmUgKGF0dHIgZGF0YS1ob3ZlcikqL1xcclxcbiAgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb246aG92ZXI6YmVmb3JlIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcclxcbiAgfVxcclxcbiAgLmJ1dHRvbi1pbnB1dC1hdXRvcml6YXRpb246YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtaG92ZXIpO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgLypidXR0b24gZGl2IChidXR0b24gdGV4dCBiZWZvcmUgaG92ZXIpKi9cXHJcXG4gIC5idXR0b24taW5wdXQtYXV0b3JpemF0aW9uOmhvdmVyIGEge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxyXFxuICB9XFxyXFxuICAuYnV0dG9uLWlucHV0LWF1dG9yaXphdGlvbiBhIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHRjb2xvcjogcmdiKDE0NCwgMjM4LCAxNDQpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLyotLS0tLS0tLS0tLS3QsdC+0LrQvtCy0L7QtSDQvNC10L3Rji0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4gIC8qIG5hdiB0b2dnbGUgKi9cXHJcXG5cXHJcXG4gIC5uYXYtdG9nZ2xlIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAycmVtO1xcclxcblxcdGxlZnQ6IDJyZW07XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMXJlbTtcXHJcXG5cXHR3aWR0aDogMi4ycmVtO1xcclxcblxcdHotaW5kZXg6IDk5OTkyO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZTpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcbiAgLm5hdi10b2dnbGUgLm5hdi10b2dnbGUtYmFyLFxcclxcbiAgLm5hdi10b2dnbGUgLm5hdi10b2dnbGUtYmFyOjphZnRlcixcXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhcjo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA1MCU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0aGVpZ2h0OiAzcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhciB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhcjo6YWZ0ZXIge1xcclxcblxcdG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlIC5uYXYtdG9nZ2xlLWJhcjo6YmVmb3JlIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtOHB4O1xcclxcbiAgfVxcclxcbiAgLm5hdi10b2dnbGUuZXhwYW5kZWQgLm5hdi10b2dnbGUtYmFyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIC5uYXYtdG9nZ2xlLmV4cGFuZGVkIC5uYXYtdG9nZ2xlLWJhcjo6YWZ0ZXIsIC5uYXYtdG9nZ2xlLmV4cGFuZGVkIC5uYXYtdG9nZ2xlLWJhcjo6YmVmb3JlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgLm5hdi10b2dnbGUuZXhwYW5kZWQgLm5hdi10b2dnbGUtYmFyOjphZnRlciB7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuICAubmF2LXRvZ2dsZS5leHBhbmRlZCAubmF2LXRvZ2dsZS1iYXI6OmJlZm9yZSB7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAubmF2IHtcXHJcXG5cXHR3aWR0aDogMjYwcHg7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG5cXHRcXHQgIHRvIGJvdHRvbSxcXHJcXG5cXHRcXHQgICNBRkVFRUUsXFxyXFxuXFx0XFx0ICAjQjBFMEU2XFxyXFxuXFx0XFx0KTtcXHJcXG5cXHR0b3A6MHB4O1xcclxcblxcdHBhZGRpbmc6IDMwcHg7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdGxlZnQ6IC00MzBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDUwMG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcclxcblxcdGhlaWdodDogY2FsYygxMDB2aCArIDIwcHgpO1xcclxcblxcdHotaW5kZXg6IDk5ODtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTMwcHg7XFxyXFxuICB9XFxyXFxuICAubmF2LmV4cGFuZGVkIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLdCy0YvQv9Cw0LTQsNGO0YnQuNC5INGB0L/QuNGB0L7Qui0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbiAgdWx7XFxyXFxuXFx0ICBtYXJnaW46IDA7XFxyXFxuXFx0ICBwYWRkaW5nOiAwO1xcclxcblxcdCAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5tZW51IGF7XFxyXFxuXFx0ICBjb2xvcjogYmxhY2s7XFxyXFxuXFx0ICBwYWRkaW5nOiAxMHB4O1xcclxcblxcdCAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0ICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjtcXHJcXG5cXHQgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcclxcbiAgfVxcclxcbiAgLm1lbnUgYTpob3ZlcntcXHJcXG5cXHQgIGJhY2tncm91bmQ6ICM2NjY7XFxyXFxuXFx0ICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyMHB4O1xcclxcbiAgfVxcclxcbiAgLm1lbnUgbGk6Zmlyc3QtY2hpbGQgYSwgLm1lbnUgbGkgLnZfbWVudSBsaTpmaXJzdC1jaGlsZCBhe1xcclxcblxcdCAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XFxyXFxuICB9XFxyXFxuICAubWVudSBsaTpsYXN0LWNoaWxkIGEsIC5tZW51IGxpIC52X21lbnUgbGk6bGFzdC1jaGlsZCBhe1xcclxcblxcdCAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxyXFxuXFx0ICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgLm1lbnUgbGkgLnZfbWVudSBsaSBhe1xcclxcblxcdCAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIH1cXHJcXG4gIC5wX21lbnV7cG9zaXRpb246IHJlbGF0aXZlO31cXHJcXG4gIC52X21lbnV7XFxyXFxuXFx0ICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ICB3aWR0aDogMTAwJTtcXHJcXG5cXHQgIGxlZnQ6IDEwMCU7XFxyXFxuXFx0ICB0b3A6IC05OTk5cHg7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdCAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0ICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHk7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuXFx0XFx0XFx0dG8gYm90dG9tLFxcclxcblxcdFxcdFxcdCNBRkVFRUUsXFxyXFxuXFx0XFx0XFx0I0IwRTBFNlxcclxcblxcdFxcdCAgKTtcXHJcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG4gIC5wX21lbnU6aG92ZXIgLnZfbWVudXtcXHJcXG5cXHQgIG9wYWNpdHk6IDE7XFxyXFxuXFx0ICB0b3A6IDA7XFxyXFxuICB9XFxyXFxuICAucF9tZW51OjphZnRlcntcXHJcXG5cXHQgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdCAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgYm9yZGVyOjVweCBzb2xpZDtcXHJcXG5cXHQgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgYmxhY2s7XFxyXFxuXFx0ICB0b3A6IDFlbTtcXHJcXG5cXHQgIHJpZ2h0OiAuN2VtO1xcclxcblxcdCAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIH1cXHJcXG4gIC5wX21lbnU6aG92ZXI6OmFmdGVye1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICoge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcblxcdCBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0IGJvdHRvbTogMDtcXHJcXG5cXHQgd2lkdGg6IDEwMCU7XFxyXFxuXFx0IGJhY2tncm91bmQ6ICNlOWY1Zjc7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdCBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCBwIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMXB4KSB7XFxyXFxuICAubmF2e2Rpc3BsYXk6IG5vbmU7fVxcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMzlweCkge1xcclxcbiAgLm5hdi10b2dnbGUge2Rpc3BsYXk6IGJsb2NrO31cXHJcXG5cXHJcXG4gIC5jb250ZW5lcntkaXNwbGF5OiBub25lO31cXHJcXG5cXHJcXG4gIC5saW5lIHtcXHJcXG5cXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgIHRvcDogNTAlO1xcclxcblxcdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdCAgd2lkdGg6IDEwMCU7XFxyXFxuXFx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcXHJcXG5cXHJcXG5cXHQubmF2IHt3aWR0aDogMjAwcHg7fVxcclxcblxcclxcblxcdC5kcm9wZG93biBpbWcge1xcclxcblxcdCAgd2lkdGg6IDJyZW07XFxyXFxuXFx0ICBoZWlnaHQ6IDJyZW07XFxyXFxuXFx0ICBtYXJnaW46IDEuNnJlbSAwLjZyZW0gLTEwcHggM3JlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aDMuZHJvcGRvd257XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHR9XFxyXFxuICB9XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByZWxvYWRlci1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDgwdmg7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcblxcdHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5wcmVsb2FkZXItaGlkZSB7XFxyXFxuXFx0ICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0tMSB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmNTgzYTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWQ5Njg7XFxyXFxuXFx0bWFyZ2luOiA3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuXFx0MCUge1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlLFxcclxcblxcdCAgNzUlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXHJcXG5cXHR9XFxyXFxuXFx0NzglLFxcclxcblxcdCAgMTAwJSB7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG4gIH1cXHJcXG4gIC5pdGVtLTE6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWQ5Njg7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0tMiB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmNTgzYTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWNlNjg7XFxyXFxuXFx0bWFyZ2luOiA3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuXFx0MCUge1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlLFxcclxcblxcdCAgNzUlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXHJcXG5cXHR9XFxyXFxuXFx0NzglLFxcclxcblxcdCAgMTAwJSB7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG4gIH1cXHJcXG4gIC5pdGVtLTI6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWNlNjg7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0tMyB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmNTgzYTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWMzNjg7XFxyXFxuXFx0bWFyZ2luOiA3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuXFx0MCUge1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlLFxcclxcblxcdCAgNzUlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXHJcXG5cXHR9XFxyXFxuXFx0NzglLFxcclxcblxcdCAgMTAwJSB7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG4gIH1cXHJcXG4gIC5pdGVtLTM6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWMzNjg7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogNjAwbXM7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0tNCB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmNTgzYTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWFkNjg7XFxyXFxuXFx0bWFyZ2luOiA3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuXFx0MCUge1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlLFxcclxcblxcdCAgNzUlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXHJcXG5cXHR9XFxyXFxuXFx0NzglLFxcclxcblxcdCAgMTAwJSB7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG4gIH1cXHJcXG4gIC5pdGVtLTQ6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWFkNjg7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogODAwbXM7XFxyXFxuXFx0dHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0tNSB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNmNTgzYTE7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZThjNjg7XFxyXFxuXFx0bWFyZ2luOiA3cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuXFx0MCUge1xcclxcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlLFxcclxcblxcdCAgNzUlIHtcXHJcXG5cXHQgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXHJcXG5cXHR9XFxyXFxuXFx0NzglLFxcclxcblxcdCAgMTAwJSB7XFxyXFxuXFx0ICBvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG4gIH1cXHJcXG4gIC5pdGVtLTU6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZThjNjg7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogMTAwMG1zO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9ncmVzcy1iYXIsXFxuLnByb2dyZXNzLWJhci1hbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdG1hcmdpbjogNXB4IDA7XFxuXFx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC1tb3otYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAgaW5zZXQsIDAgMXB4IDAgIzQ0NDtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwIGluc2V0LCAwIDFweCAwICM0NDQ7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAgaW5zZXQsIDAgMXB4IDAgIzQ0NDtcXG59XFxuXFxuLnByb2dyZXNzLWJhciBzcGFuLFxcbi5wcm9ncmVzcy1iYXItYWxsIHNwYW4ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSkgaW5zZXQ7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpIGluc2V0O1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSkgaW5zZXQ7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW1vei10cmFuc2l0aW9uOiB3aWR0aCAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW1zLXRyYW5zaXRpb246IHdpZHRoIC40cyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiB3aWR0aCAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYmx1ZSBzcGFuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjMmUzO1xcbn1cXG5cXG4ub3JhbmdlIHNwYW4ge1xcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogI2ZlY2YyMztcXG59ICAgICAgIFxcblxcbi5ncmVlbiBzcGFuIHtcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6ICNhNWRmNDE7XFxufVxcbi5zaGluZSBzcGFuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaGluZSBzcGFuOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4OyAgICAgICAgICAgICAgICAgICAgIFxcblxcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLXNoaW5lIDJzIGVhc2Utb3V0IGluZmluaXRlO1xcblxcdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlLXNoaW5lIDJzIGVhc2Utb3V0IGluZmluaXRlO1xcbn1cXG5cXG4uZ2xvdyBzcGFuIHtcXG5cXHQtbW96LWJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldCwgMCAtNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldDtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldCwgMCAtNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldDtcXG5cXHRib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQsIDAgLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQ7XFxuXFxuXFx0LXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtZ2xvdyAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXG5cXHQtbW96LWFuaW1hdGlvbjogYW5pbWF0ZS1nbG93IDFzIGVhc2Utb3V0IGluZmluaXRlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQ6ICNlOWY1Zjc7XFxyXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuXFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxufVxcclxcbi5jb250YWluZXJ7XFxyXFxuXFx0cGFkZGluZy10b3A6IDcwcHg7XFxyXFxuXFx0d2lkdGg6IDcwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRmb250LXNpemU6IDEuNXZ3O1xcclxcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXHJcXG59XFxyXFxuLyogLm1lbnUge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59ICovXFxyXFxuLmxpbmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uc2V0dGluZ3MsXFxyXFxuLmNoZWNrLWJveGVzIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyZWRkZWY1MjtcXHJcXG59XFxyXFxuLmNhcmQtaGlkZSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmRfaW1ne1xcclxcblxcdG1hcmdpbjogMjBweCBhdXRvO1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcmRfbWFpbi1pbnB1dHtcXHJcXG5cXHR3aWR0aDogOTUlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY2FyZF9waHJhc2UsXFxyXFxuLmNhcmRfcGhyYXNlLXRyYW5zbGF0ZSxcXHJcXG4uY2FyZF9tZWFuaW5nLFxcclxcbi5jYXJkX21lYW5pbmctdHJhbnNsYXRlLFxcclxcbi5jYXJkX3dvcmQtdHJhbnNjcmlwdGlvbixcXHJcXG4uZGlmZmljdWx0eV9idG5zLFxcclxcbi5jYXJkX3dvcmQtdHJhbnNsYXRlIHtcXHJcXG5cXHR3aWR0aDogOTUlO1xcclxcblxcdG1hcmdpbjogM3B4IGF1dG87XFxyXFxufVxcclxcbi53b3JkLWhpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmJ1dHRvbixcXHJcXG4ud29yZC1oaWRkZW5fYnRuIHtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzQyOWZhZmM5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIG1hcmdpbjogMHB4IDVweCA1cHg7XFxyXFxufVxcclxcbi53b3JkLWhpZGRlbl9idG4ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4ud29yZC1oaWRkZW5faW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0aGVpZ2h0OiAxLjFlbTtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG4uY2FyZF93b3JkLXRyYW5zbGF0ZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbi5tdWx0aS1jb2xvciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMHB4O1xcclxcblxcdGxlZnQ6IDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi5kaWZmaWN1bHR5X2J0bnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYmFycyB7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmJhcnMtaGlkZSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLm5vdGlmaWNhdGlvbiB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi5wYXJhMSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuLnBhcmEyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG4ucGFyYTMge1xcclxcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMycHgpIHtcXHJcXG5cXHQuY29udGFpbmVye1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0XFx0LyogZm9udC1zaXplOiAzLjV2dzsgKi9cXHJcXG5cXHR9XFxyXFxuXFx0LmNhcmRfd29yZC1oaWRkZW4ge1xcclxcblxcdFxcdHdpZHRoOiA4NSU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFx0LndvcmQtaGlkZGVuIHtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0fVxcclxcblxcdGJ1dHRvbntcXHJcXG5cXHRcXHRtYXJnaW46IDE1cHggNXB4IDVweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcdC5jb250YWluZXJ7XFxyXFxuXFx0XFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRcXHQvKiBmb250LXNpemU6IDR2dzsgKi9cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuaW1wb3J0ICcuL2xheW91dC9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL2xheW91dC9jc3MvaGVhZGVyLWZvb3Rlci5jc3MnO1xyXG5pbXBvcnQgJy4vbGF5b3V0L2Nzcy9wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgJy4vbGF5b3V0L2Nzcy9wcmVsb2FkZXIuY3NzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgYWRkQ2FyZEZpZWxkcywgYWRkVGV4dEV4YW1wbGVUcmFuc2xhdGVJbkNhcmQsXHJcbiAgYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQsIGFkZFdvcmRUcmFuc2xhdGVJbkNhcmQsXHJcbn0gZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9hZGQtZmllbGRzJztcclxuaW1wb3J0IHsgc2hvd0Z1bGxUZXh0RXhhbXBsZSwgc2hvd0Z1bGxUZXh0TWVhbmluZyB9IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvc2hvdy1mdWxsLXRleHQnO1xyXG5pbXBvcnQge1xyXG4gIHNob3dEaWZmaWN1bHR5QnRucywgaGlkZURpZmZpY3VsdHlCdG5zLCBzaG93QW5zd2VyQnRuLCBzaG93RGlmZmljdWx0V29yZEJ0biwgc2hvd0RlbGV0ZVdvcmRCdG4sXHJcbn0gZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9zaG93LWJ0bnMnO1xyXG5pbXBvcnQgeyBjbGVhckNhcmQsIHNob3dDYXJkIH0gZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9jbGVhci1mb3ItbG9hZGluZyc7XHJcblxyXG5pbXBvcnQgc2V0SW5wdXRXaWR0aCBmcm9tICcuL2xheW91dC9zY3JpcHRzL3NldC1pbnB1dC13aWR0aCc7XHJcbmltcG9ydCBhZGRNdWx0aUNvbG9yUmVzdWx0IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvbXVsdGktY29sb3ItcmVzdWx0JztcclxuXHJcbmltcG9ydCBjcmVhdGVXb3Jkc0FycmF5Rm9yVG9kYXkgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtd29yZHMtYXJyYXktZm9yLXRvZGF5JztcclxuXHJcbmltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2xheW91dC9zY3JpcHRzL2dldC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgY3JlYXRlT3JVcGRhdGVXb3JkIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvY3JlYXRlLW9yLXVwZGF0ZS13b3JkJztcclxuXHJcbmltcG9ydCBwcm9ncmVzcyBmcm9tICcuL2xheW91dC9zY3JpcHRzL3Byb2dyZXNzJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHNheVdvcmQgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9zYXknO1xyXG5cclxuY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG5jb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VlU2V0dGluZ3MoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncyh1c2VySWQsIHRva2VuKTtcclxuICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuY29uc3Qgc2V0dGluZ3MgPSBzZWVTZXR0aW5ncygpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXJyYXkoKSB7XHJcbiAgY29uc3Qgc2V0U2V0dGluZ3MgPSBhd2FpdCBzZXR0aW5ncztcclxuICBjb25zdCB3b3Jkc0FycmF5Rm9yVG9kYXkgPSBhd2FpdCBjcmVhdGVXb3Jkc0FycmF5Rm9yVG9kYXkoXHJcbiAgICBzZXRTZXR0aW5ncy53b3Jkc1BlckRheSwgc2V0U2V0dGluZ3Mub3B0aW9uYWwuY2FyZHNQZXJEYXksIHRva2VuLCB1c2VySWQsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyh3b3Jkc0FycmF5Rm9yVG9kYXkpO1xyXG4gIGNvbnN0IHNodWZsZWRXb3Jkc0FycmF5Rm9yVG9kYXkgPSB3b3Jkc0FycmF5Rm9yVG9kYXkuc29ydCgoYSwgYikgPT4gKGEuZ3JvdXAgPiBiLmdyb3VwID8gMSA6IC0xKSk7XHJcbiAgc2hvd0NhcmQoKTtcclxuICByZXR1cm4gc2h1ZmxlZFdvcmRzQXJyYXlGb3JUb2RheTtcclxufVxyXG5jb25zdCB3b3Jkc0FycmF5Rm9yVG9kYXkgPSBjcmVhdGVBcnJheSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRBcHAoKSB7XHJcbiAgY29uc3QgYXJyYXlPZldvcmRzID0gYXdhaXQgd29yZHNBcnJheUZvclRvZGF5O1xyXG5cclxuICBpZiAoYXJyYXlPZldvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcHJvZ3Jlc3ModG9rZW4sIHVzZXJJZCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHdvcmQgPSBhcnJheU9mV29yZHNbYXJyYXlPZldvcmRzLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc29sZS5sb2coYXJyYXlPZldvcmRzKTtcclxuICAgIGFwcCh3b3JkLCBhcnJheU9mV29yZHMpO1xyXG4gIH1cclxufVxyXG5jbGVhckNhcmQoKTtcclxuc3RhcnRBcHAoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIod29yZEluZm8sIGFycmF5T2ZXb3Jkcykge1xyXG4gIGNvbnN0IHNldFNldHRpbmdzID0gYXdhaXQgc2V0dGluZ3M7XHJcbiAgY29uc3QgaXNTb3VuZE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdW5kJykuY2hlY2tlZDtcclxuICBjb25zdCBpc1RyYW5zbGF0ZU9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0ZScpLmNoZWNrZWQ7XHJcbiAgY29uc3QgYXJyID0gYXJyYXlPZldvcmRzLnNsaWNlKDAsIGFycmF5T2ZXb3Jkcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dXb3Jkc1N0YXR1c0J1dHRvbnMgJiYgYXJyLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChpc1NvdW5kT24pIHtcclxuICAgICAgc2F5V29yZCh3b3JkSW5mbywgYXJyLCB1c2VySWQsIHRva2VuLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpZmZpY3VsdHlCdG5zKCk7XHJcbiAgICBjb25zdCBkaWZmM2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHR5XzNfYnRuJyk7XHJcbiAgICBkaWZmM2J0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQsICczJyk7XHJcbiAgICAgIGhpZGVEaWZmaWN1bHR5QnRucygpO1xyXG4gICAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlmZjJidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eV8yX2J0bicpO1xyXG4gICAgZGlmZjJidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCB0b2tlbiwgdXNlcklkLCAnMicpO1xyXG4gICAgICBoaWRlRGlmZmljdWx0eUJ0bnMoKTtcclxuICAgICAgYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpZmYxYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHlfMV9idG4nKTtcclxuICAgIGRpZmYxYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgdG9rZW4sIHVzZXJJZCwgJzEnKTtcclxuICAgICAgaGlkZURpZmZpY3VsdHlCdG5zKCk7XHJcbiAgICAgIGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaWZmMGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHR5XzBfYnRuJyk7XHJcbiAgICBkaWZmMGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQsICcwJyk7XHJcbiAgICAgIGhpZGVEaWZmaWN1bHR5QnRucygpO1xyXG4gICAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChpc1NvdW5kT24pIHtcclxuICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgdG9rZW4sIHVzZXJJZCk7XHJcbiAgICBzYXlXb3JkKHdvcmRJbmZvLCBhcnIsIHVzZXJJZCwgdG9rZW4sIHRydWUpO1xyXG4gIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgdG9rZW4sIHVzZXJJZCk7XHJcbiAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcclxuICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPT09IDApIHtcclxuICAgIHN0YXJ0QXBwKCk7XHJcbiAgfVxyXG4gIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0RXhhbXBsZSkgeyBzaG93RnVsbFRleHRFeGFtcGxlKHdvcmRJbmZvKTsgfVxyXG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0TWVhbmluZykgeyBzaG93RnVsbFRleHRNZWFuaW5nKHdvcmRJbmZvKTsgfVxyXG5cclxuICAgIGlmIChpc1RyYW5zbGF0ZU9uKSB7XHJcbiAgICAgIGFkZFdvcmRUcmFuc2xhdGVJbkNhcmQod29yZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzVHJhbnNsYXRlT24gJiYgc2V0U2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7XHJcbiAgICAgIGFkZFRleHRFeGFtcGxlVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKTtcclxuICAgIH1cclxuICAgIGlmIChpc1RyYW5zbGF0ZU9uICYmIHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0TWVhbmluZykge1xyXG4gICAgICBhZGRXb3JkTWVhbmluZ1RyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0lucHV0KHdvcmRJbmZvLCBhcnJheU9mV29yZHMpIHtcclxuICBjb25zdCB7IHdvcmQgfSA9IHdvcmRJbmZvO1xyXG5cclxuICBjb25zdCBtdWx0aUNvbG9yUmVzdWx0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdWx0aS1jb2xvcicpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtaGlkZGVuX2lucHV0Jyk7XHJcbiAgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgaWYgKHdvcmQgPT09IGlucHV0LnZhbHVlKSB7IC8vIEdPT0QgQU5TV0VSXHJcbiAgICBjb3JyZWN0QW5zd2VyKHdvcmRJbmZvLCBhcnJheU9mV29yZHMsIHRva2VuKTtcclxuICB9IGVsc2UgeyAvLyBCQUQgQU5TV0VSXHJcbiAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIHRva2VuLCB1c2VySWQsICczJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC52YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWVbaV07XHJcblxyXG4gICAgICBpZiAoaW5wdXQudmFsdWVbaV0gPT09IHdvcmRbaV0pIHtcclxuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIH1cclxuICAgICAgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIuYXBwZW5kKHNwYW4pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dC52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhcHAod29yZCwgYXJyYXlPZldvcmRzKSB7XHJcbiAgaWYgKGFycmF5T2ZXb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgIHN0YXJ0QXBwKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNhcmRNZWFuaW5nVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZy10cmFuc2xhdGUnKTtcclxuICAgIGNvbnN0IGNhcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UtdHJhbnNsYXRlJyk7XHJcbiAgICBjYXJkTWVhbmluZ1RyYW5zbGF0ZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY2FyZFRyYW5zbGF0ZS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGFkZENhcmRGaWVsZHMod29yZCwgdXNlcklkLCB0b2tlbik7XHJcbiAgICBzZXRJbnB1dFdpZHRoKHdvcmQpO1xyXG4gICAgYWRkTXVsdGlDb2xvclJlc3VsdCgpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtaGlkZGVuJyk7XHJcblxyXG5cclxuICAgIGlucHV0Lm9uc3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjaGVja0lucHV0KHdvcmQsIGFycmF5T2ZXb3Jkcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbG9yV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdWx0aS1jb2xvcicpO1xyXG4gICAgY29sb3JXcmFwcGVyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbG9yV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgY29sb3JXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRTZXR0aW5ncyA9IGF3YWl0IHNldHRpbmdzO1xyXG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dBbnN3ZXJCdXR0b24pIHtcclxuICAgICAgc2hvd0Fuc3dlckJ0bigpO1xyXG4gICAgICBjb25zdCBhbnN3ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyX2J0bicpO1xyXG4gICAgICBhbnN3ZXJCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb3JyZWN0QW5zd2VyKHdvcmQsIGFycmF5T2ZXb3JkcywgdG9rZW4pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dEZWxldGVCdXR0b24pIHtcclxuICAgICAgc2hvd0RlbGV0ZVdvcmRCdG4oKTtcclxuICAgICAgY29uc3QgZGVsZXRlV29yZGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVfYnRuJyk7XHJcbiAgICAgIGRlbGV0ZVdvcmRidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZC5pZCwgdG9rZW4sIHVzZXJJZCwgJy0xJyk7XHJcbiAgICAgICAgYXBwKGFycmF5T2ZXb3Jkc1thcnJheU9mV29yZHMubGVuZ3RoIC0gMl0sIGFycmF5T2ZXb3Jkcy5zbGljZSgwLCBhcnJheU9mV29yZHMubGVuZ3RoIC0gMSkpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dEaWZmaWN1bHRXb3Jkc0J1dHRvbikge1xyXG4gICAgICBzaG93RGlmZmljdWx0V29yZEJ0bigpO1xyXG4gICAgICBjb25zdCBkaWZmaWN1bHRXb3JkYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdF9idG4nKTtcclxuICAgICAgZGlmZmljdWx0V29yZGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkLmlkLCB0b2tlbiwgdXNlcklkLCAnMjAnKTtcclxuICAgICAgICBhcHAoYXJyYXlPZldvcmRzW2FycmF5T2ZXb3Jkcy5sZW5ndGggLSAyXSwgYXJyYXlPZldvcmRzLnNsaWNlKDAsIGFycmF5T2ZXb3Jkcy5sZW5ndGggLSAxKSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb2dyZXNzKHRva2VuLCB1c2VySWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXItZm9vdGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJlbG9hZGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZ3Jlc3MuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGdldFNldHRpbmdzIGZyb20gJy4vZ2V0LXNldHRpbmdzJztcblxuZnVuY3Rpb24gYWRkSW1nKHdvcmRJbmZvKSB7XG4gIGNvbnN0IGltYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX2ltZycpO1xuICBpbWFnZVdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGlmICh3b3JkSW5mby5pbWFnZS5sZW5ndGggPiAxMDApIHtcbiAgICBpbWcuc3JjID0gYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwke3dvcmRJbmZvLmltYWdlfWA7XG4gIH0gZWxzZSB7XG4gICAgaW1nLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3ZpcnNraWEvcnNsYW5nLWRhdGEvbWFzdGVyLyR7d29yZEluZm8uaW1hZ2V9YDtcbiAgfVxuICBpbWFnZVdyYXBwZXIuYXBwZW5kKGltZyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRleHRFeGFtcGxlSW5DYXJkKHdvcmRJbmZvKSB7XG4gIGNvbnN0IGNhcmRQaHJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UnKTtcbiAgY2FyZFBocmFzZS5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0RXhhbXBsZTtcblxuICBjb25zdCBjYXJkUGhyYXNlQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3BocmFzZSBiJyk7XG5cbiAgY2FyZFBocmFzZUIudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdbID8gXSc7XG4gIGNhcmRQaHJhc2VCLmFwcGVuZChzcGFuKTtcbn1cblxuZnVuY3Rpb24gYWRkV29yZE1lYW5pbmdJbkNhcmQod29yZEluZm8pIHtcbiAgY29uc3QgY2FyZE1lYW5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nJyk7XG4gIGNhcmRNZWFuaW5nLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRNZWFuaW5nO1xuXG4gIGNvbnN0IGNhcmRNZWFuaW5nSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX21lYW5pbmcgaScpO1xuICBjYXJkTWVhbmluZ0kudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ1sgPyBdJztcbiAgc3Bhbi5zdHlsZS5mb250U3R5bGUgPSAnbm9ybWFsJztcbiAgc3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICBjYXJkTWVhbmluZ0kuYXBwZW5kKHNwYW4pO1xufVxuXG5mdW5jdGlvbiBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKSB7XG4gIGNvbnN0IHdvcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLXRyYW5zbGF0ZScpO1xuICB3b3JkVHJhbnNsYXRlLnRleHRDb250ZW50ID0gd29yZEluZm8ud29yZFRyYW5zbGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkV29yZFRyYW5zY3JpcHRpb25JbkNhcmQod29yZEluZm8pIHtcbiAgY29uc3Qgd29yZFRyYW5zY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLXRyYW5zY3JpcHRpb24nKTtcbiAgd29yZFRyYW5zY3JpcHRpb24udGV4dENvbnRlbnQgPSB3b3JkSW5mby50cmFuc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbykge1xuICBjb25zdCBjYXJkVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfcGhyYXNlLXRyYW5zbGF0ZScpO1xuICBjYXJkVHJhbnNsYXRlLnRleHRDb250ZW50ID0gd29yZEluZm8udGV4dEV4YW1wbGVUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKSB7XG4gIGNvbnN0IGNhcmRNZWFuaW5nVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZy10cmFuc2xhdGUnKTtcbiAgY2FyZE1lYW5pbmdUcmFuc2xhdGUudGV4dENvbnRlbnQgPSB3b3JkSW5mby50ZXh0TWVhbmluZ1RyYW5zbGF0ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRkQ2FyZEZpZWxkcyh3b3JkLCB1c2VySWQsIHRva2VuKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XG5cbiAgaWYgKHNldHRpbmdzLm9wdGlvbmFsLnNob3dJbWFnZSkge1xuICAgIGFkZEltZyh3b3JkKTtcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dEV4YW1wbGUpIHtcbiAgICBhZGRUZXh0RXhhbXBsZUluQ2FyZCh3b3JkKTtcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHtcbiAgICBhZGRXb3JkTWVhbmluZ0luQ2FyZCh3b3JkKTtcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VHJhbnNsYXRpb24pIHtcbiAgICBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmQpO1xuICB9XG5cbiAgaWYgKHNldHRpbmdzLm9wdGlvbmFsLnNob3dUcmFuc2NyaXB0aW9uKSB7XG4gICAgYWRkV29yZFRyYW5zY3JpcHRpb25JbkNhcmQod29yZCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgYWRkQ2FyZEZpZWxkcywgYWRkVGV4dEV4YW1wbGVUcmFuc2xhdGVJbkNhcmQsXG4gIGFkZFdvcmRNZWFuaW5nVHJhbnNsYXRlSW5DYXJkLCBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkLFxufTtcbiIsImZ1bmN0aW9uIGFkZE5vdGlmaWNhdGlvbigpIHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcblxuICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYTEuY2xhc3NMaXN0LmFkZCgncGFyYTEnKTtcbiAgcGFyYTEudGV4dENvbnRlbnQgPSAnQ29uZ3JhdHVsYXRpb25zISc7XG5cbiAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEyLmNsYXNzTGlzdC5hZGQoJ3BhcmEyJyk7XG4gIHBhcmEyLnRleHRDb250ZW50ID0gXCJUaGF0J3MgYWxsIGZvciB0b2RheS5cIjtcblxuICBjb25zdCBwYXJhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYTMuY2xhc3NMaXN0LmFkZCgncGFyYTMnKTtcbiAgcGFyYTMudGV4dENvbnRlbnQgPSAnVGhlcmUgYXJlIHN0aWxsIG5ldyBjYXJkcywgYnV0IHRoZSBkYWlseSBsaW1pdCBoYXMgYmVlbiByZWFjaGVkLiBZb3UgY2FuIGluY3JlYXNlIHRoZSBsaW1pdCBpbiB0aGUgc2V0dGluZ3MsIGJ1dCBwbGVhc2Uga2VlcCBpbiBtaW5kIHRoYXQgdGhlIG1vcmUgbmV3IGNhcmRzIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSB3aWxsIG5lZWQgdG8gcmVwZWF0IGluIHRoZSBuZWFyIGZ1dHVyZSc7XG4gIG5vdGlmaWNhdGlvbldyYXBwZXIuYXBwZW5kKHBhcmExLCBwYXJhMiwgcGFyYTMpO1xuXG4gIGNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgY2FyZFdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkTm90aWZpY2F0aW9uO1xuIiwiZnVuY3Rpb24gY2xlYXJDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycycpO1xyXG4gIGJhcnMuY2xhc3NMaXN0LmFkZCgnYmFycy1oaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycycpO1xyXG4gIGJhcnMuY2xhc3NMaXN0LnJlbW92ZSgnYmFycy1oaWRlJyk7XHJcblxyXG4gIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXItY29udGFpbmVyJyk7XHJcbiAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlci1oaWRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFyQ2FyZCwgc2hvd0NhcmQgfTtcclxuIiwiaW1wb3J0IGdldFVzZXJXb3JkQnlJZCBmcm9tICcuL2dldC11c2VyLXdvcmQtYnktaWQnO1xuaW1wb3J0IGNyZWF0ZVVzZXJXb3JkIGZyb20gJy4vY3JlYXRlLXVzZXItd29yZCc7XG5pbXBvcnQgdXBkYXRlVXNlcldvcmQgZnJvbSAnLi91cGRhdGUtdXNlci13b3JkJztcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJZCwgdG9rZW4sIHVzZXJJZCwgZGlmZikge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB1c2VyV29yZCA9IGF3YWl0IGdldFVzZXJXb3JkQnlJZCh0b2tlbiwgd29yZElkLCB1c2VySWQpO1xuICBpZiAodXNlcldvcmQgIT09IG51bGwpIHtcbiAgICBjb25zdCB3b3JkRmlyc3RUaW1lID0gdXNlcldvcmQub3B0aW9uYWwuZmlyc3RUaW1lO1xuICAgIGNvbnN0IGN1cnJlbnRXb3JkRGlmZmljdWx0eSA9IHVzZXJXb3JkLmRpZmZpY3VsdHk7XG4gICAgdXBkYXRlVXNlcldvcmQoe1xuICAgICAgdXNlcklkLFxuICAgICAgdG9rZW4sXG4gICAgICB3b3JkSWQ6IHVzZXJXb3JkLndvcmRJZCxcbiAgICAgIHdvcmQ6IHtcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZiB8fCBTdHJpbmcoK2N1cnJlbnRXb3JkRGlmZmljdWx0eSAtIDEpLFxuICAgICAgICBvcHRpb25hbDogeyBmaXJzdFRpbWU6IHdvcmRGaXJzdFRpbWUsIGxhc3RUaW1lOiBub3cuZ2V0VGltZSgpIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZVVzZXJXb3JkKHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHRva2VuLFxuICAgICAgd29yZElkLFxuICAgICAgd29yZDogeyBkaWZmaWN1bHR5OiBkaWZmIHx8ICcwJywgb3B0aW9uYWw6IHsgZmlyc3RUaW1lOiBub3cuZ2V0VGltZSgpLCBsYXN0VGltZTogbm93LmdldFRpbWUoKSB9IH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JVcGRhdGVXb3JkO1xuIiwiY29uc3QgY3JlYXRlVXNlcldvcmQgPSBhc3luYyAoe1xuICB1c2VySWQsIHRva2VuLCB3b3JkSWQsIHdvcmQsXG59KSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdvcmQpLFxuICB9KTtcbiAgY29uc3QgbmV3V29yZCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gbmV3V29yZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZXJXb3JkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IGdldFVzZXJXb3JkcyBmcm9tICcuL2dldC11c2VyLXdvcmRzJztcbmltcG9ydCBnZXRSYW5kb21Xb3JkIGZyb20gJy4vZ2V0LXJhbmRvbS13b3JkJztcbmltcG9ydCBnZXRXb3JkQnlJZCBmcm9tICcuL2dldC13b3JkLWJ5LWlkJztcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV29yZHNBcnJheUZvclRvZGF5KG5ld1dvcmRzLCBtYXhDYXJkcywgdG9rZW4sIHVzZXJJZCkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBhbGxVc2VyV29kcyA9IGF3YWl0IGdldFVzZXJXb3Jkcyh0b2tlbiwgdXNlcklkKTtcbiAgY29uc3Qgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzID0gYWxsVXNlcldvZHMuc29ydCgoYSwgYikgPT4gKGEub3B0aW9uYWwubGFzdFRpbWUgPCBiLm9wdGlvbmFsLmxhc3RUaW1lID8gMSA6IC0xKSk7XG4gIGxldCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSA9IDA7XG4gIGxldCBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsYXN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5sYXN0VGltZSAtIDQgKiAzNjAwICogMTAwMCk7XG4gICAgY29uc3QgZm91ckhvdXJzRWFybGllciA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJzMnXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xuICAgICAgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgKz0gMTtcbiAgICB9XG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcbiAgICAvLyAgIGJyZWFrO1xuICAgIC8vIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGZpcnN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5maXJzdFRpbWUgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcbiAgICBpZiAoZmlyc3RSZXBlYXRUaW1lLmdldERhdGUoKSA9PT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKClcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnMydcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnLTEnKSB7XG4gICAgICBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSArPSAxO1xuICAgIH1cbiAgICAvLyAgZWxzZSBpZiAobGFzdFJlcGVhdFRpbWUuZ2V0RGF0ZSgpICE9PSBmb3VySG91cnNFYXJsaWVyLmdldERhdGUoKSkge1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gfVxuICB9XG5cbiAgY29uc3QgYXJyYXlPZldvcmRzRm9yVG9kYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1dvcmRzIC0gYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXk7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbVdvcmQgPSBnZXRSYW5kb21Xb3JkKCk7XG4gICAgYXJyYXlPZldvcmRzRm9yVG9kYXkucHVzaChyYW5kb21Xb3JkKTtcbiAgfVxuXG4gIGNvbnN0IGRpZmZpY3VsdDNVc2VyV29yZHMgPSBhbGxVc2VyV29kcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmRpZmZpY3VsdHkgPiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmaWN1bHQzVXNlcldvcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycmF5T2ZXb3Jkc0ZvclRvZGF5Lmxlbmd0aCA8IG1heENhcmRzIC0gYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkpIHtcbiAgICAgIGNvbnN0IGRpZmZpY3VsdFVzZXJXb3JkID0gZ2V0V29yZEJ5SWQoZGlmZmljdWx0M1VzZXJXb3Jkc1tpXS53b3JkSWQpO1xuICAgICAgYXJyYXlPZldvcmRzRm9yVG9kYXkucHVzaChkaWZmaWN1bHRVc2VyV29yZCk7XG4gICAgfSBlbHNlIGlmIChhcnJheU9mV29yZHNGb3JUb2RheS5sZW5ndGggPj0gbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlmZmljdWx0MlVzZXJXb3JkcyA9IGFsbFVzZXJXb2RzLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uZGlmZmljdWx0eSA9PT0gMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0MlVzZXJXb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheU9mV29yZHNGb3JUb2RheS5sZW5ndGggPCBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5XG4gICAgICAmJiAobm93LmdldFRpbWUoKSAtIGRpZmZpY3VsdDJVc2VyV29yZHNbaV0ub3B0aW9uYWwubGFzdFRpbWUpIC8gNjAwMDAgLyA2MCA+IDIyIC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSAyMiDRh9Cw0YHQvtCyINC90LUg0L/QvtCy0YLQvtGA0Y/Qu9C+0YHRjFxuICAgICAgJiYgZGlmZmljdWx0MlVzZXJXb3Jkc1tpXS53b3JkSWQgIT09ICc1ZWZlMzRlMzYzNWFlYzAwMTc2NGQ3MjUnKSB7IC8vINCz0LvRjtC6XG4gICAgICBjb25zdCBub3RFYXN5VXNlcldvcmQgPSBnZXRXb3JkQnlJZChkaWZmaWN1bHQyVXNlcldvcmRzW2ldLndvcmRJZCk7XG4gICAgICBhcnJheU9mV29yZHNGb3JUb2RheS5wdXNoKG5vdEVhc3lVc2VyV29yZCk7XG4gICAgfSBlbHNlIGlmIChhcnJheU9mV29yZHNGb3JUb2RheS5sZW5ndGggPj0gbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlmZmljdWx0MVVzZXJXb3JkcyA9IGFsbFVzZXJXb2RzLmZpbHRlcigoaXRlbSkgPT4gK2l0ZW0uZGlmZmljdWx0eSA9PT0gMSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0MVVzZXJXb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheU9mV29yZHNGb3JUb2RheS5sZW5ndGggPCBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5XG4gICAgICAmJiAobm93LmdldFRpbWUoKSAtIGRpZmZpY3VsdDFVc2VyV29yZHNbaV0ub3B0aW9uYWwubGFzdFRpbWUpIC8gNjAwMDAgLyA2MCA+IDcwKSB7IC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSA3MCDRh9Cw0YHQvtCyINC90LUg0L/QvtCy0YLQvtGA0Y/Qu9C+0YHRjFxuICAgICAgY29uc3QgZWFzeVVzZXJXb3JkID0gZ2V0V29yZEJ5SWQoZGlmZmljdWx0MVVzZXJXb3Jkc1tpXS53b3JkSWQpO1xuICAgICAgYXJyYXlPZldvcmRzRm9yVG9kYXkucHVzaChlYXN5VXNlcldvcmQpO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoID49IG1heENhcmRzIC0gYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKGFycmF5T2ZXb3Jkc0ZvclRvZGF5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV29yZHNBcnJheUZvclRvZGF5O1xuIiwiY29uc3QgZ2V0UmFuZG9tV29yZCA9IGFzeW5jICh3b3JkcykgPT4ge1xuICBjb25zdCByYW5kb21Hcm91cCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICBjb25zdCByYW5kb21QYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApO1xuICBjb25zdCByYW5kb21Xb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApO1xuXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vd29yZHM/cGFnZT0ke3JhbmRvbVBhZ2V9Jmdyb3VwPSR7cmFuZG9tR3JvdXB9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkod29yZHMpLFxuICB9KTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gY29udGVudFtyYW5kb21Xb3JkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbVdvcmQ7XG4iLCJjb25zdCBnZXRTZXR0aW5ncyA9IGFzeW5jICh1c2VySWQsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3NldHRpbmdzYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZXR0aW5ncztcbiIsImNvbnN0IGdldFVzZXJXb3JkQnlJZCA9IGFzeW5jICh0b2tlbiwgd29yZElkLCB1c2VySWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGw7IC8vIG5vIHdvcmRcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlcldvcmRCeUlkO1xuIiwiY29uc3QgZ2V0VXNlcldvcmRzID0gYXN5bmMgKHRva2VuLCB1c2VySWQpID0+IHtcbiAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hZnRlcm5vb24tZmFsbHMtMjU4OTQuaGVyb2t1YXBwLmNvbS91c2Vycy8ke3VzZXJJZH0vd29yZHNgLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgYWxsV29yZHMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbFdvcmRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlcldvcmRzO1xuIiwiY29uc3QgZ2V0V29yZEJ5SWQgPSBhc3luYyAod29yZElkKSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vd29yZHMvJHt3b3JkSWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuICAvLyA1ZWZlMzRlMzYzNWFlYzAwMTc2NGQ3MjUgIC0g0LPQu9GO0YfQvdC+0LUg0YHQu9C+0LLQvlxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdvcmRCeUlkO1xuIiwiZnVuY3Rpb24gYWRkTXVsdGlDb2xvclJlc3VsdCgpIHtcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLWhpZGRlbicpO1xuICBpbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgY29uc3QgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbXVsdGktY29sb3InKTtcblxuICBpbnB1dENvbnRhaW5lci5hcHBlbmQobXVsdGlDb2xvclJlc3VsdFdyYXBwZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRNdWx0aUNvbG9yUmVzdWx0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IGdldFVzZXJXb3JkcyBmcm9tICcuL2dldC11c2VyLXdvcmRzJztcbmltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2dldC1zZXR0aW5ncyc7XG5pbXBvcnQgYWRkTm90aWZpY2F0aW9uIGZyb20gJy4vYWRkLW5vdGlmaWNhdGlvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2dyZXNzKHRva2VuLCB1c2VySWQpIHtcbiAgY29uc3QgYWxsVXNlcldvZHMgPSBhd2FpdCBnZXRVc2VyV29yZHModG9rZW4sIHVzZXJJZCk7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3Qgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzID0gYWxsVXNlcldvZHMuc29ydCgoYSwgYikgPT4gKGEub3B0aW9uYWwubGFzdFRpbWUgPCBiLm9wdGlvbmFsLmxhc3RUaW1lID8gMSA6IC0xKSk7XG4gIGxldCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSA9IDA7XG4gIGxldCBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsYXN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5sYXN0VGltZSAtIDQgKiAzNjAwICogMTAwMCk7XG4gICAgY29uc3QgZm91ckhvdXJzRWFybGllciA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJzMnXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xuICAgICAgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgKz0gMTtcbiAgICB9XG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcbiAgICAvLyAgIGJyZWFrO1xuICAgIC8vIH1cbiAgfVxuICBjb25zdCBiYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWFsbCBzcGFuJyk7XG4gIGJhckFsbC5zdHlsZS53aWR0aCA9IGAkeyhhbHJlZHlMZWFybmVkV29yZHNUb2RheSAvIHNldHRpbmdzLm9wdGlvbmFsLmNhcmRzUGVyRGF5KSAqIDEwMH0lYDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGZpcnN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5maXJzdFRpbWUgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcbiAgICBpZiAoZmlyc3RSZXBlYXRUaW1lLmdldERhdGUoKSA9PT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKClcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnMydcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnLTEnKSB7XG4gICAgICBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSArPSAxO1xuICAgIH1cbiAgICAvLyAgZWxzZSBpZiAobGFzdFJlcGVhdFRpbWUuZ2V0RGF0ZSgpICE9PSBmb3VySG91cnNFYXJsaWVyLmdldERhdGUoKSkge1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gfVxuICB9XG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXIgc3BhbicpO1xuICBiYXIuc3R5bGUud2lkdGggPSBgJHsoYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXkgLyBzZXR0aW5ncy53b3Jkc1BlckRheSkgKiAxMDB9JWA7XG5cbiAgaWYgKGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5IC8gc2V0dGluZ3Mub3B0aW9uYWwuY2FyZHNQZXJEYXkgPj0gMSkge1xuICAgIGFkZE5vdGlmaWNhdGlvbigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyZXNzO1xuIiwiaW1wb3J0IGdldFNldHRpbmdzIGZyb20gJy4vZ2V0LXNldHRpbmdzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vaW5kZXgnO1xuXG5jb25zdCB2b2ljZUF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyk7XG5jb25zdCB2b2ljZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8tZXhhbXBsZScpO1xuY29uc3Qgdm9pY2VNZWFuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvLW1lYW5pbmcnKTtcblxuZnVuY3Rpb24gc2F5TWVhbmluZyh3b3JkLCBhcnIsIHJ1bkFwcCkge1xuICBpZiAod29yZC5hdWRpb01lYW5pbmcubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VNZWFuaW5nLnNyYyA9IGBkYXRhOmF1ZGlvL21wZWc7YmFzZTY0LCR7d29yZC5hdWRpb01lYW5pbmd9YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZU1lYW5pbmcuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdmlyc2tpYS9yc2xhbmctZGF0YS9tYXN0ZXIvJHt3b3JkLmF1ZGlvTWVhbmluZ31gO1xuICB9XG4gIHZvaWNlTWVhbmluZy5wbGF5KCk7XG4gIGlmIChydW5BcHApIHtcbiAgICB2b2ljZU1lYW5pbmcub25lbmRlZCA9ICgpID0+IGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNheUV4YW1wbGUod29yZCwgdXNlcklkLCB0b2tlbiwgYXJyLCBydW5BcHApIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncyh1c2VySWQsIHRva2VuKTtcblxuICBpZiAod29yZC5hdWRpb0V4YW1wbGUubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VFeGFtcGxlLnNyYyA9IGBkYXRhOmF1ZGlvL21wZWc7YmFzZTY0LCR7d29yZC5hdWRpb0V4YW1wbGV9YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZUV4YW1wbGUuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdmlyc2tpYS9yc2xhbmctZGF0YS9tYXN0ZXIvJHt3b3JkLmF1ZGlvRXhhbXBsZX1gO1xuICB9XG4gIHZvaWNlRXhhbXBsZS5wbGF5KCk7XG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHtcbiAgICB2b2ljZUV4YW1wbGUub25lbmRlZCA9ICgpID0+IHNheU1lYW5pbmcod29yZCwgYXJyLCBydW5BcHApO1xuICB9IGVsc2UgaWYgKHJ1bkFwcCkge1xuICAgIHZvaWNlRXhhbXBsZS5vbmVuZGVkID0gKCkgPT4gYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNheVdvcmQod29yZCwgYXJyLCB1c2VySWQsIHRva2VuLCBydW5BcHAgPSB0cnVlKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XG5cbiAgaWYgKHdvcmQuYXVkaW8ubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VBdWRpby5zcmMgPSBgZGF0YTphdWRpby9tcGVnO2Jhc2U2NCwke3dvcmQuYXVkaW99YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZUF1ZGlvLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3ZpcnNraWEvcnNsYW5nLWRhdGEvbWFzdGVyLyR7d29yZC5hdWRpb31gO1xuICB9XG4gIHZvaWNlQXVkaW8ucGxheSgpO1xuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gc2F5RXhhbXBsZSh3b3JkLCB1c2VySWQsIHRva2VuLCBhcnIsIHJ1bkFwcCk7XG4gIH0gZWxzZSBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRNZWFuaW5nKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gc2F5TWVhbmluZyh3b3JkLCBhcnIsIHJ1bkFwcCk7XG4gIH0gZWxzZSBpZiAocnVuQXBwKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F5V29yZDtcbiIsImZ1bmN0aW9uIHNldElucHV0V2lkdGgod29yZCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhpZGRlbl9pbnB1dCcpO1xuICBpbnB1dC5zdHlsZS53aWR0aCA9IGAke3dvcmQud29yZC5sZW5ndGggLyAxLjV9ZW1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRJbnB1dFdpZHRoO1xuIiwiZnVuY3Rpb24gc2hvd0RpZmZpY3VsdHlCdG5zKCkge1xuICBjb25zdCBidG5zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmaWN1bHR5X2J0bnMnKTtcbiAgaWYgKGJ0bnNXcmFwcGVyLmlubmVySFRNTCA9PT0gJycpIHtcbiAgICBjb25zdCBkaWZmaWN1bHR5M2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRpZmZpY3VsdHkzYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0eV8zX2J0bicpO1xuICAgIGRpZmZpY3VsdHkzYnRuLnRleHRDb250ZW50ID0gJ0FnYWluJztcblxuICAgIGNvbnN0IGRpZmZpY3VsdHkyYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGlmZmljdWx0eTJidG4uc2V0QXR0cmlidXRlKCdpZCcsICdkaWZmaWN1bHR5XzJfYnRuJyk7XG4gICAgZGlmZmljdWx0eTJidG4udGV4dENvbnRlbnQgPSAnSGFyZCc7XG5cbiAgICBjb25zdCBkaWZmaWN1bHR5MWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRpZmZpY3VsdHkxYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0eV8xX2J0bicpO1xuICAgIGRpZmZpY3VsdHkxYnRuLnRleHRDb250ZW50ID0gJ05vcm1hbCc7XG5cbiAgICBjb25zdCBkaWZmaWN1bHR5MGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRpZmZpY3VsdHkwYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0eV8wX2J0bicpO1xuICAgIGRpZmZpY3VsdHkwYnRuLnRleHRDb250ZW50ID0gJ0Vhc3knO1xuXG4gICAgYnRuc1dyYXBwZXIuYXBwZW5kKGRpZmZpY3VsdHkzYnRuLCBkaWZmaWN1bHR5MmJ0biwgZGlmZmljdWx0eTFidG4sIGRpZmZpY3VsdHkwYnRuKTtcbiAgfVxuICByZXR1cm4gYnRuc1dyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGhpZGVEaWZmaWN1bHR5QnRucygpIHtcbiAgY29uc3QgYnRuc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eV9idG5zJyk7XG4gIGJ0bnNXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNob3dBbnN3ZXJCdG4oKSB7XG4gIGNvbnN0IHNob3dBbnN3ZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlcl9idG4nKTtcbiAgc2hvd0Fuc3dlcldyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCBzaG93QW5zd2VyYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNob3dBbnN3ZXJidG4uc2V0QXR0cmlidXRlKCdpZCcsICdhbnN3ZXJfYnRuJyk7XG4gIHNob3dBbnN3ZXJidG4udGV4dENvbnRlbnQgPSAnU2hvdyBBbnN3ZXInO1xuICBzaG93QW5zd2VyV3JhcHBlci5hcHBlbmQoc2hvd0Fuc3dlcmJ0bik7XG59XG5cbmZ1bmN0aW9uIHNob3dEaWZmaWN1bHRXb3JkQnRuKCkge1xuICBjb25zdCBzaG93RGlmZmljdWx0V29yZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0X2J0bicpO1xuICBzaG93RGlmZmljdWx0V29yZFdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCBzaG93RGlmZmljdWx0V29yZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzaG93RGlmZmljdWx0V29yZGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdF9idG4nKTtcbiAgc2hvd0RpZmZpY3VsdFdvcmRidG4udGV4dENvbnRlbnQgPSAnTWFyayBhcyBcImRpZmZpY3VsdFwiJztcbiAgc2hvd0RpZmZpY3VsdFdvcmRXcmFwcGVyLmFwcGVuZChzaG93RGlmZmljdWx0V29yZGJ0bik7XG59XG5cbmZ1bmN0aW9uIHNob3dEZWxldGVXb3JkQnRuKCkge1xuICBjb25zdCBzaG93RGVsZXRlV29yZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlX2J0bicpO1xuICBzaG93RGVsZXRlV29yZFdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCBzaG93RGVsZXRlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNob3dEZWxldGVidG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVfYnRuJyk7XG4gIHNob3dEZWxldGVidG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgc2hvd0RlbGV0ZVdvcmRXcmFwcGVyLmFwcGVuZChzaG93RGVsZXRlYnRuKTtcbn1cblxuZXhwb3J0IHtcbiAgc2hvd0RpZmZpY3VsdHlCdG5zLCBoaWRlRGlmZmljdWx0eUJ0bnMsIHNob3dBbnN3ZXJCdG4sIHNob3dEaWZmaWN1bHRXb3JkQnRuLCBzaG93RGVsZXRlV29yZEJ0bixcbn07XG4iLCJmdW5jdGlvbiBzaG93RnVsbFRleHRFeGFtcGxlKHdvcmRJbmZvKSB7XG4gIGNvbnN0IGV4YW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UnKTtcbiAgZXhhbXBsZS5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0RXhhbXBsZTtcbn1cblxuZnVuY3Rpb24gc2hvd0Z1bGxUZXh0TWVhbmluZyh3b3JkSW5mbykge1xuICBjb25zdCBtZWFuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZycpO1xuICBtZWFuaW5nLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRNZWFuaW5nO1xufVxuXG5leHBvcnQgeyBzaG93RnVsbFRleHRFeGFtcGxlLCBzaG93RnVsbFRleHRNZWFuaW5nIH07XG4iLCJjb25zdCB1cGRhdGVVc2VyV29yZCA9IGFzeW5jICh7XG4gIHVzZXJJZCwgdG9rZW4sIHdvcmRJZCwgd29yZCxcbn0pID0+IHtcbiAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hZnRlcm5vb24tZmFsbHMtMjU4OTQuaGVyb2t1YXBwLmNvbS91c2Vycy8ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3b3JkKSxcbiAgfSk7XG4gIGNvbnN0IHVwZGF0ZWRXb3JkID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB1cGRhdGVkV29yZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVVzZXJXb3JkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==