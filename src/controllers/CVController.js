const mongoose = require("mongoose");
const CV = require("../models/CV");

class CVController {
    async index(req, res) {
        const cvs = await CV.find();
        return res.json(cvs);
    }
    async store(req, res) {
        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        const path = req.files.path;
        const fullpath = `uploads/${path.name}`;
        path.mv(fullpath, function (err) {
            if (err)
                return res.status(500).send(err);
        });

        const body = {
            "path": fullpath,
            "text": req.body.text
        };
        const cv = await CV.create(body);
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