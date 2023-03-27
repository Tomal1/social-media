const validation = (values)=>{
    // empty object that will store password and email when correct
    const errors = {};
//without space 
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // min 1 special, min 1 lower case, min 1 upper case, minimum 8 charactors
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        alert("Please enter a Username");
    } else {
        errors.username = ""; 
    }


    if(values.email === ""){
        alert("Email should not be empty");
    } else if (!email_pattern.test(values.email)){
        alert("Email dose not match");
    } else {
        errors.email = ""; 
    }


    if(values.password === ""){
        alert("Password should not be empty");
    } else if (!password_pattern.test(values.password)){
        alert("Password dose not match");
    } else {
        errors.password = ""; 
    }


    return errors;
}

export default validation;