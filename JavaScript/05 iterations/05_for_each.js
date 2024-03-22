const coding = ["js", "ruby", "java", "python", "cpp"]

/*
ForEach -> is a higher Order Function
It allows you to perform an action on each element of an array.  
The function takes in one argument which represents the current item being processed  
in the array during each iteration.  The arrow function syntax provides us with an easy way to create this anonymous function.
*/

// coding.forEach((val) => {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// } )

