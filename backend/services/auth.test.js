import { createToken, verifyToken, getTokenInfo } from '../services/auth.js';

describe('Testing auth module', () => {
    const mockedUser = {
        name: 'Pepe',
        is: '1',
    };

    test('Testing Creatoken function', () => {
        const token = createToken(mockedUser);

        expect(token).toBeTruthy();
    });

    test('Testing verifyToken function', () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXZhIiwiaWF0IjoxNjQ2NTgwMzY3fQ.O-MMwXiBfIj3eVVQTIfIe_gTjn5eGhLM2EH8du-hIF0';
        const decodedToken = verifyToken(token);

        expect(decodedToken.name).toBe('Eva');
    });

    test('Testing verifyToken function with no valid token', () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXZhIiwiaWF0IjoxNjQ2NTgwMzY3fQ.O-MMwXiBfIj3eVVQTIfIe_';
        const decodedToken = verifyToken(token);

        expect(decodedToken.name).toBe(undefined);
    });

    test('Testing getTokenInfo function', () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXZhIiwiaWF0IjoxNjQ2NTgwMzY3fQ.O-MMwXiBfIj3eVVQTIfIe_gTjn5eGhLM2EH8du-hIF0';
        const result = getTokenInfo(token);

        expect(result.name).toBe('Eva');
    });
});
