function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 !== 0){
            false
        }
        n = n / 2
    }
    return true;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));