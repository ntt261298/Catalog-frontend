import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import getCategories from '../../actions/category';

class Category extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="category">
        <h2>Catagories</h2>
        <ul>
          {
            categories.map(({ id, name }) => (
              <li key={id}>{ name }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = state => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { getCategories })(Category);
