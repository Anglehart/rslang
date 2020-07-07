import { Component } from './core.component';
import overlay from './overlay.component';
import network from './network.service';


class Game extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 0;
  }

  initComponent(){
    this.startNewGame();
  }

  startNewGame() {
    this.currentRound = 1;
    this.startNewRound();
  }

  async startNewRound() {
    let a = await network.getDataForRound(this.currentRound);
    this.drawQuestion(a);
    this.currentRound += 1;
    console.log(a);
  }

  drawQuestion(a) {
    document.querySelector('.question').innerHTML = a[4];
  }

}

const game = new Game({
  selector: '.game-wrapper',
  template: '<div class="question"></div>',
});
export default game;
