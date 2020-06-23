'use strict';

(function () {
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
    });
  };
})();
