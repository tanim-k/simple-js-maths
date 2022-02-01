// max number betweet two::::
const bussiness = 500;
const minister = 1000;
if(bussiness > minister) {
    console.log('businessman is bigger, though his amount is less than the minister person');
}
else{
    console.log('ministerperson er amount beshi, halay beshi powerful just because of if conditional is not true')
}

if(minister > bussiness) {
    console.log('businessman is bigger, though his amount is less than the minister person. its because of if conditioonal is true');
}
else{
    console.log('ministerperson er amount beshi tarporo halay kom powerful just because of if conditionals')
}

// இ௰இ :: max number among three numbers: by comparing 3 ::(>_<)

// const bussinessman = 500;
// const ministerman = 1000;
// const armyman = 1500;
// if(bussinessman > ministerman && bussinessman > armyman) {
//     console.log("businessman is boss");
// }
// else if(ministerman > bussinessman && ministerman > armyman){
//     console.log('ministerman is boss');
// }
// else if(armyman > ministerman && armyman > bussinessman) {
//     console.log('armyman is boss karon army man er tk shob theke beshi');
// }

// using else at the end to find max value //
const bussinessman = 500;
const ministerman = 1000;
const armyman = 1500;
if(bussinessman > ministerman && bussinessman > armyman) {
    console.log("businessman is boss");
}
else if(ministerman > bussinessman && ministerman > armyman){
    console.log('ministerman is boss');
}
else{
    console.log('armyman is boss karon army man er tk shob theke beshi')
}

// vs-in-built way to find max:
num1 = 555;
num2 = 435;
num3 = 654;
num4 = 53;
num5 = 935;
num6 = 53;
var max = Math.max(num1, num2, num3, num4, num5, num6)
console.log('the largest one is:', max);

// a way to find the min value: peace //
var min = Math.min(num1, num2, num3, num4, num5, num6)
console.log('the smallest one is:', min);