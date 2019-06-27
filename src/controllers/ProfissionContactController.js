const mongoose = require("mongoose");
const ProfissionContact = require("../models/ProfissionContact");

class ProfissionContactController {
    async index(req, res) {
        const profissionContacts = await ProfissionContact.find();
        return res.json(profissionContacts);
    }
    async store(req, res) {
        const profissionContact = await ProfissionContact.create(req.body);
        return res.json(profissionContact);
    }
    async show(req, res) {
        const profissionContact = await ProfissionContact.findById(req.params.id);
        return res.json(profissionContact);
    }
    async update(req, res) {
        const profissionContact = await ProfissionContact.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(profissionContact);
    }
    async destroy(req, res) {
        await ProfissionContact.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new ProfissionContactController();