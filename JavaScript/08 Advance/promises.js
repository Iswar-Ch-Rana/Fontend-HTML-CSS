// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// });

// promiseOne.then(function() {
//     console.log('promise Consumed');
// });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async Task 2');
//         resolve();
//     }, 5000);
// })
// .then(() => {
//     console.log('Async 2 Resolved');
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ user: "John Doe", email: "john@gmail.com" });
//     }, 1000);
// })
// .then((data) => {
//     console.log(data);
// })  


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({user: "iswar", names:"bitu"});
//         } else {
//             reject("Something went wrong");
//         }
//     }, 1000);
// })

// const userName = promiseFour.then((users) => {
//     console.log(users.user);
//     return users.user; 
// }).then((name) => {
//     console.log(`Hello ${name}`);
// }).catch((err) =>{
//     console.log(err);
// });

// console.log(userName);




// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javascript", password: "123" });
//         } else {
//             reject("Something went wrong");
//         }
//     }, 1000);
// })

// async function consumePromiseFive () {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();


//  Fetch data

// async function fetchData() {
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users');
//         const resData = await data.json();
//         console.log(resData[0].name);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data[1].name))
//     .catch(err => console.log(err));











































/************* DOUBT ************ */
/* 
// fetch data from api
function getDataFromApi() {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/iswar-Ch-Rana')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}

getDataFromApi()
    .then(data => console.log(data))
    .catch(err => console.error("erro data not found"));
*/

async function getUserDetails() {
    const response = await fetch('https://api.github.com/users/iswar-Ch-Rana');
    const data = response.json();
    console.log(data);
    // console.log(typeof response);
    return data;
}

const ans = getUserDetails();
ans.then( data => {
    // console.log(data.json());
    // const user = JSON.parse(data);
    // console.log(user);
    // const profile =  data.json();
    console.log(data);

}).catch((err) => console.log("hdjud"));

