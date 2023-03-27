const validation = (values)=>{
    // empty object that will store password and email when correct
    const error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if( values.email === ""){
        alert("Email should not be empty");
    } else if (!email_pattern.test(values.email)){
        alert("Email dose not match");
    } else {
        error.email = ""; 
    }


    if( values.password === ""){
        alert("Password should not be empty");
    } else if (!password_pattern.test(values.email)){
        alert("Password dose not match");
    } else {
        error.password = ""; 
    }


    return error;
}

export default validation;