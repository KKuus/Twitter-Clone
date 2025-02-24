import { Schema, model, models } from 'mongoose';

const NotificationSchema= new Schema({
    text: { type: String, required: true },
    followers: { type: Schema.Types.ObjectId, ref: 'User'},
},
     {timestamps: true}
);

const Notification = models.Notification || model('Notifications', NotificationSchema);

export default Notification;

