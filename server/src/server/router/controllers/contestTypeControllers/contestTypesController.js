import {ContestTypes, Industries, NameTypes, Styles} from '../../../models';

const sequelize = require('sequelize');
const Op = sequelize.Op;

export const getContestTypes = async (req, res, next) => {
    try {
        const contestTypes = await ContestTypes.findAll({});
        res.send(contestTypes);
    } catch (e) {
        next(e);
    }
};

export const getIndustries = async (req, res, next) => {
    try {
        const industries = await Industries.findAll({});
        res.send(industries);
    } catch (e) {
        next(e);
    }
};

export const getNameTypes = async (req, res, next) => {
    try {
        const nameTypes = await NameTypes.findAll({});
        res.send(nameTypes);
    } catch (e) {
        next(e);
    }
};

export const getStylesByContestType = async(req, res, next) => {
    try{
        const {id} = req.params;
        const styles = await Styles.findAll({
            where: {
                contestTypeId : id
            }
        });
        res.send(styles);
    }  catch(e){
        next(e);
    }
};