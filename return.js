 function add(number1, number2){
    console.log(number1, number2);
    var sum = number1+number2;
    console.log(sum)
    // return sum;
    return sum;
 }
//  add(45, 15);

// var total = add(80, 20);
// console.log('total', total);

function singaraQuantity(money) {
    var singraPrice = 10;
    var singaraQuantity = money / singraPrice;
    var intSingaraQuantity = parseInt(singaraQuantity);
    return intSingaraQuantity;
}
var myTaka = 150;
var singaras = singaraQuantity(myTaka);

console.log('Eating singaras: ', singaras);
