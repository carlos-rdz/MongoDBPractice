
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
const db = mongoose.connection;
const User = require('./migrations/migrations/20190220163613-userModel').up()
const Token = require('./migrations/migrations/20190220163620-TokenModel').up()
const Questions = require("./migrations/migrations/20190220163631-QuestionModel").up()


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected!")
});



User.create({fname : "Carlos2" , lname : "Test2"})

