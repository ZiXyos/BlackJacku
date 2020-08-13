const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statPlayerControllerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    money:{
        type: Number,
        required: true
    },
    ratioVictoryDefeat: {
        type: Number,
        required: true
    }
});

module.exports = StatsPlayer = mongoose.model("statsPlayer", statPlayerControllerSchema);