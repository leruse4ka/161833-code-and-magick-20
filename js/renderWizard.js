'use strict';

(function () {

  var similarList = document.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderSetupList = function (wizard) {
    var newEl = wizardTemplate.cloneNode(true);
    newEl.querySelector('.setup-similar-label').innerText = wizard.name;
    newEl.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newEl.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return newEl;
  };

  var render = function (data) {
    var fragment = document.createDocumentFragment();
    similarList.innerHTML = '';
    var takeNumber = data.length > window.util.MAX_SIMILAR_WIZARD_COUNT ? window.util.MAX_SIMILAR_WIZARD_COUNT : data.length;
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderSetupList(data[i]));
    }
    similarList.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = render;

})();
