import React, {Component} from 'react';
import api from "../../../services/api";
import Section from "../../../components/Section";
import ListData from "../../../components/ListData";

class ProfilePicture extends Component {

    state = {
        "profilePictures": [],
    };

    componentDidMount() {
        this.loadprofilePictures();
    }

    loadprofilePictures = async () => {
        const response = await api.get('/profilePicture');
        this.setState({profilePictures: response.data});
    };

    render() {

        const {profilePictures} = this.state;

        return (
            <>
                <Section classes="section">
                    <h1>Imagens de perfil</h1>

                    <section id="data">
                        {profilePictures.map(profilePicture => (
                            <ListData title={profilePicture.name}
                                      editdel={`#/api/profilePicture/${profilePicture._id}`}
                                      key={profilePicture._id}
                            >
                                <img src={profilePicture.path} alt={profilePicture.name}/>
                                <p>
                                    {profilePicture.description}
                                </p>
                            </ListData>
                        ))}
                    </section>

                </Section>
            </>
        );
    }
}

export default ProfilePicture;
