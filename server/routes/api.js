const express = require('express');
const router = express.Router();


const mongoose= require('mongoose');
const db="mongodb://user1:user1@ds135399.mlab.com:35399/adsbanner";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err) throw err;
    else
    console.log('db connected');
})

router.get('/', function(request, response){
    response.send(" / get route Api Works");
});
router.post('/', function(request, response){
    response.send("/ post routeApi Works");
});
router.get('/api', function(request, response){
    response.send("/api get route Api Works");
});

module.exports = router;