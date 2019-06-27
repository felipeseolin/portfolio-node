import React from 'react';
import './styles.scss';
import Section from "../Section";
import List from "../List";

const Skills = () => (
    <>
        <Section
            idSec="skills"
            title="Habilidades"
            description="Abaixo estão listadas algumas de minhas habilidades."
            classes="green-haze font-white section"
        >
            <List classes="flex center list">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Angular 7</li>
                <li>React JS</li>
                <li>Node</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>Bitbucket</li>
                <li>Scrum</li>
                <li>Kanban</li>
                <li>Engenharia de Software</li>
                <li>Java</li>
                <li>Linguagem C</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Corel Draw</li>
                <li>Comunicação</li>
                <li>Liderança em Projetos</li>
                <li>XAMPP</li>
            </List>
        </Section>
    </>
);

export default Skills;
