const Lvalidation = (values) => {
    // we are going to store our errors in this object
    const error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        error.email = "Email field should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email = "Email Did not match"
    } else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Password field should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password = "Password Did not match"
    } else {
        error.password = "";
    }

    return error;

}

export default Lvalidation;