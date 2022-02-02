const names = ['habul', 'kabul', 'babul', 'fabul', 'jabul', 'habul', 'abul', 'kabul', 'fabul', 'gabul', 'rabul', 'ibul', 'ebul', 'qubul', 'tabul', 'ebul']
function removeDuplicate(names) {
    const unique = [];
    // for (i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }
    for (const element of names) {
        console.log(element);
        if ( unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
// no DUPLICATES in the new array /./.
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames)