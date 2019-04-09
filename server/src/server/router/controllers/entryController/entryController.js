import {Entries, Accounts, Contests, ContestTypes} from '../../../models';

const sequelize = require('sequelize');

export const updateEntry = async (req, res, next) => {
    try {
        const {entry, prize} = req.body;
        const {isWinner, id, contestId, creatorId} = entry;
        if (isWinner) {
            await Entries.update({
                isWinner: false,
                isRejected: true
            }, {
                where: {
                    contestId
                }
            });
            const winnerEntryUpdate = Entries.update({
                isWinner: true,
                isRejected: false
            }, {
                where: {
                    id
                }
            });
            const winnerUpdate = Accounts.increment(['balance'], {by: prize, where: {id: creatorId}});
            const contestUpdate = Contests.update({
                winnerId: creatorId
            }, {
                where: {
                    id: contestId
                }
            });
            await Promise.all([winnerEntryUpdate, winnerUpdate, contestUpdate]);
        } else {
            await Entries.update({
                isWinner: false,
                isRejected: true
            }, {
                where: {
                    id
                }
            });
        }
        const updatedContest = await Contests.findOne({
            where: {
                id: contestId
            },
            include: [
                {
                    model: Entries,
                    include: [{
                        model: Accounts,
                        as: 'account',
                        attributes: ['firstName']
                    }]
                }, {
                    model: ContestTypes,
                    as: 'ContestType'
                }]
        });
        res.send(updatedContest.Entries);
    } catch (e) {
        next(e);
    }
};