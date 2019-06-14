'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var WIZARD_DATA = {
  name: {
    firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  }
};
var wizardArr = [];
var numberOfWizards = 4;

// показ скрытого элемента
var showElemenet = function (el) {
  return el.classList.remove('hidden');
};

// показ попапа
showElemenet(setup);

// выбор случайного элемента из массива
var getRandomEl = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// генерирование и отрисовка магов
var renderWizards = function () {
  // генерирование мага на основе случайных данных
  var generateWizard = function () {
    var wizard = {
      name: getRandomEl(WIZARD_DATA.name.firstNames) + ' ' + getRandomEl(WIZARD_DATA.name.lastNames),
      coatColor: getRandomEl(WIZARD_DATA.name.coatColor),
      eyesColor: getRandomEl(WIZARD_DATA.name.eyesColor)
    };
    return wizard;
  };

  var renderWizardEl = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardArr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardArr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardArr[i].eyesColor;
    return wizardElement;
  };

  // создание массива из 4 рандомных магов и вставка их в шаблон
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < numberOfWizards; i++) {
    wizardArr[i] = generateWizard();
    fragment.appendChild(renderWizardEl(wizardArr[i]));
  }
  setupSimilarList.appendChild(fragment);

  return setupSimilarList;
};

renderWizards();

// показ похожих магов
showElemenet(setupSimilar);
