import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { toggleSignup, toggleLogin } from '../../actions/app';
import { onSignup } from '../../actions/user';


class SignupModal extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  moveToLogin = () => {
    this.props.toggleSignup();
    this.props.toggleLogin();
  }

  onSignup = (e) => {
    e.preventDefault();
    this.props.onSignup(this.state.username, this.state.password);
  }

  render() {
    const { signupModal, toggleSignup } = this.props;
    return (
      <div>
        <Modal isOpen={signupModal} toggle={toggleSignup}>
          <ModalHeader toggle={toggleSignup}>Signup</ModalHeader>
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
  signupModal: PropTypes.bool.isRequired,
  toggleSignup: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  signupModal: state.app.signupModal,
});

export default connect(mapStateToProps, { toggleSignup, toggleLogin, onSignup })(SignupModal);
