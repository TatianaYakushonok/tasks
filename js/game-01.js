'use strict';

// Модуль 4 урок 7 задача II-1

const guessNumber = () => {
  const randomNum = Math.floor(Math.random() * 101);

  while (true) {
    const userNum = prompt('Введи число от 1 до 100');

    if (+userNum) {
      if (+userNum > randomNum) {
        alert('Меньше');
      } else if (+userNum < randomNum) {
        alert('Больше');
      } else if (+userNum === randomNum) {
        alert('Правильно');
        break;
      }
    } else if (userNum === null) {
      break;
    } else if (isNaN(+userNum) || +userNum === 0) {
      alert('Введи число');
    }
  }
};

guessNumber();
