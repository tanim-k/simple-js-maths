//::: add two numbers by a function ::://
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const firstTotaal = add(55, 78);
console.log(firstTotaal);
const secondTotaal = add(554, 784);
console.log(secondTotaal);
const thirdTotaal = add(5555, 7668);
console.log(thirdTotaal);
// input error challenge// here the num2 is undefined//
const fourthTotaal = add(5555 + 7668);
console.log(fourthTotaal);

//::::: multiply some numbers to understand input error ::::://
function multiply(num1, num2) {
    const mul = num1 * num2;
    return mul;
}
const firstMul = multiply(55, 78);
console.log(firstMul);
const secondMul = multiply(554, 784);
console.log(secondMul);
const thirdMul = multiply(5555, 7668);
console.log(thirdMul);
// input error challenge// here the num2 is undefined//
const fourthMul = multiply(5555 * 7668);
console.log(fourthMul);
