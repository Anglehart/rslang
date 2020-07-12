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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/control.component.js":
/*!**********************************!*\
  !*** ./app/control.component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ \"./app/storage.service.js\");\n/* harmony import */ var _voice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice.service */ \"./app/voice.service.js\");\n/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.component */ \"./app/overlay.component.js\");\n/* harmony import */ var _words_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./words.component */ \"./app/words.component.js\");\n\n\n\n\n\n\nclass Control extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  initComponent() {\n    document.querySelector('.speak-button').addEventListener('click', () => {\n      if (_storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus() === 'false') this.gameStartStop();\n    });\n    document.querySelector('.restart-button').addEventListener('click', () => { this.restartGame(); });\n    document.querySelector('.results-button').addEventListener('click', () => { _overlay_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showResults(); });\n    _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStop();\n  }\n\n  gameStartStop() {\n    _voice_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].voiceStartStop();\n    _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStartStop();\n    document.querySelector('.word-field').classList.toggle('disable');\n    document.querySelector('.word-translate').classList.toggle('disable');\n    document.querySelector('.speak-button').classList.toggle('activeBtn');\n  }\n\n  restartGame() {\n    document.querySelectorAll('.word-item').forEach((item) => {\n      item.classList.remove('active-word');\n    });\n    _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStop();\n    _voice_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listening = true;\n    _voice_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].voiceStartStop();\n    document.querySelector('.word-field').classList.add('disable');\n    document.querySelector('.word-translate').innerHTML = '';\n    document.querySelector('.speak-button').classList.remove('activeBtn');\n    document.querySelector('.word-image').style.backgroundImage = `url(${_words_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaultPic})`;\n    document.querySelector('.score').innerHTML = '';\n    _overlay_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawResults([], _words_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentWords);\n  }\n}\n\nconst control = new Control({\n  selector: '.control-wrapper',\n  template: `\n    <div class=\"btn restart-button\">Restart</div>\n    <div class=\"btn speak-button\">Speak please</div>\n    <div class=\"btn results-button\">Results</div>\n    `,\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (control);\n\n\n//# sourceURL=webpack:///./app/control.component.js?");

/***/ }),

/***/ "./app/core.component.js":
/*!*******************************!*\
  !*** ./app/core.component.js ***!
  \*******************************/
/*! exports provided: Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n  constructor(config) {\n    this.components = config.components;\n    this.template = config.template;\n    this.selector = config.selector;\n    this.el = null;\n    this.defaultPic = '/app/assets/team17.jpg';\n    this.dataLink = 'https://raw.githubusercontent.com/Anglehart/rslang-data/master/';\n  }\n\n  start() {\n    this.components.forEach(this.renderComponent.bind(this));\n  }\n\n  renderComponent(c) {\n    c.render();\n  }\n\n  render() {\n    this.el = document.querySelector(this.selector);\n    this.el.innerHTML = this.template;\n    if (!(this.initComponent === undefined)) this.initComponent();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n//# sourceURL=webpack:///./app/core.component.js?");

/***/ }),

/***/ "./app/levels.component.js":
/*!*********************************!*\
  !*** ./app/levels.component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ \"./app/storage.service.js\");\n/* harmony import */ var _words_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words.component */ \"./app/words.component.js\");\n\n\n\n\nclass Levels extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  initComponent() {\n    let currentLevel = 0;\n    if (!_storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLevel()) {\n      _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLevel(currentLevel);\n    } else {\n      currentLevel = _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLevel();\n    }\n\n    document.querySelectorAll('.level-buttons li')[currentLevel].classList.add('active-level');\n    document.querySelectorAll('.level-buttons li').forEach((item, i) => {\n      item.addEventListener('click', () => {\n        _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLevel(i);\n        document.querySelector('.items-wrapper').innerHTML = '';\n        document.querySelector('.word-translate').innerHTML = '';\n        document.querySelectorAll('.level-buttons li').forEach((el) => { el.classList.remove('active-level'); });\n        event.target.classList.add('active-level');\n        document.querySelector('.score').innerHTML = '';\n        document.querySelector('.word-field').value = '';\n        _words_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].newGame();\n      });\n    });\n  }\n\n  addStar() {\n    const star = document.createElement('div');\n    star.classList.add('star');\n    document.querySelector('.score').append(star);\n  }\n}\n\nconst levels = new Levels({\n  selector: '.levels-wrapper',\n  template: `\n    <ul class=\"level-buttons\">\n      <li class=\"level0\"></li>\n      <li class=\"level1\"></li>\n      <li class=\"level2\"></li>\n      <li class=\"level3\"></li>\n      <li class=\"level4\"></li>\n      <li class=\"level5\"></li>\n    </ul>\n    <div class=\"score\"></div>\n    `,\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels);\n\n\n//# sourceURL=webpack:///./app/levels.component.js?");

