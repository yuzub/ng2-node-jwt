var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var User = require('./models/user.js');
var Post = require('./models/post.js');
var auth = require('./auth.js');

mongoose.Promise = Promise;

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

app.post('/post', (req, res) => {
    var post = new Post(req.body);

    post.save((err, result) => {
        if (err) {
            console.error('Saving post error');
            return res.status(500).send({message: 'Saving post error'});
        }
        res.sendStatus(200);
    });
});

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v  ');
        res.send(users);
    } catch (error) {
        console.error(error);
        es.sendStatus(500);
    }
});

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v  ');
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.post('/register', auth.register);

app.post('/login', auth.login);

mongoose.connect('mongodb://test:test@ds119736.mlab.com:19736/ng2-node-jwt', { useMongoClient: true }, (err) => {
    if (!err) {
        console.log('Connected to mlab - OK');
    } else {
        console.log('Error: ' + err);
    }
})

app.listen(3000);