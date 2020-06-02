'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PTMono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + TEXT_HEIGHT * 1.7);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + GAP + BAR_WIDTH + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, ((BAR_MAX_HEIGHT * times[i]) / maxTime) * -1);
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + BAR_WIDTH + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT + ((BAR_MAX_HEIGHT * times[i]) / maxTime) * -1);
  }
};
