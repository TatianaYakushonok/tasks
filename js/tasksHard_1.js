'use strict';

// Модуль 4 урок 3

/*===================== Задача 1доп. =======================*/
{
  const amount = parseInt(prompt('Введите сумму заработка'));
  let tax = 0;

  if (isNaN(amount) || amount < 0) {
    console.group('Модуль 4 урок 3 задача 1доп.');
    console.log('Вы ввели некорректные данные. Сумма не может быть расчитана');
    console.groupEnd();
  } else {
    if (amount < 15000 && amount > 0) {
      tax = amount * 0.13;
    }

    if (amount >= 15000 && amount <= 50000) {
      tax = amount * 0.2;
    }

    if (amount > 50000) {
      tax = amount * 0.3;
    }

    console.group('Модуль 4 урок 3 задача 1доп.');
    console.log(`Сумма налога на доход составляет ${tax} ₽`);
    console.groupEnd();
  }
}
