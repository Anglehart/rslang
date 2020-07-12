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
exports.push([module.i, "* {\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground: #e9f5f7;\r\n\t/* position: relative; */\r\n    width: 100vw;\r\n\theight: 100vh; \r\n\tcolor: #000;\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tcolor: rgba(0, 0, 0, 0.54);\r\n}\r\n.container{\r\n\twidth: 70%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tfont-size: 1.5vw;\r\n}\r\n/* .menu {\r\n\twidth: 45%;\r\n\tfont-weight: 600;\r\n} */\r\n.link {\r\n\tbackground-color: inherit;\r\n    padding: 1rem;\r\n    border: none;\r\n    margin: 0 0.5rem 0 0.5rem;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.menu,\r\n.check-boxes {\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\twidth: 45%;\r\n}\r\n.card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    margin: 0 auto 10px;\r\n    text-align: center;\r\n    font-family: arial;\r\n    border-radius: 20px;\r\n    background: #2eddef52;\r\n}\r\n.card_img{\r\n\tmargin: 20px auto;\r\n}\r\n\r\n.card_main-input{\r\n\twidth: 95%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.card_phrase,\r\n.card_phrase-translate,\r\n.card_meaning,\r\n.card_meaning-translate,\r\n.card_word-transcription,\r\n.difficulty_btns,\r\n.card_word-translate {\r\n\twidth: 95%;\r\n\tmargin: 3px auto;\r\n}\r\n.word-hidden {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\nbutton,\r\n.word-hidden_btn {\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    background-color: inherit;\r\n    padding: 0.1em 0.4em;\r\n    border-radius: 20px;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 1.2rem;\r\n    background: #429fafc9;\r\n    font-weight: 600;\r\n}\r\nbutton{\r\n    margin: 0px 5px 5px;\r\n}\r\n.word-hidden_btn {\r\n\tmargin-left: 10px;\r\n}\r\n.word-hidden_input {\r\n\tfont-size: 1.5em;\r\n\theight: 1.1em;\r\n\tfont-weight: normal;\r\n}\r\n.card_word-translate {\r\n\tfont-size: 1.5rem;\r\n}\r\n.multi-color {\r\n\tposition: absolute; \r\n\tbottom: 0px;\r\n\tleft: 2px;\r\n\tfont-size: 1.5em;\r\n\tfont-weight: normal;\r\n}\r\n.difficulty_btns {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\t.container{\r\n\t\twidth: 95%;\r\n\t\t/* font-size: 3.5vw; */\r\n\t}\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\t.container{\r\n\t\twidth: 98%;\r\n\t\t/* font-size: 4vw; */\r\n\t}\r\n} ", ""]);
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
/* harmony import */ var _layout_css_progress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/css/progress.css */ "./src/layout/css/progress.css");
/* harmony import */ var _layout_css_progress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css_progress_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/scripts/add-fields */ "./src/layout/scripts/add-fields.js");
/* harmony import */ var _layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/scripts/show-full-text */ "./src/layout/scripts/show-full-text.js");
/* harmony import */ var _layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/scripts/show-btns */ "./src/layout/scripts/show-btns.js");
/* harmony import */ var _layout_scripts_set_input_width__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/scripts/set-input-width */ "./src/layout/scripts/set-input-width.js");
/* harmony import */ var _layout_scripts_multi_color_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/scripts/multi-color-result */ "./src/layout/scripts/multi-color-result.js");
/* harmony import */ var _layout_scripts_create_words_array_for_today__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/scripts/create-words-array-for-today */ "./src/layout/scripts/create-words-array-for-today.js");
/* harmony import */ var _layout_scripts_add_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/scripts/add-notification */ "./src/layout/scripts/add-notification.js");
/* harmony import */ var _layout_scripts_get_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/scripts/get-settings */ "./src/layout/scripts/get-settings.js");
/* harmony import */ var _layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/scripts/create-or-update-word */ "./src/layout/scripts/create-or-update-word.js");
/* harmony import */ var _layout_scripts_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/scripts/progress */ "./src/layout/scripts/progress.js");
/* harmony import */ var _layout_scripts_say__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/scripts/say */ "./src/layout/scripts/say.js");
/* harmony import */ var _layout_scripts_login_test__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/scripts/login-test */ "./src/layout/scripts/login-test.js");



/* eslint-disable no-use-before-define */











 // eslint-disable-next-line import/no-cycle



var userId = '5eefa4639896e10017eea40c';

function getToken() {
  return _getToken.apply(this, arguments);
}

function _getToken() {
  _getToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_layout_scripts_login_test__WEBPACK_IMPORTED_MODULE_15__["default"])({
              email: 'team17@mail.ru',
              password: 'RsSchool2020!'
            });

          case 2:
            token = _context2.sent;
            return _context2.abrupt("return", token.token);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getToken.apply(this, arguments);
}

var token = getToken();

function seeSettings() {
  return _seeSettings.apply(this, arguments);
}

function _seeSettings() {
  _seeSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var myToken, settings;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return token;

          case 2:
            myToken = _context3.sent;
            _context3.next = 5;
            return Object(_layout_scripts_get_settings__WEBPACK_IMPORTED_MODULE_11__["default"])(userId, myToken);

          case 5:
            settings = _context3.sent;
            return _context3.abrupt("return", settings);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _seeSettings.apply(this, arguments);
}

var settings = seeSettings();

function createArray() {
  return _createArray.apply(this, arguments);
}

function _createArray() {
  _createArray = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var myToken, setSettings, wordsArrayForToday, shufledWordsArrayForToday;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return token;

          case 2:
            myToken = _context4.sent;
            _context4.next = 5;
            return settings;

          case 5:
            setSettings = _context4.sent;
            console.log('settings: ', setSettings);
            _context4.next = 9;
            return Object(_layout_scripts_create_words_array_for_today__WEBPACK_IMPORTED_MODULE_9__["default"])(setSettings.wordsPerDay, setSettings.optional.cardsPerDay, myToken, userId);

          case 9:
            wordsArrayForToday = _context4.sent;
            shufledWordsArrayForToday = wordsArrayForToday.sort(function (a, b) {
              return a.group > b.group ? 1 : -1;
            });
            console.log(shufledWordsArrayForToday);
            return _context4.abrupt("return", shufledWordsArrayForToday);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createArray.apply(this, arguments);
}

var wordsArrayForToday = createArray();

function startApp() {
  return _startApp.apply(this, arguments);
}

function _startApp() {
  _startApp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var arrayOfWords, myToken, word;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return wordsArrayForToday;

          case 2:
            arrayOfWords = _context5.sent;
            _context5.next = 5;
            return token;

          case 5:
            myToken = _context5.sent;

            if (arrayOfWords.length === 0) {// addNotification();
            } else {
              word = arrayOfWords[arrayOfWords.length - 1];
              app(word, arrayOfWords);
            }

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _startApp.apply(this, arguments);
}

startApp();

function correctAnswer(_x, _x2, _x3) {
  return _correctAnswer.apply(this, arguments);
}

function _correctAnswer() {
  _correctAnswer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wordInfo, arrayOfWords, myToken) {
    var setSettings, word, isSoundOn, isTranslateOn, arr, diff3btn, diff2btn, diff1btn, diff0btn;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return settings;

          case 2:
            setSettings = _context6.sent;
            word = wordInfo.word;
            isSoundOn = document.getElementById('sound').checked;
            isTranslateOn = document.getElementById('translate').checked;
            console.log(true, word);
            arr = arrayOfWords.slice(0, arrayOfWords.length - 1);
            console.log(arr);

            if (setSettings.optional.showWordsStatusButtons && arr.length > 0) {
              if (isSoundOn) {
                Object(_layout_scripts_say__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo, arr, userId, myToken, false);
              }

              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["showDifficultyBtns"])();
              diff3btn = document.getElementById('difficulty_3_btn');

              diff3btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId, '3');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff2btn = document.getElementById('difficulty_2_btn');

              diff2btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId, '2');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff1btn = document.getElementById('difficulty_1_btn');

              diff1btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId, '1');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };

              diff0btn = document.getElementById('difficulty_0_btn');

              diff0btn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId, '0');
                Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["hideDifficultyBtns"])();
                app(arr[arr.length - 1], arr);
              };
            } else if (isSoundOn && arr.length > 0) {
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId);
              Object(_layout_scripts_say__WEBPACK_IMPORTED_MODULE_14__["default"])(wordInfo, arr, userId, myToken, true);
            } else if (arr.length > 0) {
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId);
              app(arr[arr.length - 1], arr);
            } else if (arr.length === 0) {// addNotification();
            }

            if (arr.length > 0) {
              if (setSettings.optional.showTextExample) {
                Object(_layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_5__["showFullTextExample"])(wordInfo);
              }

              if (setSettings.optional.showTextMeaning) {
                Object(_layout_scripts_show_full_text__WEBPACK_IMPORTED_MODULE_5__["showFullTextMeaning"])(wordInfo);
              }

              console.log('translate- ', isTranslateOn, setSettings.optional.showTextExample);

              if (isTranslateOn) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_4__["addWordTranslateInCard"])(wordInfo);
              }

              if (isTranslateOn && setSettings.optional.showTextExample) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_4__["addTextExampleTranslateInCard"])(wordInfo);
              }

              if (isTranslateOn && setSettings.optional.showTextMeaning) {
                Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_4__["addWordMeaningTranslateInCard"])(wordInfo);
              }
            }

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _correctAnswer.apply(this, arguments);
}

function checkInput(_x4, _x5) {
  return _checkInput.apply(this, arguments);
}

