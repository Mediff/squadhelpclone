const yup = require('yup');

export const loginScheme = yup.object().shape({
    email: yup
        .string()
        .required('Email required')
        .email('Not valid email'),
    password: yup
        .string()
        .required('Password required')
});

export const registerScheme = yup.object().shape({
    firstName: yup
        .string()
        .required('First name required'),
    lastName: yup
        .string()
        .required('Last name required'),
    displayName: yup
        .string()
        .required('Display Name required'),
    email: yup
        .string()
        .required('Email required')
        .email('Not valid email'),
    password: yup
        .string()
        .required('Password required')
        .min(6, 'Password must contain at least 6 symbols'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords dont match')

});