'use strict';

// Модуль 4 урок 7 задача II-1
{
  const guessNumber = () => {
    const arrNum = [];

    let num1 = parseInt(prompt('Введите первое число'));
    let num2 = parseInt(prompt('Введите второе число'));

    if (!num1 || !num2) {
      alert('Введите число');
      guessNumber();
    }

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
    let count = Math.floor((max - min) * 0.3);

    while (true) {
      if (count === 0) {
        alert('Попытки закончились. Вы проиграли!');
        break;
      }

      const userNum = prompt(`Введите число от ${min} до ${max}. Количество попыток: ${count}`);

      if (arrNum.includes(+userNum)) {
        alert('Это число вы уже вводили');
        continue;
      } else {
        arrNum.push(+userNum);
      }

      if (userNum === null) {
        break;
      } else if (isNaN(+userNum) || +userNum === 0) {
        alert('Введите число');
      } else if (+userNum > randomNum) {
        count--;
        alert('Меньше');
      } else if (+userNum < randomNum) {
        count--;
        alert('Больше');
      } else if (+userNum === randomNum) {
        alert('Правильно');
        break;
      }
    }
  };

  guessNumber();
}
