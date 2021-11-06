const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    content:
    {
        type: String,
        required: true,
        null: false
    },
    likes:
    {
        type: {"-1":[],"0":[],"1":[]},
        required: true,
        null: false,
    },
    //collect id's
    user:
    {
        type: String,
        required: true,
        null: false
    },
    author:
    {
        type: String,
        required: true,
        null: false
    },
    event:
    {
        type: String,
        default: null
    },
    post:
    {
        type: String,
        default: null
    },
    date_created:
    {
        type: Date,
        required: true,
        null: false
    },
    date_modified:
    {
        type: Date,
        default: null
    }
});

Comment = module.exports = mongoose.model('Comment', CommentSchema);