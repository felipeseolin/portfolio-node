const mongoose = require("mongoose");
const MiniBiography = require("../models/MiniBiography");

class MiniBiographyController {
    async index(req, res) {
        const miniBiographies = await MiniBiography.find();
        return res.json(miniBiographies);
    }
    async store(req, res) {
        const miniBiography = await MiniBiography.create(req.body);
        return res.json(miniBiography);
    }
    async show(req, res) {
        const miniBiography = await MiniBiography.findById(req.params.id);
        return res.json(miniBiography);
    }
    async update(req, res) {
        const miniBiography = await MiniBiography.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(miniBiography);
    }
    async destroy(req, res) {
        await MiniBiography.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new MiniBiographyController();