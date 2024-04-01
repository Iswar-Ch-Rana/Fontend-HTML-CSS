'use strict';
/************ CALL BACK HELL **************/
/*
const getData = (data,callback) => {
    setTimeout(() => {
        console.log(data+1);
        if (callback) {
            callback();
        }
    }, 2000);
}

getData(1, ()=> {
    getData(2 , ()=> {
        getData(3 , ()=> {
            getData(4);
        });
    });
});
*/
/************ Solve Callback Hell Promisies **************/
/*
function getData(data) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
            console.log(data);
        }, 2000);
    }) 
}

getData(300);
*/
/************ Async Await **************/

function api() {
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log('weather Data');
            res({temperature:78,humidity:65});
        }, 3000);
    });
};

async function getWeatherData() {
    await api();
    await api();
    await api();
}
// getWeatherData();



function getData(data) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
            console.log(data);
        }, 2000);
    }) 
}

(async function () {
    await getData(1);
    await getData(3);
    await getData(4);
    await getData(5);
})(); // IIFI

// getAllData();

