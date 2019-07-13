'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupSimilarList = setup.querySelector('.setup-similar-list');
  var userNameInput = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');

  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardArr = [];
  var numberOfWizards = 4;


  // взять случайный элемент из массива
  var getRandomEl = function (array) {
    return array[Math.floor((Math.random() * array.length))];
  };

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

  // генерирование и отрисовка магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var similarListElement = setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  });

})();
