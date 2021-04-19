function tickets(peopleInLine){
    const minTicketVal = 25;
    let sum = 0;
    if (peopleInLine[0] === minTicketVal) {
      
      for (let i = 0; i < peopleInLine.length; i++) {
        let balance = 0;
        if (peopleInLine[i] > minTicketVal) {
          balance = peopleInLine[i] - minTicketVal;
          sum = sum - balance;
        } else {
          sum = sum + peopleInLine[i];
        }
        if (sum < 0) {
          return "NO";
        }
      }
  
      return "YES";
    } else {
      return "NO";
    }
  }

console.log(
  tickets([25,25,25,100,25,50,25,100,25,25,50,100,25,50,25,100])
);
