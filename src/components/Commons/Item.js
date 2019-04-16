import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ItemCard from 'components/Commons/ItemCard';
import { getItems, getCategoryItems } from 'actions/item';
import { selectCategoryItems, selectAllItems } from 'utils/selector';
import { errMessage } from 'utils/messages';


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
            <ul className="item-list">
              {allItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Category's Items</h2>
            <ul className="item-list">
              {categoryItems.map(item => (
                <ItemCard key={item.id} item={item} />
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
  id: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  categoryItems: selectCategoryItems(state),
  allItems: selectAllItems(state),
});

export default connect(mapStateToProps, { getItems, getCategoryItems })(Item);
