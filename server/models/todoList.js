const mongoose = require("mongoose");
const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { collection: "todo" }
);

const List = (module.exports = mongoose.model("todo", listSchema));
