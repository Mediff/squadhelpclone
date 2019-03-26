import {Accounts, Contests, ContestTypes, CombinedContests, ContestsToPreferences, Preferences} from '../../../models';
import {consoleLogSequelizeModelAccessors} from '../../../utils/helpers/helpers';

/*
const getArrayOfValues = (value, collection) => {
    const array = [];
    for (let item of collection) {
        array.push(item[value]);
    }
};*/

export const createContest = async (req, res, next) => {
    try {
        const {title, ventureName, ventureDescribe, customerDescribe, contestCreatorId, combinedContestId, contestTypeId, file, priority, prize} = req.body;
        let createdContest;
        if (!combinedContestId) {
            createdContest = await CombinedContests.create({
                    prize
                }, {include: [{model: Contests, include: [{model: Accounts}, {model: ContestTypes}]}]}
            );
        }
        const id = combinedContestId ? combinedContestId : createdContest.id;
        const contest = await Contests.create({
            title,
            ventureName,
            ventureDescribe,
            customerDescribe,
            combinedContestId: id,
            contestCreatorId,
            contestTypeId,
            file,
            priority
        });
        const preferences = JSON.parse(req.body.preferences);
        for (let pref of preferences) {
            const preference = await Preferences.findOne({
                where: {
                    id: pref
                }
            });
            preference.addContests(contest);
        }
        const combinedContest = await CombinedContests.findOne({
            where: {
                id: id
            },
            include: [{
                model: Contests,
                attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                include: [{model: Accounts, attributes: ['firstName', 'lastName', 'email', 'profilePicture']},
                    {model: ContestTypes, attributes: ['name']}]
            }],
            attributes: ['id', 'prize', 'isActive']

        });
        res.send(combinedContest);

    } catch (e) {
        next(e);
    }
};

export const getActiveContests = async (req, res, next) => {
    try {
        const combinedActiveContests = await CombinedContests.findAll({
            where: {
                isActive: true
            },
            include: [{
                model: Contests,
                attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                include: [{
                    model: Accounts,
                    attributes: ['firstName', 'lastName', 'email', 'profilePicture']
                }, {model: ContestTypes, attributes: ['name']}]
            }],
            attributes: ['id', 'prize', 'isActive']
        });
        res.send(combinedActiveContests);
    } catch (e) {
        next(e);
    }
};

export const getContests = async (req, res, next) => {
    try {
        const combinedContests = await CombinedContests.findAll({
                include: [{
                    model: Contests,
                    attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                    include: [{
                        model: Accounts,
                        attributes: ['firstName', 'lastName', 'email', 'profilePicture']
                    }, {model: ContestTypes, attributes: ['name']}]
                }],
                attributes: ['id', 'prize', 'isActive']
            }
        );
        res.send(combinedContests);
    } catch (e) {
        next(e);
    }
};

export const getContestById = async (req, res, next) => {
    try {
        const contestId = req.params.id;
        const combinedContest = await CombinedContests.findAll({
                where: {
                    id: contestId
                },
                include: [{
                    model: Contests,
                    attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                    include: [{
                        model: Accounts,
                        attributes: ['firstName', 'lastName', 'email', 'profilePicture']
                    }, {model: ContestTypes, attributes: ['name']}]
                }],
                attributes: ['id', 'prize', 'isActive']
            }
        );
        res.send(combinedContest);
    } catch (e) {
        next(e)
    }
};

export const getContestsByType = async (req, res, next) => {
    try {
        const contestTypeId = req.params.typeId;
        const combinedContests = await CombinedContests.findAll({
                include: [{
                    model: Contests, where: {
                        contestTypeId: contestTypeId
                    }
                }], attributes: ['id']
            }
        );
        const array = [];
        for (let contest of combinedContests) {
            array.push(contest.id);
        }
        const resContests = await CombinedContests.findAll({
                where: {
                    id: array
                },
                include: [{
                    model: Contests,
                    attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                    include: [{
                        model: Accounts,
                        attributes: ['firstName', 'lastName', 'email', 'profilePicture']
                    }, {model: ContestTypes, attributes: ['name']}]
                }],
                attributes: ['id', 'prize', 'isActive']
            }
        );
        res.send(resContests);
    } catch (e) {
        next(e)
    }
};

export const getContestsByPrefs = async (req, res, next) => {
    try {
        const id = req.params.prefId;
        const pref = await Preferences.findOne({
            where: {
                id: id
            },
            include: [{model: Contests, attributes: ['id']}]
        });
        const array = [];
        for (let contest of pref.Contests) {
            array.push(contest.id);
        }
        const combinedContests = await CombinedContests.findAll({
                include: [{
                    model: Contests, where: {
                        id: array
                    }
                }],
                attributes: ['id']
            }
        );
        const array2 = [];
        for (let contest of combinedContests) {
            array2.push(contest.id);
        }
        const resContests = await CombinedContests.findAll({
                where: {
                    id: array2
                },
                include: [{
                    model: Contests,
                    attributes: ['id', 'title', 'ventureName', 'ventureDescribe', 'customerDescribe', 'file', 'priority'],
                    include: [{
                        model: Accounts,
                        attributes: ['firstName', 'lastName', 'email', 'profilePicture']
                    }, {model: ContestTypes, attributes: ['name']}]
                }],
                attributes: ['id', 'prize', 'isActive']
            }
        );
        res.send(resContests);
    } catch (e) {
        next(e);
    }
};

