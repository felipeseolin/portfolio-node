import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const SocialLinkCreate = () => (
    <>
        <Section classes="section">
            <h1>Novo link social</h1>

            <form action={baseUrl + '/link'} method="post" encType="multipart/form-data">
                <Input inputId="name" classes="input" type="text" required="required">
                    Nome
                </Input>
                <Input inputId="url" classes="input" type="text" required="required">
                    URL do link
                </Input>
                <Input inputId="iconPath" classes="input" type="file">
                    Ícone de identificação
                </Input>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default SocialLinkCreate;
