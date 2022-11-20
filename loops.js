//loops in javascript
let names = [
    'dahabo',
    'geedi',
    'farah',
    'john',
    'mahad'
]
//console.log(names);

//console.log('for i');

for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);
    
}
//console.log();

//console.log('for of ');
for (const name of names) {
   // console.log(name);
}
//console.log();

//console.log('for each');
names.forEach(name => {
   // console.log(name);
});


let number = 0;
while(number < 5){
   // console.log(number);
    number = number + 1;
}

let condition = true;
while(condition){
    //console.log('hello');
    condition = false;
}
let index = 0;
while(index < names.length){
    //console.log(names[index]);
    index = index + 1;
}
let win = true;
do{
    let gift = 5;
    console.log(gift++);

}while(win === true);