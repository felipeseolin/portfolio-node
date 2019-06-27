const mongoose = require("mongoose");
const Formation = require("../models/Formation");

class FormationController {
    async index(req, res) {
        const formations = await Formation.find();
        return res.json(formations);
    }
    async store(req, res) {
        const formation = await Formation.create(req.body);
        return res.json(formation);
    }
    async show(req, res) {
        const formation = await Formation.findById(req.params.id);
        return res.json(formation);
    }
    async update(req, res) {
        const formation = await Formation.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(formation);
    }
    async destroy(req, res) {
        await Formation.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new FormationController();