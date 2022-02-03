const products = [
    {name:'laptop', price: 43000},
    {name:'shirt', price: 500},
    {name:'watch', price: 3600},
    {name:'phone', price: 55000},
    {name:'vape', price: 4000},
]
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);

//* cart system *//
const cart = [
    {name:'laptop', price: 43000, quantity:2},
    {name:'shirt', price: 500   , quantity:14},
    {name:'watch', price: 3600  , quantity:4},
    {name:'phone', price: 55000 , quantity:1},
    {name:'vape', price: 4000   , quantity:4},
]
let cartTotal = 0;
for (const product of cart) {
    productTotal = product.price*product.quantity;
    cartTotal = cartTotal + productTotal; 
}
console.log(cartTotal)