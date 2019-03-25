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
        const payload = {
            role
        };
        const token = jwt.sign(payload, secretToken, {
            expiresIn: '24h'
        });

        const account = await Accounts.create({
            firstName,
            lastName,
            email,
            passwordHash: hash,
            role,
            token,
            displayName
        });
        res.send(account);

    } catch (e) {
        next(e);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const accounts = await Accounts.findAll();
        res.send(accounts);
    } catch (e) {
        next(e);
    }
};

export const loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await Accounts.findOne({
            where: {
                email
            }
        });
        if (user) {
            const result = await bcrypt.compare(password, user.passwordHash);
            result ? res.send(user) : next(new ForbiddenError('Not valid password'));
        } else {
            next(new NotFoundError('Email not exists'));
        }
    } catch (e) {
        next(e);
    }
};