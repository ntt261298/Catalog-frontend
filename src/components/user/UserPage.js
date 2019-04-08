import React from 'react';
import '../../style/user.css';
import UserItems from './UserItems';
import Header from '../layout/Header';

export const UserPage = () => (
  <div>
    <Header />
    <div className="main">
      <UserItems />
    </div>
  </div>
);

export default UserPage;
