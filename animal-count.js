function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    
    if(miles<=10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <=20) {
        const firstDenseAnimals = 10*animalDensityFirst10Miles;
        restMiles = miles-10;
        const secondDenseAnimals = restMiles*animalDensitySecond10Miles;
        totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10*animalDensityFirst10Miles;
        const secondDenseAnimals = 10 *animalDensitySecond10Miles;
        const restMiles = miles-20;
        const restDenseAnimals = restMiles*animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals+secondDenseAnimals+restDenseAnimals;
        return totalAnimals
    }
}
const animals = animalCount(10);
console.log(animals);
/* took another variable */
const animals1 = animalCount(3);
console.log(animals1);
/* took another variable */
const animals2 = animalCount(9);
console.log(animals2);
/* took another variable */
const animals3 = animalCount(13);
console.log(animals3);
/* took another variable */
const animals4 = animalCount(17);
console.log(animals4);
/* took another variable */
const animals5 = animalCount(21);
console.log(animals5);
/* took another variable */
const animals6 = animalCount(23);
console.log(animals6);
/* took another variable */
const animals7 = animalCount(78);
console.log(animals7);