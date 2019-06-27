const mongoose = require("mongoose");

const CVSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    }

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("CV", CVSchema);