import React, {
    Component
} from 'react';
import './styles.scss';
import Section from "../../components/Section";

class Blog extends Component {
    state = {
        id: 0,
        title: 'título',
        text: 'texto',
        img: {
            backgroundImage: 'url()'
        }
    };

    componentDidMount() {
        const param = this.props.match.params.id;

        this.setState({
            id: param
        });

        switch (param) {
            case '1':
                this.setState({
                    title: 'Gerência da Configuração',
                    text: 'Gostaria de compartilhar um pouco do trabalho que estou desenvolvendo na disciplina de ' +
                        'Gerência da Configuração. Durante todo o semestre todos os alunos deviam em grupo realizar ' +
                        'um ciclo de vida de um processo de software completo, desde sua montagem até mesmo a entrega e' +
                        ' manutenção do software. O grupo que fiz parte escolheu se inspirar no FDD, Feature Driven ' +
                        'Development, e no Scrum  para fazer o seu processo. Logo após, realizamos algumas mudanças, ' +
                        'desenvolvemos o diagrama BPMN e aplicamos no EPF Composer. Atualmente estamos no meio da ' +
                        'primeira iteração. Eu particularmente achei o trabalho muito interessante, pois foi a primeira ' +
                        'vez que consegui observar um processo e como se dá a gerência de configuração neste. Talvez ' +
                        'nas férias iniciarei uma conta no Medium e farei um post sobre o assunto.',
                    img: {backgroundImage: 'url("' + process.env.PUBLIC_URL + '/assets/imgs/gc.jpeg")'}
                });
                break;

            case '2':
                this.setState({
                    title: 'Frameworks Javascript',
                    text: 'Atualmente estou aprendendo React e NodeJS na disciplina de Programação Web 1 e achei estes' +
                        ' Frameworks muito interessantes, ainda tenho muito a aprender e gostaria de aprofundar ainda ' +
                        'mais os meus conhecimentos. Já tive a oportunidade de trabalhar com Angular 7 no estágio e ' +
                        'havia gostado bastante do framework. As comparações entre o Angular e o React são inevitáveis,' +
                        ' eu particularmente achei que o Angular é mais regulado e organizado, pois obriga o ' +
                        'desenvolvedor a fazer de tal forma, já o React de certo modo o deixa mais livre para ' +
                        'programar. Ainda gostaria de aprender React Native, Ionic (que pelo que vi rapidamente é ' +
                        'muito parecido com Angular 2) e Electron, sendo que nas férias espero desenvolver um app ' +
                        'desktop com o mesmo.',
                    img: {backgroundImage: 'url("' + process.env.PUBLIC_URL + '/assets/imgs/js.png")'}
                });
                break;

            case '3':
                this.setState({
                    title: 'Notícia sobre IA',
                    text: 'Vi em uma notícia do Tecmundo que a Inteligência Artificial do Google já está vencendo ' +
                        'humanos em jogos FPS. Ainda não tenho muito conhecimento sobre a área de IA, porém, me ' +
                        'interesso muito. Já vi vídeos onde IAs conseguem ganhar de humanos em outros jogos e jogos ' +
                        'mais complexos que possuem mais variáveis deve ser um desafio para esta. Acredito que a área ' +
                        'de inteligência artifical ainda tem muito a crescer e espero muito aprender sobre isto no ' +
                        ' futuro. Disponível em: ' +
                        'https://www.tecmundo.com.br/software/142082-ia-google-vence-humanos-partidas-multiplayer-jogos-fps.htm',
                    img: {backgroundImage: 'url("' + process.env.PUBLIC_URL + '/assets/imgs/ia.jpg")'}
                });
                break;

            default:
                this.setState({
                    title: 'Erro 404',
                    text: 'Não existe nenhum post neste endereço',
                    img: {backgroundImage: 'url("/assets/imgs/404.png")'}
                });
                break;
        }
    }

    render() {
        return (
            <>
                <div className="flex flex-column section">
                    <a href={process.env.PUBLIC_URL + '/#'}>Voltar para a página principal</a>
                    <h1 className="font-blue-lagoon">Blog</h1>

                    <div className="blogImage" style={this.state.img}></div>
                    <Section
                        title={this.state.title}
                    >
                        <p>{this.state.text}</p>
                    </Section>


                </div>
            </>
        );
    }

}

export default Blog;
