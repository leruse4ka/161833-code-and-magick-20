'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var renderName = function () {
  var indexName = Math.floor(Math.random() * WIZARDS_NAMES.length);
  var name = WIZARDS_NAMES[indexName];
  return name;
};

var renderLastname = function () {
  var indexLastname = Math.floor(Math.random() * WIZARDS_LASTNAMES.length);
  var lastname = WIZARDS_LASTNAMES[indexLastname];
  return lastname;
};

var renderCoatColor = function () {
  var indexCoatColor = Math.floor(Math.random() * COAT_COLORS.length);
  var coatColor = COAT_COLORS[indexCoatColor];
  return coatColor;
};

var renderEyesColor = function () {
  var indexEyesColor = Math.floor(Math.random() * EYES_COLORS.length);
  var eyesColor = EYES_COLORS[indexEyesColor];
  return eyesColor;
};

var wizards = [{
  name: renderName() + ' ' + renderLastname(),
  coatColor: renderCoatColor(),
  eyesColor: renderEyesColor()
},
{
  name: renderName() + ' ' + renderLastname(),
  coatColor: renderCoatColor(),
  eyesColor: renderEyesColor()
},
{
  name: renderName() + ' ' + renderLastname(),
  coatColor: renderCoatColor(),
  eyesColor: renderEyesColor()
},
{
  name: renderName() + ' ' + renderLastname(),
  coatColor: renderCoatColor(),
  eyesColor: renderEyesColor()
}
];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = setup.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderSetupList = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var newEl = wizardTemplate.cloneNode(true);
    newEl.querySelector('.setup-similar-label').textContent = wizards[i].name;
    newEl.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    newEl.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(newEl);
  }
  return fragment;
};

similarList.appendChild(renderSetupList());

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
