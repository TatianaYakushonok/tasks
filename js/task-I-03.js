'use strict';
// Модуль 4 урок 7 задача 3

{
  const generateRandomNumbers = (len, m, n, str) => {
    const arr = [];
    const max = Math.max(m, n);
    const min = Math.min(m, n);

    while (arr.length < len) {
      const randomNum = Math.floor(min + Math.random() * (max + 1 - min));

      if (str === 'even' && randomNum % 2 === 0) {
        arr.push(randomNum);
      }

      if (str === 'odd' && randomNum % 2 !== 0) {
        arr.push(randomNum);
      }
    }
    return arr;
  };

  console.group('Модуль 4 урок 7 задача 3');
  console.log(generateRandomNumbers(10, 50, 20, 'even'));
  console.log(generateRandomNumbers(5, -50, -20, 'even'));
  console.log(generateRandomNumbers(8, -10, 50, 'even'));
  console.log(generateRandomNumbers(10, 50, 20, 'odd'));
  console.log(generateRandomNumbers(6, -50, -20, 'odd'));
  console.log(generateRandomNumbers(8, -10, 50, 'odd'));
  console.groupEnd();
}
