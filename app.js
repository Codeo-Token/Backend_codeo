const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require("./config/db");
const { PORT } = require("./config/variabelEnv");
const users = require('./routes/user');
const cors = require('cors')

const account = require('./routes/account.route');


if (!config) {
    console.log({
      error : error
    });
  }else {
    console.log ("success connected to database")
  }

const app = express();
const Port = PORT || 3000;

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/users', users);

app.use('/account', account);
 
app.get('/', function(req, res) {
    res.send('hello');
});


app.listen(Port, () => {
    console.log(`Server is running on PORT ${Port}`);
  });
  