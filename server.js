const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var logger = require('morgan');

const api = require('./server/routes/api');
const login = require('./server/routes/login');
const banner = require('./server/routes/banner');


const port = 3000;
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create a cors middleware
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', api);
app.use('/login', login);
app.use('/banner', banner);


app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
    console.log("Server running on Localhost:" + port);
})