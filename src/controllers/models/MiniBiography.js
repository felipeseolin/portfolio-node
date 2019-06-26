const mongoose = require("mongoose");
const MiniBiographySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("MiniBiography", MiniBiographySchema);
