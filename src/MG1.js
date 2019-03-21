import ModalGroup from './ModalGroup.js';
import React from 'react';

const MG1 = props => {
    return (
    <ModalGroup layer={1}>
    {props.children}
    </ModalGroup>
    )
}


export default MG1;