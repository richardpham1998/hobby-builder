const express = require('express');
const router = express.Router();

const Event = require('../models/event');

//get all events
router.get('/events', (req,res,next)=>
{
    Event.find(function(err, events)
    {
        res.json(events);
    });
});

//create new event
router.post('/event', (req,res,next)=>
{
    let newEvent = new Event({
        title: req.body.title,
        likes: {"-1":[],"0":[],"1":[]},
        description: req.body.description,
        location: req.body.location,
        attendees: {"-1":[],"0":[],"1":[]},
        hosts: req.body.hosts,
        user: req.body.user,
        tags: req.body.tags,
        author: req.body.author,
        comments: req.body.comments,
        date_event: req.body.date_event,
        date_created: Date.now(),
        date_modified: null,
        image: req.body.image
    })

    newEvent.save((err, event)=>
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json({msg: 'Success: added Event', status: 200, event: event});
        }
    })
})

//get event by id
router.get('/event/:id', (req,res,user)=>
{
    Event.findById({_id: req.params.id}, function(err,result)
    { 
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
        
    })

})

//modify event
router.patch('/event/:id', (req,res,user)=>
{

    var resultObject = null;

    Event.findById(req.params.id, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            resultObject = result;
            if(req.body.title != null)
            {
                resultObject.title = req.body.title;
            }
            if(req.body.description != null)
            {
                resultObject.description = req.body.description;
            }
            if(req.body.location != null)
            {
                resultObject.location = req.body.location;
            }
            if(req.body.attendees != null)
            {
                resultObject.attendees = req.body.attendees;
            }
            if(req.body.author != null)
            {
                resultObject.author = req.body.author;
            }
            if(req.body.hosts != null)
            {
                resultObject.hosts = req.body.hosts;
            }
            if(req.body.comments != null)
            {
                resultObject.comments = req.body.comments;
            }
            if(req.body.date_event != null)
            {
                resultObject.date_event = req.body.date_event;
            }
            if(req.body.tags != null)
            {
                resultObject.tags = req.body.tags;
            }
            if(req.body.user!=null)
            {
                resultObject.user = req.body.user;
            }

            if((resultObject.title == null || resultObject.description == null || resultObject.author == null || resultObject.location == null || resultObject.attendees == null || resultObject.host == null || resultObject.comments == null))
                {
                    resultObject.date_modified = Date.now();
                }
                else
                {
                    resultObject.date_modified = null;
                }

                resultObject.likes = req.body.likes;

            Event.updateOne({_id: req.params.id}, 
                {
                "title": resultObject.title,
                "likes": resultObject.likes,
                "description": resultObject.description,
                "location": resultObject.location,
                "attendees": resultObject.attendees,
                "author": resultObject.author,
                "hosts": resultObject.hosts,
                "comments": resultObject.comments,
                "tags": resultObject.tags,
                "date_event": resultObject.date_event,
                "date_modified": resultObject.date_modified,
                "image": resultObject.image
            }, function(err, result1)
            {
                if(err)
                {
                    res.json(err);
                }
                else if(req.body.title == null || req.body.description == null || req.body.author == null || req.body.location == null || req.body.attendees == null|| req.body.comments == null)
                {
                    res.json({msg: 'Unable to patch Event. Data is invalid', status: 404});
                }
                else{
                    res.json(result1);
                }
            })};
        });
    
})

//delete event
router.delete('/event/:id',(req,res,next)=>
{
    Event.remove({_id: req.params.id}, function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
})

module.exports = router;