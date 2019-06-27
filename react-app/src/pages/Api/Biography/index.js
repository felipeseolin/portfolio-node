import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Biography extends Component {

    state = {
        "biographies": [],
    };

    componentDidMount() {
        this.loadBiographies();
    }

    loadBiographies = async () => {
        const response = await api.get('/biography');
        this.setState({biographies: response.data});
    };

    render() {

        const {biographies} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Biografias</h1>

                    <section id="data">
                        {biographies.map(bio => (
                            <ListData title="Biografia"
                                      editdel={`#/api/biography/${bio._id}`}
                            >
                                <p>
                                    {bio.name}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Biography;
