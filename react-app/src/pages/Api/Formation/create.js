import React, {Component} from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import api, {baseUrl} from "../../../services/api";
import Input from "../../../components/Input";

class FormationCreate extends Component {

    state = {
        "id": '',
        "formation": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.loadLanguage();
        }
    }

    loadLanguage = async () => {
        const response = await api.get(`/formation/${this.props.match.params.id}`);
        this.setState({formation: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/formation/${this.props.match.params.id}`, formData);
    };

    render() {

        const {id, formation} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Nova Formação</h1>

                    <form action={baseUrl + '/formation'} method="post">
                        <Input inputId="institution" classes="input" type="text" required="required"
                               value={formation.institution}>
                            Instituição
                        </Input>
                        <Input inputId="initialDate" classes="input" type="text" required="required"
                               value={formation.initialDate}>
                            Data Inicial
                        </Input>
                        <Input inputId="finalDate" classes="input" type="text" value={formation.finalDate}>
                            Data Final
                        </Input>
                        <Textarea id="description" name="description" classes="textarea" rows="4"
                                  value={formation.description}
                        >
                            Descrição
                        </Textarea>
                        <button id="submit" className="btn" type={id ? 'button' : 'submit'}
                                onClick={id ? this.update : ''}>
                            Salvar
                        </button>
                    </form>
                </Section>
            </>
        );
    }
}

export default FormationCreate;
