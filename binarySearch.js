function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex){
        let midleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[midleIndex]){
            return midleIndex
        }
        if(target < arr[midleIndex]){
            rightIndex = midleIndex - 1
        }
        else{
            leftIndex = midleIndex + 1
        }
    }
    return -1
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
//big O = o(logn)

