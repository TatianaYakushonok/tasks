// Модуль 4 урок 4 задача 2

const convertStr = (str) => {
  const currentStr = str;
  const loverCaseStr = currentStr.toLowerCase();
  const res = loverCaseStr[0].toUpperCase() + loverCaseStr.slice(1);

  return res;
};

console.log(convertStr('привет Мир'));
