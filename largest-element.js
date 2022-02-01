// function for largest element from an array //
function largestElement(numbers) {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > largest) {
           largest = element;
        }       
    }
    return largest;
}
// make an for calling the function //
const ages =[23, 33, 5, 65, 45, 56, 43, 45, 90];
const oldest = largestElement(ages);
console.log('oldest:', oldest);