import { Component } from './core.component';
import overlay from './overlay.component';
import network from './network.service';


class Game extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 0;
    this.currentRound = {};
  }

  initComponent(){
    this.startNewGame();
  }

  startNewGame() {
    this.currentRound = 1;
    this.startNewRound();
  }

  async startNewRound() {
    const arr = await network.getDataForRound(this.currentRound);
    const wordsArray = arr[0];
    const question = arr[1];
    this.drawQuestion(wordsArray, question);
    this.currentRound += 1;
    this.currentAnswer = wordsArray[0];
  }

  drawQuestion(wordsArray, question) {
    document.querySelector('.question').innerHTML = question;
    wordsArray.forEach((item, i) => {
      const option = document.createElement('div');
      option.classList.add('option');
      option.id = `option${i}`;
      option.innerHTML = item.word;
      option.style.order = network.randomInteger(0, 20);
      document.querySelector('.answers').append(option);
    });
  }

}

const game = new Game({
  selector: '.game-wrapper',
  template: '<div class="question"></div><div class="answers"></div>',
});
export default game;
