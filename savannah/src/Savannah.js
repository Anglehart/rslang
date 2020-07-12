import SavannahUI from './SavannahUI.js';
import stats from './Stats.js';

class Savannah {

  constructor() {
    this.answerHandled = false;
    this.countRoundsGame = 0;
    this.ui = new SavannahUI;

    this.ui.startButton.addEventListener('click', () => {
      this.startClicked();
    });

    this.ui.gamePage.addEventListener('click', (event) => {
      this.ui.word.classList.remove('animation');
      this.ui.word.innerText = '';
      const selectedTranslation = event.target.closest('.translation');
      if (selectedTranslation && !this.answerHandled) {
        this.checkAnswer(selectedTranslation);
      }
    });

    this.ui.word.addEventListener('animationend', () => {
      this.ui.word.classList.remove('animation');
      this.ui.word.innerText = '';
      this.handleFailAnswer(this.questionWord);
      setTimeout(() => this.startNextRound(), 1000);
    });

    document.addEventListener('keypress', (event) => {
      if (!this.gameStarted || this.answerHandled) return;
      this.ui.word.classList.remove('animation');
      this.ui.word.innerText = '';
      const keyName = event.key;
      switch (keyName) {
        case '1':
        case '2':
        case '3':
        case '4':
          Array.from(this.ui.answers.querySelectorAll('.translation')).forEach((translation) => {
            if (keyName === translation.innerText.charAt(0)) {
              this.checkAnswer(translation);
            }
          });
      }
    });
    this.getEnglishWords();
  }

  checkAnswer(selectedTranslation) {
    this.answerHandled = true;
    const translationWord = selectedTranslation.querySelector('.translationWord');
    const word = this.questionWord;
    if (translationWord.innerText === word.wordTranslate) {
      selectedTranslation.classList.add('active');
      new Audio('audio/correct.mp3').play();
      this.ui.backgroundPosition -= 10;
      this.ui.container.style.backgroundPositionY = `${this.ui.backgroundPosition}%`;
      this.gameStatistics.success.push(word);
      stats.correct(word.id);
    } else {
      selectedTranslation.classList.add('fail');
      this.handleFailAnswer(word);
    }
    setTimeout(() => this.startNextRound(), 1000);
  }

  handleFailAnswer(word) {
    this.createFailIcon();
    this.searchRightTranslation();
    new Audio('audio/failed.mp3').play();
    this.gameStatistics.fail.push(word);
    stats.wrong(word.id);
  }

  searchRightTranslation() {
    let rightWord;
    Array.from(this.ui.answers.querySelectorAll('.translationWord')).forEach((translationWord) => {
      if (translationWord.innerText === this.questionWord.wordTranslate) {
        rightWord = translationWord;
        translationWord.parentNode.classList.add('active');
      }
    });
    return rightWord;
  }

  gameStatistics = {
    fail: [],
    success: []
  }

  finishGame() {
    this.ui.createFinalPage(this.gameStatistics);
    this.ui.finalPage.addEventListener('click', (event) => {
      if (event.target.className === "fa fa-volume-down") {
        event.target.firstElementChild.play();
      } else if (event.target.id === 'homePageButton') {
        this.clearPreviousDataGame();
        document.location.href = '../../index.html';
        this.ui.mainPage.style.display = 'block';
      } else if (event.target.id === 'continueButton') {
        this.clearPreviousDataGame();
        setTimeout(() => this.ui.mainPage.style.display = 'block', 1000);
      }
    });

    if (this.gameStatistics.fail.length === 0) {
      stats.updateStats('savanna', true);
    } else {
      stats.updateStats('savanna', false);
    }
    new Audio('audio/notification.mp3').play();
  }

  createFailIcon() {
    let min = 5;
    let successIcon;
    Array.from(this.ui.iconsContainer.children).forEach((icon) => {
      const num = icon.getAttribute('data');
      if (!icon.closest('.fail-icon') && num < min){
        min = num;
        successIcon = icon;
      }
    });
    successIcon.classList.add('fail-icon');
  }

