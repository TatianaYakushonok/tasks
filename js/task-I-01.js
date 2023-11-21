'use strict';
// Модуль 4 урок 7 задача 1

const generateRandomNumbers = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
};

console.group('Модуль 4 урок 7 задача 1');
console.log(generateRandomNumbers(10));
console.groupEnd();
