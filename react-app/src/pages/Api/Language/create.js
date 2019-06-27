import React, {Component} from 'react';
import Section from "../../../components/Section";
import api, {baseUrl} from "../../../services/api";
import Input from "../../../components/Input";

class LanguageEdit extends Component {

    state = {
        "id": null,
        "language": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.loadLanguage();
        }
    }

    loadLanguage = async () => {
        const response = await api.get(`/language/${this.props.match.params.id}`);
        this.setState({language: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/language/${this.props.match.params.id}`, formData);
    };

    render() {

        const {language, id} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Novo Idioma</h1>

                    <form action={baseUrl + '/language'} method="post">

                        <Input inputId="name" classes="input" type="text" required="required"
                            value={language ? language.name : ''}>
                            Idiomas
                        </Input>
                        <Input inputId="level" classes="input" type="text" required="required"
                            value={language ? language.level : ''}>
                            Nível de fluência
                        </Input>

                        <button id="submit" className="btn" type={id ? 'button' : 'submit'}
                                onClick={id ? this.update : ''}
                        >
                            Salvar
                        </button>
                    </form>
                </Section>
            </>
        );
    }
}

export default LanguageEdit;
