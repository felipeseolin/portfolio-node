import React, {Component} from "react";
import "./styles.scss";

function collapseNav() {
    const $navbar = document.querySelector('#topNavbar');

    if ($navbar.classList.contains('responsive')) {
        $navbar.classList.remove('responsive');
    } else {
        $navbar.classList.add('responsive');
    }
}

class Nav extends Component {

    componentDidMount() {
        document.querySelectorAll('#topNavbar ul li a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                const $navbar = document.querySelector('#topNavbar');
                $navbar.classList.remove('responsive');
            });
        });
    }

    render() {
        return (
            <>
                <nav id="topNavbar" className="topnav font-Oswald">
                    <ul>
                        <li>
                            <a href="#about-me" className="active font-Oswald uppercase">Felipe Seolin Bento</a>
                        </li>
                        <li>
                            <a href="#about-me">Início</a>
                        </li>
                        <li>
                            <a href="#details">Detalhes</a>
                        </li>
                        <li>
                            <a href="#skills">Habilidades</a>
                        </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <a href="#works">Trabalhos</a>
                        </li>
                        <li>
                            <a href="#more">Informações</a>
                        </li>
                        <li>
                            <a href="#contacts">Fale Comigo</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="icon" onClick={collapseNav}>&#9776;</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Nav;
