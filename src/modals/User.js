import mongoose from '../config/mongoDb';
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true,
    },
    password: {
      desc: 'user password',
      trim: true,
      type: String,
      required: true,
      select: false,
    },
    loginId: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    address: [
      {
        houseNumber: String,
        phoneNumber: Number,
        locality: String,
        city: String,
        pin: Number,
        state: String,
      },
    ],
  },
  {
    strict: true,
    versionKey: false,
    timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'},
  }
);

module.exports = mongoose.model('Users', schema);
