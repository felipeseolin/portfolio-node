import React, {Component} from 'react';
import './styles.scss';

class Textarea extends Component {

    state = {
        "value": this.props.value
    };

    componentDidMount() {
        const $textarea = document.querySelector(`#${this.props.id}`);
        if (this.props.required) {
            $textarea.setAttribute('required', 'required');
        }
    }

    render() {

        return (
            <>
                <label htmlFor={this.props.id}>{this.props.children}</label>

                <textarea id={this.props.id}
                          name={this.props.id}
                          className={this.props.classes}
                          placeholder={this.props.placeholder}
                          rows={this.props.rows}
                          onChange={e => {this.setState({value: e.target.value})}}
                          value={this.state.value ? this.state.value : this.props.value}
                > </textarea>
            </>
        );
    }

}

export default Textarea;
