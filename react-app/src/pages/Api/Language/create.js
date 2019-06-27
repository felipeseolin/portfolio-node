import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const LanguageCreate = () => (
    <>
        <Section classes="section">
            <h1>Novo Idioma</h1>

            <form action={baseUrl + '/language'} method="post">
                <Input inputId="name" classes="input" type="text" required="required">
                    Idioma
                </Input>
                <Input inputId="level" classes="input" type="text" required="required">
                    Nível de fluencia
                </Input>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default LanguageCreate;
