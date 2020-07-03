const timeForAnswer = 5000; // 5 sec

class Savannah {
  constructor () {  
    this.createContainer();
    this.createMainPage();
    this.createGamePage();

    window.addEventListener('load', () => {
      this.container.style.display = 'block';
    });
  }

  createGamePage () {
    this.gamePage = document.createElement('div');
    this.gamePage.className = 'game-page';
    this.gamePage.id = 'gamePage';
    this.container.append(this.gamePage);

    this.header = document.createElement('div');
    this.header.className = 'header';
    this.gamePage.append(this.header);

    this.iconsContainer = document.createElement('div');
    this.iconsContainer.className = 'icons-container';
    this.header.append(this.iconsContainer);

    this.closeButton = document.createElement('div');
    this.closeButton.className = 'close';
    this.closeButton.id = 'closeButton';
    this.header.append(this.closeButton);

    this.createReaultsIcon();
    this.question = document.createElement('div');
    this.question.className = 'question';
    this.gamePage.append(this.question);

    this.word = document.createElement('div');
    this.word.className = 'word';
    this.word.id = 'word';
    this.word.innerText = 'word';
    this.question.append(this.word);

    this.answers = document.createElement('div');
    this.answers.className = 'answers';
    this.answers.id = 'answers';
    this.gamePage.append(this.answers);

    this.translation1 = document.createElement('div');
    this.translation1.className = 'translation';
    this.answers.append(this.translation1);
    this.translationNumber1 = document.createElement('span');
    this.translationNumber1.innerText = '1 ';
    this.translation1.append(this.translationNumber1);
    this.translationWord1 = document.createElement('span');
    this.translationWord1.className = 'translationWord';
    this.translation1.append(this.translationWord1);

    this.translation2 = document.createElement('div');
    this.translation2.className = 'translation';
    this.answers.append(this.translation2);
    this.translationNumber2 = document.createElement('span');
    this.translationNumber2.innerText = '2 ';
    this.translation2.append(this.translationNumber2);
    this.translationWord2 = document.createElement('span');
    this.translationWord2.className = 'translationWord';
    this.translation2.append(this.translationWord2);

    this.translation3 = document.createElement('div');
    this.translation3.className = 'translation';
    this.answers.append(this.translation3);
    this.translationNumber3 = document.createElement('span');
    this.translationNumber3.innerText = '3 ';
    this.translation3.append(this.translationNumber3);
    this.translationWord3 = document.createElement('span');
    this.translationWord3.className = 'translationWord';
    this.translation3.append(this.translationWord3);

    this.translation4 = document.createElement('div');
    this.translation4.className = 'translation';
    this.answers.append(this.translation4);
    this.translationNumber4 = document.createElement('span');
    this.translationNumber4.innerText = '4 ';
    this.translation4.append(this.translationNumber4);
    this.translationWord4 = document.createElement('span');
    this.translationWord4.className = 'translationWord';
    this.translation4.append(this.translationWord4);
    this.answerHandled = false;
    this.countRoundsGame = 0;
    this.backgroundPosition = 100;
    this.closeButton.addEventListener('click', () => {
      clearInterval(this.timer);
      this.gamePage.style.display = 'none';
      this.mainPage.style.display = 'block';
    });
    this.gamePage.addEventListener('click', (event) => {
      const selectedTranslation = event.target.closest('.translation');
      if (selectedTranslation && !this.answerHandled) {
        this.answerHandled = true;
        clearInterval(this.timer);
        this.checkAnswer(selectedTranslation);
      }
    });

    document.addEventListener('keypress', (event) => {
      if (!this.gameStarted || this.answerHandled) return;
      const keyName = event.key;
      switch (keyName) {
        case '1':
        case '2':
        case '3':
        case '4':
          Array.from(this.answers.querySelectorAll('.translation')).forEach((translation) => {
            const selectedTranslation = translation;
            if (keyName === translation.innerText.charAt(0)) {
              this.answerHandled = true;
              clearInterval(this.timer);
              this.checkAnswer(selectedTranslation);
            }
          })
      }
    });
  }
  
