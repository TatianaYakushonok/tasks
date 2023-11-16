'use strict';

// Модуль 4 урок 7 задача II-1

const guessNumber = () => {
  const randomNum = Math.floor(Math.random() * 101);
  let choiceNum;

  while ((choiceNum = prompt('Введи число от 1 до 100'))) {
    console.log(choiceNum);
    if (isNaN(choiceNum)) {
      alert('Введи число');
    } else if (choiceNum > randomNum) {
      alert('Меньше');
    } else if (choiceNum < randomNum) {
      alert('Больше');
    } else if (+choiceNum === randomNum) {
      alert('Правильно');
      break;
    }
  }
};

guessNumber();
