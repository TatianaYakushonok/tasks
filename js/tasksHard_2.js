'use strict';

// Модуль 4 урок 3

/*===================== Задача 2доп. =======================*/

{
  const amount = parseInt(prompt('Введите сумму заработка'));
  let tax = 0;

  if (isNaN(amount)) {
    console.group('Модуль 4 урок 3 задача 2доп.');
    console.log('Вы ввели не число. Сумма не может быть расчитана');
    console.groupEnd();
  } else {
    let sum = amount;

    if (sum > 50000) {
      tax += (sum - 50000) * 0.3;
      sum = 50000;
    }

    if (sum > 15000) {
      tax += (sum - 15000) * 0.2;
      sum = 15000;
    }

    tax += sum * 0.13;

    console.group('Модуль 4 урок 3 задача 2доп.');
    console.log(`Сумма налога на доход составляет ${tax} ₽`);
    console.groupEnd();
  }
}
