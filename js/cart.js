'use strict';
// Модуль 4 урок 11 задача 2 this

const cart = {
  items: [],
  count: 0,
  discount: 0,
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    const objGoods = Object.assign({}, { name, price, count });
    this.items.push(objGoods);
    this.increaseCount(count);
  },
  increaseCount(num) {
    return (this.count += num);
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      const discount = (item.price * this.discount) / 100;
      acc += item.price * item.count - discount;
      return acc;
    }, 0);
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

console.group('Модуль 4 урок 11 задача 2 this');
cart.setDiscount = 'METHED';
cart.add('Телевизор LG', 45000, 1);
cart.add('Sony PlayStation 5', 35000, 1);
cart.add('Скейтборд', 15000, 1);
cart.print();
console.groupEnd();
