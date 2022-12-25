var fabinoji = function (n){
    if(n === 0) 
        return 0;
    
    if(n === 1)
    return 1;
   
    return fabinoji (n - 1) + (n - 2)
}
const n = 2;
console.log(fabinoji());