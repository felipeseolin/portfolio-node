const express = require("express");
const routes = express.Router();

const PortfolioController = require("./controllers/PortfolioController");
const BiographyController = require("./controllers/BiographyController");
const CVController = require("./controllers/CVController");
const DevelopedActivityController = require("./controllers/DevelopedActivityController");
const FormationController = require("./controllers/FormationController");
const InterestController = require("./controllers/InterestController");
const LanguageController = require("./controllers/LanguageController");
const MiniBiographyController = require("./controllers/MiniBiographyController");
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
routes.get("/portfolio", BiographyController.index);
routes.post("/portfolio", BiographyController.store);
routes.get("/portfolio/:id", BiographyController.show);
routes.put("/portfolio/:id", BiographyController.update);
routes.delete("/portfolio/:id", BiographyController.destroy);
// CV
routes.get("/portfolio", CVController.index);
routes.post("/portfolio", CVController.store);
routes.get("/portfolio/:id", CVController.show);
routes.put("/portfolio/:id", CVController.update);
routes.delete("/portfolio/:id", CVController.destroy);
// Atividades Desenvolvidas
routes.get("/portfolio", DevelopedActivityController.index);
routes.post("/portfolio", DevelopedActivityController.store);
routes.get("/portfolio/:id", DevelopedActivityController.show);
routes.put("/portfolio/:id", DevelopedActivityController.update);
routes.delete("/portfolio/:id", DevelopedActivityController.destroy);
// Formações
routes.get("/portfolio", FormationController.index);
routes.post("/portfolio", FormationController.store);
routes.get("/portfolio/:id", FormationController.show);
routes.put("/portfolio/:id", FormationController.update);
routes.delete("/portfolio/:id", FormationController.destroy);
// Interesses
routes.get("/portfolio", InterestController.index);
routes.post("/portfolio", InterestController.store);
routes.get("/portfolio/:id", InterestController.show);
routes.put("/portfolio/:id", InterestController.update);
routes.delete("/portfolio/:id", InterestController.destroy);
// Idiomas
routes.get("/portfolio", LanguageController.index);
routes.post("/portfolio", LanguageController.store);
routes.get("/portfolio/:id", LanguageController.show);
routes.put("/portfolio/:id", LanguageController.update);
routes.delete("/portfolio/:id", LanguageController.destroy);
// Mini Biografia
routes.get("/portfolio", MiniBiographyController.index);
routes.post("/portfolio", MiniBiographyController.store);
routes.get("/portfolio/:id", MiniBiographyController.show);
routes.put("/portfolio/:id", MiniBiographyController.update);
routes.delete("/portfolio/:id", MiniBiographyController.destroy);
// Imagem de perfil
routes.get("/portfolio", ProfilePictureController.index);
routes.post("/portfolio", ProfilePictureController.store);
routes.get("/portfolio/:id", ProfilePictureController.show);
routes.put("/portfolio/:id", ProfilePictureController.update);
routes.delete("/portfolio/:id", ProfilePictureController.destroy);
// Contato profissional
routes.get("/portfolio", ProfissionContactController.index);
routes.post("/portfolio", ProfissionContactController.store);
routes.get("/portfolio/:id", ProfissionContactController.show);
routes.put("/portfolio/:id", ProfissionContactController.update);
routes.delete("/portfolio/:id", ProfissionContactController.destroy);
// Projetos
routes.get("/portfolio", ProjectController.index);
routes.post("/portfolio", ProjectController.store);
routes.get("/portfolio/:id", ProjectController.show);
routes.put("/portfolio/:id", ProjectController.update);
routes.delete("/portfolio/:id", ProjectController.destroy);
// Habilidades
routes.get("/portfolio", SkillController.index);
routes.post("/portfolio", SkillController.store);
routes.get("/portfolio/:id", SkillController.show);
routes.put("/portfolio/:id", SkillController.update);
routes.delete("/portfolio/:id", SkillController.destroy);
// Links
routes.get("/portfolio", SocialLinkController.index);
routes.post("/portfolio", SocialLinkController.store);
routes.get("/portfolio/:id", SocialLinkController.show);
routes.put("/portfolio/:id", SocialLinkController.update);
routes.delete("/portfolio/:id", SocialLinkController.destroy);

module.exports = routes;