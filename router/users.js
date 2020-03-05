const express = require('express');
const User = require('./user');
const router = express.Router();

router.post('/', async (req,res)=>{
    const user = new User(req.body)


});

module.exports = router;