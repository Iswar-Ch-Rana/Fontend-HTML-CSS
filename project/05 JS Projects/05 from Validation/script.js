const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError =  document.getElementById('phone-error');
const messageError =  document.getElementById('message-error');
const submitError =  document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('name').value;
    name = name.trim();
    if (name.length == 0) {
        nameError.innerHTML = "Name is required.";
        return false;
    }else if (!name.match(/^[A-Za-z]*\s{1}[a-zA-Z]*$/)) {
        nameError.innerHTML = "Invalid Name Format.";
        return false;
    }
    nameError.innerHTML = '✅️';
    return true ;
}

function validatePhone() {
    let phone = document.getElementById('phone').value;
    phone = phone.trim();
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required.";
        return false;
    }else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Invalid Number Format.";
        return false;
    }
    phoneError.innerHTML = '✅️';
    return true ;
}

function validateEmail() {
    let email = document.getElementById('email').value;
    email = email.trim();
    if (email.length == 0) {
        emailError.innerHTML = "Email is required.";
        return false;
    }else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email.";
        return false;
    }
    emailError.innerHTML = '✅️';
    return true ;
}

function validateMessage() {
    let message = document.getElementById('message').value;
    message = message.trim();
    let required = 30 ;
    let left = required-message.length ;

    if (left > 0) {
        messageError.innerHTML = `Please enter at least ${required}-${left} characters.`;
        return false;
    } 

    messageError.innerHTML = '✅️';
    return true ;
}

function validateForm(){
    if (!validateName() || !validateEmail() || !validateMessage() || !validatePhone() ) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display='none';
        }, 3000);
        return false ;
    }
}
