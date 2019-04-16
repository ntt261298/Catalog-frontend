import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import getCategories from 'actions/category';
import { selectAllCategories } from 'utils/selector';
import { errMessage } from 'utils/messages';

const activeStyle = {
  color: 'var(--blue)',
};

export class Category extends Component {
  state = {
    active: '',
  }

  componentDidMount() {
    this.props.getCategories()
      .catch(err => errMessage(err));
  }

  activeCatagory = (id) => {
    this.setState({
      active: id,
    });
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
                <Link onClick={() => this.activeCatagory(id)} style={this.state.active === id ? activeStyle : null} to={`/category/${id}`}>{ name }</Link>
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
  categories: selectAllCategories(state),
});

export default connect(mapStateToProps, { getCategories })(Category);
