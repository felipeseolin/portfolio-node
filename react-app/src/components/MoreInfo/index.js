import React, {Component} from 'react';
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";

import api from "../../services/api";

class MoreInfo extends Component {

    state = {
        "biographies": [],
        "profissioncontacts": [],
        "moreinfos": [],
    };

    componentDidMount() {
        this.loadBiography();
        this.loadProfissionContact();
        this.loadMoreInfo();
    }

    loadBiography = async () => {
        const response = await api.get( '/biography');
        this.setState({biographies: response.data});
    };

    loadProfissionContact = async () => {
        const response = await api.get( '/profissioncontact');
        this.setState({profissioncontacts: response.data});
    };

    loadMoreInfo = async () => {
        const response = await api.get( '/moreinfo');
        this.setState({moreinfos: response.data});
    };

    render() {
        const { biographies, profissioncontacts, moreinfos } = this.state;

        return (
            <>
                <Section
                    idSec="more"
                    classes="section teal font-white"
                    title="Maiores Informações"
                    description="Saiba mais a respeito da minha biografia e do meu contato com a profissão"
                >
                    <SubSection
                        idSubSec="biography"
                        title="Biografia"
                    >
                        {biographies.map(biography => (
                            <p key={biography._id}>{biography.name}</p>
                        ))}
                    </SubSection>

                    <SubSection
                        idSubSec="work-review"
                        title="Contato com a profisão"
                    >
                        {profissioncontacts.map(profission => (
                            <div key={profission._id}>
                                <h4>{profission.name}</h4>
                                <p>{profission.description}</p>
                            </div>
                        ))}
                    </SubSection>

                    {moreinfos.map(moreinfo => (
                        <SubSection
                            key={moreinfo._id}
                            idSubSec={moreinfo._id}
                            title={moreinfo.title}
                        >
                            <p>{moreinfo.text}</p>
                        </SubSection>
                    ))}

                </Section>
            </>
        );
    }
}

export default MoreInfo;
