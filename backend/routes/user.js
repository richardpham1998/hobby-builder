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
            username: req.body.username,
            comments: req.body.comments,
            biography: req.body.biography,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country,
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

    User.findById(req.params.id, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            resultObject = result;
            if(req.body.username != null)
            {
                resultObject.username = req.body.username;
            }
            if(req.body.biography != null)
            {
                resultObject.biography = req.body.biography;
            }
            if(req.body.city != null)
            {
                resultObject.city = req.body.city;
            }
            if(req.body.province != null)
            {
                resultObject.province = req.body.province;
            }
            if(req.body.country != null)
            {
                resultObject.country = req.body.country;
            }
            if(req.body.comments != null)
            {
                resultObject.comments = req.body.comments;
            }
            if(req.body.events_created != null)
            {
                resultObject.events_created = req.body.events_created;
            }
            if(req.body.events_hosting != null)
            {
                resultObject.events_hosting = req.body.events_hosting;
            }
            if(req.body.events_attending != null)
            {
                resultObject.events_attending = req.body.events_attending;
            }
            if(req.body.posts != null)
            {
                resultObject.posts = req.body.posts;
            }
            if(req.body.hobbies != null)
            {
                resultObject.hobbies = req.body.hobbies;
            }

            
        User.updateOne({_id: req.params.id},
            {   "username": resultObject.username,
                "comments": resultObject.comments,
                "biography": resultObject.biography,
                "city": resultObject.city,
                "province": resultObject.province,
                "country": resultObject.country,
                "events_created": resultObject.events_created,
                "events_hosting": resultObject.events_hosting,
                "events_attending": resultObject.events_attending,
                "posts": resultObject.posts,
                "hobbies": resultObject.hobbies
            }, 
            function(err, result1)
            {
                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(result1);
                }
                
            }
        )};
        
    });
    
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