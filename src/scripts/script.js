import '../pages/index.css';
import DarkTheme from '../js/components/DarkTheme.js';
import {
  checkbox,
  checkboxInput,
} from '../js/constants/constants.js';

'use strict';

(function() {

  const darkTheme = new DarkTheme();

  if (localStorage.getItem('darkTheme') === 'On') {
    darkTheme.turnOn();
    checkboxInput.checked = true;
  }

  checkbox.addEventListener( 'change', function() {
    darkTheme.toggleStyles();
  });

})();