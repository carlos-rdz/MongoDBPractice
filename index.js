
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected!")
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Customer = mongoose.model('Customer', new Schema({
  author: ObjectId,
  fname: String,
  lname: String
}));

const Tests = mongoose.model("Tests", new Schema ({
  string1 : String,
  string2 : String
}))

// const Test2 = new Tests({string1 : 'test', string2: 'test2'})
// Test2.save()

// Test.find({string1 : "test"}, 'string2')
// .then(console.log)

// mongoose.disconnect();