'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var similarList = setup.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderSetupList = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.wizards.length; i++) {
      var newEl = wizardTemplate.cloneNode(true);
      newEl.querySelector('.setup-similar-label').textContent = window.wizards[i].name;
      newEl.querySelector('.wizard-coat').style.fill = window.wizards[i].coatColor;
      newEl.querySelector('.wizard-eyes').style.fill = window.wizards[i].eyesColor;
      fragment.appendChild(newEl);
    }
    return fragment;
  };

  similarList.appendChild(renderSetupList());

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.util.COAT_COLORS, 'input[name="coat-color"]');
  window.colorize(fireball, window.util.FIREBALL_COLORS, 'input[name="fireball-color"]');
  window.colorize(wizardEyes, window.util.EYES_COLORS, 'input[name="eyes-color"]');

})();
