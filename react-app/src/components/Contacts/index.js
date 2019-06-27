import React, {Component} from 'react';
import './styles.scss';
import Section from "../Section";
import Form from "../Form";
import api from "../../services/api";

class Contacts extends Component {

    state = {
      "links": [],
    };

    componentDidMount() {
        this.loadLinks();
    }

    loadLinks = async () => {
        const response = await api.get( '/link');
        this.setState({links: response.data});
    };

    render() {

        const {links} = this.state;

        return (
            <>
                <Section
                    idSec="contacts"
                    classes="section"
                    title="Fale comigo"
                    description="Sinta-se a vontade para puxar assunto comigo"
                >
                    <div className="flex row">
                        <div id="social-media" className="flex flex-column">
                            <h3 className="font-green-haze">Redes Sociais</h3>

                            <div className="flex center-all">
                                {links.map(link => (
                                    <a key={link._id} href={link.url} target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={link.iconPath} alt={link.name} title={link.name}/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <Form/>
                    </div>
                </Section>
            </>
        );
    }
}

export default Contacts;
