const express = require('express');
const router = express.Router();

const Tag = require('../models/tag');

//get all tags
router.get('/tags', (req,res,next)=>
{
    Tag.find(function(err, tags)
    {
        res.json(tags);
    });
});

//create new tag
router.post('/tag', (req,res,next)=>
{

    let newTag = new Tag({
        name: req.body.name,
    })

    newTag.save((err, tag)=>
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json({msg: 'Success: added Tag', status: 200, tag: tag});
        }
    })
})

//get tag by id
router.get('/tag/:id', (req,res,user)=>
{
    Tag.findById({_id: req.params.id}, function(err,result)
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

//modify tag
router.patch('/tag/:id', (req,res,user)=>
{
    
    Tag.updateOne({_id: req.params.id}, 
        {
        "name": req.body.name,
    }, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else if(req.body.name == null)
        {
            res.json({msg: 'Unable to patch Tag. Data is invalid', status: 404});
        }
        else{
            res.json(result);
        }
    })
})

//delete tag
router.delete('/tag/:id',(req,res,next)=>
{
    Tag.remove({_id: req.params.id}, function(err,result)
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