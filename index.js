import { Component } from '/app/core.component.js';
//import overlay from './app/overlay.component.js';
import levels from './app/levels.component.js';
import puzzle from './app/puzzle.component.js';
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
