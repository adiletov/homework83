const path = require('path');
const multer = require('multer');
const nanoid = require('nanoid');



module.exports={
  storage:  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname ,'public/uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, nanoid() + path.extname(file.originalname))
    }
  })
};
