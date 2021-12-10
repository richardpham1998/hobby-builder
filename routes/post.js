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
            likes: {"-1":[],"0":[],"1":[]},
            description: req.body.description,
            user: req.body.user,
            author: req.body.author,
            tags: req.body.tags,
            post_comments: req.body.post_comments,
            date_created: Date.now(),
            date_modified: null
        }
    )

    newPost.save((err, post)=>
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({msg: 'Success: added Post', status: 200, post: post});
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
    var resultObject = null;

    Post.findById(req.params.id, function(err, result)
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
            if(req.body.post_comments != null)
            {
                resultObject.post_comments = req.body.post_comments;
            }
            if(req.body.tags != null)
            {
                resultObject.tags = req.body.tags;
            }

            resultObject.likes = req.body.likes;
        
            Post.updateOne({_id: req.params.id},
                {
                    "title": resultObject.title,
                    "likes": resultObject.likes,
                    "description": resultObject.description, 
                    "post_comments": resultObject.post_comments,
                    "tags": resultObject.tags,
                    "date_modified": Date.now()
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
            );
        }
    });
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