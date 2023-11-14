'use strict';

// Модуль 4 урок 4 задача 1доп.

const gcd = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }

  x = Math.abs(x);
  y = Math.abs(y);

  while (y) {
    let res = y;
    y = x % y;
    x = res;
  }

  return x;
};

console.group('Модуль 4 урок 4 задача 1доп.');
console.log(gcd(9, 3));
console.log(gcd(10, 15));
console.log(gcd(10, 0));
console.log(gcd(24, 12));
console.log(gcd(0, 0));
console.groupEnd();
