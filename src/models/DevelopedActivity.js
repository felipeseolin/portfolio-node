const mongoose = require("mongoose");

const DevelopedActivitySchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: false
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("DevelopedActivity", DevelopedActivitySchema);