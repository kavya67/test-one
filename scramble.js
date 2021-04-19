function scramble(str1, str2) {
  if (str1.length == 0 && str2.length === 0) {
    return false;
  }
  const str_arr1 = str1.split("");
  const str_arr2 = str2.split("");
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str_arr1.length; i++) {
    //   console.log(str_arr1[i] )
    if (obj1[str_arr1[i]] === undefined) {
      obj1[str_arr1[i]] = 1;
    } else {
      obj1[str_arr1[i]]++;
    }
  }
  for (let i = 0; i < str_arr2.length; i++) {
    // console.log(str_arr2[i]);
    if (obj2[str_arr2[i]] === undefined) {
      obj2[str_arr2[i]] = 1;
    } else {
      obj2[str_arr2[i]] = obj2[str_arr2[i]] + 1;
    }
  }
  // for (let i = 0; i < str_arr2.length; i++) {
  //   if (Object.keys(obj1).includes(str_arr2[i])) {
  //     if (!obj1[str_arr1[i]] >= obj2[str_arr2[i]]) {
  //       return false;
  //     }
  //   }
  // }

  for (let i in obj2) {
    if (Object.keys(obj1).includes(i)) {
      if (!(obj1[i] >= obj2[i])) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("katas", "steak"));
