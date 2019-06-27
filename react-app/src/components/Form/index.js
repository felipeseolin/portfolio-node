import React from 'react';
import './styles.scss';
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

const Form = () => (
    <>
        <div id="form" className="flex flex-column">
            <h3 className="font-green-haze">Formulário</h3>

            <form action="https://formspree.io/felipe.seolin@hotmail.com" method="POST">


                <Input inputId="name" type="text" required="required" classes="input">
                    Nome *
                </Input>

                <Input inputId="email" type="email" classes="input" required="required">
                    Email *
                </Input>


                <Input inputId="subject" type="text" classes="input" required="required">
                    Assunto *
                </Input>

                <Textarea id="message" rows="10" classes="textarea" required="required">
                    Mensagem *
                </Textarea>

                <Button type="submit" classes="btn">Enviar</Button>
            </form>
        </div>
    </>
);

export default Form;
