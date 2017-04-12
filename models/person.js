var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds047325.mongolab.com:47325/username');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : String,
  commet  : String
});
module.exports = mongoose.model('Person', personSchema);
