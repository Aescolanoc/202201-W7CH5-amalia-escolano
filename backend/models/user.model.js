import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    passwd: { type: String, required: true },
    image: { type: String },
    about: { type: String },
    friends: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
    enemies: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.passwd;
    },
});

export const User = mongoose.model('users', userSchema);
