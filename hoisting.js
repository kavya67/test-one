// if (true) {
//   console.log(x);
//   var x = 20;
// } // only declaration , no initialisation to console the value

// if (true) {
//   x = 40;
//   console.log(x);
//   var x;
// } // hoisting, variable is declared at the top of the scope

// if (true) {
//   x = 50;
//   console.log(x);
//   let x;
// } //reference error // instance of global scope is unavailabel to the local scope

/* if (true) {
  let x = 5;
}

console.log(x); */

//Reference error , instance of local scope is unavailable to the global scope

const arr = [];
// arr = [1, 3, 4]; //error
arr.push(1,2,4)
console.log(arr); //no error

//but

// const obj = {};
// obj.name = "kavya";
// console.log(obj);


//binding 
var name = 'Scotch';
var company = {
    name: 'Google',
    printName: function printName() {
      console.log( this.name );
    }
  }



company.printName();  // Google

// print name call site
// won't be the object
// but global
var printNameAgain = company.printName;

printNameAgain(); // Scotch

//explicit bindling
//   var printNameAgain = company.printName;
//   var printFunc = printNameAgain.bind(company);
//  printFunc('Hi ', '!!'); 