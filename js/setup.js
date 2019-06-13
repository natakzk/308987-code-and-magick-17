'use strict';

var setup = document.querySelector('.setup');
var setup_similar = document.querySelector('.setup-similar');

// функция показа скрытого элемента
var showElemenet = function(el) {
  return el.classList.remove('hidden');
};

showElemenet(setup);
showElemenet(setup_similar);























var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'blue', 'yellow', 'green'];

var wizard = {
  'name': 'Пендальф',
  'age': 4,
  'female': false
};