  checkAnswer(selectedTranslation) {
    const translationWord = selectedTranslation.querySelector('.translationWord');
    const word = {word: this.word.innerText, translation: this.word.getAttribute('data')};
    if (translationWord.innerText === this.word.getAttribute('data')) {
      selectedTranslation.classList.add('active');
      new Audio('audio/correct.mp3').play();
      this.backgroundPosition -= 5;
      this.container.style.backgroundPositionY = `${this.backgroundPosition}%`;
      this.gameStatistics.success.push(word);
      //move background
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
    const translationWords = Array.from(this.answers.querySelectorAll('.translationWord'));
    translationWords.forEach((translationWord) => {
      if(translationWord.innerText === this.word.getAttribute('data')) {
        rightWord = translationWord;
        translationWord.parentNode.classList.add('active');
      }
    })
    return rightWord;
  }

  gameStatistics = {
    fail : [],
    success : []
  }
  getGamePage() {
    return this.gamePage;
  }

  createReaultsIcon() {
    for (let i = 0; i < 5; i++) {
      let heartIcon = document.createElement('i');
      heartIcon.className = 'fa-2x fas fa-heart';
      heartIcon.setAttribute('data', i);
      this.iconsContainer.append(heartIcon);
    }
  }

  createMainPage () {
    this.mainPage = document.createElement('div');
    this.mainPage.className = 'main-page';
    this.mainPage.id = 'mainPage';
    this.container.append(this.mainPage);

    this.header = document.createElement('div');
    this.header.className = 'header';
    this.mainPage.append(this.header);

    this.levelContainer = document.createElement('div');
    this.levelContainer.className = 'level-container';
    this.header.append(this.levelContainer);

    this.levelButtons = document.createElement('ul');
    this.levelButtons.className = 'level-buttons';
    this.levelContainer.append(this.levelButtons);

    this.closeButton = document.createElement('div');
    this.closeButton.className = 'close';
    this.closeButton.id = 'closeButton';
    this.header.append(this.closeButton);

    this.level1 = document.createElement('li');
    this.level1.innerText = '1';
    this.level1.className = 'active';
    this.levelButtons.append(this.level1);
    this.level2 = document.createElement('li');
    this.level2.innerText = '2';
    this.levelButtons.append(this.level2);
    this.level3 = document.createElement('li');
    this.level3.innerText = '3';
    this.levelButtons.append(this.level3);
    this.level4 = document.createElement('li');
    this.level4.innerText = '4';
    this.levelButtons.append(this.level4);
    this.level5 = document.createElement('li');
    this.level5.innerText = '5';
    this.levelButtons.append(this.level5);
    this.level6 = document.createElement('li');
    this.level6.innerText = '6';
    this.levelButtons.append(this.level6);

    this.description = document.createElement('div');
    this.description.className = 'description';
    this.mainPage.append(this.description);

    this.descriptionTitle = document.createElement('div');
    this.descriptionTitle.className = 'title';
    this.description.append(this.descriptionTitle);

    this.textTitle = document.createElement('span');
    this.textTitle.innerText = 'Savannah';
    this.descriptionTitle.append(this.textTitle);

    this.descriptionText = document.createElement('div');
    this.descriptionText.className = 'text';
    this.description.append(this.descriptionText);

    this.text = document.createElement('span');
    this.text.innerText = `Savannah training develops vocabulary.
    You need to choose the translation of the word`;
    this.descriptionText.append(this.text);

    this.startButton = document.createElement('button');
    this.startButton.className = 'start-button';
    this.startButton.id = 'startButton';
    this.startButton.type = 'button';
    this.startButton.innerHTML = 'Start';
    this.description.append(this.startButton);
    this.startButtonClicked = false;
    this.level = 0;
    this.startButton.addEventListener('click', () => {
      this.startButtonClicked = true;
      this.startClicked();
    });
    this.levelButtons.addEventListener('click', (event) => {
      Array.from(this.levelButtons.children).forEach((levelButton) => {
        levelButton.classList.remove('active');
      });
      if (event.target.closest('li')){
        event.target.classList.add('active');
        this.level = +event.target.innerText - 1;;
        console.log(this.level);
      }
    });
  }

  createFinalPage() {
    this.finalPage = document.createElement('div');
    this.finalPage.className = 'final-page';
    this.container.append(this.finalPage);

    this.finalTitle = document.createElement('div');
    this.finalTitle.className = 'final-title';
    this.finalTitle.innerText = '';
    this.finalPage.append(this.finalTitle);

    this.finalContainer = document.createElement('div');
    this.finalContainer.className = 'final-container';
    this.finalPage.append(this.finalContainer);

    this.continueButton = document.createElement('button');
    this.continueButton.innerText = 'Restart'; 
    this.continueButton.id = 'continueButton';
    this.continueButton.className = 'continue-button';
    this.finalPage.append(this.continueButton);

    this.homePageButton = document.createElement('button');
    this.homePageButton.innerText = 'Choose a game';
    this.homePageButton.id = 'homePageButton';
    this.homePageButton.className = 'continue-button';
    this.finalPage.append(this.homePageButton);

    const typeResult = {success: 'success', fail: 'fail'};

    const createResults = (type) => {
      const container = document.createElement('div');
      this.finalContainer.append(container);

      const results = document.createElement('div');
      container.append(results);

      const resultsText = document.createElement('span');
      results.append(resultsText);

      const resultsNumber = document.createElement('span');
      results.append(resultsNumber);

      let words = [];
      if (type === typeResult.fail) {
        results.className = 'failied-results';
        resultsText.innerText = 'ошибок: ';
        resultsNumber.innerText = this.gameStatistics.fail.length;
        words = this.gameStatistics.fail;
      } else {
        results.className = 'success-results';
        resultsText.innerText = 'знаю: ';
        resultsNumber.innerText = this.gameStatistics.success.length;
        words = this.gameStatistics.success;
      }

      words.forEach((word) => {
        this.createStatisticWord(container, word);
      });
      this.finalPage.addEventListener('click', (event) => {
        if (event.target === this.homePageButton) {
          this.finalPage.style.display = 'none';
          this.mainPage.style.display = 'block';
        } else if (event.target === this.continueButton) {
          this.clearPreviousDataGame();
          //add countdown
          setTimeout(() => this.mainPage.style.display = 'block', 1000);
          
          // this.mainPage.style.display = 'block';
        }
      })
    };

    createResults(typeResult.fail, );
    createResults(typeResult.success, );
    new Audio('audio/notification.mp3').play();
  }

  createStatisticWord(parent, word) {
    const wordContainer = document.createElement('div');
    wordContainer.className = 'word-container';
    parent.append(wordContainer);

    const audioIcon = document.createElement('i');
    audioIcon.className = 'fa fa-volume-down';
    wordContainer.append(audioIcon);

    const statisticWord = document.createElement('span');
    statisticWord.className = 'statistic_word';
    statisticWord.innerText = word.word;
    wordContainer.append(statisticWord);

    const tr = document.createElement('span');
    tr.innerText = '—'
    tr.className = 'tr';
    statisticWord.after(tr);

    const statisticTranslation = document.createElement('span');
    statisticTranslation.className = 'statictic_word-translate';
    statisticTranslation.innerText = word.translation;
    wordContainer.append(statisticTranslation);
  }


  createFailIcon() {
    let min = 5;
    let successIcon;
    Array.from(this.iconsContainer.children).forEach((icon) => {
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
    this.container.append(this.countdownContainer);

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
  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'container';
    this.container.className = 'container';
  }

  startClicked() {
    this.mainPage.style.display = 'none';
    new Audio('audio/round.mp3').play();
    this.createCountdown();
    this.countDown();
    this.count = setInterval(() => this.countDown(), 1000);
    setTimeout(() => this.startNextRound(), 3000);
  }

  clearPreviousDataGame() {
  this.gameStatistics.fail = [];
  this.gameStatistics.success = [];
  this.finalPage.remove();
  this.countdownContainer.remove(); 
  this.current_count = 3;
  clearInterval(this.count);
    Array.from(this.iconsContainer.children).forEach((icon) => {
      icon.classList.remove('fail-icon');
    });
    this.countRoundsGame = 0;
    this.backgroundPosition = 100;
    this.container.style.backgroundPositionY = `${this.backgroundPosition}%`;
}

  startNextRound() {
    if (this.iconsContainer.children[4].closest('.fail-icon') || this.countRoundsGame === 10 ) {
      this.gameStarted = false;
      clearInterval(this.timer);
      this.gamePage.style.display = 'none';
      setTimeout(() => this.createFinalPage(), 1000);
    } else {
      this.gameStarted = true;
      this.getWords()
      .then(() => {
        // this.countdownContainer.remove();
        // this.image.remove();
        this.mainPage.style.display = 'none';
        this.gamePage.style.display = 'block';
        this.timer = setInterval(() => this.moveWordDown(), 8);
        this.timeStarted = Date.now();
        this.wordPosition = 0;
        Array.from(this.answers.children).forEach((answer) => {
          answer.classList.remove('active');
          answer.classList.remove('fail');
        });
        this.answerHandled = false;
        this.countRoundsGame += 1;
        console.log(this.countRoundsGame);
      });
    }
  }
  
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
 
  getWords() {
    const page = this.randomInteger(0, 29);
    const group = this.level;
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
    this.translationWord1.innerText = arrayOfAnswers[0];
    this.translationWord2.innerText = arrayOfAnswers[1];
    this.translationWord3.innerText = arrayOfAnswers[2];
    this.translationWord4.innerText = arrayOfAnswers[3];
  }
  getArrayOfAnswers(data) {
    let numReserve = this.getArrayOfRandomNumbers();
    const randomWord = this.randomInteger(0,19);
    let arrayOfAnswers = [data[randomWord].wordTranslate, data[numReserve[0]].wordTranslate, data[numReserve[1]].wordTranslate, data[numReserve[2]].wordTranslate];
    this.word.innerText = data[randomWord].word;
    this.word.setAttribute('data', data[randomWord].wordTranslate);
    return arrayOfAnswers;
  }

  getArrayOfRandomNumbers() {
  let numReserve = [];
  let arrayOfRandomAnswers = [];
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
    const now = Date.now();
    if (now - this.timeStarted > timeForAnswer) {
      clearInterval(this.timer);
      this.word.classList.add('fade-out');
      this.startNextRound();
      new Audio ('audio/failed.mp3').play();
      this.createFailIcon();
      this.searchRightTranslation(); 
      const word = {word: this.word.innerText, translation: this.word.getAttribute('data')};
      this.gameStatistics.fail.push(word);
      //time is expired, wrong answer
      return;
    }
    this.wordPosition += 0.1;
    this.word.style.top = `${this.wordPosition}vh`;
  }

  setLevel() {
    this.levelButtons.forEach((element) => {
      element.classList.add('active');
    })
  }
  getContainer() {
    return this.container;
  }
}

export default Savannah;
