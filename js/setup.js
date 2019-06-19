'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = setup.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_DATA = {
  name: {
    firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  },
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardArr = [];
var numberOfWizards = 4;


// взять случайный элемент из массива
var getRandomEl = function (array) {
  return array[Math.floor((Math.random() * array.length))];
};

// показ скрытого элемента
var showElement = function (el) {
  return el.classList.remove('hidden');
};

// функция закрытия попапа по нажатию на esc
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// функция открытия попапа
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// функция закрытия попапа
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', changeCoatColor);
  wizardEyes.removeEventListener('click', changeEyesColor);
  fireballWrap.removeEventListener('click', changeFireballColor);
};

// открытие попапа
setupOpen.addEventListener('click', function () {
  openPopup();
});

// открытие попапа при фокусировке на аватаре и по нажатию на enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// закрытие попапа по нажатию на крестик
setupClose.addEventListener('click', function () {
  closePopup();
});

// закрытие попапа по нажатию на enter при фокусе на крестике
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// валидация поля ввода имени волшебника
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// валидация поля ввода имени волшебника (имя как минимум из двух слов)
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// функция изменения цвета мантии
var changeCoatColor = function () {
  wizardCoat.style.fill = getRandomEl(WIZARD_DATA.coatColor);
};

// функция изменения цвета глаз
var changeEyesColor = function () {
  wizardEyes.style.fill = getRandomEl(WIZARD_DATA.eyesColor);
};

// функция изменения цвета фаербола
var changeFireballColor = function () {
  fireballWrap.style.background = getRandomEl(FIREBALL_COLORS);
};

// изменение цвета мантии по клику
wizardCoat.addEventListener('click', changeCoatColor);

// изменение цвета глаз по клику
wizardEyes.addEventListener('click', changeEyesColor);

// изменение цвета глаз по клику
fireballWrap.addEventListener('click', changeFireballColor);

// генерирование мага на основе случайных данных
var generateWizard = function () {
  var wizard = {
    name: getRandomEl(WIZARD_DATA.name.firstNames) + ' ' + getRandomEl(WIZARD_DATA.name.lastNames),
    coatColor: getRandomEl(WIZARD_DATA.coatColor),
    eyesColor: getRandomEl(WIZARD_DATA.eyesColor)
  };
  return wizard;
};

// генерирование и отрисовка магов
var renderWizards = function () {
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
showElement(setupSimilar);

