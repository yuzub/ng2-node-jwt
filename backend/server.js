var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

var app = express();

var User = require('./models/user.js');

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

app.post('/login', async (req, res) => {
    var userData = req.body;
    console.log(userData);

    var user = await User.findOne({email: userData.email});

    if(!user)
        return res.status(401).send({message: 'Email or Password invalid'});

    if(userData.pwd != user.pwd)
        return res.status(401).send({message: 'Email or Password invalid'});

    console.log(user);

    var payload = {};

    var token = jwt.encode(payload, '123');
    
    console.log(token);

    res.status(200).send({token: token});
});

mongoose.connect('mongodb://test:test@ds119736.mlab.com:19736/ng2-node-jwt', { useMongoClient: true }, (err) => {
    if (!err) {
        console.log('Connected to mlab - OK');
    } else {
        console.log('Error: ' + err);
    }
})

app.listen(3000);