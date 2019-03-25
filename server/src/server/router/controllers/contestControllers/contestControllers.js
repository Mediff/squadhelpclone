import {Accounts, Contests, ContestTypes} from '../../../models';

export const createContest = async (req, res, next) => {
    try {
        const {title, ventureName, ventureDescribe, customerDescribe, contestCreatorId, combinedContestId, contestTypeId, file, priority} = req.body;

        console.log(contestTypeId);

        const contType = await ContestTypes.findOne({
            where: {
                name: 'Name Contest'
            }
        });

        const contest = await Contests.create({
            title,
            ventureName,
            ventureDescribe,
            customerDescribe,
            contestCreatorId,
            contestTypeId,
            combinedContestId,
            file,
            priority,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.send(contest);

    } catch (e) {
        next(e);
    }
};

export const getActiveContests = async (req, res, next) => {
    try {
        const contests = await Contests.find({
            where: {
                combinedContestId: 1
            }
        });
        res.send(contests);
    } catch (e) {
        next(e);
    }
};
