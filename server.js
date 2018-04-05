const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const login = require('./server/routes/login');
const banner = require('./server/routes/banner');


const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', api);
app.use('/login', login);
app.use('/banner', banner);


app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on Localhost:" +port);
})