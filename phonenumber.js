function createPhoneNumber(numbers) {
  let output = "(";
  for (let i = 0; i < numbers.length; i++) {
    if (i > 2 && i === 5) {
      output += numbers[i] + "-";
    } else if (i === 2) {
      output += numbers[2] + ")"+ " ";
    } else {
      output += numbers[i];
    }
  }

  return output;
}

function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    for(let i=0; i<numbers.length;i++){
        format = format.replace("x", numbers[i]);
    }

    return format;
  }

function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
