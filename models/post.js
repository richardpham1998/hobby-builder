const mongoose = require('mongoose');
const PostSchema = mongoose.SchemaType({
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
    //store id's of post comments
    post_comments:
    {
        type: [int],
        required: true
    },
    event_comments:
    {
        type: [int],
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
    
const Post = module.exports = mongoose.model('Post', PostSchema);
