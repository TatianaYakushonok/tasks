'use strict';
// Модуль 4 урок 8 задача 1

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, count = 1) {
    const objGoods = Object.assign(
      {},
      {
        name: name,
        price: price,
        count: count,
      },
    );
    this.items.push(objGoods);
    this.calculateItemPrice();
    this.increaseCount(count);
  },
  increaseCount(num) {
    return (this.count += num);
  },
  calculateItemPrice() {
    return (this.totalPrice = this.items.reduce((acc, item) => (acc += item.price * item.count), 0));
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)} \n Общая стоимость товаров: ${this.totalPrice.toLocaleString()} ₽`);
  },
};

console.group('Модуль 4 урок 8 задача 1');
cart.add('Телевизор LG', 45000, 1);
cart.add('Sony PlayStation 5', 35000, 1);
cart.add('Скейтборд', 15000, 1);
cart.print();
console.groupEnd();
