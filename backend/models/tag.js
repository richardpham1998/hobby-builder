const mongoose = require('mongoose');
const TagSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        null: false
    },
});

Tag = module.exports = mongoose.model('Tag', TagSchema);