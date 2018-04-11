const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../banner');

const db = "mongodb://user1:user1@ds135399.mlab.com:35399/adsbanner";

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) throw err;
    else
        console.log('db connected');
});

//To get the images from the mongodb Database

router.get('/getImages', function (req, res) {
    console.log('Get request for all Images');
    User.find({})
        .exec(function (err, photos) {
            if (err) {
                console.log('Error retrieving Images');
            } else {
                console.log(photos);
                res.json(photos);
            }
        });
});

//To delete the images from the database based on Id

router.delete('/deleteImages/:id', function(req, res){
    console.log('Deleting an image based on Id');
    User.findByIdAndRemove(req.params.id, function(err, deletedPhoto){
        if(err){
            res.send("Error deleting an Image");
        }else{
            res.json(deletedPhoto);
        }
    })
})


module.exports = router;