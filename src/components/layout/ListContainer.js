import React from 'react';
import Loadable from 'react-loadable';


export const LoginModal = Loadable({
  loader: () => import('./LoginModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const SignupModal = Loadable({
  loader: () => import('./SignupModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const AddItemModal = Loadable({
  loader: () => import('../user/AddItemModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
export const EditItemModal = Loadable({
  loader: () => import('../user/EditItemModal'),
  loading: () => <div>Loading...</div>,
  delay: 200,
});
