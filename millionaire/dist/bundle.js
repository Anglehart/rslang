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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\r\n  constructor(config) {\r\n    this.components = config.components;\r\n    this.template = config.template;\r\n    this.selector = config.selector;\r\n    this.el = null;\r\n  }\r\n\r\n  start() {\r\n    this.components.forEach(this.renderComponent.bind(this));\r\n  }\r\n\r\n  renderComponent(c) {\r\n    c.render();\r\n  }\r\n\r\n  render() {\r\n    this.el = document.querySelector(this.selector);\r\n    this.el.innerHTML = this.template;\r\n    if (!(this.initComponent === undefined)) this.initComponent();\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\r\n\n\n//# sourceURL=webpack:///./app/core.component.js?");

/***/ }),

/***/ "./app/game.component.js":
/*!*******************************!*\
  !*** ./app/game.component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n/* harmony import */ var _rounds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rounds.component */ \"./app/rounds.component.js\");\n/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.service */ \"./app/network.service.js\");\n/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats.service */ \"./app/stats.service.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(config) {\r\n    super(config);\r\n    this.currentRound = 0;\r\n    this.currentAnswer = '';\r\n  }\r\n\r\n  initComponent() {\r\n    this.startNewGame();\r\n    document.querySelector('.new-game-btn').addEventListener('click', () => this.startNewGame());\r\n    document.querySelector('.tip-5050').addEventListener('click', () => this.tip5050());\r\n    document.querySelector('.tip-expert').addEventListener('click', () => this.tipExpert());\r\n    document.querySelector('.tip-lang').addEventListener('click', () => this.tipLang());\r\n  }\r\n\r\n  startNewGame() {\r\n    document.querySelector('.new-game-btn').classList.add('disable');\r\n    document.querySelector('.win').classList.add('disable');\r\n    document.querySelectorAll('.tip').forEach((item) => {\r\n      item.classList.remove('used-tip');\r\n    });\r\n    this.currentRound = 1;\r\n    _rounds_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawRounds();\r\n    this.startNewRound();\r\n  }\r\n\r\n  async startNewRound() {\r\n    _rounds_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeRound(this.currentRound);\r\n    document.querySelector('.answers').innerHTML = '';\r\n    const arr = await _network_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getDataForRound(this.currentRound);\r\n    const wordsArray = arr[0];\r\n    const question = arr[1];\r\n    this.drawQuestion(wordsArray, question);\r\n    this.currentRound += 1;\r\n    [this.currentAnswer] = wordsArray;\r\n  }\r\n\r\n  drawQuestion(wordsArray, question) {\r\n    document.querySelector('.question').innerHTML = question;\r\n    wordsArray.forEach((item, i) => {\r\n      const option = document.createElement('div');\r\n      option.classList.add('option');\r\n      option.id = `option${i}`;\r\n      option.dataWord = item.word;\r\n      option.dataId = item.id;\r\n      option.innerHTML = `<span class=\"opt-word\">${item.word}</span><span class=\"opt-trans disable\">${item.wordTranslate}</span>`;\r\n      if (_network_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomInteger(0, 1) === 0) {\r\n        document.querySelector('.answers').append(option);\r\n      } else {\r\n        document.querySelector('.answers').prepend(option);\r\n      }\r\n    });\r\n    document.querySelectorAll('.option').forEach((item) => {\r\n      item.addEventListener('click', () => {\r\n        if (event.currentTarget.classList.contains('active-answer')) {\r\n          this.checkAnswer(event.currentTarget);\r\n        } else {\r\n          document.querySelectorAll('.option').forEach((obj) => {\r\n            obj.classList.remove('active-answer');\r\n          });\r\n          event.currentTarget.classList.add('active-answer');\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  checkAnswer(answer) {\r\n    document.querySelectorAll('.option').forEach((item) => {\r\n      item.style.pointerEvents = 'none';\r\n    });\r\n\r\n    for (let i = 0; i <= 800; i += 200) {\r\n      setTimeout(() => { document.getElementById('option0').classList.toggle('correct-answer'); }, i);\r\n    }\r\n    setTimeout(() => {\r\n      if (answer.id === 'option0') {\r\n        document.querySelector('.currentRound').innerHTML = answer.dataWord;\r\n        if (this.currentRound === 16) {\r\n          _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].correct(answer.dataId);\r\n          this.winGame();\r\n        } else {\r\n          _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].correct(answer.dataId);\r\n          this.startNewRound();\r\n        }\r\n      } else {\r\n        this.loseGame(answer.dataId);\r\n      }\r\n    }, 1500);\r\n  }\r\n\r\n  winGame() {\r\n    document.querySelectorAll('.option').forEach((obj) => {\r\n      obj.style.pointerEvents = 'none';\r\n    });\r\n    document.querySelector('.new-game-btn').classList.remove('disable');\r\n    document.querySelector('.win').classList.remove('disable');\r\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateStats('millionaire', true);\r\n  }\r\n\r\n  loseGame(answerId) {\r\n    document.querySelectorAll('.option').forEach((obj) => {\r\n      obj.style.pointerEvents = 'none';\r\n    });\r\n    document.querySelector('.new-game-btn').classList.remove('disable');\r\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].wrong(answerId);\r\n    _stats_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateStats('millionaire', false);\r\n  }\r\n\r\n  tip5050() {\r\n    document.querySelector('.tip-5050').classList.add('used-tip');\r\n    document.getElementById('option2').innerHTML = '';\r\n    document.getElementById('option3').innerHTML = '';\r\n    document.getElementById('option2').style.pointerEvents = 'none';\r\n    document.getElementById('option3').style.pointerEvents = 'none';\r\n  }\r\n\r\n  tipExpert() {\r\n    document.querySelector('.tip-expert').classList.add('used-tip');\r\n    document.querySelectorAll('.option').forEach((item) => { item.classList.remove('active-answer'); });\r\n    document.getElementById('option0').classList.add('active-answer');\r\n  }\r\n\r\n  tipLang() {\r\n    document.querySelector('.tip-lang').classList.add('used-tip');\r\n    document.querySelectorAll('.opt-word').forEach((item) => item.classList.add('disable'));\r\n    document.querySelectorAll('.opt-trans').forEach((item) => item.classList.remove('disable'));\r\n  }\r\n}\r\n\r\nconst game = new Game({\r\n  selector: '.game-wrapper',\r\n  template: '<div class=\"question\"></div><div class=\"answers\"></div><div class=\"win disable\">Congratulations! You won!</div><div class=\"new-game-btn disable\">New game?</div>',\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\r\n\n\n//# sourceURL=webpack:///./app/game.component.js?");

