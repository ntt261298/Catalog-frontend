import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { toggleLogin, toggleSignup } from '../../actions/app';
import { onLogin } from '../../actions/user';


class LoginModal extends React.Component {
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
    this.props.toggleLogin();
    this.props.toggleSignup();
  }

  onLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    const { loginModal, toggleLogin } = this.props;
    return (
      <div>
        <Modal isOpen={loginModal} toggle={toggleLogin}>
          <ModalHeader toggle={toggleLogin}>Login</ModalHeader>
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
  loginModal: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleSignup: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginModal: state.app.loginModal,
});

export default connect(mapStateToProps, { toggleLogin, toggleSignup, onLogin })(LoginModal);
