const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pharmaManagerSchema = new Schema({
  rs: { type: String  },
  cp: {  type: String  },
  recordid: {  type: String  }
 },
{
    collection: 'pharmaManager'
});

module.exports = mongoose.model('Pharma', pharmaManagerSchema);
