import React, { Component, Fragment } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class UserDropdown extends Component {
    render() {
        return (
            <Fragment>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    <div className="user-img">
                      <img src="assets/images/baseline-person-24px.svg" />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    {/* <Link>    */}
                      <DropdownItem>
                        Activities
                      </DropdownItem>
                    {/* </Link> */}
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
        )
    }
}

UserDropdown.propTypes = {
    // toggleLogin: PropTypes.func.isRequired,
    // userLogout: PropTypes.func.isRequired,
    // getSearchResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({

  })
  export default connect(null, null)(UserDropdown);