import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/home.css';
import Category from './Category';
import Item from './Item';
import LoginModal from './../layout/LoginModal';
import SignupModal from './../layout/SignupModal';
import { PropTypes } from 'prop-types';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <LoginModal />
                <SignupModal />
                <Category />
                <Item />
            </div>
        )
    }
}

Home.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(Home);