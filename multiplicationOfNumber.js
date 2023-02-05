// factorial in this way 5! = 1*2*3*4*5

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number ; i++){
        result = result *i;
    }
    return result;
}

const multiplicationResult = factorial(2);
console.log('Multiplication is :',multiplicationResult);