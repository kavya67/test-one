function disemvowel(str) {
    str = str.replace(/[aeiou]/gi, "" );
    return str;
  } //with replace method

// without replace method

function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strChar = "";
    for(let i = 0; i< str.length; i++){
        let char = str.charAt(i);
        console.log(char);
        if(vowels.indexOf(char) === -1){
            strChar += char
        }
    }

    return strChar
}



console.log(disemvowel("This website is for losers LOL!"));
