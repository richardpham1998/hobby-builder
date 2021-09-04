const mongoose = require('mongoose');
const EventCommentSchema = mongoose.Schema({
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
    event:
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

EventComment = module.exports = mongoose.model('EventComment', EventCommentSchema);