import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class Interest extends Component {

    state = {
        "interests": [],
    };

    componentDidMount() {
        this.loadinterests();
    }

    loadinterests = async () => {
        const response = await api.get('/interest');
        this.setState({interests: response.data});
    };

    render() {

        const {interests} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Interesses</h1>

                    <section id="data">
                        {interests.map(interest => (
                            <ListData title={interest.name}
                                      editdel={`#/api/interest/${interest._id}`}
                                      key={interest._id}
                            >
                                <p>
                                    {interest.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default Interest;
