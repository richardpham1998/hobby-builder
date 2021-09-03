const mongoose = require('mongoose');
const UserSchema = mongoose.SchemaType({
    id:
    {
        type: int,
        required: true
    },
    user_name:
    {
        type:String,
        required:true
    },
    //store id's of comments
    post_comments:
    {
        type:[int],
        required: true
    },
    event_comments:
    {
        type:[int],
        required: true
    },
    events_created:
    {
        type:[String],
        required:true
    },
    events_hosting:
    {
        type:[String],
        required:true
    },
    events_attending:
    {
        type:[String],
        required:true
    },
    posts:
    {
        type:[String],
        required: true
    },
    hobbies:
    {
        type:[String],
        required: true
    }

});

const User = module.exports = mongoose.model('User', UserSchema);
