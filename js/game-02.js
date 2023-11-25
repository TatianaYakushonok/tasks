'use strict';

// Модуль 4 урок 7 задача II-1
{
  const getRange = () => {
    const num1 = prompt('Введите первое число');
    if (num1 === null) return;

    const num2 = prompt('Введите второе число');
    if (num2 === null) return;

    if (isNaN(+num1) || isNaN(+num2) || +num1 === 0 || +num2 === 0) {
      alert('Введите число');
      return getRange();
    }

    const min = Math.min(+num1, +num2);
    const max = Math.max(+num1, +num2);

    return [min, max];
  };

  let range = getRange();
  let [min, max] = [];
  let randomNum = 0;
  let count = 0;
  if (range) {
    [min, max] = [...range];
    randomNum = Math.floor(min + Math.random() * (max + 1 - min));
    count = Math.floor((max - min) * 0.3);
  } else {
    alert('Вы вышли из игры');
  }
  const arrNum = [];

  const guessNumber = () => {
    if (range) {
      if (count === 0) {
        alert('Попытки закончились. Вы проиграли!');
        return;
      }

      // prettier-ignore
      const userNum = prompt(
          `Введите число от ${min} до ${max}. У вас ${count} попыток`,
      );

      if (userNum === null) return;

      if (+userNum < min || +userNum > max) {
        alert('Вы ввели число вне заданного диапазона');
        return guessNumber();
      }

      if (arrNum.includes(+userNum)) {
        alert('Это число вы уже вводили');
        return guessNumber();
      } else {
        arrNum.push(+userNum);
      }

      switch (true) {
        case isNaN(+userNum) || +userNum === 0:
          alert('Введите число');
          break;
        case +userNum < randomNum:
          alert('Больше');
          count--;
          break;
        case +userNum > randomNum:
          alert('Меньше');
          count--;
          break;
        case +userNum === randomNum:
          alert('Правильно');
          range = getRange();
          if (range) {
            [min, max] = [...range];
            randomNum = Math.floor(min + Math.random() * (max + 1 - min));
            count = Math.floor((max - min) * 0.3);
          } else {
            alert('Вы вышли из игры');
          }
          break;
        default:
          alert('Введите число');
          break;
      }

      return guessNumber();
    } else {
      return;
    }
  };

  guessNumber();
}
