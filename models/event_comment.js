const mongoose = require('mongoose');
const EventCommentSchema = mongoose.SchemaType({
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
    event:
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

EventComment = modules.export = mongoose.model('EventComment', EventCommentSchema);