/***/ }),

/***/ "./app/overlay.component.js":
/*!**********************************!*\
  !*** ./app/overlay.component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _words_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words.component */ \"./app/words.component.js\");\n/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.service */ \"./app/stats.service.js\");\n\n\n\n\nclass Overlay extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(config) {\n    super(config);\n    this.correctWords = [];\n  }\n\n  initComponent() {\n    this.showIntro();\n    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });\n    document.querySelector('.return').addEventListener('click', () => { this.hideResults(); });\n    document.querySelectorAll('.new-game').forEach((item) => {\n      item.addEventListener('click', () => {\n        this.hideResults();\n        _words_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newGame();\n        if (this.correctWords.length < 10) {\n          _stats_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStats('speakit', false);\n        }\n      });\n    });\n  }\n\n  showIntro() {\n    document.querySelector('main').classList.add('hidden');\n    document.querySelector('.intro').classList.remove('hidden');\n  }\n\n  hideIntro() {\n    document.querySelector('main').classList.remove('hidden');\n    document.querySelector('.intro').classList.add('hidden');\n  }\n\n  drawResults(correctWords, inCorrectWords) {\n    document.querySelector('.stats').innerHTML = '';\n\n    const error = document.createElement('div');\n    error.classList.add('errors');\n    error.innerHTML = `<p>Errors: <span>${inCorrectWords.length}</span></p>`;\n    document.querySelector('.stats').append(error);\n\n    inCorrectWords.forEach((item) => {\n      const falseWord = document.createElement('div');\n      falseWord.classList.add('statsWord');\n      falseWord.innerHTML = `<p><span>${item.word}</span> ${item.transcription} ${item.wordTranslate}</p>`;\n      document.querySelector('.stats').append(falseWord);\n      falseWord.onclick = () => {\n        new Audio(`${this.dataLink}${item.audio}`).play();\n      };\n    });\n\n    const success = document.createElement('div');\n    success.classList.add('success');\n    success.innerHTML = `<p>Success: <span>${correctWords.length}</span></p>`;\n    document.querySelector('.stats').append(success);\n\n    correctWords.forEach((item) => {\n      const trueWord = document.createElement('div');\n      trueWord.classList.add('statsWord');\n      trueWord.innerHTML = `<p><span>${item.word}</span> ${item.transcription} ${item.wordTranslate}</p>`;\n      document.querySelector('.stats').append(trueWord);\n      trueWord.onclick = () => {\n        new Audio(`${this.dataLink}${item.audio}`).play();\n      };\n    });\n\n    this.correctWords = correctWords;\n    if (this.correctWords.length === 10) {\n      _stats_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStats('speakit', true);\n    }\n  }\n\n  showResults() {\n    document.querySelector('main').classList.add('hidden');\n    document.querySelector('.results').classList.remove('hidden');\n  }\n\n  hideResults() {\n    document.querySelector('main').classList.remove('hidden');\n    document.querySelector('.results').classList.add('hidden');\n  }\n}\n\nconst overlay = new Overlay({\n  selector: '.overlay',\n  template: '',\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (overlay);\n\n\n//# sourceURL=webpack:///./app/overlay.component.js?");

/***/ }),

/***/ "./app/stats.service.js":
/*!******************************!*\
  !*** ./app/stats.service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Stats {\n  getUserId() {\n    return localStorage.getItem('userId');\n  }\n\n  getToken() {\n    return localStorage.getItem('token');\n  }\n\n  async addWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: now.getTime(),\n        lastTime: now.getTime(),\n      },\n    };\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async checkWord(wordId) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    })\n      .catch(() => false);\n    const data = await (res.ok ? res.json() : false);\n    return data;\n  }\n\n  async checkDifficulty(wordId) {\n    const data = await this.checkWord(wordId);\n    return data.difficulty;\n  }\n\n  async checkFirstTime(wordId) {\n    const data = await this.checkWord(wordId);\n    if (!data.optional.firstTime) {\n      data.optional.firstTime = new Date();\n    }\n    return data.optional.firstTime;\n  }\n\n  async updateWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const firstTime = await this.checkFirstTime(wordId);\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: `${firstTime}`,\n        lastTime: `${now}`,\n      },\n    };\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async getStats() {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    });\n    const data = await (res.ok ? res.json() : false);\n    return data;\n  }\n\n  async updateStats(gameName, gameResult) {\n    const now = new Date();\n    const body = await this.getStats();\n    body.optional[`${gameName}All`] += 1;\n    if (gameResult) {\n      body.optional[`${gameName}Win`] += 1;\n    } else {\n      body.optional[`${gameName}Lose`] += 1;\n    }\n    body.optional[`${gameName}Last`] = now;\n    delete body.id;\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  // изменяет сложность слова на \"3\"\n  async wrong(wordId) {\n    if (await this.checkWord(wordId)) {\n      this.updateWord(wordId, 3);\n    } else {\n      this.addWord(wordId, 3);\n    }\n  }\n\n  // уменьшает сложность слова на \"1\", если его текущая сложность > 0\n  async correct(wordId) {\n    if (await this.checkWord(wordId) !== false) {\n      const currDiffuculty = await this.checkDifficulty(wordId);\n      const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);\n      this.updateWord(wordId, difficulty);\n    } else {\n      this.addWord(wordId, 0);\n    }\n  }\n}\n\nconst stats = new Stats();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stats);\n\n\n//# sourceURL=webpack:///./app/stats.service.js?");

/***/ }),

