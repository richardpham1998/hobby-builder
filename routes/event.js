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
        description: req.body.description,
        location: req.body.location,
        attendees: req.body.attendees,
        hosts: req.body.hosts,
        comments: req.body.comments,
        date_created: Date.now(),
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

    Event.updateOne({_id: req.params.id}, 
        {
        "title": req.body.title,
        "description": req.body.description,
        "location": req.body.location,
        "attendees": req.body.attendees,
        "hosts": req.body.hosts,
        "comments": req.body.comments,
        "date_modified": Date.now(),
        "image": req.body.image
    }, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else if(req.body.title == null || req.body.description == null || req.body.location == null || req.body.attendees == null || req.body.host == null || req.body.comments == null)
        {
            res.json({msg: 'Unable to patch Event. Data is invalid', status: 404});
        }
        else{
            res.json(result);
        }
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