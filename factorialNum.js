function factorialNum(n){
    let result = 1;
    for(let i = 2; i<= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorialNum(0))    
console.log(factorialNum(1))    
console.log(factorialNum(5))    
console.log(factorialNum(4))    