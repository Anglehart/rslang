import { Component } from './app/core.component';
//import overlay from './app/overlay.component';
import game from './app/game.component';

const component = new Component({
  components: [
    //overlay,
    game,
  ],
});

component.start();
