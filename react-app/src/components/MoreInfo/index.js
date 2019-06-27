import React from 'react';
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";

const MoreInfo = () => (
    <>
        <Section
            idSec="more"
            classes="section teal font-white"
            title="Maiores Informações"
            description="Saiba mais a respeito da minha biografia e do meu contato com a profissão"
        >
            <SubSection
                idSubSec="biography"
                title="Biografia"
            >
                <p>
                    Nasci em 09 de abril de 1999 na cidade de Terra Rica, estado do Paraná, sempre fui alguém
                    muito esforçado e responsável que procura cada vez mais melhorar a si mesmo.
                </p>
                <p>
                    Durante alguns anos de minha vida participei ativamente da paróquia da minha cidade, o que
                    contribuiu muito para o meu desenvolvimento pessoal e interpessoal, melhorando minha comunicação
                    e conhecendo novas pessoas. Neste tempo também estive a frente de movimentos e grupos,
                    desenvolvendo minha liderança.
                </p>
                <p>
                    Atualmente estou cursando Engenharia de Software da Universidade Tecnológica Federal do
                    Paraná, na cidade de Cornélio Procópio, cheguei por aqui no início de 2017. Interessei-me
                    por este curso porque sempre gostei de tecnologia, assim como também me atraia mais a parte de
                    software em um computador.
                </p>
                <p>
                    Ainda não sei muito o que esperar de meu futuro, porém gostaria de fazer mestrado para tentar
                    ingressar em uma carreira acadêmica. Também gostaria de fazer um intercâmbio e posteriormente
                    ingressar em uma empresa que me incentivasse a aprender novas tecnologias.
                </p>
            </SubSection>

            <SubSection
                idSubSec="work-review"
                title="Contato com a profisão"
            >
                <h4>Design Gráfico / WebDesign</h4>
                <p>
                    O primeiro contato profissional que possui foi com a área de design gráfico, já realizando
                    alguns trabalhos independentes. Atualmente faço menos trabalhos deste tipo, porém
                    continuo me interessando muito por esta área e gostaria de aperfeiçoar meus conhecimentos.
                    Isso foi possível graças a um curso profissionalizante de WebDesign onde aprendi
                    <span className="bold"> Photoshop, Corel Draw, Dreamweaver e Flash</span>.
                </p>

                <h4>Estágio em Desenvolvimento Web Full Stack</h4>
                <p>
                    Em maio de 2018 ingressei no estágio de desenvolvimento web na UTFPR, na Coordenadoria de Gestão de
                    Tecnologia da Informação, mais especificamente na Divisão de Projetos de Sistemas de Informação, o
                    qual eu estou até hoje. O estágio é focado em desenvolver sistemas para o próprio uso da
                    universidade, sendo assim fiz o uso de
                    <span className="bold"> PHP, PostgreSQL, HTML 5, CSS 3, JavaScript, Bootstrap,
                        Jquery, Angular 7</span>, entre outras tecnologias.
                </p>
            </SubSection>
        </Section>
    </>
);

export default MoreInfo;
