import React, {Component} from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import api, {baseUrl} from "../../../services/api";

class MiniBiographyCreate extends Component {
    state = {
        "id": '',
        "minibiography": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.load();
        }
    }

    load = async () => {
        const response = await api.get(`/minibiography/${this.props.match.params.id}`);
        this.setState({minibiography: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/minibiography/${this.props.match.params.id}`, formData);
    };

    render() {

        const {id, minibiography} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Nova mini biografia</h1>

                    <form action={baseUrl + '/minibiography'} method="post">
                        <Textarea id="text" name="text" classes="textarea" rows="4" required="required"
                                  value={minibiography.text}>
                            Descrição
                        </Textarea>

                        <button id="submit" className="btn" type={id ? 'button' : 'submit'}
                                onClick={id ? this.update : ''}>Salvar</button>
                    </form>
                </Section>
            </>
        );
    }
}

export default MiniBiographyCreate;
