function getPINs(observed) {
  // TODO: This is your job, detective!

  const adjacentPinCombinations = {
    1: "24",
    2: "135",
    3: "26",
    4: "157",
    5: "2468",
    6: "359",
    7: "48",
    8: "5790",
    9: "68",
    0: "8",
  };

  function combinationValues(observed) {
    if (Object.keys(adjacentPinCombinations).includes(observed)) {
      const pinVariations = adjacentPinCombinations[observed].split("");
      pinVariations.push(observed);
      return pinVariations;
    }
  }

  const pinArray = observed.split("");
  let pinVariations = [];
  let pinCombo = [];

  for (let i = 0; i < pinArray.length; i++) {
    const output = combinationValues(pinArray[i]);
    pinVariations = [...pinVariations, ...output];
    pinVariations = [...new Set(pinVariations)];
  }

  for (let i = 0; i < pinVariations.length; i++) {
    for (let j = 0; j < pinVariations.length; j++) {
      let val = pinVariations.join("").substr(i, observed.length + j);
      console.log("val", val);
      pinCombo = [...pinCombo, val];
    }
  }

  return pinCombo;
}

console.log(getPINs("11"));
