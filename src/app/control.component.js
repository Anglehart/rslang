import { Component } from './core.component.js';
import storageService from './storage.service.js';
import puzzle from './puzzle.component.js';
import overlay from './overlay.component.js';

class Control extends Component {
  initComponent() {
    document.querySelector('.check-button').addEventListener('click', () => {
      puzzle.checkRoundResult();
    })
    document.querySelector('.giveup-button').addEventListener('click', () => {
      puzzle.giveUp();
    })
    document.querySelector('.continue-button').addEventListener('click', () => {
      puzzle.continueGame();
    })
    document.querySelector('.result-button').addEventListener('click', () => {
      overlay.showResults();
    })
  }
}

const control = new Control({
  selector: '.control-wrapper',
  template: `
    <div class="btn check-button hidden-button">Check</div>
    <div class="btn giveup-button hidden-button">I don't know</div>
    <div class="btn continue-button hidden-button">Continue</div>
    <div class="btn result-button hidden-button">Results</div>
    `,
});
export default control;