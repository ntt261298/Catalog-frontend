import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';


class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    return (
      <div>
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
          <ModalBody>
            <div>
              <label htmlFor="username">
                Username:
                <input type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input type="text" />
              </label>
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

SignupModal.propTypes = {
  className: PropTypes.string,
};

SignupModal.defaultProps = {
  className: 'modal',
};

export default SignupModal;
