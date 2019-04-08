import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import { getUserItems, deleteItem } from '../../actions/item';
import { hideModal, showAddItem, showDeleteItem } from '../../actions/app';
import plus from '../../assets/images/add-button.svg';


export class UserItem extends Component {
  state = {
    categoryID: '',
    itemID: '',
  }

  componentDidMount() {
    this.props.getUserItems(this.props.token);
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps !=== this.props.item) {
  //
  //   }
  // }

  onShowDeleteItem(categoryID, itemID) {
    this.setState({
      categoryID,
      itemID,
    });
    this.props.showDeleteItem();
  }

  onDeleteItem = async () => {
    await this.props.deleteItem(this.state.categoryID, this.state.itemID, this.props.token);
    await this.props.getUserItems(this.props.token);
    this.props.hideModal();
  }

  render() {
    const {
      item, showAddItem, modal, hideModal,
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
            {item.userIds.map((id) => {
              const { title, description, category_id } = item.byId[id];
              return (
                <ul>
                  <li key={id} className="user-item">
                    <div className="edit-delete">
                      <span>edit</span>
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
                </ul>
              );
            })}
          </Fragment>
        }
      </div>
    );
  }
}

UserItem.propTypes = {
  getUserItems: PropTypes.func.isRequired,
  showAddItem: PropTypes.func.isRequired,
  showDeleteItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
  items: getUserItems(state),
  token: state.user.accessToken,
  modal: state.app.modal,
});

const getUserItems = state => state.item.userIds.map(id => state.item.byId[id]);

export default connect(mapStateToProps, {
  getUserItems, showAddItem, showDeleteItem, deleteItem, hideModal,
})(UserItem);
