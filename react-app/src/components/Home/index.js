import React, {Component} from 'react';
import './styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from "../Section";
import api from "../../services/api";

class Home extends Component {

    state = {
        "minibios": [],
        "img": {
            backgroundImage: 'url("' + process.env.PUBLIC_URL + '/assets/imgs/me3.jpg")'
        }
    };

    componentDidMount() {
        this.loadMiniBiographies();
    }

    loadMiniBiographies = async () => {
        const response = await api.get( '/minibiography');
        this.setState({minibios: response.data});
    };

    render() {

        const { minibios } = this.state;

        return (
            <>
                <ScrollAnimation animateIn="fadeIn">
                    <Section
                        idSec="about-me"
                        classes="section flex nowrap center-all"
                    >
                        <div className="photo" style={this.state.img}></div>
                        <div>
                            <h1 className="font-blue-lagoon">Felipe Seolin Bento</h1>

                            {minibios.map(minibio => (
                                <p key={minibio._id}>
                                    {minibio.text}
                                </p>
                            ))}

                            <p>
                                Caso desejar visualizar ou baixar meu currículo (CV) é só
                                <a href={process.env.PUBLIC_URL + '/assets/pdf/CV.pdf'}
                                   target="_blank" rel="noopener noreferrer">
                                    clicar aqui
                                </a>.
                            </p>
                        </div>
                    </Section>
                </ScrollAnimation>
            </>
        );
    }
}

export default Home;
