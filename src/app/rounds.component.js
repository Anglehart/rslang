import { Component } from './core.component';
import game from './game.component';
import network from './network.service';


class Rounds extends Component {
  constructor(config) {
    super(config);
    this.currentRound = 0;
    this.currentAnswer = '';
  }

  drawRounds() {
    document.querySelector('.rounds-wrapper').innerHTML = '';
    for (let i = 1; i < 16; i += 1) {
      const wordRow = document.createElement('div');
      wordRow.id = `round${i}`;
      wordRow.classList.add('wordRow');
      wordRow.innerHTML = `Round №${i}`;
      document.querySelector('.rounds-wrapper').append(wordRow);
    }
  }
  
  changeRound(round) {
    document.querySelectorAll('.wordRow').forEach((item) => { item.classList.remove('currentRound') });
    document.getElementById(`round${round}`).classList.add('currentRound');
  }

}

const rounds = new Rounds({
  selector: '.rounds-wrapper',
  template: '',
});
export default rounds;
