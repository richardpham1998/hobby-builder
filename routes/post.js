const express = require('express');
const router = express.Router();

const Post = require('../models/post');

//get all posts
router.get('/posts',(req, res, next)=>
{
    Post.find(function(err, posts)
    {
        res.json(posts);
    });
});

//create new post
router.post('/post',(req,res,next)=>
{
    let newPost = new Post(
        {
            title: req.body.title,
            description: req.body.description,
            post_comments: req.body.post_comments,
            date_created: Date.now(),
            date_modified: Date.now()
        }
    )

    newPost.save((err, post)=>
    {
        if(err)
        {
            res.json({msg: 'Cannot add Post'});
        }
        else
        {
            res.json({msg: 'Success: added Post'});
        }
    })
});

//get post by id
router.get('/post/:id', (req,res,next)=>
{
    Post.findById(req.params.id, function(err, result)
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

//modify post
router.patch('/post/:id',(req,res,next)=>
{

    Post.updateOne({_id: req.params.id},
        {
            "title": req.body.title,
            "description": req.body.description, 
            "post_comments": req.body.post_comments,
            "date_modified": Date.now()
        }, 
        function(err, result)
        {
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(result);
            }
            
        }
    );
});

//delete post
router.delete('/post/:id', (req,res,next)=>
{
    Post.remove({_id: req.params.id}, function(err, result)
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