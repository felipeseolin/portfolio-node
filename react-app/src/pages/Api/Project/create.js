import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const ProjectCreate = () => (
    <>
        <Section classes="section">
            <h1>Novo projeto</h1>

            <form action={baseUrl + '/project'} method="post" encType="multipart/form-data">
                <Input inputId="name" classes="input" type="text" required="required">
                    Nome
                </Input>
                <Input inputId="date" classes="input" type="date" required="required">
                    Data
                </Input>
                <Textarea id="description" name="description" classes="textarea" rows="4" required="required">
                    Descrição
                </Textarea>
                <Input inputId="link" classes="input" type="text">
                    URL
                </Input>
                <Input inputId="imgPath" classes="input" type="file">
                    Imagem
                </Input>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default ProjectCreate;
