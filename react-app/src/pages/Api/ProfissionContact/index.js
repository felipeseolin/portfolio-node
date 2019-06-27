import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class ProfissionContact extends Component {

    state = {
        "profissionContacts": [],
    };

    componentDidMount() {
        this.loadprofissionContacts();
    }

    loadprofissionContacts = async () => {
        const response = await api.get('/profissionContact');
        this.setState({profissionContacts: response.data});
    };

    render() {

        const {profissionContacts} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Contatos com a profissão</h1>

                    <section id="data">
                        {profissionContacts.map(profissionContact => (
                            <ListData title={profissionContact.name}
                                      editdel={`#/api/profissioncontact/${profissionContact._id}`}
                                      key={profissionContact._id}
                            >
                                <p>
                                    {profissionContact.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default ProfissionContact;
