import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";

import Main from "../pages/Main";
import Blog from "../pages/Blog";
import Api from "../pages/Api";
// Biography
import Biography from "../pages/Api/Biography";
import BiographyCreate from "../pages/Api/Biography/create";
// CV
import CV from "../pages/Api/CV";
import CVCreate from "../pages/Api/CV/create";
// DevelopedActivity
import DevelopedActivity from "../pages/Api/DevelopedActivity";
import DevelopedActivityCreate from "../pages/Api/DevelopedActivity/create";
// Formation
import Formation from "../pages/Api/Formation";
import FormationCreate from "../pages/Api/Formation/create";
//Interest
import Interest from "../pages/Api/Interest";
import InterestCreate from "../pages/Api/Interest/create";
// Language
import Language from "../pages/Api/Language";
import LanguageCreate from "../pages/Api/Language/create";
// MiniBiography
import MiniBiography from "../pages/Api/MiniBiography";
import MiniBiographyCreate from "../pages/Api/MiniBiography/create";
// MoreInfo
import MoreInfo from "../pages/Api/MoreInfo";
import MoreInfoCreate from "../pages/Api/MoreInfo/create";
// ProfilePicture
import ProfilePicture from "../pages/Api/ProfilePicture";
import ProfilePictureCreate from "../pages/Api/ProfilePicture/create";
// ProfissionContact
import ProfissionContact from "../pages/Api/ProfissionContact";
import ProfissionContactCreate from "../pages/Api/ProfissionContact/create";
// Project
import Project from "../pages/Api/Project";
import ProjectCreate from "../pages/Api/Project/create";
// Skill
import Skill from "../pages/Api/Skill";
import SkillCreate from "../pages/Api/Skill/create";
// SocialLink
import SocialLink from "../pages/Api/SocialLink";
import SocialLinkCreate from "../pages/Api/SocialLink/create";

class Router extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Route exact path="#" component={Main}/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/blog/:id" component={Blog}/>
                {/* API */}
                <Route exact path="/api" component={Api}/>
                {/* Biography pages */}
                <Route exact path="/api/biography" component={Biography}/>
                <Route exact path="/api/biography/create" component={BiographyCreate}/>
                {/* CV */}
                <Route exact path="/api/cv/" component={CV}/>
                <Route exact path="/api/cv/create" component={CVCreate}/>
                {/* DevelopedActivity */}
                <Route exact path="/api/developedActivity" component={DevelopedActivity}/>
                <Route exact path="/api/developedActivity/create" component={DevelopedActivityCreate}/>
                {/* Formation */}
                <Route exact path="/api/formation" component={Formation}/>
                <Route exact path="/api/formation/create" component={FormationCreate}/>
                {/* Interest */}
                <Route exact path="/api/interest" component={Interest}/>
                <Route exact path="/api/interest/create" component={InterestCreate}/>
                {/* Language */}
                <Route exact path="/api/language" component={Language}/>
                <Route exact path="/api/language/create" component={LanguageCreate}/>
                {/* MiniBiography */}
                <Route exact path="/api/minibiography" component={MiniBiography}/>
                <Route exact path="/api/minibiography/create" component={MiniBiographyCreate}/>
                {/* MoreInfo */}
                <Route exact path="/api/moreinfo" component={MoreInfo}/>
                <Route exact path="/api/moreinfo/create" component={MoreInfoCreate}/>
                {/* ProfilePicture */}
                <Route exact path="/api/profilepicture" component={ProfilePicture}/>
                <Route exact path="/api/profilepicture/create" component={ProfilePictureCreate}/>
                {/* ProfissionContact */}
                <Route exact path="/api/profissioncontact" component={ProfissionContact}/>
                <Route exact path="/api/profissioncontact/create" component={ProfissionContactCreate}/>
                {/* Project */}
                <Route exact path="/api/project/" component={Project}/>
                <Route exact path="/api/project/create" component={ProjectCreate}/>
                {/* Skill */}
                <Route exact path="/api/skill" component={Skill}/>
                <Route exact path="/api/skill/create" component={SkillCreate}/>
                {/* SocialLink */}
                <Route exact path="/api/link" component={SocialLink}/>
                <Route exact path="/api/link/create" component={SocialLinkCreate}/>
            </HashRouter>
        );
    }
}

export default Router;
