'use strict';
(function () {
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  window.wizards = [{
    name: window.renderData(WIZARDS_NAMES) + ' ' + window.renderData(WIZARDS_LASTNAMES),
    coatColor: window.renderData(window.util.COAT_COLORS),
    eyesColor: window.renderData(window.util.EYES_COLORS)
  },
  {
    name: window.renderData(WIZARDS_NAMES) + ' ' + window.renderData(WIZARDS_LASTNAMES),
    coatColor: window.renderData(window.util.COAT_COLORS),
    eyesColor: window.renderData(window.util.EYES_COLORS)
  },
  {
    name: window.renderData(WIZARDS_NAMES) + ' ' + window.renderData(WIZARDS_LASTNAMES),
    coatColor: window.renderData(window.util.COAT_COLORS),
    eyesColor: window.renderData(window.util.EYES_COLORS)
  },
  {
    name: window.renderData(WIZARDS_NAMES) + ' ' + window.renderData(WIZARDS_LASTNAMES),
    coatColor: window.renderData(window.util.COAT_COLORS),
    eyesColor: window.renderData(window.util.EYES_COLORS)
  }
  ];
})();
