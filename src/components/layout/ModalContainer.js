import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Loadable from 'react-loadable';

const LoginModal = Loadable({
  loader: () => import('./LoginModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
const SignupModal = Loadable({
  loader: () => import('./SignupModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});

const ModalContainer = (props) => {
  switch (props.modal) {
    case 'login':
      return <LoginModal />;
    case 'signup':
      return <SignupModal />;
    default:
      return null;
  }
};

ModalContainer.propTypes = {
  modal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
});
export default connect(mapStateToProps, null)(ModalContainer);
