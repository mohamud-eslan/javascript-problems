// function findBigNum(value){
//     let highest = value[0];
//     for(let i = 0; i < value.length; i++){
//         if(value[i] > highest){
//             highest = value[i]
//         }
//     }
//     return highest
// }
// console.log(findBigNum([1, 4, 6, 44, 7,53]
// ));
let bigNum = [1, 4, 6, 44, 7,53]
console.log(Math.max(...bigNum))