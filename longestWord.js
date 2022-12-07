function longestWord(str){
    let words = str.split(" ");
    let word = longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord('I woke up early today'));
console.log(longestWord('I love my mother and my father'));