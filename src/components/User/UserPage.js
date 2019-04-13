import React from 'react';
import 'style/user.css';
import UserItems from 'components/User/UserItems';
import Header from 'components/Layout/Header';

export const UserPage = () => (
  <div>
    <Header />
    <div className="main">
      <UserItems />
    </div>
  </div>
);

export default UserPage;
