'use strict';
// Модуль 4 урок 7 задача 1

const generateRandomNumbers = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const randomNum = Math.floor(Math.random() * 101);
    arr.push(randomNum);
  }
  return arr;
};

console.group('Модуль 4 урок 7 задача 1');
console.log(generateRandomNumbers(10));
console.groupEnd();
