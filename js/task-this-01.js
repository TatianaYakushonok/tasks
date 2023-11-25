'use strict';
// Модуль 4 урок 11 задача 1 this

const rectangle = {
  width: 5,
  height: 5,

  set setWidth(value) {
    this.width = value;
  },
  set setHeight(value) {
    this.height = value;
  },

  get calculatePerimeter() {
    return `${(this.width + this.height) * 2}см`;
  },
  get calculateArea() {
    return `${this.width * this.height}см`;
  },
};

console.group('Модуль 4 урок 11 задача 1 this');
console.log(rectangle.calculatePerimeter);
console.log(rectangle.calculateArea);
rectangle.setWidth = 20;
rectangle.setHeight = 10;
console.log(rectangle.calculatePerimeter);
console.log(rectangle.calculateArea);
console.groupEnd();
