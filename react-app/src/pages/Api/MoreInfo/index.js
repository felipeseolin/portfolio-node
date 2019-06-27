import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class MoreInfo extends Component {

    state = {
        "moreInfos": [],
    };

    componentDidMount() {
        this.loadMoreInfos();
    }

    loadMoreInfos = async () => {
        const response = await api.get('/moreInfo');
        this.setState({moreInfos: response.data});
    };

    render() {

        const {moreInfos} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Maiores Informações</h1>

                    <section id="data">
                        {moreInfos.map(moreInfo => (
                            <ListData title={moreInfo.title}
                                      editdel={`#/api/moreInfo/${moreInfo._id}`}
                                      key={moreInfo._id}
                            >
                                <p>
                                    {moreInfo.text}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default MoreInfo;
