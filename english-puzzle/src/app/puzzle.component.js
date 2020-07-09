import dragula from '../../node_modules/dragula/dragula';
import { Component } from './core.component';
import storageService from './storage.service';
import cropService from './crop.service';
import stats from './stats.service';
import overlay from './overlay.component';

class Puzzle extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 1;
    this.currentWord = {};
    this.sentences = [];
    this.wordsObjects = [];
    this.rightOrder = [];
    this.background = '';
    this.allRounds = 10;
    this.image = {};
  }

  createBackground(words, image) {
    this.currentRound = 1;
    this.wordsObjects = words;
    if (words.length < 10) this.allRounds = words.length;
    this.sentences = [];
    words.forEach((item, i) => {
      if (i < this.allRounds) this.sentences.push(item.textExample);
    });
    this.image = image;
    this.background = `https://raw.githubusercontent.com/Anglehart/rslang_data_paintings/master/${image.cutSrc}`;

    cropService({
      src: `https://raw.githubusercontent.com/Anglehart/rslang_data_paintings/master/${image.cutSrc}`,
      wordsList: this.sentences,
    }).then((res) => {
      document.querySelector('.game-prepare').append(...res);
    }).then(() => {
      this.startNewRound(this.currentRound);
    }).then(() => {
      document.querySelectorAll('.div-item').forEach((item) => {
        item.addEventListener('click', () => {
          if (event.target.parentNode.classList.contains('show-group-row')) {
            document.querySelector(`.row-round-${this.currentRound}`).append(event.target);
          }
        });
      });
    });
  }

  startNewRound() {
    this.currentWord = this.wordsObjects[this.currentRound - 1];
    const round = this.currentRound;
    this.rightOrder = this.sentences[round - 1].split(' ');
    const gameRow = document.createElement('div');
    gameRow.classList.add('game-row');
    gameRow.classList.add(`row-round-${round}`);
    document.querySelector('.game-field').append(gameRow);
    document.querySelectorAll('.group-words').forEach((item) => {
      item.classList.remove('show-group-row');
    });
    document.querySelector(`.row-${round}`).classList.add('show-group-row');
    this.drake = dragula([document.querySelector(`.row-round-${round}`), document.querySelector(`.row-${round}`)], { direction: 'horizontal' });
    document.querySelector('.translate-tip').innerHTML = this.currentWord.textExampleTranslate;
    const currentMP3 = `https://raw.githubusercontent.com/Anglehart/rslang-data/master/${this.currentWord.audioExample}`;
    document.querySelector('.audio-tip').onclick = () => {
      new Audio(currentMP3).play();
    };
    if (storageService.getSound() === '1') {
      new Audio(currentMP3).play();
    }
    document.querySelectorAll('.show-group-row .div-item').forEach((item) => {
      item.classList.add('hide-background');
    });
    this.clearTips();
  }

  checkRoundResult() {
    let count = 0;
    document.querySelectorAll(`.row-round-${this.currentRound} .div-item`).forEach((item, i) => {
      if (item.innerHTML === this.rightOrder[i]) {
        item.classList.add('correct-word');
        setTimeout(() => { item.classList.remove('correct-word'); }, 1000);
        count += 1;
      } else {
        document.querySelector('.giveup-button').classList.remove('hidden-button');
        item.classList.add('incorrect-word');
        setTimeout(() => { item.classList.remove('incorrect-word'); }, 1000);
        return false;
      }
      return true;
    });
    if (count === this.rightOrder.length) {
      overlay.drawCorrect(this.currentWord);
      stats.correct(this.currentWord.id);
      document.querySelector('.giveup-button').classList.add('hidden-button');
      document.querySelector('.continue-button').classList.remove('hidden-button');
      document.querySelector('.check-button').classList.add('hidden-button');
    }
  }

  giveUp() {
    overlay.drawInCorrect(this.currentWord);
    stats.wrong(this.currentWord.id);
    const correctRow = [];
    for (let i = 1; i <= this.rightOrder.length; i += 1) {
      const word = document.getElementById(`${this.currentRound}-${i}`);
      correctRow.push(word);
    }
    document.querySelector('.show-group-row').innerHTML = '';
    document.querySelector(`.row-round-${this.currentRound}`).innerHTML = '';
    correctRow.forEach((item) => {
      document.querySelector(`.row-round-${this.currentRound}`).append(item);
    });
    document.querySelector('.giveup-button').classList.add('hidden-button');
    document.querySelector('.continue-button').classList.remove('hidden-button');
    document.querySelector('.check-button').classList.add('hidden-button');
  }

  continueGame() {
    this.drake.destroy();
    document.getElementById(`${this.currentRound}-1`).classList.add('first-item');
    document.getElementById(`${this.currentRound}-${this.rightOrder.length}`).classList.add('last-item');
    this.currentRound += 1;
    document.querySelector('.giveup-button').classList.add('hidden-button');
    document.querySelector('.continue-button').classList.add('hidden-button');
    if (this.currentRound > this.allRounds) {
      document.querySelector('.result-button').classList.remove('hidden-button');
      this.gameEnd();
    } else {
      document.querySelector('.check-button').classList.remove('hidden-button');
      this.startNewRound();
    }
  }

  clearTips() {
    document.querySelector('.speaker-button').classList.remove('active-tip');
    document.querySelector('.list-button').classList.remove('active-tip');
    document.querySelector('.picture-button').classList.remove('active-tip');
    document.querySelector('.audio-tip').classList.add('disable');
    document.querySelector('.translate-tip').classList.add('disable');
    document.querySelectorAll('.game-row .div-item').forEach((item) => {
      item.classList.remove('hide-background');
    });
  }

  gameEnd() {
    if (overlay.iKnow.length === 10) {
      stats.updateStats('puzzle', true);
    } else {
      stats.updateStats('puzzle', false);
    }
    document.querySelector('.game-field').style.backgroundImage = `url(${this.background})`;
    document.querySelectorAll('.game-row').forEach((item) => {
      item.classList.add('rows-game-end');
    });
    document.querySelector('.game-prepare').innerHTML = `<p>${this.image.name}, ${this.image.year}<p>`;
  }
}

const puzzle = new Puzzle({
  selector: '.puzzle-wrapper',
  template: `
    <div class="tips-field">
      <div class="audio-tip-wrapper">
        <div class="audio-tip disable"></div>
      </div>
      <p class="translate-tip disable"></p>
    </div>
    <div class="game-field"></div>
    <div class="game-prepare"></div>
  `,
});
export default puzzle;
