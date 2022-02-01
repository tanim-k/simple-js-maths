//peace: how to add all number of an array //peace:
const numbers = [44,72,34,45,71,23,15,61,23,56,45,67,];
let sum = 0;
for(let i=0; i<numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    console.log(element);
    console.log('the addition of sum and next element of the array:', sum); 
}