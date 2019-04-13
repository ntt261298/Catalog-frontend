import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { showSignup, hideModal } from '../../actions/app';
import { onLogin } from '../../actions/user';
import { errMessage, successMessage } from '../../utils/messages';


export class LoginModal extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  moveToSignup = () => {
    this.props.hideModal();
    this.props.showSignup();
  }

  onLogin = async () => {
    const { username, password } = this.state;
    if (!username) {
      errMessage('Username must not be blank');
      return;
    }
    if (password.length < 6) {
      errMessage('Password must have at least 6 characters');
      return;
    }
    this.props.onLogin(this.state.username, this.state.password)
      .then((message) => {
        successMessage(message);
        this.props.hideModal();
      })
      .catch(err => errMessage(err));
  }

  render() {
    const { modal, hideModal } = this.props;
    const isLoginModal = modal === 'login';
    return (
      <div>
        <Modal isOpen={isLoginModal} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Login</ModalHeader>
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
            <p onClick={this.moveToSignup}>Create new account?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onLogin}>Login</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  modal: PropTypes.string.isRequired,
  showSignup: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
});

export default connect(mapStateToProps, {
  showSignup, hideModal, onLogin,
})(LoginModal);
