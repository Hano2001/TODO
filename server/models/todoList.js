const mongoose = require("mongoose");
const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
  { collection: "todo" }
);

const List = (module.exports = mongoose.model("todo", listSchema));
