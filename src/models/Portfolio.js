const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    miniBiografy: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    interrests: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    formation: {
        type: String,
        required: true
    },
    developedActivities: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    moreInfo: {
        type: String,
        required: true
    },
    completeBiografy: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: false
    },
    instagram: {
        type: String,
        required: false
    },
    whatsapp: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
