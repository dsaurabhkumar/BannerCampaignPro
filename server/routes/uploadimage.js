const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://user1:user1@ds135399.mlab.com:35399/adsbanner";

mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) throw err;
    else
        console.log('db connected');
});

router.get('/getImages', function (req, res) {
    console.log('Get request for all Images');
    User.find({})
        .exec(function (err, photos) {
            if (err) {
                console.log('Error retrieving Images');
            } else {
                console.log(photos);
                // res.json(photos);
            }
        });
});


module.exports = router;