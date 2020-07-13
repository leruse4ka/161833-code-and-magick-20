'use strict';

(function () {

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var colorFireball = document.querySelector('input[name="fireball-color"]').value;
  var colorCoat = document.querySelector('input[name="coat-color"]').value;
  var colorEyes = document.querySelector('input[name="eyes-color"]').value;

  window.colorize(wizardCoat, window.util.COAT_COLORS, 'input[name="coat-color"]');
  window.colorize(fireball, window.util.FIREBALL_COLORS, 'input[name="fireball-color"]');
  window.colorize(wizardEyes, window.util.EYES_COLORS, 'input[name="eyes-color"]');

  window.color = {
    colorFireball: colorFireball,
    colorCoat: colorCoat,
    colorEyes: colorEyes,
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    colorEyes = color;
    window.updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    colorCoat = color;
    window.updateWizards();
  });
})();
