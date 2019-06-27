const mongoose = require("mongoose");

const CVSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("CV", CVSchema);