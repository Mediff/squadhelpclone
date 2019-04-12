import {Accounts, Contests, Entries, ContestTypes} from '../../../models';
import {sendEmail} from '../../../utils/helpers/emailSender';
import _ from 'lodash';

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
        /*const distinctContests = await Contests.sequelize.query('SELECT DISTINCT ON ("Contests"."contestGroup") id\n' +
            'FROM "Contests"\n' +
            'GROUP BY "Contests"."contestGroup", id\n' +
            'HAVING "Contests"."winnerId" IS NULL\n' +
            'ORDER BY "Contests"."contestGroup"', {type: sequelize.QueryTypes.SELECT});
        const arr = distinctContests.map(val => val.id); */
        let activeContests = await Contests.findAll({
            where: {
                winnerId: null
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
                model: Entries,
                include: [{
                    model: Accounts,
                    as: 'Creator',
                    attributes: ['firstName']
                }]
            }, {
                model: ContestTypes,
                as: 'ContestType'
            }]
        });
        activeContests = activeContests.sort(contest => contest.priority);
        activeContests = _.uniqBy(activeContests, 'contestGroup');
        res.send(activeContests);
    } catch (e) {
        next(e);
    }
};

export const getContests = async (req, res, next) => {
    try {
        const contests = await Contests.findAll({
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
                model: Entries,
                include: [{
                    model: Accounts,
                    as: 'Creator',
                    attributes: ['firstName']
                }]
            }, {
                model: ContestTypes,
                as: 'ContestType'
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
                contestCreatorId: req.decoded.id,
                prize: {
                    [Op.ne]: null
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
            }, {
                model: Entries,
                include: [{
                    model: Accounts,
                    as: 'Creator',
                    attributes: ['firstName']
                }]
            }, {
                model: ContestTypes,
                as: 'ContestType'
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

export const updateContest = async (req, res, next) => {
    try {
        const {title, customerDescribe, ventureDescribe, styles, prize, id} = req.body;
        await Contests.update({
            title,
            customerDescribe,
            ventureDescribe,
            styles,
            prize
        }, {
            where: {
                id
            }
        }, {transaction: t});
        const updatedContest = await Contests.findOne({
            where: {
                id
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
                model: Entries,
                include: [{
                    model: Accounts,
                    as: 'Creator',
                    attributes: ['firstName', 'email']
                }]
            }, {
                model: ContestTypes,
                as: 'ContestType'
            }]
        });
        const emailsArray = updatedContest.Entries.map(entry => entry.Creator.email);
        const uniqueEmails = [...new Set(emailsArray)];
        sendEmail(uniqueEmails);
        res.send(updatedContest);
    } catch (e) {
        next(e);
    }
};
