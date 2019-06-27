const mongoose = require("mongoose");
const Interest = require("../models/Interest");

class InterestController {
    async index(req, res) {
        const interests = await Interest.find();
        return res.json(interests);
    }
    async store(req, res) {
        const interest = await Interest.create(req.body);
        return res.json(interest);
    }
    async show(req, res) {
        const interest = await Interest.findById(req.params.id);
        return res.json(interest);
    }
    async update(req, res) {
        const interest = await Interest.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(interest);
    }
    async destroy(req, res) {
        await Interest.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new InterestController();