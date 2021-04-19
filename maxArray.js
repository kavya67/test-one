function maxSequence(arr) {
  //   const newArr = [...new Set(arr)];
    maxVal = Math.max(...arr);
    minVal = Math.min(...arr);
    console.log(maxVal, minVal)
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
