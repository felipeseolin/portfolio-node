const mongoose = require("mongoose");
const ProfilePicture = require("../models/ProfilePicture");

class ProfilePictureController {
    async index(req, res) {
        const profilePictures = await ProfilePicture.find();
        return res.json(profilePictures);
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
            "name": req.body.name,
            "description": req.body.description
        };
        const profilePicture = await ProfilePicture.create(body);
        return res.json(profilePicture);
    }
    async show(req, res) {
        const profilePicture = await ProfilePicture.findById(req.params.id);
        return res.json(profilePicture);
    }
    async update(req, res) {
        const profilePicture = await ProfilePicture.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(profilePicture);
    }
    async destroy(req, res) {
        await ProfilePicture.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new ProfilePictureController();