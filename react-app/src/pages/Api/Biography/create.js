import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import {baseUrl} from "../../../services/api";

const BiographyCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova biografia</h1>

            <form action={baseUrl + '/biography'} method="post">
                <Textarea id="name" name="name" classes="textarea" rows="4" required="required">
                    Biografia
                </Textarea>
                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default BiographyCreate;
