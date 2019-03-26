import 'babel-polyfill';
import express from 'express';
import {createUser, getUsers, loginUser} from './controllers/userControllers/userController';
import {createContest, getContests, getActiveContests, getContestById, getContestsByType, getContestsByPrefs} from "./controllers/contestControllers/contestControllers";
import {validateToken} from './controllers/auth/authControllers';
import {validateUser} from '../utils/validation/userValidation';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', validateUser, createUser);


router.get('/contests', getContests);
router.get('/contests/active', getActiveContests);
router.get('/contests/:id', getContestById);
router.get('/contests/type/:typeId', getContestsByType);
router.get('/contests/prefs/:prefId', getContestsByPrefs);
router.post('/contests', createContest);

router.get('/test', validateToken);
module.exports = router;

