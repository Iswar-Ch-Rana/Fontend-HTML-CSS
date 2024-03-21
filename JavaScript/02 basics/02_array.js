const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Use this to merge to arrays
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// This is most used method to concat  two array in JavaScript 
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// flatten a array in  JavaScript using flat function
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray(real_another_array)) // true 
console.log(Array.from("Zessta")) // convert into array
console.log(Array.from({name: "zeesta"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


