import { Component } from '/app/core.component.js';
import levels from '/app/levels.component.js';
import words from '/app/words.component.js';
//import control from './app/control.component';

const component = new Component({
  components: [
    levels,
    words,
    //control,
  ],
});

component.start();
