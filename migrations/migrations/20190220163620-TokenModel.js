var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  up(db) {

    return mongoose.model('Token', new Schema({
      email: {
          type: String,
          unique: true
      },
      token: {
          type: String
      }
  }, {
          timestamps: true
      }));

  },

  down(db) {
  }
};
