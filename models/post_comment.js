const mongoose = require('mongoose');
const PostCommentSchema = mongoose.Schema({
    content:
    {
        type: String,
        required: true
    },
    //collect id's
    user:
    {
        type: String,
        required: true
    },
    post:
    {
        type: String,
        required: true
    },
    date_created:
    {
        type: Date,
        required: true
    },
    date_modified:
    {
        type: Date
    }
});

PostComment = module.exports = mongoose.model('PostComment', PostCommentSchema);