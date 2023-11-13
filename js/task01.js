'use strict';
// Модуль 4 урок 5 задача 1

console.group('Модуль 4 урок 5 задача 1');

for (let i = 1; i <= 10; i++) {
  console.log('-------------------------');
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}^${j} = ${i ** j}`);
  }
}

console.groupEnd();
