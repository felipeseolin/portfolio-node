import React, {Component} from 'react';
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";
import List from "../List";
import api from "../../services/api";

class Details extends Component {

    state = {
        "developedactivities": [],
        "formations": [],
        "interests": [],
        "languages": [],
    };

    componentDidMount() {
        this.loadDevelopedActivities();
        this.loadFormations();
        this.loadInterests();
        this.loadLanguages();
    }

    loadDevelopedActivities = async () => {
        const response = await api.get( '/developedactivity');
        this.setState({developedactivities: response.data});
    };

    loadFormations = async () => {
        const response = await api.get( '/formation');
        this.setState({formations: response.data});
    };

    loadInterests = async () => {
        const response = await api.get( '/interest');
        this.setState({interests: response.data});
    };

    loadLanguages = async () => {
        const response = await api.get( '/language');
        this.setState({languages: response.data});
    };

    render() {

        const {developedactivities, formations, interests, languages} = this.state;

        return (
            <>
                <Section
                    idSec="details"
                    classes="section"
                    title="Detalhes"
                    description="Aqui estão algumas informações a respeito de meus interesses, idiomas, formação e atividades
                desenvolvidas."
                >
                    <SubSection
                        idSubSec="interests"
                        title="Interesses"
                        description="Estes são alguns dos interesses que eu possuo atualmente:"
                    >
                        <List classes="list flex center-all">
                            {interests.map(interest => (
                                <li key={interest._id} title={interest.description}>
                                    {interest.name}
                                </li>
                            ))}
                        </List>
                    </SubSection>

                    <SubSection
                        idSubSec="languages"
                        title="Idiomas"
                        description="Estes são os idiomas que possuo conhecimento atualmente:"
                    >
                        <List classes="list flex center-all">
                            {languages.map(language => (
                                <li key={language._id}>
                                    {language.name} - {language.level}
                                </li>
                            ))}
                        </List>

                    </SubSection>

                    <SubSection
                        idSubSec="formation"
                        title="Formação"
                    >
                        {formations.map(formation => (
                            <div key={formation._id}>
                                <h4>{formation.institution}</h4>
                                <p>{formation.initialDate} - {formation.finalDate}</p>
                                <p>{formation.description}</p>
                            </div>
                        ))}
                    </SubSection>

                    <SubSection
                        idSubSec="developed-activities"
                        title="Atividades desenvolvidas"
                    >
                        <p>
                            Aqui estão listadas algumas atividades que eu desenvolvo.
                        </p>
                        <List classes="flex list">
                            {developedactivities.map(developedactivity => (
                                <li key={developedactivity._id} title={developedactivity.description}>
                                    {developedactivity.activity}
                                </li>
                            ))}
                        </List>
                    </SubSection>

                </Section>
            </>
        );
    }
}

export default Details;
