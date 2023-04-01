const Lvalidation = (values) => {
    // we are going to store our errors in this object
    const error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 1 lower case 1 upper case 1 numerical value and minimum 8 characters
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        error.email = "Email field is empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email did not match"
    } else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Password field is empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "Password did not match"
    } else {
        error.password = "";
    }

    return error;

}

export default Lvalidation;