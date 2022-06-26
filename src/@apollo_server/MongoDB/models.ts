
import { Schema, model } from 'mongoose';

export interface UserSchema {
    id: string
    username: string
    email: string
    password: string
    rank: number
    winRecord: number
    loseRecord: number
}

const userSchema = new Schema<UserSchema>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        required: true,
        unique: true,
    },
    rank: {
        type: Number
    },
    winRecord: {
        type: Number
    },
    loseRecord: {
        type: Number
    }
});


const User = model<UserSchema>('Users', userSchema);


export default User;