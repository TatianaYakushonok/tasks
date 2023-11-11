const gcd = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }

  while (y) {
    let res = y;
    y = x % y;
    x = res;
  }

  return x;
};

console.log(gcd(12, 13));
console.log(gcd(9, 3));
console.log(gcd(10, 15));
console.log(gcd(10, 0));
console.log(gcd(0, 12));
