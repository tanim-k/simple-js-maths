// fibonacci seris //
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 //
// any varse of fibonacci//
// 3nd=2nd+1st
// 4nd=3rd+2nd
// 6th=5th+4th
// 12th=10th+11th
// nth=(n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th

const fibo = [0, 1];
for(let i = 2; i<= 10; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log('fibonacci seris:', fibo);

// a function for fibonacci seris //
function fibonacciSeris(num) {
    if(typeof num != 'number'){
        return 'enter a valid number';
    }
    if(num<2){
        return 'please enter a number grater than 2';
    }
    const fibo = [0, 1];   
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeris = fibonacciSeris(9);
console.log('fibonacci seris array:', fiboSeris);
