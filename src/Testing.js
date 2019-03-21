import React from 'react';
import { Button, Modal,Alert } from 'react-bootstrap';
import { blockParams } from 'handlebars';
import AnotherModal from './AnotherModal.js';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import StylingCheck from './StylingCheck.css';
import Another from './Another.js';


class Testing extends React.Component {
    constructor(props, context) {
        super(props, context);



        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showAnotherModal = this.showAnotherModal.bind(this);
        this.handleCloseAnotherModal = this.handleCloseAnotherModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleTest = this.handleTest.bind(this);
        this.firstRef = React.createRef();
        this.contCheck = React.createContext({foo:'bar'});

        this.state = {
            show: false,
            showAnotherModal: false,
            testCheck:'testing'
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    showAnotherModal() {
        this.setState({ showAnotherModal: true });
    }

    handleCloseAnotherModal() {
        console.log('testing check here ');
        this.setState({ showAnotherModal: false });
    }

    closeModal() {
        console.log('test')
        this.setState({ showAnotherModal: false });
    }
    handleTest(event) {
        console.log(event.target.value);
        console.log('if test completes here ');
    }

    componentDidMount() {
        var el1 = this.firstRef;
        console.log(el1.current.innerHTML);
        var el2 = this.refs.ref2;
        console.log(el2);
    }

    render() {
        const anotherTesting = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ));
        return (
            <>
 
            {anotherTesting}
            <div className="first-container" ref={this.firstRef} onMouseMove={this.handleTest}>
                <Another />
                this is a container start 
            </div>
            {
                this.state.testCheck=='testing' ?
                <div>Test is successfull</div> 
                    : <div> Test failed </div>
            }

             <ul>
                <li> this is first item </li>
                <li> this is second item </li>
                <li> this is third item </li>

             </ul>
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
          </Button>
                {this.state.showAnotherModal ?
                    <div className="main-container" herecheck='test'>
                        <div className='praheja-testing'>
                            praheja-test here
                </div>
                        <AnotherModal check='check' show='true' onClose={this.closeModal}>
                            <div className="testing123"> test </div>
                        </AnotherModal>
                    </div>
                    :
                    <div className="end-element">
                        end task
                </div>
                }
                <Modal show={this.state.show} check='check' ref='ref2' style={{
                    border: '2px solid black',
                    width: '100%',
                    backgroundColor: 'black'
                }}>
                    <Draggable>
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
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
              </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
              </Button>
                                <Button onClick={(event) => this.showAnotherModal(event)}>
                                    Show Another Modal
              </Button>
                            </Modal.Footer>
                        </div>
                    </Draggable>
                </Modal>
            </>
        );
    }
}

export default Testing;

const styledCounter = styled.div`

border:2px solid black;

`