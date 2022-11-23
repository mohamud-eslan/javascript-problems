function keysAndValues(obj){
    let key1 = [];
    let val1 = [];

    for(key in obj){
        key1.push(key);
        val1.push(obj[key]);
    }
    let sumarr = [];
    sumarr.push(key1);
    sumarr.push(val1);

    return sumarr;
}
console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({a: 'apple', b: 'microsoft', c: 'google'}));
console.log(keysAndValues({key1: true, key2: false, key3: undefined}));