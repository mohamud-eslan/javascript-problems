function longestWord(str){
    let words = str.split(" ");
    let word = longWord = "";
    for(let word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}
console.log(longestWord('find the incorrect word'));
console.log(longestWord('find the incorrect word'));
console.log(longestWord('find the correct words'));
