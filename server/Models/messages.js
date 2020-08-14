const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  messagesSchema = new Schema({

    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      }
});

module.exports = Messages = mongoose.model("messages", messagesSchema);