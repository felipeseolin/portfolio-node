import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const ProfissionContactCreate = () => (
    <>
        <Section classes="section">
            <h1>Novo contato com a profissão</h1>

            <form action={baseUrl + '/profissioncontact'} method="post">
                <Input inputId="name" classes="input" type="text" required="required">
                    Nome
                </Input>
                <Textarea id="description" name="description" classes="textarea" rows="4" required="required">
                    Descrição
                </Textarea>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default ProfissionContactCreate;
