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

/***/ "./app/core.component.js":
/*!*******************************!*\
  !*** ./app/core.component.js ***!
  \*******************************/
/*! exports provided: Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n  constructor(config) {\n    this.components = config.components;\n    this.template = config.template;\n    this.selector = config.selector;\n    this.el = null;\n  }\n\n  start() {\n    this.components.forEach(this.renderComponent.bind(this));\n  }\n\n  renderComponent(c) {\n    c.render();\n  }\n\n  render() {\n    this.el = document.querySelector(this.selector);\n    this.el.innerHTML = this.template;\n    if (!(this.initComponent === undefined)) this.initComponent();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n//# sourceURL=webpack:///./app/core.component.js?");

/***/ }),

/***/ "./app/game.component.js":
/*!*******************************!*\
  !*** ./app/game.component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _rounds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rounds.component */ \"./app/rounds.component.js\");\n/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.service */ \"./app/network.service.js\");\n/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats.service */ \"./app/stats.service.js\");\n\n\n\n\n\nclass Game extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(config) {\n    super(config);\n    this.currentRound = 0;\n    this.currentAnswer = '';\n  }\n\n  initComponent() {\n    this.startNewGame();\n    document.querySelector('.new-game-btn').addEventListener('click', () => this.startNewGame());\n    document.querySelector('.tip-5050').addEventListener('click', () => this.tip5050());\n    document.querySelector('.tip-expert').addEventListener('click', () => this.tipExpert());\n    document.querySelector('.tip-lang').addEventListener('click', () => this.tipLang());\n  }\n\n  startNewGame() {\n    document.querySelector('.new-game-btn').classList.add('disable');\n    document.querySelector('.win').classList.add('disable');\n    document.querySelectorAll('.tip').forEach((item) => {\n      item.classList.remove('used-tip');\n    });\n    this.currentRound = 1;\n    _rounds_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawRounds();\n    this.startNewRound();\n  }\n\n  async startNewRound() {\n    _rounds_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeRound(this.currentRound);\n    document.querySelector('.answers').innerHTML = '';\n    const arr = await _network_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getDataForRound(this.currentRound);\n    const wordsArray = arr[0];\n    const question = arr[1];\n    this.drawQuestion(wordsArray, question);\n    this.currentRound += 1;\n    [this.currentAnswer] = wordsArray;\n  }\n\n  drawQuestion(wordsArray, question) {\n    document.querySelector('.question').innerHTML = question;\n    wordsArray.forEach((item, i) => {\n      const option = document.createElement('div');\n      option.classList.add('option');\n      option.id = `option${i}`;\n      option.dataWord = item.word;\n      option.dataId = item.id;\n      option.innerHTML = `<span class=\"opt-word\">${item.word}</span><span class=\"opt-trans disable\">${item.wordTranslate}</span>`;\n      if (_network_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomInteger(0, 1) === 0) {\n        document.querySelector('.answers').append(option);\n      } else {\n        document.querySelector('.answers').prepend(option);\n      }\n    });\n    document.querySelectorAll('.option').forEach((item) => {\n      item.addEventListener('click', () => {\n        if (event.currentTarget.classList.contains('active-answer')) {\n          this.checkAnswer(event.currentTarget);\n        } else {\n          document.querySelectorAll('.option').forEach((obj) => {\n            obj.classList.remove('active-answer');\n          });\n          event.currentTarget.classList.add('active-answer');\n        }\n      });\n    });\n  }\n\n  checkAnswer(answer) {\n    document.querySelectorAll('.option').forEach((item) => {\n      item.style.pointerEvents = 'none';\n    });\n\n    for (let i = 0; i <= 800; i += 200) {\n      setTimeout(() => { document.getElementById('option0').classList.toggle('correct-answer'); }, i);\n    }\n    setTimeout(() => {\n      if (answer.id === 'option0') {\n        document.querySelector('.currentRound').innerHTML = answer.dataWord;\n        if (this.currentRound === 16) {\n          _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].correct(answer.dataId);\n          this.winGame();\n        } else {\n          _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].correct(answer.dataId);\n          this.startNewRound();\n        }\n      } else {\n        this.loseGame(answer.dataId);\n      }\n    }, 1500);\n  }\n\n  winGame() {\n    document.querySelectorAll('.option').forEach((obj) => {\n      obj.style.pointerEvents = 'none';\n    });\n    document.querySelector('.new-game-btn').classList.remove('disable');\n    document.querySelector('.win').classList.remove('disable');\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateStats('millionaire', true);\n  }\n\n  loseGame(answerId) {\n    document.querySelectorAll('.option').forEach((obj) => {\n      obj.style.pointerEvents = 'none';\n    });\n    document.querySelector('.new-game-btn').classList.remove('disable');\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].wrong(answerId);\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateStats('millionaire', false);\n  }\n\n  tip5050() {\n    document.querySelector('.tip-5050').classList.add('used-tip');\n    document.getElementById('option2').innerHTML = '';\n    document.getElementById('option3').innerHTML = '';\n    document.getElementById('option2').style.pointerEvents = 'none';\n    document.getElementById('option3').style.pointerEvents = 'none';\n  }\n\n  tipExpert() {\n    document.querySelector('.tip-expert').classList.add('used-tip');\n    document.querySelectorAll('.option').forEach((item) => { item.classList.remove('active-answer'); });\n    document.getElementById('option0').classList.add('active-answer');\n  }\n\n  tipLang() {\n    document.querySelector('.tip-lang').classList.add('used-tip');\n    document.querySelectorAll('.opt-word').forEach((item) => item.classList.add('disable'));\n    document.querySelectorAll('.opt-trans').forEach((item) => item.classList.remove('disable'));\n  }\n}\n\nconst game = new Game({\n  selector: '.game-wrapper',\n  template: '<div class=\"question\"></div><div class=\"answers\"></div><div class=\"win disable\">Congratulations! You won!</div><div class=\"new-game-btn disable\">New game?</div>',\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n\n//# sourceURL=webpack:///./app/game.component.js?");

