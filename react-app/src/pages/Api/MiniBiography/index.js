import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class MiniBiography extends Component {

    state = {
        "miniBiographys": [],
    };

    componentDidMount() {
        this.loadMiniBiographys();
    }

    loadMiniBiographys = async () => {
        const response = await api.get('/miniBiography');
        this.setState({miniBiographys: response.data});
    };

    render() {

        const {miniBiographys} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Currículos</h1>

                    <section id="data">
                        {miniBiographys.map(miniBiography => (
                            <ListData title="Mini Biografia"
                                      editdel={`#/api/miniBiography/${miniBiography._id}`}
                                      key={miniBiography._id}
                            >
                                <p>
                                    {miniBiography.text}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default MiniBiography;
