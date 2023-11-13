'use strict';

// Модуль 4 урок 5 задача 3

const reverseStr = (str) => {
  let res = '';
  for (let i = str.length; i > 0; i--) {
    res += str[i - 1];
  }
  return res;
};

console.group('Модуль 4 урок 5 задача 3');
console.log(reverseStr('Привет мир'));
console.groupEnd();
