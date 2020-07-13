'use strict';

(function () {
  var lastTimeout;

  window.colorize = function (element, elementColor, elementInput) {
    var setup = document.querySelector('.setup');
    element.addEventListener('click', function () {
      var color = window.renderData(elementColor);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      setup.querySelector(elementInput).value = color;
      window.color.colorFireball = setup.querySelector('input[name="fireball-color"]').value;
      window.color.colorCoat = document.querySelector('input[name="coat-color"]').value;
      window.color.colorEyes = document.querySelector('input[name="eyes-color"]').value;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        window.updateWizards();
      }, 500);
    });
  };
})();
