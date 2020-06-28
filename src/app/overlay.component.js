import { Component } from './core.component';
import puzzle from './puzzle.component';

class Overlay extends Component {
  /*initComponent() {
    this.showIntro();
    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });
    document.querySelector('.return').addEventListener('click', () => { this.hideResults(); });
    document.querySelectorAll('.new-game').forEach((item) => {
      item.addEventListener('click', () => {
        this.hideResults();
        wordsComponent.newGame();
      });
    });
  }*/

  drawCorrect(sentence, mp3) {
    console.log(sentence);
    console.log(mp3);
  }
  
  drawInCorrect(sentence, mp3) {
    console.log(sentence);
    console.log(mp3);
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
