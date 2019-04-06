import React from 'react';
import { connect } from 'react-redux';
import '../../style/user.css';
import Item from './UserItem';
import Header from '../layout/Header';

export const UserPage = () => (
  <div>
    <Header />
    <div className="user-main">
      <Item type="user" id="" />
    </div>
  </div>
);

export default connect(null, null)(UserPage);
