const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
    title:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        required: true
    },
    //collect id's
    attendees:
    {
        type: [String],
        required: true
    },
    hosts:
    {
        type: [String],
        required: true
    },
    comments:
    {
        type: [String],
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
    },
    image:
    {
        type: String
    }
});

Event = module.exports = mongoose.model('Event', EventSchema);