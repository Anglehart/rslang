import { Component } from './core.component';
import game from './game.component';

class Overlay extends Component {
  constructor(config){
    super(config);
    this.iKnow = [];
    this.iDontKnow = [];
  }

  initComponent() {
    this.showIntro();
    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });
  }

  drawCorrect(word) {
    this.iKnow.push(word.id);
    const currentMP3 = `https://raw.githubusercontent.com/Anglehart/rslang-data/master/${word.audioExample}`;
    const div = document.createElement('div');
    div.classList.add('statsWord');
    div.innerHTML = `<p>${word.textExample}</p>`;
    document.querySelector('.success').after(div);
    div.onclick = () => {
      new Audio(currentMP3).play();
    };
    document.querySelector('.success span').innerHTML = this.iKnow.length;
  }

  drawInCorrect(word) {
    this.iDontKnow.push(word.id);
    const currentMP3 = `https://raw.githubusercontent.com/Anglehart/rslang-data/master/${word.audioExample}`;
    const div = document.createElement('div');
    div.classList.add('statsWord');
    div.innerHTML = `<p>${word.textExample}</p>`;
    document.querySelector('.errors').after(div);
    div.onclick = () => {
      new Audio(currentMP3).play();
    };
    document.querySelector('.errors span').innerHTML = this.iDontKnow.length;
  }

  showIntro() {
    document.querySelector('main').classList.add('disable');
    document.querySelector('.intro').classList.remove('disable');
  }

  hideIntro() {
    document.querySelector('main').classList.remove('disable');
    document.querySelector('.intro').classList.add('disable');
  }



  showResults() {
    document.querySelector('main').classList.add('disable');
    document.querySelector('.results').classList.remove('disable');
  }

  hideResults() {
    document.querySelector('main').classList.remove('disable');
    document.querySelector('.results').classList.add('disable');
  }
}

const overlay = new Overlay({
  selector: '.overlay',
  template: '',
});
export default overlay;
