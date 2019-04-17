import React from 'react';
import Loadable from 'react-loadable';


export const LoginModal = Loadable({
  loader: () => import('components/Layout/LoginModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const SignupModal = Loadable({
  loader: () => import('components/Layout/SignupModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const AddItemModal = Loadable({
  loader: () => import('components/Layout/AddItemModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const EditItemModal = Loadable({
  loader: () => import('components/Layout/EditItemModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
