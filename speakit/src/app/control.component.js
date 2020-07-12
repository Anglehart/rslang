import { Component } from './core.component';
import storageService from './storage.service';
import voiceService from './voice.service';
import overlay from './overlay.component';
import words from './words.component';

class Control extends Component {
  initComponent() {
    document.querySelector('.speak-button').addEventListener('click', () => {
      if (storageService.gameStatus() === 'false') this.gameStartStop();
    });
    document.querySelector('.restart-button').addEventListener('click', () => { this.restartGame(); });
    document.querySelector('.results-button').addEventListener('click', () => { overlay.showResults(); });
    storageService.gameStop();
  }

  gameStartStop() {
    voiceService.voiceStartStop();
    storageService.gameStartStop();
    document.querySelector('.word-field').classList.toggle('disable');
    document.querySelector('.word-translate').classList.toggle('disable');
    document.querySelector('.speak-button').classList.toggle('activeBtn');
  }

  restartGame() {
    document.querySelectorAll('.word-item').forEach((item) => {
      item.classList.remove('active-word');
    });
    storageService.gameStop();
    voiceService.listening = true;
    voiceService.voiceStartStop();
    document.querySelector('.word-field').classList.add('disable');
    document.querySelector('.word-translate').innerHTML = '';
    document.querySelector('.speak-button').classList.remove('activeBtn');
    document.querySelector('.word-image').style.backgroundImage = `url(${words.defaultPic})`;
    document.querySelector('.score').innerHTML = '';
    overlay.drawResults([], words.currentWords);
  }
}

const control = new Control({
  selector: '.control-wrapper',
  template: `
    <div class="btn restart-button">Restart</div>
    <div class="btn speak-button">Speak please</div>
    <div class="btn results-button">Results</div>
    `,
});
export default control;
