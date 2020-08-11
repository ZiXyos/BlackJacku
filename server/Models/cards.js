const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema({

    value: {
        type: Number,
        required: true
    },
    sign: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        required: true
    },
});



module.exports = Card = mongoose.Schema("card", tableSchema);