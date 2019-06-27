import React, {Component} from 'react';
import './styles.scss';
import Section from "../Section";
import List from "../List";
import api from "../../services/api";

class Skills extends Component {

    state = {
        "skills": [],
    };

    componentDidMount() {
        this.loadSkills();
    }

    loadSkills = async () => {
        const response = await api.get( '/skill');
        this.setState({skills: response.data});
    };

    render() {

        const {skills} = this.state;

        return(
            <>
                <Section
                    idSec="skills"
                    title="Habilidades"
                    description="Abaixo estão listadas algumas de minhas habilidades."
                    classes="green-haze font-white section"
                >
                    <List classes="flex center list">
                        {skills.map(skill => (
                            <li key={skill._id} title={skill.description}>
                                {skill.name}
                            </li>
                        ))}
                    </List>
                </Section>
            </>
        );
    }
}

export default Skills;
