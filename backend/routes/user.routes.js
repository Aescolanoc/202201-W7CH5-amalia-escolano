import express from 'express';
const router = express.Router();
import { login } from '../controllers/login.controller.js';
import {
    insertUser,
    getAllUsers,
    getUser,
    // getAllFriends,
    updateUser,
    // getAllEnemies,
    // toggleFriend,
    // toggleEnemy,
} from '../controllers/user.controller.js';
import { loginRequired } from '../middlewares/interceptors.js';

router.post('/', insertUser);
router.post('/login', login);
router.get('/', loginRequired, getAllUsers);
// router.get('/friends', loginRequired, getAllFriends);
// router.get('/enemies', loginRequired, getAllEnemies);
router.get('/:id', loginRequired, getUser);
router.patch('/:id', loginRequired, updateUser);
// router.patch('/friends/:id', loginRequired, toggleFriend);
// router.patch('/enemies/:id', loginRequired, toggleEnemy);

export default router;
