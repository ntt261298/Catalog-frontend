import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getItems, getCategoryItems } from '../../actions/item';


export class Item extends Component {
  componentDidMount() {
    switch (this.props.type) {
      case 'home': {
        this.props.getItems();
        return;
      }
      case 'category': {
        this.props.getCategoryItems(this.props.id);
      }
      default:
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.getCategoryItems(this.props.id);
    }
  }

  render() {
    const { type, item } = this.props;
    return (
      <div className="item">
        { type === 'home' ? (
          <Fragment>
            <h2>All Items</h2>
            <ul>
              {item.allIds.map((id) => {
                const { title, category_id } = item.byId[id];
                return (
                  <li key={id}>
                    <Link href={`category/${category_id}/item/${id}`}>
                      { title }
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Category's Items</h2>
            <ul>
              {item.categoryIds.map((id) => {
                const { title, category_id } = item.byId[id];
                return (
                  <li key={id}>
                    <Link href={`category/${category_id}/item/${id}`}>
                      { title }
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

Item.propTypes = {
  getItems: PropTypes.func.isRequired,
  getCategoryItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, getCategoryItems })(Item);
