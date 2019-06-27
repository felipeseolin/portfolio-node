const mongoose = require("mongoose");

const ProfissionContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:  true
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("ProfissionContact", ProfissionContactSchema);