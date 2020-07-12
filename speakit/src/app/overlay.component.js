import { Component } from './core.component';
import wordsComponent from './words.component';
import stats from './stats.service';

class Overlay extends Component {
  constructor(config) {
    super(config);
    this.correctWords = [];
  }

  initComponent() {
    this.showIntro();
    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });
    document.querySelector('.return').addEventListener('click', () => { this.hideResults(); });
    document.querySelectorAll('.new-game').forEach((item) => {
      item.addEventListener('click', () => {
        this.hideResults();
        wordsComponent.newGame();
        if (this.correctWords.length < 10) {
          stats.updateStats('speakit', false);
        }
      });
    });
  }

  showIntro() {
    document.querySelector('main').classList.add('hidden');
    document.querySelector('.intro').classList.remove('hidden');
  }

  hideIntro() {
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('.intro').classList.add('hidden');
  }

  drawResults(correctWords, inCorrectWords) {
    document.querySelector('.stats').innerHTML = '';

    const error = document.createElement('div');
    error.classList.add('errors');
    error.innerHTML = `<p>Errors: <span>${inCorrectWords.length}</span></p>`;
    document.querySelector('.stats').append(error);

    inCorrectWords.forEach((item) => {
      const falseWord = document.createElement('div');
      falseWord.classList.add('statsWord');
      falseWord.innerHTML = `<p><span>${item.word}</span> ${item.transcription} ${item.wordTranslate}</p>`;
      document.querySelector('.stats').append(falseWord);
      falseWord.onclick = () => {
        new Audio(`${this.dataLink}${item.audio}`).play();
      };
    });

    const success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = `<p>Success: <span>${correctWords.length}</span></p>`;
    document.querySelector('.stats').append(success);

    correctWords.forEach((item) => {
      const trueWord = document.createElement('div');
      trueWord.classList.add('statsWord');
      trueWord.innerHTML = `<p><span>${item.word}</span> ${item.transcription} ${item.wordTranslate}</p>`;
      document.querySelector('.stats').append(trueWord);
      trueWord.onclick = () => {
        new Audio(`${this.dataLink}${item.audio}`).play();
      };
    });

    this.correctWords = correctWords;
    if (this.correctWords.length === 10) {
      stats.updateStats('speakit', true);
    }
  }

  showResults() {
    document.querySelector('main').classList.add('hidden');
    document.querySelector('.results').classList.remove('hidden');
  }

  hideResults() {
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('.results').classList.add('hidden');
  }
}

const overlay = new Overlay({
  selector: '.overlay',
  template: '',
});
export default overlay;