  createCountdown () {
    this.countdownContainer = document.createElement('div');
    this.countdownContainer.className = 'ready-active';
    this.ui.container.append(this.countdownContainer);

    this.countdownNumber = document.createElement('div');
    this.countdownContainer.append(this.countdownNumber);
  }
  current_count = 3;
  countDown() {
    let countVal = '';
      if (this.current_count >= 1) {
        countVal = this.current_count;
        this.current_count--;
      }
      else {
        clearInterval(this.count);
      }
    this.countdownNumber.innerText = countVal;
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  startClicked() {
    this.ui.mainPage.style.display = 'none';
    new Audio('audio/round.mp3').play();
    this.createCountdown();
    this.countDown();
    this.count = setInterval(() => this.countDown(), 1000);
    setTimeout(() => {
      this.ui.gamePage.style.display = 'block';
      this.startNextRound();
    }, 3000);
  }

  clearPreviousDataGame() {
    this.gameStatistics.fail = [];
    this.gameStatistics.success = [];
    this.ui.finalPage.remove();
    this.countdownContainer.remove();
    this.current_count = 3;
    clearInterval(this.count);
    Array.from(this.ui.iconsContainer.children).forEach((icon) => {
      icon.classList.remove('fail-icon');
    });
    this.countRoundsGame = 0;
    this.ui.backgroundPosition = 100;
    this.ui.container.style.backgroundPositionY = `${this.ui.backgroundPosition}%`;
  }

  getEnglishWords() {
    if (this.getUserId() && this.getToken()) {
      return this.getUseraggregatedWords();
    } else {
      return this.getWords();
    }
  }

  startNextRound() {
    if (this.ui.iconsContainer.children[3].closest('.fail-icon') || this.countRoundsGame === 10 ) {
      this.ui.gamePage.style.display = 'none';
      setTimeout(() => this.finishGame(), 1000);
      this.gameStarted = false;
    } else {
      this.ui.clearAnswers();
      this.gameStarted = true;
      this.countRoundsGame += 1;
      if (this.wordsToLearn.length < 10) {
          this.getEnglishWords()
          .then(() => this.setAnswers());
      } else {
        this.setAnswers();
      }
    }
  }


  randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  wordsToLearn = [];

  getWords() {
    const page = this.randomInteger(0, 29);
    const group = this.ui.level;
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Array.prototype.push.apply(this.wordsToLearn, data);
      });
  }

  getUseraggregatedWords() {
    const userId = this.getUserId();
    const token = this.getToken();
    const filter = '{"$or":[{"userWord.difficulty":"1"},{"userWord.difficulty":"2"},{"userWord.difficulty":"3"}]}';
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=100&onlyUserWords=true&filter=${filter}`;
    return fetch(url, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    }).then((res) => res.json())
      .then((data) => {
        Array.prototype.push.apply(this.wordsToLearn, data[0].paginatedResults);
        console.log(this.wordsToLearn.length);
      });
  }

  setAnswers() {
    let arrayOfAnswers = this.getArrayOfAnswers();
    this.shuffle(arrayOfAnswers);
    this.ui.translationWord1.innerText = arrayOfAnswers[0];
    this.ui.translationWord2.innerText = arrayOfAnswers[1];
    this.ui.translationWord3.innerText = arrayOfAnswers[2];
    this.ui.translationWord4.innerText = arrayOfAnswers[3];
    this.answerHandled = false;
  }

  getArrayOfAnswers() {
    const numReserve = this.getArrayOfRandomNumbers();
    this.questionWord = this.generateQuestionWord();
    let arrayOfAnswers = [
      this.questionWord.wordTranslate,
      this.wordsToLearn[numReserve[0]].wordTranslate,
      this.wordsToLearn[numReserve[1]].wordTranslate,
      this.wordsToLearn[numReserve[2]].wordTranslate
    ];
    this.ui.word.classList.add('animation');
    this.ui.word.innerText = this.questionWord.word;
    return arrayOfAnswers;
  }

  generateQuestionWord() {
    const random = this.randomInteger(0, this.wordsToLearn.length);
    let word = this.wordsToLearn[random];
    this.wordsToLearn.splice(random, 1);
    if (word._id) word.id = word._id;
    return word;
  }

  getArrayOfRandomNumbers() {
  let numReserve = [];
    while (numReserve.length < 3) {
      let randomNumber = Math.ceil(Math.random() * this.wordsToLearn.length - 1);
      let found = false;
      for (let i = 0; i < numReserve.length; i++) {
        if (numReserve[i] === randomNumber){
          found = true;
          break;
        }
      }

      if (!found) {
        numReserve[numReserve.length] = randomNumber;
      }
    }
    return numReserve;
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  setLevel() {
    this.ui.levelButtons.forEach((element) => {
      element.classList.add('active');
    });
  }

  getContainer() {
    return this.ui.container;
  }
}

export default Savannah;
