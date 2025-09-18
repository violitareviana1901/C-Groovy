function validate_name() {
    let name = document.getElementById("inpName").value;
    if (name.length >= 4) {
        return true;
    } else {
        alert("Name must be at least 4 characters.");
        return false;
    }
}

function validate_email() {
    let email = document.getElementById("inpEmail").value;
    if (email.endsWith("@gmail.com")) {
        return true;
    } else {
        alert("Email must end with @gmail.com.");
        return false;
    }
}

function validate_phonenum() {
    let phonenum = document.getElementById("inpPhoneNum").value;
    if (phonenum.startsWith("08")) {
        return true;
    } else {
        alert("Phone number must start with 08.");
        return false;
    }
}

function validate_age() {
    let age = document.getElementById("inpAge").value
    let val_age

    if (age >= 12) {
        return true 
    }else{
        alert("You must at least 12 years old")
        return false
    }
}

function validate_password() {
    let pass = document.getElementById("inpPass").value;
    let confirm_pass = document.getElementById("inpConfirmPass").value;
    if (pass === confirm_pass && pass.length > 0) {
        return true;
    } else {
        alert("Passwords do not match.");
        return false;
    }
}

function validate_gender() {
    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender) {
        return true;
    } else {
        alert("Please select a gender.");
        return false;
    }
}

function check_validate() {
    let isNameValid = validate_name();
    let isEmailValid = validate_email();
    let isPhoneValid = validate_phonenum();
    let isAgeValid = validate_age();
    let isPasswordValid = validate_password();
    let isGenderValid = validate_gender();

    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isAgeValid &&
        isPasswordValid &&
        isGenderValid
    ) {
        // window.location.href ="home.html"
        return true;
        
    }

    return false;
}
