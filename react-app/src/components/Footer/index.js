import React from 'react';
import './styles.scss';

const Footer = () => (
    <>
        <footer className="flex center-all flex-column blue-lagoon font-white">
            <h3>Felipe Seolin Bento</h3>
            <p>
                <a className="font-white" href="phone:+5544998483634">
                    +55 (44) 99848-3634
                </a>
            </p>
            <p>
                <a className="font-white bold" href="mailto:felipe.seolin@hotmail.com">
                    felipe.seolin@hotmail.com
                </a>
            </p>
            <p>
                <a className="font-white bold" href="mailto:bentof@alunos.utfpr.edu.br">
                    bentof@alunos.utfpr.edu.br
                </a>
            </p>
        </footer>
    </>
);

export default Footer;
