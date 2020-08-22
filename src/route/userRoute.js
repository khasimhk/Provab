import {register,getUser} from '../controllers/userController';
import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: './images/',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
})
module.exports = function (app) {
  app.post('/users', upload.single('profile'),register)
  app.get('/users',getUser)
};
