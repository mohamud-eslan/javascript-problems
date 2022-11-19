//loops in javascript
let names = [
    'dahabo',
    'geedi',
    'farah',
    'john',
    'mahad'
]
//console.log(names);

console.log('for loop');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}
console.log();

console.log('for of ');
for (const name of names) {
    console.log(name);
}
console.log();

console.log('for each');
names.forEach(name => {
    console.log(name);
});