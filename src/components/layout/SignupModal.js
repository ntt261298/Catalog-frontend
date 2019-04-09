import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import toastr from 'toastr';
import { showLogin, hideModal } from '../../actions/app';
import { onSignup } from '../../actions/user';


export class SignupModal extends React.Component {
  state = {
    username: '',
    password: '',
    message: '',
  }

  onChangeInput = (e) => {
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
      this.setState({
        message: 'Username must not be blank',
      });
      return;
    }
    if (password.length < 6) {
      this.setState({
        message: 'Password must have at least 6 characters',
      });
      return;
    }
    this.props.onSignup(this.state.username, this.state.password)
      .then((err) => {
        toastr.error('af');
      })
      .catch((err) => {
        toastr.error('af');
        // console.log(err);
      });
  }

  render() {
    const { modal, errMessage, hideModal } = this.props;
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
                <input type="text" name="username" onChange={this.onChangeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input type="password" name="password" onChange={this.onChangeInput} />
              </label>
            </div>
            { message ? (
              <div className="alert alert-danger" role="alert">
                { message }
              </div>
            ) : null}
            { errMessage ? (
              <div className="alert alert-danger" role="alert">
                { errMessage }
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
  errMessage: PropTypes.string.isRequired,
  showLogin: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
  errMessage: state.user.message,
});

export default connect(mapStateToProps, { showLogin, hideModal, onSignup })(SignupModal);
