import React from 'react';
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { onLogout } from 'actions/user';
import userImage from 'assets/images/baseline-person-24px.svg';

export const UserDropdown = (props) => {
  const { onLogout } = props;
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        <div className="user-img">
          <img src={userImage} alt="user" />
        </div>
      </DropdownToggle>
      <DropdownMenu>
        <Link to="/me/items">
          <DropdownItem>
          Activities
          </DropdownItem>
        </Link>
        <DropdownItem divider />
        <DropdownItem className="logout" onClick={onLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

UserDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, { onLogout })(UserDropdown);
