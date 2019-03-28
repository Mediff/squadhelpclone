import bcrypt from 'bcrypt';
import {Accounts} from '../../../models';
import jwt from 'jsonwebtoken';
import {secretToken, saltRounds} from '../../../utils/constants/constants';
import NotFoundError from '../../../utils/errors/notFoundError';
import ForbiddenError from '../../../utils/errors/forbiddenError';


export const createUser = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const {firstName, lastName, email, role, displayName} = req.body;

        const account = await Accounts.create({
                firstName,
                lastName,
                email,
                passwordHash: hash,
                role,
                displayName
            }, {
                attributes: ['id', 'firstName', 'lastName', 'email', 'profilePicture', 'role']
            }
        );

        const payload = {
            id: account.id
        };
        const token = await jwt.sign(payload, secretToken, {
            expiresIn: '24h'
        });
        res.send({account, token});

    } catch (e) {
        next(e);
    }
};


export const loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const account = await Accounts.findOne({
            where: {
                email
            },
            attributes: ['id', 'firstName', 'lastName', 'email', 'profilePicture', 'role']
        });
        if (account) {
            const result = await bcrypt.compare(password, account.passwordHash);
            const payload = {
                id: account.id
            };
            const token = await jwt.sign(payload, secretToken, {
                expiresIn: '24h'
            });
            result ? res.send({account, token}) : next(new ForbiddenError('Not valid password'));
        } else {
            next(new NotFoundError('Email not exists'));
        }
    } catch (e) {
        next(e);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await Accounts.findOne({
            where: {
                id: req.decoded.id
            },
            attributes: ['id', 'firstName', 'lastName', 'email', 'profilePicture', 'role']
        });
        res.send(user);
    } catch (e) {
        next(e);
    }
};