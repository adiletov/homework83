const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
   username: {
       type: String,
       required: true,
       unique: true
   },
    password: {
       type: String,
        required: true
    },
   token: {
    type: String,
    required: true
   }
});


const User = mongoose.model('user', newSchema);

module.exports = User;