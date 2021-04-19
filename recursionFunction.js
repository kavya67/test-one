function powerOf(x, n) {
  if (n === 1) {
    return x;
  }

  return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));
