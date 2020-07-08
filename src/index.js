import { Component } from './app/core.component';
//import overlay from './app/overlay.component';
import game from './app/game.component';
import rounds from './app/rounds.component';

const component = new Component({
  components: [
    //overlay,
    rounds,
    game,  
  ],
});

component.start();
