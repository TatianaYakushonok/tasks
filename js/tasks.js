'use strict';

// Модуль 4 урок 3

/*===================== Задача 2 =======================*/

const rain = Math.round(Math.random());
const weather = rain === 1 ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!';

console.group('Модуль 4 урок 3 задача 2');
console.log(weather);
console.groupEnd();

/*===================== Задача 3 =======================*/

{
  let totalScore = 0;
  const scoreMaths = parseInt(prompt('Введите количество баллов по математике'));
  const scoreRussian = parseInt(prompt('Введите количество баллов по русскому языку'));
  const scoreInformatics = parseInt(prompt('Введите количество баллов по информатике'));

  if (!isNaN(scoreMaths) && !isNaN(scoreRussian) && !isNaN(scoreInformatics)) {
    totalScore = scoreMaths + scoreRussian + scoreInformatics;
  }

  const res = totalScore >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'Количество баллов не достаточно, вы не поступили на бюджет!';

  console.group('Модуль 4 урок 3 задача 3');
  console.log(res);
  console.groupEnd();
}
/*===================== Задача 4 =======================*/

{
  const minDenominBanknote = 100;
  const sum = parseInt(prompt('Введите сумму, которую хотите снять'));

  if (!isNaN(sum) && sum > 0) {
    const res = sum % minDenominBanknote === 0 ? 'Можете снимать' : 'Отказано! Минимальный номинал купюр к снятию 100 ₽';

    console.group('Модуль 4 урок 3 задача 4');
    console.log(res);
    console.groupEnd();
  } else {
    console.group('Модуль 4 урок 3 задача 4');
    console.log('Вы ввели некорректные данные');
    console.groupEnd();
  }
}
