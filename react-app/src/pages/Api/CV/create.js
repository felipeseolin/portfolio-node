import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const CVCreate = () => (
    <>
        <Section classes="section">
            <h1>Novo currículo</h1>

            <form action={baseUrl + '/cv'} method="post" encType="multipart/form-data">
                <Input inputId="path" classes="input" type="file" required="required">Currículo</Input>
                <Textarea id="text" name="description" classes="textarea" rows="4">
                    Descrição
                </Textarea>
                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default CVCreate;
