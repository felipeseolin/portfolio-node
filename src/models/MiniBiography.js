const mongoose = require("mongoose");

const MiniBiographySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("MiniBiography", MiniBiographySchema);
