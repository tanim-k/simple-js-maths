// function removeDuplicate(numbers) {
//     const unique = [];
//     for ( leti = 0; i < numbers.length; i++) {
        
//         let element = numbers[i];
        
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// // its for new array where no duplicate numbers //
// const uniqueNumbers = removeDuplicate(numbers);
// console.log(typeof 'new array', uniqueNumbers);

////// using element of in the for loop to make an unique array  ///////////

const numbers = [34, 34, 45, 56, 66, 44, 36, 21, 23, 66, 44, 78, 89, 76, 44]
console.log(typeof 'given array', numbers);
function removeDuplicate(numbers) {
    const unique = [];
    for(const element of numbers) {
        // let element = numbers[i];
        if(unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(typeof 'new array', uniqueNumbers);