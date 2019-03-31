import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
          <ModalBody>
            <div>
                <label>Username: </label>
                <input type="text"/>
            </div>  
            <div>
                <label>Password: </label>
                <input type="text"/>
            </div> 
            <p>Sign in to your account?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sign up</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;