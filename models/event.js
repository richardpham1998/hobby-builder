const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
    title:
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
    description:
    {
        type: String,
        required: true,
        null: false
    },
    location:
    {
        type: String,
        required: true,
        null: false
    },
    //collect id's
    attendees:
    {
        type: {"-1":[],"0":[],"1":[]},
        required: true,
        null: false
    },
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
    hosts:
    {
        type: [String],
        required: true,
        null: false
    },
    comments:
    {
        type: [String],
        required: true,
        null: false
    },
    tags:
    {
        type: [String],
        required: true,
        null: false
    },
    date_event:
    {
        type: Date,
        required: true,
        null: false
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
    },
    image:
    {
        type: String,
        default: null
    }
});

Event = module.exports = mongoose.model('Event', EventSchema);