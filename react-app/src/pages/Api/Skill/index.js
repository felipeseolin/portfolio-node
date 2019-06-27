import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Skill extends Component {

    state = {
        "skills": [],
    };

    componentDidMount() {
        this.loadskills();
    }

    loadskills = async () => {
        const response = await api.get('/skill');
        this.setState({skills: response.data});
    };

    render() {

        const {skills} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Habilidades</h1>

                    <section id="data">
                        {skills.map(skill => (
                            <ListData title={skill.name}
                                      editdel={`#/api/skill/${skill._id}`}
                                      key={skill._id}
                            >
                                <p>
                                    {skill.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Skill;
