class SavannahUI {

  constructor () {
    this.createContainer();
    this.createMainPage();
    this.createGamePage();

    window.addEventListener('load', () => {
      this.container.style.display = 'block';
    });
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'container';
    this.container.className = 'container';
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

    this.level1 = document.createElement('li');
    this.level1.innerText = '1';
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

    this.savannahLevel = localStorage.getItem('level');
    if (!this.savannahLevel) this.savannahLevel = `1`;

    Array.from(this.levelButtons.children).forEach((levelButton) => {
      if (+levelButton.innerText === +this.savannahLevel + 1) {
        levelButton.classList.add('active');
      }
    });

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
     
    this.levelButtons.addEventListener('click', (event) => {
      Array.from(this.levelButtons.children).forEach((levelButton) => {
        levelButton.classList.remove('active');
      });
      if (event.target.closest('li')){
        event.target.classList.add('active');
        this.level = +event.target.innerText - 1;
        localStorage.setItem('level', this.level);
      }
    });
  }

  createReaultsIcon() {
    for (let i = 0; i < 5; i++) {
      let heartIcon = document.createElement('i');
      heartIcon.className = 'fa-2x fas fa-heart';
      heartIcon.setAttribute('data', i);
      this.iconsContainer.append(heartIcon);
    }
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

    this.createReaultsIcon();
    this.question = document.createElement('div');
    this.question.className = 'question';
    this.gamePage.append(this.question);

    this.word = document.createElement('div');
    this.word.className = 'word';
    this.word.id = 'word';
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
    this.backgroundPosition = 100;
  }

  createStatisticWord(parent, word) {
    const wordContainer = document.createElement('div');
    wordContainer.className = 'word-container';
    parent.append(wordContainer);

    const audioIcon = document.createElement('i');
    audioIcon.className = 'fa fa-volume-down';
    wordContainer.append(audioIcon);

    const audio = document.createElement('audio');
    const audioUrl = 'https://raw.githubusercontent.com/Mikisum/rslang-data/master/';
    audio.setAttribute('src', audioUrl + word.audio);
    audioIcon.append(audio);

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
    statisticTranslation.innerText = word.wordTranslate;
    wordContainer.append(statisticTranslation);
  }

  typeResult = {success: 'success', fail: 'fail'};

  createFinalResults(type, statistics) {
    const container = document.createElement('div');
    this.finalContainer.append(container);

    const results = document.createElement('div');
    container.append(results);

    const resultsText = document.createElement('span');
    results.append(resultsText);

    const resultsNumber = document.createElement('span');
    results.append(resultsNumber);

    let words = [];
    if (type === this.typeResult.fail) {
      results.className = 'failied-results';
      resultsText.innerText = 'Wrong answers: ';
      resultsNumber.innerText = statistics.fail.length;
      words = statistics.fail;
    } else {
      results.className = 'success-results';
      resultsText.innerText = 'I know: ';
      resultsNumber.innerText = statistics.success.length;
      words = statistics.success;
    }

    words.forEach((word) => {
      this.createStatisticWord(container, word);
    });
  }

  createFinalPage(statistics) {
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

    this.createFinalResults(this.typeResult.fail, statistics);
    this.createFinalResults(this.typeResult.success, statistics);
  }

  clearAnswers() {
    Array.from(this.answers.children).forEach((answer) => {
      answer.classList.remove('active');
      answer.classList.remove('fail');
    });
  }
}

export default SavannahUI;
