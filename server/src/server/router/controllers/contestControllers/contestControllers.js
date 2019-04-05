import {Accounts, Contests, Entries} from '../../../models';
import {consoleLogSequelizeModelAccessors} from '../../../utils/helpers/helpers';

const uuidV4 = require('uuid/v4');

const sequelize = require('sequelize');
const Op = sequelize.Op;


export const createContest = async (req, res, next) => {
    try {
        let {title, ventureDescribe, customerDescribe, file, industry, contestTypeId, styles, contestGroup, priority} = req.body;
        if (!contestGroup) {
            contestGroup = uuidV4();
        }
        const contest = await Contests.create({
            title,
            ventureDescribe,
            customerDescribe,
            file,
            styles,
            industryId: industry,
            contestTypeId,
            contestCreatorId: req.decoded.id,
            contestGroup,
            priority
        });

        res.send(contest);

    } catch (e) {
        next(e);
    }
};

export const getActiveContests = async (req, res, next) => {
    try {
        const activeContests = await Contests.findAll({
            where: {
                winnerId: null
            },
            include: [{
                model: Accounts,
                as: 'Creator',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role'],
            }]
        });
        res.send(activeContests);
    } catch (e) {
        next(e);
    }
};

export const getContests = async (req, res, next) => {
    try {
        const contests = await Contests.findAll({
            include: [{
                model: Accounts,
                as: 'Creator',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }, {
                model: Accounts,
                as: 'Winner',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }]
        });
        res.send(contests);
    } catch (e) {
        next(e);
    }
};

export const getContestById = async (req, res, next) => {
    try {
        const contestId = req.params.id;
        const contest = await Contests.findOne({
                where: {
                    id: contestId
                },
                include: [{
                    model: Accounts,
                    as: 'Creator',
                    attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
                }, {
                    model: Accounts,
                    as: 'Winner',
                    attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
                }]
            }
        );
        res.send(contest);
    } catch (e) {
        next(e)
    }
};

export const getContestsByType = async (req, res, next) => {
    try {
        const contestType = req.params.type;
        const contests = await Contests.findAll({
            where: {
                type: contestType
            },
            include: [{
                model: Accounts,
                as: 'Creator',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }, {
                model: Accounts,
                as: 'Winner',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }]
        });
        res.send(contests);
    } catch (e) {
        next(e)
    }
};

export const getContestsByStyle = async (req, res, next) => {
    try {
        const stylesValue = req.body.styles;
        const contests = await Contests.findAll({
            where: {
                styles: {
                    [Op.contains]: stylesValue
                }
            },
            include: [{
                model: Accounts,
                as: 'Creator',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }, {
                model: Accounts,
                as: 'Winner',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }]
        });
        res.send(contests);
    } catch (e) {
        next(e);
    }
};

export const getUserContests = async (req, res, next) => {
    try {
        const userContests = await Contests.findAll({
            where: {
                contestCreatorId: req.decoded.id
            },
            include: [{
                model: Accounts,
                as: 'Creator',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }, {
                model: Accounts,
                as: 'Winner',
                attributes: ['id', 'firstName', 'lastName', 'displayName', 'email', 'profilePicture', 'role']
            }, {
                model: Entries
            }]
        });
        res.send(userContests);
    } catch (e) {
        next(e);
    }
};

export const proceedPay = async (req, res, next) => {
    try {
        const {prize, contest} = req.body;
        const {priority} = contest;
        const sumForContest = parseInt(prize / priority);
        await Contests.update({
            prize: sumForContest
        }, {
            where: {
                contestGroup: contest.contestGroup
            }
        });
        res.send('Success');
    } catch (e) {
        next(e);
    }
};