function _checkInput() {
  _checkInput = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(wordInfo, arrayOfWords) {
    var myToken, word, multiColorResultWrapper, input, i, span;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return token;

          case 2:
            myToken = _context7.sent;
            word = wordInfo.word;
            console.log('wordInfo - ', wordInfo);
            multiColorResultWrapper = document.querySelector('.multi-color');
            input = document.querySelector('.word-hidden_input');
            multiColorResultWrapper.textContent = '';

            if (word === input.value) {
              // GOOD ANSWER
              correctAnswer(wordInfo, arrayOfWords, myToken);
            } else {
              // BAD ANSWER
              console.log(false, word);
              Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(wordInfo.id, myToken, userId, '3');

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

            console.log(input.value);
            input.value = '';

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _checkInput.apply(this, arguments);
}

function app(_x6, _x7) {
  return _app.apply(this, arguments);
}

function _app() {
  _app = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(word, arrayOfWords) {
    var myToken, cardMeaningTranslate, cardTranslate, input, colorWrapper, setSettings, answerBtn, deleteWordbtn, difficultWordbtn;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return token;

          case 2:
            myToken = _context8.sent;

            if (!(arrayOfWords.length === 0)) {
              _context8.next = 7;
              break;
            }

            startApp();
            _context8.next = 27;
            break;

          case 7:
            cardMeaningTranslate = document.querySelector('.card_meaning-translate');
            cardTranslate = document.querySelector('.card_phrase-translate');
            cardMeaningTranslate.textContent = '';
            cardTranslate.textContent = '';
            Object(_layout_scripts_add_fields__WEBPACK_IMPORTED_MODULE_4__["addCardFields"])(word, userId, myToken);
            console.log(word);
            console.log('правильный ответ - ', word.word);
            Object(_layout_scripts_set_input_width__WEBPACK_IMPORTED_MODULE_7__["default"])(word);
            Object(_layout_scripts_multi_color_result__WEBPACK_IMPORTED_MODULE_8__["default"])();
            input = document.querySelector('.word-hidden');

            input.onsubmit = function (e) {
              e.preventDefault();
              checkInput(word, arrayOfWords);
            };

            colorWrapper = document.querySelector('.multi-color');

            colorWrapper.onclick = function () {
              colorWrapper.textContent = '';
              var input = document.querySelector('.word-hidden_input');
              input.focus();
            };

            input.addEventListener("input", function () {
              colorWrapper.textContent = '';
              var input = document.querySelector('.word-hidden_input');
              input.focus();
            });
            _context8.next = 23;
            return settings;

          case 23:
            setSettings = _context8.sent;

            if (setSettings.optional.showAnswerButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["showAnswerBtn"])();
              answerBtn = document.getElementById('answer_btn');

              answerBtn.onclick = function () {
                correctAnswer(word, arrayOfWords, myToken);
              };
            }

            if (setSettings.optional.showDeleteButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["showDeleteWordBtn"])();
              deleteWordbtn = document.getElementById('delete_btn');

              deleteWordbtn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(word.id, myToken, userId, '-1');
                app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
              };
            }

            if (setSettings.optional.showDifficultWordsButton) {
              Object(_layout_scripts_show_btns__WEBPACK_IMPORTED_MODULE_6__["showDifficultWordBtn"])();
              difficultWordbtn = document.getElementById('difficult_btn');

              difficultWordbtn.onclick = function () {
                Object(_layout_scripts_create_or_update_word__WEBPACK_IMPORTED_MODULE_12__["default"])(word.id, myToken, userId, '20');
                app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
              };
            }

          case 27:
            Object(_layout_scripts_progress__WEBPACK_IMPORTED_MODULE_13__["default"])(myToken, userId);

          case 28:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _app.apply(this, arguments);
}

var updateSettings = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var userId, token, wordId, settings, myToken, rawResponse, updatedSets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref2.userId, token = _ref2.token, wordId = _ref2.wordId, settings = _ref2.settings;
            _context.next = 3;
            return token;

          case 3:
            myToken = _context.sent;
            _context.next = 6;
            return fetch("https://afternoon-falls-25894.herokuapp.com/users/".concat(userId, "/settings"), {
              method: 'PUT',
              headers: {
                Authorization: "Bearer ".concat(myToken),
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(settings)
            });

          case 6:
            rawResponse = _context.sent;
            _context.next = 9;
            return rawResponse.json();

          case 9:
            updatedSets = _context.sent;
            console.log(updatedSets, myToken);
            return _context.abrupt("return", updatedSets);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateSettings(_x8) {
    return _ref.apply(this, arguments);
  };
}(); // updateSettings({
//   userId,
//   token,
//   settings: {
//     wordsPerDay: 12,
//     optional: {
//       cardsPerDay: 16,
//       showTranslation: true,
//       showTextMeaning: true,
//       showTextExample: true,
//       showTranscription: true,
//       showImage: true,
//       showAnswerButton: true,
//       showDeleteButton: true,
//       showDifficultWordsButton: true,
//       showWordsStatusButtons: false,
//     },
//   },
// });
// const deleteUserWord = async ({
//   // wordId,
// }) => {
//   const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/5efe34e3635aec001764d725`, {
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     // body: JSON.stringify(word),
//   });
//   const updatedWord = await rawResponse.json();
//   console.log(updatedWord);
//   return updatedWord;
// };
// deleteUserWord();
// updateUserWord({
//   userId,
//   token,
//   wordId: '5e9f5ee45eb9e72bc21b01f7',
//   word: { difficulty: '-1', optional: { time: now.getTime() } },
// });


/* harmony default export */ __webpack_exports__["default"] = (app);

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
  para1.textContent = 'Congratulations';
  var para2 = document.createElement('p');
  para2.classList.add('para2');
  para2.textContent = "That's all for today";
  var para3 = document.createElement('p');
  para3.classList.add('para3');
  para3.textContent = "There are still new cards, but the daily limit has been reached. You can increase the limit in the settings, but please keep in mind that the more new cards you see, the more you will need to repeat in the near future";
  notificationWrapper.append(para1, para2, para3);
  var cardWrapper = document.querySelector('.card');
  cardWrapper.textContent = '';
}

/* harmony default export */ __webpack_exports__["default"] = (addNotification);

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
              currentWordDifficulty = userWord.difficulty; // console.log('time - ', wordFirstTime);

              console.log('сложность - ', currentWordDifficulty);
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
            console.log(newWord);
            return _context.abrupt("return", newWord);

          case 9:
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
            console.log('все слова юзера (сортировка от новых):', sortedFromNewAllUserWods);
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

            console.log('learned words today: ', alredyLearnedWordsToday);
            console.log('learned new words today: ', alredyLearnedNewWordsToday);
            arrayOfWordsForToday = [];

            for (_i2 = 0; _i2 < newWords - alredyLearnedNewWordsToday; _i2 += 1) {
              randomWord = Object(_get_random_word__WEBPACK_IMPORTED_MODULE_3__["default"])();
              arrayOfWordsForToday.push(randomWord);
            }

            difficult3UserWords = allUserWods.filter(function (item) {
              return +item.difficulty > 2;
            });
            _i3 = 0;

          case 16:
            if (!(_i3 < difficult3UserWords.length)) {
              _context.next = 27;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday)) {
              _context.next = 22;
              break;
            }

            difficultUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult3UserWords[_i3].wordId);
            arrayOfWordsForToday.push(difficultUserWord);
            _context.next = 24;
            break;

          case 22:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 24;
              break;
            }

            return _context.abrupt("break", 27);

          case 24:
            _i3 += 1;
            _context.next = 16;
            break;

          case 27:
            difficult2UserWords = allUserWods.filter(function (item) {
              return +item.difficulty === 2;
            });
            _i4 = 0;

          case 29:
            if (!(_i4 < difficult2UserWords.length)) {
              _context.next = 40;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday && (now.getTime() - difficult2UserWords[_i4].optional.lastTime) / 60000 / 60 > 22 // если больше 22 часов не повторялось
            && difficult2UserWords[_i4].wordId !== '5efe34e3635aec001764d725')) {
              _context.next = 35;
              break;
            }

            // глюк
            notEasyUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult2UserWords[_i4].wordId);
            arrayOfWordsForToday.push(notEasyUserWord);
            _context.next = 37;
            break;

          case 35:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 37;
              break;
            }

            return _context.abrupt("break", 40);

          case 37:
            _i4 += 1;
            _context.next = 29;
            break;

          case 40:
            difficult1UserWords = allUserWods.filter(function (item) {
              return +item.difficulty === 1;
            });
            _i5 = 0;

          case 42:
            if (!(_i5 < difficult1UserWords.length)) {
              _context.next = 53;
              break;
            }

            if (!(arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday && (now.getTime() - difficult1UserWords[_i5].optional.lastTime) / 60000 / 60 > 70)) {
              _context.next = 48;
              break;
            }

            // если больше 70 часов не повторялось
            easyUserWord = Object(_get_word_by_id__WEBPACK_IMPORTED_MODULE_4__["default"])(difficult1UserWords[_i5].wordId);
            arrayOfWordsForToday.push(easyUserWord);
            _context.next = 50;
            break;

          case 48:
            if (!(arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday)) {
              _context.next = 50;
              break;
            }

            return _context.abrupt("break", 53);

          case 50:
            _i5 += 1;
            _context.next = 42;
            break;

          case 53:
            console.log('всего сущ слов 3+ сложности: ', difficult3UserWords);
            console.log('всего сущ слов 2 сложности: ', difficult2UserWords);
            console.log('всего сущ слов 1 сложности: ', difficult1UserWords);
            _context.next = 58;
            return Promise.all(arrayOfWordsForToday);

          case 58:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 60:
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
            console.log(content);
            return _context.abrupt("return", content);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log('слово не найдено');
            return _context.abrupt("return", null);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
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

