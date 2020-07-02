import { Component } from './core.component';
import puzzle from './puzzle.component';
import storageService from './storage.service';
import networkService from './network.service';

class Levels extends Component {
  initComponent() {
    storageService.setSound(0);
    this.setLevelPage();
    
    document.querySelector('.level-button').addEventListener('click', () => { this.choseLevel(); });
    document.querySelectorAll('.level-list li').forEach((item) => {
      item.addEventListener('click', () => this.choseLevel(event.target.value));
    });
    document.querySelector('.page-button').addEventListener('click', () => { this.chosePage(); });
    document.querySelectorAll('.page-list li').forEach((item) => {
      item.addEventListener('click', () => this.chosePage(event.target.value));
    });
    
    document.querySelector('.start-button').addEventListener('click', () => { this.startNewGame(); });
    document.querySelector('.melody-button').addEventListener('click', () => {
      event.target.classList.toggle('active-tip');
      if (storageService.getSound() === '1') {
        storageService.setSound('0');
      } else {
        storageService.setSound('1');
      }
    })
  }

  async startNewGame() {
    document.querySelector('.check-button').classList.remove('hidden-button');
    document.querySelector('.result-button').classList.add('hidden-button');
    document.querySelector('.giveup-button').classList.add('hidden-button');
    document.querySelector('.game-field').style = '';
    this.setLevelPage();
    const data = await networkService.prepareData();
    puzzle.createBackground(data[0], data[1]);
    document.querySelector('.game-field').innerHTML = '';
    document.querySelector('.game-prepare').innerHTML = '';
    document.querySelector('.speaker-button').addEventListener('click', () => { 
      document.querySelector('.audio-tip').classList.remove('disable');
      event.target.classList.add('active-tip');
    });
    document.querySelector('.list-button').addEventListener('click', () => { 
      document.querySelector('.translate-tip').classList.remove('disable');
      event.target.classList.add('active-tip');
    });
    document.querySelector('.picture-button').addEventListener('click', () => {
      event.target.classList.add('active-tip'); 
      document.querySelectorAll('.hide-background').forEach((item) => {
        item.classList.remove('hide-background');
      });  
    });    
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
  
  setLevelPage() {
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
  }
}

const levels = new Levels({
  selector: '.levels-wrapper',
  template: `
    <div class="level-page">
      <div>
        <div class="btn level-button">LEVEL 1</div>
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
        <div class="btn page-button">PAGE 1</div>
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
      <div class="btn start-button">START!</div>
    </div>
    <div class="tips-page">
      <div class="tip melody-button"></div>
      <div class="tip speaker-button"></div>
      <div class="tip list-button"></div>
      <div class="tip picture-button"></div>
    </div>
    `,
});
export default levels;
