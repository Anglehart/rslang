import { Component } from './app/core.component';
//import overlay from './app/overlay.component.js';
import levels from './app/levels.component';
import puzzle from './app/puzzle.component';
//import control from './app/control.component.js';

const component = new Component({
  components: [
    //overlay,
    levels,
    //control,
    puzzle,
  ],
});

component.start();
