import React, {Component} from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import api, {baseUrl} from "../../../services/api";
import Input from "../../../components/Input";

class DevelopedActivityCreate extends Component {

    state = {
        "id": '',
        "developedActivity": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.loadLanguage();
        }
    }

    loadLanguage = async () => {
        const response = await api.get(`/developedActivity/${this.props.match.params.id}`);
        this.setState({developedActivity: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/developedActivity/${this.props.match.params.id}`, formData);
    };
    
    render() {

        const {id, developedActivity} = this.state;
        return (
            <>
                <Section classes="section">
                    <h1>Nova atividade desenvolvida</h1>

                    <form action={baseUrl + '/developedactivity'} method="post">
                        <Input inputId="activity" classes="input" type="text" required="required"
                            value={developedActivity.activity}>
                            Atividade
                        </Input>
                        <Textarea id="description" name="description" classes="textarea" rows="4"
                                  value={developedActivity.description}
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

export default DevelopedActivityCreate;
