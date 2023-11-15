'use strict';

// Модуль 4 урок 6 задача 3

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arrName, prefix) => {
  const resArr = [];
  for (let i = 0; i < arrName.length; i++) {
    resArr.push(`${prefix} ${arrName[i]}`);
  }
  return resArr;
};

console.group('Модуль 4 урок 6 задача 3');
console.log(addPrefix(names, 'Mr'));
console.groupEnd();
