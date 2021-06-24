const mongoose = require("mongoose");
const { Schema } = mongoose;
const { encryptPassword } = require("../utils/encrypt");

const autoIncrement = require("mongoose-auto-increment");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    alias: "id",
  },

  name: {
    type: String,
    required: [true, "Name is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match:
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  },

  _password: {
    type: String,
    required: [true, "Password is required"],
  },

  img: {
    type: String,
    required: false,
  },

  role: {
    type: String,
    default: "USER_ROLE",
    enum: ["USER_ROLE", "ADMIN_ROLE"],
  },

  status: {
    type: Boolean,
    default: true,
  },

  google: {
    type: Boolean,
    default: true,
  },
});

userSchema.plugin(autoIncrement.plugin, "User");
userSchema.plugin(uniqueValidator);

userSchema
  .virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (value) {
    this._password = encryptPassword(value);
  });

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject._password;
  return userObject;
};

module.exports = mongoose.model("User", userSchema);
