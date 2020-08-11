const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: true
      },
    pseudo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
         min: 18, max: 65
    },
    id: {
        type: Number,
        default: () => {
            return '_' + Math.random().toString(36).substr(2, 9)
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.Schema("user", userSchema);