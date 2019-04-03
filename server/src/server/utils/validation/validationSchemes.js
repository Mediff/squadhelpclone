const yup = require('yup');
import {userRoles} from '../constants/constants';


yup.addMethod(yup.string, 'validUserRole', function (args) {
    const {message} = args;
    return this.test({
        name: 'validUserRole',
        exclusive: true,
        message,
        test: async function (value) {
            return userRoles.includes(value);
        }
    });
});


export const userScheme = yup.object().shape({
    firstName: yup
        .string()
        .required('First name required'),
    lastName: yup
        .string()
        .required('Last name required'),
    email: yup
        .string()
        .email('Not valid email')
        .required('Email required'),
    role: yup
        .string()
        .required('Role required')
        .validUserRole({message: 'Invalid Role'}),
    password: yup
        .string()
        .required('Password required')
});

export const contestsScheme = yup.object().shape({
    contest: yup.array().of(yup.object().shape({
        title: yup
            .string()
            .min(6, 'Contest title must contain at least 6 symbols')
            .required('Contest title is required'),
        ventureDescribe: yup
            .string()
            .min(10, 'Venture describe must contain at least 10 symbols')
            .required('Venture describe is required'),
        customerDescribe: yup
            .string()
            .min(10, 'Customer describe must contain at least 10 symbols')
            .required('Customer describe is required'),
        industry: yup
            .string()
            .required('Select industry for your contest'),
        nameType: yup
            .string()
            .required('Select name type for your contest')
    }))
});
