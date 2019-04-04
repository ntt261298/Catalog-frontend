import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { showSignup, hideModal } from '../../actions/app';
import { onLogin } from '../../actions/user';


class LoginModal extends React.Component {
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

  moveToSignup = () => {
    this.props.hideModal();
    this.props.showSignup();
  }

  onLogin = () => {
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
    this.props.hideModal();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    const { modal, hideModal } = this.props;
    const { message } = this.state;
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
            { message ? (
              <div className="alert alert-danger" role="alert">
                { message }
              </div>
            ) : null}
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
