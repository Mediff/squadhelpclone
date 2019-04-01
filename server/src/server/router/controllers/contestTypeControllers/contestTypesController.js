import {ContestTypes} from '../../../models';

const sequelize = require('sequelize');
const Op = sequelize.Op;

export const getContestTypes = async (req, res, next) => {
    try {
        const contestTypes = await ContestTypes.findAll({});
        res.send(contestTypes);
    } catch(e){
        next(e);
    }
};