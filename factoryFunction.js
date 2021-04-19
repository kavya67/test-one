// function createTaxCalculator(tax) {
//   //function that process another fucntion is called factory function
//   function calculateTax(amount) {
//     return amount * tax;
//   }

//   return calculateTax;
// }

// const calculateVatAmount = createTaxCalculator(0.18);

// console.log(calculateVatAmount(200));


(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined') );
  console.log("b defined? " + (typeof b !== 'undefined')  );
  console.log(typeof b)
  // console.log(a)