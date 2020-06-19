import { Component } from './core.component.js';
import storageService from './storage.service.js';
import levels from './levels.component.js';
import overlay from './overlay.component.js';
import voiceService from './voice.service.js';

class Words extends Component {
  constructor(config) {
    super(config);
    this.correctWords = [];
    this.inCorrectWords = [];
  }

  initComponent() {
    this.newGame();
  }

  newGame() {
    try{
      document.querySelector('.items-wrapper').innerHTML = '';
      storageService.gameStop();
      voiceService.listening = true;
      voiceService.voiceStartStop();
      document.querySelector('.word-field').classList.add('disable');
      document.querySelector('.word-translate').innerHTML = '';
      document.querySelector('.speak-button').classList.remove('activeBtn');
      document.querySelector('.word-image').style.backgroundImage = `url(${this.defaultPic})`;
      document.querySelector('.score').innerHTML = '';
    } catch{};
    this.getWords();
  }

  getWords() {
    const currentLevel = storageService.getLevel();
    const page = this.randomInteger(0, 29);
    const halfOfArray = this.randomInteger(1, 2);
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${currentLevel}`;

    fetch(url)
    .then((response) => {
      if (response.ok) return response;
      return Promise.reject();
    })
    .then((response) => response.json())
    .then((data) => {
      if (halfOfArray === 1) return data.slice(0, 10);
      return data.slice(10);
    })
    .then((data) => {
      this.prepareData(data);
    })
  }

  prepareData(data){
    this.inCorrectWords = data;
    overlay.drawResults(this.correctWords, this.inCorrectWords);
    data.forEach((item, i) => {
      const id = item.id;
      const word = item.word.toLowerCase();
      const audioUrl = `${this.dataLink}${item.audio}`;
      const imageUrl = `${this.dataLink}${item.image}`;
      const translate = item.wordTranslate;
      const transcript = item.transcription;
      this.drawWords(id, word, audioUrl, imageUrl, translate, transcript);
    });
    document.querySelector('.word-image').style.background = `url(${this.defaultPic})`;
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  drawWords(id, word, audioUrl, imageUrl, translate, transcript){
    const wordItem = document.createElement('a');
    wordItem.onclick = () => {
      if(storageService.gameStatus() === 'false'){
        this.changeImage(imageUrl);
        new Audio(`${audioUrl}`).play();
        this.changeTranslate(translate);
      }
    };
    wordItem.id = id;
    wordItem.innerHTML = `<p class="word">${word}</p><p class="transcript">${transcript}</p>`;
    wordItem.classList.add('word-item');
    document.querySelector('.items-wrapper').append(wordItem);
  }

  changeImage(imageUrl) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      document.querySelector('.word-image').style.backgroundImage = `url(${imageUrl})`;
    };
  }

  changeTranslate(translate){
    const wordTranslate = document.createElement('div');
    wordTranslate.innerHTML = translate;
    wordTranslate.classList.add('word-translate');
    document.querySelector('.word-translate').replaceWith(wordTranslate);
  }

  checkWord(transcript) {
    const word = transcript.toLowerCase();
    document.querySelector('.word-field').value = word;
    this.inCorrectWords.forEach((item) => {
      if(item.word === word) {
        document.getElementById(`${item.id}`).classList.add('active-word');
        const imageUrl = `${this.dataLink}${item.image}`;
        this.changeImage(imageUrl);
        levels.addStar();
        this.correctWords.push(item);
        const wordIndex = this.inCorrectWords.indexOf(item);
        this.inCorrectWords.splice(wordIndex, 1);
        overlay.drawResults(this.correctWords, this.inCorrectWords);
      };
    });
  }
}

const words = new Words({
  selector: '.words-wrapper',
  template: `
    <div class="word-image"></div>
    <div class="word-translate"></div>
    <input class="word-field disable" type="text" class="input" readonly="">
    <div class="items-wrapper"></div>
  `,
});
export default words;
