const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  gender: String,
  role: String
});
const UserModel = model("userss", UserSchema);

module.exports = UserModel;
