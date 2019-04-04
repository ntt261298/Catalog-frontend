import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import getCategories from '../../actions/category';

export class Category extends Component {
  componentDidMount() {
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
              <li key={id}>
                <Link to={`/category/${id}`}>{ name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { getCategories })(Category);
