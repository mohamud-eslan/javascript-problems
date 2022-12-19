function towerOfHonai(n, fromRod, toRod, usingRod){
    if(n === 1){
        console.log(`move disk 1 ${fromRod} to ${toRod}`);
        return
    }
    towerOfHonai(n - 1, fromRod, usingRod, toRod)
    console.log(`move ${n} from ${fromRod} to ${toRod}`);
    towerOfHonai(n - 1, usingRod, toRod, fromRod)
}
towerOfHonai(3, "A", "C", "B")