/***/ }),

/***/ "./app/network.service.js":
/*!********************************!*\
  !*** ./app/network.service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass NetworkService {\r\n  async getDataForRound(round) {\r\n    let group = 0;\r\n    if (round < 4) {\r\n      group = 0;\r\n    } else if (round >= 4 && round < 7) {\r\n      group = 1;\r\n    } else if (round >= 7 && round < 10) {\r\n      group = 2;\r\n    } else if (round === 10 || round === 11) {\r\n      group = 3;\r\n    } else if (round === 12 || round === 13) {\r\n      group = 4;\r\n    } else if (round === 14 || round === 15) {\r\n      group = 5;\r\n    }\r\n    const wordArray = await this.getWords(group);\r\n    const definition = await this.wordsAPI(wordArray[0]);\r\n    return [wordArray, definition];\r\n  }\r\n\r\n  async wordsAPI(word) {\r\n    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${word.word}/definitions`, {\r\n      method: 'GET',\r\n      headers: {\r\n        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',\r\n        'x-rapidapi-key': 'a2e3a10c09msh3a5cbdc010f793fp1b3879jsnaf4c8929aac8',\r\n      },\r\n    })\r\n      .then((response) => response.json())\r\n      .then((response) => response.definitions[0].definition)\r\n      .catch((err) => console.log(err));\r\n  }\r\n\r\n  async getWords(group) {\r\n    const page = this.randomInteger(0, 29);\r\n    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;\r\n    return fetch(url)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        const array = [];\r\n        for (let i = 0; i < 4; i += 1) {\r\n          const word = data[this.randomInteger(0, 19)];\r\n          if (!array.includes(word)) {\r\n            array.push(word);\r\n          } else {\r\n            i -= 1;\r\n          }\r\n        }\r\n        return array;\r\n      })\r\n      .catch((err) => console.log(err));\r\n  }\r\n\r\n  randomInteger(min, max) {\r\n    const rand = min - 0.5 + Math.random() * (max - min + 1);\r\n    return Math.round(rand);\r\n  }\r\n}\r\n\r\nconst networkService = new NetworkService();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (networkService);\r\n\n\n//# sourceURL=webpack:///./app/network.service.js?");

/***/ }),

/***/ "./app/overlay.component.js":
/*!**********************************!*\
  !*** ./app/overlay.component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n\r\n\r\nclass Overlay extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(config) {\r\n    super(config);\r\n    this.iKnow = [];\r\n    this.iDontKnow = [];\r\n  }\r\n\r\n  initComponent() {\r\n    this.showIntro();\r\n    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });\r\n  }\r\n\r\n  showIntro() {\r\n    document.querySelector('.wrapper').classList.add('disable');\r\n    document.querySelector('.intro').classList.remove('disable');\r\n  }\r\n\r\n  hideIntro() {\r\n    document.querySelector('.wrapper').classList.remove('disable');\r\n    document.querySelector('.intro').classList.add('disable');\r\n  }\r\n}\r\n\r\nconst overlay = new Overlay({\r\n  selector: '.overlay',\r\n  template: '',\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (overlay);\r\n\n\n//# sourceURL=webpack:///./app/overlay.component.js?");

/***/ }),

