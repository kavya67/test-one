function zeros(n) {
  let sum = 0;
 
  for (let i = 5; Math.floor(n / i) > 0; i = i * 5) {
    console.log(n, i , Math.floor(n / i));
    sum = sum + Math.floor(n / i);
  }

  return sum;
}

console.log(zeros(30));
