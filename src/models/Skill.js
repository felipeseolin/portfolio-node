const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Skill", SkillSchema);