/***/ "./app/storage.service.js":
/*!********************************!*\
  !*** ./app/storage.service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass StorageService {\n  setLevel(levelId) {\n    localStorage.setItem('level', levelId);\n  }\n\n  getLevel() {\n    return localStorage.getItem('level');\n  }\n\n  gameStartStop() {\n    if (this.gameStatus() === 'false') {\n      localStorage.setItem('gameStatus', true);\n    } else {\n      localStorage.setItem('gameStatus', false);\n    }\n  }\n\n  gameStop() {\n    localStorage.setItem('gameStatus', false);\n  }\n\n  gameStatus() {\n    return localStorage.getItem('gameStatus');\n  }\n}\n\nconst storageService = new StorageService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (storageService);\n\n\n//# sourceURL=webpack:///./app/storage.service.js?");

/***/ }),

/***/ "./app/voice.service.js":
/*!******************************!*\
  !*** ./app/voice.service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _words_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words.component */ \"./app/words.component.js\");\n\n\nclass VoiceService {\n  constructor() {\n    this.recognation = null;\n    this.listening = false;\n  }\n\n  voiceStartStop() {\n    // Специально для тех, кто запретит доступ к микрофону\n    navigator.getMedia = (navigator.getUserMedia\n      || navigator.webkitGetUserMedia\n      || navigator.mozGetUserMedia\n      || navigator.msGetUserMedia);\n\n    if (this.listening) {\n      try {\n        this.recognation.removeEventListener('end', this.recognation.start);\n        this.recognation.stop();\n      } catch (ex) { console.log('No mic'); }\n    } else {\n      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;\n      this.recognation = new SpeechRecognition();\n      this.recognation.lang = 'en-US';\n      this.recognation.interimResults = true;\n      navigator.getMedia({ audio: true }, () => {\n        this.recognation.start();\n        this.listenRequest();\n      }, () => {});\n    }\n    this.listening = !this.listening;\n  }\n\n  listenRequest() {\n    this.recognation.addEventListener('result', (e) => {\n      const transcript = Array.from(e.results)\n        .map((result) => result[0])\n        .map((result) => result.transcript)\n        .join('');\n      if (e.results[0].isFinal) {\n        _words_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkWord(transcript);\n      }\n    });\n    this.recognation.addEventListener('end', this.recognation.start);\n  }\n}\nconst voiceService = new VoiceService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (voiceService);\n\n\n//# sourceURL=webpack:///./app/voice.service.js?");

/***/ }),

