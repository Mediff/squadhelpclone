import 'babel-polyfill';
import express from 'express';
import {createUser, getUsers, loginUser} from './controllers/userControllers/userController';
import {validateToken} from './controllers/auth/authControllers';
import {validateUser} from '../utils/validation/userValidation';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', validateUser, createUser);


router.get('/users', getUsers);

module.exports = router;

