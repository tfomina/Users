const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = require("./post");

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: "Name must be longer then 2 characters.",
    },
    required: [true, "Name is required."],
  },
  postCount: Number,
  post: [PostSchema],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
