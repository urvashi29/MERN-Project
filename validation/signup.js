const Validator = require('validator');
module.exports = function validateRegisterInput(data) {
    const errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.contact = !isEmpty(data.contact) ? data.contact : '';
    data.department = !isEmpty(data.department) ? data.department : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!Validator.isLength(data.dept, { min: 4, max: 30 })) {
        errors.name = 'dept must be between 4 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'dept field is required';
    }
    if (Validator.isEmpty(data.contact, { min: 10, max: 10 })) {
        errors.contact = 'contact field length should be 10';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
