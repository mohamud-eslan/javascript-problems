
let arr = [3, 4, 5, 6]

function findIndexOf(arr, item){
    for(let i = 0; i < arr.length; i++){
        let pos = arr[i];
        if(pos === item){
            return i
        }
        else{
            return -1;
        }
    }
}
console.log(findIndexOf([2]));