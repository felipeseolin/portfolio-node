const express = require("express");
const routes = express.Router();
const fileUpload = require('express-fileupload');

const PortfolioController = require("./controllers/PortfolioController");
const BiographyController = require("./controllers/BiographyController");
const CVController = require("./controllers/CVController");
const DevelopedActivityController = require("./controllers/DevelopedActivityController");
const FormationController = require("./controllers/FormationController");
const InterestController = require("./controllers/InterestController");
const LanguageController = require("./controllers/LanguageController");
const MiniBiographyController = require("./controllers/MiniBiographyController");
const MoreInfoController = require("./controllers/MoreInfoController");
const ProfilePictureController = require("./controllers/ProfilePictureController");
const ProfissionContactController = require("./controllers/ProfissionContactController");
const ProjectController = require("./controllers/ProjectController");
const SkillController = require("./controllers/SkillController");
const SocialLinkController = require("./controllers/SocialLinkController");

// Portfolio
routes.get("/portfolio", PortfolioController.index);
routes.post("/portfolio", PortfolioController.store);
routes.get("/portfolio/:id", PortfolioController.show);
routes.put("/portfolio/:id", PortfolioController.update);
routes.delete("/portfolio/:id", PortfolioController.destroy);
// Biografia
routes.get("/biography", BiographyController.index);
routes.post("/biography", BiographyController.store);
routes.get("/biography/:id", BiographyController.show);
routes.put("/biography/:id", BiographyController.update);
routes.delete("/biography/:id", BiographyController.destroy);
// CV
routes.get("/cv", CVController.index);
routes.post("/cv", CVController.store);
routes.get("/cv/:id", CVController.show);
routes.put("/cv/:id", CVController.update);
routes.delete("/cv/:id", CVController.destroy);
// Atividades Desenvolvidas
routes.get("/developedActivity", DevelopedActivityController.index);
routes.post("/developedActivity", DevelopedActivityController.store);
routes.get("/developedActivity/:id", DevelopedActivityController.show);
routes.put("/developedActivity/:id", DevelopedActivityController.update);
routes.delete("/developedActivity/:id", DevelopedActivityController.destroy);
// Formações
routes.get("/formation", FormationController.index);
routes.post("/formation", FormationController.store);
routes.get("/formation/:id", FormationController.show);
routes.put("/formation/:id", FormationController.update);
routes.delete("/formation/:id", FormationController.destroy);
// Interesses
routes.get("/interest", InterestController.index);
routes.post("/interest", InterestController.store);
routes.get("/interest/:id", InterestController.show);
routes.put("/interest/:id", InterestController.update);
routes.delete("/interest/:id", InterestController.destroy);
// Idiomas
routes.get("/language", LanguageController.index);
routes.post("/language", LanguageController.store);
routes.get("/language/:id", LanguageController.show);
routes.put("/language/:id", LanguageController.update);
routes.delete("/language/:id", LanguageController.destroy);
// Mini Biografia
routes.get("/minibiography", MiniBiographyController.index);
routes.post("/minibiography", MiniBiographyController.store);
routes.get("/minibiography/:id", MiniBiographyController.show);
routes.put("/minibiography/:id", MiniBiographyController.update);
routes.delete("/minibiography/:id", MiniBiographyController.destroy);
// Maiores Informações
routes.get("/moreinfo", MoreInfoController.index);
routes.post("/moreinfo", MoreInfoController.store);
routes.get("/moreinfo/:id", MoreInfoController.show);
routes.put("/moreinfo/:id", MoreInfoController.update);
routes.delete("/moreinfo/:id", MoreInfoController.destroy);
// Imagem de perfil
routes.get("/profilepicture", ProfilePictureController.index);
routes.post("/profilepicture", ProfilePictureController.store);
routes.get("/profilepicture/:id", ProfilePictureController.show);
routes.put("/profilepicture/:id", ProfilePictureController.update);
routes.delete("/profilepicture/:id", ProfilePictureController.destroy);
// Contato profissional
routes.get("/profissioncontact", ProfissionContactController.index);
routes.post("/profissioncontact", ProfissionContactController.store);
routes.get("/profissioncontact/:id", ProfissionContactController.show);
routes.put("/profissioncontact/:id", ProfissionContactController.update);
routes.delete("/profissioncontact/:id", ProfissionContactController.destroy);
// Projetos
routes.get("/project", ProjectController.index);
routes.post("/project", ProjectController.store);
routes.get("/project/:id", ProjectController.show);
routes.put("/project/:id", ProjectController.update);
routes.delete("/project/:id", ProjectController.destroy);
// Habilidades
routes.get("/skill", SkillController.index);
routes.post("/skill", SkillController.store);
routes.get("/skill/:id", SkillController.show);
routes.put("/skill/:id", SkillController.update);
routes.delete("/skill/:id", SkillController.destroy);
// Links
routes.get("/link", SocialLinkController.index);
routes.post("/link", SocialLinkController.store);
routes.get("/link/:id", SocialLinkController.show);
routes.put("/link/:id", SocialLinkController.update);
routes.delete("/link/:id", SocialLinkController.destroy);

routes.get("/con")

module.exports = routes;
