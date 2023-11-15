'use strict';
// Модуль 4 урок 6 задача 2

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (cash) => {
  return Math.floor(cash.reduce((acc, cashBox) => (acc += cashBox), 0) / cash.length);
};

console.group('Модуль 4 урок 6 задача 2');
console.log(`Средний чек за день: ${getAverageValue(allCashbox)} ₽`);
console.groupEnd();
