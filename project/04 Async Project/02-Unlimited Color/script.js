// generate a Random Color 

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const body = document.getElementsByTagName('body')[0];
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let intervalId ;

const chnageBackgroundColor = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            const color = randomColor();
            body.style.backgroundColor = color;
        }, 500);
    }
};


const stopChangingColor = ()=> {
    console.log(intervalId);
    clearInterval(intervalId);
    intervalId = null;
};


startBtn.addEventListener("click",chnageBackgroundColor);

stopBtn.addEventListener("click", stopChangingColor);

