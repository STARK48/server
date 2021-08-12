module.exports.validateRegisterInput = (userName,email,password,confirmPassword,isOperator) =>{
    const errors = {};
    if (userName.trim()=== '') {
        errors.userName = 'UserName must not be empty';
    }

    if (email.trim()==='') {
        errors.email = 'Email must not be empty';
        
    }else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email ='email must be a valid email'
        }
    }

    if (password ==='') {
        errors.password = 'password must not be empty';
    }
    else {
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords must matched"
        }
    }
    

    return {
        errors,
        valid:Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (email,password) =>{
    const errors = {};

    if (email.trim()==='') {
        errors.email = 'Email must not be empty';
        
    }else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email ='email must be a valid email'
        }
    }

    if (password ==='') {
        errors.password = 'password must not be empty';
    }

    return {
        errors,
        valid:Object.keys(errors).length < 1
    }

}