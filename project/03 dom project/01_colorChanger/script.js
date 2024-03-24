// METHOD 1

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;

        if (buttonId == 'white') 
            body.style.backgroundColor = 'white';
        else if (buttonId == 'green') 
            body.style.backgroundColor = 'green';
        else if (buttonId == 'blue') 
            body.style.backgroundColor = 'blue';
        else if (buttonId == 'yellow') 
            body.style.backgroundColor = 'yellow';
        else if (buttonId == 'orange') 
            body.style.backgroundColor = 'orange';
        else if (buttonId == 'purple') 
            body.style.backgroundColor = 'purple';
        
    });
});



// METHOD 2 
/*

const backGround = document.querySelector('body');
console.log(backGround);

const buttonGray = document.getElementById("grey");
const buttonWhite = document.getElementById("white");
const buttonBlue = document.getElementById("blue");
const buttonYellow = document.getElementById("yellow");

buttonGray.addEventListener("click", changeBackgroundColorToGrey);
function changeBackgroundColorToGrey() {
    console.log("Button grey clicked!");
    backGround.style.backgroundColor = "gray";
}

buttonWhite.addEventListener("click", changeBackgroundColorToWhite); 
function changeBackgroundColorToWhite() {
    console.log("Button white clicked!");
    backGround.style.backgroundColor = "#ffffff"; //Hexadecimal color code for pure white
} 

buttonBlue.addEventListener("click", changeBackgroundColorToBlue);
function changeBackgroundColorToBlue(){
   backGround.style.backgroundColor = "blue";
}

buttonYellow.addEventListener("click", changeBackgroundColorToYellow);
function changeBackgroundColorToYellow(){ 
    backGround.style.backgroundColor =  "yellow";
}

*/


