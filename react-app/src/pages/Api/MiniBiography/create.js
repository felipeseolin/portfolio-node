import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";

const MiniBiographyCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova mini biografia</h1>

            <form action={baseUrl + '/minibiography'} method="post">
                <Textarea id="text" name="text" classes="textarea" rows="4" required="required">
                    Descrição
                </Textarea>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default MiniBiographyCreate;
