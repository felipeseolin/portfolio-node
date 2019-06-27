import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class SocialLink extends Component {

    state = {
        "socialLinks": [],
    };

    componentDidMount() {
        this.loadsocialLinks();
    }

    loadsocialLinks = async () => {
        const response = await api.get('/link');
        this.setState({socialLinks: response.data});
    };

    render() {

        const {socialLinks} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Links</h1>

                    <section id="data">
                        {socialLinks.map(socialLink => (
                            <ListData title={socialLink.name}
                                      editdel={`#/api/socialLink/${socialLink._id}`}
                                      key={socialLink._id}
                            >
                                <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
                                    {socialLink.url}
                                </a>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default SocialLink;
