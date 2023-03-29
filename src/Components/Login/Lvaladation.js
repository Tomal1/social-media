const Lvalidation = (values) => {
    
    const errors = {}

    if(values.nameOfInput === "email" && !values.nameOfInput) {
        alert("please enter email")
    } else if (values.nameOfInput === "password" && !values.nameOfInput) {
        alert("please enter password")
    } 

}