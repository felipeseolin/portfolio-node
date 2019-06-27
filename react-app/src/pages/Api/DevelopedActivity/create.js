import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const DevelopedActivityCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova atividade desenvolvida</h1>

            <form action={baseUrl + '/developedactivity'} method="post">
                <Input inputId="activity" classes="input" type="text" required="required">Atividade</Input>
                <Textarea id="description" name="description" classes="textarea" rows="4">
                    Descrição
                </Textarea>
                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default DevelopedActivityCreate;