/***/ }),

/***/ "./app/network.service.js":
/*!********************************!*\
  !*** ./app/network.service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass NetworkService {\n  async getDataForRound(round) {\n    let group = 0;\n    if (round < 4) {\n      group = 0;\n    } else if (round >= 4 && round < 7) {\n      group = 1;\n    } else if (round >= 7 && round < 10) {\n      group = 2;\n    } else if (round === 10 || round === 11) {\n      group = 3;\n    } else if (round === 12 || round === 13) {\n      group = 4;\n    } else if (round === 14 || round === 15) {\n      group = 5;\n    }\n    const wordArray = await this.getWords(group);\n    const definition = await this.wordsAPI(wordArray[0]);\n    return [wordArray, definition];\n  }\n\n  async wordsAPI(word) {\n    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${word.word}/definitions`, {\n      method: 'GET',\n      headers: {\n        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',\n        'x-rapidapi-key': 'a2e3a10c09msh3a5cbdc010f793fp1b3879jsnaf4c8929aac8',\n      },\n    })\n      .then((response) => response.json())\n      .then((response) => response.definitions[0].definition)\n      .catch((err) => console.log(err));\n  }\n\n  async getWords(group) {\n    const page = this.randomInteger(0, 29);\n    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;\n    return fetch(url)\n      .then((response) => response.json())\n      .then((data) => {\n        const array = [];\n        for (let i = 0; i < 4; i += 1) {\n          const word = data[this.randomInteger(0, 19)];\n          if (!array.includes(word)) {\n            array.push(word);\n          } else {\n            i -= 1;\n          }\n        }\n        return array;\n      })\n      .catch((err) => console.log(err));\n  }\n\n  randomInteger(min, max) {\n    const rand = min - 0.5 + Math.random() * (max - min + 1);\n    return Math.round(rand);\n  }\n}\n\nconst networkService = new NetworkService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (networkService);\n\n\n//# sourceURL=webpack:///./app/network.service.js?");

/***/ }),

/***/ "./app/overlay.component.js":
/*!**********************************!*\
  !*** ./app/overlay.component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n\n\nclass Overlay extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(config) {\n    super(config);\n    this.iKnow = [];\n    this.iDontKnow = [];\n  }\n\n  initComponent() {\n    this.showIntro();\n    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });\n  }\n\n  showIntro() {\n    document.querySelector('.wrapper').classList.add('disable');\n    document.querySelector('.intro').classList.remove('disable');\n  }\n\n  hideIntro() {\n    document.querySelector('.wrapper').classList.remove('disable');\n    document.querySelector('.intro').classList.add('disable');\n  }\n}\n\nconst overlay = new Overlay({\n  selector: '.overlay',\n  template: '',\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (overlay);\n\n\n//# sourceURL=webpack:///./app/overlay.component.js?");

/***/ }),

