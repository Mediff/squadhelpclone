const {object, string, ref, number} = require('yup');

export const loginScheme = object({
    email: string()
        .required('Email required')
        .email('Not valid email'),
    password: string()
        .min(6, 'Password must contain at least 6 symbols')
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
        .min(6, 'Password must contain at least 6 symbols')
        .required('Password required'),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Passwords dont match')
        .required('Password confirm is required')

});

export const contestTaglineLogoScheme = object({
    title: string()
        .min(6, 'Contest title must contain at least 6 symbols')
        .required('Contest title is required'),
    ventureDescribe: string()
        .min(10, 'Venture describe must contain at least 10 symbols')
        .required('Venture describe is required'),
    customerDescribe: string()
        .min(10, 'Customer describe must contain at least 10 symbols')
        .required('Customer describe is required'),
    industry: string()
        .required('Select industry for your contest'),

});


export const contestNameScheme = object({
    title: string()
        .min(6, 'Contest title must contain at least 6 symbols')
        .required('Contest title is required'),
    ventureDescribe: string()
        .min(10, 'Venture describe must contain at least 10 symbols')
        .required('Venture describe is required'),
    customerDescribe: string()
        .min(10, 'Customer describe must contain at least 10 symbols')
        .required('Customer describe is required'),
    industry: string()
        .required('Select industry for your contest'),
    nameType: string()
        .required('Select name type for your contest')

});

export const contestPayScheme = object({
    cardNumber: string()
        .required('Card number required'),
    cardExpiration: string()
        .required('Card expiration required'),
    cardSecurityCode: string()
        .required('Card security code required'),
    cardPrize: number()
        .required('Card prize required')
        .positive('Number cant be negative')
        .integer('Number cant be decimal')
});

export const updateContestScheme = object({
    title: string()
        .min(6, 'Contest title must contain at least 6 symbols')
        .required('Contest title is required'),
    ventureDescribe: string()
        .min(10, 'Venture describe must contain at least 10 symbols')
        .required('Venture describe is required'),
    customerDescribe: string()
        .min(10, 'Customer describe must contain at least 10 symbols')
        .required('Customer describe is required'),
    prize: number()
        .required('Card prize required')
        .positive('Number cant be negative')
        .integer('Number cant be decimal')
});