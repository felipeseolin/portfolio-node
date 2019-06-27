const mongoose = require("mongoose");

const InterestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Interest", InterestSchema);