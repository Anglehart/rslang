import { Component } from './core.component.js';
import storageService from './storage.service.js';
import networkService from './network.service.js';

class Levels extends Component {
  initComponent() {
    if (!storageService.getLevel()) { 
      storageService.setLevel('1'); 
    } else {
      document.querySelector('.level-button').innerHTML = `LEVEL ${storageService.getLevel()}`;
    }
    
    if (!storageService.getPage()) { 
      storageService.setPage('1');
    } else {
      document.querySelector('.page-button').innerHTML = `PAGE ${storageService.getPage()}`;
    }
    
    document.querySelector('.level-button').addEventListener('click', () => { this.choseLevel(); });
    document.querySelectorAll('.level-list li').forEach((item) => {
      item.addEventListener('click', () => this.choseLevel(event.target.value));
    });
    document.querySelector('.page-button').addEventListener('click', () => { this.chosePage(); });
    document.querySelectorAll('.page-list li').forEach((item) => {
      item.addEventListener('click', () => this.chosePage(event.target.value));
    });
    
    document.querySelector('.start-button').addEventListener('click', () => { this.startNewGame(); });
    
  }

  startNewGame() {
    networkService.prepareData();
  }

  choseLevel(levelId) {
    document.querySelector('.level-list').classList.toggle('hidden');
    if (levelId) {
      document.querySelector('.level-button').innerHTML = `LEVEL ${levelId}`;
      storageService.setLevel(levelId);
    }
  }
  
  chosePage(pageId) {
    document.querySelector('.page-list').classList.toggle('hidden');
    if (pageId) {
      document.querySelector('.page-button').innerHTML = `PAGE ${pageId}`;
      storageService.setPage(pageId);
    }
  }
}

const levels = new Levels({
  selector: '.levels-wrapper',
  template: `
    <div class="level-page">
    <div>
      <div class="level-button">LEVEL 1</div>
      <ul class="level-list hidden">
        <li value="1">LEVEL 1</li>
        <li value="2">LEVEL 2</li>
        <li value="3">LEVEL 3</li>
        <li value="4">LEVEL 4</li>
        <li value="5">LEVEL 5</li>
        <li value="6">LEVEL 6</li>
      </ul>
    </div>
    <div>
      <div class="page-button">PAGE 1</div>
        <ul class="page-list hidden">
        <li value="1">PAGE 1</li>
        <li value="2">PAGE 2</li>
        <li value="3">PAGE 3</li>
        <li value="4">PAGE 4</li>
        <li value="5">PAGE 5</li>
        <li value="6">PAGE 6</li>
        <li value="7">PAGE 7</li>
        <li value="8">PAGE 8</li>
        <li value="9">PAGE 9</li>
        <li value="10">PAGE 10</li>
      </ul>
    </div>
      <div class="start-button">START!</div>
    </div>
    `,
});
export default levels;
