function multiplyArr(array){
    for(let i = 0; i < array.length; i++){
            array[i] = array[i] * 4;
    }
    return array;
}
console.log(multiplyArr([2, 3, 4]));