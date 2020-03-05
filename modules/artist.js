const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    description:{
        type: String
    }
});

const Artist = mongoose.model('Artist', newSchema);

module.exports = Artist;