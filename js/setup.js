'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var similarList = setup.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderSetupList = function (wizard) {
    var newEl = wizardTemplate.cloneNode(true);
    newEl.querySelector('.setup-similar-label').textContent = wizard.name;
    newEl.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newEl.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return newEl;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.util.MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderSetupList(wizards[i]));
    }
    similarList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.util.COAT_COLORS, 'input[name="coat-color"]');
  window.colorize(fireball, window.util.FIREBALL_COLORS, 'input[name="fireball-color"]');
  window.colorize(wizardEyes, window.util.EYES_COLORS, 'input[name="eyes-color"]');

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
