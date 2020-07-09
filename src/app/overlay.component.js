import { Component } from './core.component';

class Overlay extends Component {
  constructor(config) {
    super(config);
    this.iKnow = [];
    this.iDontKnow = [];
  }

  initComponent() {
    this.showIntro();
    document.querySelector('.intro-btn').addEventListener('click', () => { this.hideIntro(); });
  }

  showIntro() {
    document.querySelector('.wrapper').classList.add('disable');
    document.querySelector('.intro').classList.remove('disable');
  }

  hideIntro() {
    document.querySelector('.wrapper').classList.remove('disable');
    document.querySelector('.intro').classList.add('disable');
  }
}

const overlay = new Overlay({
  selector: '.overlay',
  template: '',
});
export default overlay;
