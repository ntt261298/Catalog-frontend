import React from 'react';
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const UserDropdown = () => (
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
      <DropdownItem>Logout</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default connect(null, null)(UserDropdown);
