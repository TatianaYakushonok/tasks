'use strict';
import { listIPv4 } from './ipv4.js';

// Модуль 4 урок 9 задача 2

const getCountIPv4 = (arr) => {
  return new Set(arr).size;
};

console.group('Модуль 4 урок 9 задача 2');
console.log(getCountIPv4(listIPv4));
console.groupEnd();
