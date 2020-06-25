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

    this.closeButton = document.createElement('div');
    this.closeButton.className = 'close';
    this.closeButton.id = 'closeButton';
    this.container.append(this.closeButton);

    this.iconsContainer = document.createElement('div');
    this.iconsContainer.className = 'icons-container';
    this.gamePage.append(this.iconsContainer);

    this.resultsContainer = document.createElement('div');
    this.resultsContainer.className = 'results-container';
    this.gamePage.append(this.resultsContainer);
    
    this.createReaultsIcon();
    this.word = document.createElement('div');
    this.word.className = 'word';
    this.word.id = 'word';
    this.word.innerText = 'word';
    this.gamePage.append(this.word);

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
  }

  checkAnswer(selectedTranslation) {
    const translationWord = selectedTranslation.querySelector('.translationWord');
    if (translationWord.innerText === this.word.getAttribute('data')) {
      selectedTranslation.classList.add('active');
      this.createRightIcon();
      //move background, add sound
    } else {
      selectedTranslation.classList.add('fail');
      this.searchRightTranslation();
      this.createFailIcon();
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
    
    console.log(rightWord);
    return rightWord;
  }

  gameStatistics = {
    fail : [],
    succsses : []
  }
  getGamePage() {
    return this.gamePage;
  }

  createReaultsIcon() {
    for (let i = 0; i < 10; ++i) {
      let heartIcon = document.createElement('i');
      heartIcon.className = 'fa-2x fas fa-heart';
      this.iconsContainer.append(heartIcon);
    }
  }
  createMainPage () {
    this.mainPage = document.createElement('div');
    this.mainPage.className = 'main-page';
    this.mainPage.id = 'mainPage';
    this.container.append(this.mainPage);

    this.levelContainer = document.createElement('div');
    this.levelContainer.className = 'level-container';
    this.mainPage.append(this.levelContainer);

    this.levelButtons = document.createElement('ul');
    this.levelButtons.className = 'level-buttons';
    this.levelContainer.append(this.levelButtons);

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

    this.closeButton = document.createElement('div');
    this.closeButton.className = 'close';
    this.closeButton.id = 'closeButton';
    this.mainPage.append(this.closeButton);

    this.description = document.createElement('div');
    this.description.className = 'description';
    this.mainPage.append(this.description);

    this.descriptionTitle = document.createElement('div');
    this.descriptionTitle.className = 'title';
    this.description.append(this.descriptionTitle);

    this.textTitle = document.createElement('span');
    this.textTitle.innerText = 'саванна';
    this.descriptionTitle.append(this.textTitle);

    this.descriptionText = document.createElement('div');
    this.descriptionText.className = 'text';
    this.description.append(this.descriptionText);

    this.text = document.createElement('span');
    this.text.innerText = `Тренировка Саванна развивает словарный запас.
    Чем больше слов ты знаешь, тем больше очков опыта получишь.`;
    this.descriptionText.append(this.text);

    this.startButton = document.createElement('button');
    this.startButton.className = 'start-button';
    this.startButton.id = 'startButton';
    this.startButton.type = 'button';
    this.startButton.innerHTML = 'Начать';
    this.description.append(this.startButton);

    this.startButton.addEventListener('click', () => this.startClicked());
    this.levelButtons.addEventListener('click', (event) => {
      Array.from(this.levelButtons.children).forEach((levelButton) => {
        levelButton.classList.remove('active');
      });
      if (event.target.closest('li')){
        event.target.classList.add('active');
      }
    });
  }

  createRightIcon() {
    this.heartIcon = document.createElement('i');
    this.heartIcon.className = 'fa-2x fas fa-heart success';
    this.resultsContainer.append(this.heartIcon);
  }
  createFailIcon() {
    this.heartIcon = document.createElement('i');
    this.heartIcon.className = 'fa-2x fas fa-heart fail-icon';
    this.resultsContainer.append(this.heartIcon);
  }

  createCountdown () {
    this.image = document.createElement('img');
    this.image.className = 'ready-active';
    this.image.setAttribute('src','images/ready.jpg');
    this.container.append(this.image);
  }
  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'container';
    this.container.className = 'container';
  }

  startClicked() {
    this.mainPage.style.display = 'none';
    this.createCountdown();
    setTimeout(() => this.startNextRound(), 3000);
  }

  
  startNextRound() {
    this.getWords()
      .then(() => {
        this.image.remove();
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
      });
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  getWords() {
    const page = this.randomInteger(0, 29);
    console.log(page);
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=0`;
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
    console.log(arrayOfAnswers);
    this.translationWord1.innerText = arrayOfAnswers[0];
    this.translationWord2.innerText = arrayOfAnswers[1];
    this.translationWord3.innerText = arrayOfAnswers[2];
    this.translationWord4.innerText = arrayOfAnswers[3];
  }
  getArrayOfAnswers(data) {
    let numReserve = this.getArrayOfRandomNumbers();
    const randomWord = this.randomInteger(0,19);
    let arrayOfAnswers = [data[randomWord].wordTranslate, data[numReserve[0]].wordTranslate, data[numReserve[1]].wordTranslate, data[numReserve[2]].wordTranslate];
    console.log(randomWord);
    console.log(data[1].word);
    this.word.innerText = data[randomWord].word;
    this.word.setAttribute('data', data[randomWord].wordTranslate);
    console.log(arrayOfAnswers);
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
    console.log(numReserve);
    return numReserve;
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  moveWordDown() {
    const now = Date.now();
    if (now - this.timeStarted > timeForAnswer) {
      clearInterval(this.timer);
      this.startNextRound();
      this.createFailIcon();
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
