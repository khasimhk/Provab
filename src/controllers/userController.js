import User from '../modals/User';
import bcrypt from 'bcryptjs';
import GenUniqueId from '../utils/GenerateUniqueId';
import GenPassword from '../utils/GeneratePassword';
import emailService from '../utils/EmailService';
import dotenv from 'dotenv';
dotenv.config();

/* API to register new user */
let register = async (req, res) => {
  console.log(req.file);
  const data = JSON.parse(req.body.body);
  const address = data.address;
  try {
    const fundUser = await User.findOne({email: data.email});
    if (fundUser) {
      return res.json({message: 'User alerady registered', statusCode: 403});
    }
    const password = GenPassword.password;
    const id = GenUniqueId.generateId();
    const userData = new User({
      name: data.name,
      email: data.email,
      password: bcrypt.hashSync(password, 8),
      address: address,
      loginId: id,
      profileImage: req.file.path,
    });
    await userData.save();
    var email = {
      from: process.eventNames.EMAIL,
      to: data.email,
      subject: 'Please find the Credentials',
      text: `This is ur id: ${id} and password: ${password}`,
    };
    emailService.mailer(email);
    res.send({message: 'User created successfully', statusCode: 201});
  } catch (e) {
    res.send(e);
  }
};

// Get all users
let getUser = async (req, res) => {
  try {
    const results = await User.find();
    res.send({users: results, statusCode: 200});
  } catch (e) {
    res.send(e);
  }
};

module.exports = {register, getUser};
