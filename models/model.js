const mongoose = require("mongoose")
const Schema = mongoose.Schema

const soiceSchema = new Schema({
    title: {
        type: String,

     required: "Input Title Please"
  },
    time: {
        type: Number,
     required: "Input contents please"
  },

  text: {
   type: String,
   required: "Input contents please"
   }
})

const POST_title = mongoose.model("Post",soiceSchema)

module.exports = POST_title