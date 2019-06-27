const mongoose = require("mongoose");

const SocialLinkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    iconPath: {
        type: String,
        required: false
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("SocialLink", SocialLinkSchema);