const mongoose = require("mongoose");
const { Schema } = mongoose;
const autoIncrement = require("mongoose-auto-increment");
const { encryptPassword } = require("../utils/encrypt");

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

userSchema
  .virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (value) {
    this._password = encryptPassword(value);
  });

module.exports = mongoose.model("User", userSchema);
