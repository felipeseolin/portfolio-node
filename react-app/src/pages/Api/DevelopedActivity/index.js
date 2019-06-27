import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class DevelopedActivity extends Component {

    state = {
        "developedActivities": [],
    };

    componentDidMount() {
        this.loadDevelopedActivities();
    }

    loadDevelopedActivities = async () => {
        const response = await api.get('/developedActivity');
        this.setState({developedActivities: response.data});
    };

    render() {

        const {developedActivities} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Atividades Desenvolvidas</h1>

                    <section id="data">
                        {developedActivities.map(ac => (
                            <ListData title={ac.activity}
                                      editdel={`#/api/developedActivity/${ac._id}`}
                                      key={ac._id}
                            >
                                <p>
                                    {ac.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default DevelopedActivity;
