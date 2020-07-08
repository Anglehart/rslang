import { Component } from './core.component';
import overlay from './overlay.component';
import network from './network.service';


class Game extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 0;
    this.currentAnswer = '';
  }

  initComponent(){
    this.startNewGame();
    document.querySelector('.new-game-btn').addEventListener('click', () => this.startNewGame());
  }

  startNewGame() {
    document.querySelector('.new-game-btn').classList.add('disable');
    this.currentRound = 1;
    this.startNewRound();
  }

  async startNewRound() {
    document.querySelector('.answers').innerHTML = '';
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
    document.querySelectorAll('.option').forEach((item) => {
      item.addEventListener('click', () => {
        if (event.target.classList.contains('active-answer')) {
          this.checkAnswer(event.target.id);
        } else {
          document.querySelectorAll('.option').forEach((obj) => {
            obj.classList.remove('active-answer');
          });
          event.target.classList.add('active-answer');
        }
      })
    });
  }
  
  checkAnswer(id) {
    for (let i = 0; i <= 800; i += 200) {
      setTimeout(() => { document.getElementById('option0').classList.toggle('correct-answer') }, i);
    }
    setTimeout(() => {
      if (id === 'option0') {
        this.startNewRound();
      } else {
        this.loseGame();
      }
    }, 1500);
  };
  
  loseGame() {
    document.querySelectorAll('.option').forEach((obj) => {
      obj.style.pointerEvents = 'none';
    });
    document.querySelector('.new-game-btn').classList.remove('disable');
  }
}

const game = new Game({
  selector: '.game-wrapper',
  template: '<div class="question"></div><div class="answers"></div><div class="new-game-btn disable">New game?</div>',
});
export default game;
