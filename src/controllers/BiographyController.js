const mongoose = require("mongoose");
const Biography = require("../models/Biography");

class BiographyController {
    async index(req, res) {
        const biographies = await Biography.find();
        return res.json(biographies);
    }
    async store(req, res) {
        console.log(req.body);
        const biography = await Biography.create(req.body);
        return res.json(biography);
    }
    async show(req, res) {
        const biography = await Biography.findById(req.params.id);
        return res.json(biography);
    }
    async update(req, res) {
        const biography = await Biography.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(biography);
    }
    async destroy(req, res) {
        await Biography.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new BiographyController();