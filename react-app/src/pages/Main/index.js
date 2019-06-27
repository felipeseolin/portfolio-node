import React, {Fragment} from "react";
import "./styles.scss";
import Nav from "../../components/Nav";

import ChangeColor from "../../components/ChangeColor";
import Works from "../../components/Works";
import BlogPreview from "../../components/BlogPreview";
import Home from "../../components/Home";
import Details from "../../components/Details";
import Skills from "../../components/Skills";
import Section from "../../components/Section";
import MoreInfo from "../../components/MoreInfo";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";


const Main = () => {
    return (
        <Fragment>
            <Nav/>

            <Home/>

            <Details/>

            <Skills/>

            <Section
                idSec="blog"
                classes="section"
                title="Blog"
                description="Quer saber um pouco mais sobre o que eu ando pensando? Leia meu blog!"
            >
                <div className="flex flex-space-evenly">
                    <BlogPreview
                        title="Gerência da Configuração"
                        text="Um pouco sobre um trabalho de uma disciplina."
                        link="#/blog/1"
                        imgPath="/assets/imgs/gc.jpeg"
                    />
                    <BlogPreview
                        title="Frameworks Javascript"
                        text="Uma visão sobre frameworks javascript."
                        link="#/blog/2"
                        imgPath="/assets/imgs/js.png"
                    />
                    <BlogPreview
                        title="Notícia sobre IA"
                        text="A IA do Google já está vencendo jogadores em jogos FPS e isso é incrível."
                        link="#/blog/3"
                        imgPath="/assets/imgs/ia.jpg"
                    />
                </div>
            </Section>

            <Works/>

            <MoreInfo/>

            <Contacts/>

            <Footer/>

            <ChangeColor/>
        </Fragment>
    );
};

export default Main;
