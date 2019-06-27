const mongoose = require("mongoose");
const MoreInfo = require("../models/MoreInfo");

class MoreInfoController {
    async index(req, res) {
        const moreInfos = await MoreInfo.find();
        return res.json(moreInfos);
    }
    async store(req, res) {
        const moreInfo = await MoreInfo.create(req.body);
        return res.json(moreInfo);
    }
    async show(req, res) {
        const moreInfo = await MoreInfo.findById(req.params.id);
        return res.json(moreInfo);
    }
    async update(req, res) {
        const moreInfo = await MoreInfo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(moreInfo);
    }
    async destroy(req, res) {
        await MoreInfo.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new MoreInfoController();