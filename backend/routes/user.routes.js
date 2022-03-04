import express from 'express';
const router = express.Router();
import { login } from '../controllers/login.controller.js';
import { insertUser } from '../controllers/user.controller.js';

router.post('/', insertUser);
router.post('/login', login);
// router.get('/', getAllUsers);
// router.get('/:id', getUser);
// router.get('/friends', getAllFriends);
// router.get('/enemies', getAllEnemies);
// router.patch('/:id', updateUser);

export default router;
