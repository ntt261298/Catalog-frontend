import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { successMessage, errMessage } from 'utils/messages';
import { showLogin, hideModal } from 'actions/app';
import { onSignup } from 'actions/user';


export class SignupModal extends React.Component {
  state = {
    username: '',
    password: '',
    message: '',
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  moveToLogin = () => {
    this.props.hideModal();
    this.props.showLogin();
  }

  onSignup = async () => {
    const { username, password } = this.state;
    if (!username) {
      errMessage('Username must not be blank');
      return;
    }
    if (password.length < 6) {
      errMessage('Password must have at least 6 characters');
      return;
    }
    this.props.onSignup(this.state.username, this.state.password)
      .then((message) => {
        successMessage(message);
        this.props.hideModal();
      })
      .catch(err => errMessage(err));
  }

  render() {
    const { modal, hideModal } = this.props;
    const { message } = this.state;
    const isSignupModal = modal === 'signup';
    return (
      <div>
        <Modal isOpen={isSignupModal} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Signup</ModalHeader>
          <ModalBody>
            <div>
              <label htmlFor="username">
                Username:
                <input type="text" name="username" onChange={this.changeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input type="password" name="password" onChange={this.changeInput} />
              </label>
            </div>
            { message ? (
              <div className="alert alert-danger" role="alert">
                { message }
              </div>
            ) : null}
            <p onClick={this.moveToLogin}>Sign in to your account?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSignup}>Signup</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SignupModal.propTypes = {
  modal: PropTypes.string.isRequired,
  showLogin: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
});

export default connect(mapStateToProps, { showLogin, hideModal, onSignup })(SignupModal);
