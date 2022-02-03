const phones = [
    {name:'apple p2', price:100000, camera:48, storage:128},
    {name:'samsung a51', price:50000, camera:50, storage:64},
    {name:'xaeomi 5pro', price:25000, camera:20, storage:32},
    {name:'walton s4', price:15666, camera:10, storage:8},
    {name:'htc m34', price:34000, camera:32, storage:55},
    {name:'1+ 45', price:46000, camera: 56, storage:128},
    {name:'motorla w21', price:34000, camera:80, storage:60},
    {name:'nokia p32',price:34656, camera:21, storage:62},
    {name:'lenovo s-1', price:78000, camera:72, storage:128},
]

let cheapest = phones[0];
for (const phone of phones) {
    /* console.log(phone) */
    if (phone.price < cheapest.price) {
        cheapest = phone
    }
}
console.log(cheapest)  