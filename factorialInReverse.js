/*****
 * For this Output . 
 1
 2
 3
 4
 5
 6
 7
 8
 *Loop will like that

for(let i = 1 ; i <= 8 ; i++ ){
    console.log(i);
}

*/
/*****
 * For this Output . 
 8
 7
 6
 5
 4
 3
 2
 1
 *Loop will like that

for(let i = 8 ; i >= 1 ; i-- ){
    console.log(i);
}

*/
function findFactorialOf(number){
    let result = 1;
    for(let i = number ; i >= 1 ; i-- ){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

findFactorialOf(7);