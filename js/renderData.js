'use strict';

(function () {
  window.renderData = function (name) {
    var index = Math.floor(Math.random() * name.length);
    var data = name[index];
    return data;
  };
})();
