// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// var moveZeros = function (arr) {
//   // TODO: Program me
//   let zeros = [];
//   let arr2 = [];
// //   let arr2 = [...arr]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//     //   arr.splice(i, 1);
//       zeros.push(0);
//     }else {
//         arr2.push(arr[i])
//     }
//   }

//   let output = arr2.concat(zeros);

//   return output;
// };

var moveZeros = function (arr) {
    // TODO: Program me
    let output = arr.filter(i => i!= 0).concat(arr.filter(x => x === 0));
  
    return output;
  };




console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

console.log(moveZeros([9,0,9,1,0,2,0,1,0,1,0,3,0,1,9,0,0,9]));
