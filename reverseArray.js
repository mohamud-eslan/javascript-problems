//let array = [4, 6, 7, 12, 5];
//console.log(array);
// function reverseArray(array){
//     let arr2 = [];
//     for( i = array.length - 1; i >= 0; i--){
//         arr2.push(array[i])
//     }
//    return arr2; 

// }
// console.log(reverseArray([4, 6, 7, 12, 5]));

//check if a number is an even or odd
function isEvenOrOdd(number){
    if(number % 2 == 0){
       return "number is even";
    }
    else{
        return "number is odd";
    }
}
// console.log(isEvenOrOdd(7));
// console.log(isEvenOrOdd(4));
// console.log(isEvenOrOdd(11));
// console.log(isEvenOrOdd(6));

let person = "water";
function checkIt(){
if (person == "student") {
    return "welcome to the class";
    
}
else if (person == "teacher") {
    return "give access to his course";
    
}else{
    return "this is invaid";
}
}
console.log(checkIt());
