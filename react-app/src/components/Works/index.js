import React, {Component} from "react";
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";
import api from "../../services/api";

class Works extends Component {

    state = {
        "projects": [],
    };

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = async () => {
        const response = await api.get('/project');
        this.setState({projects: response.data});
    };

    formatDate = (str) => {
        const date = new Date(str);
        return `${date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()}`;
    };

    render() {

        const {projects} = this.state;

        return (
            <>
                <Section
                    idSec="works"
                    classes="section"
                    title="Trabalhos Desenvolvidos"
                    description="Aqui estão alguns dos trabalhos que já desenvolvi e também os que estou desenvolvendo."
                >
                    {projects.map(project => (
                        <a href={project.link} target="_blank" key={project._id}
                           rel="noopener noreferrer"
                        >
                            <h3>{project.name}</h3>
                            <p>{this.formatDate(project.date)}</p>
                            <p>{project.description}</p>
                            <img src={project.imgPath} alt={project.name} className="works-imgs"/>
                        </a>
                    ))}
                </Section>
            </>
        )
    }
}

export default Works;
