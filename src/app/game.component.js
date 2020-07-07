import { Component } from './core.component';
import overlay from './overlay.component';


class Game extends Component {
  constructor(config) {
    super(config);

  }

}

const game = new Game({
  selector: '.game-wrapper',
  template: '',
});
export default game;
