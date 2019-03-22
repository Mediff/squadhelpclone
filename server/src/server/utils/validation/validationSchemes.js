
const yup = require('yup');
import {userRoles} from '../constants/constants';


yup.addMethod(yup.string, 'validUserRole', function (args){
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
        .validUserRole({message:'Invalid Role'}),
    password: yup
        .string()
        .required('Password required')
});