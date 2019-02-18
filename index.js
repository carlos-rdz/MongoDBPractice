
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

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



// Customer.collection.insertOne({
//   fname : "John",
//   lname: "Doe"  
// })

Customer.find({fname : "John"}, 'lname')
.then(console.log)

// Customer.collection.remove({
//   fname : "John Doe"
// })