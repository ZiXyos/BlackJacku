const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    mount:{
        type: String,
        required: true
    },
    card: {
        type: String,
        required: true
    },
    mise: {
        type: Number,
        required: true
    }
});

module.exports = Player = mongoose.model("player", playerSchemnamea);