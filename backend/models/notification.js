const mongoose = require('mongoose');
const NotificationSchema = mongoose.Schema({

    text:
    {
        type:String,
        required:true,
        null: false
    },
    user:
    {
        type:String,
        required: true,
        null: false
    },
    linkType:
    {
        type: String,
        required: true,
        null: false
    },
    idToLink:
    {
        type:String,
        required:true,
        null:false
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

const Notification = module.exports = mongoose.model('Notification', NotificationSchema);
