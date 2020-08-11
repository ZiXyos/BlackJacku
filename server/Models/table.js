const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({


    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }

});

module.exports = Table = mongoose.model("table", tableSchema);