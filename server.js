const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Users = require('./routes/Users')
const passport = require('passport');
const port = process.env.PORT || 3004;
const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI = 'mongodb://localhost:27017/ftecht_db'

mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => console.log('Mongodb connected')).catch(err => console.log(err))
app.use(passport.initialize());
app.use('/users', Users)

app.listen(port, () => console.log('Server started'))