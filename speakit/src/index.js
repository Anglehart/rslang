import { Component } from './app/core.component';
import overlay from './app/overlay.component';
import levels from './app/levels.component';
import words from './app/words.component';
import control from './app/control.component';

const component = new Component({
  components: [
    overlay,
    levels,
    control,
    words,
  ],
});

component.start();
