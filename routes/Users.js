const express = require('express')
const mongoose = require('mongoose');
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validateRegisterInput = require('../validation/signup');

const User = require('../models/User')
users.use(cors())
process.env.SECRET_KEY = 'secret'
const dbRoute = "mongodb://mkm321:qAzW((sXeDc0@@ds137255.mlab.com:37255/mydb";
mongoose.connect(
    dbRoute, { useNewUrlParser: true }
);

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"))

users.post('/signup', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    })
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
            department: req.body.department
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    });
});


users.post('/studentlogin', (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    })
        .then(user => {
            if (user) {
                if (!user.email == email && !user.password == password) {
                    res.json({ error: 'Invalid Id or Password' })
                }
                else {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        const payload = {
                            _id: user._id,
                            name: user.name,
                            email: user.email
                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.send(token)
                    }
                    else {
                        res.json({ error: 'User does not exist' })
                    }
                }
            }
        })
        .catch(err => {
            res.send(err)
        })
})
// users.get('/profile', (req, res) => {
//     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
//     UserfindOne({
//         _id: decoded._id
//     })
//         .then(user => {
//             if (user) {
//                 res.json(user)
//             }
//             else {
//                 res.send('User does not exist')
//             }
//         })
//         .catch(err => {
//             res.send(err)
//         })
// })
module.exports = users