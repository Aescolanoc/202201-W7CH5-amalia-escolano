import * as controller from './user.controller.js';
import { User } from '../models/user.model.js';

jest.mock('../models/user.model.js');

describe('Given the user controller', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });

    describe('When getAllUsers is triggered', () => {
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                User.find.mockReturnValue([]);
            });
            test('Then call send', async () => {
                User.find.mockReturnValue([]);
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
            test('Then call send', async () => {
                User.findOne.mockReturnValue({});
                await controller.getUser(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
            test('Then call send', async () => {
                await controller.insertUser(req, res, next);
                expect(next).toHaveBeenCalled();
                expect(res.json).not.toHaveBeenCalled();
            });
            test('Then call send', async () => {
                User.findOneAndUpdate.mockReturnValue({});
                await controller.updateUser(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
    });
});
