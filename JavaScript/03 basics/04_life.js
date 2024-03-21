// Immediately Invoked Function Expressions (IIFE)


// To remove global scope polution we use IIFE

(function func(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('iswar');


