let userInput = document.getElementById('date');
let button = document.querySelector('.input-box button');
let result = document.getElementById("result");


userInput.max = new Date().toISOString().split('T')[0];

button.addEventListener('click', calculateAge);


function calculateAge() {
    const birthday = new Date(userInput.value);
    
    let day1 = birthday.getDate();
    let month1 = birthday.getMonth() + 1;
    let year1 = birthday.getFullYear();
    
    const today = new Date();   
    
    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let Year , Month , Day ;

    // Years
    Year = year2 - year1;

    // Months 
    if (month2 >= month1) {
        Month = month2 - month1 ;
    } else {
        Year--;
        Month = 12 + month2 - month1;
    }

    //Days
    if (day2 >= day1){
        Day = day2 - day1;
    } else {
        Month--;
        Day = daysInMonth( month2 -1 , year2) +  day2 - day1;
    }
    
    result.innerHTML = `<b>Age: </b> <span>${Year}</span> years <span>${Month}</span> months <span>${Day}</span> days`
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


