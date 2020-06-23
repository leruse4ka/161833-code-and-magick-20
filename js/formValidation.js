'use strict';

(function () {
  var setup = document.querySelector('.setup');
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

    if (valueLength < window.util.MIN_NAME_LENGTH) {
      userName.setCustomValidity('Ещё ' + (window.util.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.util.MAX_NAME_LENGTH) {
      userName.setCustomValidity('Удалите лишние ' + (window.util.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else {
      userName.setCustomValidity('');
    }
  });
})();
