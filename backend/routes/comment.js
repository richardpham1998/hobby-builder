const express = require('express');
const router = express.Router();

const Comment = require('../models/comment');

//get all comments
router.get('/comments', (req,res,next)=>
{
    Comment.find(function(err, comments)
    {
        res.json(comments);
    });
});

//create new comment
router.post('/comment', (req,res,next)=>
{

    let newComment = new Comment({
        content: req.body.content,
        user: req.body.user,
        author: req.body.author,
        event: req.body.event,
        post: req.body.post,
        date_created: Date.now(),
    })

    newComment.save((err, comment)=>
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json({msg: 'Success: added Comment', status: 200, comment: comment});
        }
    })
})

//get comment by id
router.get('/comment/:id', (req,res,user)=>
{
    Comment.findById({_id: req.params.id}, function(err,result)
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

//modify comment
router.patch('/comment/:id', (req,res,user)=>
{
    
    Comment.updateOne({_id: req.params.id}, 
        {
        "content": req.body.content,
        "user": req.body.user,
        "event": req.body.event,
        "author": req.body.author,
        "post": req.body.post,
        "date_modified": Date.now(),
    }, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else if(req.body.content == null || req.body.user == null || req.body.author == null)
        {
            res.json({msg: 'Unable to patch Comment. Data is invalid', status: 404});
        }
        else{
            res.json(result);
        }
    })
})

//delete comment
router.delete('/comment/:id',(req,res,next)=>
{
    Comment.remove({_id: req.params.id}, function(err,result)
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