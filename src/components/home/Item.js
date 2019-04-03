import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import getItems from '../../actions/item';

export class Item extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="item">
        <h2>Items</h2>
        <ul>
          {
            items.map(({ id, title }) => (
              <li key={id}>{ title }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Item.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  items: state.item.items,
});

export default connect(mapStateToProps, { getItems })(Item);
