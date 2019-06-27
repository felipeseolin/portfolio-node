import React from 'react';
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import { baseUrl } from "../../../services/api";
import Input from "../../../components/Input";

const InterestCreate = () => (
    <>
        <Section classes="section">
            <h1>Nova Imagem de Perfil</h1>

            <form action={baseUrl + '/profilepicture'} method="post" encType="multipart/form-data">
                <Input inputId="name" classes="input" type="text">
                    Nome
                </Input>
                <Textarea id="description" name="description" classes="textarea" rows="4">
                    Descrição
                </Textarea>
                <Input inputId="path" classes="input" type="file" required="required">
                    Imagem
                </Input>

                <Button id="submit" classes="btn" type="submit">Salvar</Button>
            </form>
        </Section>
    </>
);

export default InterestCreate;
