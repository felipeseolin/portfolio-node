const mongoose = require("mongoose");

const MoreInfoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("MoreInfo", MoreInfoSchema);