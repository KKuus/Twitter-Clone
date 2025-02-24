import { Schema, model, models } from 'mongoose';

const UserSchema= new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    coverphoto: { type: String},
    profilephoto: { type: String},
    bio: { type: String},
    location: { type: String},
    followers: { type: Schema.Types.ObjectId, ref: 'User'},
    following: { type: Schema.Types.ObjectId, ref: 'User'},
    notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification'}],
},
     {timestamps: true}
);

const User = models.User || model('User', UserSchema);
