import { createToken } from '../services/auth.js';
import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

export const login = async (req, resp, next) => {
    const userToCheck = req.body;
    const loginError = new Error('user or password invalid');
    loginError.status = 401;
    const userDb = await User.findOne({ name: userToCheck.name });

    if (!userToCheck.name || !userToCheck.passwd) {
        next(new Error(loginError));
    } else {
        if (userDb) {
            if (bcrypt.compareSync(userToCheck.passwd, userDb.passwd)) {
                const token = createToken({
                    name: userDb.name,
                    id: userDb._id,
                });
                resp.json({
                    token,
                    name: userDb.name,
                    id: userDb._id,
                    image: userDb.image,
                    friends: userDb.friends,
                    enemies: userDb.enemies,
                });
            } else {
                next(new Error(loginError));
            }
        } else {
            next(new Error(loginError));
        }
    }
};
