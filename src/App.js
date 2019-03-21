import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalGroupLayer from './ModalGroupLayer.js';
import ModalGroup from './ModalGroup.js';
import Test from './Test.js';
import MO1 from './MO1.js';
import MG1 from './MG1.js';
import Dialog from 'rc-dialog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false, showAnotherModal: false };
    this.handleclick = this.handleclick.bind(this);
    this.handleAnotherClick = this.handleAnotherClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAnotherClose = this.handleAnotherClose.bind(this);
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleAnotherClose(){
    this.setState({showAnotherModal:false});
  }

  handleclick() {
    this.setState({ showModal: true });
  }

  handleAnotherClick() {
    this.setState({ showAnotherModal: true });
  }

  handleKeyPress = (event) => {
    console.log('change in the event ');
    if (event.key == 'Enter') {
      console.log('there is change in the event ');
      this.setState({ showAnotherModal: true });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }


  render() {
    return (
      <React.Fragment>
        <MG1 />
        <div className="containerMain">
          this is sample text
           <Test>
            <Test>
              <Test>
                {this.state.showAnotherModal ? 
                 <ModalGroup layer={1}>
                 <div className="modal">
                   <div className="test">
                     <button onClick={(event) => this.handleAnotherClose(event)}> Close Modal
                       </button>
                     testing
                    </div>
                 </div>
               </ModalGroup>
                : null }
              </Test>
            </Test>
          </Test>

          <Test>
            <Test>
              <Test>
                <Test>
                  <Test>
                  {this.state.showModal ?
                    <ModalGroup layer={1}>
                                <div className="modal">
                this is a test
                   <button onClick={(event) => this.handleAnotherClick(event)}> Click me </button>
                <button onClick={(event) => this.handleClose(event)}> Close Modal
                    </button>
              </div>
                    </ModalGroup>
                  :null }
                  </Test>
                </Test>
              </Test>
            </Test>
          </Test>

          <ModalGroup layer={2}> parul raheja test here </ModalGroup>
          <button onClick={(event) => this.handleclick()}> Click </button>
 
        </div>
        ReactDOM.render(
          <Dialog visible>
            <p> first dialog </p>
          </Dialog>
        )




        <ModalGroupLayer layer={1}>
          <div id="testing"> testing </div>
          <ModalGroupLayer layer={2}>
            final test check
          </ModalGroupLayer>
        </ModalGroupLayer>
      </React.Fragment>
    );
  }
}

export default App;
