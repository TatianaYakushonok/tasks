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
    if (amount <= 15000 && amount > 0) {
      tax = amount * 0.13;
    }

    if (amount > 15000 && amount <= 50000) {
      tax = (amount - 15000) * 0.2 + 15000 * 0.13;
    }

    if (amount > 50000) {
      tax = (amount - 50000) * 0.3 + (50000 - 15000) * 0.2 + 15000 * 0.13;
    }

    console.group('Модуль 4 урок 3 задача 2доп.');
    console.log(`Сумма налога на доход составляет ${tax} ₽`);
    console.groupEnd();
  }
}
