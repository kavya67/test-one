// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  // ...
  let letters = word.split("");
  let obj = new Set(letters);
//   let obj = {};

//   letters.forEach( val => {
//     //   console.log()
//     if (!Object.keys(obj).includes(val)) {
//         obj[val] = 1;
//     } else {
//         obj[val]++;
//     }
//   });



  return obj;
}

console.log(duplicateEncode("recede"));
