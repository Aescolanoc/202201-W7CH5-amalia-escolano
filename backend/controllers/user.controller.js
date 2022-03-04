import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await User.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertUser = async (req, res, next) => {
    try {
        const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
        const userData = { ...req.body, passwd: encryptedPasswd };
        const newUser = new User(userData);
        const result = await newUser.save();
        res.json(result);
    } catch (err) {
        next(err);
    }
};
