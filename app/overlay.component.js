import { Component } from './core.component.js';
import storageService from './storage.service.js';
import wordsComponent from './words.component.js';

class Overlay extends Component {
  constructor(config) {
    super(config);
  }

  initComponent() {
    this.showIntro();
    document.querySelector('.intro-btn').addEventListener('click', () => {this.hideIntro()});
  }

  showIntro() {
    document.querySelector('main').classList.add('hidden');
    document.querySelector('.intro').classList.remove('hidden');
  }

  hideIntro() {
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('.intro').classList.add('hidden');
  }

}

const overlay = new Overlay({
  selector: '.overlay',
  template: ``,
});
export default overlay;
