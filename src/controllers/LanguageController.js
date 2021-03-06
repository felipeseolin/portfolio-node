const mongoose = require("mongoose");
const Language = require("../models/Language");

class LanguageController {
    async index(req, res) {
        const languages = await Language.find();
        return res.json(languages);
    }
    async store(req, res) {
        const language = await Language.create(req.body);
        return res.json(language);
    }
    async show(req, res) {
        const language = await Language.findById(req.params.id);
        return res.json(language);
    }
    async update(req, res) {
        console.log(req.body);
        const language = await Language.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(language);
    }
    async destroy(req, res) {
        await Language.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new LanguageController();