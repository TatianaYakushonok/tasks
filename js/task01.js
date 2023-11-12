'use strict';
// Модуль 4 урок 4 задача 1

const convertEurToRub = (eur) => {
  const currentEur = eur;
  const oneUsd = 75;
  const oneEur = oneUsd * 1.2;
  const res = currentEur * oneEur;

  return res;
};

console.log(`Стоимость EUR составляет ${convertEurToRub(100).toLocaleString()} ₽`);
