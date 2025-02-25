import { Schema, model, models } from 'mongoose';

const CommentSchema= new Schema({
    text: { type: String, required: true },
    image: { type: String},
    profilephoto: { type: String},
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    post: { type: Schema.Types.ObjectId, ref: 'Post'},
    likes: { type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
},
     {timestamps: true}
);

const Comment = models.Comment || model('Comment', CommentSchema);
export default Comment;
