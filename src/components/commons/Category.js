import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import getCategories from '../../actions/category';

const activeStyle = {
  color: 'var(--blue)',
};

export class Category extends Component {
  state = {
    active: '',
  }

  componentDidMount() {
    this.props.getCategories();
  }

  changeActive(id) {
    this.setState({
      active: id,
    });
  }

  render() {
    const { category } = this.props;
    return (
      <div className="category">
        <h2>Catagories</h2>
        <ul>
          {
            category.allIds.map((id) => {
              const { name } = category.byId[id];
              return (
                <li key={id}>
                  <Link onClick={() => this.changeActive(id)} style={this.state.active === id ? activeStyle : null} to={`/category/${id}`}>{ name }</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps, { getCategories })(Category);
