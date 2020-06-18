import { Component } from './core.component.js';
import storageService from './storage.service.js';
import voiceService from './voice.service.js';
import wordsComponent from './words.component.js';

class Control extends Component {
  constructor(config) {
    super(config);
  }

  initComponent() {
    document.querySelector('.speak-button').addEventListener('click', () => {
      voiceService.startStop();
    })
  }

  micOn(){
    console.log('mic is on');
  }

  micOff(){
    console.log('mic is off');
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
