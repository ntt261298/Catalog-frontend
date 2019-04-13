import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import { selectUserItems } from '../../utils/selector';
import { getUserItems, deleteItem } from '../../actions/item';
import { setCurrentItem } from '../../actions/user';
import {
  hideModal, showAddItem, showEditItem, showDeleteItem,
} from '../../actions/app';
import plus from '../../assets/images/add-button.svg';
import { errMessage, successMessage } from '../../utils/messages';


export class UserItems extends Component {
  state = {
    categoryID: '',
    itemID: '',
  }

  componentDidMount() {
    this.props.getUserItems()
      .catch(err => errMessage(err));
  }

  onShowEditItem(id, title, description, categoryID) {
    const item = {
      itemID: id, title, description, categoryID,
    };
    this.props.showEditItem();
    this.props.setCurrentItem(item);
  }

  onShowDeleteItem(categoryID, itemID) {
    this.setState({
      categoryID,
      itemID,
    });
    this.props.showDeleteItem();
  }

  onDeleteItem = async () => {
    await this.props.deleteItem(this.state.categoryID, this.state.itemID)
      .then(message => successMessage(message))
      .catch(err => errMessage(err));
    await this.props.getUserItems()
      .catch(err => errMessage(err));
    this.props.hideModal();
  }

  render() {
    const {
      items, showAddItem, modal, hideModal,
    } = this.props;
    const isDeleteItemModal = modal === 'deleteItem';
    return (
      <div className="user-items">
        {
          <Fragment>
            <Modal isOpen={isDeleteItemModal} toggle={hideModal}>
              <ModalHeader toggle={hideModal}>Delete item?</ModalHeader>
              <ModalBody>
                <Button color="danger" onClick={this.onDeleteItem}>Delete</Button>
              </ModalBody>
            </Modal>
            <div className="main-user-header">
              <h2>User's Items</h2>
              <img onClick={showAddItem} src={plus} alt="" />
            </div>
            <ul>
              {items.map(({
                title, description, category_id, id,
              }) => (
                <li key={id} className="user-item">
                  <div className="edit-delete">
                    <span
                      className="edit"
                      onClick={
                          () => this.onShowEditItem(id, title, description, category_id)
                        }
                    >
                        edit
                    </span>
                    <span
                      className="delete"
                      onClick={
                        () => this.onShowDeleteItem(category_id, id)
                      }
                    >
                        delete
                    </span>
                  </div>
                  <Link to={`/category/${category_id}/item/${id}`}>
                    <h3>{ title }</h3>
                  </Link>
                  <p>{ description }</p>
                </li>
              ))}
            </ul>
          </Fragment>
        }
      </div>
    );
  }
}

UserItems.propTypes = {
  getUserItems: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  showAddItem: PropTypes.func.isRequired,
  showEditItem: PropTypes.func.isRequired,
  showDeleteItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  modal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  items: selectUserItems(state),
  modal: state.app.modal,
});

export default connect(mapStateToProps, {
  getUserItems, setCurrentItem, showAddItem, showDeleteItem, showEditItem, deleteItem, hideModal,
})(UserItems);
