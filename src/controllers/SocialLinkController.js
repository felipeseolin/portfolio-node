const mongoose = require("mongoose");
const SocialLink = require("../models/SocialLink");

class SocialLinkController {
    async index(req, res) {
        const socialLinks = await SocialLink.find();
        return res.json(socialLinks);
    }
    async store(req, res) {
        const socialLink = await SocialLink.create(req.body);
        return res.json(socialLink);
    }
    async show(req, res) {
        const socialLink = await SocialLink.findById(req.params.id);
        return res.json(socialLink);
    }
    async update(req, res) {
        const socialLink = await SocialLink.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(socialLink);
    }
    async destroy(req, res) {
        await SocialLink.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new SocialLinkController();