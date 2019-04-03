import {Accounts, Contests, Entries} from '../../../models';
import {consoleLogSequelizeModelAccessors} from '../../../utils/helpers/helpers';

const sequelize = require('sequelize');
const Op = sequelize.Op;


export const createContest = async (req, res, next) => {
    try {
        let contestUuid = null;

        for (let c of req.body) {
            let {title, ventureDescribe, customerDescribe, filePath, industry, contestTypeId, styles} = c;
            console.log(styles);
            const contest = await Contests.create({
                title,
                ventureDescribe,
                customerDescribe,
                filePath,
                industryId: industry,
                contestTypeId,
                contestCreatorId: req.decoded.id
            });

            contestUuid = contest.contestGroup;
        }
        res.send('Hooray');

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
        const userId = req.decoded.id;
        consoleLogSequelizeModelAccessors(Entries);
        const userContests = await Contests.findAll({
            where: {
                contestCreatorId: 2
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

