const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Language", LanguageSchema);