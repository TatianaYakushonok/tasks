'use strict';

// Модуль 4 урок 6 задача 1доп.

{
  const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
  ];

  const getAveragePriceGoods = (cash) => {
    return Math.floor(cash.reduce((acc, price) => (acc += price[1] / price[0]), 0) / cash.length);
  };

  const averagePriceGoods = getAveragePriceGoods(allCashbox).toLocaleString();

  console.group('Модуль 4 урок 6 задача 1доп.');
  console.log(`Средняя стоимость одного товара: ${averagePriceGoods} ₽`);
  console.groupEnd();
}
