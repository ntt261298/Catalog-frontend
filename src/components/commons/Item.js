import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getItems, getCategoryItems } from '../../actions/item';
import { selectCategoryItems, selectAllItems } from '../../utils/selector';
import { errMessage } from '../../utils/messages';


export class Item extends Component {
  componentDidMount() {
    switch (this.props.type) {
      case 'home': {
        this.props.getItems()
          .catch(err => errMessage(err));
        return;
      }
      case 'category': {
        this.props.getCategoryItems(this.props.id)
          .catch(err => errMessage(err));
        break;
      }
      default:
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.getCategoryItems(this.props.id)
        .catch(err => errMessage(err));
    }
  }

  render() {
    const { type, categoryItems, allItems } = this.props;
    return (
      <div className="item">
        { type === 'home' ? (
          <Fragment>
            <h2>All Items</h2>
            <ul>
              {allItems.map(({ id, title, category_id }) => (
                <li key={id}>
                  <Link to={`/category/${category_id}/item/${id}`}>
                    { title }
                  </Link>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Category's Items</h2>
            <ul>
              {categoryItems.map(({ id, title, category_id }) => (
                <li key={id}>
                  <Link to={`/category/${category_id}/item/${id}`}>
                    { title }
                  </Link>
                </li>
              ))}
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
  categoryItems: PropTypes.array.isRequired,
  allItems: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  categoryItems: selectCategoryItems(state),
  allItems: selectAllItems(state),
});

export default connect(mapStateToProps, { getItems, getCategoryItems })(Item);
