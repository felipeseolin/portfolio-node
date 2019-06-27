import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const SkillCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova habilidade</h1>

            <form action={baseUrl + '/skill'} method="post">
                <Input inputId="name" classes="input" type="text" required="required">
                    Nome
                </Input>
                <Textarea id="description" name="description" classes="textarea" rows="4">
                    Descrição
                </Textarea>
                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default SkillCreate;
