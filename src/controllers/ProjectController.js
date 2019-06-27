const mongoose = require("mongoose");
const Project = require("../models/Project");

class ProjectController {
    async index(req, res) {
        const projects = await Project.find();
        return res.json(projects);
    }
    async store(req, res) {
        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        const imgPath = req.files.imgPath;
        const fullpath = `uploads/${imgPath.name}`;
        imgPath.mv(fullpath, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        const body = {
            "imgPath": fullpath,
            "link": req.body.link,
            "description": req.body.link,
            "date": req.body.date,
            "name": req.body.name
        };

        const project = await Project.create(body);
        return res.json(project);
    }
    async show(req, res) {
        const project = await Project.findById(req.params.id);
        return res.json(project);
    }
    async update(req, res) {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(project);
    }
    async destroy(req, res) {
        await Project.findByIdAndRemove(req.params.id);
        return res.send({
            deleted: true
        });
    }
}

module.exports = new ProjectController();