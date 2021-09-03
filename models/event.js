const mongoose = require('mongoose');
const EventSchema = mongoose.SchemaType({
    id:
    {
        type: int,
        required: true
    },
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
        type: [id],
        required: true
    },
    hosts:
    {
        type: [id],
        required: true
    },
    comments:
    {
        type: [id],
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
        type: Image
    }
});

Event = modules.export = mongoose.model('Event', EventSchema);