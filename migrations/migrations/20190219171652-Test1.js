module.exports = {
  up(db) {
    return db.collection('tests').insertOne({string1: 'test', string2 : 'it worked!'}, function( error, result) { 
      if ( error ) console.log ( `error: ${error}` ); //info about what went wrong
      if ( result ) console.log ( `result: ${result}` ); //the _id of new object if successful
    });
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
