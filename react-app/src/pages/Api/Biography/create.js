import React, {Component} from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import api, {baseUrl} from "../../../services/api";
import Input from "../../../components/Input";

class BiographyCreate extends Component {
    state = {
        "id": '',
        "biography": '',
        "value": ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.loadLanguage();
        }
    }

    loadLanguage = async () => {
        const response = await api.get(`/biography/${this.props.match.params.id}`);
        this.setState({biography: response.data});
        this.setState({value: response.data.name});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/biography/${this.props.match.params.id}`, formData);
    };

    render() {
        const {biography, id} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Nova biografia</h1>

                    <form action={baseUrl + '/biography'} method="post">
                        <Textarea id="name" name="name" classes="textarea" rows="4" required="required"
                                  value={biography ? biography.name : ''}>
                            Biografia
                        </Textarea>
                        <button id="submit" className="btn" type={id ? 'button' : 'submit'}
                                onClick={id ? this.update : ''}
                        >Salvar</button>
                    </form>
                </Section>
            </>
        );
    }
}

export default BiographyCreate;
