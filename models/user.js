const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({

    username:
    {
        type:String,
        required:true,
        null: false
    },
    biography:
    {
        type:String,
        required:false
    },
    city:
    {
        type:String,
        required:false
    },
    province:
    {
        type:String,
        required:false
    },
    country:
    {
        type:String,
        required:false
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
    },
    friends:
    {
        type: {"0":[],"1":[], "2": [], "3": []},
        required: true,
        null: false,
    },

});

const User = module.exports = mongoose.model('User', UserSchema);
