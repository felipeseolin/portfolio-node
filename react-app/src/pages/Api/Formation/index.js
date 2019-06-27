import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Formation extends Component {

    state = {
        "formations": [],
    };

    componentDidMount() {
        this.loadFormations();
    }

    loadFormations = async () => {
        const response = await api.get('/formation');
        this.setState({formations: response.data});
    };

    render() {

        const {formations} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Formações</h1>

                    <section id="data">
                        {formations.map(formation => (
                            <ListData title={formation.institution}
                                      editdel={`#/api/formation/${formation._id}`}
                                      key={formation._id}
                            >
                                <p>
                                    <b>Data inicial:</b>
                                    {formation.initialDate}
                                </p>
                                <p>
                                    <b>Data final:</b>
                                    {formation.finalDate}
                                </p>
                                <p>
                                    <b>Descrição:</b>
                                    {formation.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Formation;
