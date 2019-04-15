import {Entries, Accounts, Contests, ContestTypes} from '../../../models';

export const updateEntry = async (req, res, next) => {
    try {
        const {entry, prize} = req.body;
        const {isWinner, id, contestId, creatorId} = entry;
        if (isWinner) {
<<<<<<< HEAD
            await Entries.sequelize.transaction(async (t) => {
                await Entries.update({
                    isWinner: false,
                    isRejected: true
                }, {
                    where: {
                        contestId
                    }, transaction: t
                });
                await Entries.update({
                    isWinner: true,
                    isRejected: false
                }, {
                    where: {
                        id
                    }, transaction: t
                });
                await Accounts.increment(['balance'], {by: prize, where: {id: creatorId}, transaction: t});
                await Contests.update({
                    winnerId: creatorId
                }, {
                    where: {
                        id: contestId
                    }, transaction: t
                }, {returning: true});
            });
=======
            let result = await Entries.sequelize.transaction( async (t) => {
            await Entries.update({
                isWinner: false
            }, {
                where: {
                    contestId
                }, transaction: t
            });
            await Entries.update({
                isWinner: true
            }, {
                where: {
                    id
                }, transaction: t
            });
            await Accounts.increment(['balance'], {by: prize, where: {id: creatorId}, transaction: t});
            await Contests.update({
                winnerId: creatorId
            }, {
                where: {
                    id: contestId
                }, transaction: t
            }, {returning: true});});
>>>>>>> 791c004e03c66c61ddbe733094ea24280a160fbe
        } else {
            await Entries.update({
                isWinner: false
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
                        as: 'Creator',
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