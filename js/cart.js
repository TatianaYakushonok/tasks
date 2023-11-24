'use strict';
// Модуль 4 урок 9 задача 1

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    const objGoods = Object.assign({}, {name, price, count});
    this.items.push(objGoods);
    this.increaseCount(count);
  },
  increaseCount(num) {
    return (this.count += num);
  },
  calculateItemPrice() {
    return this.items.reduce(
        (acc, item) => (acc += item.price * item.count),
        0,
    );
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)} 
      \n Общая стоимость товаров: ${this.totalPrice.toLocaleString()} ₽`);
  },
};

console.group('Модуль 4 урок 9 задача 1');
cart.add('Телевизор LG', 45000, 1);
cart.add('Sony PlayStation 5', 35000, 1);
cart.add('Скейтборд', 15000, 1);
cart.print();
console.groupEnd();
