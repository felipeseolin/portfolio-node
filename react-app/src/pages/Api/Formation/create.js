import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const FormationCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova Formação</h1>

            <form action={baseUrl + '/formation'} method="post">
                <Input inputId="institution" classes="input" type="text" required="required">
                    Instituição
                </Input>
                <Input inputId="initialDate" classes="input" type="text" required="required">
                    Data Inicial
                </Input>
                <Input inputId="finalDate" classes="input" type="text">
                    Data Final
                </Input>
                <Textarea id="description" name="description" classes="textarea" rows="4">
                    Descrição
                </Textarea>
                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default FormationCreate;
