import { Component } from './core.component.js';
import storageService from './storage.service.js';
import wordsComponent from './words.component.js';

class Levels extends Component {
  constructor(config) {
    super(config);
  }

  initComponent() {
    let currentLevel = 0;
    if (!storageService.getLevel()) {
      storageService.setLevel(currentLevel);
    } else {
      currentLevel = storageService.getLevel();
    }

    document.querySelectorAll('.level-buttons li')[currentLevel].classList.add('active-level');
    document.querySelectorAll('.level-buttons li').forEach((item, i) => {
      item.addEventListener('click', () => {
        storageService.setLevel(i);
        document.querySelector('.items-wrapper').innerHTML = '';
        document.querySelector('.word-translate').innerHTML = '';
        document.querySelectorAll('.level-buttons li').forEach((el) => {el.classList.remove('active-level')});
        event.target.classList.add('active-level');
        wordsComponent.getWords();
      })
    });
  }
}

const levels = new Levels({
  selector: '.levels-wrapper',
  template: `
    <ul class="level-buttons">
      <li class="level0"></li>
      <li class="level1"></li>
      <li class="level2"></li>
      <li class="level3"></li>
      <li class="level4"></li>
      <li class="level5"></li>
    </ul>`,
});
export default levels;
