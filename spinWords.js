function spinWords(value) {
  //TODO Have fun :
  let output = value.split(" ");

  for (let i = 0; i < output.length; i++) {
    if (output[i].length >= 5) {
      let revString = output[i].split("").reverse().join("");
      output[i] = output[i].replace(output[i], revString);
    }
  }

  return output.join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));


