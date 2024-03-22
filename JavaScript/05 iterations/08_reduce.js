const myNums = [1, 2, 3, 45 , 66 , 77]

const myTotal = myNums.reduce( (accumulator, currentVal,index ,array) => {
    // console.log(accumulator , currentVal , index , array);
    // console.log(`accumulator: ${accumulator} and currentVal: ${currentVal}`);
    return accumulator + currentVal
}, 10)

// const myTotal = myNums.reduce( (accumulator, currentVal) => accumulator+currentVal, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);

