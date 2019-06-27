import React, {Component} from 'react';
import Section from "../../../components/Section";
import Textarea from "../../../components/Textarea";
import api, {baseUrl} from "../../../services/api";
import Input from "../../../components/Input";

class MoreInfoCreate extends Component {

    state = {
        "id": '',
        "moreinfo": '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id !== 'new') {
            this.setState({id: id});
            this.load();
        }
    }

    load = async () => {
        const response = await api.get(`/moreinfo/${this.props.match.params.id}`);
        this.setState({moreinfo: response.data});
    };

    update = async () => {
        const formData = new FormData(document.querySelector('form'));
        const response = await api.put(`/moreinfo/${this.props.match.params.id}`, formData);
    };
    
    render() {

        const {id, moreinfo} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Nova subseção de maiores informações</h1>

                    <form action={baseUrl + '/moreinfo'} method="post">
                        <Input inputId="title" classes="input" type="text" required="required" value={moreinfo.title}>
                            Título
                        </Input>
                        <Textarea id="text" name="text" classes="textarea" rows="4" required="required"
                            value={moreinfo.text}>
                            Texto
                        </Textarea>

                        <button id="submit" className="btn" type={id ? 'button' : 'submit'}
                                onClick={id ? this.update : ''}>Salvar</button>
                    </form>
                </Section>
            </>
        );
    }
}

export default MoreInfoCreate;
