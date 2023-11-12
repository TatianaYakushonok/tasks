'use strict';

// Модуль 4 урок 4 задача 3

const convert = (sum, count, discount) => {
  let res = sum;
  if (count > 10) {
    res -= sum * 0.03;
  }

  if (sum > 30000) {
    res -= (sum - 30000) * 0.15;
  }

  if (discount === 'METHED') {
    res -= sum * 0.1;
  }

  if (discount === 'G3H2Z1' && res > 2000) {
    res -= 500;
  }

  return res;
};

console.group('Модуль 4 урок 4 задача 3');
console.log(convert(35000, 11, 'METHED'));
console.log(convert(25000, 11, 'G3H2Z1'));
console.log(convert(2000, 11, 'G3H2Z1'));
console.groupEnd();
