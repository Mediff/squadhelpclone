import 'babel-polyfill';
import express from 'express';
import {createUser, getUserById, loginUser} from './controllers/userControllers/userController';
import {createContest, getContests, getActiveContests, getContestById,
    getContestsByType, getContestsByStyle, getUserContests} from "./controllers/contestControllers/contestControllers";
import {validateToken} from './controllers/auth/authControllers';
import {validateUser} from '../utils/validation/userValidation';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', validateUser, createUser);


router.get('/contests', getContests);
router.get('/contests/active', getActiveContests);
router.get('/contests/user', validateToken, getUserContests);
router.get('/contests/style/', getContestsByStyle);
router.get('/contests/type/:type', getContestsByType);
router.get('/contests/:id', getContestById);
router.post('/contests', createContest);

router.get('/user', validateToken, getUserById);
module.exports = router;

