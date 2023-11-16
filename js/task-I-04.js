'use strict';

// Модуль 4 урок 7 задача 4доп.

{
  const getLeapYear = (m, n) => {
    const arrYear = [];
    const max = Math.max(m, n);
    const min = Math.min(m, n);

    for (let i = min; i <= max; i++) {
      if (i % 4 === 0 || (i % 100 === 0 && i % 400 !== 0)) {
        arrYear.push(i);
      }
    }
    return arrYear;
  };

  console.group('Модуль 4 урок 7 задача 4доп.');
  console.log(getLeapYear(1992, 2018));
  console.log(getLeapYear(-1000, 2000));
  console.groupEnd();
}