/***/ "./app/words.component.js":
/*!********************************!*\
  !*** ./app/words.component.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ \"./app/storage.service.js\");\n/* harmony import */ var _levels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels.component */ \"./app/levels.component.js\");\n/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.component */ \"./app/overlay.component.js\");\n/* harmony import */ var _voice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voice.service */ \"./app/voice.service.js\");\n\n\n\n\n\n\nclass Words extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(config) {\n    super(config);\n    this.currentWords = [];\n    this.correctWords = [];\n    this.inCorrectWords = [];\n    this.defaultPic = '../src/app/assets/team17.jpg';\n  }\n\n  initComponent() {\n    this.newGame();\n  }\n\n  newGame() {\n    try {\n      document.querySelector('.items-wrapper').innerHTML = '';\n      _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStop();\n      _voice_service__WEBPACK_IMPORTED_MODULE_4__[\"default\"].listening = true;\n      _voice_service__WEBPACK_IMPORTED_MODULE_4__[\"default\"].voiceStartStop();\n      document.querySelector('.word-field').classList.add('disable');\n      document.querySelector('.word-translate').innerHTML = '';\n      document.querySelector('.word-translate').classList.remove('disable');\n      document.querySelector('.speak-button').classList.remove('activeBtn');\n      document.querySelector('.word-image').style.backgroundImage = `url(${this.defaultPic})`;\n      document.querySelector('.score').innerHTML = '';\n      this.correctWords = [];\n      this.inCorrectWords = [];\n    } finally { console.log('Start new game'); }\n    this.getWords();\n  }\n\n  getWords() {\n    const currentLevel = _storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLevel();\n    const page = this.randomInteger(0, 29);\n    const halfOfArray = this.randomInteger(1, 2);\n    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${currentLevel}`;\n\n    fetch(url)\n      .then((response) => {\n        if (response.ok) return response;\n        return Promise.reject();\n      })\n      .then((response) => response.json())\n      .then((data) => {\n        if (halfOfArray === 1) return data.slice(0, 10);\n        return data.slice(10);\n      })\n      .then((data) => {\n        this.prepareData(data);\n      });\n  }\n\n  prepareData(data) {\n    this.currentWords = [...data];\n    this.inCorrectWords = [...data];\n    _overlay_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawResults(this.correctWords, this.inCorrectWords);\n    data.forEach((item) => {\n      const { id } = item;\n      const word = item.word.toLowerCase();\n      const audioUrl = `${this.dataLink}${item.audio}`;\n      const imageUrl = `${this.dataLink}${item.image}`;\n      const translate = item.wordTranslate;\n      const transcript = item.transcription;\n      this.drawWords(id, word, audioUrl, imageUrl, translate, transcript);\n    });\n    document.querySelector('.word-image').style.background = `url(${this.defaultPic})`;\n  }\n\n  randomInteger(min, max) {\n    const rand = min - 0.5 + Math.random() * (max - min + 1);\n    return Math.round(rand);\n  }\n\n  drawWords(id, word, audioUrl, imageUrl, translate, transcript) {\n    const wordItem = document.createElement('a');\n    wordItem.onclick = () => {\n      if (_storage_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus() === 'false') {\n        this.changeImage(imageUrl);\n        new Audio(`${audioUrl}`).play();\n        this.changeTranslate(translate);\n      }\n    };\n    wordItem.id = id;\n    wordItem.innerHTML = `<p class=\"word\">${word}</p><p class=\"transcript\">${transcript}</p>`;\n    wordItem.classList.add('word-item');\n    document.querySelector('.items-wrapper').append(wordItem);\n  }\n\n  changeImage(imageUrl) {\n    const image = new Image();\n    image.src = imageUrl;\n    image.onload = () => {\n      document.querySelector('.word-image').style.backgroundImage = `url(${imageUrl})`;\n    };\n  }\n\n  changeTranslate(translate) {\n    const wordTranslate = document.createElement('div');\n    wordTranslate.innerHTML = translate;\n    wordTranslate.classList.add('word-translate');\n    document.querySelector('.word-translate').replaceWith(wordTranslate);\n  }\n\n  checkWord(transcript) {\n    const word = transcript.toLowerCase();\n    document.querySelector('.word-field').value = word;\n    this.inCorrectWords.forEach((item) => {\n      if (item.word === word) {\n        document.getElementById(`${item.id}`).classList.add('active-word');\n        const imageUrl = `${this.dataLink}${item.image}`;\n        this.changeImage(imageUrl);\n        _levels_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addStar();\n        this.correctWords.push(item);\n        const wordIndex = this.inCorrectWords.indexOf(item);\n        this.inCorrectWords.splice(wordIndex, 1);\n        _overlay_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawResults(this.correctWords, this.inCorrectWords);\n      }\n    });\n    if (this.inCorrectWords.length === 0) _overlay_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showResults();\n  }\n}\n\nconst words = new Words({\n  selector: '.words-wrapper',\n  template: `\n    <div class=\"word-image\"></div>\n    <div class=\"word-translate\"></div>\n    <input class=\"word-field disable\" type=\"text\" class=\"input\" readonly=\"\">\n    <div class=\"items-wrapper\"></div>\n  `,\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (words);\n\n\n//# sourceURL=webpack:///./app/words.component.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/core.component */ \"./app/core.component.js\");\n/* harmony import */ var _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/overlay.component */ \"./app/overlay.component.js\");\n/* harmony import */ var _app_levels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/levels.component */ \"./app/levels.component.js\");\n/* harmony import */ var _app_words_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/words.component */ \"./app/words.component.js\");\n/* harmony import */ var _app_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/control.component */ \"./app/control.component.js\");\n\n\n\n\n\n\nconst component = new _app_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]({\n  components: [\n    _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    _app_levels_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    _app_control_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    _app_words_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  ],\n});\n\ncomponent.start();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });