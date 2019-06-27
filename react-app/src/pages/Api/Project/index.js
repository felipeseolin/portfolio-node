import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Project extends Component {

    state = {
        "projects": [],
    };

    componentDidMount() {
        this.loadprojects();
    }

    loadprojects = async () => {
        const response = await api.get('/project');
        this.setState({projects: response.data});
    };

    render() {

        const {projects} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Projetos</h1>

                    <section id="data">
                        {projects.map(project => (
                            <ListData title={project.name}
                                      editdel={`#/api/project/${project._id}`}
                                      key={project._id}
                            >
                                <p>
                                    <b>Data: </b>
                                    {project.date}
                                </p>
                                <p>
                                    <b>Descrição: </b>
                                    {project.description}
                                </p>
                                <p>
                                    <b>Link: </b>
                                    <a href={project.link} target="_blank">
                                        {project.link}
                                    </a>
                                </p>
                                <p>
                                    <img src={project.imgPath} alt={project.name} className="works-imgs"/>
                                </p>
                                <p>
                                    <b>Data: </b>
                                    {project.date}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Project;
