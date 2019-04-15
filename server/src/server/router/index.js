import 'babel-polyfill';
import express from 'express';
import {createUser, getUserById, loginUser} from './controllers/userControllers/userController';
import {createContest, getContests, getActiveContests, getContestById,
    getContestsByType, getContestsByStyle, getUserContests, proceedPay, updateContest, validateAuthor} from './controllers/contestControllers/contestControllers';
import {getContestTypes, getNameTypes, getIndustries, getStylesByContestType, getStyles, getCombinedTypes}
    from './controllers/contestTypeControllers/contestTypesController';
import {getFilePath, upload} from './controllers/filesController/filesController';
import {updateEntry} from './controllers/entryController/entryController';
import {validateToken} from './controllers/auth/authControllers';
import {validateUser} from '../utils/validation/userValidation';
import {validateContest} from '../utils/validation/contestValidation';

const router = express.Router();


router.post('/login', loginUser);
router.post('/register', validateUser, createUser);

router.get('/contests/type/:type', getContestsByType);
router.get('/contests/active', getActiveContests);
router.get('/contests/user', validateToken, getUserContests);
router.get('/contests/style', getContestsByStyle);
router.get('/contests/:id', getContestById);
router.get('/contests', getContests);
router.post('/contests', validateToken, validateContest, validateAuthor, createContest);
router.put('/contests/pay', validateToken, proceedPay);
router.put('/contests', validateToken, validateContest, updateContest);

router.get('/types/styles/:id', validateToken, getStylesByContestType);
router.get('/types/styles', validateToken, getStyles);
router.get('/types/industries', validateToken, getIndustries);
router.get('/types/nametypes', validateToken, getNameTypes);
router.get('/types/all', validateToken, getCombinedTypes);
router.get('/types', validateToken, getContestTypes);

router.put('/entries', validateToken, updateEntry);

router.get('/user', validateToken, getUserById);

router.post('/files', upload, getFilePath);


module.exports = router;

