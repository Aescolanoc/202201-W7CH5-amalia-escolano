import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    passwd: { type: String, required: true },
    image: { type: String, required: false },
    about: { type: String, required: false },
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

// userSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         delete returnedObject.__v;
//         delete returnedObject.passwd;
//     },
// });

export const User = mongoose.model('User', userSchema);
