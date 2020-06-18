import { Component } from './core.component.js';
import storageService from './storage.service.js';

class Words extends Component {
  constructor(config) {
    super(config);
    this.dataLink = 'https://raw.githubusercontent.com/Anglehart/rslang-data/master/';
  }

  initComponent(){
    this.getWords();
  }

  getWords() {
    //const currentLevel = storageService.getLevel();
    const currentLevel = 0;
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
    data.forEach((item, i) => {
      const id = item.id;
      const word = item.word;
      const audioUrl = `${this.dataLink}${item.audio}`;
      const imageUrl = `${this.dataLink}${item.image}`;
      const translate = item.wordTranslate;
      const transcript = item.transcription;
      this.drawWords(id, word, audioUrl, imageUrl, translate, transcript);
    });

  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  drawWords(id, word, audioUrl, imageUrl, translate, transcript){
    const wordItem = document.createElement('a');
    wordItem.onclick = () => {
      new Audio(`${audioUrl}`).play();
      this.changeImage(imageUrl);
      this.changeTranslate(translate);
    };
    wordItem.innerHTML = `<p class="word">${word}</p><p class="transcript">${transcript}</p>`;
    wordItem.classList.add('word-item');
    document.querySelector('.items-wrapper').append(wordItem);
  }

  changeImage(imageUrl){
    const wordImage = document.createElement('img');
    wordImage.src = imageUrl;
    wordImage.classList.add('word-image');
    document.querySelector('.word-image').replaceWith(wordImage);
  }

  changeTranslate(translate){
    const wordTranslate = document.createElement('div');
    wordTranslate.innerHTML = translate;
    wordTranslate.classList.add('word-translate');
    document.querySelector('.word-translate').replaceWith(wordTranslate);
  }
}

const words = new Words({
  selector: '.words-wrapper',
  template: `
    <img class="word-image" src="/app/assets/team17.jpg">
    <div class="word-translate"></div>
    <div class="items-wrapper"></div>
  `,
});
export default words;
