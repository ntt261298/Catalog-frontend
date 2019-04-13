import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { selectItem } from 'utils/selector';
import { getItem } from 'actions/item';
import { errMessage } from 'utils/messages';


export class ItemDetail extends Component {
  state = {
    categoryID: '',
    itemID: '',
  }

  componentDidMount() {
    const { categoryID, itemID } = this.props.params;
    this.props.getItem(categoryID, itemID)
      .catch(err => errMessage(err));
  }

  render() {
    const { item } = this.props;
    return (
      <div className="main">
        <h2>Item Detail</h2>
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
  item: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: selectItem(state),
});

export default connect(mapStateToProps, {
  getItem,
})(ItemDetail);
