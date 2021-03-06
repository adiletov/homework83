const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

const artists = require('./router/atrists');
const albums = require('./router/albums');
const tracks = require('./router/tracks');
const users = require('./router/users');
const track_history = require('./router/trackHistory');

app.use(cors());
app.use(express.json());


const run = async ()=>{
    await mongoose.connect('mongodb://localhost/playlist', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    app.use('/artists',artists );
    app.use('/albums', albums );
    app.use('/tracks', tracks);
    app.use('/users', users);
    app.use('/track_history', track_history);
    app.listen(port);
};


run().catch(e => {
    console.error(e)
});