/***/ "./src/layout/scripts/login-test.js":
/*!******************************************!*\
  !*** ./src/layout/scripts/login-test.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var loginUser = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
    var rawResponse, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
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

  return function loginUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (loginUser);

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
            console.log(bar.style.width);

            if (bar.style.width === '100%') {
              addNotification();
            }

          case 18:
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
  var input = document.querySelector('.word-hidden_input'); // input.textContent = '';

  input.style.width = "".concat(word.word.length / 1.5, "em"); // input.style.fontSize = '1em';
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
            console.log(updatedWord);
            return _context.abrupt("return", updatedWord);

          case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvcHJvZ3Jlc3MuY3NzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9wcm9ncmVzcy5jc3M/ODkxZSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9zdHlsZS5jc3M/MDhlYSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvYWRkLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvYWRkLW5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY3JlYXRlLW9yLXVwZGF0ZS13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtdXNlci13b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jcmVhdGUtd29yZHMtYXJyYXktZm9yLXRvZGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9nZXQtcmFuZG9tLXdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZC1ieS1pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZ2V0LXVzZXItd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2dldC13b3JkLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9sb2dpbi10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9tdWx0aS1jb2xvci1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3NldC1pbnB1dC13aWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvc2hvdy1idG5zLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zaG93LWZ1bGwtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvdXBkYXRlLXVzZXItd29yZC5qcyJdLCJuYW1lcyI6WyJ1c2VySWQiLCJnZXRUb2tlbiIsImxvZ2luVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsInNlZVNldHRpbmdzIiwibXlUb2tlbiIsImdldFNldHRpbmdzIiwic2V0dGluZ3MiLCJjcmVhdGVBcnJheSIsInNldFNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVdvcmRzQXJyYXlGb3JUb2RheSIsIndvcmRzUGVyRGF5Iiwib3B0aW9uYWwiLCJjYXJkc1BlckRheSIsIndvcmRzQXJyYXlGb3JUb2RheSIsInNodWZsZWRXb3Jkc0FycmF5Rm9yVG9kYXkiLCJzb3J0IiwiYSIsImIiLCJncm91cCIsInN0YXJ0QXBwIiwiYXJyYXlPZldvcmRzIiwibGVuZ3RoIiwid29yZCIsImFwcCIsImNvcnJlY3RBbnN3ZXIiLCJ3b3JkSW5mbyIsImlzU291bmRPbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwiaXNUcmFuc2xhdGVPbiIsImFyciIsInNsaWNlIiwic2hvd1dvcmRzU3RhdHVzQnV0dG9ucyIsInNheVdvcmQiLCJzaG93RGlmZmljdWx0eUJ0bnMiLCJkaWZmM2J0biIsIm9uY2xpY2siLCJjcmVhdGVPclVwZGF0ZVdvcmQiLCJpZCIsImhpZGVEaWZmaWN1bHR5QnRucyIsImRpZmYyYnRuIiwiZGlmZjFidG4iLCJkaWZmMGJ0biIsInNob3dUZXh0RXhhbXBsZSIsInNob3dGdWxsVGV4dEV4YW1wbGUiLCJzaG93VGV4dE1lYW5pbmciLCJzaG93RnVsbFRleHRNZWFuaW5nIiwiYWRkV29yZFRyYW5zbGF0ZUluQ2FyZCIsImFkZFRleHRFeGFtcGxlVHJhbnNsYXRlSW5DYXJkIiwiYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQiLCJjaGVja0lucHV0IiwibXVsdGlDb2xvclJlc3VsdFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwiaSIsInNwYW4iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJjb2xvciIsImFwcGVuZCIsImNhcmRNZWFuaW5nVHJhbnNsYXRlIiwiY2FyZFRyYW5zbGF0ZSIsImFkZENhcmRGaWVsZHMiLCJzZXRJbnB1dFdpZHRoIiwiYWRkTXVsdGlDb2xvclJlc3VsdCIsIm9uc3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29sb3JXcmFwcGVyIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0Fuc3dlckJ1dHRvbiIsInNob3dBbnN3ZXJCdG4iLCJhbnN3ZXJCdG4iLCJzaG93RGVsZXRlQnV0dG9uIiwic2hvd0RlbGV0ZVdvcmRCdG4iLCJkZWxldGVXb3JkYnRuIiwic2hvd0RpZmZpY3VsdFdvcmRzQnV0dG9uIiwic2hvd0RpZmZpY3VsdFdvcmRCdG4iLCJkaWZmaWN1bHRXb3JkYnRuIiwicHJvZ3Jlc3MiLCJ1cGRhdGVTZXR0aW5ncyIsIndvcmRJZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhd1Jlc3BvbnNlIiwianNvbiIsInVwZGF0ZWRTZXRzIiwiYWRkSW1nIiwiaW1hZ2VXcmFwcGVyIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJhZGRUZXh0RXhhbXBsZUluQ2FyZCIsImNhcmRQaHJhc2UiLCJpbm5lckhUTUwiLCJ0ZXh0RXhhbXBsZSIsImNhcmRQaHJhc2VCIiwiYWRkV29yZE1lYW5pbmdJbkNhcmQiLCJjYXJkTWVhbmluZyIsInRleHRNZWFuaW5nIiwiY2FyZE1lYW5pbmdJIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsIndvcmRUcmFuc2xhdGUiLCJhZGRXb3JkVHJhbnNjcmlwdGlvbkluQ2FyZCIsIndvcmRUcmFuc2NyaXB0aW9uIiwidHJhbnNjcmlwdGlvbiIsInRleHRFeGFtcGxlVHJhbnNsYXRlIiwidGV4dE1lYW5pbmdUcmFuc2xhdGUiLCJzaG93SW1hZ2UiLCJzaG93VHJhbnNsYXRpb24iLCJzaG93VHJhbnNjcmlwdGlvbiIsImFkZE5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbldyYXBwZXIiLCJwYXJhMSIsImNsYXNzTGlzdCIsImFkZCIsInBhcmEyIiwicGFyYTMiLCJjYXJkV3JhcHBlciIsImRpZmYiLCJub3ciLCJEYXRlIiwiZ2V0VXNlcldvcmRCeUlkIiwidXNlcldvcmQiLCJ3b3JkRmlyc3RUaW1lIiwiZmlyc3RUaW1lIiwiY3VycmVudFdvcmREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInVwZGF0ZVVzZXJXb3JkIiwiU3RyaW5nIiwibGFzdFRpbWUiLCJnZXRUaW1lIiwiY3JlYXRlVXNlcldvcmQiLCJuZXdXb3JkIiwibmV3V29yZHMiLCJtYXhDYXJkcyIsImdldFVzZXJXb3JkcyIsImFsbFVzZXJXb2RzIiwic29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzIiwiYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkiLCJhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSIsImxhc3RSZXBlYXRUaW1lIiwiZm91ckhvdXJzRWFybGllciIsImdldERhdGUiLCJmaXJzdFJlcGVhdFRpbWUiLCJhcnJheU9mV29yZHNGb3JUb2RheSIsInJhbmRvbVdvcmQiLCJnZXRSYW5kb21Xb3JkIiwicHVzaCIsImRpZmZpY3VsdDNVc2VyV29yZHMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlmZmljdWx0VXNlcldvcmQiLCJnZXRXb3JkQnlJZCIsImRpZmZpY3VsdDJVc2VyV29yZHMiLCJub3RFYXN5VXNlcldvcmQiLCJkaWZmaWN1bHQxVXNlcldvcmRzIiwiZWFzeVVzZXJXb3JkIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdCIsIndvcmRzIiwicmFuZG9tR3JvdXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QYWdlIiwiY29udGVudCIsImFsbFdvcmRzIiwidXNlciIsImlucHV0Q29udGFpbmVyIiwicG9zaXRpb24iLCJiYXJBbGwiLCJ3aWR0aCIsImJhciIsInZvaWNlQXVkaW8iLCJ2b2ljZUV4YW1wbGUiLCJ2b2ljZU1lYW5pbmciLCJzYXlNZWFuaW5nIiwicnVuQXBwIiwiYXVkaW9NZWFuaW5nIiwicGxheSIsIm9uZW5kZWQiLCJzYXlFeGFtcGxlIiwiYXVkaW9FeGFtcGxlIiwiYXVkaW8iLCJidG5zV3JhcHBlciIsImRpZmZpY3VsdHkzYnRuIiwic2V0QXR0cmlidXRlIiwiZGlmZmljdWx0eTJidG4iLCJkaWZmaWN1bHR5MWJ0biIsImRpZmZpY3VsdHkwYnRuIiwic2hvd0Fuc3dlcldyYXBwZXIiLCJzaG93QW5zd2VyYnRuIiwic2hvd0RpZmZpY3VsdFdvcmRXcmFwcGVyIiwic2hvd0RpZmZpY3VsdFdvcmRidG4iLCJzaG93RGVsZXRlV29yZFdyYXBwZXIiLCJzaG93RGVsZXRlYnRuIiwiZXhhbXBsZSIsIm1lYW5pbmciLCJ1cGRhdGVkV29yZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ3BDQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHdDQUF3QyxnQ0FBZ0MsbUJBQW1CLHFCQUFxQixtQkFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFD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a0JBQWR4RSxjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCOztBQWtCZUEsNkVBQWYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3Jlc3MtYmFyLFxcclxcbi5wcm9ncmVzcy1iYXItYWxsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcblxcdHdpZHRoOiAzNTBweDtcXHJcXG5cXHRtYXJnaW46IDVweCAwO1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwIGluc2V0LCAwIDFweCAwICM0NDQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA1cHggIzAwMCBpbnNldCwgMCAxcHggMCAjNDQ0O1xcclxcblxcdGJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwIGluc2V0LCAwIDFweCAwICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcy1iYXIgc3BhbixcXHJcXG4ucHJvZ3Jlc3MtYmFyLWFsbCBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyMDBweDtcXHJcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5cXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpIGluc2V0O1xcclxcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KSBpbnNldDtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpIGluc2V0O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdC1tb3otdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdC1tcy10cmFuc2l0aW9uOiB3aWR0aCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogd2lkdGggLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcdHRyYW5zaXRpb246IHdpZHRoIC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJsdWUgc3BhbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzM0YzJlMztcXHJcXG59XFxyXFxuXFxyXFxuLm9yYW5nZSBzcGFuIHtcXHJcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6ICNmZWNmMjM7XFxyXFxufSAgICAgICBcXHJcXG5cXHJcXG4uZ3JlZW4gc3BhbiB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkZjQxO1xcclxcbn1cXHJcXG4uc2hpbmUgc3BhbiB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpbmUgc3Bhbjo6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDNweDsgICAgICAgICAgICAgICAgICAgICBcXHJcXG5cXHJcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zaGluZSAycyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG5cXHQtbW96LWFuaW1hdGlvbjogYW5pbWF0ZS1zaGluZSAycyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb3cgc3BhbiB7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQsIDAgLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQ7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQsIDAgLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgaW5zZXQ7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIGluc2V0LCAwIC01cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIGluc2V0O1xcclxcblxcclxcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLWdsb3cgMXMgZWFzZS1vdXQgaW5maW5pdGU7XFxyXFxuXFx0LW1vei1hbmltYXRpb246IGFuaW1hdGUtZ2xvdyAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQ6ICNlOWY1Zjc7XFxyXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDsgXFxyXFxuXFx0Y29sb3I6ICMwMDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcblxcdHdpZHRoOiA3MCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjV2dztcXHJcXG59XFxyXFxuLyogLm1lbnUge1xcclxcblxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59ICovXFxyXFxuLmxpbmsge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4ubWVudSxcXHJcXG4uY2hlY2stYm94ZXMge1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0d2lkdGg6IDQ1JTtcXHJcXG59XFxyXFxuLmNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyZWRkZWY1MjtcXHJcXG59XFxyXFxuLmNhcmRfaW1ne1xcclxcblxcdG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9tYWluLWlucHV0e1xcclxcblxcdHdpZHRoOiA5NSU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jYXJkX3BocmFzZSxcXHJcXG4uY2FyZF9waHJhc2UtdHJhbnNsYXRlLFxcclxcbi5jYXJkX21lYW5pbmcsXFxyXFxuLmNhcmRfbWVhbmluZy10cmFuc2xhdGUsXFxyXFxuLmNhcmRfd29yZC10cmFuc2NyaXB0aW9uLFxcclxcbi5kaWZmaWN1bHR5X2J0bnMsXFxyXFxuLmNhcmRfd29yZC10cmFuc2xhdGUge1xcclxcblxcdHdpZHRoOiA5NSU7XFxyXFxuXFx0bWFyZ2luOiAzcHggYXV0bztcXHJcXG59XFxyXFxuLndvcmQtaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuYnV0dG9uLFxcclxcbi53b3JkLWhpZGRlbl9idG4ge1xcclxcblxcdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gMC40ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDI5ZmFmYzk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDVweDtcXHJcXG59XFxyXFxuLndvcmQtaGlkZGVuX2J0biB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi53b3JkLWhpZGRlbl9pbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRoZWlnaHQ6IDEuMWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi5jYXJkX3dvcmQtdHJhbnNsYXRlIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuLm11bHRpLWNvbG9yIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcblxcdGJvdHRvbTogMHB4O1xcclxcblxcdGxlZnQ6IDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi5kaWZmaWN1bHR5X2J0bnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG5cXHQuY29udGFpbmVye1xcclxcblxcdFxcdHdpZHRoOiA5NSU7XFxyXFxuXFx0XFx0LyogZm9udC1zaXplOiAzLjV2dzsgKi9cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcdC5jb250YWluZXJ7XFxyXFxuXFx0XFx0d2lkdGg6IDk4JTtcXHJcXG5cXHRcXHQvKiBmb250LXNpemU6IDR2dzsgKi9cXHJcXG5cXHR9XFxyXFxufSBcIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgJy4vbGF5b3V0L2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2xheW91dC9jc3MvcHJvZ3Jlc3MuY3NzJztcblxuXG5pbXBvcnQge1xuICBhZGRDYXJkRmllbGRzLCBhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCxcbiAgYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQsIGFkZFdvcmRUcmFuc2xhdGVJbkNhcmQsXG59IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvYWRkLWZpZWxkcyc7XG5pbXBvcnQgeyBzaG93RnVsbFRleHRFeGFtcGxlLCBzaG93RnVsbFRleHRNZWFuaW5nIH0gZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9zaG93LWZ1bGwtdGV4dCc7XG5pbXBvcnQge1xuICBzaG93RGlmZmljdWx0eUJ0bnMsIGhpZGVEaWZmaWN1bHR5QnRucywgc2hvd0Fuc3dlckJ0biwgc2hvd0RpZmZpY3VsdFdvcmRCdG4sIHNob3dEZWxldGVXb3JkQnRuLFxufSBmcm9tICcuL2xheW91dC9zY3JpcHRzL3Nob3ctYnRucyc7XG5cbmltcG9ydCBzZXRJbnB1dFdpZHRoIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvc2V0LWlucHV0LXdpZHRoJztcbmltcG9ydCBhZGRNdWx0aUNvbG9yUmVzdWx0IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvbXVsdGktY29sb3ItcmVzdWx0JztcblxuaW1wb3J0IGNyZWF0ZVdvcmRzQXJyYXlGb3JUb2RheSBmcm9tICcuL2xheW91dC9zY3JpcHRzL2NyZWF0ZS13b3Jkcy1hcnJheS1mb3ItdG9kYXknO1xuaW1wb3J0IGFkZE5vdGlmaWNhdGlvbiBmcm9tICcuL2xheW91dC9zY3JpcHRzL2FkZC1ub3RpZmljYXRpb24nO1xuXG5pbXBvcnQgZ2V0U2V0dGluZ3MgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9nZXQtc2V0dGluZ3MnO1xuXG5pbXBvcnQgY3JlYXRlT3JVcGRhdGVXb3JkIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvY3JlYXRlLW9yLXVwZGF0ZS13b3JkJztcblxuaW1wb3J0IHByb2dyZXNzIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvcHJvZ3Jlc3MnO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBzYXlXb3JkIGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvc2F5JztcblxuaW1wb3J0IGxvZ2luVXNlciBmcm9tICcuL2xheW91dC9zY3JpcHRzL2xvZ2luLXRlc3QnO1xuXG5jb25zdCB1c2VySWQgPSAnNWVlZmE0NjM5ODk2ZTEwMDE3ZWVhNDBjJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgbG9naW5Vc2VyKHsgZW1haWw6ICd0ZWFtMTdAbWFpbC5ydScsIHBhc3N3b3JkOiAnUnNTY2hvb2wyMDIwIScgfSk7XG4gIHJldHVybiB0b2tlbi50b2tlbjtcbn1cbmNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcblxuXG5hc3luYyBmdW5jdGlvbiBzZWVTZXR0aW5ncygpIHtcbiAgY29uc3QgbXlUb2tlbiA9IGF3YWl0IHRva2VuO1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzKHVzZXJJZCwgbXlUb2tlbik7XG4gIHJldHVybiBzZXR0aW5ncztcbn1cbmNvbnN0IHNldHRpbmdzID0gc2VlU2V0dGluZ3MoKTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXJyYXkoKSB7XG4gIGNvbnN0IG15VG9rZW4gPSBhd2FpdCB0b2tlbjtcbiAgY29uc3Qgc2V0U2V0dGluZ3MgPSBhd2FpdCBzZXR0aW5ncztcbiAgY29uc29sZS5sb2coJ3NldHRpbmdzOiAnLCBzZXRTZXR0aW5ncyk7XG4gIGNvbnN0IHdvcmRzQXJyYXlGb3JUb2RheSA9IGF3YWl0IGNyZWF0ZVdvcmRzQXJyYXlGb3JUb2RheShcbiAgICBzZXRTZXR0aW5ncy53b3Jkc1BlckRheSwgc2V0U2V0dGluZ3Mub3B0aW9uYWwuY2FyZHNQZXJEYXksIG15VG9rZW4sIHVzZXJJZCxcbiAgKTtcbiAgY29uc3Qgc2h1ZmxlZFdvcmRzQXJyYXlGb3JUb2RheSA9IHdvcmRzQXJyYXlGb3JUb2RheS5zb3J0KChhLCBiKSA9PiAoYS5ncm91cCA+IGIuZ3JvdXAgPyAxIDogLTEpKTtcbiAgY29uc29sZS5sb2coc2h1ZmxlZFdvcmRzQXJyYXlGb3JUb2RheSk7XG4gIHJldHVybiBzaHVmbGVkV29yZHNBcnJheUZvclRvZGF5O1xufVxuY29uc3Qgd29yZHNBcnJheUZvclRvZGF5ID0gY3JlYXRlQXJyYXkoKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGNvbnN0IGFycmF5T2ZXb3JkcyA9IGF3YWl0IHdvcmRzQXJyYXlGb3JUb2RheTtcbiAgY29uc3QgbXlUb2tlbiA9IGF3YWl0IHRva2VuO1xuXG4gIGlmIChhcnJheU9mV29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gYWRkTm90aWZpY2F0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgd29yZCA9IGFycmF5T2ZXb3Jkc1thcnJheU9mV29yZHMubGVuZ3RoIC0gMV07XG4gICAgYXBwKHdvcmQsIGFycmF5T2ZXb3Jkcyk7XG4gIH1cbn1cbnN0YXJ0QXBwKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIod29yZEluZm8sIGFycmF5T2ZXb3JkcywgbXlUb2tlbikge1xuICBjb25zdCBzZXRTZXR0aW5ncyA9IGF3YWl0IHNldHRpbmdzO1xuICBjb25zdCB7IHdvcmQgfSA9IHdvcmRJbmZvO1xuICBjb25zdCBpc1NvdW5kT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291bmQnKS5jaGVja2VkO1xuICBjb25zdCBpc1RyYW5zbGF0ZU9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0ZScpLmNoZWNrZWQ7XG4gIGNvbnNvbGUubG9nKHRydWUsIHdvcmQpO1xuICBjb25zdCBhcnIgPSBhcnJheU9mV29yZHMuc2xpY2UoMCwgYXJyYXlPZldvcmRzLmxlbmd0aCAtIDEpO1xuICBjb25zb2xlLmxvZyhhcnIpO1xuXG4gIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93V29yZHNTdGF0dXNCdXR0b25zICYmIGFyci5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGlzU291bmRPbikge1xuICAgICAgc2F5V29yZCh3b3JkSW5mbywgYXJyLCB1c2VySWQsIG15VG9rZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaG93RGlmZmljdWx0eUJ0bnMoKTtcbiAgICBjb25zdCBkaWZmM2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHR5XzNfYnRuJyk7XG4gICAgZGlmZjNidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgbXlUb2tlbiwgdXNlcklkLCAnMycpO1xuICAgICAgaGlkZURpZmZpY3VsdHlCdG5zKCk7XG4gICAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlmZjJidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eV8yX2J0bicpO1xuICAgIGRpZmYyYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIG15VG9rZW4sIHVzZXJJZCwgJzInKTtcbiAgICAgIGhpZGVEaWZmaWN1bHR5QnRucygpO1xuICAgICAgYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpZmYxYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHlfMV9idG4nKTtcbiAgICBkaWZmMWJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCBteVRva2VuLCB1c2VySWQsICcxJyk7XG4gICAgICBoaWRlRGlmZmljdWx0eUJ0bnMoKTtcbiAgICAgIGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xuICAgIH07XG5cbiAgICBjb25zdCBkaWZmMGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmaWN1bHR5XzBfYnRuJyk7XG4gICAgZGlmZjBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgbXlUb2tlbiwgdXNlcklkLCAnMCcpO1xuICAgICAgaGlkZURpZmZpY3VsdHlCdG5zKCk7XG4gICAgICBhcHAoYXJyW2Fyci5sZW5ndGggLSAxXSwgYXJyKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzU291bmRPbiAgJiYgYXJyLmxlbmd0aCA+IDApIHtcbiAgICBjcmVhdGVPclVwZGF0ZVdvcmQod29yZEluZm8uaWQsIG15VG9rZW4sIHVzZXJJZCk7XG4gICAgc2F5V29yZCh3b3JkSW5mbywgYXJyLCB1c2VySWQsIG15VG9rZW4sIHRydWUpO1xuICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmRJbmZvLmlkLCBteVRva2VuLCB1c2VySWQpO1xuICAgIGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xuICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAvLyBhZGROb3RpZmljYXRpb24oKTtcbiAgfVxuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2V0U2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7IHNob3dGdWxsVGV4dEV4YW1wbGUod29yZEluZm8pOyB9XG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0TWVhbmluZykgeyBzaG93RnVsbFRleHRNZWFuaW5nKHdvcmRJbmZvKTsgfVxuICBcbiAgICBjb25zb2xlLmxvZygndHJhbnNsYXRlLSAnLCBpc1RyYW5zbGF0ZU9uLCBzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dEV4YW1wbGUpO1xuICAgIGlmIChpc1RyYW5zbGF0ZU9uKSB7XG4gICAgICBhZGRXb3JkVHJhbnNsYXRlSW5DYXJkKHdvcmRJbmZvKTtcbiAgICB9XG4gICAgaWYgKGlzVHJhbnNsYXRlT24gJiYgc2V0U2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7XG4gICAgICBhZGRUZXh0RXhhbXBsZVRyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbyk7XG4gICAgfVxuICAgIGlmIChpc1RyYW5zbGF0ZU9uICYmIHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dUZXh0TWVhbmluZykge1xuICAgICAgYWRkV29yZE1lYW5pbmdUcmFuc2xhdGVJbkNhcmQod29yZEluZm8pO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lucHV0KHdvcmRJbmZvLCBhcnJheU9mV29yZHMpIHtcbiAgY29uc3QgbXlUb2tlbiA9IGF3YWl0IHRva2VuO1xuXG4gIGNvbnN0IHsgd29yZCB9ID0gd29yZEluZm87XG4gIGNvbnNvbGUubG9nKCd3b3JkSW5mbyAtICcsIHdvcmRJbmZvKTtcblxuXG4gIGNvbnN0IG11bHRpQ29sb3JSZXN1bHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11bHRpLWNvbG9yJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtaGlkZGVuX2lucHV0Jyk7XG4gIG11bHRpQ29sb3JSZXN1bHRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgaWYgKHdvcmQgPT09IGlucHV0LnZhbHVlKSB7IC8vIEdPT0QgQU5TV0VSXG4gICAgY29ycmVjdEFuc3dlcih3b3JkSW5mbywgYXJyYXlPZldvcmRzLCBteVRva2VuKTtcbiAgfSBlbHNlIHsgLy8gQkFEIEFOU1dFUlxuICAgIGNvbnNvbGUubG9nKGZhbHNlLCB3b3JkKTtcblxuICAgIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSW5mby5pZCwgbXlUb2tlbiwgdXNlcklkLCAnMycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC52YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZVtpXTtcblxuICAgICAgaWYgKGlucHV0LnZhbHVlW2ldID09PSB3b3JkW2ldKSB7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgfVxuICAgICAgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIuYXBwZW5kKHNwYW4pO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XG4gIGlucHV0LnZhbHVlID0gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFwcCh3b3JkLCBhcnJheU9mV29yZHMpIHtcbiAgY29uc3QgbXlUb2tlbiA9IGF3YWl0IHRva2VuO1xuICBpZiAoYXJyYXlPZldvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXJ0QXBwKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2FyZE1lYW5pbmdUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nLXRyYW5zbGF0ZScpO1xuICAgIGNvbnN0IGNhcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UtdHJhbnNsYXRlJyk7XG4gICAgY2FyZE1lYW5pbmdUcmFuc2xhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjYXJkVHJhbnNsYXRlLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBhZGRDYXJkRmllbGRzKHdvcmQsIHVzZXJJZCwgbXlUb2tlbik7XG4gICAgY29uc29sZS5sb2cod29yZCk7XG4gICAgY29uc29sZS5sb2coJ9C/0YDQsNCy0LjQu9GM0L3Ri9C5INC+0YLQstC10YIgLSAnLCB3b3JkLndvcmQpO1xuICAgIHNldElucHV0V2lkdGgod29yZCk7XG4gICAgYWRkTXVsdGlDb2xvclJlc3VsdCgpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yZC1oaWRkZW4nKTtcblxuICAgIFxuXG4gICAgaW5wdXQub25zdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2hlY2tJbnB1dCh3b3JkLCBhcnJheU9mV29yZHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb2xvcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVsdGktY29sb3InKTtcbiAgICBjb2xvcldyYXBwZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNvbG9yV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yZC1oaWRkZW5faW5wdXQnKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciggXCJpbnB1dFwiICwgKCkgPT4ge1xuICAgICAgY29sb3JXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhpZGRlbl9pbnB1dCcpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldFNldHRpbmdzID0gYXdhaXQgc2V0dGluZ3M7XG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dBbnN3ZXJCdXR0b24pIHtcbiAgICAgIHNob3dBbnN3ZXJCdG4oKTtcbiAgICAgIGNvbnN0IGFuc3dlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJfYnRuJyk7XG4gICAgICBhbnN3ZXJCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29ycmVjdEFuc3dlcih3b3JkLCBhcnJheU9mV29yZHMsIG15VG9rZW4pO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNldFNldHRpbmdzLm9wdGlvbmFsLnNob3dEZWxldGVCdXR0b24pIHtcbiAgICAgIHNob3dEZWxldGVXb3JkQnRuKCk7XG4gICAgICBjb25zdCBkZWxldGVXb3JkYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZV9idG4nKTtcbiAgICAgIGRlbGV0ZVdvcmRidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmQuaWQsIG15VG9rZW4sIHVzZXJJZCwgJy0xJyk7XG4gICAgICAgIGFwcChhcnJheU9mV29yZHNbYXJyYXlPZldvcmRzLmxlbmd0aCAtIDJdLCBhcnJheU9mV29yZHMuc2xpY2UoMCwgYXJyYXlPZldvcmRzLmxlbmd0aCAtIDEpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzZXRTZXR0aW5ncy5vcHRpb25hbC5zaG93RGlmZmljdWx0V29yZHNCdXR0b24pIHtcbiAgICAgIHNob3dEaWZmaWN1bHRXb3JkQnRuKCk7XG4gICAgICBjb25zdCBkaWZmaWN1bHRXb3JkYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdF9idG4nKTtcbiAgICAgIGRpZmZpY3VsdFdvcmRidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVXb3JkKHdvcmQuaWQsIG15VG9rZW4sIHVzZXJJZCwgJzIwJyk7XG4gICAgICAgIGFwcChhcnJheU9mV29yZHNbYXJyYXlPZldvcmRzLmxlbmd0aCAtIDJdLCBhcnJheU9mV29yZHMuc2xpY2UoMCwgYXJyYXlPZldvcmRzLmxlbmd0aCAtIDEpKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHByb2dyZXNzKG15VG9rZW4sIHVzZXJJZCk7XG59XG5cblxuXG5cbmNvbnN0IHVwZGF0ZVNldHRpbmdzID0gYXN5bmMgKHtcbiAgdXNlcklkLCB0b2tlbiwgd29yZElkLCBzZXR0aW5ncyxcbn0pID0+IHtcbiAgY29uc3QgbXlUb2tlbiA9IGF3YWl0IHRva2VuO1xuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS9zZXR0aW5nc2AsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtteVRva2VufWAsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyksXG4gIH0pO1xuICBjb25zdCB1cGRhdGVkU2V0cyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyh1cGRhdGVkU2V0cywgbXlUb2tlbik7XG4gIHJldHVybiB1cGRhdGVkU2V0cztcbn07XG5cbi8vIHVwZGF0ZVNldHRpbmdzKHtcbi8vICAgdXNlcklkLFxuLy8gICB0b2tlbixcbi8vICAgc2V0dGluZ3M6IHtcbi8vICAgICB3b3Jkc1BlckRheTogMTIsXG4vLyAgICAgb3B0aW9uYWw6IHtcbi8vICAgICAgIGNhcmRzUGVyRGF5OiAxNixcbi8vICAgICAgIHNob3dUcmFuc2xhdGlvbjogdHJ1ZSxcbi8vICAgICAgIHNob3dUZXh0TWVhbmluZzogdHJ1ZSxcbi8vICAgICAgIHNob3dUZXh0RXhhbXBsZTogdHJ1ZSxcbi8vICAgICAgIHNob3dUcmFuc2NyaXB0aW9uOiB0cnVlLFxuLy8gICAgICAgc2hvd0ltYWdlOiB0cnVlLFxuLy8gICAgICAgc2hvd0Fuc3dlckJ1dHRvbjogdHJ1ZSxcbi8vICAgICAgIHNob3dEZWxldGVCdXR0b246IHRydWUsXG4vLyAgICAgICBzaG93RGlmZmljdWx0V29yZHNCdXR0b246IHRydWUsXG4vLyAgICAgICBzaG93V29yZHNTdGF0dXNCdXR0b25zOiBmYWxzZSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfSk7XG5cbi8vIGNvbnN0IGRlbGV0ZVVzZXJXb3JkID0gYXN5bmMgKHtcbi8vICAgLy8gd29yZElkLFxuLy8gfSkgPT4ge1xuLy8gICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS93b3Jkcy81ZWZlMzRlMzYzNWFlYzAwMTc2NGQ3MjVgLCB7XG4vLyAgICAgbWV0aG9kOiAnREVMRVRFJyxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbi8vICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICB9LFxuLy8gICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdvcmQpLFxuLy8gICB9KTtcbi8vICAgY29uc3QgdXBkYXRlZFdvcmQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbi8vICAgY29uc29sZS5sb2codXBkYXRlZFdvcmQpO1xuLy8gICByZXR1cm4gdXBkYXRlZFdvcmQ7XG4vLyB9O1xuXG4vLyBkZWxldGVVc2VyV29yZCgpO1xuXG4vLyB1cGRhdGVVc2VyV29yZCh7XG4vLyAgIHVzZXJJZCxcbi8vICAgdG9rZW4sXG4vLyAgIHdvcmRJZDogJzVlOWY1ZWU0NWViOWU3MmJjMjFiMDFmNycsXG4vLyAgIHdvcmQ6IHsgZGlmZmljdWx0eTogJy0xJywgb3B0aW9uYWw6IHsgdGltZTogbm93LmdldFRpbWUoKSB9IH0sXG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2dyZXNzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2dldC1zZXR0aW5ncyc7XG5cbmZ1bmN0aW9uIGFkZEltZyh3b3JkSW5mbykge1xuICBjb25zdCBpbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9pbWcnKTtcbiAgaW1hZ2VXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpZiAod29yZEluZm8uaW1hZ2UubGVuZ3RoID4gMTAwKSB7XG4gICAgaW1nLnNyYyA9IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsJHt3b3JkSW5mby5pbWFnZX1gO1xuICB9IGVsc2Uge1xuICAgIGltZy5zcmMgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N2aXJza2lhL3JzbGFuZy1kYXRhL21hc3Rlci8ke3dvcmRJbmZvLmltYWdlfWA7XG4gIH1cbiAgaW1hZ2VXcmFwcGVyLmFwcGVuZChpbWcpO1xufVxuXG5mdW5jdGlvbiBhZGRUZXh0RXhhbXBsZUluQ2FyZCh3b3JkSW5mbykge1xuICBjb25zdCBjYXJkUGhyYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfcGhyYXNlJyk7XG4gIGNhcmRQaHJhc2UuaW5uZXJIVE1MID0gd29yZEluZm8udGV4dEV4YW1wbGU7XG5cbiAgY29uc3QgY2FyZFBocmFzZUIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9waHJhc2UgYicpO1xuXG4gIGNhcmRQaHJhc2VCLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSAnWyA/IF0nO1xuICBjYXJkUGhyYXNlQi5hcHBlbmQoc3Bhbik7XG59XG5cbmZ1bmN0aW9uIGFkZFdvcmRNZWFuaW5nSW5DYXJkKHdvcmRJbmZvKSB7XG4gIGNvbnN0IGNhcmRNZWFuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfbWVhbmluZycpO1xuICBjYXJkTWVhbmluZy5pbm5lckhUTUwgPSB3b3JkSW5mby50ZXh0TWVhbmluZztcblxuICBjb25zdCBjYXJkTWVhbmluZ0kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nIGknKTtcbiAgY2FyZE1lYW5pbmdJLnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdbID8gXSc7XG4gIHNwYW4uc3R5bGUuZm9udFN0eWxlID0gJ25vcm1hbCc7XG4gIHNwYW4uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgY2FyZE1lYW5pbmdJLmFwcGVuZChzcGFuKTtcbn1cblxuZnVuY3Rpb24gYWRkV29yZFRyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbykge1xuICBjb25zdCB3b3JkVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfd29yZC10cmFuc2xhdGUnKTtcbiAgd29yZFRyYW5zbGF0ZS50ZXh0Q29udGVudCA9IHdvcmRJbmZvLndvcmRUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFdvcmRUcmFuc2NyaXB0aW9uSW5DYXJkKHdvcmRJbmZvKSB7XG4gIGNvbnN0IHdvcmRUcmFuc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfd29yZC10cmFuc2NyaXB0aW9uJyk7XG4gIHdvcmRUcmFuc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd29yZEluZm8udHJhbnNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gYWRkVGV4dEV4YW1wbGVUcmFuc2xhdGVJbkNhcmQod29yZEluZm8pIHtcbiAgY29uc3QgY2FyZFRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3BocmFzZS10cmFuc2xhdGUnKTtcbiAgY2FyZFRyYW5zbGF0ZS50ZXh0Q29udGVudCA9IHdvcmRJbmZvLnRleHRFeGFtcGxlVHJhbnNsYXRlO1xufVxuXG5mdW5jdGlvbiBhZGRXb3JkTWVhbmluZ1RyYW5zbGF0ZUluQ2FyZCh3b3JkSW5mbykge1xuICBjb25zdCBjYXJkTWVhbmluZ1RyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX21lYW5pbmctdHJhbnNsYXRlJyk7XG4gIGNhcmRNZWFuaW5nVHJhbnNsYXRlLnRleHRDb250ZW50ID0gd29yZEluZm8udGV4dE1lYW5pbmdUcmFuc2xhdGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZENhcmRGaWVsZHMod29yZCwgdXNlcklkLCB0b2tlbikge1xuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzKHVzZXJJZCwgdG9rZW4pO1xuXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93SW1hZ2UpIHtcbiAgICBhZGRJbWcod29yZCk7XG4gIH1cblxuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7XG4gICAgYWRkVGV4dEV4YW1wbGVJbkNhcmQod29yZCk7XG4gIH1cblxuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRNZWFuaW5nKSB7XG4gICAgYWRkV29yZE1lYW5pbmdJbkNhcmQod29yZCk7XG4gIH1cblxuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RyYW5zbGF0aW9uKSB7XG4gICAgYWRkV29yZFRyYW5zbGF0ZUluQ2FyZCh3b3JkKTtcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VHJhbnNjcmlwdGlvbikge1xuICAgIGFkZFdvcmRUcmFuc2NyaXB0aW9uSW5DYXJkKHdvcmQpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGFkZENhcmRGaWVsZHMsIGFkZFRleHRFeGFtcGxlVHJhbnNsYXRlSW5DYXJkLFxuICBhZGRXb3JkTWVhbmluZ1RyYW5zbGF0ZUluQ2FyZCwgYWRkV29yZFRyYW5zbGF0ZUluQ2FyZCxcbn07XG4iLCJmdW5jdGlvbiBhZGROb3RpZmljYXRpb24oKSB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyk7XG5cbiAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmExLmNsYXNzTGlzdC5hZGQoJ3BhcmExJyk7XG4gIHBhcmExLnRleHRDb250ZW50ID0gJ0NvbmdyYXR1bGF0aW9ucyc7XG5cbiAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEyLmNsYXNzTGlzdC5hZGQoJ3BhcmEyJyk7XG4gIHBhcmEyLnRleHRDb250ZW50ID0gXCJUaGF0J3MgYWxsIGZvciB0b2RheVwiO1xuXG4gIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhMy5jbGFzc0xpc3QuYWRkKCdwYXJhMycpO1xuICBwYXJhMy50ZXh0Q29udGVudCA9IFwiVGhlcmUgYXJlIHN0aWxsIG5ldyBjYXJkcywgYnV0IHRoZSBkYWlseSBsaW1pdCBoYXMgYmVlbiByZWFjaGVkLiBZb3UgY2FuIGluY3JlYXNlIHRoZSBsaW1pdCBpbiB0aGUgc2V0dGluZ3MsIGJ1dCBwbGVhc2Uga2VlcCBpbiBtaW5kIHRoYXQgdGhlIG1vcmUgbmV3IGNhcmRzIHlvdSBzZWUsIHRoZSBtb3JlIHlvdSB3aWxsIG5lZWQgdG8gcmVwZWF0IGluIHRoZSBuZWFyIGZ1dHVyZVwiO1xuICBub3RpZmljYXRpb25XcmFwcGVyLmFwcGVuZChwYXJhMSwgcGFyYTIsIHBhcmEzKTtcblxuICBjb25zdCBjYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gIGNhcmRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5vdGlmaWNhdGlvbjtcbiIsImltcG9ydCBnZXRVc2VyV29yZEJ5SWQgZnJvbSAnLi9nZXQtdXNlci13b3JkLWJ5LWlkJztcbmltcG9ydCBjcmVhdGVVc2VyV29yZCBmcm9tICcuL2NyZWF0ZS11c2VyLXdvcmQnO1xuaW1wb3J0IHVwZGF0ZVVzZXJXb3JkIGZyb20gJy4vdXBkYXRlLXVzZXItd29yZCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlV29yZCh3b3JkSWQsIHRva2VuLCB1c2VySWQsIGRpZmYpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdXNlcldvcmQgPSBhd2FpdCBnZXRVc2VyV29yZEJ5SWQodG9rZW4sIHdvcmRJZCwgdXNlcklkKTtcbiAgaWYgKHVzZXJXb3JkICE9PSBudWxsKSB7XG4gICAgY29uc3Qgd29yZEZpcnN0VGltZSA9IHVzZXJXb3JkLm9wdGlvbmFsLmZpcnN0VGltZTtcbiAgICBjb25zdCBjdXJyZW50V29yZERpZmZpY3VsdHkgPSB1c2VyV29yZC5kaWZmaWN1bHR5O1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aW1lIC0gJywgd29yZEZpcnN0VGltZSk7XG4gICAgY29uc29sZS5sb2coJ9GB0LvQvtC20L3QvtGB0YLRjCAtICcsIGN1cnJlbnRXb3JkRGlmZmljdWx0eSk7XG4gICAgdXBkYXRlVXNlcldvcmQoe1xuICAgICAgdXNlcklkLFxuICAgICAgdG9rZW4sXG4gICAgICB3b3JkSWQ6IHVzZXJXb3JkLndvcmRJZCxcbiAgICAgIHdvcmQ6IHtcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZiB8fCBTdHJpbmcoK2N1cnJlbnRXb3JkRGlmZmljdWx0eSAtIDEpLFxuICAgICAgICBvcHRpb25hbDogeyBmaXJzdFRpbWU6IHdvcmRGaXJzdFRpbWUsIGxhc3RUaW1lOiBub3cuZ2V0VGltZSgpIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZVVzZXJXb3JkKHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHRva2VuLFxuICAgICAgd29yZElkLFxuICAgICAgd29yZDogeyBkaWZmaWN1bHR5OiBkaWZmIHx8ICcwJywgb3B0aW9uYWw6IHsgZmlyc3RUaW1lOiBub3cuZ2V0VGltZSgpLCBsYXN0VGltZTogbm93LmdldFRpbWUoKSB9IH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JVcGRhdGVXb3JkO1xuIiwiY29uc3QgY3JlYXRlVXNlcldvcmQgPSBhc3luYyAoe1xuICB1c2VySWQsIHRva2VuLCB3b3JkSWQsIHdvcmQsXG59KSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdvcmQpLFxuICB9KTtcbiAgY29uc3QgbmV3V29yZCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhuZXdXb3JkKTtcbiAgcmV0dXJuIG5ld1dvcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VyV29yZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBnZXRVc2VyV29yZHMgZnJvbSAnLi9nZXQtdXNlci13b3Jkcyc7XG5pbXBvcnQgZ2V0UmFuZG9tV29yZCBmcm9tICcuL2dldC1yYW5kb20td29yZCc7XG5pbXBvcnQgZ2V0V29yZEJ5SWQgZnJvbSAnLi9nZXQtd29yZC1ieS1pZCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmRzQXJyYXlGb3JUb2RheShuZXdXb3JkcywgbWF4Q2FyZHMsIHRva2VuLCB1c2VySWQpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgYWxsVXNlcldvZHMgPSBhd2FpdCBnZXRVc2VyV29yZHModG9rZW4sIHVzZXJJZCk7XG4gIGNvbnN0IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcyA9IGFsbFVzZXJXb2RzLnNvcnQoKGEsIGIpID0+IChhLm9wdGlvbmFsLmxhc3RUaW1lIDwgYi5vcHRpb25hbC5sYXN0VGltZSA/IDEgOiAtMSkpO1xuICBjb25zb2xlLmxvZygn0LLRgdC1INGB0LvQvtCy0LAg0Y7Qt9C10YDQsCAo0YHQvtGA0YLQuNGA0L7QstC60LAg0L7RgiDQvdC+0LLRi9GFKTonLCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMpO1xuICBsZXQgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgPSAwO1xuICBsZXQgYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXkgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGFzdFJlcGVhdFRpbWUgPSBuZXcgRGF0ZShzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0ub3B0aW9uYWwubGFzdFRpbWUgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcbiAgICBpZiAobGFzdFJlcGVhdFRpbWUuZ2V0RGF0ZSgpID09PSBmb3VySG91cnNFYXJsaWVyLmdldERhdGUoKVxuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICczJ1xuICAgICAgJiYgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzW2ldLmRpZmZpY3VsdHkgIT09ICctMScpIHtcbiAgICAgIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5ICs9IDE7XG4gICAgfVxuICAgIC8vICBlbHNlIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgIT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpKSB7XG4gICAgLy8gICBicmVhaztcbiAgICAvLyB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBmaXJzdFJlcGVhdFRpbWUgPSBuZXcgRGF0ZShzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0ub3B0aW9uYWwuZmlyc3RUaW1lIC0gNCAqIDM2MDAgKiAxMDAwKTtcbiAgICBjb25zdCBmb3VySG91cnNFYXJsaWVyID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDQgKiAzNjAwICogMTAwMCk7XG4gICAgaWYgKGZpcnN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJzMnXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xuICAgICAgYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXkgKz0gMTtcbiAgICB9XG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcbiAgICAvLyAgIGJyZWFrO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdsZWFybmVkIHdvcmRzIHRvZGF5OiAnLCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSk7XG4gIGNvbnNvbGUubG9nKCdsZWFybmVkIG5ldyB3b3JkcyB0b2RheTogJywgYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXkpO1xuXG4gIGNvbnN0IGFycmF5T2ZXb3Jkc0ZvclRvZGF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdXb3JkcyAtIGFscmVkeUxlYXJuZWROZXdXb3Jkc1RvZGF5OyBpICs9IDEpIHtcbiAgICBjb25zdCByYW5kb21Xb3JkID0gZ2V0UmFuZG9tV29yZCgpO1xuICAgIGFycmF5T2ZXb3Jkc0ZvclRvZGF5LnB1c2gocmFuZG9tV29yZCk7XG4gIH1cblxuICBjb25zdCBkaWZmaWN1bHQzVXNlcldvcmRzID0gYWxsVXNlcldvZHMuZmlsdGVyKChpdGVtKSA9PiAraXRlbS5kaWZmaWN1bHR5ID4gMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZmljdWx0M1VzZXJXb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJheU9mV29yZHNGb3JUb2RheS5sZW5ndGggPCBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5KSB7XG4gICAgICBjb25zdCBkaWZmaWN1bHRVc2VyV29yZCA9IGdldFdvcmRCeUlkKGRpZmZpY3VsdDNVc2VyV29yZHNbaV0ud29yZElkKTtcbiAgICAgIGFycmF5T2ZXb3Jkc0ZvclRvZGF5LnB1c2goZGlmZmljdWx0VXNlcldvcmQpO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoID49IG1heENhcmRzIC0gYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpZmZpY3VsdDJVc2VyV29yZHMgPSBhbGxVc2VyV29kcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmRpZmZpY3VsdHkgPT09IDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZpY3VsdDJVc2VyV29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoIDwgbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheVxuICAgICAgJiYgKG5vdy5nZXRUaW1lKCkgLSBkaWZmaWN1bHQyVXNlcldvcmRzW2ldLm9wdGlvbmFsLmxhc3RUaW1lKSAvIDYwMDAwIC8gNjAgPiAyMiAvLyDQtdGB0LvQuCDQsdC+0LvRjNGI0LUgMjIg0YfQsNGB0L7QsiDQvdC1INC/0L7QstGC0L7RgNGP0LvQvtGB0YxcbiAgICAgICYmIGRpZmZpY3VsdDJVc2VyV29yZHNbaV0ud29yZElkICE9PSAnNWVmZTM0ZTM2MzVhZWMwMDE3NjRkNzI1JykgeyAvLyDQs9C70Y7QulxuICAgICAgY29uc3Qgbm90RWFzeVVzZXJXb3JkID0gZ2V0V29yZEJ5SWQoZGlmZmljdWx0MlVzZXJXb3Jkc1tpXS53b3JkSWQpO1xuICAgICAgYXJyYXlPZldvcmRzRm9yVG9kYXkucHVzaChub3RFYXN5VXNlcldvcmQpO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoID49IG1heENhcmRzIC0gYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpZmZpY3VsdDFVc2VyV29yZHMgPSBhbGxVc2VyV29kcy5maWx0ZXIoKGl0ZW0pID0+ICtpdGVtLmRpZmZpY3VsdHkgPT09IDEpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZpY3VsdDFVc2VyV29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyYXlPZldvcmRzRm9yVG9kYXkubGVuZ3RoIDwgbWF4Q2FyZHMgLSBhbHJlZHlMZWFybmVkV29yZHNUb2RheVxuICAgICAgJiYgKG5vdy5nZXRUaW1lKCkgLSBkaWZmaWN1bHQxVXNlcldvcmRzW2ldLm9wdGlvbmFsLmxhc3RUaW1lKSAvIDYwMDAwIC8gNjAgPiA3MCkgeyAvLyDQtdGB0LvQuCDQsdC+0LvRjNGI0LUgNzAg0YfQsNGB0L7QsiDQvdC1INC/0L7QstGC0L7RgNGP0LvQvtGB0YxcbiAgICAgIGNvbnN0IGVhc3lVc2VyV29yZCA9IGdldFdvcmRCeUlkKGRpZmZpY3VsdDFVc2VyV29yZHNbaV0ud29yZElkKTtcbiAgICAgIGFycmF5T2ZXb3Jkc0ZvclRvZGF5LnB1c2goZWFzeVVzZXJXb3JkKTtcbiAgICB9IGVsc2UgaWYgKGFycmF5T2ZXb3Jkc0ZvclRvZGF5Lmxlbmd0aCA+PSBtYXhDYXJkcyAtIGFscmVkeUxlYXJuZWRXb3Jkc1RvZGF5KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygn0LLRgdC10LPQviDRgdGD0Ykg0YHQu9C+0LIgMysg0YHQu9C+0LbQvdC+0YHRgtC4OiAnLCBkaWZmaWN1bHQzVXNlcldvcmRzKTtcbiAgY29uc29sZS5sb2coJ9Cy0YHQtdCz0L4g0YHRg9GJINGB0LvQvtCyIDIg0YHQu9C+0LbQvdC+0YHRgtC4OiAnLCBkaWZmaWN1bHQyVXNlcldvcmRzKTtcbiAgY29uc29sZS5sb2coJ9Cy0YHQtdCz0L4g0YHRg9GJINGB0LvQvtCyIDEg0YHQu9C+0LbQvdC+0YHRgtC4OiAnLCBkaWZmaWN1bHQxVXNlcldvcmRzKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyYXlPZldvcmRzRm9yVG9kYXkpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXb3Jkc0FycmF5Rm9yVG9kYXk7XG4iLCJjb25zdCBnZXRSYW5kb21Xb3JkID0gYXN5bmMgKHdvcmRzKSA9PiB7XG4gIGNvbnN0IHJhbmRvbUdyb3VwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gIGNvbnN0IHJhbmRvbVBhZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCk7XG4gIGNvbnN0IHJhbmRvbVdvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCk7XG5cbiAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hZnRlcm5vb24tZmFsbHMtMjU4OTQuaGVyb2t1YXBwLmNvbS93b3Jkcz9wYWdlPSR7cmFuZG9tUGFnZX0mZ3JvdXA9JHtyYW5kb21Hcm91cH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3b3JkcyksXG4gIH0pO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGNvbnRlbnRbcmFuZG9tV29yZF0pO1xuICByZXR1cm4gY29udGVudFtyYW5kb21Xb3JkXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbVdvcmQ7XG4iLCJjb25zdCBnZXRTZXR0aW5ncyA9IGFzeW5jICh1c2VySWQsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJHt1c2VySWR9L3NldHRpbmdzYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gY29uc29sZS5sb2coY29udGVudCk7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2V0dGluZ3M7XG4iLCJjb25zdCBnZXRVc2VyV29yZEJ5SWQgPSBhc3luYyAodG9rZW4sIHdvcmRJZCwgdXNlcklkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hZnRlcm5vb24tZmFsbHMtMjU4OTQuaGVyb2t1YXBwLmNvbS91c2Vycy8ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCfRgdC70L7QstC+INC90LUg0L3QsNC50LTQtdC90L4nKTtcbiAgICByZXR1cm4gbnVsbDsgLy8gbm8gd29yZFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyV29yZEJ5SWQ7XG4iLCJjb25zdCBnZXRVc2VyV29yZHMgPSBhc3luYyAodG9rZW4sIHVzZXJJZCkgPT4ge1xuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS93b3Jkc2AsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBhbGxXb3JkcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zb2xlLmxvZyhhbGxXb3Jkcyk7XG4gIHJldHVybiBhbGxXb3Jkcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJXb3JkcztcbiIsImNvbnN0IGdldFdvcmRCeUlkID0gYXN5bmMgKHdvcmRJZCkgPT4ge1xuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3dvcmRzLyR7d29yZElkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcbiAgLy8gNWVmZTM0ZTM2MzVhZWMwMDE3NjRkNzI1ICAtINCz0LvRjtGH0L3QvtC1INGB0LvQvtCy0L5cbiAgLy8gY29uc29sZS5sb2coY29udGVudCwgd29yZElkKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXb3JkQnlJZDtcbiIsImNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYWZ0ZXJub29uLWZhbGxzLTI1ODk0Lmhlcm9rdWFwcC5jb20vc2lnbmluJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICB9KTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zdCB7IHRva2VuIH0gPSBjb250ZW50O1xuICAvLyBjb25zdCB7IHVzZXJJZCB9ID0gY29udGVudDtcbiAgLy8gY29uc29sZS5sb2coY29udGVudCk7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Vc2VyO1xuIiwiZnVuY3Rpb24gYWRkTXVsdGlDb2xvclJlc3VsdCgpIHtcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF93b3JkLWhpZGRlbicpO1xuICBpbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgY29uc3QgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbXVsdGlDb2xvclJlc3VsdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbXVsdGktY29sb3InKTtcblxuICBpbnB1dENvbnRhaW5lci5hcHBlbmQobXVsdGlDb2xvclJlc3VsdFdyYXBwZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRNdWx0aUNvbG9yUmVzdWx0O1xuIiwiaW1wb3J0IGdldFVzZXJXb3JkcyBmcm9tICcuL2dldC11c2VyLXdvcmRzJztcbmltcG9ydCBnZXRTZXR0aW5ncyBmcm9tICcuL2dldC1zZXR0aW5ncyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2dyZXNzKHRva2VuLCB1c2VySWQpIHtcbiAgY29uc3QgYWxsVXNlcldvZHMgPSBhd2FpdCBnZXRVc2VyV29yZHModG9rZW4sIHVzZXJJZCk7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3Qgc29ydGVkRnJvbU5ld0FsbFVzZXJXb2RzID0gYWxsVXNlcldvZHMuc29ydCgoYSwgYikgPT4gKGEub3B0aW9uYWwubGFzdFRpbWUgPCBiLm9wdGlvbmFsLmxhc3RUaW1lID8gMSA6IC0xKSk7XG4gIGxldCBhbHJlZHlMZWFybmVkV29yZHNUb2RheSA9IDA7XG4gIGxldCBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsYXN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5sYXN0VGltZSAtIDQgKiAzNjAwICogMTAwMCk7XG4gICAgY29uc3QgZm91ckhvdXJzRWFybGllciA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGlmIChsYXN0UmVwZWF0VGltZS5nZXREYXRlKCkgPT09IGZvdXJIb3Vyc0VhcmxpZXIuZ2V0RGF0ZSgpXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJzMnXG4gICAgICAmJiBzb3J0ZWRGcm9tTmV3QWxsVXNlcldvZHNbaV0uZGlmZmljdWx0eSAhPT0gJy0xJykge1xuICAgICAgYWxyZWR5TGVhcm5lZFdvcmRzVG9kYXkgKz0gMTtcbiAgICB9XG4gICAgLy8gIGVsc2UgaWYgKGxhc3RSZXBlYXRUaW1lLmdldERhdGUoKSAhPT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKCkpIHtcbiAgICAvLyAgIGJyZWFrO1xuICAgIC8vIH1cbiAgfVxuICBjb25zdCBiYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWFsbCBzcGFuJyk7XG4gIGJhckFsbC5zdHlsZS53aWR0aCA9IGAkeyhhbHJlZHlMZWFybmVkV29yZHNUb2RheSAvIHNldHRpbmdzLm9wdGlvbmFsLmNhcmRzUGVyRGF5KSAqIDEwMH0lYDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEZyb21OZXdBbGxVc2VyV29kcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGZpcnN0UmVwZWF0VGltZSA9IG5ldyBEYXRlKHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5vcHRpb25hbC5maXJzdFRpbWUgLSA0ICogMzYwMCAqIDEwMDApO1xuICAgIGNvbnN0IGZvdXJIb3Vyc0VhcmxpZXIgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gNCAqIDM2MDAgKiAxMDAwKTtcbiAgICBpZiAoZmlyc3RSZXBlYXRUaW1lLmdldERhdGUoKSA9PT0gZm91ckhvdXJzRWFybGllci5nZXREYXRlKClcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnMydcbiAgICAgICYmIHNvcnRlZEZyb21OZXdBbGxVc2VyV29kc1tpXS5kaWZmaWN1bHR5ICE9PSAnLTEnKSB7XG4gICAgICBhbHJlZHlMZWFybmVkTmV3V29yZHNUb2RheSArPSAxO1xuICAgIH1cbiAgICAvLyAgZWxzZSBpZiAobGFzdFJlcGVhdFRpbWUuZ2V0RGF0ZSgpICE9PSBmb3VySG91cnNFYXJsaWVyLmdldERhdGUoKSkge1xuICAgIC8vICAgYnJlYWs7XG4gICAgLy8gfVxuICB9XG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXIgc3BhbicpO1xuICBiYXIuc3R5bGUud2lkdGggPSBgJHsoYWxyZWR5TGVhcm5lZE5ld1dvcmRzVG9kYXkgLyBzZXR0aW5ncy53b3Jkc1BlckRheSkgKiAxMDB9JWA7XG5jb25zb2xlLmxvZyhiYXIuc3R5bGUud2lkdGgpXG4gIGlmIChiYXIuc3R5bGUud2lkdGggPT09ICcxMDAlJykge1xuICAgIGFkZE5vdGlmaWNhdGlvbigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyZXNzO1xuIiwiaW1wb3J0IGdldFNldHRpbmdzIGZyb20gJy4vZ2V0LXNldHRpbmdzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vaW5kZXgnO1xuXG5jb25zdCB2b2ljZUF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyk7XG5jb25zdCB2b2ljZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8tZXhhbXBsZScpO1xuY29uc3Qgdm9pY2VNZWFuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvLW1lYW5pbmcnKTtcblxuZnVuY3Rpb24gc2F5TWVhbmluZyh3b3JkLCBhcnIsIHJ1bkFwcCkge1xuICBpZiAod29yZC5hdWRpb01lYW5pbmcubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VNZWFuaW5nLnNyYyA9IGBkYXRhOmF1ZGlvL21wZWc7YmFzZTY0LCR7d29yZC5hdWRpb01lYW5pbmd9YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZU1lYW5pbmcuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdmlyc2tpYS9yc2xhbmctZGF0YS9tYXN0ZXIvJHt3b3JkLmF1ZGlvTWVhbmluZ31gO1xuICB9XG4gIHZvaWNlTWVhbmluZy5wbGF5KCk7XG4gIGlmIChydW5BcHApIHtcbiAgICB2b2ljZU1lYW5pbmcub25lbmRlZCA9ICgpID0+IGFwcChhcnJbYXJyLmxlbmd0aCAtIDFdLCBhcnIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNheUV4YW1wbGUod29yZCwgdXNlcklkLCB0b2tlbiwgYXJyLCBydW5BcHApIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncyh1c2VySWQsIHRva2VuKTtcblxuICBpZiAod29yZC5hdWRpb0V4YW1wbGUubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VFeGFtcGxlLnNyYyA9IGBkYXRhOmF1ZGlvL21wZWc7YmFzZTY0LCR7d29yZC5hdWRpb0V4YW1wbGV9YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZUV4YW1wbGUuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdmlyc2tpYS9yc2xhbmctZGF0YS9tYXN0ZXIvJHt3b3JkLmF1ZGlvRXhhbXBsZX1gO1xuICB9XG4gIHZvaWNlRXhhbXBsZS5wbGF5KCk7XG4gIGlmIChzZXR0aW5ncy5vcHRpb25hbC5zaG93VGV4dE1lYW5pbmcpIHtcbiAgICB2b2ljZUV4YW1wbGUub25lbmRlZCA9ICgpID0+IHNheU1lYW5pbmcod29yZCwgYXJyLCBydW5BcHApO1xuICB9IGVsc2UgaWYgKHJ1bkFwcCkge1xuICAgIHZvaWNlRXhhbXBsZS5vbmVuZGVkID0gKCkgPT4gYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNheVdvcmQod29yZCwgYXJyLCB1c2VySWQsIHRva2VuLCBydW5BcHAgPSB0cnVlKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3ModXNlcklkLCB0b2tlbik7XG5cbiAgaWYgKHdvcmQuYXVkaW8ubGVuZ3RoID4gMTAwKSB7XG4gICAgdm9pY2VBdWRpby5zcmMgPSBgZGF0YTphdWRpby9tcGVnO2Jhc2U2NCwke3dvcmQuYXVkaW99YDtcbiAgfSBlbHNlIHtcbiAgICB2b2ljZUF1ZGlvLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3ZpcnNraWEvcnNsYW5nLWRhdGEvbWFzdGVyLyR7d29yZC5hdWRpb31gO1xuICB9XG4gIHZvaWNlQXVkaW8ucGxheSgpO1xuICBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRFeGFtcGxlKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gc2F5RXhhbXBsZSh3b3JkLCB1c2VySWQsIHRva2VuLCBhcnIsIHJ1bkFwcCk7XG4gIH0gZWxzZSBpZiAoc2V0dGluZ3Mub3B0aW9uYWwuc2hvd1RleHRNZWFuaW5nKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gc2F5TWVhbmluZyh3b3JkLCBhcnIsIHJ1bkFwcCk7XG4gIH0gZWxzZSBpZiAocnVuQXBwKSB7XG4gICAgdm9pY2VBdWRpby5vbmVuZGVkID0gKCkgPT4gYXBwKGFyclthcnIubGVuZ3RoIC0gMV0sIGFycik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F5V29yZDtcbiIsImZ1bmN0aW9uIHNldElucHV0V2lkdGgod29yZCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhpZGRlbl9pbnB1dCcpO1xuXG4gIC8vIGlucHV0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgaW5wdXQuc3R5bGUud2lkdGggPSBgJHt3b3JkLndvcmQubGVuZ3RoIC8gMS41fWVtYDtcbiAgLy8gaW5wdXQuc3R5bGUuZm9udFNpemUgPSAnMWVtJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0SW5wdXRXaWR0aDtcbiIsImZ1bmN0aW9uIHNob3dEaWZmaWN1bHR5QnRucygpIHtcbiAgY29uc3QgYnRuc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eV9idG5zJyk7XG5cbiAgY29uc3QgZGlmZmljdWx0eTNidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGlmZmljdWx0eTNidG4uc2V0QXR0cmlidXRlKCdpZCcsICdkaWZmaWN1bHR5XzNfYnRuJyk7XG4gIGRpZmZpY3VsdHkzYnRuLnRleHRDb250ZW50ID0gJ0FnYWluJztcblxuICBjb25zdCBkaWZmaWN1bHR5MmJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkaWZmaWN1bHR5MmJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpZmZpY3VsdHlfMl9idG4nKTtcbiAgZGlmZmljdWx0eTJidG4udGV4dENvbnRlbnQgPSAnSGFyZCc7XG5cbiAgY29uc3QgZGlmZmljdWx0eTFidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGlmZmljdWx0eTFidG4uc2V0QXR0cmlidXRlKCdpZCcsICdkaWZmaWN1bHR5XzFfYnRuJyk7XG4gIGRpZmZpY3VsdHkxYnRuLnRleHRDb250ZW50ID0gJ05vcm1hbCc7XG5cbiAgY29uc3QgZGlmZmljdWx0eTBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGlmZmljdWx0eTBidG4uc2V0QXR0cmlidXRlKCdpZCcsICdkaWZmaWN1bHR5XzBfYnRuJyk7XG4gIGRpZmZpY3VsdHkwYnRuLnRleHRDb250ZW50ID0gJ0Vhc3knO1xuXG4gIGJ0bnNXcmFwcGVyLmFwcGVuZChkaWZmaWN1bHR5M2J0biwgZGlmZmljdWx0eTJidG4sIGRpZmZpY3VsdHkxYnRuLCBkaWZmaWN1bHR5MGJ0bik7XG4gIHJldHVybiBidG5zV3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gaGlkZURpZmZpY3VsdHlCdG5zKCkge1xuICBjb25zdCBidG5zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmaWN1bHR5X2J0bnMnKTtcbiAgYnRuc1dyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd0Fuc3dlckJ0bigpIHtcbiAgY29uc3Qgc2hvd0Fuc3dlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VyX2J0bicpO1xuICBzaG93QW5zd2VyV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IHNob3dBbnN3ZXJidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2hvd0Fuc3dlcmJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fuc3dlcl9idG4nKTtcbiAgc2hvd0Fuc3dlcmJ0bi50ZXh0Q29udGVudCA9ICdTaG93IEFuc3dlcic7XG4gIHNob3dBbnN3ZXJXcmFwcGVyLmFwcGVuZChzaG93QW5zd2VyYnRuKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RpZmZpY3VsdFdvcmRCdG4oKSB7XG4gIGNvbnN0IHNob3dEaWZmaWN1bHRXb3JkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmaWN1bHRfYnRuJyk7XG4gIHNob3dEaWZmaWN1bHRXb3JkV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IHNob3dEaWZmaWN1bHRXb3JkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNob3dEaWZmaWN1bHRXb3JkYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlmZmljdWx0X2J0bicpO1xuICBzaG93RGlmZmljdWx0V29yZGJ0bi50ZXh0Q29udGVudCA9ICdNYXJrIGFzIFwiZGlmZmljdWx0XCInO1xuICBzaG93RGlmZmljdWx0V29yZFdyYXBwZXIuYXBwZW5kKHNob3dEaWZmaWN1bHRXb3JkYnRuKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RlbGV0ZVdvcmRCdG4oKSB7XG4gIGNvbnN0IHNob3dEZWxldGVXb3JkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfYnRuJyk7XG4gIHNob3dEZWxldGVXb3JkV3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IHNob3dEZWxldGVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2hvd0RlbGV0ZWJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZV9idG4nKTtcbiAgc2hvd0RlbGV0ZWJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBzaG93RGVsZXRlV29yZFdyYXBwZXIuYXBwZW5kKHNob3dEZWxldGVidG4pO1xufVxuXG5leHBvcnQge1xuICBzaG93RGlmZmljdWx0eUJ0bnMsIGhpZGVEaWZmaWN1bHR5QnRucywgc2hvd0Fuc3dlckJ0biwgc2hvd0RpZmZpY3VsdFdvcmRCdG4sIHNob3dEZWxldGVXb3JkQnRuLFxufTtcbiIsImZ1bmN0aW9uIHNob3dGdWxsVGV4dEV4YW1wbGUod29yZEluZm8pIHtcbiAgY29uc3QgZXhhbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX3BocmFzZScpO1xuICBleGFtcGxlLmlubmVySFRNTCA9IHdvcmRJbmZvLnRleHRFeGFtcGxlO1xufVxuXG5mdW5jdGlvbiBzaG93RnVsbFRleHRNZWFuaW5nKHdvcmRJbmZvKSB7XG4gIGNvbnN0IG1lYW5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9tZWFuaW5nJyk7XG4gIG1lYW5pbmcuaW5uZXJIVE1MID0gd29yZEluZm8udGV4dE1lYW5pbmc7XG59XG5cbmV4cG9ydCB7IHNob3dGdWxsVGV4dEV4YW1wbGUsIHNob3dGdWxsVGV4dE1lYW5pbmcgfTtcbiIsImNvbnN0IHVwZGF0ZVVzZXJXb3JkID0gYXN5bmMgKHtcbiAgdXNlcklkLCB0b2tlbiwgd29yZElkLCB3b3JkLFxufSkgPT4ge1xuICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FmdGVybm9vbi1mYWxscy0yNTg5NC5oZXJva3VhcHAuY29tL3VzZXJzLyR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdvcmQpLFxuICB9KTtcbiAgY29uc3QgdXBkYXRlZFdvcmQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2codXBkYXRlZFdvcmQpO1xuICByZXR1cm4gdXBkYXRlZFdvcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVVc2VyV29yZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=