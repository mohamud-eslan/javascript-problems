function recurstionFibonacci(n){
    if(n < 2){
        return n;
    }
    return recurstionFibonacci(n-1) + recurstionFibonacci(n-2);
}
console.log(recurstionFibonacci(0));
console.log(recurstionFibonacci(1));
console.log(recurstionFibonacci(6));

//o(n) iteration
// o(2^n) recursive