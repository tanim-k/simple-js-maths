/* chairWood = 3cft/chair
   tableWood = 10cft
   bedWood = 50cft
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    /* wood quantity */
    const chairWoodQuantity = perChairWood*chairQuantity;
    const tableWoodQuantity = perTableWood*tableQuantity;
    const bedWoodQuantity = perBedWood*bedQuantity;
    /* total wood */
    const totalWood = chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
    return totalWood;
}
// function calling //🎇
const firstOption = woodCalculator(1,1,1)
console.log(firstOption)
const secondOption = woodCalculator(1,3,2)
console.log(secondOption)
const thirdOption = woodCalculator(6,1,9)
console.log(thirdOption)
const fourthOption = woodCalculator(40,20,3)
console.log(fourthOption)