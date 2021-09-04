const express = require('express');
const router = express.Router();

const PostComment = require('../models/post_comment');

//get all post comments
router.get('/post_comments', (req,res,next)=>
{
    PostComment.find(function(err, post_comments)
    {
        res.json(post_comments);
    });
});

//create new post comment
router.post('/post_comment', (req,res,next)=>
{

    let newPostComment = new PostComment({
        content: req.body.content,
        user: req.body.user,
        post: req.body.post,
        date_created: Date.now(),
    })

    newPostComment.save((err, post_comment)=>
    {
        if(err)
        {
            res.json({msg: 'Cannot add Post Comment'});
        }
        else{
            res.json({msg: 'Success: added Post Comment'});
        }
    })
})

//get post comment by id
router.get('/post_comment/:id', (req,res,user)=>
{
    PostComment.findById({_id: req.params.id}, function(err,result)
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

//modify post comment
router.patch('/post_comment/:id', (req,res,user)=>
{
    PostComment.updateOne({_id: req.params.id}, 
        {
        "content": req.body.content,
        "user": req.body.user,
        "post": req.body.post,
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

//delete post comment
router.delete('/post_comment/:id',(req,res,next)=>
{
    PostComment.remove({_id: req.params.id}, function(err,result)
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