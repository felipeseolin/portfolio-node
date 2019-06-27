import React, {Component} from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import api, { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

class InterestCreate extends Component {
    
    state = {
        "id": '',
        "interest": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.load();
        }
    }

    load = async () => {
        const response = await api.get(`/interest/${this.props.match.params.id}`);
        this.setState({interest: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/interest/${this.props.match.params.id}`, formData);
    };
    
    render () {
        
        const {id, interest} = this.state;
        return (
            <>
                <Section classes="section">
                    <h1>Nova interesse</h1>

                    <form action={baseUrl + '/interest'} method="post">
                        <Input inputId="name" classes="input" type="text" required="required" value={interest.name}>
                            Nome
                        </Input>
                        <Textarea id="description" name="description" classes="textarea" rows="4"
                            value={interest.description}>
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

export default InterestCreate;
