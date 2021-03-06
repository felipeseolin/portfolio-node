import React, {Component} from 'react';
import './styles.scss';
import Section from "../../components/Section";

class Api extends Component {

    render() {
        return (
            <>
                <div className="flex flex-column section">
                    <a href={process.env.PUBLIC_URL + '/#'}>
                        Voltar para a página principal
                    </a>
                    <h1 className="font-blue-lagoon"> API </h1>
                    <p>Mude os dados do front-end aqui.</p>

                    <Section idSec={"biografia"} title={"Biografia"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/biography/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/biography'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"cv"} title={"Currículo"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/cv/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/cv'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"atividades-desenvolvidas"} title={"Atividades Desenvolvidas"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/developedactivity/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/developedactivity'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"formacao"} title={"Formação"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/formation/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/formation'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"interesses"} title={"Interesses"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/interest/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/interest'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"idiomas"} title={"Idiomas"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/language/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/language'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"mini-biografia"} title={"Mini Biografia"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/minibiography/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/minibiography'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"mais-info"} title={"Maiores Informações"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/moreinfo/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/moreinfo'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"imagem-perfil"} title={"Imagem de Perfil"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/profilepicture/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/profilepicture'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"contatos-profissionais"} title={"Contato Profissional"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/profissioncontact/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/profissioncontact'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"projetos"} title={"Projeto"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/project/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/project'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"habilidade"} title={"Habilidade"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/skill/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/skill'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                    <Section idSec={"Links"} title={"Links para redes sociais"}>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/link/create'}>
                                Criar Novo
                            </a>
                        </p>
                        <p>
                            <a href={process.env.PUBLIC_URL + '#/api/link'}>
                                Listar Todos
                            </a>
                        </p>
                    </Section>

                </div>
            </>
        );
    }

}

export default Api;
