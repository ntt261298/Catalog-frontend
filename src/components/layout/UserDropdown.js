import React from 'react';
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { onLogout } from '../../actions/user';

// import { Link } from 'react-router-dom';

const UserDropdown = (props) => {
  const { onLogout } = props;
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        <div className="user-img">
          <img src="assets/images/baseline-person-24px.svg" alt="user" />
        </div>
      </DropdownToggle>
      <DropdownMenu>
        {/* <Link>    */}
        <DropdownItem>
          Activities
        </DropdownItem>
        {/* </Link> */}
        <DropdownItem divider />
        <DropdownItem onClick={onLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

UserDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, { onLogout })(UserDropdown);
