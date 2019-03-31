import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Category extends Component {
    render() {
        return (
            <div className="category">
                <h2>Catagories</h2>
                <ul>
                    <li><a href=""></a>Sport</li>
                    <li><a href=""></a>Book</li>
                    <li><a href=""></a>Furniture</li>
                    <li><a href=""></a>Cloth</li>
                    <li><a href=""></a>Technology</li>
                    <li><a href=""></a>Food</li>
                </ul>
            </div>
        )
    }
}

Category.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(Category);