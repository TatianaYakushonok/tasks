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
    const countGoods = cash.reduce((acc, count) => (acc += count[0]), 0);
    const totalPrice = cash.reduce((acc, price) => (acc += price[1]), 0);
    const averagePrice = Math.floor(totalPrice / countGoods);

    return averagePrice;
  };

  const averagePriceGoods = getAveragePriceGoods(allCashbox).toLocaleString();

  console.group('Модуль 4 урок 6 задача 1доп.');
  console.log(`Средняя стоимость одного товара: ${averagePriceGoods} ₽`);
  console.groupEnd();
}
