const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title:
    {
        type: String,
        required: true,
        null: false
    },
    description:
    {
        type: String,
        required: true,
        null: false
    },
    //store id's of post comments
    post_comments:
    {
        type: Array,
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
    }

});
    
const Post = module.exports = mongoose.model('Post', PostSchema);
