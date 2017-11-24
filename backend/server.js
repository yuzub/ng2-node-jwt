var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/user.js');

var posts = [
    { message: 'hello' },
    { message: 'hi' }
];

app.use(cors());
// app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    var userData = req.body;
    console.log(userData);

    var user = new User(userData);
    user.save((err, result) => {
        if (err)
            console.log('Saving user error');
        res.sendStatus(200);
    });
});

mongoose.connect('mongodb://test:test@ds119736.mlab.com:19736/ng2-node-jwt', { useMongoClient: true }, (err) => {
    if (!err) {
        console.log('Connected to mlab - OK');
    } else {
        console.log('Error: ' + err);
    }
})

app.listen(3000);