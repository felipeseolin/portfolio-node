import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Language extends Component {

    state = {
        "languages": [],
    };

    componentDidMount() {
        this.loadLanguages();
    }

    loadLanguages = async () => {
        const response = await api.get('/language');
        this.setState({languages: response.data});
    };

    render() {

        const {languages} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Idiomas</h1>

                    <section id="data">
                        {languages.map(language => (
                            <ListData title={language.name}
                                      editdel={`#/api/language/${language._id}`}
                                      key={language._id}
                                      del={`language/${language._id}`}
                            >
                                <p>
                                    {language.level}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Language;
