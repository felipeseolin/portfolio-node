const mongoose = require("mongoose");
const Project = require("../models/Project");

class ProjectController {
    async index(req, res) {
        const projects = await Project.find();
        return res.json(projects);
    }
    async store(req, res) {
        const project = await Project.create(req.body);
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