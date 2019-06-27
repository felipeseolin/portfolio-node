import React, {Component} from 'react';
import './styles.scss';

class ChangeColor extends Component {

    state = {
      teste: true
    };

    render() {
        let colorLight = true;

        function changeColor() {
            const $all = document.querySelectorAll('section, div, input, textarea');
            const $img = document.querySelector('#changeColor');

            if (colorLight) {
                colorLight = false;
                $img.src = process.env.PUBLIC_URL + '/assets/icons/light.svg';
                $img.title = 'Lights on';

                $all.forEach((item) => {
                    item.classList.toggle('dark');
                });
            } else {
                colorLight = true;
                $img.src = process.env.PUBLIC_URL + '/assets/icons/dark.svg';
                $img.title = 'Come to the dark side';

                $all.forEach((item) => {
                    item.classList.remove('dark');
                });
            }
        }

        return (
            <>
                <div id="color-mode">
                    <img id="changeColor" className="light" src={process.env.PUBLIC_URL + '/assets/icons/dark.svg'}
                         alt="Ativar modo escuro"
                         onClick={changeColor} title="Come to the dark side!"
                    />
                </div>
            </>
        );
    }
}

export default ChangeColor;
