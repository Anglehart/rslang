import { Component } from './core.component.js';
import storageService from './storage.service.js';
import cropService from './crop.service.js';

class Puzzle extends Component {
  constructor(config) {
    super(config);
    this.currentWords = [];
    this.correctWords = [];
    this.inCorrectWords = [];
  }

  createBackground(words, image) {
    const wordsArray = [];
    words.forEach((item, i) => {
      if (i < 10) wordsArray.push(item.textExample);
    });
    console.log(`https://raw.githubusercontent.com/Anglehart/rslang_data_paintings/master/${image.cutSrc}`);

    cropService({
      src: `https://raw.githubusercontent.com/Anglehart/rslang_data_paintings/master/${image.cutSrc}`,
      wordsList: wordsArray,
      fontFamily: 'Arial',
      fontRatio: 0.7,
      fontType: 'bold',
      borderPuzzle: 1,
      shadowPuzzle: 2,
      borderText: 1,
      shadowText: 10,
      colorBorder: 'rgb(255,255,250)',
      colorShadowText: 'black',
      solidTextColor: 'white',
      fontStyle: 'fillText'
    }).then(res => {
      document.querySelector('.puzzle-wrapper').append(...res);
    })
  }

}

const puzzle = new Puzzle({
  selector: '.puzzle-wrapper',
  template: `

  `,
});
export default puzzle;
