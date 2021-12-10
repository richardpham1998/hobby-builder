const express = require('express');
const router = express.Router();

const Notification = require('../models/notification');

//get all notifications
router.get('/notifications',(req, res, next)=>
{
    Notification.find(function(err, notifications)
    {
        res.json(notifications);
    });
});

//create new notification
router.post('/notification',(req,res,next)=>
{
    let newNotification = new Notification(
        {
            text: req.body.text,
            user: req.body.user,
            linkType: req.body.linkType,
            idToLink: req.body.idToLink,
            newNotif: req.body.newNotif,
            date_created: Date.now(),
            date_modified: null
        }
    )

    newNotification.save((err, notification)=>
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({msg: 'Success: added Notification', status: 200, notification: notification});
        }
    })
});

//get notification by id
router.get('/notification/:id', (req,res,next)=>
{
    Notification.findById(req.params.id, function(err, result)
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

//modify notification
router.patch('/notification/:id',(req,res,next)=>
{

    Notification.findById(req.params.id, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else{        
            Notification.updateOne({_id: req.params.id},
                {
                    "text": req.body.text,
                    "user": req.body.user,
                    "linkType": req.body.linkType, 
                    "idToLink": req.body.idToLink,
                    "tags": req.body.tags,
                    "newNotif": req.body.newNotif,
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

//delete notification
router.delete('/notification/:id', (req,res,next)=>
{
    Notification.remove({_id: req.params.id}, function(err, result)
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