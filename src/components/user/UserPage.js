import React from 'react';
import { connect } from 'react-redux';
import '../../style/user.css';
import UserItem from './UserItem';
import Header from '../layout/Header';

export const UserPage = () => (
  <div>
    <Header />
    <div className="main">
      <UserItem />
    </div>
  </div>
);

export default connect(null, null)(UserPage);
