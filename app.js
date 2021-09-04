var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const route = require('./routes/route');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');
const eventRoute = require('./routes/event');
const eventCommentRoute = require('./routes/event_comment');
const postCommentRoute = require('./routes/post_comment');


mongoose.connect('mongodb://localhost:27017/hobby-builder');
mongoose.connection.on('connected', () =>
{
    console.log('Connected to database mongodb @ 27017');
});
mongoose.connection.on('error', (err=>
    {
        if(err)
        {
            console.log('Error in Database Connection: '+ err);
        }
    }));

    const port = 3000;
    app.use(cors());
    app.use(bodyparser.json());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api', route);
    app.use('/api', postRoute);
    app.use('/api', userRoute);
    app.use('/api', eventRoute);
    app.use('/api', eventCommentRoute);
    app.use('/api', postCommentRoute);

    app.listen(port,()=>
    {
        console.log('Server started at port '+port);
    })
