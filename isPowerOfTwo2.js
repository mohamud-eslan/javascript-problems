function isPowerOfTwo2(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n / 2;
    }
    return true;
}
console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(2));
console.log(isPowerOfTwo2(5));