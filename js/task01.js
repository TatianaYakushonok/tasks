'use strict';
// Модуль 4 урок 6 задача 1

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (all, failed) => {
  return all.filter((student) => !failed.includes(student));
};

console.group('Модуль 4 урок 6 задача 1');
console.log(filter(allStudents, failedStudents));
console.groupEnd();
