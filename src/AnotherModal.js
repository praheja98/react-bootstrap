import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class AnotherModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showingModal: true,
        data:[{name:'primary'},{name:'secondary'}]
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseAnotherModal = this.handleCloseAnotherModal.bind(this);

    }

    handleClose() {

        this.setState({ showingModal: false })
    }

    handleCloseAnotherModal() {
        console.log('test is completed');
    }

    componentDidMount() {
        console.log('debugger test 1');
        console.log(this.props.context);
        console.log('debugger test 2');
        this.setState({ showingModal: true });
    }



    render() {

        
        return (

            <div className="whole-container">
                this.state.data.map((person, index) => (
                    {this.state.data.map((person, index) => (
        <p key={index}>Hello, {person.name} </p>
    ))}
                
                        {this.props.children}

                <Modal show={this.state.showingModal} style={{
                    border: '2px solid black',
                    width: '100%',
                    backgroundColor: 'black'
                }} onClose={this.handleClose}>
                    <div className="inner-edit" style={{
                        width: '500px',
                        backgroundColor: 'grey',
                        display: 'block',
                        margin: '0px auto'
                    }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{
                        }}>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.onClose}>
                                Close
                </Button>
                            <Button variant="primary" onClick={this.props.onClose}>
                                Save Changes
                </Button>
                        </Modal.Footer>
                    </div>


                </Modal>
            </div>



        )
    }

}

export default AnotherModal;