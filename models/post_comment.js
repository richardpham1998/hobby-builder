const mongoose = require('mongoose');
const PostCommentSchema = mongoose.SchemaType({
    id:
    {
        type: int,
        required: true
    },
    content:
    {
        type: String,
        required: true
    },
    //collect id's
    user:
    {
        type: int,
        required: true
    },
    post:
    {
        type: int,
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

PostComment = modules.export = mongoose.model('PostComment', PostCommentSchema);