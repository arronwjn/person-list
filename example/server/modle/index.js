var mongoose = require('mongoose');

var personSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    male: Number,
    email: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Person', personSchema);
