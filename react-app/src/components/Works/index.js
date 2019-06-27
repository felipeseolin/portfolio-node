import React, {Component} from "react";
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";

class Works extends Component {

    state = {
        imgSize: 21
    };

    render() {
        let imgs = [];

        for (let i = 1; i <= this.state.imgSize; i++) {
            const src = `${process.env.PUBLIC_URL}/assets/imgs/design${i}.jpg`;
            imgs.push(<img key={i} src={src} alt={i}/>);
        }
        return (
            <>
                <Section
                    idSec="works"
                    classes="section"
                    title="Trabalhos Desenvolvidos"
                    description="Aqui estão alguns dos trabalhos que já desenvolvi e também os que estou desenvolvendo."
                >
                    <SubSection
                        title="Websites"
                    >
                        <p>
                            No meu estágio tive a oportunidade de trabalhar com alguns sistemas Web para a universidade
                            e
                            também
                            já me aventurei fazendo alguns sites.
                        </p>
                        <div className="flex center flex-space-evenly works-imgs">
                            <a href="https://apoio.cp.utfpr.edu.br/Intranet/" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/assets/imgs/apoio.png'} alt="Sistemas de Apoio ao Câmpus"/>
                            </a>
                            <a href="https://apoio.cp.utfpr.edu.br/apptv/" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/assets/imgs/tv.png'} alt="TV do Câmpus"/>
                            </a>
                            <a href="https://felipeseolin.github.io/abrindo-portas/" target="_blank"
                               rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/assets/imgs/abrindo-portas.png'} alt="Abrindo Portas"/>
                            </a>
                        </div>
                    </SubSection>

                    <SubSection
                        title="Design Gráfico"
                    >
                        <p>
                            Com Design Gráfico sempre realizei trabalhos sem intenções lucrativas. Já fiz trabalhos para
                            projetos
                            da universidade, igrejas e entre outros.
                        </p>
                        <div className="flex center flex-space-evenly works-imgs">
                            {imgs}
                        </div>
                    </SubSection>

                </Section>
            </>
        )
    }
}

export default Works;
