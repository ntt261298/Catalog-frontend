import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { hideModal } from 'actions/app';
import getCategories from 'actions/category';
import { addItem, getItems, getUserItems } from 'actions/item';
import { selectAllCategories } from 'utils/selector';
import { errMessage, successMessage } from 'utils/messages';

export class AddItemModal extends React.Component {
  state = {
    title: '',
    description: '',
    categoryID: '1',
  }

  componentDidMount() {
    this.props.getCategories();
  }


  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addItem = async () => {
    const { title, description, categoryID } = this.state;
    if (title.trim() === '') {
      errMessage('Title must not be blank');
      return;
    }
    if (description.trim() === '') {
      errMessage('Description must not be blank');
      return;
    }
    await this.props.addItem(title, description, categoryID)
      .then(message => successMessage(message))
      .catch(err => errMessage(err));
    await this.props.getUserItems()
      .catch(err => errMessage(err));
    this.props.hideModal();
  }

  render() {
    const { modal, hideModal, categories } = this.props;
    const { message } = this.state;
    const isAddItemModal = modal === 'addItem';
    return (
      <div>
        <Modal isOpen={isAddItemModal} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Add Item</ModalHeader>
          <ModalBody>
            <div>
              <label htmlFor="title">
                Title:
                <input type="text" name="title" onChange={this.changeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description:
                <br />
                <textarea name="description" onChange={this.changeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="categoryID">
                Category:
                <select name="categoryID" onChange={this.changeInput}>
                  {
                        categories.map(({ id, name }) => (
                          <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select>
              </label>
            </div>
            { message ? (
              <div className="alert alert-danger" role="alert">
                { message }
              </div>
            ) : null}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addItem}>Add</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddItemModal.propTypes = {
  modal: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  hideModal: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getUserItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
  categories: selectAllCategories(state),
});

export default connect(mapStateToProps, {
  getCategories, getItems, getUserItems, addItem, hideModal,
})(AddItemModal);
