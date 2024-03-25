const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    console.log(height);
    const weight = parseInt(document.getElementById('weight').value);

    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message;
        
        if (bmi < 18.6) {
            message = "you are under weight";
        } else if (bmi >= 18.6 && bmi <= 24.9){
            message = "you are Normal Range";
        } else {
            message = "you are Over weight";
        }
        
        result.innerHTML = `<span>${bmi}</span> ${message}`;
    }
});

