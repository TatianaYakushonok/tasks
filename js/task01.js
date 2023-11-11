// Модуль 4 урок 4 задача 1

const convertEurToRub = (eur) => {
  const currentEur = eur;
  const oneUsd = 75;
  const oneEur = oneUsd * 1.2;
  const res = currentEur * oneEur;

  return `Стоимость €${currentEur} составляет ${res.toLocaleString()} ₽`;
};

console.log(convertEurToRub(100));
