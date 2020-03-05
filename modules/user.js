const mongoose = require('mongoose');
const nanoid = require('nanoid');
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

newSchema.methods.generateToken = function (cb) {
    this.token = nanoid();
};


const User = mongoose.model('user', newSchema);

module.exports = User;