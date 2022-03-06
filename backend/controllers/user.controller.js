import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

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

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await User.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const resp = await User.findOne({ _id: req.params.id });
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

// export const getAllFriends = async (req, res, next) => {
//     const userName = req.tokenPayload.name;
//     try {
//         const resp = await User.find({ name: userName })
//             .select('friends')
//             .populate('friends', { name: 1, _id: 0 });
//         res.json(resp);
//     } catch (err) {
//         next(err);
//     }
// };

// export const getAllEnemies = async (req, res, next) => {
//     const userName = req.tokenPayload.name;
//     try {
//         const resp = await User.find({ name: userName })
//             .select('enemies')
//             .populate('enemies', { name: 1, _id: 0 });
//         res.json(resp);
//     } catch (err) {
//         next(err);
//     }
// };

export const updateUser = async (req, res, next) => {
    try {
        const resp = await User.findOneAndUpdate(
            { name: req.tokenPayload.name },
            req.body
        );
        res.json(resp);
    } catch (error) {
        next(error);
    }
};

// export const toggleFriend = async (req, res, next) => {
//     try {
//         const resp = await User.findOneAndUpdate(
//             { name: req.tokenPayload.name },
//             { $push: { friends: req.params.id } }
//         );
//         res.json(resp);
//     } catch (error) {
//         next(error);
//     }
// };

// export const toggleEnemy = async (req, res, next) => {
//     try {
//         const resp = await User.findOneAndUpdate(
//             { name: req.tokenPayload.name },
//             { $push: { enemies: req.params.id } }
//         );
//         res.json(resp);
//     } catch (error) {
//         next(error);
//     }
// };
