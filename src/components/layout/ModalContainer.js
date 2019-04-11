import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  LoginModal, SignupModal, AddItemModal, EditItemModal,
} from './ListContainer';

export const ModalContainer = (props) => {
  switch (props.modal) {
    case 'login':
      return <LoginModal />;
    case 'signup':
      return <SignupModal />;
    case 'addItem':
      return <AddItemModal />;
    case 'editItem':
      return <EditItemModal />;
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
