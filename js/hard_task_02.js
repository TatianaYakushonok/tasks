'use strict';

// Модуль 4 урок 4 задача 2доп.

const num1 = parseInt(prompt('Введите первое число'));
const num2 = parseInt(prompt('Введите второе число'));

const getMinNum = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    console.log('Вы ввели не число');
    return;
  }

  const minNum = (x + y - Math.abs(x - y)) / 2;

  return minNum;
};

console.group('Модуль 4 урок 4 задача 2доп.');
console.log(getMinNum(num1, num2));
console.groupEnd();
