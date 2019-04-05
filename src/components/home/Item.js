import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getItems } from '../../actions/item';


export class Item extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <h2>All Items</h2>
        <ul>
          {
            item.allIds.map((id) => {
              const { title, category_id } = item.byId[id];
              return (
                <li key={id}>
                  <Link href={`category/${category_id}/item/${id}`}>
                    { title }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Item.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Item);
