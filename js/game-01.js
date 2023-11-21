'use strict';

// Модуль 4 урок 7 задача II-1

const guessNumber = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  while (true) {
    const userNum = prompt('Введите число от 1 до 100');

    if (userNum === null) break;

    // prettier-ignore
    switch (true) {
      case (isNaN(+userNum) || +userNum === 0):
        alert('Введите число');
        break;
      case (+userNum < randomNum):
        alert('Больше');
        break;
      case (+userNum > randomNum):
        alert('Меньше');
        break;
      case (+userNum === randomNum):
        alert('Правильно');
        break;
      default:
        alert('Введите число');
        break;
    }
  }
};

guessNumber();
