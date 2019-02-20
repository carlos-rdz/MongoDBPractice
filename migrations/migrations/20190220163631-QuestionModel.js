var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  up(db) {

    return mongoose.model('Question', new Schema({
      languageType: {
          type: String
      },
      questions: {
          question: {
              type: String
          },
          options: {
              option1: {
                  type: String
              },
              option2: {
                  type: String
              },
              option3: {
                  type: String
              },
              option4: {
                  type: String
              }
          },
          correctoption: {
              type: String
          },
      }
  }, {
          timestamps: true
      }));
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  down(db) {

  }
};
