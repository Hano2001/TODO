const mongoose = require("mongoose");
const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: [{
      id:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      },
      title:{
        type:String,
        required: true,
      },
      done:{
        type: Boolean,
        default: false,
      }
    }],
    edited: {
      type: String,
      default:""
    }
  },
  { collection: "todo" }
);

const List = (module.exports = mongoose.model("todo", listSchema));
