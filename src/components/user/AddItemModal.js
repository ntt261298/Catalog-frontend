import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { hideModal } from '../../actions/app';
import getCategories from '../../actions/category';
import { onAddItem } from '../../actions/user';


export class AddItemModal extends React.Component {
  state = {
    title: '',
    description: '',
    categoryID: '',
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onAddItem = async () => {
    const { username, password } = this.state;
    if (!username) {
      this.setState({
        message: 'Title must not be blank',
      });
      return;
    }
    if (password.length < 6) {
      this.setState({
        message: 'Description must not be blank',
      });
      return;
    }
    await this.props.onAddItem(this.state.title, this.state.description, this.state.category, this.props.token);
    this.props.hideModal();
  }

  render() {
    const { modal, hideModal, categories } = this.props;
    const { message } = this.state;
    const isAddItemModal = modal === 'add';
    return (
      <div>
        <Modal isOpen={isAddItemModal} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Login</ModalHeader>
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
              <label htmlFor="category">
                Category:
                <select name="category">
                  {
                        categories.map(({ name, id }) => (
                          <option value={id}>{name}</option>
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
            <Button color="primary" onClick={this.onAddItem}>Add</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddItemModal.propTypes = {
  modal: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.app.modal,
  token: state.user.accessToken,
  categories: state.category.categories,
  errMessage: state.user.message,
});

export default connect(mapStateToProps, {
  getCategories, onAddItem, hideModal,
})(AddItemModal);
