const mongoose = require("mongoose");
const CV = require("../models/CV");

class CVController {
    async index(req, res) {
        const cvs = await CV.find();
        return res.json(cvs);
    }
    async store(req, res) {
        const cv = await CV.create(req.body);
        return res.json(cv);
    }
    async show(req, res) {
        const cv = await CV.findById(req.params.id);
        return res.json(cv);
    }
    async update(req, res) {
        const cv = await CV.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(cv);
    }
    async destroy(req, res) {
        await CV.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new CVController();