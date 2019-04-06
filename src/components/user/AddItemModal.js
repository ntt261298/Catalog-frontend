import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { hideModal } from '../../actions/app';
import getCategories from '../../actions/category';
import { addItem } from '../../actions/item';


export class AddItemModal extends React.Component {
  state = {
    title: '',
    description: '',
    categoryID: '1',
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addItem = async () => {
    const { title, description, categoryID } = this.state;
    if (!title) {
      this.setState({
        message: 'Title must not be blank',
      });
      return;
    }
    if (!description) {
      this.setState({
        message: 'Description must not be blank',
      });
      return;
    }
    await this.props.addItem(title, description, categoryID, this.props.token);
    this.props.hideModal();
  }

  render() {
    const { modal, hideModal, category } = this.props;
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
                <input type="text" name="title" onChange={this.onChangeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description:
                <input type="text" name="description" onChange={this.onChangeInput} />
              </label>
            </div>
            <div>
              <label htmlFor="categoryID">
                Category:
                <select name="categoryID" onChange={this.onChangeInput}>
                  {
                        category.allIds.map(id => (
                          <option value={id}>{category.byId[id].name}</option>
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
  token: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
  token: state.user.accessToken,
  category: state.category,
});

export default connect(mapStateToProps, {
  getCategories, addItem, hideModal,
})(AddItemModal);
