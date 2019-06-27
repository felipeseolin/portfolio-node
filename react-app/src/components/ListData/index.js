import React, {Component} from 'react';
import './styles.scss';
import api from "../../services/api";

class ListData extends Component {

    del = async () => {
        api.delete(this.props.del);
        window.location.reload();
    };

    render() {
        const {title, children, editdel} = this.props;

        return (
            <div className="list-data flex flex-column">
                <h3>{title}</h3>
                {children}
                <div className="flex">
                    <a href={editdel}>Editar</a>
                    <a onClick={this.del}>Deletar</a>
                </div>
            </div>
        );
    }
}

export default ListData;
