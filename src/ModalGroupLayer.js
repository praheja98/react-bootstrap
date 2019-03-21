// These two containers are siblings in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

// Let's create a Modal component that is an abstraction around
// the portal API.
const ModalGroupLayer = props => {
    console.log(props.layer)
    return (
        <div id={`__modal_group_layer__${props.layer}`}>
        lets try this
            {props.children}
        </div>
    )
}

export default ModalGroupLayer;