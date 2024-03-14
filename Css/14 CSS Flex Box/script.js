let sentence = "   hello welcome to zessta iswar   "; 

sentence = sentence.trim(); // use this to avoid spacing in begin and end ;
let words = sentence.split(" ");
function printWords(words) {
    if (words.length === 0) 
        return;
    console.log(words[0]);
    words.shift();
    printWords(words);
}
printWords(words);
