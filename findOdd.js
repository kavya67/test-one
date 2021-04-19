function findOdd(A) {
    //happy coding!
    let B = A;
    let count = 0;
    let output = [];

    for(let i=0; i< A.length;i++){
        for(let j=0; j< B.length; j++){
            if(A[i] === B[j]){
                count++
            }
        }

        // if(count%2 !== 0){
        //  output.push[A[i]];
        // }
    }

    return output;
  }

  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))