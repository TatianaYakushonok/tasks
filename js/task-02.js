'use strict';
// Модуль 4 урок 11 задача 2

const createArrNum = (arr) => {
  arr.push(Math.floor(Math.random() * 10) + 1);
  const sum = arr.reduce((acc, num) => (acc += num), 0);

  if (sum < 50) {
    return createArrNum(arr);
  }

  return arr;
};

console.group('Модуль 4 урок 11 задача 2');
console.log(createArrNum([]));
console.groupEnd();
