// Модуль 4 урок 1
{
  const nameGoods = 'Телевизор DEXP';
  const amount = 15;
  const category = 'Техника для дома';
  const price = 1000;
  const totalPrice = amount * price;

  console.group('Модуль 4 урок 1');
  console.log('Товар: ' + nameGoods);
  console.log('Общая стоимость: ' + totalPrice);
  console.groupEnd();
}
