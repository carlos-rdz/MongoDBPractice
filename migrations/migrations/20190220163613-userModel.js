var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  up(db) {
    return mongoose.model('User', new Schema({
      fname: {
          type: String
      },
      lname: {
          type: String
      },
      email: {
          type: String,
          unique: true
      },
      password: {
          type: String
      },
      usertype: {
          type: String
      }
  }, {
          timestamps: true
      }));
  },

  down(db) {
  }
};
