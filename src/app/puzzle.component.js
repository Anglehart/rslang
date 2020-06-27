import dragula from '../../node_modules/dragula/dragula';
import { Component } from './core.component';
import storageService from './storage.service';
import cropService from './crop.service';


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
    }).then(res => {
      document.querySelector('.game-prepare').append(...res);
    }).then(() => {
      dragula([document.querySelector('.game-field'), document.querySelector('.row-1')]);
    })
  }

}

const puzzle = new Puzzle({
  selector: '.puzzle-wrapper',
  template: `
    <div class="game-field"></div>
    <div class="game-prepare"></div>
  `,
});
export default puzzle;
