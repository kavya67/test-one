// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not

function parseInt(string) {
  // TODO: it's your task now
  const ones = [{"zero": 0},{ "one": 1}, {"two": 2}, {"three": 3}, {"four": 4}, {"five": 5}, {"six": 6}, {"seven": 7}, {"eight": 8}, {"nine": 9}];
  const tens = [{"ten": 10}, {"twenty": 20}, {"thirty": 30}, {"fourty": 40}, {"fifty": 50},{ "sixty": 60}, {"seventy": 70}, {"eighty": 80}, {"ninety": 90}];
    const stringToArray = string.split(" ");

    if(stringToArray.length === 1){
        for(let i =0; i < ones.length; i++){
            
        }
    }
}

console.log((parseInt("five")));
// console.log((parseInt("twenty"), 20));
// console.log(parseInt(('two hundred forty-six'), 246));