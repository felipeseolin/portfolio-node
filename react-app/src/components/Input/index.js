import React, {Component} from 'react';
import './styles.scss';

class Input extends Component {

    componentDidMount() {
        const $input = document.querySelector(`#${this.props.inputId}`);
        if (this.props.required) {
            $input.setAttribute('required', 'required');
        }
    }

    render() {

        return (
            <>
                <label htmlFor={this.props.inputId}>{this.props.children}</label>
                <input id={this.props.inputId} name={this.props.inputId} className={this.props.classes}
                       type={this.props.type} placeholder={this.props.placeholder}
                       value={this.props.value}
                />
            </>
        );
    }

}

export default Input;
