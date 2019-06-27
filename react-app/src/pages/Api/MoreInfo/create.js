import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const MoreInfoCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova subseção de maiores informações</h1>

            <form action={baseUrl + '/moreinfo'} method="post">
                <Input inputId="title" classes="input" type="text" required="required">
                    Título
                </Input>
                <Textarea id="text" name="text" classes="textarea" rows="4" required="required">
                    Texto
                </Textarea>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default MoreInfoCreate;
