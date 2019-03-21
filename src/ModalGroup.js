import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('root');

class ModalGroup extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.group = document.querySelector(`#__modal_group_layer__${this.props.layer}`);
        this.group.appendChild(this.el);
        
    }

    componentWillUnmount() {
       this.group.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }




}
export default ModalGroup;