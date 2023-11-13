'use strict';
// Модуль 4 урок 5 задача 2

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

console.group('Модуль 4 урок 5 задача 2');
console.log(isPrime(5));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(11));
console.groupEnd();
