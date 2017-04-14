var mongoose = require('mongoose');
mongoose.connect('mongodb://110219042:110219042@ds161190.mlab.com:61190/fzplace');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : String,
  commet  : String
});
module.exports = mongoose.model('Person', personSchema);
