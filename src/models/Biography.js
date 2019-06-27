const mongoose = require("mongoose");

const BiographySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Biography", BiographySchema);