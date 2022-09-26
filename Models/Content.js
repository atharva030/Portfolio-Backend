const mongoose = require("mongoose");
const ContentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  project: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
