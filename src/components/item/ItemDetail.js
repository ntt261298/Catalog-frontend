import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import { selectItem } from '../../utils/selector';
import { getItem, deleteItem } from '../../actions/item';
import { hideModal } from '../../actions/app';


export class ItemDetail extends Component {
  state = {
    categoryID: '',
    itemID: '',
  }

  componentDidMount() {
    const { categoryID, itemID } = this.props.params;
    this.props.getItem(categoryID, itemID);
  }

  onDeleteItem = () => {
    this.props.deleteItem(this.state.categoryID, this.state.itemID, this.props.token);
    this.props.hideModal();
  }

  render() {
    const { item, modal, hideModal } = this.props;
    const isDeleteItemModal = modal === 'deleteItem';
    return (
      <div className="main">
        <h2>Item Detail</h2>
        <Modal isOpen={isDeleteItemModal} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Delete item?</ModalHeader>
          <ModalBody>
            <Button color="danger" onClick={this.onDeleteItem}>Delete</Button>
          </ModalBody>
        </Modal>
        <ul>
          { item.map(({ id, title, description }) => (
            <li key={id} className="user-item">
              <h3>{ title }</h3>
              <p>{ description }</p>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

ItemDetail.propTypes = {
  getItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  modal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  item: selectItem(state),
  token: state.user.accessToken,
  modal: state.app.modal,
});

export default connect(mapStateToProps, {
  getItem, deleteItem, hideModal,
})(ItemDetail);
