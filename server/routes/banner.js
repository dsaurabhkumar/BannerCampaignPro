var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var User = require('../../banner.js');

var maxSize = 1 * 1000 * 100;

//To store the image into folder(uploads) using multer

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage, limits: { fileSize: maxSize } }).array('photo', 20);

//To limit the size of image, if more than a particular size then it will not store in database

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
    console.log(req.files);

    //To store the data into MongoDB Database

    const user = new User({ "fileName": req.files[0].filename, "path": req.files[0].path, "size": req.files[0].size });
    if (user.size > 100000) {    // condition to check the size of image is more than or less than 100kb.
      console.log("Limit Exceeds...!!! Can't Upload file");
    } else {
      user.save().then(function () {
        console.log("User has been Inserted");
      }).catch(function () {
        console.log("Oops...Something went wrong");
      })
    }
    console.log(user);
  });
});

module.exports = router;