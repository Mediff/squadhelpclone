import {Entries} from '../../../models';

const sequelize = require('sequelize');
const Op = sequelize.Op;

export const updateEntry = async (req, res, next) => {
    try {

        Entries.update({
            isWinner: true,
            isRejected: false
        });
    } catch (e) {
        next(e);
    }
};