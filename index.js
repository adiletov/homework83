const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

const artists = require('./router/atrists');
const albums = require('./router/albums');
const tracks = require('./router/tracks');

app.use(cors());
app.use(express.json());


const run = async ()=>{
    await mongoose.connect('mongodb://localhost/playlist', {useNewUrlParser: true, useUnifiedTopology: true});
    app.use('/artists',artists );
    app.use('/albums', albums );
    app.use('/tracks', tracks);
    app.listen(port);
};


run().catch(e=> {
    console.error(e)
});