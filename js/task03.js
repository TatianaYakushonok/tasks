const convert = (sum, count, discount) => {
  let res = sum;
  if (count > 10) {
    res -= sum * 0.03;
  }

  if (sum > 30000) {
    res -= (sum - 30000) * 0.15;
  }

  if (discount === 'METHED') {
    res -= sum * 0.1;
  }

  if (discount === 'G3H2Z1' && res > 2000) {
    res -= 500;
  }

  return res;
};
