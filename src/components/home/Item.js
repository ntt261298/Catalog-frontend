import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                <h2>All Items</h2>
                <ul>
                    <li><a href=""></a>Sport</li>
                    <li><a href=""></a>Book</li>
                    <li><a href=""></a>Furniture</li>
                    <li><a href=""></a>Cloth</li>
                    <li><a href=""></a>Technology</li>
                    <li><a href=""></a>Food</li>
                </ul>
                <div class="numeric">
                    <img src="assets/images/baseline-chevron_left-24px.svg" alt=""/>
                    <img src="assets/images/page-first.svg" alt=""/>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <img src="assets/images/page-last.svg" alt=""/>
                    <img src="assets/images/baseline-chevron_right-24px.svg" alt=""/>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })

export default connect(null, null)(Item);
