// "33" => 33 
// "33abc" => NaN
// true => 1 ; false = 0;
// "" => false; "abc" => true

let score = "33"
let numberScore = Number(score)
console.log(typeof numberScore);


score = "33abc"
numberScore = Number(score);
console.log(typeof numberScore, numberScore); // Type is number but This is not a Number NaN


score = true;
numberScore = Number(score);
console.log(typeof numberScore, numberScore); // Type is number and value is  1


score = "";
numberScore = Boolean(score); 
console.log(typeof numberScore, numberScore); // Type is boolean and Value is False


score = "abc"
numberScore = Boolean(score);
console.log(typeof numberScore, numberScore); // Type is Boolean and Value is True




