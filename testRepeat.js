function testingRepeat(arr){
    let tempNum = arr.reduce((acc, curr, index) =>{
        acc[curr] = acc[curr] ? {...acc[curr], amount: acc[curr] ['amount'] + 1}
        : {amount: 1, index};
        return acc;
    }, {});
    return tempNum;
}
console.log(testingRepeat([5,2,2,5]));
console.log(testingRepeat([6,5,5,10,10,10]));
console.log(testingRepeat([3,4,1,6,10]));