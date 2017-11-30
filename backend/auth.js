var User = require('./models/user.js');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

module.exports = {
    register: (req, res) => {
        var userData = req.body;
        console.log('Register user:');
        console.log(userData);
    
        var user = new User(userData);
        user.save((err, result) => {
            if (err) {
                console.error('Saving user error');
                return res.status(500).send({message: 'Saving user error'});
                
            }
            res.sendStatus(200);
        });
    },
    login: async (req, res) => {
        var loginData = req.body;
        console.log('Login user:');
        console.log(loginData);
    
        var user = await User.findOne({ email: loginData.email });
    
        if (!user)
            return res.status(401).send({ message: 'Email or Password invalid' });
    
        bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
            if (!isMatch)
                return res.status(401).send({ message: 'Email or Password invalid' });
            var payload = {};
    
            var token = jwt.encode(payload, '123');
            
            console.log(token);
    
            res.status(200).send({ token: token });
        })
    
    }
}