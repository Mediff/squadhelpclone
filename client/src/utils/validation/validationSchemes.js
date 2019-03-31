const {object, string, ref} = require('yup');

export const loginScheme = object({
    email: string()
        .required('Email required')
        .email('Not valid email'),
    password: string()
        .required('Password required')
});

export const registerScheme = object({
    firstName: string()
        .required('First name required'),
    lastName: string()
        .required('Last name required'),
    displayName: string()
        .required('Display Name required'),
    email: string()
        .required('Email required')
        .email('Not valid email'),
    password: string()
        .required('Password required')
        .min(6, 'Password must contain at least 6 symbols'),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Passwords dont match')
        .required('Password confirm is required')

});