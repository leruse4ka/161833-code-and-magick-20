'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var renderData = function (name) {
  var index = Math.floor(Math.random() * name.length);
  var data = name[index];
  return data;
};

var wizards = [{
  name: renderData(WIZARDS_NAMES) + ' ' + renderData(WIZARDS_LASTNAMES),
  coatColor: renderData(COAT_COLORS),
  eyesColor: renderData(EYES_COLORS)
},
{
  name: renderData(WIZARDS_NAMES) + ' ' + renderData(WIZARDS_LASTNAMES),
  coatColor: renderData(COAT_COLORS),
  eyesColor: renderData(EYES_COLORS)
},
{
  name: renderData(WIZARDS_NAMES) + ' ' + renderData(WIZARDS_LASTNAMES),
  coatColor: renderData(COAT_COLORS),
  eyesColor: renderData(EYES_COLORS)
},
{
  name: renderData(WIZARDS_NAMES) + ' ' + renderData(WIZARDS_LASTNAMES),
  coatColor: renderData(COAT_COLORS),
  eyesColor: renderData(EYES_COLORS)
}
];

var setup = document.querySelector('.setup');

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

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (document.querySelector('.setup-user-name') === document.activeElement) {
    return;
  } else {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var userName = setup.querySelector('.setup-user-name');

userName.addEventListener('invalid', function () {
  if (userName.validity.tooShort) {
    userName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userName.validity.tooLong) {
    userName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userName.validity.valueMissing) {
    userName.setCustomValidity('Обязательное поле');
  } else {
    userName.setCustomValidity('');
  }
});

userName.addEventListener('input', function () {
  var valueLength = userName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userName.setCustomValidity('Удалите лишние ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else {
    userName.setCustomValidity('');
  }
});

var wizard = document.querySelector('.setup-wizard');


wizard.querySelector('.wizard-coat').addEventListener('click', function () {
  setup.querySelector('input[name="coat-color"]').value = renderData(COAT_COLORS);
  wizard.querySelector('.wizard-coat').style.fill = setup.querySelector('input[name="coat-color"]').value;
});

wizard.querySelector('.wizard-eyes').addEventListener('click', function () {
  setup.querySelector('input[name="eyes-color"]').value = renderData(EYES_COLORS);
  wizard.querySelector('.wizard-eyes').style.fill = setup.querySelector('input[name="eyes-color"]').value;
});

setup.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
  setup.querySelector('input[name="fireball-color"]').value = renderData(FIREBALL_COLORS);
  setup.querySelector('.setup-fireball-wrap').style.backgroundColor = setup.querySelector('input[name="fireball-color"]').value ;
});
