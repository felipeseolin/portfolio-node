const mongoose = require("mongoose");
const DevelopedActivity = require("../models/DevelopedActivity");

class DevelopedActivityController {
    async index(req, res) {
        const developedActivities = await DevelopedActivity.find();
        return res.json(developedActivities);
    }
    async store(req, res) {
        const developedActivity = await DevelopedActivity.create(req.body);
        return res.json(developedActivity);
    }
    async show(req, res) {
        const developedActivity = await DevelopedActivity.findById(req.params.id);
        return res.json(developedActivity);
    }
    async update(req, res) {
        const developedActivity = await DevelopedActivity.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(developedActivity);
    }
    async destroy(req, res) {
        await DevelopedActivity.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new DevelopedActivityController();