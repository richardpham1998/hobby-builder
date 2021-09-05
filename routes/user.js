const express = require('express');
const router = express.Router();

const User = require('../models/user');

//get all users
router.get('/users',(req, res, next)=>
{
    User.find(function(err, users)
    {
        res.json(users);
    });
});

//create new user
router.post('/user',(req,res,next)=>

{
    let newUser = new User(
        {
            user_name: req.body.user_name,
            post_comments: req.body.post_comments,
            event_comments: req.body.event_comments,
            events_created: req.body.events_created,
            events_hosting: req.body.events_hosting,
            events_attending: req.body.events_attending,
            posts: req.body.posts,
            hobbies: req.body.hobbies
        }
    )

    newUser.save((err, user)=>
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({msg: 'Success: added User',status: 200, user: user});
        }
    })
});

//get user by id
router.get('/user/:id', (req,res,next)=>
{
    User.findById(req.params.id, function(err, result)
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

//modify user
router.patch('/user/:id',(req,res,next)=>
{


        User.updateOne({_id: req.params.id},
            {   "user_name": req.body.user_name,
                "post_comments": req.body.post_comments,
                "event_comments": req.body.event_comments,
                "events_created": req.body.events_created,
                "events_hosting": req.body.events_hosting,
                "events_attending": req.body.events_attending,
                "posts": req.body.posts,
                "hobbies": req.body.hobbies
            }, 
            function(err, result)
            {
                if(err)
                {
                    res.json(err);
                }
                else if(req.body.user_name == null || req.body.post_comments == null || req.body.event_comments == null || req.body.events_created == null || req.body.events_hosting == null || req.body.events_attending == null || req.body.posts == null || req.body.hobbies == null)
                {
                    res.json({msg: 'Unable to patch User. Data is invalid', status: 404});
                }
                else{
                    res.json(result);
                }
                
            }
        );
    
});

//delete user
router.delete('/user/:id', (req,res,next)=>
{
    User.remove({_id: req.params.id}, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
});

module.exports = router;