import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class CV extends Component {

    state = {
        "cvs": [],
    };

    componentDidMount() {
        this.loadCvs();
    }

    loadCvs = async () => {
        const response = await api.get('/cv');
        this.setState({cvs: response.data});
    };

    render() {

        const {cvs} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Currículos</h1>

                    <section id="data">
                        {cvs.map(cv => (
                            <ListData title="Biografia"
                                      editdel={`#/api/cv/${cv._id}`}
                                      key={cv._id}
                            >
                                <p>
                                    {cv.name}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default CV;
