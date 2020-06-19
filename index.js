import { Component } from '/app/core.component.js';
import overlay from '/app/overlay.component.js';
import levels from '/app/levels.component.js';
import words from '/app/words.component.js';
import control from './app/control.component.js';

const component = new Component({
  components: [
    overlay,
    levels,
    words,
    control,
  ],
});

component.start();