/***/ "./app/rounds.component.js":
/*!*********************************!*\
  !*** ./app/rounds.component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n\n\nclass Rounds extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(config) {\n    super(config);\n    this.currentRound = 0;\n    this.currentAnswer = '';\n  }\n\n  drawRounds() {\n    document.querySelector('.rounds-wrapper').innerHTML = '';\n    for (let i = 1; i < 16; i += 1) {\n      const wordRow = document.createElement('div');\n      wordRow.id = `round${i}`;\n      wordRow.classList.add('wordRow');\n      wordRow.innerHTML = `Round №${i}`;\n      document.querySelector('.rounds-wrapper').append(wordRow);\n    }\n  }\n\n  changeRound(round) {\n    document.querySelectorAll('.wordRow').forEach((item) => { item.classList.remove('currentRound'); });\n    document.getElementById(`round${round}`).classList.add('currentRound');\n  }\n}\n\nconst rounds = new Rounds({\n  selector: '.rounds-wrapper',\n  template: '',\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rounds);\n\n\n//# sourceURL=webpack:///./app/rounds.component.js?");

/***/ }),

/***/ "./app/stats.service.js":
/*!******************************!*\
  !*** ./app/stats.service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Stats {\n  getUserId() {\n    return localStorage.getItem('userId');\n  }\n\n  getToken() {\n    return localStorage.getItem('token');\n  }\n\n  async addWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: now.getTime(),\n        lastTime: now.getTime(),\n      },\n    };\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async checkWord(wordId) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    });\n    const data = await res.json();\n    let result = false;\n    data.forEach((item) => {\n      if (item.wordId === wordId) {\n        result = item;\n      }\n    });\n    return result;\n  }\n\n  async checkDifficulty(wordId) {\n    const data = await this.checkWord(wordId);\n    return data.difficulty;\n  }\n\n  async checkFirstTime(wordId) {\n    const data = await this.checkWord(wordId);\n    if (!data.optional.firstTime) {\n      data.optional.firstTime = new Date();\n    }\n    return data.optional.firstTime;\n  }\n\n  async updateWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const firstTime = await this.checkFirstTime(wordId);\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: `${firstTime}`,\n        lastTime: `${now}`,\n      },\n    };\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async getStats() {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    });\n    const data = await (res.ok ? res.json() : false);\n    return data;\n  }\n\n  async updateStats(gameName, gameResult) {\n    if (!this.getToken()) {\n      return false;\n    }\n    const now = new Date();\n    const body = await this.getStats();\n    body.optional[`${gameName}All`] += 1;\n    if (gameResult) {\n      body.optional[`${gameName}Win`] += 1;\n    } else {\n      body.optional[`${gameName}Lose`] += 1;\n    }\n    body.optional[`${gameName}Last`] = now;\n    delete body.id;\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n    return false;\n  }\n\n  // изменяет сложность слова на \"3\"\n  async wrong(wordId) {\n    if (!this.getToken()) {\n      return false;\n    }\n    if (await this.checkWord(wordId)) {\n      this.updateWord(wordId, 3);\n    } else {\n      this.addWord(wordId, 3);\n    }\n    return false;\n  }\n\n  // уменьшает сложность слова на \"1\", если его текущая сложность > 0\n  async correct(wordId) {\n    if (!this.getToken()) {\n      return false;\n    }\n\n    if (await this.checkWord(wordId) !== false) {\n      const currDiffuculty = await this.checkDifficulty(wordId);\n      const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);\n      this.updateWord(wordId, difficulty);\n    } else {\n      this.addWord(wordId, 0);\n    }\n    return false;\n  }\n}\n\nconst stats = new Stats();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stats);\n\n\n//# sourceURL=webpack:///./app/stats.service.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/core.component */ \"./app/core.component.js\");\n/* harmony import */ var _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/overlay.component */ \"./app/overlay.component.js\");\n/* harmony import */ var _app_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/game.component */ \"./app/game.component.js\");\n/* harmony import */ var _app_rounds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/rounds.component */ \"./app/rounds.component.js\");\n\n\n\n\n\nconst component = new _app_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]({\n  components: [\n    _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    _app_rounds_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _app_game_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  ],\n});\n\ncomponent.start();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
