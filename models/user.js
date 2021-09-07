const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({

    user_name:
    {
        type:String,
        required:true,
        null: false
    },
    //store id's of comments
    comments:
    {
        type:[String],
        required: true,
        null: false
    },
    events_created:
    {
        type:[String],
        required:true,
        null: false
    },
    events_hosting:
    {
        type:[String],
        required:true,
        null: false
    },
    events_attending:
    {
        type:[String],
        required:true,
        null: false
    },
    posts:
    {
        type:[String],
        required: true,
        null: false
    },
    hobbies:
    {
        type:[String],
        required: true,
        null: false
    }

});

const User = module.exports = mongoose.model('User', UserSchema);
