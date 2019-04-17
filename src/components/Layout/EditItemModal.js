import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { hideModal } from 'actions/app';
import getCategories from 'actions/category';
import { editItem, getItems, getUserItems } from 'actions/item';
import { selectAllCategories } from 'utils/selector';
import { errMessage, successMessage } from 'utils/messages';


export class EditItemModal extends React.Component {
    state = {
      title: '',
      description: '',
      categoryID: '',
      itemID: '',
    }

    componentDidMount() {
      this.props.getCategories();
      this.setState(this.props.item);
    }

    changeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    editItem = async () => {
      const {
        title, description, categoryID, itemID,
      } = this.state;
      // Set Item for comparing with current Item from props
      const item = {
        itemID,
        title,
        description,
        categoryID,
      };
      if (title.trim() === '') {
        errMessage('Title must not be blank');
        return;
      }
      if (description.trim() === '') {
        errMessage('Description must not be blank');
        return;
      }

      await this.props.editItem(item)
        .then(message => successMessage(message))
        .catch(err => errMessage(err));
      await this.props.getUserItems()
        .catch(err => errMessage(err));
      this.props.hideModal();
    }

    render() {
      const { modal, hideModal, categories } = this.props;
      const {
        title, description, categoryID,
      } = this.state;
      const isEditItemModal = modal === 'editItem';
      return (
        <div>
          <Modal isOpen={isEditItemModal} toggle={hideModal}>
            <ModalHeader toggle={hideModal}>Edit Item</ModalHeader>
            <ModalBody>
              <div>
                <label htmlFor="title">
                    Title:
                  <input type="text" name="title" value={title} onChange={this.changeInput} />
                </label>
              </div>
              <div>
                <label htmlFor="description">
                    Description:
                  <br />
                  <textarea name="description" value={description} onChange={this.changeInput} />
                </label>
              </div>
              <div>
                <label htmlFor="categoryID">
                    Category:
                  <select name="categoryID" value={categoryID} onChange={this.changeInput}>
                    {
                        categories.map(
                          ({ id, name }) => <option key={id} value={id}>{name}</option>,
                        )
                    }
                  </select>
                </label>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.editItem}>Edit</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}

EditItemModal.propTypes = {
  modal: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  hideModal: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getUserItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
  item: state.user.currentItem,
  categories: selectAllCategories(state),
});

export default connect(mapStateToProps, {
  getCategories, getItems, getUserItems, editItem, hideModal,
})(EditItemModal);
