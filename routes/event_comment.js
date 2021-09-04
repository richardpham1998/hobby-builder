const express = require('express');
const router = express.Router();

const EventComment = require('../models/event_comment');

//get all event comments
router.get('/event_comments', (req,res,next)=>
{
    EventComment.find(function(err, event_comments)
    {
        res.json(event_comments);
    });
});

//create new event comment
router.post('/event_comment', (req,res,next)=>
{

    let newEventComment = new EventComment({
        content: req.body.content,
        user: req.body.user,
        event: req.body.event,
        date_created: Date.now(),
    })

    newEventComment.save((err, event_comment)=>
    {
        if(err)
        {
            res.json({msg: 'Cannot add Event Comment'});
        }
        else{
            res.json({msg: 'Success: added Event Comment'});
        }
    })
})

//get event comment by id
router.get('/event_comment/:id', (req,res,user)=>
{
    EventComment.findById({_id: req.params.id}, function(err,result)
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

//modify event comment
router.patch('/event_comment/:id', (req,res,user)=>
{
    EventComment.updateOne({_id: req.params.id}, 
        {
        "content": req.body.content,
        "user": req.body.user,
        "event": req.body.event,
        "date_modified": Date.now(),
    }, function(err, result)
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

//delete event comment
router.delete('/event_comment/:id',(req,res,next)=>
{
    EventComment.remove({_id: req.params.id}, function(err,result)
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