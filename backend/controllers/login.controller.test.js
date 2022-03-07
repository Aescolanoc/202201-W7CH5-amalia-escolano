import * as controller from './login.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';
import { User } from '../models/user.model.js';

jest.mock('../models/user.model.js');
jest.mock('bcryptjs');
jest.mock('../services/auth.js');

describe('Given the login controller', () => {
    let req;
    let res;
    // eslint-disable-next-line no-unused-vars
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });

    describe('When login is triggered', () => {
        describe('And there are not user name ', () => {
            test('Then call next', async () => {
                req.body = { name: 'Eva' };
                await controller.login(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And there are not passwd', () => {
            test('Then call next ', async () => {
                req.body = { passwd: '1234' };
                await controller.login(req, res, next);
                expect(res.json).not.toHaveBeenCalled();
                expect(next).toHaveBeenCalled();
            });
        });

        describe('And there are user name or passwd', () => {
            beforeEach(() => {
                req.body = { name: 'Eva', passwd: '12345' };
            });

            describe('And the user name is not found', () => {
                test('Then call next', async () => {
                    await User.findOne.mockResolvedValue(null);
                    await controller.login(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the passwd is no correct', () => {
                test('Then call next', async () => {
                    await User.findOne.mockResolvedValue({});
                    bcrypt.compareSync.mockReturnValue(null);
                    await controller.login(req, res, next);
                    expect(next).toHaveBeenCalled();
                });
            });

            describe('And the user name and passwd are ok', () => {
                test('Then call send', async () => {
                    const user = {
                        name: 'Eva',
                        id: '1',
                    };
                    await User.findOne.mockResolvedValue(user);
                    bcrypt.compareSync.mockReturnValue(true);
                    createToken.mockReturnValue('mock_token');
                    await controller.login(req, res, next);
                    expect(res.json).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});
