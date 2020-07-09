import { Component } from './core.component';
import overlay from './overlay.component';
import rounds from './rounds.component';
import network from './network.service';
import stats from './stats.service';


class Game extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 0;
    this.currentAnswer = '';
  }

  initComponent(){
    this.startNewGame();
    document.querySelector('.new-game-btn').addEventListener('click', () => this.startNewGame());
    document.querySelector('.tip-5050').addEventListener('click', () => this.tip5050());
    document.querySelector('.tip-expert').addEventListener('click', () => this.tipExpert());
    document.querySelector('.tip-lang').addEventListener('click', () => this.tipLang());
    localStorage.setItem('userId', '5eefa4639896e10017eea40c');
    localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5NDMyNTc0MCwiZXhwIjoxNTk0MzQwMTQwfQ.QRum8ZdeAtFt7pbenNh938Nw8h8oM2wdVz03yZqvXlk');
  }

  startNewGame() {
    document.querySelector('.new-game-btn').classList.add('disable');
    document.querySelector('.win').classList.add('disable');
    document.querySelectorAll('.tip').forEach((item) => {
      item.classList.remove('used-tip');
    })
    this.currentRound = 1;
    rounds.drawRounds();
    this.startNewRound();
  }

  async startNewRound() {
    rounds.changeRound(this.currentRound);
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
      option.dataWord = item.word;
      option.dataId = item.id;
      option.innerHTML = `<span class="opt-word">${item.word}</span><span class="opt-trans disable">${item.wordTranslate}</span>`;
      if (network.randomInteger(0, 1) === 0) {
        document.querySelector('.answers').append(option);
      } else {
        document.querySelector('.answers').prepend(option);
      }

    });
    document.querySelectorAll('.option').forEach((item) => {
      item.addEventListener('click', () => {
        if (event.currentTarget.classList.contains('active-answer')) {
          this.checkAnswer(event.currentTarget);
        } else {
          document.querySelectorAll('.option').forEach((obj) => {
            obj.classList.remove('active-answer');
          });
          event.currentTarget.classList.add('active-answer');
        }
      })
    });
  }

  checkAnswer(answer) {
    document.querySelectorAll('.option').forEach((item) => {
      item.style.pointerEvents = 'none';
    });

    for (let i = 0; i <= 800; i += 200) {
      setTimeout(() => { document.getElementById('option0').classList.toggle('correct-answer') }, i);
    }
    setTimeout(() => {
      if (answer.id === 'option0') {
        document.querySelector('.currentRound').innerHTML = answer.dataWord;
        if(this.currentRound === 16) {
          stats.correct(answer.dataId);
          this.winGame();
        } else {
          stats.correct(answer.dataId);
          this.startNewRound();
        }
      } else {
        this.loseGame(answer.dataId);
      }
    }, 1500);
  };

  winGame(){
    document.querySelectorAll('.option').forEach((obj) => {
      obj.style.pointerEvents = 'none';
    });
    document.querySelector('.new-game-btn').classList.remove('disable');
    document.querySelector('.win').classList.remove('disable');
  }

  loseGame(answerId) {
    document.querySelectorAll('.option').forEach((obj) => {
      obj.style.pointerEvents = 'none';
    });
    document.querySelector('.new-game-btn').classList.remove('disable');
    stats.wrong(answerId);
  }

  tip5050() {
    document.querySelector('.tip-5050').classList.add('used-tip');
    document.getElementById('option2').innerHTML = '';
    document.getElementById('option3').innerHTML = '';
    document.getElementById('option2').style.pointerEvents = 'none';
    document.getElementById('option3').style.pointerEvents = 'none';
  }

  tipExpert(){
    document.querySelector('.tip-expert').classList.add('used-tip');
    document.querySelectorAll('.option').forEach((item) => { item.classList.remove('active-answer') })
    document.getElementById('option0').classList.add('active-answer');
  }

  tipLang(){
    document.querySelector('.tip-lang').classList.add('used-tip');
    document.querySelectorAll('.opt-word').forEach((item) => item.classList.add('disable'));
    document.querySelectorAll('.opt-trans').forEach((item) => item.classList.remove('disable'));
  }
}

const game = new Game({
  selector: '.game-wrapper',
  template: '<div class="question"></div><div class="answers"></div><div class="win disable">Congratulations! You won!</div><div class="new-game-btn disable">New game?</div>',
});
export default game;