/***/ "./app/rounds.component.js":
/*!*********************************!*\
  !*** ./app/rounds.component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ \"./app/core.component.js\");\n\r\n\r\nclass Rounds extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(config) {\r\n    super(config);\r\n    this.currentRound = 0;\r\n    this.currentAnswer = '';\r\n  }\r\n\r\n  drawRounds() {\r\n    document.querySelector('.rounds-wrapper').innerHTML = '';\r\n    for (let i = 1; i < 16; i += 1) {\r\n      const wordRow = document.createElement('div');\r\n      wordRow.id = `round${i}`;\r\n      wordRow.classList.add('wordRow');\r\n      wordRow.innerHTML = `Round №${i}`;\r\n      document.querySelector('.rounds-wrapper').append(wordRow);\r\n    }\r\n  }\r\n\r\n  changeRound(round) {\r\n    document.querySelectorAll('.wordRow').forEach((item) => { item.classList.remove('currentRound'); });\r\n    document.getElementById(`round${round}`).classList.add('currentRound');\r\n  }\r\n}\r\n\r\nconst rounds = new Rounds({\r\n  selector: '.rounds-wrapper',\r\n  template: '',\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (rounds);\r\n\n\n//# sourceURL=webpack:///./app/rounds.component.js?");

/***/ }),

/***/ "./app/stats.service.js":
/*!******************************!*\
  !*** ./app/stats.service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Stats {\n  getUserId() {\n    return localStorage.getItem('userId');\n  }\n\n  getToken() {\n    return localStorage.getItem('token');\n  }\n\n  async addWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: now.getTime(),\n        lastTime: now.getTime(),\n      },\n    };\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async checkWord(wordId) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    });\n    const data = await (res.ok ? res.json() : false);\n    return data;\n  }\n\n  async checkDifficulty(wordId) {\n    const data = await this.checkWord(wordId);\n    return data.difficulty;\n  }\n\n  async checkFirstTime(wordId) {\n    const data = await this.checkWord(wordId);\n    if (!data.optional.firstTime) {\n      data.optional.firstTime = new Date();\n    }\n    return data.optional.firstTime;\n  }\n\n  async updateWord(wordId, difficulty) {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;\n    const now = new Date();\n    const firstTime = await this.checkFirstTime(wordId);\n    const body = {\n      difficulty: `${difficulty}`,\n      optional: {\n        firstTime: `${firstTime}`,\n        lastTime: `${now}`,\n      },\n    };\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  async getStats() {\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    const res = await fetch(url, {\n      method: 'GET',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n    });\n    const data = await (res.ok ? res.json() : false);\n    return data;\n  }\n\n  async updateStats(gameName, gameResult) {\n    const now = new Date();\n    const body = await this.getStats();\n    body.optional[`${gameName}All`] += 1;\n    if (gameResult) {\n      body.optional[`${gameName}Win`] += 1;\n    } else {\n      body.optional[`${gameName}Lose`] += 1;\n    }\n    body.optional[`${gameName}Last`] = now;\n    delete body.id;\n    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;\n    await fetch(url, {\n      method: 'PUT',\n      headers: {\n        Authorization: `Bearer ${this.getToken()}`,\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(body),\n    });\n  }\n\n  // изменяет сложность слова на \"3\"\n  async wrong(wordId) {\n    if (await this.checkWord(wordId)) {\n      this.updateWord(wordId, 3);\n    } else {\n      this.addWord(wordId, 3);\n    }\n  }\n\n  // уменьшает сложность слова на \"1\", если его текущая сложность > 0\n  async correct(wordId) {\n    if (await this.checkWord(wordId) !== false) {\n      const currDiffuculty = await this.checkDifficulty(wordId);\n      const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);\n      this.updateWord(wordId, difficulty);\n    } else {\n      this.addWord(wordId, 0);\n    }\n  }\n}\n\nconst stats = new Stats();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stats);\n\n\n//# sourceURL=webpack:///./app/stats.service.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/core.component */ \"./app/core.component.js\");\n/* harmony import */ var _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/overlay.component */ \"./app/overlay.component.js\");\n/* harmony import */ var _app_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/game.component */ \"./app/game.component.js\");\n/* harmony import */ var _app_rounds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/rounds.component */ \"./app/rounds.component.js\");\n\r\n\r\n\r\n\r\n\r\nconst component = new _app_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]({\r\n  components: [\r\n    _app_overlay_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    _app_rounds_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    _app_game_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  ],\r\n});\r\n\r\ncomponent.start();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });