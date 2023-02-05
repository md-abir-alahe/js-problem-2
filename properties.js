var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboad: 1,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation
var penCount = shoppingCart.pen;

// when you know the specific property name, use bracket notation
var penCount2 = shoppingCart['pen'];
console.log(penCount2);
var property = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(property);
// console.log(propertyValues);
// console.log(shoppingCart);