'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 30;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_CHART = 150;
var titleStrokeSum = 2;
var cloudTitleHeight = CLOUD_Y + GAP + TEXT_HEIGHT * titleStrokeSum;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP / 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var columnX = CLOUD_X + GAP + (BAR_WIDTH + BAR_WIDTH + 10) * i;
    var columnMaxHeight = BAR_CHART - TEXT_HEIGHT;
    var columnHeight = (columnMaxHeight * times[i]) / maxTime;
    var columnTime = cloudTitleHeight + (columnMaxHeight - columnHeight);
    var columnY = cloudTitleHeight + TEXT_HEIGHT + (columnMaxHeight - columnHeight);
    var columnNames = players[i];

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.round(times[i]), columnX, columnTime);
    ctx.fillText(columnNames, columnX, CLOUD_Y + CLOUD_HEIGHT - GAP);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';

    ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);
  }
};
