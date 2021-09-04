const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
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
        type: [Number],
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
