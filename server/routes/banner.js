var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var User = require('../../banner.js');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});
var upload = multer({ storage: storage }).array('photo', 20);

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
    console.log(req.files);
    console.log('_------______req.files.')

    // console.log(req.files[0].filename)
    // console.log(req.files[0].path)
    // console.log(req.files[0].size);

    const user = new User({ "fileName": req.files[0].filename, "path": req.files[0].path, "size": req.files[0].size });
    console.log("---------------------user----------------------------------------")
    console.log(user);
    user.save().then(function(){
      console.log("User has been Inserted");
    }).catch(function(){
      console.log("Oops...Something went wrong");
    })

    console.log(user);

  });
});

module.exports = router;