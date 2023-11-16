'use strict';
// Модуль 4 урок 7 задача 2

{
  const generateRandomNumbers = (len, m, n) => {
    const arr = [];
    const max = Math.max(m, n);
    const min = Math.min(m, n);

    for (let i = 0; i < len; i++) {
      const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
      arr.push(randomNum);
    }
    return arr;
  };

  console.group('Модуль 4 урок 7 задача 2');
  console.log(generateRandomNumbers(10, 50, 20));
  console.log(generateRandomNumbers(10, -50, -20));
  console.log(generateRandomNumbers(8, -10, 50));
  console.groupEnd();
}
