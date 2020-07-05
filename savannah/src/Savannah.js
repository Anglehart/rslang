import SavannahUI from './SavannahUI.js';
// const timeForAnswer = 5000;

class Savannah {

  constructor() {
    this.ui = new SavannahUI;

    this.ui.startButton.addEventListener('click', () => {
      this.startClicked();
    });

    this.ui.gamePage.addEventListener('click', (event) => {
      this.ui.word.classList.remove('animation');
      const selectedTranslation = event.target.closest('.translation');
      if (selectedTranslation && !this.ui.answerHandled) {
        this.handleAnswer(selectedTranslation);
      }
    });
    this.ui.word.addEventListener('animationend', () => {
      if(!this.ui.answerHandled)
      this.ui.word.classList.remove('animation');
      this.startNextRound();
      new Audio ('audio/failed.mp3').play();
      this.createFailIcon();
      this.searchRightTranslation(); 
      const word = this.questionWord;
      this.gameStatistics.fail.push(word);
    })

    document.addEventListener('keypress', (event) => {
      if (!this.gameStarted || this.ui.answerHandled) return;
      this.ui.word.classList.remove('animation');
      const keyName = event.key;
      switch (keyName) {
        case '1':
        case '2':
        case '3':
        case '4':
          Array.from(this.ui.answers.querySelectorAll('.translation')).forEach((translation) => {
            const selectedTranslation = translation;
            if (keyName === translation.innerText.charAt(0)) {
              this.handleAnswer(selectedTranslation);
            }
          });
      }
    });
  }

  handleAnswer(selectedTranslation) {
    this.ui.answerHandled = true;
    // clearInterval(this.timer);
    this.checkAnswer(selectedTranslation);
  }

  checkAnswer(selectedTranslation) {
    const translationWord = selectedTranslation.querySelector('.translationWord');
    const word = this.questionWord;
    if (translationWord.innerText === word.wordTranslate) {
      selectedTranslation.classList.add('active');
      new Audio('audio/correct.mp3').play();
      // let part =  this.ui.backgroundPosition/10;
      this.ui.backgroundPosition -= 15;
      this.ui.container.style.backgroundPositionY = `${this.ui.backgroundPosition}%`;
      this.gameStatistics.success.push(word);
    } else {
      selectedTranslation.classList.add('fail');
      this.createFailIcon();
      this.searchRightTranslation(); 
      new Audio ('audio/failed.mp3').play();
      this.gameStatistics.fail.push(word);
      console.log(this.gameStatistics.fail);
      //add sound
    }
    this.startNextRound();
  }

  searchRightTranslation() {
    let rightWord;
    const translationWords = Array.from(this.ui.answers.querySelectorAll('.translationWord'));
    translationWords.forEach((translationWord) => {
      if(translationWord.innerText === this.ui.word.getAttribute('data')) {
        rightWord = translationWord;
        translationWord.parentNode.classList.add('active');
      }
    });
    return rightWord;
  }

  gameStatistics = {
    fail : [],
    success : []
  }

  finishGame() {
    this.ui.createFinalPage(this.gameStatistics);
    new Audio('audio/notification.mp3').play();

    this.ui.finalPage.addEventListener('click', (event) => {
      if (event.target.className === "fa fa-volume-down") {
        event.target.firstElementChild.play();
        console.log(event.target);
      } else if (event.target.id === 'homePageButton') {
        this.clearPreviousDataGame();
        //choose a game
        this.ui.mainPage.style.display = 'block';
      } else if (event.target.id === 'continueButton') {
        this.clearPreviousDataGame();
        setTimeout(() => this.ui.mainPage.style.display = 'block', 1000);
      }
    });
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


  startClicked() {
    this.ui.mainPage.style.display = 'none';
    new Audio('audio/round.mp3').play();
    this.createCountdown();
    this.countDown();
    this.count = setInterval(() => this.countDown(), 1000);
    setTimeout(() => this.startNextRound(), 3000);
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
    this.ui.countRoundsGame = 0;
    this.ui.backgroundPosition = 100;
    this.ui.container.style.backgroundPositionY = `${this.ui.backgroundPosition}%`;
  }

  startNextRound() {
    if (this.ui.iconsContainer.children[3].closest('.fail-icon') || this.ui.countRoundsGame === 10 ) {
      // clearInterval(this.timer);
      this.ui.gamePage.style.display = 'none';
      setTimeout(() => this.finishGame(), 1000);
      this.gameStarted = false;
    } else {
      this.gameStarted = true;
      this.getWords()
      .then(() => {
        this.ui.mainPage.style.display = 'none';
        this.ui.gamePage.style.display = 'block';
        this.ui.word.classList.add('animation');
        // this.timer = setInterval(() => this.moveWordDown(), 8);
        // this.timeStarted = Date.now();
        // this.wordPosition = 0;
        Array.from(this.ui.answers.children).forEach((answer) => {
          answer.classList.remove('active');
          answer.classList.remove('fail');
        });
        this.ui.answerHandled = false;
        this.ui.countRoundsGame += 1;
      });
    }
  }
 
  
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
 
  getWords() {
    const page = this.randomInteger(0, 29);
    const group = this.ui.level;
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setAnswers(data);
      });
  }

  setAnswers(data) {
    let arrayOfAnswers = this.getArrayOfAnswers(data);
    this.shuffle(arrayOfAnswers);
    this.ui.translationWord1.innerText = arrayOfAnswers[0];
    this.ui.translationWord2.innerText = arrayOfAnswers[1];
    this.ui.translationWord3.innerText = arrayOfAnswers[2];
    this.ui.translationWord4.innerText = arrayOfAnswers[3];
  }

  getArrayOfAnswers(data) {
    let numReserve = this.getArrayOfRandomNumbers();
    this.getQuestionWord(data);
    let arrayOfAnswers = [this.questionWord.wordTranslate, data[numReserve[0]].wordTranslate, data[numReserve[1]].wordTranslate, data[numReserve[2]].wordTranslate];
    this.ui.word.innerText = this.questionWord.word;
    this.ui.word.setAttribute('data', this.questionWord.wordTranslate);
    return arrayOfAnswers;
  }
  questionWord;

  getQuestionWord(data) {
    const randomWord = this.randomInteger(0,19);
    this.questionWord = data[randomWord];
    console.log(this.questionWord);
    return this.questionWord;
  }

  getArrayOfRandomNumbers() {
  let numReserve = [];
    while (numReserve.length < 3) {
      let randomNumber = Math.ceil(Math.random() * 19);
      let found = false;
      for (let i = 0; i < numReserve.length; i++) {
        if (numReserve[i] === randomNumber){
          found = true;
          break;
        }
      }
      if (!found) { numReserve[numReserve.length]=randomNumber; }
    }
    return numReserve;
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  moveWordDown() {
    // const now = Date.now();
    if (now - this.timeStarted > timeForAnswer) {
      // clearInterval(this.timer);
      this.startNextRound();
      new Audio ('audio/failed.mp3').play();
      this.createFailIcon();
      this.searchRightTranslation(); 
      const word = this.questionWord;
      this.gameStatistics.fail.push(word);
      return;
    }
    this.wordPosition += 0.1;
    this.ui.word.style.top = `${this.wordPosition}vh`;
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
