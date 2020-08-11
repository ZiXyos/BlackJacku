const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({


    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }

});

module.exports = Card = mongoose.Schema("table", tableSchema);